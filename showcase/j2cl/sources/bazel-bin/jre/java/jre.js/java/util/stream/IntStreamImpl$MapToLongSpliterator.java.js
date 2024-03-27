goog.module('java.util.stream.IntStreamImpl.MapToLongSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterators.AbstractLongSpliterator');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.IntToLongFunction');
goog.require('java.util.function.LongConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToLongSpliterator = goog.require('java.util.stream.IntStreamImpl.MapToLongSpliterator$impl');
exports = MapToLongSpliterator;
