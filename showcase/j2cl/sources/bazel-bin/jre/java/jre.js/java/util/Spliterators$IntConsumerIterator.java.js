goog.module('java.util.Spliterators.IntConsumerIterator');

goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.PrimitiveIterator.OfInt');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.IntConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const IntConsumerIterator = goog.require('java.util.Spliterators.IntConsumerIterator$impl');
exports = IntConsumerIterator;
