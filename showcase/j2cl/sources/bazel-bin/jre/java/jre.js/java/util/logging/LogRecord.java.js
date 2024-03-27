goog.module('java.util.logging.LogRecord');

goog.require('java.io.Serializable');
goog.require('java.lang.Object');
goog.require('java.lang.System');
goog.require('java.lang.Throwable');
goog.require('java.util.logging.Level');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');

const LogRecord = goog.require('java.util.logging.LogRecord$impl');
exports = LogRecord;
