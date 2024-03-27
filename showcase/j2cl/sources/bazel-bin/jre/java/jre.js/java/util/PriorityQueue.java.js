goog.module('java.util.PriorityQueue');

goog.require('java.util.AbstractQueue');
goog.require('java.util.ArrayList');
goog.require('java.util.Collection');
goog.require('java.util.Comparator');
goog.require('java.util.Comparators');
goog.require('java.util.Iterator');
goog.require('java.util.PriorityQueue.$1');
goog.require('java.util.SortedSet');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Primitives');

const PriorityQueue = goog.require('java.util.PriorityQueue$impl');
exports = PriorityQueue;
