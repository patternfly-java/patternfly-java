goog.module('java.util.stream.IntStreamImpl.MapToDoubleSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterators.AbstractDoubleSpliterator');
goog.require('java.util.function.DoubleConsumer');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.IntToDoubleFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToDoubleSpliterator = goog.require('java.util.stream.IntStreamImpl.MapToDoubleSpliterator$impl');
exports = MapToDoubleSpliterator;
