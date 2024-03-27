goog.module('javaemul.internal.EmulatedCharset');

goog.require('java.nio.charset.Charset');
goog.require('javaemul.internal.EmulatedCharset.LatinCharset');
goog.require('javaemul.internal.EmulatedCharset.UtfCharset');
goog.require('nativebootstrap.Util');

const EmulatedCharset = goog.require('javaemul.internal.EmulatedCharset$impl');
exports = EmulatedCharset;
