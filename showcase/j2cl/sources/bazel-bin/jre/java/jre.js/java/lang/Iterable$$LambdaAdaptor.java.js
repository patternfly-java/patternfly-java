goog.module('java.lang.Iterable.$LambdaAdaptor');

goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');

const $LambdaAdaptor = goog.require('java.lang.Iterable.$LambdaAdaptor$impl');
exports = $LambdaAdaptor;
