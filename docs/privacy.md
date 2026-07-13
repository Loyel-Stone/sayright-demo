# SayRight Demo 隐私说明

## 当前数据存储

SayRight Demo 是公开静态站。以下数据保存在用户浏览器的 `localStorage` 中：

| Key | 内容 | 说明 |
|-----|------|------|
| `sayright_error_library` | 错误库 | 用户保存的演示纠错记录 |
| `sayright_favorites` | 收藏句子 ID | 参考例句收藏 |
| `sayright_mastered` | 已掌握句子 ID | 参考例句掌握状态 |
| `sayright_review` | 待复习句子 ID | 稍后复习列表 |
| `sayright_daily` | 每日统计 | 今日浏览、掌握、复习数量 |

这些数据只存在于当前浏览器，不会自动上传到服务器。清除浏览器数据、换设备或换浏览器会导致本地数据丢失。

## 数据流

### 中式英文演示

```text
用户点击内置示例
    ↓
浏览器读取 index.html 内的 DEMO_RESULTS
    ↓
页面展示本地预设结果
```

公开演示版不会请求真实 AI，也不会把输入内容发送到任何接口。

### 参考例句

```text
浏览器 fetch('./data_db.json')
    ↓
加载 5000 条静态参考例句
    ↓
本地搜索、筛选、收藏、复习
```

`data_db.json` 是随站点公开发布的静态文件。

## 当前没有的内容

- 账号系统
- 服务器数据库
- 用户数据上传
- 真实 AI 请求
- API Key 输入或测试功能
- 用户行为追踪/分析
- 广告 SDK
- 第三方统计脚本
- Cookie

## 桌面版说明

自定义句子分析属于 SayRight Desktop 的能力。桌面版会由用户自行配置 DeepSeek API Key，并在本地环境中发起 AI 请求；这不属于公开 demo 的数据流。
