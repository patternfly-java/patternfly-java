goog.module('java.nio.charset.Charset');

goog.require('java.lang.Comparable');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.nio.charset.Charset.AvailableCharsets');
goog.require('java.nio.charset.UnsupportedCharsetException');
goog.require('java.util.SortedMap');
goog.require('javaemul.internal.EmulatedCharset');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const Charset = goog.require('java.nio.charset.Charset$impl');
exports = Charset;
