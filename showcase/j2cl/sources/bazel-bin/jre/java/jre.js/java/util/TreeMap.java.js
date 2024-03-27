goog.module('java.util.TreeMap');

goog.require('java.io.Serializable');
goog.require('java.util.AbstractMap');
goog.require('java.util.AbstractMap.SimpleImmutableEntry');
goog.require('java.util.Comparator');
goog.require('java.util.Comparators');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.NavigableMap');
goog.require('java.util.NavigableSet');
goog.require('java.util.Objects');
goog.require('java.util.Set');
goog.require('java.util.SortedMap');
goog.require('java.util.TreeMap.Bound');
goog.require('java.util.TreeMap.BoundedMap');
goog.require('java.util.TreeMap.EntrySet');
goog.require('java.util.TreeMap.KeySet');
goog.require('java.util.TreeMap.Node');
goog.require('java.util.TreeMap.Relation');
goog.require('java.util.TreeMap.Relation.$Overlay');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Enums.BoxedComparableLightEnum');

const TreeMap = goog.require('java.util.TreeMap$impl');
exports = TreeMap;
