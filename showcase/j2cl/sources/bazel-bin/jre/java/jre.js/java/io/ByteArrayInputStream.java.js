goog.module('java.io.ByteArrayInputStream');

goog.require('java.io.IOUtils');
goog.require('java.io.InputStream');
goog.require('java.lang.System');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');

const ByteArrayInputStream = goog.require('java.io.ByteArrayInputStream$impl');
exports = ByteArrayInputStream;
