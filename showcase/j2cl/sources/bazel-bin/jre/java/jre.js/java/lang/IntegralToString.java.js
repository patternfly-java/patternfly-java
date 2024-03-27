goog.module('java.lang.IntegralToString');

goog.require('java.lang.Character');
goog.require('java.lang.IntegralToString.NativeNumber.$Overlay');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$char');

const IntegralToString = goog.require('java.lang.IntegralToString$impl');
exports = IntegralToString;
