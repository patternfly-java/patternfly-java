goog.module('java.util.stream.IntStreamImpl.MapToObjSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterators.AbstractSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.IntFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const MapToObjSpliterator = goog.require('java.util.stream.IntStreamImpl.MapToObjSpliterator$impl');
exports = MapToObjSpliterator;
