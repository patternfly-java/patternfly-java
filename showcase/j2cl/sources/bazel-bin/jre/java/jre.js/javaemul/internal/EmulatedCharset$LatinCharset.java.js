goog.module('javaemul.internal.EmulatedCharset.LatinCharset');

goog.require('java.lang.String');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.EmulatedCharset');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$byte');
goog.require('vmbootstrap.primitives.$char');

const LatinCharset = goog.require('javaemul.internal.EmulatedCharset.LatinCharset$impl');
exports = LatinCharset;
