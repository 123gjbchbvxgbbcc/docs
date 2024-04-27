import{_ as c,k as d,f as a,A as o,l as e,D as t,m as i,C as l,j as h}from"./chunks/framework.CN4YI0Ml.js";const se=JSON.parse('{"title":"Command System","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/usage/command.md","filePath":"en-US/manual/usage/command.md"}'),r={name:"en-US/manual/usage/command.md"},m=e("h1",{id:"command-system",tabindex:"-1"},[t("Command System "),e("a",{class:"header-anchor",href:"#command-system","aria-label":'Permalink to "Command System"'},"​")],-1),p=e("p",null,"After learning the basic usage of the Koishi Console, we can now talk about how to talk with bots! Let's start with the example from the previous section:",-1),u=e("p",null,"Available commands:",-1),_=e("p",{class:"indent-1"},"echo Send messages",-1),f=e("p",{class:"indent-1"},"help Show help",-1),g=e("p",null,'Type "help <command>" to see syntax and examples for a specific command.',-1),b=i("",5),k=e("p",null,"Command: echo <message...>",-1),w=e("p",null,"Send messages",-1),y=e("p",null,"Available options:",-1),A=e("p",{class:"indent-1"},"-e, --escape Escape characters in message",-1),v=e("p",{class:"indent-1"},"-E, --unescape Unescape characters in message",-1),x=e("p",null,"You might find that the help itself is a command as well, so is it possible to use help to show the help message of help itself? The answer is positive:",-1),T=e("p",null,"Command: help [command]",-1),C=e("p",null,"Show help",-1),S=e("p",null,"Available options:",-1),q=e("p",{class:"indent-1"},"-a, --authority show authority requirements",-1),P=e("p",{class:"indent-1"},"-H, --show-hidden show hidden options and commands",-1),I=i("",4),E=e("p",null,"Please type to send",-1),K=e("p",null,[t("The behavior would be affected by the options as well. 它通常以 "),e("code",null,"-"),t(" 或 "),e("code",null,"--"),t(" 开头，后面不带空格地跟着一个固定的单词，称为选项名称。There are no order requirements between options, but generally we should put options before parameters. Let's try out!")],-1),F=e("img",{src:"https://koishi.chat/logo.png",width:"100"},null,-1),V=e("p",null,[t("在上面的例子中，我们使用了 "),e("code",null,"-E"),t(" 选项，成功改变了输出的内容。We will talk about it in detail in the next section.")],-1),N=e("p",null,[t("In addition to being required and optional, the arguments can be divided into fixed and variable length. A variable-length argument would be fed all characters including whitespace characters, while a fixed-length one stops feeding when it reads whitespace characters. 变长参数通过参数名前后的 "),e("code",null,"..."),t(" 来指示，例如 "),e("code",null,"echo"),t(" 指令的参数就是一个变长参数。If it is required to pass whitespace characters into a fixed-length argument, you can wrap the whole argument into quotes, just like:")],-1),D=e("p",null,"Additionally, options might require parameters as well. You should see a help information as below when you have any translate plugin installed.",-1),M=e("p",null,"Command: translate <text...>",-1),U=e("p",null,"Translate Text",-1),z=e("p",null,"Available options:",-1),H=e("p",{class:"indent-1"},"-s, --source <lang> Source Language (Auto-detect by default)",-1),L=e("p",{class:"indent-1"},"-t, --target <lang> Target Language (Chinese by default)",-1),O=i("",10),R=e("p",null,"Command: user",-1),W=e("p",null,"User Management",-1),j=e("p",null,"Available subcommands:",-1),$=e("p",{class:"indent-1"},"authorize Permission Management",-1),B=e("p",{class:"indent-1"},"user.locale Language Preference",-1),Y=i("",2),G=e("p",null,[t("如果父指令本身没有功能，那么 "),e("code",null,"user"),t(" 和 "),e("code",null,"user -h"),t(" 的效果是一样的。In that situation, we can use spaces instead of dots to call derivative subcommands:")],-1),J=i("",14);function Q(X,Z,ee,ae,oe,te){const n=l("chat-message"),s=l("chat-panel");return h(),d("div",null,[m,p,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("help")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[u,_,f,g]),_:1})]),_:1}),b,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("help echo")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[k,w,y,A,v]),_:1})]),_:1}),x,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("help help")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[T,C,S,q,P]),_:1})]),_:1}),I,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("echo")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[E]),_:1})]),_:1}),K,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t('echo <image url="https://koishi.chat/logo.png"/>')]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[t('<image url="https://koishi.chat/logo.png"/>')]),_:1}),a(n,{nickname:"Alice"},{default:o(()=>[t('echo -E <image url="https://koishi.chat/logo.png"/>')]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[F]),_:1})]),_:1}),V,N,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t('help "foo bar"')]),_:1})]),_:1}),D,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("help translate")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[M,U,z,H,L]),_:1}),a(n,{nickname:"Alice"},{default:o(()=>[t("translate -t ja Hello, world")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[t("こんにちは世界")]),_:1})]),_:1}),O,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("user")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[R,W,j,$,B]),_:1})]),_:1}),Y,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("user.locale en")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[t("User data updated.")]),_:1})]),_:1}),G,a(s,null,{default:o(()=>[a(n,{nickname:"Alice"},{default:o(()=>[t("user locale zh ")]),_:1}),a(n,{nickname:"Koishi"},{default:o(()=>[t("User data has been changed.")]),_:1})]),_:1}),J])}const ie=c(r,[["render",Q]]);export{se as __pageData,ie as default};
