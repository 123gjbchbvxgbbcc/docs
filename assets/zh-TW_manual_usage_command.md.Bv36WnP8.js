import{_ as i,k as d,f as o,A as a,l as e,D as l,m as s,C as n,j as h}from"./chunks/framework.CN4YI0Ml.js";const ce=JSON.parse('{"title":"指令系統","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/manual/usage/command.md","filePath":"zh-TW/manual/usage/command.md"}'),_={name:"zh-TW/manual/usage/command.md"},p=e("h1",{id:"指令系統",tabindex:"-1"},[l("指令系統 "),e("a",{class:"header-anchor",href:"#指令系統","aria-label":'Permalink to "指令系統"'},"​")],-1),u=e("p",null,"在瞭解了控制檯的基本用法後，我們終於可以開始介紹如何與機器人對話了！讓我們從上一節中看到的例子開始：",-1),r=e("p",null,"當前可用的指令有：",-1),m=e("p",{class:"indent-1"},"echo 傳送訊息",-1),k=e("p",{class:"indent-1"},"help 顯示幫助資訊",-1),f=e("p",null,"輸入“幫助 指令名”檢視特定指令的語法和使用示例。",-1),g=s('<p>這裡的輸出與兩個外掛有關：</p><ul><li>help 指令由 <a href="./../../plugins/common/help.html">help</a> 插件提供，它可以显示指令列表或具体指令的帮助信息</li><li>echo 指令由 <a href="./../../plugins/common/echo.html">echo</a> 插件提供，它可以将用户的输入原样返回</li></ul><p>一個 Koishi 機器人的絕大部分功能都是透過指令提供給使用者的。當你安裝了更多的外掛後，你也就有了更多的指令可供使用。</p><h2 id="檢視幫助" tabindex="-1">檢視幫助 <a class="header-anchor" href="#檢視幫助" aria-label="Permalink to &quot;檢視幫助&quot;">​</a></h2><p>help 指令後還可以新增一個引數，用於檢視特定指令的幫助資訊：</p>',5),T=e("p",null,"指令：echo <message...>",-1),A=e("p",null,"發送消息",-1),b=e("p",null,"可用的選項有：",-1),x=e("p",{class:"indent-1"},"-e, --escape 傳送轉義訊息",-1),P=e("p",{class:"indent-1"},"-E, --unescape 傳送反轉義訊息",-1),C=e("p",null,"那麼細心的小夥伴可能會發現，既然 help 本身也是一個指令，那我能不能用來檢視 help 自己的幫助資訊呢？答案是肯定的：",-1),S=e("p",null,"指令：help [command]",-1),q=e("p",null,"顯示幫助信息",-1),K=e("p",null,"可用的選項有：",-1),E=e("p",{class:"indent-1"},"-a, --authority 顯示許可權設定",-1),V=e("p",{class:"indent-1"},"-H, --show-hidden 檢視隱藏的選項和指令",-1),v=s('<h2 id="引數和選項" tabindex="-1">引數和選項 <a class="header-anchor" href="#引數和選項" aria-label="Permalink to &quot;引數和選項&quot;">​</a></h2><p>在上面的用法中，我们接触到了两个新的概念：<strong>参数 (Argument)</strong> 和 <strong>选项 (Option)</strong>。</p><p>参数分为必选参数和可选参数，分别用尖括号 <code>&lt;&gt;</code> 和方括号 <code>[]</code> 表示。一個指令可以有任意多個引數，它們的順序是固定的，使用者必須按照指令定義的順序來輸入引數。必選引數一定出現在可選引數之前。如果使用者輸入的引數數量不足必選引數的個數，那麼外掛通常會給出錯誤提示；如果使用者輸入了額外的引數，那麼會被忽略。</p><p>例如，help 指令共有一個引數，它是可選引數，表示要檢視的指令名；echo 指令也有一個引數，它是必選引數，表示要傳送的訊息。讓我們看看如果不填必選引數會怎麼樣：</p>',4),F=e("p",null,"請輸入要發送的文本。",-1),I=e("p",null,[l("選項同樣可以控制指令的行為。它通常以 "),e("code",null,"-"),l(" 或 "),e("code",null,"--"),l(" 开头，后面不带空格地跟着一个固定的单词，称为选项名称。選項之間沒有順序要求，但通常建議將選項放在引數之前。讓我們試試看：")],-1),y=e("img",{src:"https://koishi.chat/logo.png",width:"100"},null,-1),N=e("p",null,[l("在上面的例子中，我们使用了 "),e("code",null,"-E"),l(" 选项，成功改变了输出的内容。關於這具體是怎麼做到的，我們會在後續的章節中進行介紹。")],-1),z=e("p",null,[l("引數除了可以分為必選和可選外，還可以分為定長和變長。定長引數的中不能出現空白字元，而變長引數則可以。变长参数通过参数名前后的 "),e("code",null,"..."),l(" 来指示，例如 "),e("code",null,"echo"),l(" 指令的参数就是一个变长参数。如果要為定長引數傳入帶有空白字元的內容，可以使用引號將其包裹起來，例如：")],-1),D=e("p",null,"此外，部分選項也可以接受引數。例如，當你安裝了翻譯外掛，你將會獲得如下的幫助資訊：",-1),R=e("p",null,"指令：translate <text...>",-1),$=e("p",null,"文本翻譯",-1),j=e("p",null,"可用的選項有：",-1),w=e("p",{class:"indent-1"},"-s, --source <lang> 源語言 (預設為自動匹配)",-1),B=e("p",{class:"indent-1"},"-t, --target <lang> 目標語言 (預設為中文)",-1),W=s(`<p>在这个例子中，<code>-s</code> 和 <code>-t</code> 都是带有参数的选项。我们使用 <code>-t ja</code> 来指定目标语言为日语，源语言仍然采用了默认行为。</p><h2 id="觸發字首" tabindex="-1">觸發字首 <a class="header-anchor" href="#觸發字首" aria-label="Permalink to &quot;觸發字首&quot;">​</a></h2><p>然而，如果僅僅透過一個詞就能觸發指令，在群聊環境下非常容易出現誤觸。為了避免這種情況，Koishi 引入了字首觸發的概念。在「全局设置」中，我们提供了名为 <code>prefix</code> 和 <code>nickname</code> 的配置项。假如将 <code>prefix</code> 设置为 <code>/</code>，<code>nickname</code> 设置为 <code>四季酱</code>，则在群聊环境下只有以下信息可以触发指令调用：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">四季醬,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> echo hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">@四季醬</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> echo hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">/echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span></code></pre></div><p>換句話說，一個指令能夠被觸發的實際條件為：</p><ul><li>消息以 <code>prefix</code> 开头，后面紧跟着指令调用</li><li>消息以 <code>nickname</code> 开头，后面可以有逗号或空白字符，再后面是指令调用</li><li>消息以 @机器人 开头 (可以有多个 <code>@</code>，但至少一个是机器人账号)，后面是指令调用</li></ul><p>對於人數較多或是含有不止一個機器人的群聊，我們強烈建議每一個機器人都配置不同的觸發字首。而在私聊環境下，由於不用擔心誤觸，因此並沒有上面的限制。沒有觸發字首的指令呼叫也能被正常執行。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>关于 <code>prefix</code> 的几点提示：</strong></p><ol><li><code>prefix</code> 是一个列表，默认值为 <code>[&#39;&#39;]</code> 表示无需前缀也能触发；将列表清空会导致所有指令都无法通过 <code>prefix</code> 触发 (但仍然可以通过私聊或 <code>nickname</code> 或 @机器人 触发)</li><li>如果你在 <code>prefix</code> 中设置了多个值，例如 <code>[&#39;.&#39;, &#39;/&#39;, &#39;&#39;]</code>，那么 <code>.</code>, <code>/</code> 或无前缀都能触发指令；但由于 Koishi 是按顺序匹配各个前缀的，因此空串 <code>&#39;&#39;</code> 必须写在最后一个</li><li>可以为不同的会话设置不同的 <code>prefix</code>，具体请参考 <a href="./customize.html#过滤器">过滤器</a> 一节</li></ol></div><h2 id="子指令" tabindex="-1">子指令 <a class="header-anchor" href="#子指令" aria-label="Permalink to &quot;子指令&quot;">​</a></h2><p><a href="./../../plugins/common/admin.html">admin</a> 插件提供了名为 user 的指令，现在让我们调用一下：</p>`,10),G=e("p",null,"指令：user",-1),O=e("p",null,"使用者管理",-1),H=e("p",null,"可用的子指令有：",-1),J=e("p",{class:"indent-1"},"authorize 許可權管理",-1),U=e("p",{class:"indent-1"},"user.locale 語言偏好",-1),L=s("<p>這裡出現了一個新的概念：子指令。子指令在调用上与普通的指令并没有区别，但它们将不会显示在 <code>help</code> 返回的全局指令列表中，而只会显示在父指令 <code>user</code> 的帮助信息中。這樣設計的目的是為了避免指令列表過於冗長，同時也將指令以一種更清晰的方式進行了組織。</p><p>在上面的例子中，我们还能发现 Koishi 存在两种不同的子指令：一种是 <strong>层级式</strong>，例如 <code>authorize</code>；而另一种则是 <strong>派生式</strong>，例如 <code>user.locale</code>。后者跟前者的区别是，它的名称带有父指令的名称，以及一个小数点 <code>.</code>。在呼叫時，我們也需要加上這個小數點：</p>",2),M=e("p",null,[l("如果父指令本身没有功能，那么 "),e("code",null,"user"),l(" 和 "),e("code",null,"user -h"),l(" 的效果是一样的。此時，我們也可以使用空格代替小數點進行派生式子指令的呼叫：")],-1),Q=s('<p>熟悉 Git 的使用者可能會發現，這種設計正是借鑑了 Git 的二級指令：當一個指令的功能過於複雜時，我們可以將其拆分為多個子指令，從而使得指令的功能更加清晰。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>至于 user.locale 是干什么的，想必大家也已经猜出来了。我们留到 <a href="./customize.html#国际化">国际化</a> 一节再详细介绍。</p></div><h2 id="指令管理" tabindex="-1">指令管理 <a class="header-anchor" href="#指令管理" aria-label="Permalink to &quot;指令管理&quot;">​</a></h2><p>開啟控制檯，我們會在活動欄中找到名為「指令管理」的頁面。你可以在這裡檢視當前所有指令的列表，並對指令的行為進行設定。</p><h3 id="設定別名" tabindex="-1">設定別名 <a class="header-anchor" href="#設定別名" aria-label="Permalink to &quot;設定別名&quot;">​</a></h3><p>點進任意指令的詳情頁，首先就能看到「名稱設定」，這裡展示了指令的全部別名。每個別名都能被用來觸發指令，而第一個別名則會作為預設名稱顯示在幫助中。</p><p>你可以在這裡新增或刪除別名，也可以將任意別名設定為預設的顯示名稱。例如，在 <code>echo</code> 指令中点击「添加别名」，输入 <code>复读</code>，然后点击「设为默认」，这样一来，用户在帮助中看到的就是 <code>复读</code> 而不是 <code>echo</code> 了。</p><h3 id="新增子指令" tabindex="-1">新增子指令 <a class="header-anchor" href="#新增子指令" aria-label="Permalink to &quot;新增子指令&quot;">​</a></h3><p>在左側欄中，你可以將任何指令 (派生式指令除外) 拖至其他指令的下方，這將使得前者成為後者的子指令。例如，我们可以将 <a href="./../../plugins/common/bind.html"><code>bind</code></a> 指令设置为 <code>user</code> 指令的子指令，因为这属于用户管理的一部分。</p><p>點選右上角的加號按鈕，我們可以建立一個新指令。這個新指令自然是沒有行為的，它的主要目的是作為其他指令的父指令，已獲得更好的展示效果。對於透過此方法建立的新指令，我們可以透過點選右上角的垃圾桶按鈕將其移除。</p><h3 id="許可權管理" tabindex="-1">許可權管理 <a class="header-anchor" href="#許可權管理" aria-label="Permalink to &quot;許可權管理&quot;">​</a></h3><p>在「名稱設定」下方還有更多的配置項，我們可以在這裡進一步配置指令對使用者的訪問許可權。例如，将 echo 指令的 <code>authority</code> 设置为 <code>2</code>，那么将只有 2 级以上权限的用户才能调用该指令。</p><p>我們甚至還可以單獨設定每一個指令選項的許可權等級。例如，我们可以单独给 <code>-E, --unescape</code> 选项设置 <code>authority</code> 为 3。这样一来，只有 3 级以上权限的用户才能使用 <code>echo -E</code> 的功能。</p><p>关于用户权限，请参考 <a href="./customize.html#权限管理">权限管理</a> 一节。</p>',14);function X(Y,Z,ee,oe,ae,le){const t=n("chat-message"),c=n("chat-panel");return h(),d("div",null,[p,u,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[r,m,k,f]),_:1})]),_:1}),g,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help echo")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[T,A,b,x,P]),_:1})]),_:1}),C,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help help")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[S,q,K,E,V]),_:1})]),_:1}),v,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("echo")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[F]),_:1})]),_:1}),I,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l('echo <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l('<image url="https://koishi.chat/logo.png"/>')]),_:1}),o(t,{nickname:"Alice"},{default:a(()=>[l('echo -E <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[y]),_:1})]),_:1}),N,z,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l('help "foo bar"')]),_:1})]),_:1}),D,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help translate")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[R,$,j,w,B]),_:1}),o(t,{nickname:"Alice"},{default:a(()=>[l("translate -t ja 你好，世界")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l("こんにちは世界")]),_:1})]),_:1}),W,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("user")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[G,O,H,J,U]),_:1})]),_:1}),L,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("user.locale en")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l("User data updated.")]),_:1})]),_:1}),M,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("user locale zh ")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l("使用者數據已修改。")]),_:1})]),_:1}),Q])}const se=i(_,[["render",X]]);export{ce as __pageData,se as default};
