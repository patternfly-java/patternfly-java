goog.module('java.util.Spliterators.AbstractLongSpliterator');

goog.require('java.lang.Long');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.Spliterator.OfPrimitive');
goog.require('java.util.Spliterators.BaseSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.LongConsumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
exports = AbstractLongSpliterator;
