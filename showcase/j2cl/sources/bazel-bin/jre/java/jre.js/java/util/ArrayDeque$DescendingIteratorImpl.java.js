goog.module('java.util.ArrayDeque.DescendingIteratorImpl');

goog.require('java.lang.Object');
goog.require('java.util.ArrayDeque');
goog.require('java.util.Iterator');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const DescendingIteratorImpl = goog.require('java.util.ArrayDeque.DescendingIteratorImpl$impl');
exports = DescendingIteratorImpl;
