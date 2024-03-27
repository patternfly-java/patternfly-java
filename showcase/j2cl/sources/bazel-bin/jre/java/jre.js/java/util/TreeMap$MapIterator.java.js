goog.module('java.util.TreeMap.MapIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.TreeMap');
goog.require('java.util.TreeMap.Node');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const MapIterator = goog.require('java.util.TreeMap.MapIterator$impl');
exports = MapIterator;
