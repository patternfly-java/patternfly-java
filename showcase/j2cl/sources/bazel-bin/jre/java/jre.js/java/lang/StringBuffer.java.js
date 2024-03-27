goog.module('java.lang.StringBuffer');

goog.require('java.lang.AbstractStringBuilder');
goog.require('java.lang.CharSequence');
goog.require('java.lang.String');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.CharSequences');

const StringBuffer = goog.require('java.lang.StringBuffer$impl');
exports = StringBuffer;
