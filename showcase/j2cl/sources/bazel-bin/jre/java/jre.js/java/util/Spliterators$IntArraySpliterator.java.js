goog.module('java.util.Spliterators.IntArraySpliterator');

goog.require('java.lang.Integer');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterators.BaseArraySpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.IntConsumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const IntArraySpliterator = goog.require('java.util.Spliterators.IntArraySpliterator$impl');
exports = IntArraySpliterator;
