goog.module('java.lang.Number$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let $Overlay = goog.forwardDeclare('java.lang.Number.JavaLangNumber.$Overlay$impl');
let ____Decode = goog.forwardDeclare('java.lang.Number.__Decode$impl');
let ____ParseLong = goog.forwardDeclare('java.lang.Number.__ParseLong$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
 * @implements {Serializable}
 */
class Number extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_lang_Number__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @return {boolean} */
 static $isInstance(/** * */ instance) {
  Number.$clinit();
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('number', typeof(instance)) || $Overlay.$isInstance(instance);
 }
 /** @nodts @return {number} */
 static m___decodeAndValidateInt__java_lang_String__int__int__int(/** ?string */ s, /** number */ lowerBound, /** number */ upperBound) {
  Number.$clinit();
  let decode = Number.m___decodeNumberString__java_lang_String__java_lang_Number___Decode(s);
  return Number.m___parseAndValidateInt__java_lang_String__int__int__int__int(decode.f_payload__java_lang_Number___Decode, decode.f_radix__java_lang_Number___Decode, lowerBound, upperBound);
 }
 /** @nodts @return {____Decode} */
 static m___decodeNumberString__java_lang_String__java_lang_Number___Decode(/** ?string */ s) {
  Number.$clinit();
  let /** boolean */ negative;
  if (j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(s, '-')) {
   negative = true;
   s = j_l_String.m_substring__java_lang_String__int__java_lang_String(s, 1);
  } else {
   negative = false;
   if (j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(s, '+')) {
    s = j_l_String.m_substring__java_lang_String__int__java_lang_String(s, 1);
   }
  }
  let /** number */ radix;
  if (j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(s, '0x') || j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(s, '0X')) {
   s = j_l_String.m_substring__java_lang_String__int__java_lang_String(s, 2);
   radix = 16;
  } else if (j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(s, '#')) {
   s = j_l_String.m_substring__java_lang_String__int__java_lang_String(s, 1);
   radix = 16;
  } else if (j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(s, '0')) {
   radix = 8;
  } else {
   radix = 10;
  }
  if (negative) {
   s = '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(s);
  }
  return ____Decode.$create__int__java_lang_String(radix, s);
 }
 /** @nodts @return {number} */
 static m___parseAndValidateDouble__java_lang_String__double(/** ?string */ s) {
  Number.$clinit();
  if (!Number.m___isValidDouble__java_lang_String__boolean(s)) {
   throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(s));
  }
  return parseFloat(s);
 }
 /** @nodts @return {number} */
 static m___parseAndValidateInt__java_lang_String__int__int__int__int(/** ?string */ s, /** number */ radix, /** number */ lowerBound, /** number */ upperBound) {
  Number.$clinit();
  if ($Equality.$same(s, null)) {
   throw $Exceptions.toJs(NumberFormatException.m_forNullInputString__java_lang_NumberFormatException());
  }
  if (radix < Character.f_MIN_RADIX__java_lang_Character || radix > Character.f_MAX_RADIX__java_lang_Character) {
   throw $Exceptions.toJs(NumberFormatException.m_forRadix__int__java_lang_NumberFormatException(radix));
  }
  let length = j_l_String.m_length__java_lang_String__int(s);
  let startIndex = length > 0 && (j_l_String.m_charAt__java_lang_String__int__char(s, 0) == 45 /* '-' */ || j_l_String.m_charAt__java_lang_String__int__char(s, 0) == 43 /* '+' */) ? 1 : 0;
  for (let i = startIndex; i < length; i = i + 1 | 0) {
   if (Character.m_digit__char__int__int(j_l_String.m_charAt__java_lang_String__int__char(s, i), radix) == (- 1 | 0)) {
    throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(s));
   }
  }
  let toReturn = parseInt(s, radix);
  let isTooLow = toReturn < lowerBound;
  if (Double.m_isNaN__double__boolean(toReturn)) {
   throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(s));
  } else if (isTooLow || toReturn > upperBound) {
   throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(s));
  }
  return toReturn;
 }
 /** @nodts @return {!$Long} */
 static m___parseAndValidateLong__java_lang_String__int__long(/** ?string */ s, /** number */ radix) {
  Number.$clinit();
  if ($Equality.$same(s, null)) {
   throw $Exceptions.toJs(NumberFormatException.m_forNullInputString__java_lang_NumberFormatException());
  }
  if (radix < Character.f_MIN_RADIX__java_lang_Character || radix > Character.f_MAX_RADIX__java_lang_Character) {
   throw $Exceptions.toJs(NumberFormatException.m_forRadix__int__java_lang_NumberFormatException(radix));
  }
  let orig = s;
  let length = j_l_String.m_length__java_lang_String__int(s);
  let negative = false;
  if (length > 0) {
   let c = j_l_String.m_charAt__java_lang_String__int__char(s, 0);
   if (c == 45 /* '-' */ || c == 43 /* '+' */) {
    s = j_l_String.m_substring__java_lang_String__int__java_lang_String(s, 1);
    length = length - 1 | 0;
    negative = c == 45 /* '-' */;
   }
  }
  if (length == 0) {
   throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(orig));
  }
  while (j_l_String.m_length__java_lang_String__int(s) > 0 && j_l_String.m_charAt__java_lang_String__int__char(s, 0) == 48 /* '0' */) {
   s = j_l_String.m_substring__java_lang_String__int__java_lang_String(s, 1);
   length = length - 1 | 0;
  }
  if (length > ____ParseLong.f_maxLengthForRadix__java_lang_Number___ParseLong_[radix]) {
   throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(orig));
  }
  for (let i = 0; i < length; i = i + 1 | 0) {
   if (Character.m_digit__char__int__int(j_l_String.m_charAt__java_lang_String__int__char(s, i), radix) == (- 1 | 0)) {
    throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(orig));
   }
  }
  let toReturn = $Long.fromInt(0);
  let maxDigits = ____ParseLong.f_maxDigitsForRadix__java_lang_Number___ParseLong_[radix];
  let radixPower = $Primitives.widenIntToLong(____ParseLong.f_maxDigitsRadixPower__java_lang_Number___ParseLong_[radix]);
  let minValue = $LongUtils.negate(____ParseLong.f_maxValueForRadix__java_lang_Number___ParseLong_[radix]);
  let firstTime = true;
  let head = $Primitives.coerceDivision(length % maxDigits);
  if (head > 0) {
   toReturn = $Primitives.widenIntToLong(- parseInt(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(s, 0, head), radix) | 0);
   s = j_l_String.m_substring__java_lang_String__int__java_lang_String(s, head);
   length = length - head | 0;
   firstTime = false;
  }
  while (length >= maxDigits) {
   head = parseInt(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(s, 0, maxDigits), radix);
   s = j_l_String.m_substring__java_lang_String__int__java_lang_String(s, maxDigits);
   length = length - maxDigits | 0;
   if (!firstTime) {
    if ($LongUtils.less(toReturn, minValue)) {
     throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(orig));
    }
    toReturn = $LongUtils.times(toReturn, radixPower);
   } else {
    firstTime = false;
   }
   toReturn = $LongUtils.minus(toReturn, $Primitives.widenIntToLong(head));
  }
  if ($LongUtils.greater(toReturn, $Long.fromInt(0))) {
   throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(orig));
  }
  if (!negative) {
   toReturn = $LongUtils.negate(toReturn);
   if ($LongUtils.less(toReturn, $Long.fromInt(0))) {
    throw $Exceptions.toJs(NumberFormatException.m_forInputString__java_lang_String__java_lang_NumberFormatException(orig));
   }
  }
  return toReturn;
 }
 /** @nodts @return {boolean} */
 static m___isValidDouble__java_lang_String__boolean(/** ?string */ str) {
  if ($Equality.$same(Number.f_floatRegex__java_lang_Number_, null)) {
   Number.f_floatRegex__java_lang_Number_ = new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$');
  }
  return Number.f_floatRegex__java_lang_Number_.test(str);
 }
 /** @nodts @return {number} */
 m_byteValue__byte() {
  return $Primitives.narrowIntToByte(this.m_intValue__int());
 }
 /** @abstract @nodts @return {number} */
 m_doubleValue__double() {}
 /** @abstract @nodts @return {number} */
 m_floatValue__float() {}
 /** @abstract @nodts @return {number} */
 m_intValue__int() {}
 /** @abstract @nodts @return {!$Long} */
 m_longValue__long() {}
 /** @nodts @return {number} */
 m_shortValue__short() {
  return $Primitives.narrowIntToShort(this.m_intValue__int());
 }
 /** @nodts */
 static $clinit() {
  Number.$clinit = () =>{};
  Number.$loadModules();
  j_l_Object.$clinit();
 }
 
 /** @nodts */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  Double = goog.module.get('java.lang.Double$impl');
  $Overlay = goog.module.get('java.lang.Number.JavaLangNumber.$Overlay$impl');
  ____Decode = goog.module.get('java.lang.Number.__Decode$impl');
  ____ParseLong = goog.module.get('java.lang.Number.__ParseLong$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@type {RegExp} @nodts*/
Number.f_floatRegex__java_lang_Number_;
Serializable.$markImplementor(Number);
$Util.$setClassMetadata(Number, 'java.lang.Number');

exports = Number;

//# sourceMappingURL=Number.js.map
