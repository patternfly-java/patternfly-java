goog.module('java.util.Spliterator.OfInt');

goog.require('java.lang.Integer');
goog.require('java.util.Spliterator.OfPrimitive');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.IntConsumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OfInt = goog.require('java.util.Spliterator.OfInt$impl');
exports = OfInt;
