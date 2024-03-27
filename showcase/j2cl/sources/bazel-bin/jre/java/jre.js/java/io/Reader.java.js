goog.module('java.io.Reader');

goog.require('java.io.IOException');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$char');

const Reader = goog.require('java.io.Reader$impl');
exports = Reader;
