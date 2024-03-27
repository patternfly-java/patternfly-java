goog.module('java.lang.Byte$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const Number = goog.require('java.lang.Number$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BoxedValues = goog.forwardDeclare('java.lang.Byte.BoxedValues$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');

/**
 * @final
 * @implements {Comparable<Byte>}
 */
class Byte extends Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__java_lang_Byte_ = 0;
 }
 /** @nodts @return {number} */
 static m_compare__byte__byte__int(/** number */ x, /** number */ y) {
  Byte.$clinit();
  return x - y | 0;
 }
 /** @nodts @return {Byte} */
 static m_decode__java_lang_String__java_lang_Byte(/** ?string */ s) {
  Byte.$clinit();
  return Byte.m_valueOf__byte__java_lang_Byte($Primitives.narrowIntToByte(Number.m___decodeAndValidateInt__java_lang_String__int__int__int(s, Byte.f_MIN_VALUE__java_lang_Byte, Byte.f_MAX_VALUE__java_lang_Byte)));
 }
 /** @nodts @return {number} */
 static m_hashCode__byte__int(/** number */ b) {
  Byte.$clinit();
  return b;
 }
 /** @nodts @return {number} */
 static m_parseByte__java_lang_String__byte(/** ?string */ s) {
  Byte.$clinit();
  return Byte.m_parseByte__java_lang_String__int__byte(s, 10);
 }
 /** @nodts @return {number} */
 static m_parseByte__java_lang_String__int__byte(/** ?string */ s, /** number */ radix) {
  Byte.$clinit();
  return $Primitives.narrowIntToByte(Number.m___parseAndValidateInt__java_lang_String__int__int__int__int(s, radix, Byte.f_MIN_VALUE__java_lang_Byte, Byte.f_MAX_VALUE__java_lang_Byte));
 }
 /** @nodts @return {?string} */
 static m_toString__byte__java_lang_String(/** number */ b) {
  Byte.$clinit();
  return j_l_String.m_valueOf__int__java_lang_String(b);
 }
 /** @nodts @return {Byte} */
 static m_valueOf__byte__java_lang_Byte(/** number */ b) {
  Byte.$clinit();
  return BoxedValues.m_get__byte__java_lang_Byte(b);
 }
 /** @nodts @return {Byte} */
 static m_valueOf__java_lang_String__java_lang_Byte(/** ?string */ s) {
  Byte.$clinit();
  return Byte.m_valueOf__java_lang_String__int__java_lang_Byte(s, 10);
 }
 /** @nodts @return {Byte} */
 static m_valueOf__java_lang_String__int__java_lang_Byte(/** ?string */ s, /** number */ radix) {
  Byte.$clinit();
  return Byte.m_valueOf__byte__java_lang_Byte(Byte.m_parseByte__java_lang_String__int__byte(s, radix));
 }
 //Factory method corresponding to constructor 'Byte(byte)'.
 /** @nodts @return {!Byte} */
 static $create__byte(/** number */ value) {
  Byte.$clinit();
  let $instance = new Byte();
  $instance.$ctor__java_lang_Byte__byte__void(value);
  return $instance;
 }
 //Initialization from constructor 'Byte(byte)'.
 /** @nodts */
 $ctor__java_lang_Byte__byte__void(/** number */ value) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Byte_ = value;
 }
 //Factory method corresponding to constructor 'Byte(String)'.
 /** @nodts @return {!Byte} */
 static $create__java_lang_String(/** ?string */ s) {
  Byte.$clinit();
  let $instance = new Byte();
  $instance.$ctor__java_lang_Byte__java_lang_String__void(s);
  return $instance;
 }
 //Initialization from constructor 'Byte(String)'.
 /** @nodts */
 $ctor__java_lang_Byte__java_lang_String__void(/** ?string */ s) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_lang_Byte_ = Byte.m_parseByte__java_lang_String__byte(s);
 }
 /** @override @nodts @return {number} */
 m_byteValue__byte() {
  return this.f_value__java_lang_Byte_;
 }
 /** @nodts @return {number} */
 m_compareTo__java_lang_Byte__int(/** Byte */ b) {
  return Byte.m_compare__byte__byte__int(this.f_value__java_lang_Byte_, b.f_value__java_lang_Byte_);
 }
 /** @override @nodts @return {number} */
 m_doubleValue__double() {
  return this.f_value__java_lang_Byte_;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return Byte.$isInstance(o) && /**@type {Byte}*/ ($Casts.$to(o, Byte)).f_value__java_lang_Byte_ == this.f_value__java_lang_Byte_;
 }
 /** @override @nodts @return {number} */
 m_floatValue__float() {
  return this.f_value__java_lang_Byte_;
 }
 /** @override @return {number} */
 hashCode() {
  return Byte.m_hashCode__byte__int(this.f_value__java_lang_Byte_);
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return this.f_value__java_lang_Byte_;
 }
 /** @override @nodts @return {!$Long} */
 m_longValue__long() {
  return $Primitives.widenByteToLong(this.f_value__java_lang_Byte_);
 }
 /** @override @nodts @return {number} */
 m_shortValue__short() {
  return this.f_value__java_lang_Byte_;
 }
 /** @override @return {?string} */
 toString() {
  return Byte.m_toString__byte__java_lang_String(this.f_value__java_lang_Byte_);
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** Byte */ arg0) {
  return this.m_compareTo__java_lang_Byte__int(/**@type {Byte}*/ ($Casts.$to(arg0, Byte)));
 }
 /** @nodts @return {Class<Byte>} */
 static get f_TYPE__java_lang_Byte() {
  return (Byte.$clinit(), Byte.$static_TYPE__java_lang_Byte);
 }
 /** @nodts */
 static $clinit() {
  Byte.$clinit = () =>{};
  Byte.$loadModules();
  Number.$clinit();
  Byte.$static_TYPE__java_lang_Byte = Class.$get($$byte);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Byte;
 }
 
 /** @nodts */
 static $loadModules() {
  BoxedValues = goog.module.get('java.lang.Byte.BoxedValues$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
 }
}
/**@const {number} @nodts*/
Byte.f_MIN_VALUE__java_lang_Byte = -128;
/**@const {number} @nodts*/
Byte.f_MAX_VALUE__java_lang_Byte = 127;
/**@const {number} @nodts*/
Byte.f_SIZE__java_lang_Byte = 8;
/**@const {number} @nodts*/
Byte.f_BYTES__java_lang_Byte = 1;
/**@private {Class<Byte>} @nodts*/
Byte.$static_TYPE__java_lang_Byte;
Comparable.$markImplementor(Byte);
$Util.$setClassMetadata(Byte, 'java.lang.Byte');

exports = Byte;

//# sourceMappingURL=Byte.js.map
