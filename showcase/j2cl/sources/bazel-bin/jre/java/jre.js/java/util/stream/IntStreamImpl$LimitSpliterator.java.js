goog.module('java.util.stream.IntStreamImpl.LimitSpliterator');

goog.require('java.lang.Long');
goog.require('java.lang.Math');
goog.require('java.util.Comparator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterators.AbstractIntSpliterator');
goog.require('java.util.function.IntConsumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');

const LimitSpliterator = goog.require('java.util.stream.IntStreamImpl.LimitSpliterator$impl');
exports = LimitSpliterator;
