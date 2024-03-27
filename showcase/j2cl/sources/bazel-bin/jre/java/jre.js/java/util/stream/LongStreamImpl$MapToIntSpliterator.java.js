goog.module('java.util.stream.LongStreamImpl.MapToIntSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.Spliterators.AbstractIntSpliterator');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.LongConsumer');
goog.require('java.util.function.LongToIntFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToIntSpliterator = goog.require('java.util.stream.LongStreamImpl.MapToIntSpliterator$impl');
exports = MapToIntSpliterator;
