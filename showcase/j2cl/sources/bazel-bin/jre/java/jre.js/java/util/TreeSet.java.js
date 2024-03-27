goog.module('java.util.TreeSet');

goog.require('java.io.Serializable');
goog.require('java.lang.Boolean');
goog.require('java.util.AbstractMap');
goog.require('java.util.AbstractSet');
goog.require('java.util.Collection');
goog.require('java.util.Comparator');
goog.require('java.util.Iterator');
goog.require('java.util.NavigableMap');
goog.require('java.util.NavigableSet');
goog.require('java.util.SortedSet');
goog.require('java.util.Spliterator');
goog.require('java.util.TreeMap');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const TreeSet = goog.require('java.util.TreeSet$impl');
exports = TreeSet;
