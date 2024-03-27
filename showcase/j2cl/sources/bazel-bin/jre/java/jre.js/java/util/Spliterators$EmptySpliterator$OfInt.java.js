goog.module('java.util.Spliterators.EmptySpliterator.OfInt');

goog.require('java.lang.Integer');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterators.EmptySpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.IntConsumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OfInt = goog.require('java.util.Spliterators.EmptySpliterator.OfInt$impl');
exports = OfInt;
