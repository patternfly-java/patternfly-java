goog.module('java.util.stream.DoubleStreamImpl.MapToLongSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterators.AbstractLongSpliterator');
goog.require('java.util.function.DoubleConsumer');
goog.require('java.util.function.DoubleToLongFunction');
goog.require('java.util.function.LongConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToLongSpliterator = goog.require('java.util.stream.DoubleStreamImpl.MapToLongSpliterator$impl');
exports = MapToLongSpliterator;
