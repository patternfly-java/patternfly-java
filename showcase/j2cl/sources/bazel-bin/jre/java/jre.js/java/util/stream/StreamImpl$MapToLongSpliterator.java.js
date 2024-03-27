goog.module('java.util.stream.StreamImpl.MapToLongSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators.AbstractLongSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.LongConsumer');
goog.require('java.util.function.ToLongFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToLongSpliterator = goog.require('java.util.stream.StreamImpl.MapToLongSpliterator$impl');
exports = MapToLongSpliterator;
