# SayRight

英语句子学习工具 — 支持场景化英文改写，用 AI 纠错提升写作，所有数据保存在本地浏览器中。

## 截图

> 运行 `npm start` 后打开 http://localhost:3000 即可看到以下界面。

| 首页浏览 | AI 纠错 |
|:---:|:---:|
| ![首页](screenshots/home.png) | ![AI 纠错](screenshots/fix.png) |

| 收藏面板 | 复习模式 |
|:---:|:---:|
| ![收藏](screenshots/favorites.png) | ![复习](screenshots/review.png) |

## 功能亮点

**句子学习**
- 5000 条中英对照句子，来自 Tatoeba Project
- 按等级（A1 / A2）和场景（日常 / 社交 / 工作 / 旅行）筛选
- 中英文关键词搜索
- 前进 / 后退 / 随机跳转，支持键盘快捷键（← → R）

**AI 纠错**
- **两种运行模式**：真实 AI 模式（需 `npm start` + API Key）和演示模式（无需后端，点击内置示例即可体验预设结果）
- 提供更自然的母语表达、中文解释和替代表达
- **场景化改写**：支持通用、日常聊天、工作邮件、职场沟通、学术表达、简历优化、社交媒体 7 种场景
- **常见中式英文示例**：18 个按场景分组的典型中式英文，点击即可填入并自动切换场景
- **前后对比卡片**：中式英文 → 自然英文 → 场景最佳表达，适合录屏展示
- **一键复制**：复制最终表达 / 复制分享文案，方便社交媒体传播
- 支持自由输入任意英文句子
- Ctrl+Enter 快速发送

**学习管理**
- 标记「已掌握」或「稍后复习」
- 复习模式一键筛选出待复习句子
- 今日学习统计（浏览数、掌握数、待复习数），按日期自动区分

**收藏与导出**
- 收藏句子并导出为 JSON 文件
- 支持一键清空收藏（带二次确认）
- 数据存储在浏览器 localStorage 中

**界面**
- 响应式布局，适配桌面和移动端
- 纯简体中文界面
- 单文件前端，无框架依赖

## 技术栈

| 层 | 技术 |
|---|------|
| 前端 | HTML / CSS / JavaScript（单文件，零框架） |
| 后端 | Node.js / Express |
| AI | DeepSeek API（OpenAI 兼容格式） |
| 数据 | Tatoeba Project 英中平行语料 |
| 繁简转换 | OpenCC（opencc-js） |

## 项目结构

```
sayright/
├── index.html           # 前端页面（HTML + CSS + JS 全部在一个文件中）
├── server.js            # Express 后端，托管静态文件并提供 /api/fix 接口
├── data_db.json         # 句子数据库（5000 条）
├── convert_tatoeba.js   # 数据转换脚本：Tatoeba CSV → data_db.json
├── tatoeba/             # Tatoeba 原始 CSV 数据
├── .env                 # 环境变量，存放 DEEPSEEK_API_KEY（不提交）
├── package.json
└── README.md
```

## 两种运行模式

### 演示模式（无需配置）

打开页面即可体验 18 个内置示例的纠错效果，无需 API Key。

```bash
python3 -m http.server 8000
# 打开 http://127.0.0.1:8000/index.html
```

- 点击「常见中式英文示例」→「开始纠错」→ 查看对比卡片
- 自定义英文需要真实 AI 模式

### 真实 AI 模式（完整功能）

任意英文句子都可纠错，需要 DeepSeek API Key。

```bash
# 1. 安装依赖
npm install

# 2. 创建 .env（不要提交到 Git）
echo "DEEPSEEK_API_KEY=你的Key" > .env

# 3. 启动
npm start

# 4. 打开 http://localhost:3000
```

> `.env` 已在 `.gitignore` 中，不会被提交到 Git。
> 纯静态托管（GitHub Pages 等）无法使用真实 AI 模式，只能使用演示模式。

## 数据来源

句子数据来自 [Tatoeba Project](https://tatoeba.org)，通过 `convert_tatoeba.js` 脚本将原始 CSV 数据中的繁体中文转换为简体后生成 `data_db.json`。

数据转换依赖 opencc-js（OpenCC 的 JavaScript 实现），已包含在 `package.json` 的依赖中。

## 安全说明

- `DEEPSEEK_API_KEY` 仅保存在服务端 `.env` 文件中，由 `server.js` 通过 `process.env` 读取
- 前端代码不包含任何 API Key，所有 AI 请求经本地后端 `/api/fix` 接口转发
- API Key 不会被写入 `index.html`、`README.md` 或任何版本控制中的文件

## 路线图

以下是一些计划中的方向，欢迎贡献：

- [ ] 用户在界面内自行配置 API Key，无需编辑 .env
- [ ] 基于间隔重复的复习算法（代替简单的手动标记）
- [x] 场景化英文改写（v0.5）
- [ ] 用户在界面内自行配置 API Key
- [ ] 桌面应用版本（Electron / Tauri）
- [ ] 浏览器插件（Gmail / Notion / GitHub 等网页内直接改英文）
- [ ] 手机端 App（iOS / Android）
- [ ] 输入法形态探索

## 商业模式

- **当前阶段**：免费试用原型，AI 调用需要开发者在 `.env` 中配置自己的 API Key
- **未来计划**：桌面版支持用户自带 DeepSeek API Key，无需运营方承担 AI 成本
- 暂无账号系统、支付系统或服务器数据库

## 产品路线

| 版本 | 形态 | 状态 |
|------|------|------|
| v0.x | 网页免费试用版 | 当前 |
| v1.0 | 桌面端 App（macOS / Windows） | 计划中 |
| v1.5 | 浏览器插件 | 计划中 |
| v2.0 | 手机端 App | 计划中 |
| v3.0 | 输入法形态探索 | 长期方向 |

## 隐私说明

- `.env` 不提交到 GitHub（已在 `.gitignore` 中）
- API Key 不写入前端代码
- AI 请求通过本地后端 `/api/fix` 转发，前端不直接调用外部 API
- 错误库和所有用户数据保存在浏览器 `localStorage` 中
- 当前版本没有服务器数据库，没有账号系统，不上传任何用户数据

## 文档

更多产品和技术文档见 `docs/` 目录：

- [产品路线图](docs/product-roadmap.md) — 产品定位、各端规划、不做账号/支付的原因
- [隐私说明](docs/privacy.md) — 数据存储、数据流、API Key 安全、未来隐私方向
- [桌面端计划](docs/desktop-plan.md) — Electron 方案、核心功能范围、网页功能迁移计划
- [公开演示版说明](docs/public-demo.md) — 演示模式与真实 AI 模式区别、公开部署建议、安全提醒

## License

MIT
