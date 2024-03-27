goog.module('java.io.FilterOutputStream');

goog.require('java.io.IOException');
goog.require('java.io.IOUtils');
goog.require('java.io.OutputStream');
goog.require('java.lang.Throwable');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const FilterOutputStream = goog.require('java.io.FilterOutputStream$impl');
exports = FilterOutputStream;
