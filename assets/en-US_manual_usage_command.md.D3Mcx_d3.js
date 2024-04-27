import{_ as c,k as d,f as a,A as o,l as e,D as t,m as i,C as l,j as h}from"./chunks/framework.CN4YI0Ml.js";const se=JSON.parse('{"title":"Command System","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/usage/command.md","filePath":"en-US/manual/usage/command.md"}'),r={name:"en-US/manual/usage/command.md"},m=e("h1",{id:"command-system",tabindex:"-1"},[t("Command System "),e("a",{class:"header-anchor",href:"#command-system","aria-label":'Permalink to "Command System"'},"​")],-1),p=e("p",null,"After learning the basic usage of the Koishi Console, we can now talk about how to talk with bots! Let's start with the example from the previous section:",-1),u=e("p",null,"Available commands:",-1),_=e("p",{class:"indent-1"},"echo Send messages",-1),f=e("p",{class:"indent-1"},"help Show help",-1),g=e("p",null,'Type "help <command>" to see syntax and examples for a specific command.',-1),b=i('<p>The output relates to two plugins:</p><ul><li>help 指令由 <a href="./../../plugins/common/help.html">help</a> 插件提供，它可以显示指令列表或具体指令的帮助信息</li><li>echo 指令由 <a href="./../../plugins/common/echo.html">echo</a> 插件提供，它可以将用户的输入原样返回</li></ul><p>Most of the features of a Koishi bot are provided to users by commands. More plugins you have installed, there would be more commands available.</p><h2 id="display-help-information" tabindex="-1">Display Help Information <a class="header-anchor" href="#display-help-information" aria-label="Permalink to &quot;Display Help Information&quot;">​</a></h2><p>An optional parameter followed with help command could be used to view the detail of specific commands:</p>',5),k=e("p",null,"Command: echo <message...>",-1),w=e("p",null,"Send messages",-1),y=e("p",null,"Available options:",-1),A=e("p",{class:"indent-1"},"-e, --escape Escape characters in message",-1),v=e("p",{class:"indent-1"},"-E, --unescape Unescape characters in message",-1),x=e("p",null,"You might find that the help itself is a command as well, so is it possible to use help to show the help message of help itself? The answer is positive:",-1),T=e("p",null,"Command: help [command]",-1),C=e("p",null,"Show help",-1),S=e("p",null,"Available options:",-1),q=e("p",{class:"indent-1"},"-a, --authority show authority requirements",-1),P=e("p",{class:"indent-1"},"-H, --show-hidden show hidden options and commands",-1),I=i('<h2 id="arguments-and-options" tabindex="-1">Arguments and Options <a class="header-anchor" href="#arguments-and-options" aria-label="Permalink to &quot;Arguments and Options&quot;">​</a></h2><p>在上面的用法中，我们接触到了两个新的概念：<strong>参数 (Argument)</strong> 和 <strong>选项 (Option)</strong>。</p><p>参数分为必选参数和可选参数，分别用尖括号 <code>&lt;&gt;</code> 和方括号 <code>[]</code> 表示。A command may have arbitrary parameters, their orders are fixed, which means that users should enter the parameters in the order that pre-defined by the command. Required parameters must be precedent before optional parameters. When user enters fewer parameters than the required parameters that the plugin requires, the plugin should often print errors. When user enters extra parameters, they would be ignored generally.</p><p>For example, command <code>help</code> has an optional argument which indicates the name of the command to be viewed; command <code>echo</code> has a required argument which indicates the message to be sent. Let&#39;s see what will happen if the required parameter is missing:</p>',4),E=e("p",null,"Please type to send",-1),K=e("p",null,[t("The behavior would be affected by the options as well. 它通常以 "),e("code",null,"-"),t(" 或 "),e("code",null,"--"),t(" 开头，后面不带空格地跟着一个固定的单词，称为选项名称。There are no order requirements between options, but generally we should put options before parameters. Let's try out!")],-1),F=e("img",{src:"https://koishi.chat/logo.png",width:"100"},null,-1),V=e("p",null,[t("在上面的例子中，我们使用了 "),e("code",null,"-E"),t(" 选项，成功改变了输出的内容。We will talk about it in detail in the next section.")],-1),N=e("p",null,[t("In addition to being required and optional, the arguments can be divided into fixed and variable length. A variable-length argument would be fed all characters including whitespace characters, while a fixed-length one stops feeding when it reads whitespace characters. 变长参数通过参数名前后的 "),e("code",null,"..."),t(" 来指示，例如 "),e("code",null,"echo"),t(" 指令的参数就是一个变长参数。If it is required to pass whitespace characters into a fixed-length argument, you can wrap the whole argument into quotes, just like:")],-1),D=e("p",null,"Additionally, options might require parameters as well. You should see a help information as below when you have any translate plugin installed.",-1),M=e("p",null,"Command: translate <text...>",-1),U=e("p",null,"Translate Text",-1),z=e("p",null,"Available options:",-1),H=e("p",{class:"indent-1"},"-s, --source <lang> Source Language (Auto-detect by default)",-1),L=e("p",{class:"indent-1"},"-t, --target <lang> Target Language (Chinese by default)",-1),O=i(`<p>在这个例子中，<code>-s</code> 和 <code>-t</code> 都是带有参数的选项。我们使用 <code>-t ja</code> 来指定目标语言为日语，源语言仍然采用了默认行为。</p><h2 id="command-prefix" tabindex="-1">Command Prefix <a class="header-anchor" href="#command-prefix" aria-label="Permalink to &quot;Command Prefix&quot;">​</a></h2><p>However, it is very vulnerable to make a mistake if trigger the command just by a single wordIn order to avoid this case, Koishi introduced the concept of prefix trigger.在「全局设置」中，我们提供了名为 <code>prefix</code> 和 <code>nickname</code> 的配置项。假如将 <code>prefix</code> 设置为 <code>/</code>，<code>nickname</code> 设置为 <code>四季酱</code>，则在群聊环境下只有以下信息可以触发指令调用：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Shiki-chan,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> echo hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">@Shiki-chan</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> echo hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">/echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span></code></pre></div><p>In other words, the actual condition in which a command can be triggered is:</p><ul><li>消息以 <code>prefix</code> 开头，后面紧跟着指令调用</li><li>消息以 <code>nickname</code> 开头，后面可以有逗号或空白字符，再后面是指令调用</li><li>消息以 @机器人 开头 (可以有多个 <code>@</code>，但至少一个是机器人账号)，后面是指令调用</li></ul><p>For groups with lots of people or more than one bot, we strongly recommend that each bot configure a different command prefix.In the context of private chat, there are no restrictions as there is no fear of mistakes.Command calls without a prefix can also be performed properly.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>关于 <code>prefix</code> 的几点提示：</strong></p><ol><li><code>prefix</code> 是一个列表，默认值为 <code>[&#39;&#39;]</code> 表示无需前缀也能触发；将列表清空会导致所有指令都无法通过 <code>prefix</code> 触发 (但仍然可以通过私聊或 <code>nickname</code> 或 @机器人 触发)</li><li>如果你在 <code>prefix</code> 中设置了多个值，例如 <code>[&#39;.&#39;, &#39;/&#39;, &#39;&#39;]</code>，那么 <code>.</code>, <code>/</code> 或无前缀都能触发指令；但由于 Koishi 是按顺序匹配各个前缀的，因此空串 <code>&#39;&#39;</code> 必须写在最后一个</li><li>可以为不同的会话设置不同的 <code>prefix</code>，具体请参考 <a href="./customize.html#过滤器">过滤器</a> 一节</li></ol></div><h2 id="subcommand" tabindex="-1">subcommand <a class="header-anchor" href="#subcommand" aria-label="Permalink to &quot;subcommand&quot;">​</a></h2><p><a href="./../../plugins/common/admin.html">admin</a> 插件提供了名为 user 的指令，现在让我们调用一下：</p>`,10),R=e("p",null,"Command: user",-1),W=e("p",null,"User Management",-1),j=e("p",null,"Available subcommands:",-1),$=e("p",{class:"indent-1"},"authorize Permission Management",-1),B=e("p",{class:"indent-1"},"user.locale Language Preference",-1),Y=i("<p>Here is a new concept: subcommands.子指令在调用上与普通的指令并没有区别，但它们将不会显示在 <code>help</code> 返回的全局指令列表中，而只会显示在父指令 <code>user</code> 的帮助信息中。The purpose of this design is to avoid too large a list of instructions and to organize them in a clearer way.</p><p>在上面的例子中，我们还能发现 Koishi 存在两种不同的子指令：一种是 <strong>层级式</strong>，例如 <code>authorize</code>；而另一种则是 <strong>派生式</strong>，例如 <code>user.locale</code>。后者跟前者的区别是，它的名称带有父指令的名称，以及一个小数点 <code>.</code>。We also need to add this decimal point when calling:</p>",2),G=e("p",null,[t("如果父指令本身没有功能，那么 "),e("code",null,"user"),t(" 和 "),e("code",null,"user -h"),t(" 的效果是一样的。In that situation, we can use spaces instead of dots to call derivative subcommands:")],-1),J=i('<p>Users who are familiar with Git may find out, this design draws on the 2-level command of Git: When features of a command are too complex, we can split them into several subcommands, to make the feature of command clear.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>至于 user.locale 是干什么的，想必大家也已经猜出来了。我们留到 <a href="./customize.html#国际化">国际化</a> 一节再详细介绍。</p></div><h2 id="command-management" tabindex="-1">Command Management <a class="header-anchor" href="#command-management" aria-label="Permalink to &quot;Command Management&quot;">​</a></h2><p>Open the Console, we can find the page named &#39;Command Management&#39; on the activity bar.You can view a list of all current commands here, and set behaviors of these commands.</p><h3 id="set-aliases" tabindex="-1">Set Aliases <a class="header-anchor" href="#set-aliases" aria-label="Permalink to &quot;Set Aliases&quot;">​</a></h3><p>Open the detail page of any commands, we can find &quot;Name Setting&quot; with all aliases on it.Each alias can be used to trigger the command, the first alias will be shown as the default name in the help.</p><p>We can add or delete aliases here, or set any alias to the default display name.例如，在 <code>echo</code> 指令中点击「添加别名」，输入 <code>复读</code>，然后点击「设为默认」，这样一来，用户在帮助中看到的就是 <code>复读</code> 而不是 <code>echo</code> 了。</p><h3 id="add-subcommands" tabindex="-1">Add Subcommands <a class="header-anchor" href="#add-subcommands" aria-label="Permalink to &quot;Add Subcommands&quot;">​</a></h3><p>In the left sidebar, we can drag any command (except derivative command) below another command, which will make it a subcommand of the another command.例如，我们可以将 <a href="./../../plugins/common/bind.html"><code>bind</code></a> 指令设置为 <code>user</code> 指令的子指令，因为这属于用户管理的一部分。</p><p>Click the plus button in the top right, we can create a new command.This new command naturally lacks inherent actions, its primary purpose is to serve as the parent command for other commands, aiming to enhance the presentation quality.For the new command created through this method, we can remove them by clicking on the trash button in the upper right corner.</p><h3 id="permission-management" tabindex="-1">Permission Management <a class="header-anchor" href="#permission-management" aria-label="Permalink to &quot;Permission Management&quot;">​</a></h3><p>在「名称设置」下方还有更多的配置项，我们可以在这里进一步配置指令对用户的访问权限。例如，将 echo 指令的 <code>authority</code> 设置为 <code>2</code>，那么将只有 2 级以上权限的用户才能调用该指令。</p><p>我们甚至还可以单独设置每一个指令选项的权限等级。例如，我们可以单独给 <code>-E, --unescape</code> 选项设置 <code>authority</code> 为 3。这样一来，只有 3 级以上权限的用户才能使用 <code>echo -E</code> 的功能。</p><p>关于用户权限，请参考 <a href="./customize.html#权限管理">权限管理</a> 一节。</p>',14);function Q(X,Z,ee,ae,oe,te){const n=l("chat-message"),s=l("chat-panel");return h(),d("div",null,[m,p,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("help")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[u,_,f,g]),_:1})]),_:1}),b,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("help echo")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[k,w,y,A,v]),_:1})]),_:1}),x,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("help help")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[T,C,S,q,P]),_:1})]),_:1}),I,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("echo")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[E]),_:1})]),_:1}),K,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t('echo <image url="https://koishi.chat/logo.png"/>')]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[t('<image url="https://koishi.chat/logo.png"/>')]),_:1}),a(n,{nickname:"Alice"},{default:o(()=>[t('echo -E <image url="https://koishi.chat/logo.png"/>')]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[F]),_:1})]),_:1}),V,N,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t('help "foo bar"')]),_:1})]),_:1}),D,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("help translate")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[M,U,z,H,L]),_:1}),a(n,{nickname:"Alice"},{default:o(()=>[t("translate -t ja Hello, world")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[t("こんにちは世界")]),_:1})]),_:1}),O,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("user")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[R,W,j,$,B]),_:1})]),_:1}),Y,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("user.locale en")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[t("User data updated.")]),_:1})]),_:1}),G,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("user locale zh ")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[t("User data has been changed.")]),_:1})]),_:1}),J])}const ie=c(r,[["render",Q]]);export{se as __pageData,ie as default};
