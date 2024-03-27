goog.module('java.io.ByteArrayOutputStream');

goog.require('java.io.IOUtils');
goog.require('java.io.OutputStream');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('java.lang.System');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$byte');
goog.require('vmbootstrap.primitives.$char');

const ByteArrayOutputStream = goog.require('java.io.ByteArrayOutputStream$impl');
exports = ByteArrayOutputStream;
