goog.module('java.security.SHA256Digest$impl');

const MessageDigest = goog.require('java.security.MessageDigest$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let System = goog.forwardDeclare('java.lang.System$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class SHA256Digest extends MessageDigest {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_hash__java_security_SHA256Digest_;
  /**@type {Array<number>} @nodts*/
  this.f_wordBuffer__java_security_SHA256Digest_;
  /**@type {number} @nodts*/
  this.f_wordOff__java_security_SHA256Digest_ = 0;
  /**@type {Array<number>} @nodts*/
  this.f_blockBuffer__java_security_SHA256Digest_;
  /**@type {number} @nodts*/
  this.f_blockOff__java_security_SHA256Digest_ = 0;
  /**@type {!$Long} @nodts*/
  this.f_byteCounter__java_security_SHA256Digest_ = $Long.fromInt(0);
 }
 /** @nodts @return {!SHA256Digest} */
 static $create__() {
  SHA256Digest.$clinit();
  let $instance = new SHA256Digest();
  $instance.$ctor__java_security_SHA256Digest__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_security_SHA256Digest__void() {
  this.$ctor__java_security_MessageDigest__java_lang_String__void('SHA-256');
  this.f_hash__java_security_SHA256Digest_ = /**@type {!Array<number>}*/ ($Arrays.$create([8], $$int));
  this.f_wordBuffer__java_security_SHA256Digest_ = /**@type {!Array<number>}*/ ($Arrays.$create([4], $$byte));
  this.f_blockBuffer__java_security_SHA256Digest_ = /**@type {!Array<number>}*/ ($Arrays.$create([64], $$int));
  this.m_engineReset__void();
 }
 /** @override @nodts */
 m_engineReset__void() {
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(SHA256Digest.f_H__java_security_SHA256Digest_, 0, this.f_hash__java_security_SHA256Digest_, 0, 8);
  Arrays.m_fill__arrayOf_byte__byte__void(this.f_wordBuffer__java_security_SHA256Digest_, 0);
  Arrays.m_fill__arrayOf_int__int__void(this.f_blockBuffer__java_security_SHA256Digest_, 0);
  this.f_wordOff__java_security_SHA256Digest_ = 0;
  this.f_blockOff__java_security_SHA256Digest_ = 0;
  this.f_byteCounter__java_security_SHA256Digest_ = $Long.fromInt(0);
 }
 /** @override @nodts */
 m_engineUpdate__byte__void(/** number */ input) {
  $Arrays.$set(this.f_wordBuffer__java_security_SHA256Digest_, this.f_wordOff__java_security_SHA256Digest_, input);
  this.f_wordOff__java_security_SHA256Digest_ = this.f_wordOff__java_security_SHA256Digest_ + 1 | 0;
  this.f_byteCounter__java_security_SHA256Digest_ = $LongUtils.plus(this.f_byteCounter__java_security_SHA256Digest_, $Long.fromInt(1));
  if (this.f_wordOff__java_security_SHA256Digest_ == 4) {
   this.m_updateWord__void_$p_java_security_SHA256Digest();
   this.f_wordOff__java_security_SHA256Digest_ = 0;
  }
 }
 /** @override @nodts */
 m_engineUpdate__arrayOf_byte__int__int__void(/** Array<number> */ input, /** number */ inOff, /** number */ len) {
  for (let i = 0; i < len; i = i + 1 | 0) {
   this.m_engineUpdate__byte__void(input[inOff + i | 0]);
  }
 }
 /** @override @nodts @return {Array<number>} */
 m_engineDigest__arrayOf_byte() {
  this.m_doPadding__void_$p_java_security_SHA256Digest();
  let result = /**@type {!Array<number>}*/ ($Arrays.$create([32], $$byte));
  for (let i = 0; i < 8; i = i + 1 | 0) {
   this.m_int2bytes__int__arrayOf_byte__int__void_$p_java_security_SHA256Digest(this.f_hash__java_security_SHA256Digest_[i], result, Math.imul(i, 4));
  }
  this.m_engineReset__void();
  return result;
 }
 /** @nodts */
 m_int2bytes__int__arrayOf_byte__int__void_$p_java_security_SHA256Digest(/** number */ input, /** Array<number> */ output, /** number */ outOff) {
  $Arrays.$set(output, outOff, $Primitives.narrowIntToByte((input >>> 24 | 0) & 255));
  $Arrays.$set(output, outOff + 1 | 0, $Primitives.narrowIntToByte((input >>> 16 | 0) & 255));
  $Arrays.$set(output, outOff + 2 | 0, $Primitives.narrowIntToByte((input >>> 8 | 0) & 255));
  $Arrays.$set(output, outOff + 3 | 0, $Primitives.narrowIntToByte(input & 255));
 }
 /** @nodts */
 m_doPadding__void_$p_java_security_SHA256Digest() {
  let length = $LongUtils.leftShift(this.f_byteCounter__java_security_SHA256Digest_, 3);
  this.m_engineUpdate__byte__void(-128);
  while (this.f_wordOff__java_security_SHA256Digest_ != 0) {
   this.m_engineUpdate__byte__void(0);
  }
  Arrays.m_fill__arrayOf_int__int__int__int__void(this.f_blockBuffer__java_security_SHA256Digest_, this.f_blockOff__java_security_SHA256Digest_, 64, 0);
  if (this.f_blockOff__java_security_SHA256Digest_ > 14) {
   this.m_computeBlock__void_$p_java_security_SHA256Digest();
   Arrays.m_fill__arrayOf_int__int__void(this.f_blockBuffer__java_security_SHA256Digest_, 0);
  }
  $Arrays.$set(this.f_blockBuffer__java_security_SHA256Digest_, 14, $Primitives.narrowLongToInt($LongUtils.rightShiftUnsigned(length, 32)));
  $Arrays.$set(this.f_blockBuffer__java_security_SHA256Digest_, 15, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest($Primitives.narrowLongToInt(length)));
  this.m_computeBlock__void_$p_java_security_SHA256Digest();
 }
 /** @nodts */
 m_updateWord__void_$p_java_security_SHA256Digest() {
  $Arrays.$set(this.f_blockBuffer__java_security_SHA256Digest_, this.f_blockOff__java_security_SHA256Digest_, (this.f_wordBuffer__java_security_SHA256Digest_[0] & 255) << 24 | (this.f_wordBuffer__java_security_SHA256Digest_[1] & 255) << 16 | (this.f_wordBuffer__java_security_SHA256Digest_[2] & 255) << 8 | this.f_wordBuffer__java_security_SHA256Digest_[3] & 255);
  this.f_blockOff__java_security_SHA256Digest_ = this.f_blockOff__java_security_SHA256Digest_ + 1 | 0;
  if (this.f_blockOff__java_security_SHA256Digest_ == 16) {
   this.m_computeBlock__void_$p_java_security_SHA256Digest();
  }
 }
 /** @nodts */
 m_computeBlock__void_$p_java_security_SHA256Digest() {
  for (let t = 16; t < this.f_blockBuffer__java_security_SHA256Digest_.length; t = t + 1 | 0) {
   $Arrays.$set(this.f_blockBuffer__java_security_SHA256Digest_, t, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(this.m_sigma1__int__int_$p_java_security_SHA256Digest(this.f_blockBuffer__java_security_SHA256Digest_[t - 2 | 0]) + this.f_blockBuffer__java_security_SHA256Digest_[t - 7 | 0] + this.m_sigma0__int__int_$p_java_security_SHA256Digest(this.f_blockBuffer__java_security_SHA256Digest_[t - 15 | 0]) + this.f_blockBuffer__java_security_SHA256Digest_[t - 16 | 0] | 0));
  }
  let a = this.f_hash__java_security_SHA256Digest_[0];
  let b = this.f_hash__java_security_SHA256Digest_[1];
  let c = this.f_hash__java_security_SHA256Digest_[2];
  let d = this.f_hash__java_security_SHA256Digest_[3];
  let e = this.f_hash__java_security_SHA256Digest_[4];
  let f = this.f_hash__java_security_SHA256Digest_[5];
  let g = this.f_hash__java_security_SHA256Digest_[6];
  let h = this.f_hash__java_security_SHA256Digest_[7];
  for (let t_1 = 0; t_1 < 64; t_1 = t_1 + 1 | 0) {
   let t1 = h + this.m_sum1__int__int_$p_java_security_SHA256Digest(e) + this.m_ch__int__int__int__int_$p_java_security_SHA256Digest(e, f, g) + SHA256Digest.f_K__java_security_SHA256Digest_[t_1] + this.f_blockBuffer__java_security_SHA256Digest_[t_1] | 0;
   let t2 = this.m_sum0__int__int_$p_java_security_SHA256Digest(a) + this.m_maj__int__int__int__int_$p_java_security_SHA256Digest(a, b, c) | 0;
   h = g;
   g = f;
   f = e;
   e = this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(d + t1 | 0);
   d = c;
   c = b;
   b = a;
   a = this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(t1 + t2 | 0);
  }
  $Arrays.$set(this.f_hash__java_security_SHA256Digest_, 0, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(a + this.f_hash__java_security_SHA256Digest_[0] | 0));
  $Arrays.$set(this.f_hash__java_security_SHA256Digest_, 1, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(b + this.f_hash__java_security_SHA256Digest_[1] | 0));
  $Arrays.$set(this.f_hash__java_security_SHA256Digest_, 2, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(c + this.f_hash__java_security_SHA256Digest_[2] | 0));
  $Arrays.$set(this.f_hash__java_security_SHA256Digest_, 3, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(d + this.f_hash__java_security_SHA256Digest_[3] | 0));
  $Arrays.$set(this.f_hash__java_security_SHA256Digest_, 4, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(e + this.f_hash__java_security_SHA256Digest_[4] | 0));
  $Arrays.$set(this.f_hash__java_security_SHA256Digest_, 5, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(f + this.f_hash__java_security_SHA256Digest_[5] | 0));
  $Arrays.$set(this.f_hash__java_security_SHA256Digest_, 6, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(g + this.f_hash__java_security_SHA256Digest_[6] | 0));
  $Arrays.$set(this.f_hash__java_security_SHA256Digest_, 7, this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(h + this.f_hash__java_security_SHA256Digest_[7] | 0));
  this.f_blockOff__java_security_SHA256Digest_ = 0;
 }
 /** @nodts @return {number} */
 m_sum0__int__int_$p_java_security_SHA256Digest(/** number */ x) {
  return this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 2) ^ this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 13) ^ this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 22);
 }
 /** @nodts @return {number} */
 m_sum1__int__int_$p_java_security_SHA256Digest(/** number */ x) {
  return this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 6) ^ this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 11) ^ this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 25);
 }
 /** @nodts @return {number} */
 m_sigma0__int__int_$p_java_security_SHA256Digest(/** number */ x) {
  return this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 7) ^ this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 18) ^ (x >>> 3 | 0);
 }
 /** @nodts @return {number} */
 m_sigma1__int__int_$p_java_security_SHA256Digest(/** number */ x) {
  return this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 17) ^ this.m_rightRotate__int__int__int_$p_java_security_SHA256Digest(x, 19) ^ (x >>> 10 | 0);
 }
 /** @nodts @return {number} */
 m_rightRotate__int__int__int_$p_java_security_SHA256Digest(/** number */ x, /** number */ n) {
  return x >>> n | 0 | this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(x << (SHA256Digest.f_WORD_LENGTH__java_security_SHA256Digest_ - n | 0));
 }
 /** @nodts @return {number} */
 m_ch__int__int__int__int_$p_java_security_SHA256Digest(/** number */ x, /** number */ y, /** number */ z) {
  return this.m_enforceOverflow__int__int_$p_java_security_SHA256Digest(x & y ^ ~x & z);
 }
 /** @nodts @return {number} */
 m_maj__int__int__int__int_$p_java_security_SHA256Digest(/** number */ x, /** number */ y, /** number */ z) {
  return x & y ^ x & z ^ y & z;
 }
 /** @nodts @return {number} */
 m_enforceOverflow__int__int_$p_java_security_SHA256Digest(/** number */ input) {
  return input & -1;
 }
 /** @nodts */
 static $clinit() {
  SHA256Digest.$clinit = () =>{};
  SHA256Digest.$loadModules();
  MessageDigest.$clinit();
  SHA256Digest.f_K__java_security_SHA256Digest_ = /**@type {!Array<number>}*/ ($Arrays.$init([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998], $$int));
  SHA256Digest.f_H__java_security_SHA256Digest_ = /**@type {!Array<number>}*/ ($Arrays.$init([1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225], $$int));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SHA256Digest;
 }
 
 /** @nodts */
 static $loadModules() {
  System = goog.module.get('java.lang.System$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number} @nodts*/
SHA256Digest.f_WORD_LENGTH__java_security_SHA256Digest_ = 32;
/**@type {Array<number>} @nodts*/
SHA256Digest.f_K__java_security_SHA256Digest_;
/**@type {Array<number>} @nodts*/
SHA256Digest.f_H__java_security_SHA256Digest_;
$Util.$setClassMetadata(SHA256Digest, 'java.security.SHA256Digest');

exports = SHA256Digest;

//# sourceMappingURL=SHA256Digest.js.map
