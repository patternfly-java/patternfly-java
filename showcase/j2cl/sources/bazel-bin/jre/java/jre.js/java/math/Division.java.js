goog.module('java.math.Division');

goog.require('java.lang.ArithmeticException');
goog.require('java.lang.Integer');
goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('java.lang.System');
goog.require('java.math.BigInteger');
goog.require('java.math.BitLevel');
goog.require('java.math.Elementary');
goog.require('java.math.Multiplication');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$int');

const Division = goog.require('java.math.Division$impl');
exports = Division;
