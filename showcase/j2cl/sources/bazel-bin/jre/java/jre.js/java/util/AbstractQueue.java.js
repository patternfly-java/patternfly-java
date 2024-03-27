goog.module('java.util.AbstractQueue');

goog.require('java.util.AbstractCollection');
goog.require('java.util.Collection');
goog.require('java.util.Iterator');
goog.require('java.util.Queue');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const AbstractQueue = goog.require('java.util.AbstractQueue$impl');
exports = AbstractQueue;
