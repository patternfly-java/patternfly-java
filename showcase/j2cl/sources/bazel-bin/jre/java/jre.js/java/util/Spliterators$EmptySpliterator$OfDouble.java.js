goog.module('java.util.Spliterators.EmptySpliterator.OfDouble');

goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterators.EmptySpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.DoubleConsumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OfDouble = goog.require('java.util.Spliterators.EmptySpliterator.OfDouble$impl');
exports = OfDouble;
