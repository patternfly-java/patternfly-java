goog.module('java.util.Spliterators.DoubleArraySpliterator');

goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterators.BaseArraySpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.DoubleConsumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const DoubleArraySpliterator = goog.require('java.util.Spliterators.DoubleArraySpliterator$impl');
exports = DoubleArraySpliterator;
