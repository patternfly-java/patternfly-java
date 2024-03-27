goog.module('java.util.stream.DoubleStreamImpl.MapToDoubleSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterators.AbstractDoubleSpliterator');
goog.require('java.util.function.DoubleConsumer');
goog.require('java.util.function.DoubleUnaryOperator');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToDoubleSpliterator = goog.require('java.util.stream.DoubleStreamImpl.MapToDoubleSpliterator$impl');
exports = MapToDoubleSpliterator;
