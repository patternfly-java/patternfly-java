goog.module('java.security.MessageDigestSpi');

goog.require('java.lang.Object');
goog.require('java.lang.System');
goog.require('java.security.DigestException');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const MessageDigestSpi = goog.require('java.security.MessageDigestSpi$impl');
exports = MessageDigestSpi;
