goog.module('java.security.MessageDigest.Md5Digest');

goog.require('java.lang.System');
goog.require('java.security.MessageDigest');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$byte');
goog.require('vmbootstrap.primitives.$int');

const Md5Digest = goog.require('java.security.MessageDigest.Md5Digest$impl');
exports = Md5Digest;
