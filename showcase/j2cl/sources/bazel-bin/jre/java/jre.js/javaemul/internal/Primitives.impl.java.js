goog.module('vmbootstrap.Primitives$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

class $Primitives extends j_l_Object {
 
 constructor() {
  $Primitives.$clinit();
  super();
  this.$ctor__javaemul_internal_Primitives__void();
 }
 /** @nodts */
 $ctor__javaemul_internal_Primitives__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @return {number} */
 static toByte(/** number */ instance) {
  $Primitives.$clinit();
  return instance << 24 >> 24;
 }
 /** @return {number} */
 static toChar(/** number */ instance) {
  $Primitives.$clinit();
  return instance & 65535;
 }
 /** @return {number} */
 static toShort(/** number */ instance) {
  $Primitives.$clinit();
  return instance << 16 >> 16;
 }
 /** @return {number} */
 static toInt(/** number */ instance) {
  $Primitives.$clinit();
  return instance | 0;
 }
 /** @return {number} */
 static widenByteToChar(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.toChar(instance);
 }
 /** @return {number} */
 static narrowCharToByte(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.toByte(instance);
 }
 /** @return {number} */
 static narrowCharToShort(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.toShort(instance);
 }
 /** @return {number} */
 static narrowShortToByte(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.toByte(instance);
 }
 /** @return {number} */
 static narrowShortToChar(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.toChar(instance);
 }
 /** @return {number} */
 static narrowIntToByte(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.toByte(instance);
 }
 /** @return {number} */
 static narrowIntToChar(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.toChar(instance);
 }
 /** @return {number} */
 static narrowIntToShort(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.toShort(instance);
 }
 /** @return {!$Long} */
 static widenByteToLong(/** number */ instance) {
  $Primitives.$clinit();
  return $LongUtils.fromInt(instance);
 }
 /** @return {!$Long} */
 static widenCharToLong(/** number */ instance) {
  $Primitives.$clinit();
  return $LongUtils.fromInt(instance);
 }
 /** @return {!$Long} */
 static widenShortToLong(/** number */ instance) {
  $Primitives.$clinit();
  return $LongUtils.fromInt(instance);
 }
 /** @return {!$Long} */
 static widenIntToLong(/** number */ instance) {
  $Primitives.$clinit();
  return $LongUtils.fromInt(instance);
 }
 /** @return {!$Long} */
 static narrowFloatToLong(/** number */ instance) {
  $Primitives.$clinit();
  return $LongUtils.fromNumber(instance);
 }
 /** @return {!$Long} */
 static narrowDoubleToLong(/** number */ instance) {
  $Primitives.$clinit();
  return $LongUtils.fromNumber(instance);
 }
 /** @return {number} */
 static narrowLongToByte(/** !$Long */ instance) {
  $Primitives.$clinit();
  let intValue = $LongUtils.toInt(instance);
  return $Primitives.toByte(intValue);
 }
 /** @return {number} */
 static narrowLongToChar(/** !$Long */ instance) {
  $Primitives.$clinit();
  let intValue = $LongUtils.toInt(instance);
  return $Primitives.toChar(intValue);
 }
 /** @return {number} */
 static narrowLongToShort(/** !$Long */ instance) {
  $Primitives.$clinit();
  let intValue = $LongUtils.toInt(instance);
  return $Primitives.toShort(intValue);
 }
 /** @return {number} */
 static narrowLongToInt(/** !$Long */ instance) {
  $Primitives.$clinit();
  return $LongUtils.toInt(instance);
 }
 /** @return {number} */
 static widenLongToFloat(/** !$Long */ instance) {
  $Primitives.$clinit();
  return $LongUtils.toNumber(instance);
 }
 /** @return {number} */
 static widenLongToDouble(/** !$Long */ instance) {
  $Primitives.$clinit();
  return $LongUtils.toNumber(instance);
 }
 /** @return {number} */
 static narrowFloatToByte(/** number */ instance) {
  $Primitives.$clinit();
  let roundInt = $Primitives.m_roundToInt__int__int(instance);
  return $Primitives.toByte(roundInt);
 }
 /** @return {number} */
 static narrowDoubleToByte(/** number */ instance) {
  $Primitives.$clinit();
  let roundInt = $Primitives.m_roundToInt__int__int(instance);
  return $Primitives.toByte(roundInt);
 }
 /** @return {number} */
 static narrowFloatToChar(/** number */ instance) {
  $Primitives.$clinit();
  let roundInt = $Primitives.m_roundToInt__int__int(instance);
  return $Primitives.toChar(roundInt);
 }
 /** @return {number} */
 static narrowDoubleToChar(/** number */ instance) {
  $Primitives.$clinit();
  let roundInt = $Primitives.m_roundToInt__int__int(instance);
  return $Primitives.toChar(roundInt);
 }
 /** @return {number} */
 static narrowFloatToShort(/** number */ instance) {
  $Primitives.$clinit();
  let roundInt = $Primitives.m_roundToInt__int__int(instance);
  return $Primitives.toShort(roundInt);
 }
 /** @return {number} */
 static narrowDoubleToShort(/** number */ instance) {
  $Primitives.$clinit();
  let roundInt = $Primitives.m_roundToInt__int__int(instance);
  return $Primitives.toShort(roundInt);
 }
 /** @return {number} */
 static narrowFloatToInt(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.m_roundToInt__int__int(instance);
 }
 /** @return {number} */
 static narrowDoubleToInt(/** number */ instance) {
  $Primitives.$clinit();
  return $Primitives.m_roundToInt__int__int(instance);
 }
 /** @return {number} */
 static coerceDivision(/** number */ value) {
  $Primitives.$clinit();
  InternalPreconditions.m_checkArithmetic__boolean__void(Double.m_isFinite__double__boolean(value));
  return $Primitives.toInt(value);
 }
 /** @nodts @return {number} */
 static m_roundToInt__int__int(/** number */ value) {
  return $Primitives.toInt(Math.max(Math.min(value, Integer.f_MAX_VALUE__java_lang_Integer), Integer.f_MIN_VALUE__java_lang_Integer));
 }
 /** @nodts */
 static $clinit() {
  $Primitives.$clinit = () =>{};
  $Primitives.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Primitives;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata($Primitives, 'javaemul.internal.Primitives');

exports = $Primitives;

//# sourceMappingURL=Primitives.js.map
