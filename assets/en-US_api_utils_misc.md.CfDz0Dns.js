import{_ as e,k as a,j as o,m as r}from"./chunks/framework.CN4YI0Ml.js";const g=JSON.parse('{"title":"Miscellaneous","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/utils/misc.md","filePath":"en-US/api/utils/misc.md"}'),l={name:"en-US/api/utils/misc.md"},i=r('<h1 id="miscellaneous" tabindex="-1">Miscellaneous <a class="header-anchor" href="#miscellaneous" aria-label="Permalink to &quot;Miscellaneous&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节中的 API 来自 <a href="https://github.com/shigma/cosmokit" target="_blank" rel="noreferrer">cosmokit</a>，并由 Koishi 重新导出。</p></div><p>这一节介绍了其他未被归类的内置工具函数。</p><h2 id="字符串操作" tabindex="-1">字符串操作 <a class="header-anchor" href="#字符串操作" aria-label="Permalink to &quot;字符串操作&quot;">​</a></h2><h3 id="capitalize" tabindex="-1">capitalize(source) <a class="header-anchor" href="#capitalize" aria-label="Permalink to &quot;capitalize(source)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>string</code> 源文本</li><li>返回值: <code>string</code> 首字母大写后的文本</li></ul><p>首字母大写。</p><h3 id="camelcase" tabindex="-1">camelCase(source) <a class="header-anchor" href="#camelcase" aria-label="Permalink to &quot;camelCase(source)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>any</code> 要转换的内容</li><li>返回值: <code>any</code> 转换结果</li></ul><p>如果输入的是字符串，则将字符串转换成 camelCase；如果是数组或对象，则递归地将对象中的每个（可枚举）的键转换成 camelCase；其他情况不受影响。</p><h3 id="paramcase" tabindex="-1">paramCase(source) <a class="header-anchor" href="#paramcase" aria-label="Permalink to &quot;paramCase(source)&quot;">​</a></h3><p>如果输入的是字符串，则将字符串转换成 param-case；如果是数组或对象，则递归地将对象中的每个（可枚举）的键转换成 param-case；其他情况不受影响。</p><ul><li><strong>source:</strong> <code>any</code> 要转换的内容</li><li>返回值: <code>any</code> 转换结果</li></ul><h3 id="snakecase" tabindex="-1">snakeCase(source) <a class="header-anchor" href="#snakecase" aria-label="Permalink to &quot;snakeCase(source)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>any</code> 要转换的内容</li><li>返回值: <code>any</code> 转换结果</li></ul><p>如果输入的是字符串，则将字符串转换成 snake_case；如果是数组或对象，则递归地将对象中的每个（可枚举）的键转换成 snake_case；其他情况不受影响。</p><h2 id="集合操作" tabindex="-1">集合操作 <a class="header-anchor" href="#集合操作" aria-label="Permalink to &quot;集合操作&quot;">​</a></h2><h3 id="contain" tabindex="-1">contain(array1, array2) <a class="header-anchor" href="#contain" aria-label="Permalink to &quot;contain(array1, array2)&quot;">​</a></h3><ul><li><strong>array1:</strong> <code>readonly any[]</code> 数组 1</li><li><strong>array2:</strong> <code>readonly any[]</code> 数组 2</li><li>返回值: <code>boolean</code> 数组 1 是否包含数组 2 的全部元素</li></ul><p>检测集合的包含关系。</p><h3 id="intersection" tabindex="-1">intersection(array1, array2) <a class="header-anchor" href="#intersection" aria-label="Permalink to &quot;intersection(array1, array2)&quot;">​</a></h3><ul><li><strong>array1:</strong> <code>readonly any[]</code> 数组 1</li><li><strong>array2:</strong> <code>readonly any[]</code> 数组 2</li><li>返回值: <code>any[]</code> 两个数组的交集</li></ul><p>求两个集合的交集。</p><h3 id="difference" tabindex="-1">difference(array1, array2) <a class="header-anchor" href="#difference" aria-label="Permalink to &quot;difference(array1, array2)&quot;">​</a></h3><ul><li><strong>array1:</strong> <code>readonly any[]</code> 数组 1</li><li><strong>array2:</strong> <code>readonly any[]</code> 数组 2</li><li>返回值: <code>any[]</code> 两个数组的差集</li></ul><p>求两个集合的差集。</p><h3 id="union" tabindex="-1">union(array1, array2) <a class="header-anchor" href="#union" aria-label="Permalink to &quot;union(array1, array2)&quot;">​</a></h3><ul><li><strong>array1:</strong> <code>readonly any[]</code> 数组 1</li><li><strong>array2:</strong> <code>readonly any[]</code> 数组 2</li><li>返回值: <code>any[]</code> 两个数组的并集</li></ul><p>求两个集合的并集。</p><h2 id="对象操作" tabindex="-1">对象操作 <a class="header-anchor" href="#对象操作" aria-label="Permalink to &quot;对象操作&quot;">​</a></h2><h3 id="is" tabindex="-1">is(type, value) <a class="header-anchor" href="#is" aria-label="Permalink to &quot;is(type, value)&quot;">​</a></h3><ul><li><strong>type:</strong> <code>string</code> 类型，例如 <code>Date</code></li><li><strong>value:</strong> <code>any</code> 要判断的值</li><li>返回值: <code>boolean</code></li></ul><p>判断一个值是否为指定的对象实例。</p><h3 id="clone" tabindex="-1">clone(source) <a class="header-anchor" href="#clone" aria-label="Permalink to &quot;clone(source)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>T</code> 要克隆的值</li><li>返回值: <code>T</code></li></ul><p>深度克隆一个值。</p><h3 id="deepequal" tabindex="-1">deepEqual(a, b, strict?) <a class="header-anchor" href="#deepequal" aria-label="Permalink to &quot;deepEqual(a, b, strict?)&quot;">​</a></h3><ul><li><strong>a:</strong> <code>any</code> 要比较的值</li><li><strong>b:</strong> <code>any</code> 要比较的值</li><li><strong>strict:</strong> <code>boolean</code> 使用严格模式 (默认为 <code>false</code>)</li><li>返回值: <code>boolean</code></li></ul><p>深度比较两个值是否相等。</p><p>当 <code>strict</code> 设置为 <code>false</code> 时，<code>null</code> 和 <code>undefined</code> 视为相等。</p><h3 id="pick" tabindex="-1">pick(source, keys, forced?) <a class="header-anchor" href="#pick" aria-label="Permalink to &quot;pick(source, keys, forced?)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>O</code> 源对象</li><li><strong>keys:</strong> <code>Iterable&lt;K&gt;</code> 要提取的键</li><li><strong>forced:</strong> <code>boolean</code> 强制提取 (默认为 <code>false</code>)</li><li>返回值: <code>Pick&lt;O, K&gt;</code></li></ul><p>从一个对象中提取指定的键。</p><p>当 <code>forced</code> 设置为 <code>false</code> 时，属性不存在或者为 <code>undefined</code> 的情况下不会被提取。</p><h3 id="omit" tabindex="-1">omit(source, keys) <a class="header-anchor" href="#omit" aria-label="Permalink to &quot;omit(source, keys)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>O</code> 源对象</li><li><strong>keys:</strong> <code>Iterable&lt;K&gt;</code> 要排除的键</li><li>返回值: <code>Omit&lt;O, K&gt;</code></li></ul><p>从一个对象中排除指定的键。</p><h3 id="mapvalues" tabindex="-1">mapValues(source, callback) <a class="header-anchor" href="#mapvalues" aria-label="Permalink to &quot;mapValues(source, callback)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>Record&lt;K, V&gt;</code> 源对象</li><li><strong>callback:</strong> <code>(value: V, key: K) =&gt; T</code> 回调函数</li><li>返回值: <code>Record&lt;K, T&gt;</code></li></ul><p>将对象的每个值进行映射，返回新的对象。</p><h3 id="filterkeys" tabindex="-1">filterKeys(source, callback) <a class="header-anchor" href="#filterkeys" aria-label="Permalink to &quot;filterKeys(source, callback)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>Record&lt;K, V&gt;</code> 源对象</li><li><strong>callback:</strong> <code>(key: K, value: V) =&gt; key is T</code> 回调函数</li><li>返回值: <code>Record&lt;T, V&gt;</code></li></ul><p>将对象的每个键进行过滤，返回新的对象。</p><h2 id="日期操作" tabindex="-1">日期操作 <a class="header-anchor" href="#日期操作" aria-label="Permalink to &quot;日期操作&quot;">​</a></h2><h3 id="静态属性" tabindex="-1">静态属性 <a class="header-anchor" href="#静态属性" aria-label="Permalink to &quot;静态属性&quot;">​</a></h3><ul><li>Time.millisecond</li><li>Time.second</li><li>Time.minute</li><li>Time.hour</li><li>Time.day</li><li>Time.week</li></ul><h3 id="time-getdatenumber" tabindex="-1">Time.getDateNumber(date?) <a class="header-anchor" href="#time-getdatenumber" aria-label="Permalink to &quot;Time.getDateNumber(date?)&quot;">​</a></h3><ul><li><strong>date:</strong> <code>Date</code> 日期对象，默认为 <code>new Date()</code></li><li>返回值: <code>number</code> UNIX 时间开始后的天数</li></ul><p>获取当前日期（从 UNIX 时间开始时计算）。</p><h3 id="time-fromdatenumber" tabindex="-1">Time.fromDateNumber(value) <a class="header-anchor" href="#time-fromdatenumber" aria-label="Permalink to &quot;Time.fromDateNumber(value)&quot;">​</a></h3><ul><li><strong>value:</strong> <code>number</code> UNIX 时间开始后的天数</li><li>返回值: <code>Date</code> 日期对象</li></ul><p>从 UNIX 时间开始后的天数计算日期对象。</p><h3 id="time-parsetime" tabindex="-1">Time.parseTime(source) <a class="header-anchor" href="#time-parsetime" aria-label="Permalink to &quot;Time.parseTime(source)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>string</code> 要解析的字符串</li></ul><p>将一个字符串解析成时间长度。</p><h3 id="time-parsedate" tabindex="-1">Time.parseDate(source) <a class="header-anchor" href="#time-parsedate" aria-label="Permalink to &quot;Time.parseDate(source)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>string</code> 要解析的字符串</li></ul><p>将一个字符串解析成 Date 对象。</p><h3 id="time-format" tabindex="-1">Time.format(ms) <a class="header-anchor" href="#time-format" aria-label="Permalink to &quot;Time.format(ms)&quot;">​</a></h3><ul><li><strong>ms:</strong> <code>number</code> 毫秒数</li></ul><h2 id="其他工具函数" tabindex="-1">其他工具函数 <a class="header-anchor" href="#其他工具函数" aria-label="Permalink to &quot;其他工具函数&quot;">​</a></h2><h3 id="noop" tabindex="-1">noop() <a class="header-anchor" href="#noop" aria-label="Permalink to &quot;noop()&quot;">​</a></h3><ul><li>返回值: <code>void</code></li></ul><p>不进行任何操作（no operation）。</p><h3 id="sleep" tabindex="-1">sleep(ms?) <a class="header-anchor" href="#sleep" aria-label="Permalink to &quot;sleep(ms?)&quot;">​</a></h3><ul><li><strong>ms:</strong> <code>number</code> 要等待的毫秒数</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>等待一段时间。</p><h3 id="isinteger" tabindex="-1">isInteger(value) <a class="header-anchor" href="#isinteger" aria-label="Permalink to &quot;isInteger(value)&quot;">​</a></h3><ul><li><strong>value:</strong> <code>any</code> 要判断的值</li><li>返回值: <code>boolean</code> 是否为整数</li></ul><p>判断传入的值是否为整数。</p>',80),t=[i];function c(s,n,d,u,h,m){return o(),a("div",null,t)}const b=e(l,[["render",c]]);export{g as __pageData,b as default};
