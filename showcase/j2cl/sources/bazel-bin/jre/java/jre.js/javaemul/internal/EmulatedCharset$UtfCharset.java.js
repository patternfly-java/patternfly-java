goog.module('javaemul.internal.EmulatedCharset.UtfCharset');

goog.require('java.lang.Character');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.String');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.EmulatedCharset');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$byte');
goog.require('vmbootstrap.primitives.$char');

const UtfCharset = goog.require('javaemul.internal.EmulatedCharset.UtfCharset$impl');
exports = UtfCharset;
