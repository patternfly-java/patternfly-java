goog.module('java.io.OutputStream');

goog.require('java.io.Closeable');
goog.require('java.io.Flushable');
goog.require('java.io.IOUtils');
goog.require('java.lang.Object');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const OutputStream = goog.require('java.io.OutputStream$impl');
exports = OutputStream;
