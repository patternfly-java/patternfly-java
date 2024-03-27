goog.module('java.util.logging.Handler');

goog.require('java.lang.Object');
goog.require('java.util.logging.Formatter');
goog.require('java.util.logging.Level');
goog.require('java.util.logging.LogRecord');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const Handler = goog.require('java.util.logging.Handler$impl');
exports = Handler;
