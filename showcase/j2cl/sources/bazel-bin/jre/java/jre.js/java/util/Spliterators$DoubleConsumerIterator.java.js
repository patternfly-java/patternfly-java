goog.module('java.util.Spliterators.DoubleConsumerIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.PrimitiveIterator.OfDouble');
goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.DoubleConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const DoubleConsumerIterator = goog.require('java.util.Spliterators.DoubleConsumerIterator$impl');
exports = DoubleConsumerIterator;
