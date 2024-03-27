goog.module('java.security.MessageDigest.Md5Digest$impl');

const MessageDigest = goog.require('java.security.MessageDigest$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let System = goog.forwardDeclare('java.lang.System$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class Md5Digest extends MessageDigest {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_buffer__java_security_MessageDigest_Md5Digest_;
  /**@type {!$Long} @nodts*/
  this.f_counter__java_security_MessageDigest_Md5Digest_ = $Long.fromInt(0);
  /**@type {Array<number>} @nodts*/
  this.f_oneByte__java_security_MessageDigest_Md5Digest_;
  /**@type {number} @nodts*/
  this.f_remainder__java_security_MessageDigest_Md5Digest_ = 0;
  /**@type {Array<number>} @nodts*/
  this.f_state__java_security_MessageDigest_Md5Digest_;
  /**@type {Array<number>} @nodts*/
  this.f_x__java_security_MessageDigest_Md5Digest_;
 }
 /** @nodts @return {Array<number>} */
 static m_toBytes__long__arrayOf_byte(/** !$Long */ n) {
  Md5Digest.$clinit();
  let b = /**@type {!Array<number>}*/ ($Arrays.$create([8], $$byte));
  $Arrays.$set(b, 0, $Primitives.narrowLongToByte(n));
  n = $LongUtils.rightShiftUnsigned(n, 8);
  $Arrays.$set(b, 1, $Primitives.narrowLongToByte(n));
  n = $LongUtils.rightShiftUnsigned(n, 8);
  $Arrays.$set(b, 2, $Primitives.narrowLongToByte(n));
  n = $LongUtils.rightShiftUnsigned(n, 8);
  $Arrays.$set(b, 3, $Primitives.narrowLongToByte(n));
  n = $LongUtils.rightShiftUnsigned(n, 8);
  $Arrays.$set(b, 4, $Primitives.narrowLongToByte(n));
  n = $LongUtils.rightShiftUnsigned(n, 8);
  $Arrays.$set(b, 5, $Primitives.narrowLongToByte(n));
  n = $LongUtils.rightShiftUnsigned(n, 8);
  $Arrays.$set(b, 6, $Primitives.narrowLongToByte(n));
  n = $LongUtils.rightShiftUnsigned(n, 8);
  $Arrays.$set(b, 7, $Primitives.narrowLongToByte(n));
  return b;
 }
 /** @nodts */
 static m_byte2int__arrayOf_byte__arrayOf_int__void(/** Array<number> */ in_1, /** Array<number> */ out) {
  for (let inpos = 0, outpos = 0; outpos < 16; outpos = outpos + 1 | 0) {
   let /** number */ $value, /** number */ $value_1, /** number */ $value_2, /** number */ $value_3;
   $Arrays.$set(out, outpos, in_1[($value = inpos, inpos = inpos + 1 | 0, $value)] & 255 | (in_1[($value_1 = inpos, inpos = inpos + 1 | 0, $value_1)] & 255) << 8 | (in_1[($value_2 = inpos, inpos = inpos + 1 | 0, $value_2)] & 255) << 16 | (in_1[($value_3 = inpos, inpos = inpos + 1 | 0, $value_3)] & 255) << 24);
  }
 }
 /** @nodts @return {number} */
 static m_f__int__int__int__int(/** number */ x, /** number */ y, /** number */ z) {
  return z ^ x & (y ^ z);
 }
 /** @nodts @return {number} */
 static m_ff__int__int__int__int__int__int__int__int(/** number */ a, /** number */ b, /** number */ c, /** number */ d, /** number */ x, /** number */ s, /** number */ ac) {
  a = a + (x + ac + Md5Digest.m_f__int__int__int__int(b, c, d)) | 0;
  a = a << s | (a >>> - s | 0);
  return a + b | 0;
 }
 /** @nodts @return {number} */
 static m_g__int__int__int__int(/** number */ x, /** number */ y, /** number */ z) {
  return y ^ z & (x ^ y);
 }
 /** @nodts @return {number} */
 static m_gg__int__int__int__int__int__int__int__int(/** number */ a, /** number */ b, /** number */ c, /** number */ d, /** number */ x, /** number */ s, /** number */ ac) {
  a = a + (x + ac + Md5Digest.m_g__int__int__int__int(b, c, d)) | 0;
  a = a << s | (a >>> - s | 0);
  return a + b | 0;
 }
 /** @nodts @return {number} */
 static m_h__int__int__int__int(/** number */ x, /** number */ y, /** number */ z) {
  return x ^ y ^ z;
 }
 /** @nodts @return {number} */
 static m_hh__int__int__int__int__int__int__int__int(/** number */ a, /** number */ b, /** number */ c, /** number */ d, /** number */ x, /** number */ s, /** number */ ac) {
  a = a + (x + ac + Md5Digest.m_h__int__int__int__int(b, c, d)) | 0;
  a = a << s | (a >>> - s | 0);
  return a + b | 0;
 }
 /** @nodts @return {number} */
 static m_i__int__int__int__int(/** number */ x, /** number */ y, /** number */ z) {
  return y ^ (x | ~z);
 }
 /** @nodts @return {number} */
 static m_ii__int__int__int__int__int__int__int__int(/** number */ a, /** number */ b, /** number */ c, /** number */ d, /** number */ x, /** number */ s, /** number */ ac) {
  a = a + (x + ac + Md5Digest.m_i__int__int__int__int(b, c, d)) | 0;
  a = a << s | (a >>> - s | 0);
  return a + b | 0;
 }
 /** @nodts */
 static m_int2byte__arrayOf_int__arrayOf_byte__void(/** Array<number> */ in_1, /** Array<number> */ out) {
  for (let inpos = 0, outpos = 0; inpos < 4; inpos = inpos + 1 | 0) {
   let /** number */ $value, /** number */ $value_1, /** number */ $value_2, /** number */ $value_3;
   $Arrays.$set(out, ($value = outpos, outpos = outpos + 1 | 0, $value), $Primitives.narrowIntToByte(in_1[inpos] & 255));
   $Arrays.$set(out, ($value_1 = outpos, outpos = outpos + 1 | 0, $value_1), $Primitives.narrowIntToByte((in_1[inpos] >>> 8 | 0) & 255));
   $Arrays.$set(out, ($value_2 = outpos, outpos = outpos + 1 | 0, $value_2), $Primitives.narrowIntToByte((in_1[inpos] >>> 16 | 0) & 255));
   $Arrays.$set(out, ($value_3 = outpos, outpos = outpos + 1 | 0, $value_3), $Primitives.narrowIntToByte((in_1[inpos] >>> 24 | 0) & 255));
  }
 }
 /** @nodts @return {!Md5Digest} */
 static $create__() {
  Md5Digest.$clinit();
  let $instance = new Md5Digest();
  $instance.$ctor__java_security_MessageDigest_Md5Digest__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_security_MessageDigest_Md5Digest__void() {
  this.$ctor__java_security_MessageDigest__java_lang_String__void('MD5');
  this.$init__void_$p_java_security_MessageDigest_Md5Digest();
  this.m_engineReset__void();
 }
 /** @override @nodts @return {Array<number>} */
 m_engineDigest__arrayOf_byte() {
  let bits = Md5Digest.m_toBytes__long__arrayOf_byte($LongUtils.leftShift(this.f_counter__java_security_MessageDigest_Md5Digest_, 3));
  let digest = /**@type {!Array<number>}*/ ($Arrays.$create([16], $$byte));
  if (this.f_remainder__java_security_MessageDigest_Md5Digest_ > 8) {
   this.m_engineUpdate__arrayOf_byte__int__int__void(Md5Digest.$static_padding__java_security_MessageDigest_Md5Digest, 0, this.f_remainder__java_security_MessageDigest_Md5Digest_ - 8 | 0);
  } else {
   this.m_engineUpdate__arrayOf_byte__int__int__void(Md5Digest.$static_padding__java_security_MessageDigest_Md5Digest, 0, 64 + (this.f_remainder__java_security_MessageDigest_Md5Digest_ - 8) | 0);
  }
  this.m_engineUpdate__arrayOf_byte__int__int__void(bits, 0, 8);
  Md5Digest.m_int2byte__arrayOf_int__arrayOf_byte__void(this.f_state__java_security_MessageDigest_Md5Digest_, digest);
  this.m_reset__void();
  return digest;
 }
 /** @override @nodts @return {number} */
 m_engineGetDigestLength__int() {
  return 16;
 }
 /** @override @nodts */
 m_engineReset__void() {
  this.f_buffer__java_security_MessageDigest_Md5Digest_ = /**@type {!Array<number>}*/ ($Arrays.$create([64], $$byte));
  this.f_state__java_security_MessageDigest_Md5Digest_ = /**@type {!Array<number>}*/ ($Arrays.$create([4], $$int));
  this.f_x__java_security_MessageDigest_Md5Digest_ = /**@type {!Array<number>}*/ ($Arrays.$create([16], $$int));
  $Arrays.$set(this.f_state__java_security_MessageDigest_Md5Digest_, 0, 1732584193);
  $Arrays.$set(this.f_state__java_security_MessageDigest_Md5Digest_, 1, -271733879);
  $Arrays.$set(this.f_state__java_security_MessageDigest_Md5Digest_, 2, -1732584194);
  $Arrays.$set(this.f_state__java_security_MessageDigest_Md5Digest_, 3, 271733878);
  this.f_counter__java_security_MessageDigest_Md5Digest_ = $Long.fromInt(0);
  this.f_remainder__java_security_MessageDigest_Md5Digest_ = 64;
 }
 /** @override @nodts */
 m_engineUpdate__byte__void(/** number */ input) {
  $Arrays.$set(this.f_oneByte__java_security_MessageDigest_Md5Digest_, 0, input);
  this.m_engineUpdate__arrayOf_byte__int__int__void(this.f_oneByte__java_security_MessageDigest_Md5Digest_, 0, 1);
 }
 /** @override @nodts */
 m_engineUpdate__arrayOf_byte__int__int__void(/** Array<number> */ input, /** number */ offset, /** number */ len) {
  while (true) {
   if (len >= this.f_remainder__java_security_MessageDigest_Md5Digest_) {
    System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(input, offset, this.f_buffer__java_security_MessageDigest_Md5Digest_, $Primitives.narrowLongToInt($LongUtils.bitAnd(this.f_counter__java_security_MessageDigest_Md5Digest_, $Long.fromInt(63))), this.f_remainder__java_security_MessageDigest_Md5Digest_);
    this.m_transform__arrayOf_byte__void_$p_java_security_MessageDigest_Md5Digest(this.f_buffer__java_security_MessageDigest_Md5Digest_);
    this.f_counter__java_security_MessageDigest_Md5Digest_ = $LongUtils.plus(this.f_counter__java_security_MessageDigest_Md5Digest_, $Primitives.widenIntToLong(this.f_remainder__java_security_MessageDigest_Md5Digest_));
    offset = offset + this.f_remainder__java_security_MessageDigest_Md5Digest_ | 0;
    len = len - this.f_remainder__java_security_MessageDigest_Md5Digest_ | 0;
    this.f_remainder__java_security_MessageDigest_Md5Digest_ = 64;
   } else {
    System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(input, offset, this.f_buffer__java_security_MessageDigest_Md5Digest_, $Primitives.narrowLongToInt($LongUtils.bitAnd(this.f_counter__java_security_MessageDigest_Md5Digest_, $Long.fromInt(63))), len);
    this.f_counter__java_security_MessageDigest_Md5Digest_ = $LongUtils.plus(this.f_counter__java_security_MessageDigest_Md5Digest_, $Primitives.widenIntToLong(len));
    this.f_remainder__java_security_MessageDigest_Md5Digest_ = this.f_remainder__java_security_MessageDigest_Md5Digest_ - len | 0;
    break;
   }
  }
 }
 /** @nodts */
 m_transform__arrayOf_byte__void_$p_java_security_MessageDigest_Md5Digest(/** Array<number> */ buffer) {
  let /** number */ a, /** number */ b, /** number */ c, /** number */ d;
  Md5Digest.m_byte2int__arrayOf_byte__arrayOf_int__void(buffer, this.f_x__java_security_MessageDigest_Md5Digest_);
  a = this.f_state__java_security_MessageDigest_Md5Digest_[0];
  b = this.f_state__java_security_MessageDigest_Md5Digest_[1];
  c = this.f_state__java_security_MessageDigest_Md5Digest_[2];
  d = this.f_state__java_security_MessageDigest_Md5Digest_[3];
  a = Md5Digest.m_ff__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[0], 7, -680876936);
  d = Md5Digest.m_ff__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[1], 12, -389564586);
  c = Md5Digest.m_ff__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[2], 17, 606105819);
  b = Md5Digest.m_ff__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[3], 22, -1044525330);
  a = Md5Digest.m_ff__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[4], 7, -176418897);
  d = Md5Digest.m_ff__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[5], 12, 1200080426);
  c = Md5Digest.m_ff__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[6], 17, -1473231341);
  b = Md5Digest.m_ff__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[7], 22, -45705983);
  a = Md5Digest.m_ff__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[8], 7, 1770035416);
  d = Md5Digest.m_ff__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[9], 12, -1958414417);
  c = Md5Digest.m_ff__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[10], 17, -42063);
  b = Md5Digest.m_ff__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[11], 22, -1990404162);
  a = Md5Digest.m_ff__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[12], 7, 1804603682);
  d = Md5Digest.m_ff__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[13], 12, -40341101);
  c = Md5Digest.m_ff__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[14], 17, -1502002290);
  b = Md5Digest.m_ff__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[15], 22, 1236535329);
  a = Md5Digest.m_gg__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[1], 5, -165796510);
  d = Md5Digest.m_gg__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[6], 9, -1069501632);
  c = Md5Digest.m_gg__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[11], 14, 643717713);
  b = Md5Digest.m_gg__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[0], 20, -373897302);
  a = Md5Digest.m_gg__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[5], 5, -701558691);
  d = Md5Digest.m_gg__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[10], 9, 38016083);
  c = Md5Digest.m_gg__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[15], 14, -660478335);
  b = Md5Digest.m_gg__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[4], 20, -405537848);
  a = Md5Digest.m_gg__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[9], 5, 568446438);
  d = Md5Digest.m_gg__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[14], 9, -1019803690);
  c = Md5Digest.m_gg__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[3], 14, -187363961);
  b = Md5Digest.m_gg__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[8], 20, 1163531501);
  a = Md5Digest.m_gg__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[13], 5, -1444681467);
  d = Md5Digest.m_gg__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[2], 9, -51403784);
  c = Md5Digest.m_gg__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[7], 14, 1735328473);
  b = Md5Digest.m_gg__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[12], 20, -1926607734);
  a = Md5Digest.m_hh__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[5], 4, -378558);
  d = Md5Digest.m_hh__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[8], 11, -2022574463);
  c = Md5Digest.m_hh__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[11], 16, 1839030562);
  b = Md5Digest.m_hh__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[14], 23, -35309556);
  a = Md5Digest.m_hh__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[1], 4, -1530992060);
  d = Md5Digest.m_hh__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[4], 11, 1272893353);
  c = Md5Digest.m_hh__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[7], 16, -155497632);
  b = Md5Digest.m_hh__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[10], 23, -1094730640);
  a = Md5Digest.m_hh__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[13], 4, 681279174);
  d = Md5Digest.m_hh__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[0], 11, -358537222);
  c = Md5Digest.m_hh__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[3], 16, -722521979);
  b = Md5Digest.m_hh__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[6], 23, 76029189);
  a = Md5Digest.m_hh__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[9], 4, -640364487);
  d = Md5Digest.m_hh__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[12], 11, -421815835);
  c = Md5Digest.m_hh__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[15], 16, 530742520);
  b = Md5Digest.m_hh__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[2], 23, -995338651);
  a = Md5Digest.m_ii__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[0], 6, -198630844);
  d = Md5Digest.m_ii__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[7], 10, 1126891415);
  c = Md5Digest.m_ii__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[14], 15, -1416354905);
  b = Md5Digest.m_ii__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[5], 21, -57434055);
  a = Md5Digest.m_ii__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[12], 6, 1700485571);
  d = Md5Digest.m_ii__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[3], 10, -1894986606);
  c = Md5Digest.m_ii__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[10], 15, -1051523);
  b = Md5Digest.m_ii__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[1], 21, -2054922799);
  a = Md5Digest.m_ii__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[8], 6, 1873313359);
  d = Md5Digest.m_ii__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[15], 10, -30611744);
  c = Md5Digest.m_ii__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[6], 15, -1560198380);
  b = Md5Digest.m_ii__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[13], 21, 1309151649);
  a = Md5Digest.m_ii__int__int__int__int__int__int__int__int(a, b, c, d, this.f_x__java_security_MessageDigest_Md5Digest_[4], 6, -145523070);
  d = Md5Digest.m_ii__int__int__int__int__int__int__int__int(d, a, b, c, this.f_x__java_security_MessageDigest_Md5Digest_[11], 10, -1120210379);
  c = Md5Digest.m_ii__int__int__int__int__int__int__int__int(c, d, a, b, this.f_x__java_security_MessageDigest_Md5Digest_[2], 15, 718787259);
  b = Md5Digest.m_ii__int__int__int__int__int__int__int__int(b, c, d, a, this.f_x__java_security_MessageDigest_Md5Digest_[9], 21, -343485551);
  $Arrays.$set(this.f_state__java_security_MessageDigest_Md5Digest_, 0, this.f_state__java_security_MessageDigest_Md5Digest_[0] + a | 0);
  $Arrays.$set(this.f_state__java_security_MessageDigest_Md5Digest_, 1, this.f_state__java_security_MessageDigest_Md5Digest_[1] + b | 0);
  $Arrays.$set(this.f_state__java_security_MessageDigest_Md5Digest_, 2, this.f_state__java_security_MessageDigest_Md5Digest_[2] + c | 0);
  $Arrays.$set(this.f_state__java_security_MessageDigest_Md5Digest_, 3, this.f_state__java_security_MessageDigest_Md5Digest_[3] + d | 0);
 }
 /** @private @nodts */
 $init__void_$p_java_security_MessageDigest_Md5Digest() {
  this.f_oneByte__java_security_MessageDigest_Md5Digest_ = /**@type {!Array<number>}*/ ($Arrays.$create([1], $$byte));
 }
 /** @nodts @return {Array<number>} */
 static get f_padding__java_security_MessageDigest_Md5Digest() {
  return (Md5Digest.$clinit(), Md5Digest.$static_padding__java_security_MessageDigest_Md5Digest);
 }
 /** @nodts */
 static set f_padding__java_security_MessageDigest_Md5Digest(/** Array<number> */ value) {
  (Md5Digest.$clinit(), Md5Digest.$static_padding__java_security_MessageDigest_Md5Digest = value);
 }
 /** @nodts */
 static $clinit() {
  Md5Digest.$clinit = () =>{};
  Md5Digest.$loadModules();
  MessageDigest.$clinit();
  Md5Digest.$static_padding__java_security_MessageDigest_Md5Digest = /**@type {!Array<number>}*/ ($Arrays.$init([-128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], $$byte));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Md5Digest;
 }
 
 /** @nodts */
 static $loadModules() {
  System = goog.module.get('java.lang.System$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@private {Array<number>} @nodts*/
Md5Digest.$static_padding__java_security_MessageDigest_Md5Digest;
$Util.$setClassMetadata(Md5Digest, 'java.security.MessageDigest$Md5Digest');

exports = Md5Digest;

//# sourceMappingURL=MessageDigest$Md5Digest.js.map
