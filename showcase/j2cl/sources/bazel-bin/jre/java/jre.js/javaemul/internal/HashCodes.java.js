goog.module('javaemul.internal.HashCodes');

goog.require('java.lang.Boolean');
goog.require('java.lang.Double');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const HashCodes = goog.require('javaemul.internal.HashCodes$impl');
exports = HashCodes;
