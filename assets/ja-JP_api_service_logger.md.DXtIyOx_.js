import{_ as s,k as i,j as a,m as h}from"./chunks/framework.CN4YI0Ml.js";const y=JSON.parse('{"title":"输出与日志","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/service/logger.md","filePath":"ja-JP/api/service/logger.md"}'),l={name:"ja-JP/api/service/logger.md"},n=h(`<h1 id="输出与日志" tabindex="-1">输出与日志 <a class="header-anchor" href="#输出与日志" aria-label="Permalink to &quot;输出与日志&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">注意</p><p>此页文档正在施工，其中的内容可能不是最新。</p></div><p>本章主要介绍如何控制 Koishi 命令行工具的输出。</p><h2 id="配置输出" tabindex="-1">配置输出 <a class="header-anchor" href="#配置输出" aria-label="Permalink to &quot;配置输出&quot;">​</a></h2><h3 id="控制输出等级" tabindex="-1">控制输出等级 <a class="header-anchor" href="#控制输出等级" aria-label="Permalink to &quot;控制输出等级&quot;">​</a></h3><p><strong>输出等级</strong>控制了所有输出到命令行的内容的重要性。在 Koishi 内置的输出系统中，所有信息被分为了 3 种不同的等级：</p><ol><li>error, success</li><li>warning, info</li><li>debug</li></ol><p>相应地，当设置输出等级为 x 时，Koishi 只会输出重要性小于等于 x 的信息。当输出等级被设置为 0 时，Koishi 将不产生任何输出；而当输出等级被设置为 3 时，Koishi 产生的全部信息都会被显示在屏幕上（当然下面还会介绍过滤器，你可以通过手动设置过滤器减少输出。）</p><p>需要注意的是，运行时产生的错误（如请求失败，数据库访问失败等）都属于 warning，只有在创建阶段和连接阶段抛出的错误才会通过 error 输出（参见 <a href="./events.html">生命周期</a>）。</p><p>默认情况下 Koishi 的输出等级为 2。同时你有多种方法修改这个值。</p><p>你可以在配置文件中控制输出等级：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">koishi.js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  logLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>在使用 <code>koishi start</code> 指令时，你也可以加入一个 <code>--log-level</code> 选项，它的值可以是 0~3 之间的一个整数，表示不同的输出等级。例如，<code>--log-level=0</code> 就表示不产生任何输出。</p><p>上述两种方法的功能类似，但是 CLI 选项将具有更高的优先级，这样允许你临时覆盖一些配置。</p><h3 id="在日志中显示时间" tabindex="-1">在日志中显示时间 <a class="header-anchor" href="#在日志中显示时间" aria-label="Permalink to &quot;在日志中显示时间&quot;">​</a></h3><p>如果你希望在每行输出前打印当前的时间，可以使用配置项 <code>logTime</code> 或者命令行选项 <code>--log-time</code>。这个选项既可以单纯地配置，也可以传入一个字符串作为输出时间的格式。基本语法如下：</p><ul><li>yyyy: 四位数年份</li><li>yy: 年份末两位</li><li>MM: 两位数月份</li><li>dd: 两位数日期</li><li>hh: 两位数小时</li><li>mm: 两位数分钟</li><li>ss: 两位数秒</li><li>SSS: 三位数毫秒</li></ul><p>当配置为 <code>true</code> 时，这一项时的默认格式为 <code>yyyy/MM/dd hh:mm:ss</code>。</p><h2 id="命名空间" tabindex="-1">命名空间 <a class="header-anchor" href="#命名空间" aria-label="Permalink to &quot;命名空间&quot;">​</a></h2><h3 id="在插件中输出" tabindex="-1">在插件中输出 <a class="header-anchor" href="#在插件中输出" aria-label="Permalink to &quot;在插件中输出&quot;">​</a></h3><p>如果你是插件开发者，你也可以主动调用 Koishi 内置的 Logger API 来输出调试信息，这样用户就可以用上述的方法来控制你的插件的输出等级了。具体使用方法是这样的：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">my-plugin.js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 生成一个 Logger 对象，foo 作为它的命名空间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 调用 logger 方法来产生输出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">success</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;failed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>上面的这个 Logger 对象有下面的方法，它们的函数签名与 <code>console.log</code> 一致：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  warn</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">format</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[])</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">format</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[])</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  debug</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">format</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[])</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">format</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[])</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  error</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">format</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[])</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="过滤命名空间" tabindex="-1">过滤命名空间 <a class="header-anchor" href="#过滤命名空间" aria-label="Permalink to &quot;过滤命名空间&quot;">​</a></h3><p>前面所说的命名空间不仅会作为输出的前缀，还能用于过滤输出。用户可以通过将 <code>logLevel</code> 配置成对象的形式，指定每一个插件产生的输出的等级，就像这样：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">koishi.js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  logLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 基础输出等级，当没有找到对应的配置项时将使用这个值</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 如果配置了 koishi start --log-level，将覆盖这个值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    base</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 过滤掉所有等级大于 2 的来自命名空间 foo 的输出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>Koishi 也支持多级命名空间，每一级之间用冒号分隔，你可以用下面的方式声明一个子命名空间：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plugin-foo.js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 这两种写法是等价的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo:temp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">extend</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;temp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 执行其他代码并使用 logger 产生输出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>然后，你也可以将你的配置项具体到每一级命名空间中：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">koishi.js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  logLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // 这里也支持配置 base，当然你也可以不写，表示继承上一级的默认等级</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      base</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      temp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="配置调试输出" tabindex="-1">配置调试输出 <a class="header-anchor" href="#配置调试输出" aria-label="Permalink to &quot;配置调试输出&quot;">​</a></h3><p>此外，koishi 还提供了一个 <code>--debug</code> 选项，你可以临时配置那些要以等级 3 进行输出的命名空间，中间用逗号隔开。例如，<code>--debug=onebot,foo:temp</code> 就表示输出来自 onebot 和 foo:temp 的全部内容。</p><p>同 <code>--log-level</code> 类似，这个选项也将覆盖配置文件中的相关配置。</p><h2 id="手动调用-logger" tabindex="-1">手动调用 Logger <a class="header-anchor" href="#手动调用-logger" aria-label="Permalink to &quot;手动调用 Logger&quot;">​</a></h2><p>如果你不希望使用 Koishi 的命令行工具，同时又想使用上述种种特性，你可以考虑直接调用 Logger 的底层方法来进行配置。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>由于手动调用 Logger 并不是我们所推荐的行为，本节中介绍的属性和方法不会记录在文档中，Koishi 也不会保证这些功能不会在版本更新中发生变化。在开发时，请尽量以 @koishijs/utils 包提供的 dts 文件，而非本页面为准。</p></div><h3 id="logger-showtime" tabindex="-1">Logger.showTime <a class="header-anchor" href="#logger-showtime" aria-label="Permalink to &quot;Logger.showTime&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>对应配置项 <a href="./../../api/core/app.html#options-logtime"><code>logTime</code></a>，只支持字符串格式。默认值为空串。</p><h3 id="logger-showdiff" tabindex="-1">Logger.showDiff <a class="header-anchor" href="#logger-showdiff" aria-label="Permalink to &quot;Logger.showDiff&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li></ul><p>对应配置项 <a href="./../../api/core/app.html#options-logdiff"><code>logDiff</code></a>。默认值为 <code>false</code>。</p><h3 id="logger-levels" tabindex="-1">Logger.levels <a class="header-anchor" href="#logger-levels" aria-label="Permalink to &quot;Logger.levels&quot;">​</a></h3><ul><li>类型：<code>LogLevelConfig</code></li></ul><p>对应配置项 <a href="./../../api/core/app.html#options-loglevel"><code>logLevel</code></a> 和 <a href="./../../api/core/app.html#options-logfilter"><code>logFilter</code></a>，只支持对象格式。默认值为 <code>{ base: 2 }</code>。</p><h2 id="内置的输出" tabindex="-1">内置的输出 <a class="header-anchor" href="#内置的输出" aria-label="Permalink to &quot;内置的输出&quot;">​</a></h2><p>Koishi 自身会产生下列类型的 logger 输出：</p><p>TODO</p><p>利用上面的方法，你可以借助 koishi 的输出对你的机器人进行调试。</p>`,50),t=[n];function k(e,p,r,d,o,g){return a(),i("div",null,t)}const c=s(l,[["render",k]]);export{y as __pageData,c as default};
