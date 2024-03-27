goog.module('vmbootstrap.Objects');

goog.require('java.lang.Boolean');
goog.require('java.lang.Class');
goog.require('java.lang.Double');
goog.require('java.lang.Object$impl');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.HashCodes');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Objects.JavaLangObject.$Overlay');
goog.require('javaemul.internal.Objects.JavaScriptObject.$Overlay');
goog.require('javaemul.internal.Objects.ObjectLike.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.JavaScriptFunction');
goog.require('vmbootstrap.JavaScriptObject');

const $Objects = goog.require('vmbootstrap.Objects$impl');
exports = $Objects;
