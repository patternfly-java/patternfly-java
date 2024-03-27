goog.module('java.util.stream.DoubleStreamImpl.FilterSpliterator');

goog.require('java.util.Comparator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterators.AbstractDoubleSpliterator');
goog.require('java.util.function.DoubleConsumer');
goog.require('java.util.function.DoublePredicate');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const FilterSpliterator = goog.require('java.util.stream.DoubleStreamImpl.FilterSpliterator$impl');
exports = FilterSpliterator;
