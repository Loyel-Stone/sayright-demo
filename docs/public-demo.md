# SayRight 公开演示版说明

## 目的

SayRight v1.0 以公开演示版形式发布，目标是让任何人在不配置后端的情况下，打开页面就能体验核心的「中式英文 → 自然英文」纠错效果。

演示模式覆盖 18 个常见中式英文示例，涵盖 6 种使用场景，足以展示产品的核心价值。

## 演示模式 vs 真实 AI 模式

| | 演示模式 | 真实 AI 模式 |
|------|------|------|
| 依赖 | 无，纯静态文件 | `node server.js` + `.env` + DeepSeek API Key |
| 体验内容 | 18 个内置示例 | 任意自定义英文句子 |
| 结果来源 | 本地预设数据 | DeepSeek API 实时分析 |
| 适用场景 | 录屏演示、社交媒体传播、首次体验 | 日常使用、真实纠错需求 |
| 启动方式 | `python3 -m http.server 8000` | `npm start` |
| 错误库保存 | ✅ | ✅ |

## 适合社交媒体传播的使用方式

### 录屏演示

1. 用 `python3 -m http.server 8000` 托管项目目录
2. 打开 http://127.0.0.1:8000/index.html
3. 展开「常见中式英文示例」
4. 依次点击示例 → 开始纠错 → 展示对比卡片
5. 点击「📣 复制分享文案」→ 粘贴到微博/朋友圈/X

### 分享文案格式

```
我用 SayRight 改了一句中式英文：

❌ 原句：
I very like this app.

✅ 自然表达：
I love this app.

🎯 场景最佳表达（通用）：
I really enjoy using this app — it's been super helpful.

SayRight：把中式英文改成自然英文。
```

## 公开部署建议

### 可以上传的文件

如果你将 SayRight 部署到 GitHub Pages 或其他静态托管服务，以下文件可以公开：

```
index.html       — 前端页面（不含 API Key）
data_db.json     — 例句数据库
README.md        — 项目说明
docs/            — 文档目录
```

### 绝对不能上传的内容

以下内容包含敏感信息或不应公开：

| 内容 | 原因 |
|------|------|
| `.env` | 包含真实 API Key，已在 `.gitignore` 中 |
| `server.js`（如果含硬编码 Key） | 当前 server.js 不包含 Key，但部署前务必检查 |
| `node_modules/` | 已在 `.gitignore` 中 |
| 任何包含真实 DeepSeek API Key 的文件 | Key 泄露会导致费用损失 |

### 推荐的公开 demo 仓库结构

```
sayright-demo/
├── index.html
├── data_db.json
├── README.md
└── docs/
    ├── public-demo.md
    ├── product-roadmap.md
    ├── privacy.md
    └── desktop-plan.md
```

## 安全提醒

- 绝对不要在 `index.html` 或任何公开文件中硬编码 API Key
- 公开部署的页面中，`fetch('/api/fix')` 会失败（因为无后端），但演示模式会自动接管
- 如果未来需要开放真实 AI 体验，必须：
  - 搭建后端服务
  - 实现 API 调用额度限制
  - 添加滥用防护（rate limiting、验证码）
  - 考虑用户认证
- 当前 SayRight 不包含上述任一项，因此不适合开放真实 AI API

## 从演示到完整使用

用户如果想使用真实 AI 纠错（自定义任意英文），有两种方式：

1. **自己部署**：clone 仓库 → `npm install` → 创建 `.env` → `npm start`
2. **等待桌面版**：桌面版将支持在设置界面填写自己的 API Key，无需手动编辑 `.env`

两种方式都不需要运营方（开发者）承担 AI 调用成本。
