goog.module('java.lang.AssertionError');

goog.require('java.lang.Error');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const AssertionError = goog.require('java.lang.AssertionError$impl');
exports = AssertionError;
