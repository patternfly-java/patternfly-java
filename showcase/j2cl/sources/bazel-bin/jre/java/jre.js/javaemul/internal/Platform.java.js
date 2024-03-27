goog.module('javaemul.internal.Platform');

goog.require('java.lang.Double');
goog.require('java.lang.Float');
goog.require('java.lang.Object');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');

const Platform = goog.require('javaemul.internal.Platform$impl');
exports = Platform;
