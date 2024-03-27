goog.module('java.util.Spliterators.LongArraySpliterator');

goog.require('java.lang.Long');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.Spliterators.BaseArraySpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.LongConsumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const LongArraySpliterator = goog.require('java.util.Spliterators.LongArraySpliterator$impl');
exports = LongArraySpliterator;
