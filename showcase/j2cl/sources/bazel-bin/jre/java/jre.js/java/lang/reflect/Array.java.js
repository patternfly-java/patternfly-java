goog.module('java.lang.reflect.Array');

goog.require('java.lang.Boolean');
goog.require('java.lang.Byte');
goog.require('java.lang.Character');
goog.require('java.lang.Double');
goog.require('java.lang.Float');
goog.require('java.lang.Integer');
goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('java.lang.Short');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$boolean');
goog.require('vmbootstrap.primitives.$byte');
goog.require('vmbootstrap.primitives.$char');
goog.require('vmbootstrap.primitives.$double');
goog.require('vmbootstrap.primitives.$float');
goog.require('vmbootstrap.primitives.$int');
goog.require('vmbootstrap.primitives.$long');
goog.require('vmbootstrap.primitives.$short');

const j_l_reflect_Array = goog.require('java.lang.reflect.Array$impl');
exports = j_l_reflect_Array;
