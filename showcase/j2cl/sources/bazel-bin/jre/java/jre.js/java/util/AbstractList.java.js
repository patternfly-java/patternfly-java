goog.module('java.util.AbstractList');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.AbstractCollection');
goog.require('java.util.AbstractList.IteratorImpl');
goog.require('java.util.AbstractList.ListIteratorImpl');
goog.require('java.util.AbstractList.SubList');
goog.require('java.util.Collection');
goog.require('java.util.Collections');
goog.require('java.util.Comparator');
goog.require('java.util.Iterator');
goog.require('java.util.List');
goog.require('java.util.ListIterator');
goog.require('java.util.Objects');
goog.require('java.util.Spliterator');
goog.require('java.util.function.UnaryOperator');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const AbstractList = goog.require('java.util.AbstractList$impl');
exports = AbstractList;
