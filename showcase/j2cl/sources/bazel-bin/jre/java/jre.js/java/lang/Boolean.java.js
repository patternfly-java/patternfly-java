goog.module('java.lang.Boolean');

goog.require('java.io.Serializable');
goog.require('java.lang.Class');
goog.require('java.lang.Comparable');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Platform');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.primitives.$boolean');

const Boolean = goog.require('java.lang.Boolean$impl');
exports = Boolean;
