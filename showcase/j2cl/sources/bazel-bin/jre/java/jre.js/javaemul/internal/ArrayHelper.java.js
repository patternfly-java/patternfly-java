goog.module('javaemul.internal.ArrayHelper');

goog.require('java.lang.Double');
goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('java.util.Comparator');
goog.require('javaemul.internal.ArrayHelper.NativeArray.$Overlay');
goog.require('javaemul.internal.ArrayStamper');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.JsUtils');
goog.require('javaemul.internal.MergeSorter');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ArrayHelper = goog.require('javaemul.internal.ArrayHelper$impl');
exports = ArrayHelper;
