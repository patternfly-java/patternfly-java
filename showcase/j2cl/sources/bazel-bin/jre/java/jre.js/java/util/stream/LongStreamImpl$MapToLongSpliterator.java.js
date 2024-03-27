goog.module('java.util.stream.LongStreamImpl.MapToLongSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.Spliterators.AbstractLongSpliterator');
goog.require('java.util.function.LongConsumer');
goog.require('java.util.function.LongUnaryOperator');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToLongSpliterator = goog.require('java.util.stream.LongStreamImpl.MapToLongSpliterator$impl');
exports = MapToLongSpliterator;
