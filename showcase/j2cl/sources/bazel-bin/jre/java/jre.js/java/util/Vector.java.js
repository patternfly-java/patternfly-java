goog.module('java.util.Vector');

goog.require('java.io.Serializable');
goog.require('java.lang.ArrayIndexOutOfBoundsException');
goog.require('java.lang.Cloneable');
goog.require('java.lang.String');
goog.require('java.util.AbstractList');
goog.require('java.util.ArrayList');
goog.require('java.util.Collection');
goog.require('java.util.Collections');
goog.require('java.util.Comparator');
goog.require('java.util.Enumeration');
goog.require('java.util.Iterator');
goog.require('java.util.List');
goog.require('java.util.RandomAccess');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Predicate');
goog.require('java.util.function.UnaryOperator');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');

const Vector = goog.require('java.util.Vector$impl');
exports = Vector;
