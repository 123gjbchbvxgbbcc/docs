import{_ as h,k as p,f as i,A as a,m as t,C as n,j as k,l as s}from"./chunks/framework.CN4YI0Ml.js";const f=JSON.parse('{"title":"使用预设模板","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/guide/i18n/presets.md","filePath":"fr-FR/guide/i18n/presets.md"}'),d={name:"fr-FR/guide/i18n/presets.md"},r=t(`<h1 id="使用预设模板" tabindex="-1">使用预设模板 <a class="header-anchor" href="#使用预设模板" aria-label="Permalink to &quot;使用预设模板&quot;">​</a></h1><h2 id="处理单复数" tabindex="-1">处理单复数 <a class="header-anchor" href="#处理单复数" aria-label="Permalink to &quot;处理单复数&quot;">​</a></h2><p>在实际应用中，我们可能要根据某个数值改变输出的结果。让我们看一个简单的例子：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">apple@plural</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">You have no apples</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">You have one apple</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">You have {length} apples</span></span></code></pre></div><p>如你所见，我们使用 <code>@plural</code> 为 apple 指定了一个预设模板。这个预设模板会在运行时按照其特有的逻辑来渲染：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Apple</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// ---cut---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;apples&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [])              </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// You have no apples</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;apples&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Apple</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()])   </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// You have one apple</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;apples&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })   </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// You have 2 apples</span></span></code></pre></div><h2 id="列表渲染" tabindex="-1">列表渲染 <a class="header-anchor" href="#列表渲染" aria-label="Permalink to &quot;列表渲染&quot;">​</a></h2><p><code>@list</code> 预设模板可以用来渲染列表或对象：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">rank@list</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  header</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">当前排名如下：</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  item</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;第 {key} 名：{value}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  footer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">要查看特定结果，请使用 --all 选项。</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;rank&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre></div>`,10),o=s("p",null,"当前排名如下：",-1),c=s("p",null,"第 1 名：foo",-1),g=s("p",null,"第 2 名：bar",-1),B=s("p",null,"要查看更多结果，请使用 --all 选项。",-1),y=t(`<h2 id="随机渲染" tabindex="-1">随机渲染 <a class="header-anchor" href="#随机渲染" aria-label="Permalink to &quot;随机渲染&quot;">​</a></h2><p><code>@random</code> 预设会在运行时随机选择一个结果：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">not-found@random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">魔理沙偷走了重要的东西。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">此条目纯属虚构，包含的内容已遁入幻想。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">没有相关结果。您要找的是不是：蕾米莉亚的威严？</span></span></code></pre></div>`,3);function F(E,A,_,u,C,m){const e=n("chat-message"),l=n("chat-panel");return k(),p("div",null,[r,i(l,null,{default:a(()=>[i(e,{nickname:"Koishi"},{default:a(()=>[o,c,g,B]),_:1})]),_:1}),y])}const b=h(d,[["render",F]]);export{f as __pageData,b as default};
