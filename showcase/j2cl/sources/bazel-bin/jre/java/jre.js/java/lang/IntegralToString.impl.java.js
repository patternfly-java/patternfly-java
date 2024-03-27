goog.module('java.lang.IntegralToString$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let vmbootstrap_$LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

/**
 * @final
 */
class IntegralToString extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!IntegralToString} */
 static $create__() {
  IntegralToString.$clinit();
  let $instance = new IntegralToString();
  $instance.$ctor__java_lang_IntegralToString__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_IntegralToString__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 static m_intToBinaryString__int__java_lang_String(/** number */ value) {
  IntegralToString.$clinit();
  return IntegralToString.m_intToUnsignedString__int__int__java_lang_String(value, 2);
 }
 /** @nodts @return {?string} */
 static m_intToHexString__int__java_lang_String(/** number */ value) {
  IntegralToString.$clinit();
  return IntegralToString.m_intToUnsignedString__int__int__java_lang_String(value, 16);
 }
 /** @nodts @return {?string} */
 static m_intToOctalString__int__java_lang_String(/** number */ value) {
  IntegralToString.$clinit();
  return IntegralToString.m_intToUnsignedString__int__int__java_lang_String(value, 8);
 }
 /** @nodts @return {?string} */
 static m_intToUnsignedString__int__int__java_lang_String(/** number */ value, /** number */ radix) {
  return IntegralToString.m_numberToString__double__int__java_lang_String(IntegralToString.toDoubleFromUnsignedInt(value), radix);
 }
 /** @nodts @return {?string} */
 static m_intToString__int__java_lang_String(/** number */ value) {
  IntegralToString.$clinit();
  return '' + value;
 }
 /** @nodts @return {?string} */
 static m_intToString__int__int__java_lang_String(/** number */ value, /** number */ radix) {
  IntegralToString.$clinit();
  return IntegralToString.m_numberToString__double__int__java_lang_String(value, radix);
 }
 // /** @return {number} */
 // native static toDoubleFromUnsignedInt(/** number */ value) 
 /** @nodts @return {?string} */
 static m_numberToString__double__int__java_lang_String(/** number */ value, /** number */ radix) {
  let number_1 = /**@type {Number}*/ (JsUtils.uncheckedCast(value));
  return number_1.toString(radix);
 }
 /** @nodts @return {?string} */
 static m_longToBinaryString__long__java_lang_String(/** !$Long */ value) {
  IntegralToString.$clinit();
  return IntegralToString.m_toPowerOfTwoUnsignedString__long__int__java_lang_String(value, 1);
 }
 /** @nodts @return {?string} */
 static m_longToHexString__long__java_lang_String(/** !$Long */ value) {
  IntegralToString.$clinit();
  return IntegralToString.m_toPowerOfTwoUnsignedString__long__int__java_lang_String(value, 4);
 }
 /** @nodts @return {?string} */
 static m_longToOctalString__long__java_lang_String(/** !$Long */ value) {
  IntegralToString.$clinit();
  return IntegralToString.m_toPowerOfTwoUnsignedString__long__int__java_lang_String(value, 3);
 }
 /** @nodts @return {?string} */
 static m_toPowerOfTwoUnsignedString__long__int__java_lang_String(/** !$Long */ value, /** number */ shift) {
  let radix = 1 << shift;
  let highBits = $LongUtils.getHighBits(value);
  if (highBits == 0) {
   return IntegralToString.m_intToUnsignedString__int__int__java_lang_String($LongUtils.getLowBits(value), radix);
  }
  let mask = radix - 1 | 0;
  let bufSize = $Primitives.coerceDivision(64 / shift) + 1 | 0;
  let buf = /**@type {!Array<number>}*/ ($Arrays.$create([bufSize], $$char));
  let pos = bufSize;
  do {
   $Arrays.$set(buf, pos = pos - 1 | 0, Character.m_forDigit__int__char($Primitives.narrowLongToInt(value) & mask));
   value = vmbootstrap_$LongUtils.rightShiftUnsigned(value, shift);
  } while (vmbootstrap_$LongUtils.notEquals(value, $Long.fromInt(0)));
  return j_l_String.m_valueOf__arrayOf_char__int__int__java_lang_String(buf, pos, bufSize - pos | 0);
 }
 /** @nodts @return {?string} */
 static m_longToString__long__java_lang_String(/** !$Long */ value) {
  IntegralToString.$clinit();
  return '' + value;
 }
 /** @nodts @return {?string} */
 static m_longToString__long__int__java_lang_String(/** !$Long */ value, /** number */ intRadix) {
  IntegralToString.$clinit();
  return $LongUtils.toString(value, intRadix);
 }
 /** @nodts */
 static $clinit() {
  IntegralToString.$clinit = () =>{};
  IntegralToString.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IntegralToString;
 }
 
 /** @nodts */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  vmbootstrap_$LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
}
$Util.$setClassMetadata(IntegralToString, 'java.lang.IntegralToString');

/* NATIVE.JS EPILOG */

const java_lang_IntegralToString = IntegralToString;

/**
 * @param {number} value
 * @return {number}
 */
java_lang_IntegralToString.toDoubleFromUnsignedInt = function(value) {
  // Might return a number that is larger than int32
  return (value >>> 0);
};


exports = IntegralToString;

//# sourceMappingURL=IntegralToString.js.map
