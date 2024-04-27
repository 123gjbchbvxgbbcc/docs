import{_ as s,k as i,j as a,m as n}from"./chunks/framework.CN4YI0Ml.js";const y=JSON.parse('{"title":"プラグインを理解する","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/plugin/index.md","filePath":"ja-JP/guide/plugin/index.md"}'),l={name:"ja-JP/guide/plugin/index.md"},h=n(`<h1 id="プラグインを理解する" tabindex="-1">プラグインを理解する <a class="header-anchor" href="#プラグインを理解する" aria-label="Permalink to &quot;プラグインを理解する&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在学习本章之前，建议先完整阅读 <a href="./../../manual/usage/market.html">入门 &gt; 安装和配置插件</a>。</p></div><p>模块化是 Koishi 的核心特性。借助插件系统，Koishi 得以将各种功能解耦出来，并以模块的形式分发。在「开发上手」中我们已经体验了基础的插件开发范例。本章将介绍更多的模块化编写方式，并介绍一些场景下的最佳实践。</p><h2 id="插件的基本形式" tabindex="-1">插件的基本形式 <a class="header-anchor" href="#插件的基本形式" aria-label="Permalink to &quot;插件的基本形式&quot;">​</a></h2><p>一个插件需要是以下三种基本形式之一：</p><ol><li>一个接受两个参数的函数，第一个参数是所在的上下文，第二个参数是传入的配置项</li><li>一个接受两个参数的类，第一个参数是所在的上下文，第二个参数是传入的配置项</li><li>一个对象，其中的 <code>apply</code> 方法是第一种形式中所说的函数</li></ol><p>而一个插件在被加载时，则相当于进行了上述函数的调用。因此，下面的四种写法是基本等价的：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> callback</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Middleware</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/// ---cut---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  apply</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>看起来插件似乎只是将函数调用换了一种写法，但这种写法能够帮助我们将多个逻辑组合在一起并模块化，同时可以在插件内部对所需的选项进行初始化，这些都能极大地提高了代码的可维护性。</p><h2 id="模块化的插件" tabindex="-1">模块化的插件 <a class="header-anchor" href="#模块化的插件" aria-label="Permalink to &quot;模块化的插件&quot;">​</a></h2><p>插件化最大的好处就是可以把不同的功能写在不同的模块中。此时插件将作为模块的导出，它可以是 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E5%AF%BC%E5%85%A5%E9%BB%98%E8%AE%A4%E5%80%BC" target="_blank" rel="noreferrer">默认导出</a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E5%AF%BC%E5%85%A5%E6%95%B4%E4%B8%AA%E6%A8%A1%E5%9D%97%E7%9A%84%E5%86%85%E5%AE%B9" target="_blank" rel="noreferrer">导出整体</a>。</p><p>对于对象形式的插件，你还可以额外提供一个 <code>name</code> 属性作为插件的名称。对于函数和类形式的插件来说，插件名称便是函数名或类名。具名插件有助于更好地描述插件的功能，并被用于插件关系可视化中，实际上不会影响任何运行时的行为。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">foo.ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 整体导出对象形式的插件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;Foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> apply</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">config</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {}</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bar.ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 默认导出类形式的插件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">config</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Bar</span></span></code></pre></div><h2 id="嵌套的插件" tabindex="-1">嵌套的插件 <a class="header-anchor" href="#嵌套的插件" aria-label="Permalink to &quot;嵌套的插件&quot;">​</a></h2><p>Koishi 的插件也是可以嵌套的。你可以将你编写的插件解耦成多个独立的子模块，再将调用这些子模块的一个新插件作为入口模块，就像这样：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 入口文件，从上述模块分别加载插件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;./foo&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;./bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> apply</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>这样当你加载上述模块时，就相当于同时加载了 foo 和 bar 两个模块。这样的做法不仅能够减轻心智负担，解耦出的模块还享受独立的热重载，你可以在不影响一个模块运行的情况下修改另一个的代码！</p><p>当你在开发较为复杂的功能时，可以将插件分解成多个独立的子插件，并在入口文件中依次加载这些子插件。许多大型插件都采用了这种写法。</p><h2 id="在配置文件中加载" tabindex="-1">在配置文件中加载 <a class="header-anchor" href="#在配置文件中加载" aria-label="Permalink to &quot;在配置文件中加载&quot;">​</a></h2><p>一个模块可以作为插件被 Koishi 的配置文件加载，其需要满足以下两条中的一条：</p><ul><li>此模块的<strong>默认导出</strong>是一个插件</li><li>此模块的<strong>导出整体</strong>是一个插件</li></ul><p>这两种写法并无优劣之分，你完全可以按照自己的需求调整导出的形式。按照惯例，如果你的插件是一个函数，我们通常直接导出 apply 方法，并将导出整体作为一个插件；如果你的插件是一个类，那么我们通常使用默认导出的形式。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里默认导出的优先级更高。因此，只要模块提供了默认导出，Koishi 就会尝试加载这个默认导出，而不是导出整体。在开发中请务必注意这一点。</p></div><p>配置文件中的 <code>plugins</code> 字段记录了插件的信息：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">koishi.yml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  dialogue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#&#39;</span></span></code></pre></div><p>这里的键对应插件的路径，值则为插件的配置。这个路径的解析逻辑如下：</p><ul><li>对于 foo，我们将尝试读取 @koishijs/plugin-foo 和 koishi-plugin-foo</li><li>对于 @foo/bar，我们将尝试读取 @foo/koishi-plugin-bar</li></ul><p>换言之，上述配置文件相当于下面的代码：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;@koishijs/plugin-console&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;koishi-plugin-dialogue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span></code></pre></div><p>在这个例子中，console 是官方插件，并且使用了默认导出；dialogue 是社区插件，并且使用了导出整体。配置文件使你得以无视这些区别，每个插件的加载方式都会由 CLI 自动检测。</p>`,31),t=[h];function p(k,e,r,d,g,B){return a(),i("div",null,t)}const c=s(l,[["render",p]]);export{y as __pageData,c as default};
