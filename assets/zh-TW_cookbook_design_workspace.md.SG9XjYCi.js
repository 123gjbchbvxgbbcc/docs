import{_ as s,k as a,j as i,m as n}from"./chunks/framework.CN4YI0Ml.js";const g=JSON.parse('{"title":"深入工作区","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/cookbook/design/workspace.md","filePath":"zh-TW/cookbook/design/workspace.md"}'),l={name:"zh-TW/cookbook/design/workspace.md"},p=n(`<h1 id="深入工作区" tabindex="-1">深入工作区 <a class="header-anchor" href="#深入工作区" aria-label="Permalink to &quot;深入工作区&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本文将回答以下问题：</p><ul><li>什么是工作区仓库？相比传统开发模式有什么优势？</li><li>如何在本地维护大量来自不同仓库的插件？</li></ul></div><p>本文要介绍的主题是 Yakumo。Yakumo 是一个由 Koishi 官方团队开发的项目管理工具，它内置于模板项目中，可以在一个本地目录中管理来自多个仓库的工作区。Yakumo 的基本用法已经在 <a href="./../../guide/develop/workspace.html">工作区开发</a> 一节中介绍过了。本文主要介绍其背后的设计思想和高级功能。</p><p>Yakumo 这个词对应于日语中的“八云”。在东方 Project 中，八云紫是境界的妖怪，幻想乡的贤者之一。她的式神八云蓝甚至也有着自己的式神橙。我们使用 Yakumo 这个名字，意在表示这个工具具备管理嵌套工作区的能力。</p><h2 id="背景介绍" tabindex="-1">背景介绍 <a class="header-anchor" href="#背景介绍" aria-label="Permalink to &quot;背景介绍&quot;">​</a></h2><p>在我们介绍工作区仓库机制之前，先来看看目前的主流开发模式。</p><h3 id="独立仓库" tabindex="-1">独立仓库 <a class="header-anchor" href="#独立仓库" aria-label="Permalink to &quot;独立仓库&quot;">​</a></h3><p>在此模式下，每一个包都由一个独立的 Git 仓库进行管理。这种开发模式存在许多缺点：</p><ol><li>每个包的依赖都需要单独安装，这会占据大量重复的磁盘空间。</li><li>每个包需要独立管理，无法使用统一的工具对所有包进行调试、更新和发布。</li><li>当修改了某一个库的源码后，必须经过构建和发布才能在其他项目中使用。既无法直接在真实项目中运行源代码，也无法对多个仓库的源码进行联合调试。</li></ol><h3 id="复合仓库" tabindex="-1">复合仓库 (Monorepo) <a class="header-anchor" href="#复合仓库" aria-label="Permalink to &quot;复合仓库 (Monorepo)&quot;">​</a></h3><p>认识到上述问题后，Node.js 社区随即发展出了复合仓库 (monorepo) 的开发模式。在此模式下，多个相关联的包交由同一个 Git 仓库进行管理。每一个包都被视为一个<strong>工作区 (Workspace)</strong>，而整个仓库同样视为一个根工作区。可以看到，上述几个缺点得到了很大程度的解决：</p><ol><li>根工作区会安装所有子工作区的依赖，不会出现重复安装，因此问题 1 得到了解决。</li><li>一些工具 (例如 Lerna) 可以对所有工作区进行统一的管理，因此问题 2 得到了解决。</li><li>可以将根工作区视为一个真实项目，其中的包可以联合调试，因此问题 3 得到了解决。</li></ol><p>目前主流的 Node.js 包管理器 npm 和 yarn 都已经提供了标准化的复合仓库支持 (pnpm 同样支持工作区，但与标准实现不一致)。一些其他语言也提供了类似的能力 (例如 Rust 的 Cargo)。</p><h3 id="子模块" tabindex="-1">子模块 (Submodule) <a class="header-anchor" href="#子模块" aria-label="Permalink to &quot;子模块 (Submodule)&quot;">​</a></h3><p>子模块 (Submodule) 在 Node.js 生态中很少出现，不过对于其他语言还是比较常见的。在此模式下，每一个包仍然由一个独立的 Git 仓库进行管理，但是在根仓库中使用子模块的方式引入。</p><p>这种开发模式的优缺点与独立仓库类似。尽管问题 2 得到了解决，子模块也引入了额外的麻烦。由于子模块的设计缺陷，在切换仓库分支、重命名父级目录等操作前，都需要妥善维护子模块的状态。一旦初学者处理不当，就可能导致父仓库完全不可用。</p><h2 id="认识-yakumo" tabindex="-1">认识 Yakumo <a class="header-anchor" href="#认识-yakumo" aria-label="Permalink to &quot;认识 Yakumo&quot;">​</a></h2><p>在这个背景下，我们设计并实现了 Yakumo 这一项目管理工具。</p><h3 id="工作区仓库" tabindex="-1">工作区仓库 <a class="header-anchor" href="#工作区仓库" aria-label="Permalink to &quot;工作区仓库&quot;">​</a></h3><p>复合仓库是一种非常优秀的开发模式，但并不能充分满足 Koishi 开发的需要。</p><p>首先，将根工作区视为一个真实项目意味着开发者应当提交自己创建的模板项目。模板项目中有各种配置文件，其中存在着大量的隐私数据。初学者很容易因为失误而提交这些文件，造成隐私数据的泄露。而实际上，在大多数场景下，只有插件源码才是具备发布价值的，模板项目的根工作区只是个开发环境，不应当被提交。</p><p>其次，Koishi 非常看重二次开发体验 (即对其他开发者编写的插件进行调试和修改)。开发者可能编写了非常多的插件，所依赖的环境也可能十分复杂。如果开发者直接发布完整的本地开发目录，那么进行二次开发时就可能为了自己不需要的插件安装额外的依赖，甚至可能因为环境不同而无法顺利开发。在二次开发中应当允许只下载自己需要的插件，而不是开发者编写的所有插件。</p><p>为了解决上面的两点问题，Koishi 提供了基于工作区仓库的开发模式。该模式同样采用工作区的理念，但与传统的复合仓库的不同点在于，根工作区要求开发者使用多个 Git 仓库来管理本地开发环境。插件开发者不再需要将模板项目提交到 Git 仓库中，而是改为发布其中的每一个插件。</p><p>一个标准的 Koishi 模板项目大概是这样：</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">├── external</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   ├── foo                     # 插件仓库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   ├── src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   ├── bar                     # 插件仓库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   ├── src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   └── baz                     # 插件仓库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       ├── src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">└── package.json</span></span></code></pre></div><p>这种做法的好处是显而易见的。首先，由于开发者无需提交根工作区，因此也不会有隐私数据泄露的风险。其次，二次开发时也可以按需下载插件，不必为了不需要的插件安装依赖或配置环境。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你想要分发的不是插件而是成品机器人本身，那么你就需要提交根工作区了。像这种包含根工作区的仓库被称为 <a href="./../practice/bundle.html">整合包</a>，你可以在对应的文档中了解更多信息。</p></div><h3 id="嵌套工作区" tabindex="-1">嵌套工作区 <a class="header-anchor" href="#嵌套工作区" aria-label="Permalink to &quot;嵌套工作区&quot;">​</a></h3><p>当多个插件之间存在耦合关系时，为每个插件分别创建一个 Git 仓库就显得不太合理了。好在 Yakumo 支持嵌套的工作区，这使得你依然具备在一个仓库中管理多个插件的能力。</p><p>当你使用工作区仓库进行开发时，每一个仓库都是本地环境下的一个工作区。如果我们希望一个仓库管理多个插件，那么这个仓库同时也是一个根工作区，这意味着工作区是嵌套使用的。</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">├── external</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   ├── foo                     # 普通的插件仓库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   ├── src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   └── package.json</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   └── qux                     # 含有子工作区的插件仓库</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       ├── packages</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   ├── bar</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   │   ├── src</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   │   │   └── index.ts</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   │   └── package.json</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   └── baz</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       ├── src</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │   └── index.ts</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       └── package.json</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">└── package.json</span></span></code></pre></div><p>在上面的例子中，我们的本地开发环境中有两个插件仓库，其中 <code>external/foo</code> 是一个普通的插件仓库，而 <code>external/qux</code> 则是一个含有子工作区的插件仓库。其中我们使用 <code>packages</code> 目录来管理其中的多个插件。每一个仓库都是一个完整的工作区，既可以在本地进行联合调试，也可以在代码托管平台上持续集成。</p><p>更有趣的是，我们甚至可以在本地的子工作区中进一步使用嵌套工作区：</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">├── external</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   ├── foo                     # 普通的插件仓库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   ├── src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   │   └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   └── qux                     # 含有子工作区的插件仓库</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       ├── external</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   ├── alpha           # 普通的插件仓库</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   │   ├── src</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   │   │   └── index.ts</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   │   └── package.json</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   └── beta            # 含有子工作区的插件仓库</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       ├── packages</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │   ├── gamma</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │   │   ├── src</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │   │   │   └── index.ts</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │   │   └── package.json</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │   └── delta</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │       ├── src</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │       │   └── index.ts</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │       └── package.json</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       ├── packages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   ├── bar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   │   ├── src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   │   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   │   └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   └── baz</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       ├── src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │       └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">└── package.json</span></span></code></pre></div><p>由于每一级仓库都会忽略 <code>external</code> 目录但接受其中子目录作为子工作区，我们可以将要开发的仓库进行任意的嵌套。当你本地环境下的仓库较多时，全部放到顶层 <code>external</code> 目录下可能会显得有些混乱。此时你可以将仓库按照功能进行分组，使结构更加清晰。</p><p>目前各包管理中只有 Yarn 2 以上版本支持了嵌套工作区，但 Yakumo 为所有主流包管理器都补全了嵌套工作区支持。你可以将其理解成适用于嵌套工作区的 Lerna。</p><h2 id="闲谈-为什么不提交-lockfile" tabindex="-1">闲谈：为什么不提交 lockfile？ <a class="header-anchor" href="#闲谈-为什么不提交-lockfile" aria-label="Permalink to &quot;闲谈：为什么不提交 lockfile？&quot;">​</a></h2><p>打开任何一个工作区目录下的 <code>.gitignore</code> 文件，你会发现其中忽略了各种包管理器的 lockfile (例如 <code>package-lock.json</code> 和 <code>yarn.lock</code>)。乍一看你或许会觉得 Koishi 的做法与主流的项目管理模式不同，但实际上这套解决方案既经过了深思熟虑，也有着长期的实践检验。</p><p>在我们回答标题的问题之前，首先我们需要知道为什么主流方案推荐提交 lockfile。</p><p>在大多数情况下，我们的 <code>package.json</code> 中描述的依赖版本并不是一个具体的值，而是一个范围 (例如在 SemVer 的语义下，<code>^4.5.6</code> 可以匹配 <code>&gt;=4.5.6</code> 且 <code>&lt;5.0.0</code> 的任何版本号)。这样设计的好处是，如果项目中存在大量的嵌套依赖，那么使用范围描述就可以让包管理器有更大的自由去选择符合要求的版本，减少了要下载的依赖数量，优化了安装效率和打包体积。</p><p>然而，上面的设计也引入了额外的问题。由于这个范围描述的不确定性，在不同的时间、不同的环境下安装时，可能会得到不同的依赖树。这种不一致性不仅可能体现在运行结果上，其中的多例问题更是会直接影响软件的启动。</p><p>lockfile 的作用是锁定依赖的版本。在理想情况下，提交了 lockfile 的仓库可以确保在任何时间、任何环境下安装，总能得到相同的依赖树。它对于项目的稳定运行是不可或缺的。</p><p>说完了 lockfile 的必要性，接下来我们来看看为什么 Koishi 不推荐提交 lockfile。</p><p>首先，lockfile 本身就阻止了使用工作区仓库开发。如果提交 lockfile 就意味着开发者需要为每一个仓库安装完整的依赖，这与工作区的初衷相悖。此外，lockfile 还会阻止在子工作区内部进行 patch 和 link，这也破坏了工作区所期望的开发体验。</p><p>最后，关于依赖树不一致导致多例和版本移动问题。Cordis v3 更新以后，Koishi 生态中的所有包都已经实现了无副作用，因此即便发生了多例也完全不会影响运行。至于版本移动问题，很遗憾的是，即使提交了 lockfile 该问题也依然存在。既然开发者已经注定需要手动修复依赖树了，那么只维护一棵依赖树显然是更好的选择。</p><p>也有人会提出提交 lockfile 可以提高 CI 效率的观点。实际上，这种效率依然是手动维护依赖树换来的。我们推荐的方案是使用 <code>package.json</code> 作为缓存键，对所有包管理器生成文件进行缓存。在缓存命中时，此方案可以获得与有 lockfile 完全相同的效率；而当缓存未命中时，此方案可以确保整个项目是从零安装的，反而杜绝了多例和版本移动问题。</p>`,46),e=[p];function h(t,k,o,c,d,B){return i(),a("div",null,e)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
