goog.module('java.util.stream.LongStreamImpl.LimitSpliterator');

goog.require('java.lang.Long');
goog.require('java.lang.Math');
goog.require('java.util.Comparator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.Spliterators.AbstractLongSpliterator');
goog.require('java.util.function.LongConsumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');

const LimitSpliterator = goog.require('java.util.stream.LongStreamImpl.LimitSpliterator$impl');
exports = LimitSpliterator;
