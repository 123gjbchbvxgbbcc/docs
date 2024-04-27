import{_ as r,k as l,f as a,A as t,m as u,l as n,D as e,C as i,j as c}from"./chunks/framework.CN4YI0Ml.js";const A=JSON.parse('{"title":"Utilisations avancées des commandes","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/manual/recipe/execution.md","filePath":"fr-FR/manual/recipe/execution.md"}'),d={name:"fr-FR/manual/recipe/execution.md"},m=u('<h1 id="utilisations-avancees-des-commandes" tabindex="-1">Utilisations avancées des commandes <a class="header-anchor" href="#utilisations-avancees-des-commandes" aria-label="Permalink to &quot;Utilisations avancées des commandes&quot;">​</a></h1><h2 id="les-guillemets" tabindex="-1">Les guillemets <a class="header-anchor" href="#les-guillemets" aria-label="Permalink to &quot;Les guillemets&quot;">​</a></h2><p>Koishi interprète automatiquement le contenu entre guillemets comme un paramètre single. Cela s&#39;avère très utile dans de nombreuses situations, voici quelques exemples courants :</p><ul><li>Si vous souhaitez transmettre des paramètres contenant des espaces (le comportement par défaut est de n&#39;interpréter que la partie avant l&#39;espace).</li><li>Si vous souhaitez transmettre des paramètres commençant par <code>-</code> (le comportement par défaut est d&#39;interpréter le prochain élément comme une option).</li><li>Si vous souhaitez transmettre une chaîne vide en tant que paramètre (le comportement par défaut est d&#39;interpréter comme <code>true</code>).</li><li>Si vous souhaitez transmettre des paramètres constitués uniquement de chiffres (le comportement par défaut est d&#39;interpréter comme des types <code>number</code>).</li></ul><h2 id="l-interpolation" tabindex="-1">L&#39;Interpolation <a class="header-anchor" href="#l-interpolation" aria-label="Permalink to &quot;L&#39;Interpolation&quot;">​</a></h2><p>Si vous souhaitez utiliser le contenu d&#39;une autre commande au sein d&#39;une commande, vous pouvez utiliser <code>$()</code> pour l&#39;interpolation de commandes :</p>',6),p=n("p",null,"Koishi ne s'échappe pas automatiquement du texte entre guillemets simples. Si vous ne souhaitez pas que certains paramètres soient échappés par la syntaxe d'interpolation, vous pouvez utiliser des guillemets simples :",-1),h=n("p",null,[e("Enfin, vous pouvez également en savoir plus sur une autre méthode d'interpolation dans "),n("a",{href:"https://eval.koishi.chat",target:"_blank",rel:"noreferrer"},"koishi-plugin-eval"),e(".")],-1),_=n("h2",{id:"correspondance-floue",tabindex:"-1"},[e("Correspondance floue "),n("a",{class:"header-anchor",href:"#correspondance-floue","aria-label":'Permalink to "Correspondance floue"'},"​")],-1),f=n("p",null,"Dans l'utilisation quotidienne, il arrive parfois de faire des fautes de frappe. Dans ces cas, Koishi peut automatiquement corriger en suggérant des commandes similaires :",-1),v=n("p",null,[e("Si vous souhaitez ajuster le degré de correspondance floue, vous pouvez modifier la configuration "),n("a",{href:"./../../api/core/app.html#options-minsimilarity"},"minSimilarity"),e(". Pratique, n'est-ce pas ?")],-1);function g(k,q,b,x,z,S){const o=i("chat-message"),s=i("chat-panel");return c(),l("div",null,[m,a(s,null,{default:t(()=>[a(o,{nickname:"Alice"},{default:t(()=>[e("echo foo$(echo bar)")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[e("foobar")]),_:1})]),_:1}),p,a(s,null,{default:t(()=>[a(o,{nickname:"Alice"},{default:t(()=>[e("echo 'foo$(echo bar)'")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[e("foo$(echo bar)")]),_:1})]),_:1}),h,_,f,a(s,null,{default:t(()=>[a(o,{nickname:"Alice"},{default:t(()=>[e("ecko bonjour")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[e("Voulez-vous dire « echo » ? Tapez un point pour appliquer la suggestion.")]),_:1}),a(o,{nickname:"Alice"},{default:t(()=>[e(".")]),_:1}),a(o,{nickname:"Koishi"},{default:t(()=>[e("bonjour")]),_:1})]),_:1}),v])}const C=r(d,[["render",g]]);export{A as __pageData,C as default};
