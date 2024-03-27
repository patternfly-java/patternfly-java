goog.module('java.io.OutputStreamWriter');

goog.require('java.io.IOUtils');
goog.require('java.io.OutputStream');
goog.require('java.io.Writer');
goog.require('java.nio.charset.Charset');
goog.require('javaemul.internal.EmulatedCharset');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OutputStreamWriter = goog.require('java.io.OutputStreamWriter$impl');
exports = OutputStreamWriter;
