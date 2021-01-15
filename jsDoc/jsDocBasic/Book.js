/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */
function Book(title, author) {
    this.title = title;
    this.author = author;
}
Book.prototype = {
    /**
     * 获取书本的标题
     * @returns {string|*}
     */
    getTitle: function () {
        return this.title;
    },
    /**
     * 设置书本的页数
     * @param pageNum {number} 页数
     */
    setPageNum: function (pageNum) {
        this.pageNum = pageNum;
    }
};

/**
 * Set the shoe's color.
 *
 * @param {SHOE_COLORS} color - The shoe color. Must be an enumerated
 * value of {@link SHOE_COLORS}.
 */
Book.prototype.setColor = function(color) {
    // ...
}; 

/** @type {(string|Array.<string>)} */
var hi = 'dasda';

export { Book, hi }