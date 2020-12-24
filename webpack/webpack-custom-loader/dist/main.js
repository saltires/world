/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _hello_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hello_md__WEBPACK_IMPORTED_MODULE_0__);


console.log((_hello_md__WEBPACK_IMPORTED_MODULE_0___default()))

const ele = document.createElement('div')

ele.innerHTML = (_hello_md__WEBPACK_IMPORTED_MODULE_0___default())

document.body.append(ele)

/***/ }),
/* 1 */
/***/ ((module) => {

// Module
var code = "<h4 id=\"模块化打包工具的由来\">模块化打包工具的由来</h4>\n<p>模块化确实解决了我们在复杂应用开发中的代码组织问题，但是随着我们引入模块化，我们的应用又会产生一些新的问题：</p>\n<ul>\n<li>ES Modules 存在环境兼容问题</li>\n<li>模块文件过多，网络请求频繁（因为每个模块都需要通过 xhr 请求单独获取）</li>\n<li>除了 js，其他的前端资源如 css 等也需要模块化</li>\n</ul>\n<p>那么是否存在一种解决方案可以帮助我们解决以上问题，假设它存在，那么它可能需要完成以下功能：</p>\n<ul>\n<li>帮我们将开发阶段编写的包含 ES6+ 新特性的代码编译为更为绝大多数浏览器兼容的 ES5（解决了环境兼容问题）</li>\n<li>将开发阶段散落的模块化文件整合到一起，这就解决了浏览器会对模块文件频繁请求的问题（模块化对于开发阶段非常有必要，但是对于生产环境，文件还是越少越好）</li>\n<li>需要支持不同种类的前端资源类型，这样我们就可以把前端开发中所涉及到的样式、图片、字体等资源文件当做模块去使用，这样对于整个前端项目来说，就有了一个统一的模块化方案了</li>\n</ul>\n<h4 id=\"模块化打包工具概要\">模块化打包工具概要</h4>\n<p>webpack 作为一个模块打包工具，本身就可以解决JavaScript 模块化代码打包整合的问题，它可以将项目中零散的 js 文件打包到同一个 js 中。</p>\n<p>同时，在打包过程中，对于模块中那些可能存在环境兼容问题的 ES6+ 特性代码，我们可以通过一些模块加载器（Loader）对其进行编译转换</p>\n<p>其次，Webpack 还具有代码拆分的能力（Code Splitting），使得应用中所有的代码都按照我们的需要去打包，这样，我们就不必担心所有的模块文件都被打包到一起而导致生产环境中的单个文件体积过大</p>\n<p>我们可以将项目第一次运行时所必须的那些代码打包到一起，对于其他非必须的模块我们再单独打包，等到应用工作过程中实际需要这些模块时，我们再去异步加载这些模块</p>\n<p>因此，通过 webpac 提供的模块打包功能以及代码拆分功能，我们就不必担心生产环境下文件零碎化或者单个文件体积过于庞大的问题，同时，它还能实现按需加载的功能</p>\n<p>最后，对于其他类型的资源文件，webpack 支持我们在 JavaScript 中以模块化的方式载入任何类型的资源文件，例如，我们通过 webpack 就可以在 JavaScript 中直接引入一个 css 文件，这些 css 内容最终可以以 style 标签的形式去完成它相应的工作，而对于其他类型的资源文件，也有类似的方式去实现</p>\n<p>总体来说，webpack 等打包工具以模块化为目标，这里的模块化不仅仅是 javascript 的模块化，而是针对整个前端项目整体所有资源文件的模块化，这类工具使我们在开发阶段可以充分享受模块化带来的优势，同时又不必担心模块化对于生产环境产生的一些负面影响</p>\n<h4 id=\"webpack-快速上手\">webpack 快速上手</h4>\n<p>webpack 作为当前最主流的前端模块打包器，它提供了一整套的前端项目模块化方案，而不仅仅是局限于 JavaScript 的模块化</p>\n<p>通过 webpack 提供的前端模块化方案，我们可以很轻松的对我们前端项目开发过程中涉及到的所有资源进行模块化</p>\n<p>这里我们通过一个<a href=\"https://github.com/saltires/world/tree/master/webpack/webpack-quick-start\">快速案例</a>观察 webpack 的使用</p>\n<h4 id=\"webpack-配置文件\">webpack 配置文件</h4>\n<p>webpack4 之后的版本支持以零配置的方式运行 webpack，此时，整个打包过程会按照默认的约定方式进行，将以<code>src/index.js</code>为入口文件将所有的输出打包至<code>dist/main.js</code></p>\n<p>绝大多数情况下，我们需要在项目中自定义入口文件及输出路径等，此时我们需要在项目根目录下建立一个<code>webpack.config.js</code>文件，webpack 在打包时会读取它的配置信息并按照我们期望的配置去打包</p>\n<p>这个文件运行在 Nodejs 环境中，因此，它默认遵循 CommonJS 规范</p>\n<p>下面列举一些最常见的配置选项：</p>\n<ul>\n<li>entry （指明打包的入口文件）</li>\n<li>output （指明打包后生成文件的位置及文件名等）</li>\n</ul>\n<pre><code class=\"language-Javascript\">const path = require(&#39;path&#39;)\n\nmodule.exports = {\n    entry: &#39;./src/main.js&#39;,\n    output: {\n        filename: &#39;bundle.js&#39;,\n        path: path.resolve(__dirname, &#39;output&#39;) // path 指定打包后的所有文件存放位置，必须是绝对路径\n    }\n}</code></pre>\n<h4 id=\"webpack-工作模式\">webpack 工作模式</h4>\n<p>webpack4 新增了一种工作模式的用法，这种用法大大简化了 webpack 配置的复杂程度，可以将之理解为针对不同环境的预设的配置</p>\n<p>默认情况下，webpack 采用一种叫做 production 的模式去工作，该模式下，webpack 自动采用一系列的插件压缩我们的代码，这对实际生产环境是非常友好的，但是打包的结果开发者没发去阅读</p>\n<p>我们可以通过 cli 或配置文件去指定打包的模式，具体的用法就是使用 webpack 命令时传入 <code>--mode</code>参数，这个参数有三种取值，默认是<code>production</code>，该模式自动启用优化，另一种模式则是开发模式<code>development</code>,该模式优先考虑打包的速度及代码可阅读、可调试性，另一种模式则是<code>none</code>,该模式是最原始的打包，关于具体差异，可以参考<a href=\"https://webpack.js.org/configuration/mode/\">官方文档 mode</a></p>\n<h4 id=\"webpack-打包结果运行原理\">webpack 打包结果运行原理</h4>\n<p>webpack 的核心代码是一种被称作 Webpack Bootstrap 的代码，在这段核心代码中，<code>__webpack_require__</code>函数被用于加载模块。Webpack 从入口文件解析模块化代码并将之打包的过程就可以认为是反复调用<code>__webpack_require__</code>的过程。</p>\n<p>webpack 打包后的代码并不会特别的复杂，它只是帮我们把所有的零散模块放到了同一个文件之中，除了放到同一个文件当中，它还得提供一些基础代码，让我们这些模块与模块之间相互依赖的关系还可以保持原有的状态，这实际就是<code>webpack bootstrap</code>的作用</p>\n<h4 id=\"webpack-导入资源模块\">webpack 导入资源模块</h4>\n<p>webpack 的打包入口从某种程度上说可以是整个项目应用的运行入口，而就目前而言，前端项目中的业务是由 JavaScript 驱动的</p>\n<p>虽然 webpack 的打包入口也可以指定为 css 等其他资源文件，但是通常来说，我们的项目依然以 js 作为入口文件，并在 js 中引入 css 等其他资源，关于这个案例，可以参考 <a href=\"https://github.com/saltires/world/tree/master/webpack/webpack-import-css\">webpack-import-css</a></p>\n<h4 id=\"webpack-文件资源加载器\">webpack 文件资源加载器</h4>\n<p>目前，webpack 社区提供了非常多的资源加载器，基本上你能想到的所有合理的需求都会有对应的 loader，这里尝试一些非常有代表性的 loader</p>\n<p>首先是文件资源加载器，大多数加载器都类似于 css-loader，通过将资源模块转为 js 代码的实现方式去工作，但是，还有一些我们经常用到的资源文件，例如我们项目当中的图片，字体，这些文件是没法通过 js 代码的方式去表示的</p>\n<p>对于这一类的资源文件，我们需要用到文件资源加载器，也就是 file-loader，那么文件资源加载器究竟是如何工作的呢？</p>\n<p>webpack 在打包时遇到了图片文件时，根据我们配置文件的配置，匹配到对应的文件加载器（这里是 file-loader），文件加载器就会开始工作，首先，它会将会将文件拷贝至输出目录（默认位于打包后的根目录，可以通过 publicPath 配置），然后会将拷贝后文件的路径作为返回值返回（js 代码中就可以拿到该路径）</p>\n<p><code>Note</code>：<strong>webpack_public_path</strong> 可用于在业务代码中查看资源文件的输出路径，该变量由 webpack 提供</p>\n<p>通过下面的快速案例了解<a href=\"https://note.youdao.com/\">在 webpack 中使用图片</a></p>\n<h4 id=\"webpack-url-加载器\">webpack url 加载器</h4>\n<p>除了 file-loader 这种通过拷贝物理文件的方式去处理资源文件以外，还有一种通过 Data Url 的方式去表示文件，这种方式也非常的常见，Data Url 是一种非常特殊的 url 形式，它可以用来直接表示一个文件。在 webpack 打包静态资源文件时，这种方式特别适用于体积小的图片等，可以省去 http 请求。</p>\n<p>webpack 想要实现这个功能，需要使用一个叫做 url-loader 的加载器，下面通过一个<a href=\"https://note.youdao.com/\">快速案例</a>展示 url-loader 的用法</p>\n<p><code>总结</code>：对于项目中的小文件，通过 url-loader 去处理可以明显的减少请求次数，对于较大的文件，我们应该单独提取存放，提高加载速度，那么 url-loader 支持通过传入一些配置选项来控制文件大小的临界点，\n在这个临界点范围之内的都使用 url-loader 处理，需要注意的是，如果使用这个配置选项，那么一定要同时安装 file-loader，否则对于超出临界点的文件，url-loader 还是会去自动调用 file-laoder 处理，如果没有安装，就会出问题，如下报错：</p>\n<pre><code class=\"language-Javascript\">ERROR in ./src/images/yby.jpg\nModule build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: Cannot find module &#39;file-loader&#39;</code></pre>\n<h4 id=\"webpack-常见加载器分类\">webpack 常见加载器分类</h4>\n<p>webpack 资源加载器就类似于我们生活中的生产车间，它是用来处理我们打包过程中遇到的资源文件，除了上面介绍的 file-loader 和 url-loader 加载器，社区中还有很多其他的加载器</p>\n<p>针对这些不同效果的加载器，可以将之分为三类：</p>\n<ul>\n<li>编译转换类，例如 css-loader 就是将项目中的 css 文件处理为在 bundle.js（打包后生成的文件） 中以 js 形式工作的 css 模块，从而实现以 JavaScript 运行 css</li>\n<li>文件操作类，通常这类加载器都会把资源模块拷贝至打包后的目录，同时又将这个拷贝后的文件的访问路径返回给 js</li>\n<li>代码质量检查类，这类加载器对加载到的资源模块中的代码进行校验，它的目的是为了统一代码的风格，从而去提高代码质量，这类加载器不会去修改生产环境中的代码</li>\n</ul>\n<p>当我们接触到一个新的 Loader 时，我们应该考虑这类加载器属于何种性质的加载器，它的实现原理是什么，它在使用上需要注意哪些？</p>\n<h4 id=\"webpack-处理-es2015\">webpack 处理 ES2015</h4>\n<p>由于 webpack 默认就能处理我们代码当中的 import 和 export，所以很自然的会有人认为 webpack 会自动编译 ES6 的代码，实际上并不是这样</p>\n<p>webpack 仅仅是对模块完成打包工作，所以因为模块打包的需要，它才默认需要去处理 import 和 export，对之做相应的转换，那么除此之外，它并不能去转换我们代码当中其他的 ES6 特性</p>\n<p>其实上面的案例中，通过设置 mode 为 none，我们可以观察到打包后的生成文件里并没有去转换例如 const 或者箭头函数等 ES6 特性</p>\n<p>那如果我能需要 webpack 在打包过程中帮我们处理其他 ES6 特性的转换，那我们需要为 js 文件配置一款编译型 loader，例如最常见的 babel-loader，babel-loader 同时依赖@babel/core 和 @babel/preset-env</p>\n<p><code>总结</code>：webpack 只是打包工具，它不会帮助我们转换代码当中的 ES6 新特性，如果我们需要去处理这些新特性，我们可以为我们的 js 代码配置单独的加载器去编译转换代码</p>\n<p>这里可以参考以下快速案例关于 <a href=\"https://note.youdao.com/\">babel-loader</a> 的使用</p>\n<h4 id=\"webpack-模块加载方式\">webpack 模块加载方式</h4>\n<p>除了代码当中的 import 能够去触发模块的记载，webpack 还提供了其它几种方式：</p>\n<ul>\n<li>遵循 CommonJS 标准的 require 函数，不过，当你通过 require 函数去载入一个 ES Module 的模块时，需要注意，对于 ES Module 的默认导出，我们需要通过以下方式才能正确使用：</li>\n</ul>\n<pre><code>// heading.js 默认是一个 ESModule 模块\nconst test = require(&#39;./heading.js&#39;).default\n// 开发微信小程序时有用到一个模块是有赞 ui 的 notify 模块，它的模块内部就是使用了 ESMdoule 的默认导出\n// 而我的项目里使用的都是 commonjs 的导入语法，当时就很郁闷，为什么没发使用 Notify 函数，后来打印发现导入的对象下还有个 default 属性才是真正的 Notify 函数</code></pre>\n<ul>\n<li>遵循 AMD 标准的 define 函数和 require 函数也同样被 webpack 支持</li>\n</ul>\n<p><code>Note</code>：除非必要的情况下，否则不要在 webpack 的项目中混合使用这几种标准，否则可能会大大降低项目的可维护性，同一个项目只需去使用一个统一的标准即可</p>\n<p>除了 javascript 代码中的这几种导入资源的方式以外，还有一些独立的加载器在工作时也会去处理加载到的资源文件</p>\n<p>例如 css 代码当中的 @import 指令和 url 函数，它们也会去触发资源模块的加载，还有 html 代码当中的 img 标签的 src 属性，html-loader 在处理时也会涉及到资源模块的加载</p>\n<p>如下代码：</p>\n<pre><code>body{\n    min-height: 100vh;\n    background-image: url(&#39;./bg.png&#39;);\n    background-size: cover;\n}</code></pre>\n<p>当 css-loader 处理到如上代码时，url-loader 解析到了 url 函数，便会将 url 函数对应的文件视为一个资源模块加入到打包过程中，并根据该资源模块所属类型去找到相应的 loader 去处理，如上面的 png 文件就会根据配置文件里的 url-loader 去处理</p>\n<p>几乎我们在代码当中所有需要引用到的资源，就是有引用资源的可能性的地方，都会被 webpack 找出来，然后根据我们的配置，交给不同的 loader 去处理，最后将处理的结果整体打包到输出目录，webpack 通过这样一个特点实现了项目的模块化</p>\n<p><code>Note</code>：默认情况下，html-loader 只会处理 img 标签的 src 属性，将之对应地址的文件视为一个资源模块加入到打包过程中，而对于其他如 a 标签的 href 属性对应的文件（a 标签的 href 属性是可以指向一个文件的，添加 download 属性）则不会将之视为一个资源模块，如果希望 weboack 打包时能将之视为一个资源模块，则需要额外添加配置处理，详细可以参阅 <a href=\"https://webpack.js.org/loaders/html-loader/\">html-laoder</a></p>\n<h4 id=\"webpack-核心工作原理\">webpack 核心工作原理</h4>\n<p>通常，在一个项目中都会散落着代码和各类资源文件，那么 webpack 会根据我们的配置找到其中的一个文件作为打包的入口，正常情况下，这个文件都会是一个 JavaScript 文件</p>\n<p>然后它会去顺着我们入口文件的代码，根据代码中出现的 import 或 require 之类的语句，然后解析推断出来这个文件依赖的资源模块，之后分别取解析每一个资源模块对应的依赖，最后就得到了整个项目中文件的依赖关系的一个依赖树</p>\n<p>有了这个依赖关系树之后，webpack会递归这个依赖树，找到每个节点对应的资源文件，最后根据我们配置文件中的 rules 属性去找到这个模块对应的加载器，并交给这个加载器去加载这个模块，最后会将加载到的结果放入到 bundle.js，也就是我们的打包结果当中，从而去实现我们整个项目的打包</p>\n<p>在这整个过程中，loader 机制起着非常重要的作用，如果没有 loader 的话，就没法实现各个资源的加载和处理，那么对于 webpack来说，如果没有 laoder，它只能算是个打包合并 js 模块代码的一个工具了</p>\n<h4 id=\"loader-的工作原理\">loader 的工作原理</h4>\n<p>loader 作为 webpack 的核心机制，其内部的工作原理也非常简单，</p>\n";
// Exports
module.exports = code;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;