goog.module('java.lang.Long$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const Number = goog.require('java.lang.Number$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let IntegralToString = goog.forwardDeclare('java.lang.IntegralToString$impl');
let BoxedValues = goog.forwardDeclare('java.lang.Long.BoxedValues$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let vmbootstrap_$LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$long = goog.forwardDeclare('vmbootstrap.primitives.$long$impl');

/**
 * @final
 * @implements {Comparable<Long>}
 */
class Long extends Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_value__java_lang_Long_ = $Long.fromInt(0);
 }
 /** @nodts @return {number} */
 static m_bitCount__long__int(/** !$Long */ l) {
  Long.$clinit();
  let high = $LongUtils.getHighBits(l);
  let low = $Primitives.narrowLongToInt(l);
  return Integer.m_bitCount__int__int(high) + Integer.m_bitCount__int__int(low) | 0;
 }
 /** @nodts @return {number} */
 static m_compare__long__long__int(/** !$Long */ x, /** !$Long */ y) {
  Long.$clinit();
  if (vmbootstrap_$LongUtils.less(x, y)) {
   return - 1 | 0;
  } else if (vmbootstrap_$LongUtils.greater(x, y)) {
   return 1;
  } else {
   return 0;
  }
 }
 /** @nodts @return {Long} */
 static m_decode__java_lang_String__java_lang_Long(/** ?string */ s) {
  Long.$clinit();
  let decode = Number.m___decodeNumberString__java_lang_String__java_lang_Number___Decode(s);
  return Long.m_valueOf__java_lang_String__int__java_lang_Long(decode.f_payload__java_lang_Number___Decode, decode.f_radix__java_lang_Number___Decode);
 }
 /** @nodts @return {number} */
 static m_hashCode__long__int(/** !$Long */ l) {
  Long.$clinit();
  return $LongUtils.getHighBits(l) ^ $Primitives.narrowLongToInt(l);
 }
 /** @nodts @return {!$Long} */
 static m_highestOneBit__long__long(/** !$Long */ l) {
  Long.$clinit();
  let high = $LongUtils.getHighBits(l);
  if (high != 0) {
   return $LongUtils.fromBits(0, Integer.m_highestOneBit__int__int(high));
  } else {
   return $LongUtils.fromBits(Integer.m_highestOneBit__int__int($Primitives.narrowLongToInt(l)), 0);
  }
 }
 /** @nodts @return {!$Long} */
 static m_lowestOneBit__long__long(/** !$Long */ i) {
  Long.$clinit();
  return vmbootstrap_$LongUtils.bitAnd(i, vmbootstrap_$LongUtils.negate(i));
 }
 /** @nodts @return {!$Long} */
 static m_max__long__long__long(/** !$Long */ a, /** !$Long */ b) {
  Long.$clinit();
  return Math.m_max__long__long__long(a, b);
 }
 /** @nodts @return {!$Long} */
 static m_min__long__long__long(/** !$Long */ a, /** !$Long */ b) {
  Long.$clinit();
  return Math.m_min__long__long__long(a, b);
 }
 /** @nodts @return {number} */
 static m_numberOfLeadingZeros__long__int(/** !$Long */ l) {
  Long.$clinit();
  let high = $LongUtils.getHighBits(l);
  if (high != 0) {
   return Integer.m_numberOfLeadingZeros__int__int(high);
  } else {
   return Integer.m_numberOfLeadingZeros__int__int($Primitives.narrowLongToInt(l)) + 32 | 0;
  }
 }
 /** @nodts @return {number} */
 static m_numberOfTrailingZeros__long__int(/** !$Long */ l) {
  Long.$clinit();
  let low = $Primitives.narrowLongToInt(l);
  if (low != 0) {
   return Integer.m_numberOfTrailingZeros__int__int(low);
  } else {
   return Integer.m_numberOfTrailingZeros__int__int($LongUtils.getHighBits(l)) + 32 | 0;
  }
 }
 /** @nodts @return {!$Long} */
 static m_parseLong__java_lang_String__long(/** ?string */ s) {
  Long.$clinit();
  return Long.m_parseLong__java_lang_String__int__long(s, 10);
 }
 /** @nodts @return {!$Long} */
 static m_parseLong__java_lang_String__int__long(/** ?string */ s, /** number */ radix) {
  Long.$clinit();
  return Number.m___parseAndValidateLong__java_lang_String__int__long(s, radix);
 }
 /** @nodts @return {!$Long} */
 static m_reverse__long__long(/** !$Long */ l) {
  Long.$clinit();
  let high = $LongUtils.getHighBits(l);
  let low = $Primitives.narrowLongToInt(l);
  return $LongUtils.fromBits(Integer.m_reverse__int__int(high), Integer.m_reverse__int__int(low));
 }
 /** @nodts @return {!$Long} */
 static m_reverseBytes__long__long(/** !$Long */ l) {
  Long.$clinit();
  let high = $LongUtils.getHighBits(l);
  let low = $Primitives.narrowLongToInt(l);
  return $LongUtils.fromBits(Integer.m_reverseBytes__int__int(high), Integer.m_reverseBytes__int__int(low));
 }
 /** @nodts @return {!$Long} */
 static m_rotateLeft__long__int__long(/** !$Long */ i, /** number */ distance) {
  let /** number */ $value;
  Long.$clinit();
  while (($value = distance, distance = distance - 1 | 0, $value) > 0) {
   i = vmbootstrap_$LongUtils.bitOr(vmbootstrap_$LongUtils.leftShift(i, 1), $Primitives.widenIntToLong(vmbootstrap_$LongUtils.less(i, $Long.fromInt(0)) ? 1 : 0));
  }
  return i;
 }
 /** @nodts @return {!$Long} */
 static m_rotateRight__long__int__long(/** !$Long */ i, /** number */ distance) {
  let /** number */ $value;
  Long.$clinit();
  let ui = vmbootstrap_$LongUtils.bitAnd(i, Long.f_MAX_VALUE__java_lang_Long);
  let carry = vmbootstrap_$LongUtils.less(i, $Long.fromInt(0)) ? $Long.fromBits(0, 1073741824) /* 4611686018427387904 */ : $Long.fromInt(0);
  while (($value = distance, distance = distance - 1 | 0, $value) > 0) {
   let nextcarry = vmbootstrap_$LongUtils.bitAnd(ui, $Long.fromInt(1));
   ui = vmbootstrap_$LongUtils.bitOr(carry, vmbootstrap_$LongUtils.rightShiftSigned(ui, 1));
   carry = vmbootstrap_$LongUtils.equals(nextcarry, $Long.fromInt(0)) ? $Long.fromInt(0) : $Long.fromBits(0, 1073741824) /* 4611686018427387904 */;
  }
  if (vmbootstrap_$LongUtils.notEquals(carry, $Long.fromInt(0))) {
   ui = vmbootstrap_$LongUtils.bitOr(ui, Long.f_MIN_VALUE__java_lang_Long);
  }
  return ui;
 }
 /** @nodts @return {number} */
 static m_signum__long__int(/** !$Long */ i) {
  Long.$clinit();
  if (vmbootstrap_$LongUtils.equals(i, $Long.fromInt(0))) {
   return 0;
  } else if (vmbootstrap_$LongUtils.less(i, $Long.fromInt(0))) {
   return - 1 | 0;
  } else {
   return 1;
  }
 }
 /** @nodts @return {!$Long} */
 static m_sum__long__long__long(/** !$Long */ a, /** !$Long */ b) {
  Long.$clinit();
  return vmbootstrap_$LongUtils.plus(a, b);
 }
 /** @nodts @return {?string} */
 static m_toBinaryString__long__java_lang_String(/** !$Long */ value) {
  Long.$clinit();
  return IntegralToString.m_longToBinaryString__long__java_lang_String(value);
 }
 /** @nodts @return {?string} */
 static m_toHexString__long__java_lang_String(/** !$Long */ value) {
  Long.$clinit();
  return IntegralToString.m_longToHexString__long__java_lang_String(value);
 }
 /** @nodts @return {?string} */
 static m_toOctalString__long__java_lang_String(/** !$Long */ value) {
  Long.$clinit();
  return IntegralToString.m_longToOctalString__long__java_lang_String(value);
 }
 /** @nodts @return {?string} */
 static m_toString__long__java_lang_String(/** !$Long */ value) {
  Long.$clinit();
  return IntegralToString.m_longToString__long__java_lang_String(value);
 }
 /** @nodts @return {?string} */
 static m_toString__long__int__java_lang_String(/** !$Long */ value, /** number */ intRadix) {
  Long.$clinit();
  return IntegralToString.m_longToString__long__int__java_lang_String(value, intRadix);
 }
 /** @nodts @return {Long} */
 static m_valueOf__long__java_lang_Long(/** !$Long */ l) {
  Long.$clinit();
  if (vmbootstrap_$LongUtils.greater(l, $Primitives.widenIntToLong(- 129 | 0)) && vmbootstrap_$LongUtils.less(l, $Long.fromInt(128))) {
   return BoxedValues.m_get__long__java_lang_Long(l);
  }
  return Long.$create__long(l);
 }
 /** @nodts @return {Long} */
 static m_valueOf__java_lang_String__java_lang_Long(/** ?string */ s) {
  Long.$clinit();
  return Long.m_valueOf__java_lang_String__int__java_lang_Long(s, 10);
 }
 /** @nodts @return {Long} */
 static m_valueOf__java_lang_String__int__java_lang_Long(/** ?string */ s, /** number */ radix) {
  Long.$clinit();
  return Long.m_valueOf__long__java_lang_Long(Long.m_parseLong__java_lang_String__int__long(s, radix));
 }
 //Factory method corresponding to constructor 'Long(long)'.
 /** @nodts @return {!Long} */
 static $create__long(/** !$Long */ value) {
  Long.$clinit();
  let $instance = new Long();
  $instance.$ctor__java_lang_Long__long__void(value);
  return $instance;
 }
 //Initialization from constructor 'Long(long)'.
 /** @nodts */
 $ctor__java_lang_Long__long__void(/** !$Long */ value) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Long_ = value;
 }
 //Factory method corresponding to constructor 'Long(String)'.
 /** @nodts @return {!Long} */
 static $create__java_lang_String(/** ?string */ s) {
  Long.$clinit();
  let $instance = new Long();
  $instance.$ctor__java_lang_Long__java_lang_String__void(s);
  return $instance;
 }
 //Initialization from constructor 'Long(String)'.
 /** @nodts */
 $ctor__java_lang_Long__java_lang_String__void(/** ?string */ s) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Long_ = Long.m_parseLong__java_lang_String__long(s);
 }
 /** @override @nodts @return {number} */
 m_byteValue__byte() {
  return $Primitives.narrowLongToByte(this.f_value__java_lang_Long_);
 }
 /** @nodts @return {number} */
 m_compareTo__java_lang_Long__int(/** Long */ b) {
  return Long.m_compare__long__long__int(this.f_value__java_lang_Long_, b.f_value__java_lang_Long_);
 }
 /** @override @nodts @return {number} */
 m_doubleValue__double() {
  return $Primitives.widenLongToDouble(this.f_value__java_lang_Long_);
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return Long.$isInstance(o) && vmbootstrap_$LongUtils.equals(/**@type {Long}*/ ($Casts.$to(o, Long)).f_value__java_lang_Long_, this.f_value__java_lang_Long_);
 }
 /** @override @nodts @return {number} */
 m_floatValue__float() {
  return $Primitives.widenLongToFloat(this.f_value__java_lang_Long_);
 }
 /** @override @return {number} */
 hashCode() {
  return Long.m_hashCode__long__int(this.f_value__java_lang_Long_);
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return $Primitives.narrowLongToInt(this.f_value__java_lang_Long_);
 }
 /** @override @nodts @return {!$Long} */
 m_longValue__long() {
  return this.f_value__java_lang_Long_;
 }
 /** @override @nodts @return {number} */
 m_shortValue__short() {
  return $Primitives.narrowLongToShort(this.f_value__java_lang_Long_);
 }
 /** @override @return {?string} */
 toString() {
  return Long.m_toString__long__java_lang_String(this.f_value__java_lang_Long_);
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** Long */ arg0) {
  return this.m_compareTo__java_lang_Long__int(/**@type {Long}*/ ($Casts.$to(arg0, Long)));
 }
 /** @nodts @return {Class<Long>} */
 static get f_TYPE__java_lang_Long() {
  return (Long.$clinit(), Long.$static_TYPE__java_lang_Long);
 }
 /** @nodts */
 static $clinit() {
  Long.$clinit = () =>{};
  Long.$loadModules();
  Number.$clinit();
  Long.$static_TYPE__java_lang_Long = Class.$get($$long);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Long;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  IntegralToString = goog.module.get('java.lang.IntegralToString$impl');
  BoxedValues = goog.module.get('java.lang.Long.BoxedValues$impl');
  Math = goog.module.get('java.lang.Math$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  vmbootstrap_$LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$long = goog.module.get('vmbootstrap.primitives.$long$impl');
 }
}
/**@const {!$Long} @nodts*/
Long.f_MAX_VALUE__java_lang_Long = $Long.fromBits(-1, 2147483647) /* 9223372036854775807 */;
/**@const {!$Long} @nodts*/
Long.f_MIN_VALUE__java_lang_Long = $Long.fromBits(0, -2147483648) /* -9223372036854775808 */;
/**@const {number} @nodts*/
Long.f_SIZE__java_lang_Long = 64;
/**@const {number} @nodts*/
Long.f_BYTES__java_lang_Long = 8;
/**@private {Class<Long>} @nodts*/
Long.$static_TYPE__java_lang_Long;
Comparable.$markImplementor(Long);
$Util.$setClassMetadata(Long, 'java.lang.Long');

exports = Long;

//# sourceMappingURL=Long.js.map
