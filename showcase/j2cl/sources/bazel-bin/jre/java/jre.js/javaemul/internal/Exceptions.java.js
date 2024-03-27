goog.module('vmbootstrap.Exceptions');

goog.require('java.lang.AutoCloseable');
goog.require('java.lang.Object');
goog.require('java.lang.Throwable');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const $Exceptions = goog.require('vmbootstrap.Exceptions$impl');
exports = $Exceptions;
