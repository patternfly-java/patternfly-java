goog.module('java.math.MathContext');

goog.require('java.io.Serializable');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.lang.RuntimeException');
goog.require('java.lang.String');
goog.require('java.math.RoundingMode');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.NativeRegExp.Match.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const MathContext = goog.require('java.math.MathContext$impl');
exports = MathContext;
