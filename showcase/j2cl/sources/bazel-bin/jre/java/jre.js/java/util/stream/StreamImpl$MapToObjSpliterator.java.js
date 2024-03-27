goog.module('java.util.stream.StreamImpl.MapToObjSpliterator');

goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators.AbstractSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const MapToObjSpliterator = goog.require('java.util.stream.StreamImpl.MapToObjSpliterator$impl');
exports = MapToObjSpliterator;
