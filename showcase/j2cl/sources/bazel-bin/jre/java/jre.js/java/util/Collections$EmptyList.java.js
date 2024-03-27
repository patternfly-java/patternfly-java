goog.module('java.util.Collections.EmptyList');

goog.require('java.io.Serializable');
goog.require('java.lang.Iterable');
goog.require('java.util.AbstractList');
goog.require('java.util.Collections');
goog.require('java.util.Iterator');
goog.require('java.util.ListIterator');
goog.require('java.util.RandomAccess');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const EmptyList = goog.require('java.util.Collections.EmptyList$impl');
exports = EmptyList;
