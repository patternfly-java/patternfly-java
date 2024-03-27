goog.module('java.util.stream.IntStreamImpl.FilterSpliterator');

goog.require('java.util.Comparator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterators.AbstractIntSpliterator');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.IntPredicate');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const FilterSpliterator = goog.require('java.util.stream.IntStreamImpl.FilterSpliterator$impl');
exports = FilterSpliterator;
