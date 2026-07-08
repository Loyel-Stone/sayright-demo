# SayRight 隐私说明

## 当前数据存储

### 浏览器 localStorage

以下数据保存在用户浏览器的 `localStorage` 中：

| Key | 内容 | 说明 |
|-----|------|------|
| `sayright_error_library` | 纠错记录 | 用户保存的错误库条目，包含原句、修正版、场景、标签等 |
| `sayright_favorites` | 收藏句子 ID | 用户在参考例句库中收藏的句子 |
| `sayright_mastered` | 已掌握句子 ID | 用户在参考例句库中标记掌握的句子 |
| `sayright_review` | 待复习句子 ID | 用户在参考例句库中标记稍后复习的句子 |
| `sayright_daily` | 每日统计 | 今日浏览/掌握/复习数量，按日期区分 |

这些数据：
- 只存在于用户本地浏览器
- 不会上传到任何服务器
- 清除浏览器数据会全部丢失
- 可以通过「导出收藏」功能将收藏句子导出为 JSON 文件备份

### API Key

- `DEEPSEEK_API_KEY` 保存在项目根目录的 `.env` 文件中
- 由 `server.js` 通过 `process.env` 读取
- **不会写入前端代码**（`index.html` 中不包含任何 API Key）
- `.env` 已加入 `.gitignore`，不会被提交到 Git
- 部署者需要自行在 `.env` 中填写自己的 Key

## 数据流

### AI 纠错请求

```
用户输入英文
    ↓
前端 (index.html) POST /api/fix
    ↓
本地后端 (server.js) 读取 process.env.DEEPSEEK_API_KEY
    ↓
后端请求 DeepSeek API (https://api.deepseek.com)
    ↓
DeepSeek 返回分析结果
    ↓
后端转发给前端显示
```

- 用户输入的英文会发送到 DeepSeek API 进行分析
- DeepSeek 的隐私政策见 https://api.deepseek.com
- 前端不直接请求外部 API，所有 AI 调用通过本地后端转发

### 数据加载

- 前端通过 `fetch('./data_db.json')` 加载 Tatoeba 例句数据
- 这是本地静态文件，不涉及网络请求

## 未来版本隐私方向

### 桌面版（v1.0）

- 错误库使用本地文件存储（而非 localStorage）
- 用户自带 DeepSeek API Key，保存在本地配置文件
- 支持导出/导入错误库数据
- 不上传任何数据到云端

### 浏览器插件（v1.5）

- API Key 存储在浏览器扩展的 `storage.local` 中
- 只在用户主动触发时才请求 AI 分析
- 不监听用户在其他网页的输入（除非用户主动选中文本并唤起）

### 输入法形态（v3.0 远期探索）

- 输入法可以读取所有按键输入，这是最强的隐私风险点
- 如果做，必须是本地模型处理，不能将按键发送到云端
- 需要系统级权限，用户必须有明确的授权和退出机制
- 在隐私方案和端侧 AI 能力不够成熟之前，不启动这一端

## 自己部署此项目

如果你 clone 并在自己电脑上运行 SayRight：

```bash
# 1. 安装依赖
npm install

# 2. 创建 .env（不要提交到 Git）
echo "DEEPSEEK_API_KEY=你的Key" > .env

# 3. 启动
npm start
```

- 确保 `.env` 在 `.gitignore` 中
- 不要将 `.env` 提交到任何公开仓库
- 如果部署到服务器，确保只有受信任的本地网络可以访问 `/api/fix`

## 当前没有的内容

- ❌ 账号系统
- ❌ 服务器数据库
- ❌ 用户数据上传
- ❌ 用户行为追踪/分析
- ❌ 广告 SDK
- ❌ 第三方统计脚本
- ❌ Cookie（除 localStorage 外的其他追踪方式）
