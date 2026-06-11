#!/usr/bin/env bash
# 从 auto-trade 复制模拟组合策略报告到 em-captcha/public/sim-portfolio/
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EM_CAPTCHA_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
AUTO_TRADE_ROOT="${AUTO_TRADE_ROOT:-$(cd "$EM_CAPTCHA_ROOT/../auto-trade" 2>/dev/null && pwd || true)}"
ZH="${SIM_PORTFOLIO_ZH:-10000000000331019}"

SRC="${SIM_PORTFOLIO_SRC:-$AUTO_TRADE_ROOT/logs/sim_portfolio_strategy/zh=$ZH}"
DEST="$EM_CAPTCHA_ROOT/public/sim-portfolio/$ZH"

if [[ ! -d "$SRC" ]]; then
  echo "错误: 未找到报告目录 $SRC" >&2
  echo "请先在 auto-trade 运行:" >&2
  echo "  .venv/bin/python cli/tools/analyze_sim_portfolio_strategy.py $ZH" >&2
  exit 1
fi

mkdir -p "$DEST"
cp "$SRC/report.html" "$DEST/index.html"
cp "$SRC/report.html" "$DEST/report.html"
cp "$SRC/summary.txt" "$SRC/round_trips.parquet" "$SRC/forward_returns.parquet" "$DEST/"

echo "已发布到 $DEST"
echo "本地访问: http://localhost:\${PORT:-9001}/sim-portfolio/$ZH/"
