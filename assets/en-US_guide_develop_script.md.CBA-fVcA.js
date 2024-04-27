import{_ as n,k as o,f as t,A as i,m as a,C as l,j as p,l as s}from"./chunks/framework.CN4YI0Ml.js";const A=JSON.parse('{"title":"Launch Script","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/develop/script.md","filePath":"en-US/guide/develop/script.md"}'),h={name:"en-US/guide/develop/script.md"},r=a(`<h1 id="launch-script" tabindex="-1">Launch Script <a class="header-anchor" href="#launch-script" aria-label="Permalink to &quot;Launch Script&quot;">​</a></h1><p>There is also a set of command line tools that provided by Koishi to boot the application quickly by reading the configuration file.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节中介绍的命令行都需要在 <a href="./config.html#应用目录">应用目录</a> 下运行。</p></div><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><p>我们通常使用 <strong>启动脚本</strong> 来启动 Koishi 应用。打开应用目录下的 <code>package.json</code> 文件：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;cross-env NODE_ENV=development koishi start -r esbuild-register -r yml-register&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;koishi start&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>Run the following command line in the workspace root to start the Koishi application:</p>`,7),c=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run start")])])])],-1),d=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," start")])])])],-1),k=a('<p>In the subsequent parts of this section, we will introduce more options of the above launch script. No matter what changes you make, you can use the above command line to start. This is also the significance of the boostrap script.</p><h3 id="command-line-options" tabindex="-1">Command Line Options <a class="header-anchor" href="#command-line-options" aria-label="Permalink to &quot;Command Line Options&quot;">​</a></h3><p>启动脚本支持 Node.js 的 <a href="https://nodejs.org/api/cli.html" target="_blank" rel="noreferrer">命令行参数</a>。例如，上面的 <code>-r</code> 对应于 <code>--require</code>，它将允许你加载 <code>.ts</code> 和 <code>.yml</code> 后缀的文件。</p><p>In addition to Node.js&#39;s command line options, Koishi also provides some additional options. We will introduce each of them below.</p><h3 id="auto-restart" tabindex="-1">Auto Restart <a class="header-anchor" href="#auto-restart" aria-label="Permalink to &quot;Auto Restart&quot;">​</a></h3><p>Koishi&#39;s command line tool supports auto-restart. When the process running Koishi crashes, if Koishi has already started successfully, the surveillance process will automatically restart a new process.</p><h2 id="development-mode" tabindex="-1">Development Mode <a class="header-anchor" href="#development-mode" aria-label="Permalink to &quot;Development Mode&quot;">​</a></h2><p>除了 <code>start</code> 以外，模板项目还准备了名为 <code>dev</code> 的开发模式启动脚本。Running the following command line in the workspace root can start the application in development mode:</p>',8),u=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run dev")])])])],-1),g=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," dev")])])])],-1),m=a(`<p>如你所见，<code>dev</code> 相当于在 <code>start</code> 指令的基础上添加了额外的参数和环境变量。These options enable us to use additional features, while the environment variables can affect some behaviors of the plugins.</p><h3 id="typescript-support" tabindex="-1">TypeScript Support <a class="header-anchor" href="#typescript-support" aria-label="Permalink to &quot;TypeScript Support&quot;">​</a></h3><p>The Koishi template project provides built-in support for TypeScript development. 上述 <code>-r esbuild-register</code> 参数允许我们在运行时直接使用工作区插件的 TypeScript 源代码。</p><p>You can also add support for more extensions on your own. For example, if you prefer CoffeeScript, you can modify your development script like this:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;koishi start -r coffeescript/register&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;coffeescript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;^2.7.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>这样你就可以使用 CoffeeScript 编写你的插件源代码 (当然你还得自行处理构建逻辑)，甚至连配置文件都可以使用 <code>koishi.coffee</code> 书写了。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>我们并不推荐使用高级语言来编写配置文件，因为动态的配置无法支持环境变量、配置热重载和插件市场等特性。大部分情况下我们建议仅将 <code>-r</code> 用于开发目的。</p></div><h3 id="hot-module-replacement" tabindex="-1">Hot Module Replacement <a class="header-anchor" href="#hot-module-replacement" aria-label="Permalink to &quot;Hot Module Replacement&quot;">​</a></h3><p>If you are developing a large Koishi project, it might take several seconds just to load all plugins. At times like this, supporting hot module replacement like front-end frameworks becomes a great idea. Fortunately, Koishi also supports this! The built-in plugin @koishijs/plugin-hmr implements plugin-level hot replacement. Whenever you modify your local files, Koishi will try to reload your plugin and remind you in the terminal.</p><p>The behavior here can also be customized in the configuration file:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">koishi.yml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  group:develop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    $if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">env.NODE_ENV === &#39;development&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hmr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      root</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;.&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      # List of files to ignore, supports glob patterns</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      ignore</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">some-file</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>由于部分 Linux 系统有着 8192 个文件的监听数量限制，你可能会发现运行 <code>yarn dev</code> 后出现了如下的报错：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>NOSPC: System limit for number of file watchers reached</span></span></code></pre></div><p>In this case, you can use the following command to increase the limit of the number of file watchers:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> fs.inotify.max_user_watches=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">524288</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee -a /etc/sysctl.conf </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sysctl -p</span></span></code></pre></div><p>另一种方案是只监听部分子路径，例如将 <code>root</code> 改为 <code>external/foo</code> (其中 <code>foo</code> 是你正在开发的插件目录，参见下一节的工作区指南)，这将忽略其他目录下的变化，并依然对你的插件进行热重载。当你同时开发多个插件时，你也可以将 <code>root</code> 改成一个数组来使用。</p></div>`,12);function y(v,C,B,f,b,_){const e=l("tab-select");return p(),o("div",null,[r,t(e,{class:"code"},{"tab-npm":i(()=>[c]),"tab-yarn":i(()=>[d]),_:1}),k,t(e,{class:"code"},{"tab-npm":i(()=>[u]),"tab-yarn":i(()=>[g]),_:1}),m])}const E=n(h,[["render",y]]);export{A as __pageData,E as default};
