goog.module('java.util.stream.LongStreamImpl.SkipSpliterator');

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

const SkipSpliterator = goog.require('java.util.stream.LongStreamImpl.SkipSpliterator$impl');
exports = SkipSpliterator;
