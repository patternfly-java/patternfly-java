goog.module('java.util.ArrayDeque.IteratorImpl');

goog.require('java.lang.Object');
goog.require('java.util.ArrayDeque');
goog.require('java.util.Iterator');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const IteratorImpl = goog.require('java.util.ArrayDeque.IteratorImpl$impl');
exports = IteratorImpl;
