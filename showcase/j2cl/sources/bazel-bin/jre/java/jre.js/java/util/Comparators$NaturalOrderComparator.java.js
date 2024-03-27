goog.module('java.util.Comparators.NaturalOrderComparator');

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

const NaturalOrderComparator = goog.require('java.util.Comparators.NaturalOrderComparator$impl');
exports = NaturalOrderComparator;
