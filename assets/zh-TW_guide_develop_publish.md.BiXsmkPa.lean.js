import{_ as e,k as h,f as n,A as a,l as s,m as l,D as i,C as p,j as k}from"./chunks/framework.CN4YI0Ml.js";const V=JSON.parse('{"title":"釋出外掛","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/guide/develop/publish.md","filePath":"zh-TW/guide/develop/publish.md"}'),o={name:"zh-TW/guide/develop/publish.md"},r=l("",31),d=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run pub [...name]")])])])],-1),c=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," pub [...name]")])])])],-1),g=s("ul",null,[s("li",null,[s("strong",null,"name:"),i(" 要发布的插件列表，缺省时表示全部 (此处 "),s("code",null,"name"),i(" 不包含 "),s("code",null,"koishi-plugin-"),i(" 前缀，而是你的工作区目录名)")])],-1),u=s("p",null,"这将发布所有版本号发生变动的插件。",-1),y=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"从插件成功发布到进插件市场需要一定的时间 (通常在 15 分钟内)，请耐心等待。")],-1),B={class:"tip custom-block"},F=l("",4),C=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run pub [...name] -- --registry https://registry.npmjs.org")])])])],-1),m=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," pub [...name] --registry https://registry.yarnpkg.com")])])])],-1),A=s("p",null,"对于 Yarn v2 及以上版本，你还可以分别针对发布和安装设置不同的镜像：",-1),E=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 安装时使用国内镜像")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config set npmRegistryServer https://registry.npmmirror.com")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 发布时使用官方镜像")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config set npmPublishRegistry https://registry.yarnpkg.com")])])])],-1),q=s("h2",{id:"更新插件版本",tabindex:"-1"},[i("更新插件版本 "),s("a",{class:"header-anchor",href:"#更新插件版本","aria-label":'Permalink to "更新插件版本"'},"​")],-1),v=s("p",null,[i("初始创建的插件版本号为 "),s("code",null,"1.0.0"),i("。当你修改过插件后，你需要更新版本号才能重新发布。在应用目录运行下面的命令以更新版本号：")],-1),b=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run bump [...name] -- ["),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"-1"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"-2"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"-3"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"-p"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"-v"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}}," <"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"ve"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"r"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},">"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"] [-r]")])])])],-1),_=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," bump [...name] ["),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"-1"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"-2"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"-3"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"-p"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"-v"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}}," <"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"ve"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"r"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},">"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"] [-r]")])])])],-1),f=l("",2);function D(j,T,x,P,I,S){const t=p("tab-select");return k(),h("div",null,[r,n(t,{class:"code"},{"tab-npm":a(()=>[d]),"tab-yarn":a(()=>[c]),_:1}),g,u,y,s("div",B,[F,n(t,{class:"code"},{"tab-npm":a(()=>[C]),"tab-yarn":a(()=>[m]),_:1}),A,n(t,{class:"code"},{"tab-yarn":a(()=>[E]),_:1})]),q,v,n(t,{class:"code"},{"tab-npm":a(()=>[b]),"tab-yarn":a(()=>[_]),_:1}),f])}const w=e(o,[["render",D]]);export{V as __pageData,w as default};
