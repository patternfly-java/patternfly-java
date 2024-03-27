goog.module('java.util.stream.DoubleStreamImpl.MapToIntSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterators.AbstractIntSpliterator');
goog.require('java.util.function.DoubleConsumer');
goog.require('java.util.function.DoubleToIntFunction');
goog.require('java.util.function.IntConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToIntSpliterator = goog.require('java.util.stream.DoubleStreamImpl.MapToIntSpliterator$impl');
exports = MapToIntSpliterator;
