goog.module('java.lang.Double');

goog.require('java.lang.Class');
goog.require('java.lang.Comparable');
goog.require('java.lang.Number');
goog.require('java.lang.RealToString');
goog.require('java.lang.String');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Platform');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$double');

const Double = goog.require('java.lang.Double$impl');
exports = Double;
