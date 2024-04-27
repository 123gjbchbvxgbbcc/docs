import{_ as i,k as d,f as o,A as a,l as e,D as l,m as s,C as n,j as h}from"./chunks/framework.CN4YI0Ml.js";const ce=JSON.parse('{"title":"指令系统","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/manual/usage/command.md","filePath":"ru-RU/manual/usage/command.md"}'),_={name:"ru-RU/manual/usage/command.md"},p=e("h1",{id:"指令系统",tabindex:"-1"},[l("指令系统 "),e("a",{class:"header-anchor",href:"#指令系统","aria-label":'Permalink to "指令系统"'},"​")],-1),u=e("p",null,"在了解了控制台的基本用法后，我们终于可以开始介绍如何与机器人对话了！让我们从上一节中看到的例子开始：",-1),r=e("p",null,"当前可用的指令有：",-1),m=e("p",{class:"indent-1"},"echo 发送消息",-1),k=e("p",{class:"indent-1"},"help 显示帮助信息",-1),f=e("p",null,"输入“帮助 指令名”查看特定指令的语法和使用示例。",-1),g=s("",5),T=e("p",null,"指令：echo <message...>",-1),A=e("p",null,"发送消息",-1),b=e("p",null,"可用的选项有：",-1),x=e("p",{class:"indent-1"},"-e, --escape 发送转义消息",-1),P=e("p",{class:"indent-1"},"-E, --unescape 发送反转义消息",-1),C=e("p",null,"那么细心的小伙伴可能会发现，既然 help 本身也是一个指令，那我能不能用来查看 help 自己的帮助信息呢？答案是肯定的：",-1),S=e("p",null,"指令：help [command]",-1),q=e("p",null,"显示帮助信息",-1),K=e("p",null,"可用的选项有：",-1),E=e("p",{class:"indent-1"},"-a, --authority 显示权限设置",-1),V=e("p",{class:"indent-1"},"-H, --show-hidden 查看隐藏的选项和指令",-1),v=s("",4),F=e("p",null,"请输入要发送的文本。",-1),I=e("p",null,[l("选项同样可以控制指令的行为。它通常以 "),e("code",null,"-"),l(" 或 "),e("code",null,"--"),l(" 开头，后面不带空格地跟着一个固定的单词，称为选项名称。选项之间没有顺序要求，但通常建议将选项放在参数之前。让我们试试看：")],-1),y=e("img",{src:"https://koishi.chat/logo.png",width:"100"},null,-1),N=e("p",null,[l("在上面的例子中，我们使用了 "),e("code",null,"-E"),l(" 选项，成功改变了输出的内容。关于这具体是怎么做到的，我们会在后续的章节中进行介绍。")],-1),R=e("p",null,[l("参数除了可以分为必选和可选外，还可以分为定长和变长。定长参数的中不能出现空白字符，而变长参数则可以。变长参数通过参数名前后的 "),e("code",null,"..."),l(" 来指示，例如 "),e("code",null,"echo"),l(" 指令的参数就是一个变长参数。如果要为定长参数传入带有空白字符的内容，可以使用引号将其包裹起来，例如：")],-1),D=e("p",null,"此外，部分选项也可以接受参数。例如，当你安装了翻译插件，你将会获得如下的帮助信息：",-1),z=e("p",null,"指令：translate <text...>",-1),U=e("p",null,"Перевод текстов",-1),$=e("p",null,"可用的选项有：",-1),j=e("p",{class:"indent-1"},"-s, --source <lang> 源语言 (默认为自动匹配)",-1),w=e("p",{class:"indent-1"},"-t, --target <lang> 目标语言 (默认为中文)",-1),B=s("",10),G=e("p",null,"指令：user",-1),O=e("p",null,"用户管理",-1),H=e("p",null,"可用的子指令有：",-1),J=e("p",{class:"indent-1"},"authorize 权限管理",-1),L=e("p",{class:"indent-1"},"user.locale 语言偏好",-1),M=s("",2),Q=e("p",null,[l("如果父指令本身没有功能，那么 "),e("code",null,"user"),l(" 和 "),e("code",null,"user -h"),l(" 的效果是一样的。此时，我们也可以使用空格代替小数点进行派生式子指令的调用：")],-1),W=s("",14);function X(Y,Z,ee,oe,ae,le){const t=n("chat-message"),c=n("chat-panel");return h(),d("div",null,[p,u,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[r,m,k,f]),_:1})]),_:1}),g,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help echo")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[T,A,b,x,P]),_:1})]),_:1}),C,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help help")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[S,q,K,E,V]),_:1})]),_:1}),v,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("echo")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[F]),_:1})]),_:1}),I,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l('echo <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l('<image url="https://koishi.chat/logo.png"/>')]),_:1}),o(t,{nickname:"Alice"},{default:a(()=>[l('echo -E <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[y]),_:1})]),_:1}),N,R,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l('help "foo bar"')]),_:1})]),_:1}),D,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help translate")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[z,U,$,j,w]),_:1}),o(t,{nickname:"Alice"},{default:a(()=>[l("translate -t ja 你好，世界")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l("こんにちは世界")]),_:1})]),_:1}),B,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("user")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[G,O,H,J,L]),_:1})]),_:1}),M,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("user.locale en")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l("User data updated.")]),_:1})]),_:1}),Q,o(c,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("user locale zh ")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l("用户数据已修改。")]),_:1})]),_:1}),W])}const se=i(_,[["render",X]]);export{ce as __pageData,se as default};
