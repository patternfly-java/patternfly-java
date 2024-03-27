goog.module('java.util.Comparators.ReverseNaturalOrderComparator');

goog.require('java.io.Serializable');
goog.require('java.lang.Comparable');
goog.require('java.lang.Object');
goog.require('java.util.Comparator');
goog.require('java.util.Comparators');
goog.require('java.util.function.Function');
goog.require('java.util.function.ToDoubleFunction');
goog.require('java.util.function.ToIntFunction');
goog.require('java.util.function.ToLongFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Comparables');

const ReverseNaturalOrderComparator = goog.require('java.util.Comparators.ReverseNaturalOrderComparator$impl');
exports = ReverseNaturalOrderComparator;
