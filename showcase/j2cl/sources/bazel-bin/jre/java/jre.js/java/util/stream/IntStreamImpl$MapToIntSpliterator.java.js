goog.module('java.util.stream.IntStreamImpl.MapToIntSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterators.AbstractIntSpliterator');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.IntUnaryOperator');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToIntSpliterator = goog.require('java.util.stream.IntStreamImpl.MapToIntSpliterator$impl');
exports = MapToIntSpliterator;
