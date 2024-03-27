goog.module('java.security.MessageDigest$impl');

const MessageDigestSpi = goog.require('java.security.MessageDigestSpi$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Md5Digest = goog.forwardDeclare('java.security.MessageDigest.Md5Digest$impl');
let NoSuchAlgorithmException = goog.forwardDeclare('java.security.NoSuchAlgorithmException$impl');
let SHA256Digest = goog.forwardDeclare('java.security.SHA256Digest$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 */
class MessageDigest extends MessageDigestSpi {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_algorithm__java_security_MessageDigest_;
 }
 /** @nodts @return {MessageDigest} */
 static m_getInstance__java_lang_String__java_security_MessageDigest(/** ?string */ algorithm) {
  MessageDigest.$clinit();
  switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(algorithm)) {
   case 'MD5': 
    return Md5Digest.$create__();
   case 'SHA-256': 
    return SHA256Digest.$create__();
   default: 
    throw $Exceptions.toJs(NoSuchAlgorithmException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(algorithm) + ' not supported'));
  }
 }
 /** @nodts @return {boolean} */
 static m_isEqual__arrayOf_byte__arrayOf_byte__boolean(/** Array<number> */ digestA, /** Array<number> */ digestB) {
  MessageDigest.$clinit();
  let n = digestA.length;
  if (n != digestB.length) {
   return false;
  }
  for (let i = 0; i < n; i = i + 1 | 0) {
   if (digestA[i] != digestB[i]) {
    return false;
   }
  }
  return true;
 }
 /** @nodts */
 $ctor__java_security_MessageDigest__java_lang_String__void(/** ?string */ algorithm) {
  this.$ctor__java_security_MessageDigestSpi__void();
  this.f_algorithm__java_security_MessageDigest_ = algorithm;
 }
 /** @nodts @return {Array<number>} */
 m_digest__arrayOf_byte() {
  return this.m_engineDigest__arrayOf_byte();
 }
 /** @nodts @return {Array<number>} */
 m_digest__arrayOf_byte__arrayOf_byte(/** Array<number> */ input) {
  this.m_update__arrayOf_byte__void(input);
  return this.m_digest__arrayOf_byte();
 }
 /** @nodts @return {number} */
 m_digest__arrayOf_byte__int__int__int(/** Array<number> */ buf, /** number */ offset, /** number */ len) {
  return this.m_engineDigest__arrayOf_byte__int__int__int(buf, offset, len);
 }
 /** @final @nodts @return {?string} */
 m_getAlgorithm__java_lang_String() {
  return this.f_algorithm__java_security_MessageDigest_;
 }
 /** @final @nodts @return {number} */
 m_getDigestLength__int() {
  return this.m_engineGetDigestLength__int();
 }
 /** @nodts */
 m_reset__void() {
  this.m_engineReset__void();
 }
 /** @nodts */
 m_update__byte__void(/** number */ input) {
  this.m_engineUpdate__byte__void(input);
 }
 /** @nodts */
 m_update__arrayOf_byte__void(/** Array<number> */ input) {
  this.m_engineUpdate__arrayOf_byte__int__int__void(input, 0, input.length);
 }
 /** @nodts */
 m_update__arrayOf_byte__int__int__void(/** Array<number> */ input, /** number */ offset, /** number */ len) {
  this.m_engineUpdate__arrayOf_byte__int__int__void(input, offset, len);
 }
 /** @nodts */
 static $clinit() {
  MessageDigest.$clinit = () =>{};
  MessageDigest.$loadModules();
  MessageDigestSpi.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MessageDigest;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Md5Digest = goog.module.get('java.security.MessageDigest.Md5Digest$impl');
  NoSuchAlgorithmException = goog.module.get('java.security.NoSuchAlgorithmException$impl');
  SHA256Digest = goog.module.get('java.security.SHA256Digest$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(MessageDigest, 'java.security.MessageDigest');

exports = MessageDigest;

//# sourceMappingURL=MessageDigest.js.map
