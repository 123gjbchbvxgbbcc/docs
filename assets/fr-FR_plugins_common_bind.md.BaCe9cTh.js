import{_ as i,k as a,j as e,m as t}from"./chunks/framework.CN4YI0Ml.js";const _=JSON.parse('{"title":"账号绑定 (Bind)","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/plugins/common/bind.md","filePath":"fr-FR/plugins/common/bind.md"}'),o={name:"fr-FR/plugins/common/bind.md"},n=t('<h1 id="账号绑定" tabindex="-1">账号绑定 (Bind) <a class="header-anchor" href="#账号绑定" aria-label="Permalink to &quot;账号绑定 (Bind)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>要使用本插件，你需要安装数据库支持。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>建议配合阅读 <a href="./../../manual/usage/platform.html#通过指令绑定">入门 &gt; 账号系统 &gt; 账号绑定</a> 章节。</p></div><p>@koishijs/plugin-bind 提供了一个指令，允许用户进行账号绑定。</p><h2 id="指令-bind" tabindex="-1">指令：bind <a class="header-anchor" href="#指令-bind" aria-label="Permalink to &quot;指令：bind&quot;">​</a></h2><ul><li>基本语法：<code>bind</code></li><li>最低权限：0</li></ul><p>bind 指令用于跨平台绑定账号。该指令 0 级权限即可调用。</p><p>如果此指令在私聊环境下被调用，则 Koishi 会生成一串随机码。你只需在 5 分钟内使用你的其他账号在要绑定的平台内向机器人发送这串随机码，即可完成绑定。</p><p>如果此指令在群聊环境下被调用，由于此时生成的随机码是公开的，你需要首先按照上述流程发送一次随机码。接着，收到并核验过随机码的机器人将再向你发送一串新的随机码。你仍需要在 5 分钟内使用你一开始的账号在之前的平台内向机器人发送这串随机码，即可完成绑定。</p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="tokenprefix" tabindex="-1">tokenPrefix <a class="header-anchor" href="#tokenprefix" aria-label="Permalink to &quot;tokenPrefix&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;koishi/&#39;</code></li></ul><p>生成的随机码的前缀。</p>',13),l=[n];function s(d,r,c,p,h,m){return e(),a("div",null,l)}const b=i(o,[["render",s]]);export{_ as __pageData,b as default};
