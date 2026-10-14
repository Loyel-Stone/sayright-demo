# SayRight · Mac 产品公开资料与未来发行

SayRight 帮助用户把想表达的意思准确、自然地说出来，并逐步保存、回顾和积累自己的英语表达。产品以 Apple 平台体验为方向，由 Loyel 独立发起、设计、主导和维护。

## 当前状态

**Desktop 当前为 v3.2 Internal RC，尚未正式公开发行。当前没有可公开下载的新版 Mac Demo 安装包或正式版安装包。**

- **免费 Mac Demo（计划）**：未来提供真正可安装、功能受限的 Mac 软件，用于真实试用；不是旧网页的预设演示。
- **正式版（计划）**：付费商业产品。具体功能限制、定价、授权条款和发行日期尚未公开确定。
- Demo 和正式版未来从同一私有产品代码基线构建。完整 Desktop 源代码保持 Private，不在本仓库公开。
- TestFlight 是未来可能使用的测试渠道，目前没有开放的测试入口或邀请。

本仓库保留 `sayright-demo` 名称，转为经过审核的公开产品资料、未来安装包及发行说明入口。当前没有真实试用下载、激活或付费系统，不应把历史标签当作 Mac 软件发行。

## 仓库与产品边界

| 对象 | 职责 |
|---|---|
| `sayright-desktop`（Private） | 唯一真实 Mac 产品源码及产品事实来源 |
| `sayright-demo`（本 Public 仓库） | 经过审核的公开资料与未来安装包；不镜像完整私有产品源码 |
| `sayright` | 历史 Web 原型，不再作为新产品开发主线 |

未来独立 UI Kit 仅考虑开放经验证、权利清晰的原创设计资产；目前没有新建或发布该项目，也没有跨仓库自动同步系统。

## 旧网页原型

旧网页 Demo 已停止维护，不再作为当前产品或 Mac 试用入口。历史网页只显示预定义结果，不能代表实时 AI 服务、可安装 Mac Demo 或正式 Desktop 学习引擎。

本仓库保留中性停用说明，不再提供旧网页业务；历史参考 JSON 不纳入当前版本 Git Tree。旧 GitHub Pages 展示已停用。停止展示和移除当前文件不等于清除历史 Git 提交、历史下载副本、第三方缓存或解决历史版权问题。

旧浏览器收藏、复习及错误库不会被中性说明页自动清空。该页不读写本地记录，也不提供新的导出/恢复功能；历史记录的恢复需要原始数据与另行批准的流程。详见[历史网页边界](docs/public-demo.md)与[隐私边界](docs/privacy.md)。

## 开发与 AI 辅助

SayRight 由 Loyel 独立主导。AI / Codex 工具参与辅助编码、分析和测试；产品决策、设计方向、审阅、验收和维护由 Loyel 负责。

SayRight is independently initiated, designed, led and maintained by Loyel. AI tools, including Codex, assist with coding, analysis and testing. Product decisions, review, acceptance and maintenance remain Loyel’s responsibility.

## 版权与分发

© 2026 Loyel，限其有权声明的原创资料。仓库转型不撤销或覆盖历史代码、第三方语料及其他材料已有的权利和适用许可。旧 README 的 MIT 字样不是私有 Desktop 源码或未来安装包的公开许可，仓库转型也不构成全仓库重新许可。

免费使用不等于源码开源，也不自动授予无限制再分发权。未来 Mac Demo 与付费正式版的产品许可、试用限制和安装包分发条款将另行审定；当前未创建正式产品许可或 LICENSE。历史 Tatoeba 语料不属于 Loyel 原创或网站代码 MIT 的自动授权范围。

仅在产品验收、分发安全和许可证据完成，并经 Owner 独立批准后，才会在[GitHub Releases](https://github.com/Loyel-Stone/sayright-demo/releases)发布真实安装包。当前 Releases 为空。私有仓库的历史 Internal RC 附件不作为本仓库已公开可下载的新版 Mac Demo。
