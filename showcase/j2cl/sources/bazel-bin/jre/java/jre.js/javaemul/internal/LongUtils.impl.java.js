goog.module('vmbootstrap.LongUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $LongUtils_NativeLong = goog.forwardDeclare('nativebootstrap.Long');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

class $LongUtils extends j_l_Object {
 
 constructor() {
  $LongUtils.$clinit();
  super();
  this.$ctor__javaemul_internal_LongUtils__void();
 }
 /** @nodts */
 $ctor__javaemul_internal_LongUtils__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @return {!$Long} */
 static fromBits(/** number */ lowBits, /** number */ highBits) {
  $LongUtils.$clinit();
  return $LongUtils_NativeLong.fromBits(lowBits, highBits);
 }
 /** @return {number} */
 static compare(/** !$Long */ a, /** !$Long */ b) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(a).compare(b);
 }
 /** @return {!$Long} */
 static fromInt(/** number */ value) {
  $LongUtils.$clinit();
  return $LongUtils_NativeLong.fromInt(value | 0);
 }
 /** @return {!$Long} */
 static fromNumber(/** number */ value) {
  $LongUtils.$clinit();
  return $LongUtils_NativeLong.fromNumber(value);
 }
 /** @return {number} */
 static toInt(/** !$Long */ value) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(value).toInt();
 }
 /** @return {number} */
 static toNumber(/** !$Long */ value) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(value).toNumber();
 }
 /** @return {!$Long} */
 static bitAnd(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).and(rightLong);
 }
 /** @return {!$Long} */
 static not(/** !$Long */ valueLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(valueLong).not();
 }
 /** @return {!$Long} */
 static divide(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  $LongUtils.checkDivisorZero(rightLong);
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).div(rightLong);
 }
 /** @return {boolean} */
 static equals(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).equals($LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(rightLong));
 }
 /** @return {boolean} */
 static greater(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).greaterThan(rightLong);
 }
 /** @return {boolean} */
 static greaterEquals(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).greaterThanOrEqual(rightLong);
 }
 /** @return {!$Long} */
 static leftShift(/** !$Long */ valueLong, /** number */ numBits) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(valueLong).shiftLeft(numBits);
 }
 /** @return {boolean} */
 static less(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).lessThan(rightLong);
 }
 /** @return {boolean} */
 static lessEquals(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).lessThanOrEqual(rightLong);
 }
 /** @return {!$Long} */
 static minus(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).subtract(rightLong);
 }
 /** @return {!$Long} */
 static negate(/** !$Long */ valueLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(valueLong).negate();
 }
 /** @return {boolean} */
 static notEquals(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).notEquals(rightLong);
 }
 /** @return {!$Long} */
 static bitOr(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).or(rightLong);
 }
 /** @return {!$Long} */
 static plus(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).add(rightLong);
 }
 /** @return {!$Long} */
 static remainder(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  $LongUtils.checkDivisorZero(rightLong);
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).modulo(rightLong);
 }
 /** @return {!$Long} */
 static rightShiftSigned(/** !$Long */ valueLong, /** number */ numBits) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(valueLong).shiftRight(numBits);
 }
 /** @return {!$Long} */
 static rightShiftUnsigned(/** !$Long */ valueLong, /** number */ numBits) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(valueLong).shiftRightUnsigned(numBits);
 }
 /** @return {!$Long} */
 static times(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).multiply(rightLong);
 }
 /** @return {!$Long} */
 static bitXor(/** !$Long */ leftLong, /** !$Long */ rightLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(leftLong).xor(rightLong);
 }
 /** @return {number} */
 static getHighBits(/** !$Long */ valueLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(valueLong).getHighBits();
 }
 /** @return {number} */
 static getLowBits(/** !$Long */ valueLong) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(valueLong).getLowBits();
 }
 /** @return {?string} */
 static toString(/** !$Long */ valueLong, /** number */ radix) {
  $LongUtils.$clinit();
  return $LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(valueLong).toString(radix);
 }
 
 static checkDivisorZero(/** !$Long */ divisor) {
  $LongUtils.$clinit();
  InternalPreconditions.m_checkArithmetic__boolean__void(!$LongUtils.m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(divisor).isZero());
 }
 /** @nodts @return {$LongUtils_NativeLong} */
 static m_toNativeLong__java_lang_Object__javaemul_internal_LongUtils_NativeLong(/** * */ l) {
  return /**@type {$LongUtils_NativeLong}*/ (JsUtils.uncheckedCast(l));
 }
 /** @nodts */
 static $clinit() {
  $LongUtils.$clinit = () =>{};
  $LongUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LongUtils;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $LongUtils_NativeLong = goog.module.get('nativebootstrap.Long');
 }
}
$Util.$setClassMetadata($LongUtils, 'javaemul.internal.LongUtils');

exports = $LongUtils;

//# sourceMappingURL=LongUtils.js.map
