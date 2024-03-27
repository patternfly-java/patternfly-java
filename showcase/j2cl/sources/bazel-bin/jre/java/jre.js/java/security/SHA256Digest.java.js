goog.module('java.security.SHA256Digest');

goog.require('java.lang.System');
goog.require('java.security.MessageDigest');
goog.require('java.util.Arrays');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$byte');
goog.require('vmbootstrap.primitives.$int');

const SHA256Digest = goog.require('java.security.SHA256Digest$impl');
exports = SHA256Digest;
