goog.module('java.util.Comparator');

goog.require('java.lang.Comparable');
goog.require('java.lang.Double');
goog.require('java.lang.Integer');
goog.require('java.lang.Long');
goog.require('java.util.Comparator.$LambdaAdaptor$1');
goog.require('java.util.Comparator.$LambdaAdaptor$2');
goog.require('java.util.Comparator.$LambdaAdaptor$3');
goog.require('java.util.Comparator.$LambdaAdaptor$4');
goog.require('java.util.Comparator.$LambdaAdaptor$5');
goog.require('java.util.Comparator.$LambdaAdaptor');
goog.require('java.util.Comparators');
goog.require('java.util.Comparators.NullComparator');
goog.require('java.util.Comparators.ReversedComparator');
goog.require('java.util.function.Function');
goog.require('java.util.function.ToDoubleFunction');
goog.require('java.util.function.ToIntFunction');
goog.require('java.util.function.ToLongFunction');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const Comparator = goog.require('java.util.Comparator$impl');
exports = Comparator;
