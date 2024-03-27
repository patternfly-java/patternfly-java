goog.module('java.util.Arrays.ArrayList');

goog.require('java.io.Serializable');
goog.require('java.util.AbstractList');
goog.require('java.util.Arrays');
goog.require('java.util.Comparator');
goog.require('java.util.RandomAccess');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.UnaryOperator');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const ArrayList = goog.require('java.util.Arrays.ArrayList$impl');
exports = ArrayList;
