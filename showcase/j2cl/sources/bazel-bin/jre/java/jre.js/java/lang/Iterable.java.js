goog.module('java.lang.Iterable');

goog.require('java.lang.Iterable.$LambdaAdaptor');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const Iterable = goog.require('java.lang.Iterable$impl');
exports = Iterable;
