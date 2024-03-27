goog.module('java.io.InputStream');

goog.require('java.io.Closeable');
goog.require('java.io.IOException');
goog.require('java.io.IOUtils');
goog.require('java.lang.Math');
goog.require('java.lang.Object');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$byte');

const InputStream = goog.require('java.io.InputStream$impl');
exports = InputStream;
