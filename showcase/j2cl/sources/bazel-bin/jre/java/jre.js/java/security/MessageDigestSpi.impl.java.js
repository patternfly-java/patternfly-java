goog.module('java.security.MessageDigestSpi$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let System = goog.forwardDeclare('java.lang.System$impl');
let DigestException = goog.forwardDeclare('java.security.DigestException$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 */
class MessageDigestSpi extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_security_MessageDigestSpi__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @abstract @nodts @return {Array<number>} */
 m_engineDigest__arrayOf_byte() {}
 /** @nodts @return {number} */
 m_engineDigest__arrayOf_byte__int__int__int(/** Array<number> */ buf, /** number */ offset, /** number */ len) {
  let digest = this.m_engineDigest__arrayOf_byte();
  if (buf.length < (digest.length + offset | 0)) {
   throw $Exceptions.toJs(DigestException.$create__java_lang_String('Insufficient buffer space for digest'));
  }
  if (len < digest.length) {
   throw $Exceptions.toJs(DigestException.$create__java_lang_String('Length not large enough to hold digest'));
  }
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(digest, 0, buf, offset, digest.length);
  return digest.length;
 }
 /** @nodts @return {number} */
 m_engineGetDigestLength__int() {
  return 0;
 }
 /** @abstract @nodts */
 m_engineReset__void() {}
 /** @abstract @nodts */
 m_engineUpdate__byte__void(/** number */ input) {}
 /** @abstract @nodts */
 m_engineUpdate__arrayOf_byte__int__int__void(/** Array<number> */ input, /** number */ offset, /** number */ len) {}
 /** @nodts */
 static $clinit() {
  MessageDigestSpi.$clinit = () =>{};
  MessageDigestSpi.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MessageDigestSpi;
 }
 
 /** @nodts */
 static $loadModules() {
  System = goog.module.get('java.lang.System$impl');
  DigestException = goog.module.get('java.security.DigestException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(MessageDigestSpi, 'java.security.MessageDigestSpi');

exports = MessageDigestSpi;

//# sourceMappingURL=MessageDigestSpi.js.map
