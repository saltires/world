import { Book, hi } from './Book.js'

/**
 * multi function
 * @param {number} a must number
 * @param {number} b same
 * @returns {number} 返回数字类型
 */
function multi(a, b) {
    return a * b
}

/**
 * Returns the sum of a and b
 * @param {Number} a
 * @param {Number} b
 * @param {Boolean} retArr If set to true, the function will return an array
 * @returns {Number|Array} Sum of a and b or an array that contains a, b and the sum of a and b.
 */
function sum(a, b, retArr) {
    if (retArr) {
        return [a, b, a + b];
    }
    return a + b;
}

/**
 * Both of these will link to the bar function.
 * @see {@link bar}
 * @see bar
 */
function foo() { }


/**
 * @see { {@link http://dadsadadads.com Github} }
 */
function bar() {}

bar

/**
 * See {@link MyClass} and [MyClass's foo property]{@link MyClass#foo}.
 * Also, check out {@link http://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 */
function myFunction() {} 

my

/**
 * Options for ordering a delicious slice of pie.
 * @namespace
 */
var pieOptions = {
    /**
     * Plain.
     */
    plain: 'pie',
    /**
     * A la mode.
     * @readonly
     */
    get aLaMode() {
        return this.plain + ' with ice cream';
    }
}

/**
 * 关于确权状态的枚举
 * @readonly
 * @enum {number}
 */
var triState = {
    /** 枚举 - 确权状态 - 确权成功 */
    TRUE: 1,
    /** 枚举 - 确权状态 - 确权失败 */
    FALSE: -1,
    /** @type {boolean} */
    /** 枚举 - 确权状态 - 确权中 */
    MAYBE: true
};

/** @type {number} */
var hh = 1; 

/** @type {(string|Array.<string>)} */
var qishi;


/**
 * Solves equations of the form a * x = b
 * @example
 * // returns 2
 * globalNS.method1(5, 10);
 * @example
 * // returns 3
 * globalNS.method(5, 15);
 * @returns {Number} Returns the value of x for the equation.
 */
globalNS.method1 = function (a, b) {
    return b / a;
};

globalNS.



