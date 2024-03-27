goog.module('java.util.LinkedList');

goog.require('java.io.Serializable');
goog.require('java.lang.Cloneable');
goog.require('java.util.AbstractSequentialList');
goog.require('java.util.Collection');
goog.require('java.util.Deque');
goog.require('java.util.Iterator');
goog.require('java.util.LinkedList.DescendingIteratorImpl');
goog.require('java.util.LinkedList.ListIteratorImpl');
goog.require('java.util.LinkedList.Node');
goog.require('java.util.List');
goog.require('java.util.ListIterator');
goog.require('java.util.Objects');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const LinkedList = goog.require('java.util.LinkedList$impl');
exports = LinkedList;
