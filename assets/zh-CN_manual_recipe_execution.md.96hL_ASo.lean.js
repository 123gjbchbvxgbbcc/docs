import{_ as c,k as r,f as a,A as o,m as s,l as i,D as e,C as n,j as h}from"./chunks/framework.CN4YI0Ml.js";const T=JSON.parse('{"title":"指令进阶技巧","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/manual/recipe/execution.md","filePath":"zh-CN/manual/recipe/execution.md"}'),_={name:"zh-CN/manual/recipe/execution.md"},d=s("",6),u=i("p",null,"Koishi 默认不转义单引号内的文本。如果你不希望某个参数被插值语法所转义，可以使用单引号：",-1),m=i("p",null,[e("最后，你还可以在 "),i("a",{href:"https://eval.koishi.chat",target:"_blank",rel:"noreferrer"},"koishi-plugin-eval"),e(" 中了解到另一种插值方法。")],-1),p=i("h2",{id:"模糊匹配",tabindex:"-1"},[e("模糊匹配 "),i("a",{class:"header-anchor",href:"#模糊匹配","aria-label":'Permalink to "模糊匹配"'},"​")],-1),f=i("p",null,"在日常的使用中，我们也难免会遇到打错的情况，这时 Koishi 还会自动根据相近的指令名进行纠错提醒：",-1),k=i("p",null,[e("如果想调整模糊匹配的程度，你还可以修改配置项 "),i("a",{href:"./../../api/core/app.html#options-minsimilarity"},"minSimilarity"),e("。是不是很方便呢？")],-1);function b(x,N,A,C,P,$){const t=n("chat-message"),l=n("chat-panel");return h(),r("div",null,[d,a(l,null,{default:o(()=>[a(t,{nickname:"Alice"},{default:o(()=>[e("echo foo$(echo bar)")]),_:1}),a(t,{nickname:"Koishi"},{default:o(()=>[e("foobar")]),_:1})]),_:1}),u,a(l,null,{default:o(()=>[a(t,{nickname:"Alice"},{default:o(()=>[e("echo 'foo$(echo bar)'")]),_:1}),a(t,{nickname:"Koishi"},{default:o(()=>[e("foo$(echo bar)")]),_:1})]),_:1}),m,p,f,a(l,null,{default:o(()=>[a(t,{nickname:"Alice"},{default:o(()=>[e("ecko hello")]),_:1}),a(t,{nickname:"Koishi"},{default:o(()=>[e("您要找的是不是“echo”？回复句号以使用推测的指令。")]),_:1}),a(t,{nickname:"Alice"},{default:o(()=>[e(".")]),_:1}),a(t,{nickname:"Koishi"},{default:o(()=>[e("hello")]),_:1})]),_:1}),k])}const q=c(_,[["render",b]]);export{T as __pageData,q as default};
