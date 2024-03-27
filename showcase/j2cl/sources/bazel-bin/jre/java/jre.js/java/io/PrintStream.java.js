goog.module('java.io.PrintStream');

goog.require('java.io.FilterOutputStream');
goog.require('java.io.IOException');
goog.require('java.io.IOUtils');
goog.require('java.io.OutputStream');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const PrintStream = goog.require('java.io.PrintStream$impl');
exports = PrintStream;
