goog.module('java.lang.Integer$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const Number = goog.require('java.lang.Number$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let BoxedValues = goog.forwardDeclare('java.lang.Integer.BoxedValues$impl');
let ReverseNibbles = goog.forwardDeclare('java.lang.Integer.ReverseNibbles$impl');
let IntegralToString = goog.forwardDeclare('java.lang.IntegralToString$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @final
 * @implements {Comparable<Integer>}
 */
class Integer extends Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__java_lang_Integer_ = 0;
 }
 /** @nodts @return {number} */
 static m_bitCount__int__int(/** number */ x) {
  Integer.$clinit();
  x = x - (x >> 1 & 1431655765) | 0;
  x = (x >> 2 & 858993459) + (x & 858993459) | 0;
  x = ((x >> 4) + x | 0) & 252645135;
  x = x + (x >> 8) | 0;
  x = x + (x >> 16) | 0;
  return x & 63;
 }
 /** @nodts @return {number} */
 static m_compare__int__int__int(/** number */ x, /** number */ y) {
  Integer.$clinit();
  if (x < y) {
   return - 1 | 0;
  } else if (x > y) {
   return 1;
  } else {
   return 0;
  }
 }
 /** @nodts @return {Integer} */
 static m_decode__java_lang_String__java_lang_Integer(/** ?string */ s) {
  Integer.$clinit();
  return Integer.m_valueOf__int__java_lang_Integer(Number.m___decodeAndValidateInt__java_lang_String__int__int__int(s, Integer.f_MIN_VALUE__java_lang_Integer, Integer.f_MAX_VALUE__java_lang_Integer));
 }
 /** @nodts @return {number} */
 static m_hashCode__int__int(/** number */ i) {
  Integer.$clinit();
  return i;
 }
 /** @nodts @return {number} */
 static m_highestOneBit__int__int(/** number */ i) {
  Integer.$clinit();
  if (i < 0) {
   return Integer.f_MIN_VALUE__java_lang_Integer;
  } else if (i == 0) {
   return 0;
  } else {
   let /** number */ rtn;
   for (rtn = 1073741824; (rtn & i) == 0; rtn >>= 1) {}
   return rtn;
  }
 }
 /** @nodts @return {number} */
 static m_lowestOneBit__int__int(/** number */ i) {
  Integer.$clinit();
  return i & (- i | 0);
 }
 /** @nodts @return {number} */
 static m_max__int__int__int(/** number */ a, /** number */ b) {
  Integer.$clinit();
  return Math.max(a, b);
 }
 /** @nodts @return {number} */
 static m_min__int__int__int(/** number */ a, /** number */ b) {
  Integer.$clinit();
  return Math.min(a, b);
 }
 /** @nodts @return {number} */
 static m_numberOfLeadingZeros__int__int(/** number */ i) {
  Integer.$clinit();
  if (i < 0) {
   return 0;
  } else if (i == 0) {
   return Integer.f_SIZE__java_lang_Integer;
  } else {
   let /** number */ y, /** number */ m, /** number */ n;
   y = - (i >> 16) | 0;
   m = y >> 16 & 16;
   n = 16 - m | 0;
   i = i >> m;
   y = i - 256 | 0;
   m = y >> 16 & 8;
   n = n + m | 0;
   i <<= m;
   y = i - 4096 | 0;
   m = y >> 16 & 4;
   n = n + m | 0;
   i <<= m;
   y = i - 16384 | 0;
   m = y >> 16 & 2;
   n = n + m | 0;
   i <<= m;
   y = i >> 14;
   m = y & ~(y >> 1);
   return n + 2 - m | 0;
  }
 }
 /** @nodts @return {number} */
 static m_numberOfTrailingZeros__int__int(/** number */ i) {
  Integer.$clinit();
  if (i == 0) {
   return Integer.f_SIZE__java_lang_Integer;
  } else {
   let rtn = 0;
   for (let r = 1; (r & i) == 0; r <<= 1) {
    rtn = rtn + 1 | 0;
   }
   return rtn;
  }
 }
 /** @nodts @return {number} */
 static m_parseInt__java_lang_String__int(/** ?string */ s) {
  Integer.$clinit();
  return Integer.m_parseInt__java_lang_String__int__int(s, 10);
 }
 /** @nodts @return {number} */
 static m_parseInt__java_lang_String__int__int(/** ?string */ s, /** number */ radix) {
  Integer.$clinit();
  return Number.m___parseAndValidateInt__java_lang_String__int__int__int__int(s, radix, Integer.f_MIN_VALUE__java_lang_Integer, Integer.f_MAX_VALUE__java_lang_Integer);
 }
 /** @nodts @return {number} */
 static m_reverse__int__int(/** number */ i) {
  Integer.$clinit();
  let nibbles = ReverseNibbles.f_reverseNibbles__java_lang_Integer_ReverseNibbles_;
  return nibbles[i >>> 28 | 0] | nibbles[i >> 24 & 15] << 4 | nibbles[i >> 20 & 15] << 8 | nibbles[i >> 16 & 15] << 12 | nibbles[i >> 12 & 15] << 16 | nibbles[i >> 8 & 15] << 20 | nibbles[i >> 4 & 15] << 24 | nibbles[i & 15] << 28;
 }
 /** @nodts @return {number} */
 static m_reverseBytes__int__int(/** number */ i) {
  Integer.$clinit();
  return (i & 255) << 24 | (i & 65280) << 8 | (i & 16711680) >> 8 | ((i & -16777216) >>> 24 | 0);
 }
 /** @nodts @return {number} */
 static m_rotateLeft__int__int__int(/** number */ i, /** number */ distance) {
  let /** number */ $value;
  Integer.$clinit();
  while (($value = distance, distance = distance - 1 | 0, $value) > 0) {
   i = i << 1 | (i < 0 ? 1 : 0);
  }
  return i;
 }
 /** @nodts @return {number} */
 static m_rotateRight__int__int__int(/** number */ i, /** number */ distance) {
  let /** number */ $value;
  Integer.$clinit();
  let ui = i & Integer.f_MAX_VALUE__java_lang_Integer;
  let carry = i < 0 ? 1073741824 : 0;
  while (($value = distance, distance = distance - 1 | 0, $value) > 0) {
   let nextcarry = ui & 1;
   ui = carry | ui >> 1;
   carry = nextcarry == 0 ? 0 : 1073741824;
  }
  if (carry != 0) {
   ui = ui | Integer.f_MIN_VALUE__java_lang_Integer;
  }
  return ui;
 }
 /** @nodts @return {number} */
 static m_signum__int__int(/** number */ i) {
  Integer.$clinit();
  if (i == 0) {
   return 0;
  } else if (i < 0) {
   return - 1 | 0;
  } else {
   return 1;
  }
 }
 /** @nodts @return {number} */
 static m_sum__int__int__int(/** number */ a, /** number */ b) {
  Integer.$clinit();
  return a + b | 0;
 }
 /** @nodts @return {?string} */
 static m_toBinaryString__int__java_lang_String(/** number */ i) {
  Integer.$clinit();
  return IntegralToString.m_intToBinaryString__int__java_lang_String(i);
 }
 /** @nodts @return {?string} */
 static m_toHexString__int__java_lang_String(/** number */ i) {
  Integer.$clinit();
  return IntegralToString.m_intToHexString__int__java_lang_String(i);
 }
 /** @nodts @return {?string} */
 static m_toOctalString__int__java_lang_String(/** number */ i) {
  Integer.$clinit();
  return IntegralToString.m_intToOctalString__int__java_lang_String(i);
 }
 /** @nodts @return {?string} */
 static m_toString__int__java_lang_String(/** number */ i) {
  Integer.$clinit();
  return IntegralToString.m_intToString__int__java_lang_String(i);
 }
 /** @nodts @return {?string} */
 static m_toString__int__int__java_lang_String(/** number */ i, /** number */ radix) {
  Integer.$clinit();
  return IntegralToString.m_intToString__int__int__java_lang_String(i, radix);
 }
 /** @nodts @return {Integer} */
 static m_valueOf__int__java_lang_Integer(/** number */ i) {
  Integer.$clinit();
  if (i > (- 129 | 0) && i < 128) {
   return BoxedValues.m_get__int__java_lang_Integer(i);
  }
  return Integer.$create__int(i);
 }
 /** @nodts @return {Integer} */
 static m_valueOf__java_lang_String__java_lang_Integer(/** ?string */ s) {
  Integer.$clinit();
  return Integer.m_valueOf__java_lang_String__int__java_lang_Integer(s, 10);
 }
 /** @nodts @return {Integer} */
 static m_valueOf__java_lang_String__int__java_lang_Integer(/** ?string */ s, /** number */ radix) {
  Integer.$clinit();
  return Integer.m_valueOf__int__java_lang_Integer(Integer.m_parseInt__java_lang_String__int__int(s, radix));
 }
 //Factory method corresponding to constructor 'Integer(int)'.
 /** @nodts @return {!Integer} */
 static $create__int(/** number */ value) {
  Integer.$clinit();
  let $instance = new Integer();
  $instance.$ctor__java_lang_Integer__int__void(value);
  return $instance;
 }
 //Initialization from constructor 'Integer(int)'.
 /** @nodts */
 $ctor__java_lang_Integer__int__void(/** number */ value) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Integer_ = value;
 }
 //Factory method corresponding to constructor 'Integer(String)'.
 /** @nodts @return {!Integer} */
 static $create__java_lang_String(/** ?string */ s) {
  Integer.$clinit();
  let $instance = new Integer();
  $instance.$ctor__java_lang_Integer__java_lang_String__void(s);
  return $instance;
 }
 //Initialization from constructor 'Integer(String)'.
 /** @nodts */
 $ctor__java_lang_Integer__java_lang_String__void(/** ?string */ s) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Integer_ = Integer.m_parseInt__java_lang_String__int(s);
 }
 /** @override @nodts @return {number} */
 m_byteValue__byte() {
  return $Primitives.narrowIntToByte(this.f_value__java_lang_Integer_);
 }
 /** @nodts @return {number} */
 m_compareTo__java_lang_Integer__int(/** Integer */ b) {
  return Integer.m_compare__int__int__int(this.f_value__java_lang_Integer_, b.f_value__java_lang_Integer_);
 }
 /** @override @nodts @return {number} */
 m_doubleValue__double() {
  return this.f_value__java_lang_Integer_;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return Integer.$isInstance(o) && /**@type {Integer}*/ ($Casts.$to(o, Integer)).f_value__java_lang_Integer_ == this.f_value__java_lang_Integer_;
 }
 /** @override @nodts @return {number} */
 m_floatValue__float() {
  return this.f_value__java_lang_Integer_;
 }
 /** @override @return {number} */
 hashCode() {
  return this.f_value__java_lang_Integer_;
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return this.f_value__java_lang_Integer_;
 }
 /** @override @nodts @return {!$Long} */
 m_longValue__long() {
  return $Primitives.widenIntToLong(this.f_value__java_lang_Integer_);
 }
 /** @override @nodts @return {number} */
 m_shortValue__short() {
  return $Primitives.narrowIntToShort(this.f_value__java_lang_Integer_);
 }
 /** @override @return {?string} */
 toString() {
  return Integer.m_toString__int__java_lang_String(this.f_value__java_lang_Integer_);
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** Integer */ arg0) {
  return this.m_compareTo__java_lang_Integer__int(/**@type {Integer}*/ ($Casts.$to(arg0, Integer)));
 }
 /** @nodts @return {Class<Integer>} */
 static get f_TYPE__java_lang_Integer() {
  return (Integer.$clinit(), Integer.$static_TYPE__java_lang_Integer);
 }
 /** @nodts */
 static $clinit() {
  Integer.$clinit = () =>{};
  Integer.$loadModules();
  Number.$clinit();
  Integer.$static_TYPE__java_lang_Integer = Class.$get($$int);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Integer;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  BoxedValues = goog.module.get('java.lang.Integer.BoxedValues$impl');
  ReverseNibbles = goog.module.get('java.lang.Integer.ReverseNibbles$impl');
  IntegralToString = goog.module.get('java.lang.IntegralToString$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number} @nodts*/
Integer.f_MAX_VALUE__java_lang_Integer = 2147483647;
/**@const {number} @nodts*/
Integer.f_MIN_VALUE__java_lang_Integer = -2147483648;
/**@const {number} @nodts*/
Integer.f_SIZE__java_lang_Integer = 32;
/**@const {number} @nodts*/
Integer.f_BYTES__java_lang_Integer = 4;
/**@private {Class<Integer>} @nodts*/
Integer.$static_TYPE__java_lang_Integer;
Comparable.$markImplementor(Integer);
$Util.$setClassMetadata(Integer, 'java.lang.Integer');

exports = Integer;

//# sourceMappingURL=Integer.js.map
