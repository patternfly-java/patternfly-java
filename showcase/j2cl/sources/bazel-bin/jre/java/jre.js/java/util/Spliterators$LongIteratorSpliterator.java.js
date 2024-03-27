goog.module('java.util.Spliterators.LongIteratorSpliterator');

goog.require('java.lang.Long');
goog.require('java.util.Comparator');
goog.require('java.util.PrimitiveIterator.OfLong');
goog.require('java.util.Spliterators');
goog.require('java.util.Spliterators.AbstractLongSpliterator');
goog.require('java.util.function.LongConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const LongIteratorSpliterator = goog.require('java.util.Spliterators.LongIteratorSpliterator$impl');
exports = LongIteratorSpliterator;
