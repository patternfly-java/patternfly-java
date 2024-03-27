goog.module('java.util.Spliterators.IntIteratorSpliterator');

goog.require('java.lang.Long');
goog.require('java.util.Comparator');
goog.require('java.util.PrimitiveIterator.OfInt');
goog.require('java.util.Spliterators');
goog.require('java.util.Spliterators.AbstractIntSpliterator');
goog.require('java.util.function.IntConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const IntIteratorSpliterator = goog.require('java.util.Spliterators.IntIteratorSpliterator$impl');
exports = IntIteratorSpliterator;
