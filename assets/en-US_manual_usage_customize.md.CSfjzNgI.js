import{_ as l,k as r,f as e,A as a,m as s,l as c,C as n,j as u,D as i,b4 as h,b5 as d,b6 as p,b7 as m}from"./chunks/framework.CN4YI0Ml.js";const w=JSON.parse('{"title":"Customize Bot","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/usage/customize.md","filePath":"en-US/manual/usage/customize.md"}'),f={name:"en-US/manual/usage/customize.md"},g=s('<h1 id="customize-bot" tabindex="-1">Customize Bot <a class="header-anchor" href="#customize-bot" aria-label="Permalink to &quot;Customize Bot&quot;">​</a></h1><h2 id="permission-management" tabindex="-1">Permission Management <a class="header-anchor" href="#permission-management" aria-label="Permalink to &quot;Permission Management&quot;">​</a></h2><p>Now that a user system is in place, the next natural requirement is permission management.</p><h3 id="user-permissions" tabindex="-1">User Permissions <a class="header-anchor" href="#user-permissions" aria-label="Permalink to &quot;User Permissions&quot;">​</a></h3><p>Koishi 内部有一套默认的权限系统，它为每个用户赋予了一个权限等级，遵循以下的 <strong>核心规则</strong>：</p><ul><li>数据库中没有的用户默认拥有 0 级权限</li><li>高权限者能够执行一切低权限者的操作</li></ul><p>在此基础上，我们还扩充出了这样的一套 <strong>设计准则</strong>：</p><ul><li>Level 0: non-existing users</li><li>Level 1: All users, limited access to functionality</li><li>Level 2: Advanced user with access to almost all functionality</li><li>Level 3: Admin, able to directly manipulate bot configurations</li><li>Level 4: Senior admin, able to manage other accounts</li></ul><p>你可以基于这套准则对指令进行 <a href="./command.html#权限管理">权限管理</a>，也可以用于部分 <a href="#计算属性">计算属性</a> 的配置项中。</p><p>通过 <a href="./platform.html#配置登录插件">配置登录插件</a> 的方式，你可以快速拥有一个 5 级权限的管理员账号。接下来，要做的就是为其他用户赋予权限了。</p><p>安装 <a href="./../../plugins/common/admin.html">admin</a> 插件。该插件提供了名为 <code>authorize</code> 的指令，可以设置其他用户的权限等级：</p>',11),b=s('<p>任何用户只能对权限等级低于自己的用户进行操作，且操作后的权限等级同样必须低于自己。</p><h3 id="assignment-mechanism" tabindex="-1">Assignment Mechanism <a class="header-anchor" href="#assignment-mechanism" aria-label="Permalink to &quot;Assignment Mechanism&quot;">​</a></h3><p>默认情况下，同一个 Koishi 应用接入的多个机器人账号在同一个频道内，只有一个机器人会响应用户的消息。这是为了防止消息重复发送和循环触发等问题。这个负责响应消息的机器人被称为该频道的「受理人」。默认情况下，第一个收到该频道的消息的机器人会自动成为受理人。</p><p>当受理人账号离线时，即便频道内仍有其他机器人，它们也不会响应你的消息。此时如果想要切换受理人，同样请安装 <a href="./../../plugins/common/admin.html">admin</a> 插件，并使用 <code>@bot assign</code>，其中 @bot 是你所希望的受理人。</p><p>反过来，如果你希望你的 Koishi 实例不主动响应某个频道的消息，可以通过 <code>assign -r</code> 的方式来移除该频道的受理人。其他频道不会受到影响。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>某个频道处于无受理人状态与该频道被过滤器排除的区别在于：前者仍然可以被通过 @机器人 的方式触发指令，而后者无论如何都无法触发指令。具体请参考 <a href="./command.html#触发前缀">触发前缀</a> 章节。</p></div><h3 id="auto-assign" tabindex="-1">Auto-assign <a class="header-anchor" href="#auto-assign" aria-label="Permalink to &quot;Auto-assign&quot;">​</a></h3><p>默认情况下，对于每一条接收到的消息，机器人都会自动向数据库中注册其用户和频道。新注册的用户将默认获得 1 级权限，而新注册的频道会自动以收到消息的机器人为其受理者。如果你不希望有此行为，可以在全局设置中手动配置 <code>autoAuthorize</code> 和 <code>autoAssign</code>。</p><p>上述两个配置项都支持 <a href="#计算属性">计算属性</a>，这也意味着你可以在不同的聊天环境中配置不同的行为。</p><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-label="Permalink to &quot;Filters&quot;">​</a></h2><p>Many times, we hope that certain features can only be used for certain group or private chats.Using permission management means introducing a database, and a lighter approach is to directly affect the plugin&#39;s functional diagram through <strong>filters</strong>.</p><h3 id="plugin-filters" tabindex="-1">Plugin Filters <a class="header-anchor" href="#plugin-filters" aria-label="Permalink to &quot;Plugin Filters&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>A few plugins are unrelated to chat platforms, such as console and database plugins.These plugins therefore have no filter settings.</p></div><p>Most of the plugins provide filter settings at the top of the plugin details page.Click the &#39;Add Condition&#39; button to create a filter condition.Can include or exclude any platform/user/group/channel/robot by setting filters.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果不知道这些 ID 是什么，可以使用 <a href="./platform.html#获取账号信息">获取账号信息</a> 中介绍的 <a href="./../../plugins/common/inspect.html">inspect</a> 插件。</p></div><p>After adding a condition, you will find that the button below has changed to two options: &quot;Add AND Condition&quot; and &quot;Add OR Condition&quot;.Koishi&#39;s filter supports a Protein secondary structure. A series of conditions in the inner layer form a condition group with a logical relationship of &quot;and&quot;, and a series of bars in the outer layer form the final filter condition with a recursive relationship of &quot;or&quot;.</p><h3 id="conditional-properties" tabindex="-1">Conditional Properties <a class="header-anchor" href="#conditional-properties" aria-label="Permalink to &quot;Conditional Properties&quot;">​</a></h3><p>Koishi not only supports setting up filters at the plugin level, but certain configuration items also support taking different values in different sessions.For example, we can see <code>prefix</code>, <code>autopsying</code> on the right side of configuration items with a &quot;…&quot; button</p><p class="dark-only"><img src="'+h+'" alt="computed"></p><p class="light-only"><img src="'+d+'" alt="computed"></p><p>Click this [..] button to turn a regular configuration item into a calculationWe can configure a series of values that meet a filter, and a default value that does not meet anything.</p><p>By utilizing this feature, we can achieve some complex functions, such as:</p><ul><li>Block all messages from certain groups</li><li>Using different command prefixes on different platforms</li><li>Open extra limit for a specific user</li></ul><h2 id="internationalization" tabindex="-1">Internationalization <a class="header-anchor" href="#internationalization" aria-label="Permalink to &quot;Internationalization&quot;">​</a></h2><p>Koishi supports internationalization natively, which means that a Koishi bot could switch languages according to different context. This might no matter with you at all...but wait a second! This section might show you some very useful features. Internationalization is not as simple as you think.</p><h3 id="set-language-preferences" tabindex="-1">Set Language Preferences <a class="header-anchor" href="#set-language-preferences" aria-label="Permalink to &quot;Set Language Preferences&quot;">​</a></h3><p>In Koishi, each user and channel managed by the application itself can independently set language preferences.其中，应用级别的默认语言通过全局配置项 <code>locale</code> 来设置，而用户、频道的语言偏好则通过 <a href="./../../plugins/common/admin.html">admin</a> 插件提供的 <code>user.locale</code> 和 <code>channel.locale</code> 指令来管理 (还记得指令系统中的 <a href="./command.html#子指令">这个例子</a> 吧)。</p><p>By default, the priority of preferred language is Channel &gt; User &gt; GlobalA group may have a large number of users who use different native languages participating in discussions, and different language channels are usually set up to facilitate communication.而对于此类情况，频道优先策略就可以让机器人在这些频道内始终使用预设好的语言来回答，而对于未设置语言偏好的频道，机器人仍然会遵循用户的偏好设置。Of course, you can also change this behavior through the global configuration item<code>i18n. output</code>.</p><h3 id="localize-text" tabindex="-1">Localize Text <a class="header-anchor" href="#localize-text" aria-label="Permalink to &quot;Localize Text&quot;">​</a></h3><p>Of course, most plugins only support Chinese.If you want to make your Koishi bot support other languages, you can modify texts of plugins locally, instead of sending Pull Requests to their authors.</p><p>Click &#39;Localization&#39; on the activity bar, you will see page like below:</p><p class="dark-only"><img src="'+p+'" alt="locales"></p><p class="light-only"><img src="'+m+'" alt="locales"></p><p>Select categories on the left, and select the language to display in the top right corner, and the zone to edit texts is in the middle.其中，文本框里的占位符对应于插件本身提供的文本，可以在翻译到其他语言时用做参考。</p><p>然而，这个页面还有另一个用法，就是修改已有的文本！例如在上面的截图中，<code>low-authority</code> 原本对应到的文本是 <code>权限不足</code>，我们可以将它修改为 <code>哼，不给用</code>。现在让我们找个带权限等级的指令试试看有什么效果：</p>',35),_=c("p",null,"If you do things like above, you can get fully customized texts of your bot, and make your bot very different.",-1);function y(k,q,v,x,P,z){const t=n("chat-message"),o=n("chat-panel");return u(),r("div",null,[g,e(o,null,{default:a(()=>[e(t,{nickname:"Alice"},{default:a(()=>[i("authorize -u @Bob 2")]),_:1}),e(t,{nickname:"Koishi"},{default:a(()=>[i("User data updated.")]),_:1})]),_:1}),b,e(o,null,{default:a(()=>[e(t,{nickname:"Alice"},{default:a(()=>[i("authorize -u @Bob 5")]),_:1}),e(t,{nickname:"Koishi"},{default:a(()=>[i("哼，不给用！")]),_:1})]),_:1}),_])}const C=l(f,[["render",y]]);export{w as __pageData,C as default};
