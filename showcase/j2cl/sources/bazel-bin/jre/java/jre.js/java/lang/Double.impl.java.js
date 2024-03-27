goog.module('java.lang.Double$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const Number = goog.require('java.lang.Number$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let RealToString = goog.forwardDeclare('java.lang.RealToString$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Platform = goog.forwardDeclare('javaemul.internal.Platform$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

/**
 * @abstract
 * @final
 * @implements {Comparable<?number>}
 */
class Double extends Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__java_lang_Double_ = 0;
 }
 /** @nodts @return {number} */
 static m_compare__double__double__int(/** number */ x, /** number */ y) {
  Double.$clinit();
  return Platform.m_compareDouble__double__double__int(x, y);
 }
 /** @nodts @return {!$Long} */
 static m_doubleToLongBits__double__long(/** number */ value) {
  Double.$clinit();
  if (Double.m_isNaN__double__boolean(value)) {
   return $Long.fromBits(0, 2146959360) /* 9221120237041090560 */;
  }
  return Double.m_doubleToRawLongBits__double__long(value);
 }
 /** @nodts @return {!$Long} */
 static m_doubleToRawLongBits__double__long(/** number */ value) {
  Double.$clinit();
  return Platform.m_doubleToRawLongBits__double__long(value);
 }
 /** @nodts @return {number} */
 static m_hashCode__double__int(/** number */ d) {
  Double.$clinit();
  return Platform.m_hashCode__double__int(d);
 }
 /** @nodts @return {boolean} */
 static m_isFinite__double__boolean(/** number */ x) {
  Double.$clinit();
  return isFinite(x);
 }
 /** @nodts @return {boolean} */
 static m_isInfinite__double__boolean(/** number */ x) {
  Double.$clinit();
  return !Double.m_isNaN__double__boolean(x) && !Double.m_isFinite__double__boolean(x);
 }
 /** @nodts @return {boolean} */
 static m_isNaN__double__boolean(/** number */ x) {
  Double.$clinit();
  return isNaN(x);
 }
 /** @nodts @return {number} */
 static m_longBitsToDouble__long__double(/** !$Long */ bits) {
  Double.$clinit();
  return Platform.m_longBitsToDouble__long__double(bits);
 }
 /** @nodts @return {number} */
 static m_max__double__double__double(/** number */ a, /** number */ b) {
  Double.$clinit();
  return Math.max(a, b);
 }
 /** @nodts @return {number} */
 static m_min__double__double__double(/** number */ a, /** number */ b) {
  Double.$clinit();
  return Math.min(a, b);
 }
 /** @nodts @return {number} */
 static m_parseDouble__java_lang_String__double(/** ?string */ s) {
  Double.$clinit();
  return Number.m___parseAndValidateDouble__java_lang_String__double(s);
 }
 /** @nodts @return {number} */
 static m_sum__double__double__double(/** number */ a, /** number */ b) {
  Double.$clinit();
  return a + b;
 }
 /** @nodts @return {?string} */
 static m_toString__double__java_lang_String(/** number */ d) {
  Double.$clinit();
  return RealToString.m_doubleToString__double__java_lang_String(d);
 }
 /** @nodts @return {?number} */
 static m_valueOf__double__java_lang_Double(/** number */ d) {
  Double.$clinit();
  return Double.$create__double(d);
 }
 /** @nodts @return {?number} */
 static m_valueOf__java_lang_String__java_lang_Double(/** ?string */ s) {
  Double.$clinit();
  return Double.$create__java_lang_String(s);
 }
 /** @nodts @return {number} */
 static $create__double(/** number */ value) {
  Double.$clinit();
  let /** ?number */ $thisArg;
  $thisArg = value;
  return $thisArg;
 }
 /** @nodts @return {number} */
 static $create__java_lang_String(/** ?string */ s) {
  Double.$clinit();
  let /** ?number */ $thisArg;
  $thisArg = Double.m_parseDouble__java_lang_String__double(s);
  return $thisArg;
 }
 /** @nodts @return {number} */
 static m_byteValue__java_lang_Double__byte(/** number */ $thisArg) {
  Double.$clinit();
  return $Primitives.narrowDoubleToByte(Double.m_doubleValue__java_lang_Double__double($thisArg));
 }
 /** @nodts @return {number} */
 static m_compareTo__java_lang_Double__java_lang_Double__int(/** number */ $thisArg, /** ?number */ b) {
  Double.$clinit();
  return Double.m_compare__double__double__int(Double.m_doubleValue__java_lang_Double__double($thisArg), Double.m_doubleValue__java_lang_Double__double(b));
 }
 /** @nodts @return {number} */
 static m_doubleValue__java_lang_Double__double(/** number */ $thisArg) {
  Double.$clinit();
  return InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_equals__java_lang_Double__java_lang_Object__boolean(/** number */ $thisArg, /** * */ o) {
  Double.$clinit();
  return Platform.m_isEqual__java_lang_Object__java_lang_Object__boolean($thisArg, o);
 }
 /** @nodts @return {number} */
 static m_floatValue__java_lang_Double__float(/** number */ $thisArg) {
  Double.$clinit();
  return Double.m_doubleValue__java_lang_Double__double($thisArg);
 }
 /** @nodts @return {number} */
 static m_hashCode__java_lang_Double__int(/** number */ $thisArg) {
  Double.$clinit();
  return Double.m_hashCode__double__int(Double.m_doubleValue__java_lang_Double__double($thisArg));
 }
 /** @nodts @return {number} */
 static m_intValue__java_lang_Double__int(/** number */ $thisArg) {
  Double.$clinit();
  return $Primitives.narrowDoubleToInt(Double.m_doubleValue__java_lang_Double__double($thisArg));
 }
 /** @nodts @return {boolean} */
 static m_isInfinite__java_lang_Double__boolean(/** number */ $thisArg) {
  Double.$clinit();
  return Double.m_isInfinite__double__boolean(Double.m_doubleValue__java_lang_Double__double($thisArg));
 }
 /** @nodts @return {boolean} */
 static m_isNaN__java_lang_Double__boolean(/** number */ $thisArg) {
  Double.$clinit();
  return Double.m_isNaN__double__boolean(Double.m_doubleValue__java_lang_Double__double($thisArg));
 }
 /** @nodts @return {!$Long} */
 static m_longValue__java_lang_Double__long(/** number */ $thisArg) {
  Double.$clinit();
  return $Primitives.narrowDoubleToLong(Double.m_doubleValue__java_lang_Double__double($thisArg));
 }
 /** @nodts @return {number} */
 static m_shortValue__java_lang_Double__short(/** number */ $thisArg) {
  Double.$clinit();
  return $Primitives.narrowDoubleToShort(Double.m_doubleValue__java_lang_Double__double($thisArg));
 }
 /** @nodts @return {?string} */
 static m_toString__java_lang_Double__java_lang_String(/** number */ $thisArg) {
  Double.$clinit();
  return Double.m_toString__double__java_lang_String(Double.m_doubleValue__java_lang_Double__double($thisArg));
 }
 /** @return {boolean} */
 static $isInstance(/** * */ instance) {
  Double.$clinit();
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('number', typeof(instance));
 }
 /** @final @nodts @return {number} */
 static m_compareTo__java_lang_Object__int(/** number */ $thisArg, /** ?number */ arg0) {
  Double.$clinit();
  return Double.m_compareTo__java_lang_Double__java_lang_Double__int($thisArg, /**@type {?number}*/ ($Casts.$to(arg0, Double)));
 }
 /** @nodts @return {Class<?number>} */
 static get f_TYPE__java_lang_Double() {
  return (Double.$clinit(), Double.$static_TYPE__java_lang_Double);
 }
 /** @nodts */
 static $clinit() {
  Double.$clinit = () =>{};
  Double.$loadModules();
  Number.$clinit();
  Double.$static_TYPE__java_lang_Double = Class.$get($$double);
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  RealToString = goog.module.get('java.lang.RealToString$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Platform = goog.module.get('javaemul.internal.Platform$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
/**@const {number} @nodts*/
Double.f_MAX_VALUE__java_lang_Double = 1.7976931348623157E308;
/**@const {number} @nodts*/
Double.f_MIN_VALUE__java_lang_Double = 4.9E-324;
/**@const {number} @nodts*/
Double.f_MIN_NORMAL__java_lang_Double = 2.2250738585072014E-308;
/**@const {number} @nodts*/
Double.f_MAX_EXPONENT__java_lang_Double = 1023;
/**@const {number} @nodts*/
Double.f_MIN_EXPONENT__java_lang_Double = -1022;
/**@const {number} @nodts*/
Double.f_NaN__java_lang_Double = NaN;
/**@const {number} @nodts*/
Double.f_NEGATIVE_INFINITY__java_lang_Double = -Infinity;
/**@const {number} @nodts*/
Double.f_POSITIVE_INFINITY__java_lang_Double = Infinity;
/**@const {number} @nodts*/
Double.f_SIZE__java_lang_Double = 64;
/**@const {number} @nodts*/
Double.f_BYTES__java_lang_Double = 8;
/**@private {Class<?number>} @nodts*/
Double.$static_TYPE__java_lang_Double;
Comparable.$markImplementor(Double);
$Util.$setClassMetadata(Double, 'java.lang.Double');

exports = Double;

//# sourceMappingURL=Double.js.map
