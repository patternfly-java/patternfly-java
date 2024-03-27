goog.module('java.util.stream.StreamImpl.MapToDoubleSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators.AbstractDoubleSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.DoubleConsumer');
goog.require('java.util.function.ToDoubleFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MapToDoubleSpliterator = goog.require('java.util.stream.StreamImpl.MapToDoubleSpliterator$impl');
exports = MapToDoubleSpliterator;
