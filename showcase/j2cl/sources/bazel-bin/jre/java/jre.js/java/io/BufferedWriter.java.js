goog.module('java.io.BufferedWriter');

goog.require('java.io.IOUtils');
goog.require('java.io.Writer');
goog.require('java.lang.String');
goog.require('java.lang.System');
goog.require('java.lang.Throwable');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$char');

const BufferedWriter = goog.require('java.io.BufferedWriter$impl');
exports = BufferedWriter;
