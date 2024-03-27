goog.module('java.util.Spliterators.AbstractDoubleSpliterator');

goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterator.OfPrimitive');
goog.require('java.util.Spliterators.BaseSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.DoubleConsumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
exports = AbstractDoubleSpliterator;
