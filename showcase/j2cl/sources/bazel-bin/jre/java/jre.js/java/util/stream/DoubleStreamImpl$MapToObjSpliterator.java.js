goog.module('java.util.stream.DoubleStreamImpl.MapToObjSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterators.AbstractSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.DoubleConsumer');
goog.require('java.util.function.DoubleFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const MapToObjSpliterator = goog.require('java.util.stream.DoubleStreamImpl.MapToObjSpliterator$impl');
exports = MapToObjSpliterator;
