goog.module('java.nio.charset.Charset.AvailableCharsets');

goog.require('java.lang.Object');
goog.require('java.nio.charset.Charset');
goog.require('java.util.Collections');
goog.require('java.util.SortedMap');
goog.require('java.util.TreeMap');
goog.require('javaemul.internal.EmulatedCharset');
goog.require('nativebootstrap.Util');

const AvailableCharsets = goog.require('java.nio.charset.Charset.AvailableCharsets$impl');
exports = AvailableCharsets;
