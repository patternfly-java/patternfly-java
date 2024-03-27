goog.module('java.util.Spliterator.OfDouble');

goog.require('java.util.Spliterator.OfPrimitive');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.DoubleConsumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OfDouble = goog.require('java.util.Spliterator.OfDouble$impl');
exports = OfDouble;
