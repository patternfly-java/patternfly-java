goog.module('java.util.stream.LongStreamImpl.MapToObjSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.Spliterators.AbstractSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.LongConsumer');
goog.require('java.util.function.LongFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');

const MapToObjSpliterator = goog.require('java.util.stream.LongStreamImpl.MapToObjSpliterator$impl');
exports = MapToObjSpliterator;
