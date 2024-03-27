goog.module('java.lang.ThreadLocal');

goog.require('java.lang.Object');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');

const ThreadLocal = goog.require('java.lang.ThreadLocal$impl');
exports = ThreadLocal;
