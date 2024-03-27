goog.module('java.util.EnumMap');

goog.require('java.lang.Class');
goog.require('java.lang.Cloneable');
goog.require('java.lang.Enum');
goog.require('java.util.AbstractMap');
goog.require('java.util.EnumMap.EntrySet');
goog.require('java.util.EnumSet');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.Objects');
goog.require('java.util.Set');
goog.require('javaemul.internal.ArrayHelper');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const EnumMap = goog.require('java.util.EnumMap$impl');
exports = EnumMap;
