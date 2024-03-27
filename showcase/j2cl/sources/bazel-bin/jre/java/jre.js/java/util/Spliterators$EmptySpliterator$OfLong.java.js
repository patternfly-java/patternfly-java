goog.module('java.util.Spliterators.EmptySpliterator.OfLong');

goog.require('java.lang.Long');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.Spliterators.EmptySpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.LongConsumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OfLong = goog.require('java.util.Spliterators.EmptySpliterator.OfLong$impl');
exports = OfLong;
