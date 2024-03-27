goog.module('java.util.ArrayList');

goog.require('java.io.Serializable');
goog.require('java.lang.Cloneable');
goog.require('java.lang.Object');
goog.require('java.util.AbstractList');
goog.require('java.util.ArrayList.$1');
goog.require('java.util.Arrays');
goog.require('java.util.Collection');
goog.require('java.util.Comparator');
goog.require('java.util.Iterator');
goog.require('java.util.List');
goog.require('java.util.Objects');
goog.require('java.util.RandomAccess');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Predicate');
goog.require('java.util.function.UnaryOperator');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const ArrayList = goog.require('java.util.ArrayList$impl');
exports = ArrayList;
