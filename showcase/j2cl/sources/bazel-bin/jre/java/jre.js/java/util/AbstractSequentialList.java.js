goog.module('java.util.AbstractSequentialList');

goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.util.AbstractList');
goog.require('java.util.Collection');
goog.require('java.util.Iterator');
goog.require('java.util.NoSuchElementException');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const AbstractSequentialList = goog.require('java.util.AbstractSequentialList$impl');
exports = AbstractSequentialList;
