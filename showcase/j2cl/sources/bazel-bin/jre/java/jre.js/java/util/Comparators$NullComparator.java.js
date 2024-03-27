goog.module('java.util.Comparators.NullComparator');

goog.require('java.io.Serializable');
goog.require('java.lang.Comparable');
goog.require('java.lang.Object');
goog.require('java.util.Comparator');
goog.require('java.util.function.Function');
goog.require('java.util.function.ToDoubleFunction');
goog.require('java.util.function.ToIntFunction');
goog.require('java.util.function.ToLongFunction');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const NullComparator = goog.require('java.util.Comparators.NullComparator$impl');
exports = NullComparator;
