goog.module('java.security.MessageDigest');

goog.require('java.lang.String');
goog.require('java.security.MessageDigest.Md5Digest');
goog.require('java.security.MessageDigestSpi');
goog.require('java.security.NoSuchAlgorithmException');
goog.require('java.security.SHA256Digest');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const MessageDigest = goog.require('java.security.MessageDigest$impl');
exports = MessageDigest;
