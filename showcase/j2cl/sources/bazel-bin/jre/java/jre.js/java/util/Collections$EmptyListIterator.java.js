goog.module('java.util.Collections.EmptyListIterator');

goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Object');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Iterator');
goog.require('java.util.ListIterator');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const EmptyListIterator = goog.require('java.util.Collections.EmptyListIterator$impl');
exports = EmptyListIterator;
