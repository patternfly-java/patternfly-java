goog.module('vmbootstrap.Casts');

goog.require('java.lang.Class');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.Constructor');
goog.require('javaemul.internal.Constructor.$Overlay');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Objects');

const $Casts = goog.require('vmbootstrap.Casts$impl');
exports = $Casts;
