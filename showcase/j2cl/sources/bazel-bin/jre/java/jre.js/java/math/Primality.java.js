goog.module('java.math.Primality');

goog.require('java.lang.Object');
goog.require('java.lang.System');
goog.require('java.math.BigInteger');
goog.require('java.math.Division');
goog.require('java.math.Elementary');
goog.require('java.util.Arrays');
goog.require('java.util.Random');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$boolean');
goog.require('vmbootstrap.primitives.$int');

const Primality = goog.require('java.math.Primality$impl');
exports = Primality;
