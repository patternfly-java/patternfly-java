goog.module('java.util.Collections.UnmodifiableListIterator');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Collections.UnmodifiableCollectionIterator');
goog.require('java.util.Iterator');
goog.require('java.util.ListIterator');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const UnmodifiableListIterator = goog.require('java.util.Collections.UnmodifiableListIterator$impl');
exports = UnmodifiableListIterator;
