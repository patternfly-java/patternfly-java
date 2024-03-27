goog.module('java.util.Spliterator.OfLong');

goog.require('java.lang.Long');
goog.require('java.util.Spliterator.OfPrimitive');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.LongConsumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OfLong = goog.require('java.util.Spliterator.OfLong$impl');
exports = OfLong;
