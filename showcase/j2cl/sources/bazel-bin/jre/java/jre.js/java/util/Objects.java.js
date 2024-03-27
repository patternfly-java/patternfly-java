goog.module('java.util.Objects');

goog.require('java.lang.NullPointerException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.Arrays');
goog.require('java.util.Comparator');
goog.require('java.util.function.Supplier');
goog.require('javaemul.internal.Platform');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');
goog.require('vmbootstrap.primitives.$boolean');
goog.require('vmbootstrap.primitives.$byte');
goog.require('vmbootstrap.primitives.$char');
goog.require('vmbootstrap.primitives.$double');
goog.require('vmbootstrap.primitives.$float');
goog.require('vmbootstrap.primitives.$int');
goog.require('vmbootstrap.primitives.$long');
goog.require('vmbootstrap.primitives.$short');

const Objects = goog.require('java.util.Objects$impl');
exports = Objects;
