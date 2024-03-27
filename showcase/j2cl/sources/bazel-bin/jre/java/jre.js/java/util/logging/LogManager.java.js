goog.module('java.util.logging.LogManager');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.Collections');
goog.require('java.util.Enumeration');
goog.require('java.util.HashMap');
goog.require('java.util.logging.Level');
goog.require('java.util.logging.Logger');
goog.require('java.util.logging.SimpleConsoleLogHandler');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const LogManager = goog.require('java.util.logging.LogManager$impl');
exports = LogManager;
