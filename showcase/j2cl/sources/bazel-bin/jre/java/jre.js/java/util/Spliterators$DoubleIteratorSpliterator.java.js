goog.module('java.util.Spliterators.DoubleIteratorSpliterator');

goog.require('java.lang.Long');
goog.require('java.util.Comparator');
goog.require('java.util.PrimitiveIterator.OfDouble');
goog.require('java.util.Spliterators');
goog.require('java.util.Spliterators.AbstractDoubleSpliterator');
goog.require('java.util.function.DoubleConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const DoubleIteratorSpliterator = goog.require('java.util.Spliterators.DoubleIteratorSpliterator$impl');
exports = DoubleIteratorSpliterator;
