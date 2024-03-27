goog.module('java.util.Spliterators.BaseArraySpliterator');

goog.require('java.lang.Object');
goog.require('java.util.Comparator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Primitives');

const BaseArraySpliterator = goog.require('java.util.Spliterators.BaseArraySpliterator$impl');
exports = BaseArraySpliterator;
