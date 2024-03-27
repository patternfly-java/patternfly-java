goog.module('java.lang.StringBuilder');

goog.require('java.lang.AbstractStringBuilder');
goog.require('java.lang.CharSequence');
goog.require('java.lang.String');
goog.require('java.lang.StringBuffer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.CharSequences');

const StringBuilder = goog.require('java.lang.StringBuilder$impl');
exports = StringBuilder;
