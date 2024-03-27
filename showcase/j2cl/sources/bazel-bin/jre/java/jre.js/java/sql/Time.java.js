goog.module('java.sql.Time');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Integer');
goog.require('java.lang.NumberFormatException');
goog.require('java.lang.String');
goog.require('java.util.Date');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const Time = goog.require('java.sql.Time$impl');
exports = Time;
