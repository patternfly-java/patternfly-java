goog.module('java.util.stream.StreamImpl.MapToIntSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators.AbstractIntSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.ToIntFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToIntSpliterator = goog.require('java.util.stream.StreamImpl.MapToIntSpliterator$impl');
exports = MapToIntSpliterator;
