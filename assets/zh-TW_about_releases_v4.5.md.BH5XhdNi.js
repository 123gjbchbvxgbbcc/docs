import{_ as s,k as i,j as a,m as e}from"./chunks/framework.CN4YI0Ml.js";const B=JSON.parse('{"title":"v4.5 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/about/releases/v4.5.md","filePath":"zh-TW/about/releases/v4.5.md"}'),t={name:"zh-TW/about/releases/v4.5.md"},h=e(`<h1 id="v4-5-版本介绍" tabindex="-1">v4.5 版本介绍 <a class="header-anchor" href="#v4-5-版本介绍" aria-label="Permalink to &quot;v4.5 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/552" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.4.1" target="_blank" rel="noreferrer">v4.4.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.4.2" target="_blank" rel="noreferrer">v4.4.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.5.0" target="_blank" rel="noreferrer">v4.5.0</a></li></ul><h2 id="多语言支持" tabindex="-1">多语言支持 <a class="header-anchor" href="#多语言支持" aria-label="Permalink to &quot;多语言支持&quot;">​</a></h2><p>如果你在运营一个大型社区，那么你可能会遇到这种场景：群组内设立了许多不同语言的频道，每个频道分别供不同地区的用户进行交流。在这种情况下，最合适的做法是让你的机器人在不同的频道下使用不同的语言进行回复。本质上，这不会改变机器人的运行逻辑，因此最好的做法是将涉及的每一段文本都抽离出来，通过统一的方式进行管理，并在发送前进行本地化渲染。</p><p>为此，Koishi 提供了一套新的 API：你可以使用 <code>ctx.i18n.define()</code> 定义多语言翻译，并通过 <code>session.text()</code> 渲染本地化文本。这套系统默认会依次读取频道语言、群组语言、用户语言和默认配置，并执行一套回退机制。</p><p>在渲染方面，这套系统不仅将继承过去 Template API 的插值语法，而且在此基础上加入了渲染预设机制，能够帮助处理单复数、列表渲染、随机渲染等更多复杂场景。</p><p>为了更好地实现代码解耦，我们还加入了本地翻译文件的支持。你可以创建一个 locales 目录并在其中按语言名称建立相应的文件，随后只需在插件中引入他们即可。同时，我们也提供了一套多语言指令帮助的编写规范，这样一来不仅所有的翻译文本都不需要写在源代码中，而且用户也可以更加方便地覆盖插件内置的文本。</p><p>参见：<a href="./../../guide/i18n/">多语言支持</a></p><h2 id="数据模型支持嵌套属性" tabindex="-1">数据模型支持嵌套属性 <a class="header-anchor" href="#数据模型支持嵌套属性" aria-label="Permalink to &quot;数据模型支持嵌套属性&quot;">​</a></h2><p>许多插件都会通过扩展数据模型的方式来实现自己所需的功能。除了创建新的表外，一部分插件也会选择扩展已有数据表中的字段。如果插件提供了多个字段，就需要考虑扩展字段的冲突问题。在过去的版本中，插件开发者只能通过将这些字段名起长一些来规避冲突，但这同样也会让开发变得有些麻烦。</p><p>在这次的新版本中，我们支持了数据模型的嵌套属性来解决这个问题。下面是一个简单的例子：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">extend</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &#39;github.accessToken&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &#39;github.refreshToken&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> user</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;github&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">github</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">accessToken</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // string</span></span></code></pre></div><p>可以看到，我们在 <code>user</code> 数据模型中扩展了两个字段，它们都有一个公共的 <code>github.</code> 前缀。尽管它们在存储上依旧可以有独立的类型和默认值，但是开发者只需通过一个简单的 github 属性便可访问它们。</p>`,13),n=[h];function l(k,p,r,d,o,g){return a(),i("div",null,n)}const y=s(t,[["render",l]]);export{B as __pageData,y as default};
