import{_ as i,k as d,l as t,D as e,f as n,A as s,m as l,C as r,j as c}from"./chunks/framework.CN4YI0Ml.js";const V=JSON.parse('{"title":"数据模型 (Model)","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/api/database/model.md","filePath":"ru-RU/api/database/model.md"}'),o={name:"ru-RU/api/database/model.md"},h=l(`<h1 id="数据模型" tabindex="-1">数据模型 (Model) <a class="header-anchor" href="#数据模型" aria-label="Permalink to &quot;数据模型 (Model)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/database/model.html">开发 &gt; 数据库 &gt; 数据模型</a></p></div><p><code>ctx.model</code> 是 Koishi 的内置服务。其上的方法可以用于定义或扩展数据表及其字段。</p><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><p>数据类型会被用于 <a href="#model-extend"><code>model.extend()</code></a> 方法中，其定义如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Field</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  length</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  nullable</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  initial</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  legacy</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="数值类型" tabindex="-1">数值类型 <a class="header-anchor" href="#数值类型" aria-label="Permalink to &quot;数值类型&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">TS 类型</th><th style="text-align:center;">默认长度</th><th style="text-align:center;">默认初始值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">integer</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">10</td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">有符号整型数，长度决定了数据的范围</td></tr><tr><td style="text-align:center;">unsigned</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">10</td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">无符号整型数，长度决定了数据的范围</td></tr><tr><td style="text-align:center;">float</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">固定长度</td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">单精度浮点数</td></tr><tr><td style="text-align:center;">double</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">固定长度</td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">双精度浮点数</td></tr></tbody></table><h3 id="字符串类型" tabindex="-1">字符串类型 <a class="header-anchor" href="#字符串类型" aria-label="Permalink to &quot;字符串类型&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">TS 类型</th><th style="text-align:center;">默认长度</th><th style="text-align:center;">默认初始值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">char</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">64</td><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;">定长的字符串</td></tr><tr><td style="text-align:center;">string</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">255</td><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;">变长的字符串</td></tr><tr><td style="text-align:center;">text</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">65535</td><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;">变长的字符串</td></tr></tbody></table><h3 id="时间类型" tabindex="-1">时间类型 <a class="header-anchor" href="#时间类型" aria-label="Permalink to &quot;时间类型&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">TS 类型</th><th style="text-align:center;">默认长度</th><th style="text-align:center;">默认初始值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">date</td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;">固定长度</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">日期值</td></tr><tr><td style="text-align:center;">time</td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;">固定长度</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">时间值</td></tr><tr><td style="text-align:center;">timestamp</td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;">固定长度</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">时间戳</td></tr></tbody></table><h3 id="其他类型" tabindex="-1">其他类型 <a class="header-anchor" href="#其他类型" aria-label="Permalink to &quot;其他类型&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">TS 类型</th><th style="text-align:center;">默认长度</th><th style="text-align:center;">默认初始值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">json</td><td style="text-align:center;"><code>object</code></td><td style="text-align:center;">65535</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">可被序列化为 json 的结构化数据</td></tr><tr><td style="text-align:center;">list</td><td style="text-align:center;"><code>string[]</code></td><td style="text-align:center;">65535</td><td style="text-align:center;"><code>[]</code></td><td style="text-align:center;">字符串构成的列表，序列化时以逗号分隔</td></tr></tbody></table><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-model-extend" tabindex="-1">ctx.model.extend(name, fields, config?) <a class="header-anchor" href="#ctx-model-extend" aria-label="Permalink to &quot;ctx.model.extend(name, fields, config?)&quot;">​</a></h3>`,16),g=t("li",null,[t("strong",null,"name:"),e(),t("code",null,"string"),e(" 数据表名")],-1),y=t("li",null,[t("strong",null,"fields:"),e(),t("code",null,"Field.Config"),e(" 字段信息")],-1),p=t("strong",null,"config:",-1),x=t("code",null,"Table.Meta",-1),k=t("li",null,[t("strong",null,"config.primary:"),e(),t("code",null,"string | string[]"),e(" 主键名，默认为 "),t("code",null,"'id'")],-1),u=t("li",null,[t("strong",null,"config.unique:"),e(),t("code",null,"(string | string[])[]"),e(" 值唯一的键名列表")],-1),_=t("strong",null,"config.foreign:",-1),m=t("code",null,"Dict<[string, string]>",-1),b=t("li",null,[t("strong",null,"config.autoInc:"),e(),t("code",null,"boolean"),e(" 是否使用自增主键")],-1),C=l('<p>扩展一个新的数据表。</p><h3 id="ctx-model-create" tabindex="-1">ctx.model.create(name, data) <a class="header-anchor" href="#ctx-model-create" aria-label="Permalink to &quot;ctx.model.create(name, data)&quot;">​</a></h3><ul><li><strong>name:</strong> <code>string</code> 数据表名</li><li><strong>data:</strong> <code>any</code> 数据</li></ul><p>创建一条新的数据，折叠嵌套属性，并填充必要的默认值。</p>',4),f={id:"ctx-model-migrate",tabindex:"-1"},B=t("a",{class:"header-anchor",href:"#ctx-model-migrate","aria-label":'Permalink to "ctx.model.migrate(name, fields, callback) <badge type="warning">实验性</badge>"'},"​",-1),D=l('<ul><li><strong>name:</strong> <code>string</code> 数据表名</li><li><strong>fields:</strong> <code>Field.Config</code> 要迁移的字段信息</li><li><strong>callback:</strong> <code>(db: Database) =&gt; Promise&lt;void&gt;</code> 迁移的回调函数</li></ul><p>设置 <a href="./../../guide/database/model.html#整表迁移">整表迁移</a> 的操作。</p>',2);function A(E,T,P,q,F,S){const a=r("badge");return c(),d("div",null,[h,t("ul",null,[g,y,t("li",null,[p,e(),x,e(" 表的基本配置 "),t("ul",null,[k,u,t("li",null,[_,e(),m,e(" 外键列表 "),n(a,{type:"warning"},{default:s(()=>[e("实验性")]),_:1})]),b])])]),C,t("h3",f,[e("ctx.model.migrate(name, fields, callback) "),n(a,{type:"warning"},{default:s(()=>[e("实验性")]),_:1}),e(),B]),D])}const I=i(o,[["render",A]]);export{V as __pageData,I as default};
