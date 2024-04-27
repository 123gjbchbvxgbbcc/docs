import{_ as e,k as r,j as a,m as i}from"./chunks/framework.CN4YI0Ml.js";const g=JSON.parse('{"title":"v4.8 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/releases/v4.8.md","filePath":"zh-TW/releases/v4.8.md"}'),t={name:"zh-TW/releases/v4.8.md"},s=i('<h1 id="v4-8-版本介绍" tabindex="-1">v4.8 版本介绍 <a class="header-anchor" href="#v4-8-版本介绍" aria-label="Permalink to &quot;v4.8 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/725" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.8.0" target="_blank" rel="noreferrer">v4.8.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.8.1" target="_blank" rel="noreferrer">v4.8.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.8.2" target="_blank" rel="noreferrer">v4.8.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.8.3" target="_blank" rel="noreferrer">v4.8.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.8.4" target="_blank" rel="noreferrer">v4.8.4</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.8.5" target="_blank" rel="noreferrer">v4.8.5</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.8.6" target="_blank" rel="noreferrer">v4.8.6</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.8.7" target="_blank" rel="noreferrer">v4.8.7</a></li></ul><h2 id="通用适配器协议" tabindex="-1">通用适配器协议 <a class="header-anchor" href="#通用适配器协议" aria-label="Permalink to &quot;通用适配器协议&quot;">​</a></h2><p>这个版本中，我们引入了全新的通用聊天协议 Satori，并将现有的适配器插件迁移到了新的组织下。与现有的通用聊天协议相比，Satori 有以下优势：</p><ul><li>抛弃历史包袱，设计了更加通用的接口，并不与任何特定平台绑定</li><li>将自身定位为聊天协议而非机器人框架，因而更加轻量，也有更多的应用场景</li></ul><p>同时，我们也调整了适配器 / 机器人的 API，使每一个适配器插件都成为可重用的插件，再次优化了交互体验。</p><h2 id="全新的控制台界面" tabindex="-1">全新的控制台界面 <a class="header-anchor" href="#全新的控制台界面" aria-label="Permalink to &quot;全新的控制台界面&quot;">​</a></h2><p>我们为控制台相关插件创建了一个新仓库 <a href="https://github.com/koishijs/webui" target="_blank" rel="noreferrer">koishijs/webui</a> 中，并且为这些插件都发布了新的大版本，主要包含以下变更：</p><ul><li>设计了全新的 UI，能够更好地承载多样化的功能，并且更加适配原生应用</li><li>新增了屏幕底部的状态栏，可用于显示登录信息、负载状态、版本信息等</li><li>提供了专门的欢迎界面，并为大部分功能提供了移动端适配</li></ul>',9),l=[s];function o(h,n,_,k,c,f){return a(),r("div",null,l)}const b=e(t,[["render",o]]);export{g as __pageData,b as default};
