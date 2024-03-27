goog.module('java.util.Spliterators.ConsumerIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const ConsumerIterator = goog.require('java.util.Spliterators.ConsumerIterator$impl');
exports = ConsumerIterator;
