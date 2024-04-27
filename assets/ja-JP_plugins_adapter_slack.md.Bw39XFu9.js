import{_ as e,k as a,j as i,m as l,bs as o,bt as t,bu as r,bv as s,bw as c,bx as n,by as p,bz as d}from"./chunks/framework.CN4YI0Ml.js";const S=JSON.parse('{"title":"@koishijs/plugin-adapter-slack","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/plugins/adapter/slack.md","filePath":"ja-JP/plugins/adapter/slack.md"}'),h={name:"ja-JP/plugins/adapter/slack.md"},g=l('<h1 id="koishijs-plugin-adapter-slack" tabindex="-1">@koishijs/plugin-adapter-slack <a class="header-anchor" href="#koishijs-plugin-adapter-slack" aria-label="Permalink to &quot;@koishijs/plugin-adapter-slack&quot;">​</a></h1><h2 id="接入方式" tabindex="-1">接入方式 <a class="header-anchor" href="#接入方式" aria-label="Permalink to &quot;接入方式&quot;">​</a></h2><p>Slack 适配器提供了两种接入方式：<code>http</code> 和 <code>ws</code> (推荐)。其中，<code>http</code> 连接方式需要一个公网可访问的地址。在接入之前，请根据使用需求填写插件的 <a href="#config-protocol"><code>protocol</code></a> 字段。</p><ol><li><p>准备一个 <a href="https://slack.com/signin" target="_blank" rel="noreferrer">Slack</a> 账号和工作区。</p></li><li><p>前往 <a href="https://api.slack.com/apps" target="_blank" rel="noreferrer">应用后台</a>，点击「Create New App」&gt;「From Scratch」，填入应用名称和所添加的工作区 (目前适配器只支持一个应用处理一个工作区的事件)，点击「Create App」。</p></li></ol><p><img src="'+o+'" alt="app-1">3. 仅限 <code>http</code> 连接方式：在跳转至的应用信息页面，在底部复制 <code>Signing Secret</code>，填入插件的 <a href="#config-signing"><code>signing</code></a> 字段。</p><p><img src="'+t+'" alt="secret-1"></p><ol start="4"><li>在「App-Level Tokens」一栏，点击带有 Generate 字样的按钮，填写 Token 名称，在下方下拉框中选择 <code>connections:write</code>，点击绿色 Generate 按钮，在弹出的对话框中点击 Copy 按钮，填入插件的 <a href="#config-token"><code>token</code></a> 字段。</li></ol><p><img src="'+r+'" alt="secret-2"></p><ol start="5"><li>仅限 <code>http</code> 连接方式：在左侧打开「Event Subscriptions」页面，勾选「Enable Events」。将机器人的 <code>selfUrl</code> 值后连接 <code>/slack</code> (如 <code>https://example.com/slack</code>)，填入「Request URL」中。</li></ol><p><img src="'+s+'" alt="webhook"></p><ol start="6"><li>仅限 <code>ws</code> 连接方式：在左侧打开「Socket Mode」页面，勾选「Enable Socket Mode」；再打开「Event Subscriptions」页面，勾选「Enable Events」。</li></ol><p><img src="'+c+'" alt="websocket"></p><ol start="7"><li>前往「Event Subscriptions」页面，在「Subscribe to bot events」下方勾选事件 (参见 <a href="#推荐的事件列表">推荐的事件列表</a>)，填写完整后点击右下角的绿色「Save Changes」按钮保存。</li></ol><p><img src="'+n+'" alt="events"></p><ol start="8"><li>前往「OAuth &amp; Permissions」页面，在「Bot Token Scopes」下方添加权限 (参见 <a href="#推荐的权限列表">推荐的权限列表</a>)。</li></ol><p><img src="'+p+'" alt="scopes"></p><ol start="9"><li>返回页面上方，点击「Install to Workspace」，点击 Allow 授权，复制「Bot User OAuth Token」，填入插件的 <a href="#config-bottoken"><code>botToken</code></a> 字段。</li></ol><p><img src="'+d+'" alt="workspace"></p><ol start="10"><li>在相应工作区 @ 机器人名称或右键频道详情，选择 集成-添加应用 添加机器人到频道中。</li></ol><h3 id="推荐的事件列表" tabindex="-1">推荐的事件列表 <a class="header-anchor" href="#推荐的事件列表" aria-label="Permalink to &quot;推荐的事件列表&quot;">​</a></h3><ul><li>channel_archive</li><li>channel_created</li><li>channel_deleted</li><li>channel_left</li><li>channel_rename</li><li>member_joined_channel</li><li>member_left_channel</li><li>message.channels</li><li>message.groups</li><li>message.im</li><li>reaction_added</li><li>reaction_removed</li><li>team_join</li></ul><h3 id="推荐的权限列表" tabindex="-1">推荐的权限列表 <a class="header-anchor" href="#推荐的权限列表" aria-label="Permalink to &quot;推荐的权限列表&quot;">​</a></h3><ul><li>channels:history</li><li>channels:read</li><li>channels:write.invites</li><li>chat:write</li><li>chat:write.customize</li><li>chat:write.public</li><li>files:read</li><li>files:write</li><li>groups:history</li><li>groups:read</li><li>groups:write</li><li>im:history</li><li>im:write</li><li>reactions:read</li><li>reactions:write</li><li>users:read</li></ul><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="config-protocol" tabindex="-1">config.protocol <a class="header-anchor" href="#config-protocol" aria-label="Permalink to &quot;config.protocol&quot;">​</a></h3><ul><li>可选值: http, ws</li></ul><p>要使用的协议类型。</p><h3 id="config-token" tabindex="-1">config.token <a class="header-anchor" href="#config-token" aria-label="Permalink to &quot;config.token&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>必需选项</li></ul><p>应用令牌。</p><h3 id="config-bottoken" tabindex="-1">config.botToken <a class="header-anchor" href="#config-bottoken" aria-label="Permalink to &quot;config.botToken&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>必需选项</li></ul><p>机器人令牌。</p><h2 id="http-配置项" tabindex="-1">HTTP 配置项 <a class="header-anchor" href="#http-配置项" aria-label="Permalink to &quot;HTTP 配置项&quot;">​</a></h2><h3 id="config-signing" tabindex="-1">config.signing <a class="header-anchor" href="#config-signing" aria-label="Permalink to &quot;config.signing&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>必需选项</li></ul><p>用于验证请求来源的签名密钥。</p><h2 id="ws-配置项" tabindex="-1">WS 配置项 <a class="header-anchor" href="#ws-配置项" aria-label="Permalink to &quot;WS 配置项&quot;">​</a></h2><p>包括全部的 <a href="./../../api/core/adapter.html#类-adapter-wsclient"><code>WsClient</code></a> 选项。</p>',39),u=[g];function m(k,_,f,b,q,w){return i(),a("div",null,u)}const T=e(h,[["render",m]]);export{S as __pageData,T as default};
