goog.module('java.util.ArrayDeque');

goog.require('java.lang.Cloneable');
goog.require('java.lang.Integer');
goog.require('java.util.AbstractCollection');
goog.require('java.util.ArrayDeque.DescendingIteratorImpl');
goog.require('java.util.ArrayDeque.IteratorImpl');
goog.require('java.util.Collection');
goog.require('java.util.ConcurrentModificationException');
goog.require('java.util.Deque');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const ArrayDeque = goog.require('java.util.ArrayDeque$impl');
exports = ArrayDeque;
