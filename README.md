# em-captcha

一个基于 Node.js + Express 的东财验证码相关本地演示项目。项目包含静态前端页面和后端代理服务，用于本地学习接口转发、会话 cookie 缓存、JSONP 解析等基础实现。

## 说明

- 本项目仅用于学习和研究，不得用于任何违法、违规或未授权的用途。
- 代码中的上游地址、请求参数和代理逻辑均面向本地调试场景。
- 如需在真实环境中使用，请先确认目标站点的服务条款、授权范围和法律风险。

## 功能

- 提供一个本地 Web 页面，便于查看前端交互和请求日志
- 使用 Express 启动本地服务，并托管 `public/` 下的静态资源
- 代理部分上游请求，并在服务端缓存会话 cookie
- 解析上游返回的 JSONP 数据，转换为更易处理的 JSON

## 目录结构

```text
.
├── deploy/
│   ├── publish-sim-portfolio.sh
│   └── sync-sim-portfolio-web.sh
├── package.json
├── server.js
└── public/
    ├── app.js
    ├── index.html
    ├── main.js
    ├── nid18.js
    └── sim-portfolio/
        ├── index.html
        └── 10000000000331019/
```

## 模拟组合策略报告（静态页）

由 auto-trade 生成后发布到 `public/sim-portfolio/`：

```bash
./deploy/publish-sim-portfolio.sh
./deploy/sync-sim-portfolio-web.sh          # 同步到远程 106.14.189.80:9001
./deploy/sync-sim-portfolio-web.sh --with-server   # 含 server.js 更新并 pm2 restart
```

访问：`http://localhost:9001/sim-portfolio/10000000000331019/`

## 运行方式

1. 安装依赖

```bash
npm install
```

2. 启动服务

```bash
npm start
```

3. 开发模式启动

```bash
npm run dev
```

默认会启动在 `http://localhost:9001`，如需修改端口，可设置 `PORT` 环境变量。

## 依赖

- `express`
- `axios`

## 代理接口

| 路由 | 上游 | 说明 |
|------|------|------|
| `GET /api/kline` | push2his …/kline/get | K 线 |
| `GET /api/stock` | push2 …/stock/get | 实时行情（指数广度 f113–115 等） |
| `GET /api/quote?host=push2\|push2his&path=…` | push2 / push2his 任意 GET | ulist / slist / updown 等 |
| `GET /api/checkuser` | 东财 checkuser | 供 auto-trade 轮询 block（页面按钮不依赖） |

页面按钮 **▶ 启动流程**：依次拉 K 线 + stock/get；**直接获取K线** / **直接获取stock/get**：单独测试。失败均 **直接进入验证码**（不查 `block` true/false），验证通过后自动重试。
