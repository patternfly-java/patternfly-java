goog.module('javaemul.internal.ConsoleLogger');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('javaemul.internal.ConsoleLogger.LogFn.$Overlay');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const ConsoleLogger = goog.require('javaemul.internal.ConsoleLogger$impl');
exports = ConsoleLogger;
