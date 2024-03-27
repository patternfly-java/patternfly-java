goog.module('java.util.logging.SimpleConsoleLogHandler');

goog.require('java.util.logging.Handler');
goog.require('java.util.logging.Level');
goog.require('java.util.logging.LogRecord');
goog.require('javaemul.internal.ConsoleLogger');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const SimpleConsoleLogHandler = goog.require('java.util.logging.SimpleConsoleLogHandler$impl');
exports = SimpleConsoleLogHandler;
