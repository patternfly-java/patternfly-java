goog.module('java.util.stream.StreamImpl.FilterSpliterator');

goog.require('java.util.Comparator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators.AbstractSpliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Predicate');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const FilterSpliterator = goog.require('java.util.stream.StreamImpl.FilterSpliterator$impl');
exports = FilterSpliterator;
