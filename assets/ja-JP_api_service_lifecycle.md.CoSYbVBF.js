import{_ as i,k as l,l as a,D as e,f as o,m as n,C as r,j as s}from"./chunks/framework.CN4YI0Ml.js";const w=JSON.parse('{"title":"事件系统 (Lifecycle)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/service/lifecycle.md","filePath":"ja-JP/api/service/lifecycle.md"}'),c={name:"ja-JP/api/service/lifecycle.md"},d=n('<h1 id="事件系统" tabindex="-1">事件系统 (Lifecycle) <a class="header-anchor" href="#事件系统" aria-label="Permalink to &quot;事件系统 (Lifecycle)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>相关指南：<a href="./../../guide/basic/events.html">事件系统</a></p></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-emit" tabindex="-1">ctx.emit(session?, event, ...param) <a class="header-anchor" href="#ctx-emit" aria-label="Permalink to &quot;ctx.emit(session?, event, ...param)&quot;">​</a></h3><h3 id="ctx-parallel" tabindex="-1">ctx.parallel(session?, event, ...param) <a class="header-anchor" href="#ctx-parallel" aria-label="Permalink to &quot;ctx.parallel(session?, event, ...param)&quot;">​</a></h3><ul><li><strong>session:</strong> <a href="./../core/session.html"><code>Session</code></a> 会话对象</li><li><strong>event:</strong> <code>string</code> 事件名称</li><li><strong>param:</strong> <code>any[]</code> 事件的参数</li><li>返回值: <code>boolean</code> 匹配结果</li></ul><p>同时触发所有 event 事件的能够匹配 session 对象的回调函数。emit 为同步，parallel 为异步。</p><h3 id="ctx-bail" tabindex="-1">ctx.bail(session?, event, ...param) <a class="header-anchor" href="#ctx-bail" aria-label="Permalink to &quot;ctx.bail(session?, event, ...param)&quot;">​</a></h3><h3 id="ctx-serial" tabindex="-1">ctx.serial(session?, event, ...param) <a class="header-anchor" href="#ctx-serial" aria-label="Permalink to &quot;ctx.serial(session?, event, ...param)&quot;">​</a></h3><ul><li><strong>session:</strong> <a href="./../core/session.html"><code>Session</code></a> 会话对象</li><li><strong>event:</strong> <code>string</code> 事件名称</li><li><strong>param:</strong> <code>any[]</code> 事件的参数</li><li>返回值: <code>boolean</code> 匹配结果</li></ul><p>依次触发所有 event 事件的能够匹配 session 对象的回调函数。当返回一个 false, null, undefined 以外的值时将这个值作为结果返回。bail 为同步，serial 为异步。</p>',11),h={id:"ctx-chain",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#ctx-chain","aria-label":'Permalink to "ctx.chain(session?, event, ...param) <Badge text="beta" type="warning"/>"'},"​",-1),g={id:"ctx-waterfall",tabindex:"-1"},x=a("a",{class:"header-anchor",href:"#ctx-waterfall","aria-label":'Permalink to "ctx.waterfall(session?, event, ...param) <Badge text="beta" type="warning"/>"'},"​",-1),m=n('<ul><li><strong>session:</strong> <a href="./../core/session.html"><code>Session</code></a> 会话对象</li><li><strong>event:</strong> <code>string</code> 事件名称</li><li><strong>param:</strong> <code>any[]</code> 事件的参数</li><li>返回值: <code>boolean</code> 匹配结果</li></ul><p>依次触发所有 event 事件的能够匹配 session 对象的回调函数。每次用得到的返回值覆盖下一轮调用的第一个参数，并在所有函数执行完后返回最终结果。chain 为同步，waterfall 为异步。</p><h3 id="ctx-on" tabindex="-1">ctx.on(event, listener, prepend?) <a class="header-anchor" href="#ctx-on" aria-label="Permalink to &quot;ctx.on(event, listener, prepend?)&quot;">​</a></h3><ul><li><strong>event:</strong> <code>string</code> 事件名称</li><li><strong>listener:</strong> <code>Function</code> 回调函数</li><li><strong>prepend:</strong> <code>boolean</code> 是否前置</li><li>返回值: <code>() =&gt; boolean</code> 取消这个监听器</li></ul><p>监听一个事件。</p><h3 id="ctx-off" tabindex="-1">ctx.off(event, listener) <a class="header-anchor" href="#ctx-off" aria-label="Permalink to &quot;ctx.off(event, listener)&quot;">​</a></h3><ul><li><strong>event:</strong> <code>string</code> 事件名称</li><li><strong>listener:</strong> <code>Function</code> 回调函数</li><li>返回值: <code>boolean</code> 是否有此回调函数</li></ul><p>取消监听一个事件。</p><h3 id="ctx-once" tabindex="-1">ctx.once(event, listener, prepend?) <a class="header-anchor" href="#ctx-once" aria-label="Permalink to &quot;ctx.once(event, listener, prepend?)&quot;">​</a></h3><ul><li><strong>event:</strong> <code>string</code> 事件名称</li><li><strong>listener:</strong> <code>Function</code> 回调函数</li><li><strong>prepend:</strong> <code>boolean</code> 是否前置</li><li>返回值: <code>() =&gt; boolean</code> 取消这个监听器</li></ul><p>监听一个事件，且确保回调函数只会被执行一次。</p><h3 id="ctx-before" tabindex="-1">ctx.before(event, listener, append?) <a class="header-anchor" href="#ctx-before" aria-label="Permalink to &quot;ctx.before(event, listener, append?)&quot;">​</a></h3><ul><li><strong>event:</strong> <code>string</code> 事件名称</li><li><strong>listener:</strong> <code>Function</code> 回调函数</li><li><strong>append:</strong> <code>boolean</code> 是否后置</li><li>返回值: <code>() =&gt; boolean</code> 取消这个监听器</li></ul><p>监听一个以 <code>before-</code> 开头的事件。</p><h3 id="ctx-middleware" tabindex="-1">ctx.middleware(middleware, prepend?) <a class="header-anchor" href="#ctx-middleware" aria-label="Permalink to &quot;ctx.middleware(middleware, prepend?)&quot;">​</a></h3><ul><li><strong>middleware:</strong> <a href="./../../guide/basic/middleware.html#使用中间件"><code>Middleware</code></a> 要注册的中间件</li><li><strong>prepend:</strong> <code>boolean</code> 是否前置</li><li>返回值: <code>() =&gt; boolean</code> 取消这个中间件</li></ul><p>当前上下文中注册一个中间件。</p>',17);function b(f,u,_,v,P,q){const t=r("Badge");return s(),l("div",null,[d,a("h3",h,[e("ctx.chain(session?, event, ...param) "),o(t,{text:"beta",type:"warning"}),e(),p]),a("h3",g,[e("ctx.waterfall(session?, event, ...param) "),o(t,{text:"beta",type:"warning"}),e(),x]),m])}const y=i(c,[["render",b]]);export{w as __pageData,y as default};
