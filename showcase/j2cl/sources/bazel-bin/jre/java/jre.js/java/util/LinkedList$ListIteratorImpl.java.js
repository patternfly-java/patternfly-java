goog.module('java.util.LinkedList.ListIteratorImpl');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.LinkedList');
goog.require('java.util.LinkedList.Node');
goog.require('java.util.ListIterator');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const ListIteratorImpl = goog.require('java.util.LinkedList.ListIteratorImpl$impl');
exports = ListIteratorImpl;
