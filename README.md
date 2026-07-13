# SayRight Demo

SayRight Demo 是 SayRight 的公开静态演示站：把常见中式英文展示为更自然、更礼貌、更符合场景的英文表达。

在线体验：https://loyel-stone.github.io/sayright-demo/

## 当前定位

- 免费静态演示
- 无真实 AI 请求
- 无账号系统
- 不上传用户数据
- 不包含 Electron、Express 后端或真实 API Key
- 自定义句子请使用 SayRight Desktop，并配置自己的 DeepSeek API Key

## 功能

**中式英文示例**
- 53 条内置中式英文示例
- 支持搜索、场景筛选、标签筛选和清空筛选
- 点击示例立即展示本地预设纠错结果
- 示例卡片显示原句、自然表达预览、场景和标签

**演示结果**
- 中文主标题 + 英文辅助标题
- 结果顺序：自然表达、场景表达、语法修正、中文解释、替代表达、错误标签、原句
- 支持复制语法修正、自然表达、场景表达、替代表达和完整结果
- 支持保存到本地错误库

**参考例句**
- 5000 条中英参考句，来自 Tatoeba Project
- 支持上一句、下一句、随机、搜索、等级筛选、场景筛选
- 支持复制、收藏、标记掌握和稍后复习

**本地数据**
- 收藏、复习、错误库和每日统计保存在浏览器 `localStorage`
- 支持错误库导入、导出 JSON 和导出学习报告

## 本地预览

这是纯静态站，可以用任意静态文件服务器预览：

```bash
python3 -m http.server 8000
```

然后打开 http://127.0.0.1:8000/

## 文件结构

```text
sayright-demo/
├── index.html
├── data_db.json
├── README.md
└── docs/
```

## 安全说明

- `index.html` 不会调用 `/api/fix`、`/api/test-key` 或任何真实 AI 接口
- 公开站不会要求用户输入 API Key
- `data_db.json` 是静态参考例句数据
- 用户输入非内置示例时，只会显示桌面版提示，不会伪造 AI 结果

## License

MIT
