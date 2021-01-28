module.exports = {
  env: {
    /**
     * 我们知道，JavaScript 在不同的环境下有不同的 API 可以被调用
     * 这些 API 在很多时候都是以全局成员的形式呈现
     * 如，浏览器环境的 document、window、alert 等，Nodejs 中却不存在这些全局变量
     * 那么，env 对象的每一个配置选项就是标记当前代码最终的运行环境
     * eslint 会根据配置的环境来判断某一个成员是否是可用的
     * 从而去避免你的代码当中使用了那些不存在的成员，例如，这里的 browser：true 就表示
     * 当前代码最终运行在浏览器环境中，这就意味着，我们可以在代码中直接使用 window、document 
     * 等浏览器支持的 API，换个角度来说，env 对象下的每一个属性都意味着一组全局变量是否可以在
     * 当前代码中使用
     * ## 总结：env 提供了一些提前预定义好的全局环境变量，它们分别对应着一种环境，我们需要做的就是
     * 通过配置去决定我们的代码最终应该运行在哪些平台，哪些变量是否可用，例如，我们的代码既运行在浏览器端，
     * 也运行在 nodejs 端，那么browser和node 都可以设置为 true，eslint 提供的这些选项（环境）不会冲突
     * 因此，如果需要设置多种环境，直接配置在 env 对象下即可，不用担心配置多个环境时有冲突问题
     * 
     * 那么 env 具体可以设置哪些环境呢，eslint 官网给出了所有可用选项：@see https://eslint.org/docs/user-guide/configuring#specifying-environments
     */
    browser: true,
    es2021: true
  },
  /** 
   * ① 用以继承一些公共配置，例如下面继承了社区的 standard 风格配置
   * ② standard 是社区中非常流行的一个 eslint 代码风格共享配置，和 airbnb 齐名
   * ③ 当你想要在多个项目之间共享一个 eslint 风格配置，就可以定义一个公共的eslint配置文件，然后在extends数组中继承它
   * ④ extends 是一个数组，也就是说可以继承多个共享配置
   */
  extends: [
    'standard'
  ],
  /**
   * ① 该选项用以设置语法解析器的相关配置
   * ② 我们知道，ECMAScript 规范近几年不断的在提交新的语法，那么 es2015 的变动是最大的
   * ③ 这个选项就可以用来配置我们的 js 文件支持的语法应该是 ECMAScript 哪一个标准
   * ④ 默认情况下，ecmaVersion的值总是支持最新的语法，如果我们手动将其设置为 5，那么 let、const 等 es6 的新语法也就不会被 eslint 支持了
   * ⑤ ecmaVersion影响的只是语法检测，而不涉及到某个全局成员是否可用，对于全局变量是否可用的问题，需要通过 env 去配置或者 globals去配置
   * ⑥ 值得一提的是，不仅仅只有 env 控制着全局变量在我们的代码中是否可用，globals 也是
   */
  parserOptions: {
    // 
    ecmaVersion: 12,
    // sourceType 控制我们的代码是否启用 ES module，默认是不启用，但是如果你用的standard共享配置，它设置的是 true，如果你不想启用 ES module，请在这里覆盖掉它
    // sourceType: "script"
  },
  /**
   * ① rules 控制 eslint 每一条校验规则的开启和关闭
   * ② rules 中的每一条规则，都可以针对性的设置是否开启和关闭(off)、以及开启时在检测结果中，这类规则是警告(warn)还是错误消息(error)
   * ③ standard 风格已经帮我们开启很多 rules 规则，基本上可以满足绝大多数开发者的需求
   */
  rules: {
    // 设置为 error 后，检测结果中关乎这条规则的问题都会报错
    // "no-alert": "error"
    "no-alert": "off"
  },
  /**
   * 1、globals 就是帮助我们在代码中额外声明可用的全局变量
   * 2、例如当项目中有使用 saltire_util 这个全局变量时，如果不作声明，eslint 会爆出saltire_util未定义的错误
   * 3、解决方法就是在 globals 对象下声明 saltire_util
   */
  globals: {
    "saltire_util": "readonly"
  }
}

/**
 * 对于上面提到的第⑤点，可以通过以下配置做出测试
 * 我们知道，Promise 是 ES2015 提出的一个 API，在代码中，它也是一个全局的变量
 * 以下配置里，我们设置 env 的 es6 属性为 false，parserOptions的ecmaVersion属性为 2015
 * 如果parserOptions的ecmaVersion不仅对语法做检查，还支持对应ECMAScript 版本的 API 的话，那么 Promise 就应该受支持
 * 反之，parserOptions的ecmaVersion只做语法检查，全局变量是否可用的问题不归它管
 */

// module.exports = {
//   env: {
//     browser: true,
//     es6: false
//   },
//   extends: [
//     'standard'
//   ],
//   parserOptions: {
//     ecmaVersion: 2015,
//   },
//   rules: {
    
//   }
// }