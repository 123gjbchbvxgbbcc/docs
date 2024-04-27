import{_ as e,k as a,j as o,m as i}from"./chunks/framework.CN4YI0Ml.js";const u=JSON.parse('{"title":"@koishijs/plugin-adapter-wecom","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/plugins/adapter/wecom.md","filePath":"de-DE/plugins/adapter/wecom.md"}'),r={name:"de-DE/plugins/adapter/wecom.md"},t=i('<h1 id="koishijs-plugin-adapter-wecom" tabindex="-1">@koishijs/plugin-adapter-wecom <a class="header-anchor" href="#koishijs-plugin-adapter-wecom" aria-label="Permalink to &quot;@koishijs/plugin-adapter-wecom&quot;">​</a></h1><h2 id="接入方法" tabindex="-1">接入方法 <a class="header-anchor" href="#接入方法" aria-label="Permalink to &quot;接入方法&quot;">​</a></h2><ol><li>前往 <a href="https://work.weixin.qq.com/wework_admin/frame#profile" target="_blank" rel="noreferrer">我的企业</a>，复制页面下方企业 ID，填入插件的 corpId。</li><li>前往 <a href="https://work.weixin.qq.com/wework_admin/frame#apps" target="_blank" rel="noreferrer">应用管理</a> 页面下方点击创建应用，填写应用信息。</li><li>复制 <code>AgentId</code> 填入插件的 agentId 字段，查看 Secret 填入插件的 <code>secret</code> 字段。</li><li>在下方功能板块点击「设置 API 接收」，URL 填写机器人的 selfUrl 值后连接 <code>/wecom</code>，Token 和 EncodingAESKey 点击随机获取，分别填入插件的 <code>token</code> 和 <code>aesKey</code> 字段。先启用插件，再在「API 接收消息」页面点击保存.</li><li>于页面左上角返回应用页面，在下方开发者接口板块点击「企业可信 IP」的「配置」，设置白名单 IP，确定后稍等几分钟即可使用插件。</li><li>推荐在几分钟后停用并启用一次插件，以便加载出平台信息呈现在控制台内。</li></ol><p>参考文档：<a href="https://developer.work.weixin.qq.com/document/path/90487" target="_blank" rel="noreferrer">https://developer.work.weixin.qq.com/document/path/90487</a></p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="config-corpid" tabindex="-1">config.corpId <a class="header-anchor" href="#config-corpid" aria-label="Permalink to &quot;config.corpId&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>企业 ID。</p><h3 id="config-agentid" tabindex="-1">config.agentId <a class="header-anchor" href="#config-agentid" aria-label="Permalink to &quot;config.agentId&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>AgentID。</p><h3 id="config-secret" tabindex="-1">config.secret <a class="header-anchor" href="#config-secret" aria-label="Permalink to &quot;config.secret&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>AppSecret。</p><h3 id="config-token" tabindex="-1">config.token <a class="header-anchor" href="#config-token" aria-label="Permalink to &quot;config.token&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>Webhook Token。</p><h3 id="config-aeskey" tabindex="-1">config.aesKey <a class="header-anchor" href="#config-aeskey" aria-label="Permalink to &quot;config.aesKey&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>EncodingAESKey。</p>',20),n=[t];function c(l,d,s,h,p,f){return o(),a("div",null,n)}const m=e(r,[["render",c]]);export{u as __pageData,m as default};
