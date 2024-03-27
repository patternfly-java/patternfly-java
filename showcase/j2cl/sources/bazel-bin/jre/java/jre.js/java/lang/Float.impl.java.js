goog.module('java.lang.Float$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const Number = goog.require('java.lang.Number$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let RealToString = goog.forwardDeclare('java.lang.RealToString$impl');
let Platform = goog.forwardDeclare('javaemul.internal.Platform$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$float = goog.forwardDeclare('vmbootstrap.primitives.$float$impl');

/**
 * @final
 * @implements {Comparable<Float>}
 */
class Float extends Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__java_lang_Float_ = 0;
 }
 /** @nodts @return {number} */
 static m_compare__float__float__int(/** number */ x, /** number */ y) {
  Float.$clinit();
  return Double.m_compare__double__double__int(x, y);
 }
 /** @nodts @return {number} */
 static m_floatToIntBits__float__int(/** number */ value) {
  Float.$clinit();
  if (Float.m_isNaN__float__boolean(value)) {
   return 2143289344;
  }
  return Float.m_floatToRawIntBits__float__int(value);
 }
 /** @nodts @return {number} */
 static m_floatToRawIntBits__float__int(/** number */ value) {
  return Platform.m_floatToRawIntBits__float__int(value);
 }
 /** @nodts @return {number} */
 static m_hashCode__float__int(/** number */ f) {
  Float.$clinit();
  return Platform.m_hashCode__float__int(f);
 }
 /** @nodts @return {number} */
 static m_intBitsToFloat__int__float(/** number */ bits) {
  Float.$clinit();
  return Platform.m_intBitsToFloat__int__float(bits);
 }
 /** @nodts @return {boolean} */
 static m_isFinite__float__boolean(/** number */ x) {
  Float.$clinit();
  return Double.m_isFinite__double__boolean(x);
 }
 /** @nodts @return {boolean} */
 static m_isInfinite__float__boolean(/** number */ x) {
  Float.$clinit();
  return Double.m_isInfinite__double__boolean(x);
 }
 /** @nodts @return {boolean} */
 static m_isNaN__float__boolean(/** number */ x) {
  Float.$clinit();
  return Double.m_isNaN__double__boolean(x);
 }
 /** @nodts @return {number} */
 static m_max__float__float__float(/** number */ a, /** number */ b) {
  Float.$clinit();
  return Math.max(a, b);
 }
 /** @nodts @return {number} */
 static m_min__float__float__float(/** number */ a, /** number */ b) {
  Float.$clinit();
  return Math.min(a, b);
 }
 /** @nodts @return {number} */
 static m_parseFloat__java_lang_String__float(/** ?string */ s) {
  Float.$clinit();
  let doubleValue = Number.m___parseAndValidateDouble__java_lang_String__double(s);
  if (doubleValue > Float.f_MAX_VALUE__java_lang_Float) {
   return Float.f_POSITIVE_INFINITY__java_lang_Float;
  } else if (doubleValue < - Float.f_MAX_VALUE__java_lang_Float) {
   return Float.f_NEGATIVE_INFINITY__java_lang_Float;
  }
  return doubleValue;
 }
 /** @nodts @return {number} */
 static m_sum__float__float__float(/** number */ a, /** number */ b) {
  Float.$clinit();
  return a + b;
 }
 /** @nodts @return {?string} */
 static m_toString__float__java_lang_String(/** number */ f) {
  Float.$clinit();
  return RealToString.m_floatToString__float__java_lang_String(f);
 }
 /** @nodts @return {Float} */
 static m_valueOf__float__java_lang_Float(/** number */ f) {
  Float.$clinit();
  return Float.$create__float(f);
 }
 /** @nodts @return {Float} */
 static m_valueOf__java_lang_String__java_lang_Float(/** ?string */ s) {
  Float.$clinit();
  return Float.$create__java_lang_String(s);
 }
 //Factory method corresponding to constructor 'Float(double)'.
 /** @nodts @return {!Float} */
 static $create__double(/** number */ value) {
  Float.$clinit();
  let $instance = new Float();
  $instance.$ctor__java_lang_Float__double__void(value);
  return $instance;
 }
 //Initialization from constructor 'Float(double)'.
 /** @nodts */
 $ctor__java_lang_Float__double__void(/** number */ value) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Float_ = value;
 }
 //Factory method corresponding to constructor 'Float(float)'.
 /** @nodts @return {!Float} */
 static $create__float(/** number */ value) {
  Float.$clinit();
  let $instance = new Float();
  $instance.$ctor__java_lang_Float__float__void(value);
  return $instance;
 }
 //Initialization from constructor 'Float(float)'.
 /** @nodts */
 $ctor__java_lang_Float__float__void(/** number */ value) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Float_ = value;
 }
 //Factory method corresponding to constructor 'Float(String)'.
 /** @nodts @return {!Float} */
 static $create__java_lang_String(/** ?string */ s) {
  Float.$clinit();
  let $instance = new Float();
  $instance.$ctor__java_lang_Float__java_lang_String__void(s);
  return $instance;
 }
 //Initialization from constructor 'Float(String)'.
 /** @nodts */
 $ctor__java_lang_Float__java_lang_String__void(/** ?string */ s) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Float_ = Float.m_parseFloat__java_lang_String__float(s);
 }
 /** @override @nodts @return {number} */
 m_byteValue__byte() {
  return $Primitives.narrowFloatToByte(this.f_value__java_lang_Float_);
 }
 /** @nodts @return {number} */
 m_compareTo__java_lang_Float__int(/** Float */ b) {
  return Float.m_compare__float__float__int(this.f_value__java_lang_Float_, b.f_value__java_lang_Float_);
 }
 /** @override @nodts @return {number} */
 m_doubleValue__double() {
  return this.f_value__java_lang_Float_;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return Platform.m_isEqual__java_lang_Float__java_lang_Object__boolean(this, o);
 }
 /** @override @nodts @return {number} */
 m_floatValue__float() {
  return this.f_value__java_lang_Float_;
 }
 /** @override @return {number} */
 hashCode() {
  return Float.m_hashCode__float__int(this.f_value__java_lang_Float_);
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return $Primitives.narrowFloatToInt(this.f_value__java_lang_Float_);
 }
 /** @nodts @return {boolean} */
 m_isInfinite__boolean() {
  return Float.m_isInfinite__float__boolean(this.f_value__java_lang_Float_);
 }
 /** @nodts @return {boolean} */
 m_isNaN__boolean() {
  return Float.m_isNaN__float__boolean(this.f_value__java_lang_Float_);
 }
 /** @override @nodts @return {!$Long} */
 m_longValue__long() {
  return $Primitives.narrowFloatToLong(this.f_value__java_lang_Float_);
 }
 /** @override @nodts @return {number} */
 m_shortValue__short() {
  return $Primitives.narrowFloatToShort(this.f_value__java_lang_Float_);
 }
 /** @override @return {?string} */
 toString() {
  return Float.m_toString__float__java_lang_String(this.f_value__java_lang_Float_);
 }
 /** @nodts @return {?number} */
 static m_toDouble__java_lang_Float__java_lang_Double(/** Float */ f) {
  Float.$clinit();
  return $Equality.$same(f, null) ? null : f.m_doubleValue__double();
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** Float */ arg0) {
  return this.m_compareTo__java_lang_Float__int(/**@type {Float}*/ ($Casts.$to(arg0, Float)));
 }
 /** @nodts @return {Class<Float>} */
 static get f_TYPE__java_lang_Float() {
  return (Float.$clinit(), Float.$static_TYPE__java_lang_Float);
 }
 /** @nodts */
 static $clinit() {
  Float.$clinit = () =>{};
  Float.$loadModules();
  Number.$clinit();
  Float.$static_TYPE__java_lang_Float = Class.$get($$float);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Float;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Double = goog.module.get('java.lang.Double$impl');
  RealToString = goog.module.get('java.lang.RealToString$impl');
  Platform = goog.module.get('javaemul.internal.Platform$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$float = goog.module.get('vmbootstrap.primitives.$float$impl');
 }
}
/**@const {number} @nodts*/
Float.f_MAX_VALUE__java_lang_Float = 3.4028234663852886E38;
/**@const {number} @nodts*/
Float.f_MIN_VALUE__java_lang_Float = 1.401298464324817E-45;
/**@const {number} @nodts*/
Float.f_MAX_EXPONENT__java_lang_Float = 127;
/**@const {number} @nodts*/
Float.f_MIN_EXPONENT__java_lang_Float = -126;
/**@const {number} @nodts*/
Float.f_MIN_NORMAL__java_lang_Float = 1.1754943508222875E-38;
/**@const {number} @nodts*/
Float.f_NaN__java_lang_Float = NaN;
/**@const {number} @nodts*/
Float.f_NEGATIVE_INFINITY__java_lang_Float = -Infinity;
/**@const {number} @nodts*/
Float.f_POSITIVE_INFINITY__java_lang_Float = Infinity;
/**@const {number} @nodts*/
Float.f_SIZE__java_lang_Float = 32;
/**@const {number} @nodts*/
Float.f_BYTES__java_lang_Float = 4;
/**@private {Class<Float>} @nodts*/
Float.$static_TYPE__java_lang_Float;
/**@const {!$Long} @nodts*/
Float.f_POWER_31_INT__java_lang_Float_ = $Long.fromBits(-2147483648, 0) /* 2147483648 */;
Comparable.$markImplementor(Float);
$Util.$setClassMetadata(Float, 'java.lang.Float');

exports = Float;

//# sourceMappingURL=Float.js.map
