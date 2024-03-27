goog.module('vmbootstrap.LongUtils');

goog.require('java.lang.Object');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.JsUtils');
goog.require('javaemul.internal.LongUtils.NativeLong.$Overlay');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');

const $LongUtils = goog.require('vmbootstrap.LongUtils$impl');
exports = $LongUtils;
