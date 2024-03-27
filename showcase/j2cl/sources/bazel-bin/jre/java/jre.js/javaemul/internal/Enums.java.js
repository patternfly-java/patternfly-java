goog.module('vmbootstrap.Enums');

goog.require('goog.reflect');
goog.require('java.lang.Enum');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.Constructor');
goog.require('javaemul.internal.Constructor.$Overlay');
goog.require('javaemul.internal.Enums.NativeMap.$Overlay');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Enums.BoxedComparableLightEnum');
goog.require('vmbootstrap.Enums.BoxedLightEnum');
goog.require('vmbootstrap.Exceptions');

const $Enums = goog.require('vmbootstrap.Enums$impl');
exports = $Enums;
