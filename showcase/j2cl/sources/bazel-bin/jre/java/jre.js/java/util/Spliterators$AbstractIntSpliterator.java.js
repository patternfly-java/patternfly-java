goog.module('java.util.Spliterators.AbstractIntSpliterator');

goog.require('java.lang.Integer');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterator.OfPrimitive');
goog.require('java.util.Spliterators.BaseSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.IntConsumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
exports = AbstractIntSpliterator;
