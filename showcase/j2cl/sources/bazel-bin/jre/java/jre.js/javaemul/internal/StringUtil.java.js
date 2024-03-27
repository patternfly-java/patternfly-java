goog.module('javaemul.internal.StringUtil');

goog.require('java.lang.CharSequence');
goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.NativeRegExp.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.CharSequences');

const StringUtil = goog.require('javaemul.internal.StringUtil$impl');
exports = StringUtil;
