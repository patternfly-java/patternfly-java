goog.module('java.sql.Timestamp');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Integer');
goog.require('java.lang.Long');
goog.require('java.lang.NumberFormatException');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.sql.Date');
goog.require('java.sql.Time');
goog.require('java.util.Date');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');

const Timestamp = goog.require('java.sql.Timestamp$impl');
exports = Timestamp;
