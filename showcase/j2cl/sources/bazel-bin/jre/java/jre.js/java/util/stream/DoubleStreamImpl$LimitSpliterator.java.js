goog.module('java.util.stream.DoubleStreamImpl.LimitSpliterator');

goog.require('java.lang.Long');
goog.require('java.lang.Math');
goog.require('java.util.Comparator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterators.AbstractDoubleSpliterator');
goog.require('java.util.function.DoubleConsumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');

const LimitSpliterator = goog.require('java.util.stream.DoubleStreamImpl.LimitSpliterator$impl');
exports = LimitSpliterator;
