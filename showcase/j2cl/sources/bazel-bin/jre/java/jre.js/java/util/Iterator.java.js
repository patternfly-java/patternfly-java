goog.module('java.util.Iterator');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const Iterator = goog.require('java.util.Iterator$impl');
exports = Iterator;
