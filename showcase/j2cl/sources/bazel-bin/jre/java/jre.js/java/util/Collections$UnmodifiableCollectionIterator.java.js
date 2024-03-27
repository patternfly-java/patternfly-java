goog.module('java.util.Collections.UnmodifiableCollectionIterator');

goog.require('java.lang.Object');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Iterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const UnmodifiableCollectionIterator = goog.require('java.util.Collections.UnmodifiableCollectionIterator$impl');
exports = UnmodifiableCollectionIterator;
