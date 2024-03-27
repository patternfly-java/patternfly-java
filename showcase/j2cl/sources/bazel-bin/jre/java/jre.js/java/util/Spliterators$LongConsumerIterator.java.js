goog.module('java.util.Spliterators.LongConsumerIterator');

goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.PrimitiveIterator.OfLong');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.LongConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const LongConsumerIterator = goog.require('java.util.Spliterators.LongConsumerIterator$impl');
exports = LongConsumerIterator;
