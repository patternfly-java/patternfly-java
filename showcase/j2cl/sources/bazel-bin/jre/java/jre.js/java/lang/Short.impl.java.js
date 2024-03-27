goog.module('java.lang.Short$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const Number = goog.require('java.lang.Number$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let BoxedValues = goog.forwardDeclare('java.lang.Short.BoxedValues$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$short = goog.forwardDeclare('vmbootstrap.primitives.$short$impl');

/**
 * @final
 * @implements {Comparable<Short>}
 */
class Short extends Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__java_lang_Short_ = 0;
 }
 /** @nodts @return {number} */
 static m_compare__short__short__int(/** number */ x, /** number */ y) {
  Short.$clinit();
  return x - y | 0;
 }
 /** @nodts @return {Short} */
 static m_decode__java_lang_String__java_lang_Short(/** ?string */ s) {
  Short.$clinit();
  return Short.m_valueOf__short__java_lang_Short($Primitives.narrowIntToShort(Number.m___decodeAndValidateInt__java_lang_String__int__int__int(s, Short.f_MIN_VALUE__java_lang_Short, Short.f_MAX_VALUE__java_lang_Short)));
 }
 /** @nodts @return {number} */
 static m_hashCode__short__int(/** number */ s) {
  Short.$clinit();
  return s;
 }
 /** @nodts @return {number} */
 static m_parseShort__java_lang_String__short(/** ?string */ s) {
  Short.$clinit();
  return Short.m_parseShort__java_lang_String__int__short(s, 10);
 }
 /** @nodts @return {number} */
 static m_parseShort__java_lang_String__int__short(/** ?string */ s, /** number */ radix) {
  Short.$clinit();
  return $Primitives.narrowIntToShort(Number.m___parseAndValidateInt__java_lang_String__int__int__int__int(s, radix, Short.f_MIN_VALUE__java_lang_Short, Short.f_MAX_VALUE__java_lang_Short));
 }
 /** @nodts @return {number} */
 static m_reverseBytes__short__short(/** number */ s) {
  Short.$clinit();
  return $Primitives.narrowIntToShort((s & 255) << 8 | (s & 65280) >> 8);
 }
 /** @nodts @return {?string} */
 static m_toString__short__java_lang_String(/** number */ b) {
  Short.$clinit();
  return j_l_String.m_valueOf__int__java_lang_String(b);
 }
 /** @nodts @return {Short} */
 static m_valueOf__short__java_lang_Short(/** number */ s) {
  Short.$clinit();
  if (s > (- 129 | 0) && s < 128) {
   return BoxedValues.m_get__short__java_lang_Short(s);
  }
  return Short.$create__short(s);
 }
 /** @nodts @return {Short} */
 static m_valueOf__java_lang_String__java_lang_Short(/** ?string */ s) {
  Short.$clinit();
  return Short.m_valueOf__java_lang_String__int__java_lang_Short(s, 10);
 }
 /** @nodts @return {Short} */
 static m_valueOf__java_lang_String__int__java_lang_Short(/** ?string */ s, /** number */ radix) {
  Short.$clinit();
  return Short.m_valueOf__short__java_lang_Short(Short.m_parseShort__java_lang_String__int__short(s, radix));
 }
 //Factory method corresponding to constructor 'Short(short)'.
 /** @nodts @return {!Short} */
 static $create__short(/** number */ value) {
  Short.$clinit();
  let $instance = new Short();
  $instance.$ctor__java_lang_Short__short__void(value);
  return $instance;
 }
 //Initialization from constructor 'Short(short)'.
 /** @nodts */
 $ctor__java_lang_Short__short__void(/** number */ value) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Short_ = value;
 }
 //Factory method corresponding to constructor 'Short(String)'.
 /** @nodts @return {!Short} */
 static $create__java_lang_String(/** ?string */ s) {
  Short.$clinit();
  let $instance = new Short();
  $instance.$ctor__java_lang_Short__java_lang_String__void(s);
  return $instance;
 }
 //Initialization from constructor 'Short(String)'.
 /** @nodts */
 $ctor__java_lang_Short__java_lang_String__void(/** ?string */ s) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Short_ = Short.m_parseShort__java_lang_String__short(s);
 }
 /** @override @nodts @return {number} */
 m_byteValue__byte() {
  return $Primitives.narrowShortToByte(this.f_value__java_lang_Short_);
 }
 /** @nodts @return {number} */
 m_compareTo__java_lang_Short__int(/** Short */ b) {
  return Short.m_compare__short__short__int(this.f_value__java_lang_Short_, b.f_value__java_lang_Short_);
 }
 /** @override @nodts @return {number} */
 m_doubleValue__double() {
  return this.f_value__java_lang_Short_;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return Short.$isInstance(o) && /**@type {Short}*/ ($Casts.$to(o, Short)).f_value__java_lang_Short_ == this.f_value__java_lang_Short_;
 }
 /** @override @nodts @return {number} */
 m_floatValue__float() {
  return this.f_value__java_lang_Short_;
 }
 /** @override @return {number} */
 hashCode() {
  return Short.m_hashCode__short__int(this.f_value__java_lang_Short_);
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return this.f_value__java_lang_Short_;
 }
 /** @override @nodts @return {!$Long} */
 m_longValue__long() {
  return $Primitives.widenShortToLong(this.f_value__java_lang_Short_);
 }
 /** @override @nodts @return {number} */
 m_shortValue__short() {
  return this.f_value__java_lang_Short_;
 }
 /** @override @return {?string} */
 toString() {
  return Short.m_toString__short__java_lang_String(this.f_value__java_lang_Short_);
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** Short */ arg0) {
  return this.m_compareTo__java_lang_Short__int(/**@type {Short}*/ ($Casts.$to(arg0, Short)));
 }
 /** @nodts @return {Class<Short>} */
 static get f_TYPE__java_lang_Short() {
  return (Short.$clinit(), Short.$static_TYPE__java_lang_Short);
 }
 /** @nodts */
 static $clinit() {
  Short.$clinit = () =>{};
  Short.$loadModules();
  Number.$clinit();
  Short.$static_TYPE__java_lang_Short = Class.$get($$short);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Short;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  BoxedValues = goog.module.get('java.lang.Short.BoxedValues$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$short = goog.module.get('vmbootstrap.primitives.$short$impl');
 }
}
/**@const {number} @nodts*/
Short.f_MIN_VALUE__java_lang_Short = -32768;
/**@const {number} @nodts*/
Short.f_MAX_VALUE__java_lang_Short = 32767;
/**@const {number} @nodts*/
Short.f_SIZE__java_lang_Short = 16;
/**@const {number} @nodts*/
Short.f_BYTES__java_lang_Short = 2;
/**@private {Class<Short>} @nodts*/
Short.$static_TYPE__java_lang_Short;
Comparable.$markImplementor(Short);
$Util.$setClassMetadata(Short, 'java.lang.Short');

exports = Short;

//# sourceMappingURL=Short.js.map
