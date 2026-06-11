#!/usr/bin/env bash
# 将 sim-portfolio 静态页同步到远程 em-captcha 服务器（pm2: em-captcha）
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EM_CAPTCHA_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

REMOTE_USER="${EM_CAPTCHA_REMOTE_USER:-root}"
REMOTE_HOST="${EM_CAPTCHA_REMOTE_HOST:-106.14.189.80}"
REMOTE_PATH="${EM_CAPTCHA_REMOTE_PATH:-/home/em-captcha}"
PM2_NAME="${EM_CAPTCHA_PM2_NAME:-em-captcha}"
EM_CAPTCHA_PORT="${EM_CAPTCHA_PORT:-9001}"
DO_RESTART=false

DRY_RUN=false
SYNC_SERVER=false

usage() {
  cat <<'EOF'
用法: deploy/sync-sim-portfolio-web.sh [选项]

将 public/sim-portfolio/ 同步到远程 em-captcha，可选同步 server.js 并重启 pm2。

选项:
  -n, --dry-run       预览 rsync，不实际上传
  --with-server       同时同步 server.js 并 pm2 restart
  -h, --help          显示帮助

环境变量:
  EM_CAPTCHA_REMOTE_USER   默认 root
  EM_CAPTCHA_REMOTE_HOST   默认 106.14.189.80
  EM_CAPTCHA_REMOTE_PATH   默认 /home/em-captcha
  EM_CAPTCHA_PM2_NAME      默认 em-captcha

示例:
  ./deploy/publish-sim-portfolio.sh
  ./deploy/sync-sim-portfolio-web.sh
  ./deploy/sync-sim-portfolio-web.sh --with-server
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -n | --dry-run) DRY_RUN=true; shift ;;
    --with-server) SYNC_SERVER=true; DO_RESTART=true; shift ;;
    -h | --help) usage; exit 0 ;;
    *) echo "未知参数: $1" >&2; usage; exit 1 ;;
  esac
done

RSYNC_OPTS=(-avz --delete)
if $DRY_RUN; then
  RSYNC_OPTS+=(--dry-run -n)
fi

TARGET="$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/public/sim-portfolio/"
echo "同步 static → $TARGET"
rsync "${RSYNC_OPTS[@]}" \
  "$EM_CAPTCHA_ROOT/public/sim-portfolio/" \
  "$TARGET"

if $SYNC_SERVER; then
  echo "同步 server.js → $REMOTE_PATH/server.js"
  rsync "${RSYNC_OPTS[@]}" \
    "$EM_CAPTCHA_ROOT/server.js" \
    "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/server.js"
fi

if $DO_RESTART && ! $DRY_RUN; then
  echo "重启 pm2 $PM2_NAME (PORT=$EM_CAPTCHA_PORT) ..."
  ssh "$REMOTE_USER@$REMOTE_HOST" "PORT=$EM_CAPTCHA_PORT pm2 restart $PM2_NAME --update-env"
fi

echo "完成。访问: http://$REMOTE_HOST:$EM_CAPTCHA_PORT/sim-portfolio/"
