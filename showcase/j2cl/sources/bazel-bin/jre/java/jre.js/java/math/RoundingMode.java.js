goog.module('java.math.RoundingMode');

goog.require('java.lang.Enum');
goog.require('java.lang.IllegalArgumentException');
goog.require('javaemul.internal.Enums.NativeMap.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Enums');
goog.require('vmbootstrap.Exceptions');

const RoundingMode = goog.require('java.math.RoundingMode$impl');
exports = RoundingMode;
