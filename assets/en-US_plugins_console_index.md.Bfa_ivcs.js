import{_ as e,k as o,j as a,m as l}from"./chunks/framework.CN4YI0Ml.js";const f=JSON.parse('{"title":"Console (Console)","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/plugins/console/index.md","filePath":"en-US/plugins/console/index.md"}'),i={name:"en-US/plugins/console/index.md"},t=l('<h1 id="console" tabindex="-1">Console (Console) <a class="header-anchor" href="#console" aria-label="Permalink to &quot;Console (Console)&quot;">​</a></h1><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="uipath" tabindex="-1">uiPath <a class="header-anchor" href="#uipath" aria-label="Permalink to &quot;uiPath&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>/console</code></li></ul><p>前端页面呈现的路径。</p><h3 id="apipath" tabindex="-1">apiPath <a class="header-anchor" href="#apipath" aria-label="Permalink to &quot;apiPath&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>/status</code></li></ul><p>后端 API 服务的路径。</p><h3 id="selfurl" tabindex="-1">selfUrl <a class="header-anchor" href="#selfurl" aria-label="Permalink to &quot;selfUrl&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;&#39;</code></li></ul><p>Koishi 服务暴露在公网的地址。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>与其他需要 <code>selfUrl</code> 配置项的地方不同的是，这里的属性不会继承 <code>app.config.selfUrl</code> 的值。这是因为，由于这里缺省时会使用相对路径，网页依旧可以正常访问。</p><p>只有你将 <code>uiPath</code> 和 <code>apiPath</code> 分别部署到了不同的端口或域名时，这个选项才建议使用。</p></div><h3 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-label="Permalink to &quot;open&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>应用启动后自动打开网页。</p><h3 id="devmode" tabindex="-1">devMode <a class="header-anchor" href="#devmode" aria-label="Permalink to &quot;devMode&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>启用<a href="#调试模式">调试模式</a>。</p>',18),d=[t];function c(n,s,r,h,p,u){return a(),o("div",null,d)}const m=e(i,[["render",c]]);export{f as __pageData,m as default};
