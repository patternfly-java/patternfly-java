goog.module('java.util.logging.Logger');

goog.require('java.lang.AssertionError');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.Supplier');
goog.require('java.util.logging.Handler');
goog.require('java.util.logging.Level');
goog.require('java.util.logging.LogManager');
goog.require('java.util.logging.LogRecord');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const Logger = goog.require('java.util.logging.Logger$impl');
exports = Logger;
