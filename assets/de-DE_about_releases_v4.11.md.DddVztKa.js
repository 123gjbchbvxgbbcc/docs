import{_ as e,k as a,j as i,m as r}from"./chunks/framework.CN4YI0Ml.js";const f=JSON.parse('{"title":"v4.11 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/about/releases/v4.11.md","filePath":"de-DE/about/releases/v4.11.md"}'),t={name:"de-DE/about/releases/v4.11.md"},l=r('<h1 id="v4-11-版本介绍" tabindex="-1">v4.11 版本介绍 <a class="header-anchor" href="#v4-11-版本介绍" aria-label="Permalink to &quot;v4.11 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/892" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.0" target="_blank" rel="noreferrer">v4.11.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.1" target="_blank" rel="noreferrer">v4.11.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.2" target="_blank" rel="noreferrer">v4.11.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.3" target="_blank" rel="noreferrer">v4.11.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.4" target="_blank" rel="noreferrer">v4.11.4</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.5" target="_blank" rel="noreferrer">v4.11.5</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.6" target="_blank" rel="noreferrer">v4.11.6</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.7" target="_blank" rel="noreferrer">v4.11.7</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.8" target="_blank" rel="noreferrer">v4.11.8</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.11.9" target="_blank" rel="noreferrer">v4.11.9</a></li></ul><h2 id="过滤器与动态配置" tabindex="-1">过滤器与动态配置 <a class="header-anchor" href="#过滤器与动态配置" aria-label="Permalink to &quot;过滤器与动态配置&quot;">​</a></h2><p>在这个版本中，我们首先支持了使用 minato 的表达式语法作为 <code>$filter</code> 过滤会话上下文。在此基础上我们又提供了 <code>Schema.computed()</code> 类型，它可用于定义根据会话动态取值的配置项。这两个特性意味着用户真正获得了根据会话细粒度控制插件的能力。</p><h2 id="指令管理器" tabindex="-1">指令管理器 <a class="header-anchor" href="#指令管理器" aria-label="Permalink to &quot;指令管理器&quot;">​</a></h2><p>发布了全新的 @koishijs/plugin-commands 插件，它提供了一个控制台页面，允许用户在线管理指令的各项配置和层级关系。得益于过滤器机制，现在指令也可以在不同的平台和群组内拥有不同的行为了。</p><h2 id="插件市场优化" tabindex="-1">插件市场优化 <a class="header-anchor" href="#插件市场优化" aria-label="Permalink to &quot;插件市场优化&quot;">​</a></h2><p>这个版本中我们对 @koishijs/plugin-market 的功能做了全面的优化：</p><ul><li>现在能显示 <code>peerDependencies</code> 是否可选了</li><li>当打开插件选择对话框时自动聚焦输入框</li><li>支持了导出 <code>usage</code> 以提供插件的配置说明</li><li>优化了搜索框下方插件数量的显示</li><li>支持了更多标识和搜索语法，包括不安全、预览版本和近期新增</li><li>插件配置界面顶部增加了了链接导航栏</li><li>当更新插件主版本时将显示兼容性提示</li><li>不再显示「所有插件」分组，优化了插件配置体验</li><li>当移除插件或插件组时将弹窗进行确认，同时禁止停用部分核心插件</li><li>当检测到新的连接时，根据上一次刷新的时间自动刷新插件市场</li><li>新增了左侧栏用于过滤和排序功能，并全面完善了分类系统</li><li>优化了插件卡片的悬浮和点击效果</li><li>修复了十余个 bug，这里就不一一介绍了</li></ul><h2 id="状态栏更新" tabindex="-1">状态栏更新 <a class="header-anchor" href="#状态栏更新" aria-label="Permalink to &quot;状态栏更新&quot;">​</a></h2><p>此外，我们还将 status 插件拆分为 status 和 analytics 两个插件，后者承担了数据统计和图标渲染的功能。对于前者，我们还引入了 envinfo 插件的功能：在控制台的左下角显示环境信息和版本号。在 status 插件之外，我们还内置了前端插件加载的进度条，已获得更好的初始加载体验。</p>',11),s=[l];function o(h,n,c,k,d,u){return i(),a("div",null,s)}const g=e(t,[["render",o]]);export{f as __pageData,g as default};
