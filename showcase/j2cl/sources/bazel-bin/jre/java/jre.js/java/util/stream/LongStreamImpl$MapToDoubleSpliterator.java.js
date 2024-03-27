goog.module('java.util.stream.LongStreamImpl.MapToDoubleSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.Spliterators.AbstractDoubleSpliterator');
goog.require('java.util.function.DoubleConsumer');
goog.require('java.util.function.LongConsumer');
goog.require('java.util.function.LongToDoubleFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToDoubleSpliterator = goog.require('java.util.stream.LongStreamImpl.MapToDoubleSpliterator$impl');
exports = MapToDoubleSpliterator;
