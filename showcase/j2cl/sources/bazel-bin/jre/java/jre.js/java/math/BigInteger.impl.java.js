goog.module('java.math.BigInteger$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Comparable = goog.require('java.lang.Comparable$impl');
const Number = goog.require('java.lang.Number$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArithmeticException = goog.forwardDeclare('java.lang.ArithmeticException$impl');
let Byte = goog.forwardDeclare('java.lang.Byte$impl');
let Character = goog.forwardDeclare('java.lang.Character$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Float = goog.forwardDeclare('java.lang.Float$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let Short = goog.forwardDeclare('java.lang.Short$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let System = goog.forwardDeclare('java.lang.System$impl');
let BitLevel = goog.forwardDeclare('java.math.BitLevel$impl');
let Conversion = goog.forwardDeclare('java.math.Conversion$impl');
let Division = goog.forwardDeclare('java.math.Division$impl');
let Elementary = goog.forwardDeclare('java.math.Elementary$impl');
let Logical = goog.forwardDeclare('java.math.Logical$impl');
let Multiplication = goog.forwardDeclare('java.math.Multiplication$impl');
let Primality = goog.forwardDeclare('java.math.Primality$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let javaemul_internal_$LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @implements {Comparable<BigInteger>}
 * @implements {Serializable}
 */
class BigInteger extends Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_digits__java_math_BigInteger;
  /**@type {number} @nodts*/
  this.f_numberLength__java_math_BigInteger = 0;
  /**@type {number} @nodts*/
  this.f_sign__java_math_BigInteger = 0;
  /**@type {number} @nodts*/
  this.f_firstNonzeroDigit__java_math_BigInteger_ = 0;
  /**@type {number} @nodts*/
  this.f_hashCode__java_math_BigInteger_ = 0;
 }
 /** @nodts @return {BigInteger} */
 static m_probablePrime__int__java_util_Random__java_math_BigInteger(/** number */ bitLength, /** Random */ rnd) {
  BigInteger.$clinit();
  return BigInteger.$create__int__int__java_util_Random(bitLength, 100, rnd);
 }
 /** @nodts @return {BigInteger} */
 static m_valueOf__long__java_math_BigInteger(/** !$Long */ val) {
  BigInteger.$clinit();
  return $LongUtils.greaterEquals(val, $Long.fromInt(0)) ? BigInteger.m_fromBits__long__java_math_BigInteger(val) : BigInteger.m_fromBits__long__java_math_BigInteger($LongUtils.negate(val)).m_negate__java_math_BigInteger();
 }
 /** @nodts @return {BigInteger} */
 static m_fromBits__long__java_math_BigInteger(/** !$Long */ bits) {
  let lowBits = $Primitives.narrowLongToInt(bits);
  let highBits = javaemul_internal_$LongUtils.getHighBits(bits);
  if (highBits != 0) {
   return BigInteger.$create__int__int__int(1, lowBits, highBits);
  }
  if (lowBits > 10 || lowBits < 0) {
   return BigInteger.$create__int__int(1, lowBits);
  }
  return BigInteger.$static_SMALL_VALUES__java_math_BigInteger[lowBits];
 }
 /** @nodts @return {BigInteger} */
 static m_getPowerOfTwo__int__java_math_BigInteger(/** number */ exp) {
  BigInteger.$clinit();
  if (exp < BigInteger.$static_TWO_POWS__java_math_BigInteger.length) {
   return BigInteger.$static_TWO_POWS__java_math_BigInteger[exp];
  }
  let intCount = exp >> 5;
  let bitN = exp & 31;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([intCount + 1 | 0], $$int));
  $Arrays.$set(resDigits, intCount, 1 << bitN);
  return BigInteger.$create__int__int__arrayOf_int(1, intCount + 1 | 0, resDigits);
 }
 /** @nodts */
 static m_setFromString__java_math_BigInteger__java_lang_String__int__void(/** BigInteger */ bi, /** ?string */ val, /** number */ radix) {
  let /** number */ sign;
  let /** Array<number> */ digits;
  let /** number */ numberLength;
  let stringLength = j_l_String.m_length__java_lang_String__int(val);
  let /** number */ startChar;
  let endChar = stringLength;
  if (j_l_String.m_charAt__java_lang_String__int__char(val, 0) == 45 /* '-' */) {
   sign = - 1 | 0;
   startChar = 1;
   stringLength = stringLength - 1 | 0;
  } else {
   sign = 1;
   startChar = 0;
  }
  let charsPerInt = Conversion.f_digitFitInInt__java_math_Conversion[radix];
  let bigRadixDigitsLength = $Primitives.coerceDivision(stringLength / charsPerInt);
  let topChars = $Primitives.coerceDivision(stringLength % charsPerInt);
  if (topChars != 0) {
   bigRadixDigitsLength = bigRadixDigitsLength + 1 | 0;
  }
  digits = /**@type {!Array<number>}*/ ($Arrays.$create([bigRadixDigitsLength], $$int));
  let bigRadix = Conversion.f_bigRadices__java_math_Conversion[radix - 2 | 0];
  let digitIndex = 0;
  let substrEnd = startChar + (topChars == 0 ? charsPerInt : topChars) | 0;
  let /** number */ newDigit;
  for (let substrStart = startChar; substrStart < endChar; substrStart = substrEnd, substrEnd = substrStart + charsPerInt | 0) {
   let /** number */ $value;
   let bigRadixDigit = Integer.m_parseInt__java_lang_String__int__int(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(val, substrStart, substrEnd), radix);
   newDigit = Multiplication.m_multiplyByInt__arrayOf_int__int__int__int(digits, digitIndex, bigRadix);
   newDigit = newDigit + Elementary.m_inplaceAdd__arrayOf_int__int__int__int(digits, digitIndex, bigRadixDigit) | 0;
   $Arrays.$set(digits, ($value = digitIndex, digitIndex = digitIndex + 1 | 0, $value), newDigit);
  }
  numberLength = digitIndex;
  bi.f_sign__java_math_BigInteger = sign;
  bi.f_numberLength__java_math_BigInteger = numberLength;
  bi.f_digits__java_math_BigInteger = digits;
  bi.m_cutOffLeadingZeroes__void_$pp_java_math();
 }
 //Factory method corresponding to constructor 'BigInteger(byte[])'.
 /** @nodts @return {!BigInteger} */
 static $create__arrayOf_byte(/** Array<number> */ val) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__arrayOf_byte__void(val);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(byte[])'.
 /** @nodts */
 $ctor__java_math_BigInteger__arrayOf_byte__void(/** Array<number> */ val) {
  this.$ctor__java_lang_Number__void();
  this.$init__void_$p_java_math_BigInteger();
  if (val.length == 0) {
   throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('Zero length BigInteger'));
  }
  if (val[0] < 0) {
   this.f_sign__java_math_BigInteger = - 1 | 0;
   this.m_putBytesNegativeToIntegers__arrayOf_byte__void_$p_java_math_BigInteger(val);
  } else {
   this.f_sign__java_math_BigInteger = 1;
   this.m_putBytesPositiveToIntegers__arrayOf_byte__void_$p_java_math_BigInteger(val);
  }
  this.m_cutOffLeadingZeroes__void_$pp_java_math();
 }
 //Factory method corresponding to constructor 'BigInteger(int, byte[])'.
 /** @nodts @return {!BigInteger} */
 static $create__int__arrayOf_byte(/** number */ signum, /** Array<number> */ magnitude) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__int__arrayOf_byte__void(signum, magnitude);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(int, byte[])'.
 /** @nodts */
 $ctor__java_math_BigInteger__int__arrayOf_byte__void(/** number */ signum, /** Array<number> */ magnitude) {
  this.$ctor__java_lang_Number__void();
  this.$init__void_$p_java_math_BigInteger();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(magnitude);
  if (signum < (- 1 | 0) || signum > 1) {
   throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('Invalid signum value'));
  }
  if (signum == 0) {
   for (let $array = magnitude, $index = 0; $index < $array.length; $index++) {
    let element = $array[$index];
    {
     if (element != 0) {
      throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('signum-magnitude mismatch'));
     }
    }
   }
  }
  if (magnitude.length == 0) {
   this.f_sign__java_math_BigInteger = 0;
   this.f_numberLength__java_math_BigInteger = 1;
   this.f_digits__java_math_BigInteger = /**@type {!Array<number>}*/ ($Arrays.$init([0], $$int));
  } else {
   this.f_sign__java_math_BigInteger = signum;
   this.m_putBytesPositiveToIntegers__arrayOf_byte__void_$p_java_math_BigInteger(magnitude);
   this.m_cutOffLeadingZeroes__void_$pp_java_math();
  }
 }
 //Factory method corresponding to constructor 'BigInteger(int, int, Random)'.
 /** @nodts @return {!BigInteger} */
 static $create__int__int__java_util_Random(/** number */ bitLength, /** number */ certainty, /** Random */ rnd) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__int__int__java_util_Random__void(bitLength, certainty, rnd);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(int, int, Random)'.
 /** @nodts */
 $ctor__java_math_BigInteger__int__int__java_util_Random__void(/** number */ bitLength, /** number */ certainty, /** Random */ rnd) {
  this.$ctor__java_lang_Number__void();
  this.$init__void_$p_java_math_BigInteger();
  if (bitLength < 2) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('bitLength < 2'));
  }
  let me = Primality.m_consBigInteger__int__int__java_util_Random__java_math_BigInteger(bitLength, certainty, rnd);
  this.f_sign__java_math_BigInteger = me.f_sign__java_math_BigInteger;
  this.f_numberLength__java_math_BigInteger = me.f_numberLength__java_math_BigInteger;
  this.f_digits__java_math_BigInteger = me.f_digits__java_math_BigInteger;
 }
 //Factory method corresponding to constructor 'BigInteger(int, Random)'.
 /** @nodts @return {!BigInteger} */
 static $create__int__java_util_Random(/** number */ numBits, /** Random */ rnd) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__int__java_util_Random__void(numBits, rnd);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(int, Random)'.
 /** @nodts */
 $ctor__java_math_BigInteger__int__java_util_Random__void(/** number */ numBits, /** Random */ rnd) {
  this.$ctor__java_lang_Number__void();
  this.$init__void_$p_java_math_BigInteger();
  InternalPreconditions.m_checkCriticalArgument__boolean__java_lang_Object__void(numBits >= 0, 'numBits must be non-negative');
  if (numBits == 0) {
   this.f_sign__java_math_BigInteger = 0;
   this.f_numberLength__java_math_BigInteger = 1;
   this.f_digits__java_math_BigInteger = /**@type {!Array<number>}*/ ($Arrays.$init([0], $$int));
  } else {
   this.f_sign__java_math_BigInteger = 1;
   this.f_numberLength__java_math_BigInteger = (numBits + 31 | 0) >> 5;
   this.f_digits__java_math_BigInteger = /**@type {!Array<number>}*/ ($Arrays.$create([this.f_numberLength__java_math_BigInteger], $$int));
   for (let i = 0; i < this.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
    $Arrays.$set(this.f_digits__java_math_BigInteger, i, rnd.m_nextInt__int());
   }
   $Arrays.$set(this.f_digits__java_math_BigInteger, this.f_numberLength__java_math_BigInteger - 1 | 0, this.f_digits__java_math_BigInteger[this.f_numberLength__java_math_BigInteger - 1 | 0] >>> ((- numBits | 0) & 31) | 0);
   this.m_cutOffLeadingZeroes__void_$pp_java_math();
  }
 }
 //Factory method corresponding to constructor 'BigInteger(String)'.
 /** @nodts @return {!BigInteger} */
 static $create__java_lang_String(/** ?string */ val) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__java_lang_String__void(val);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(String)'.
 /** @nodts */
 $ctor__java_math_BigInteger__java_lang_String__void(/** ?string */ val) {
  this.$ctor__java_math_BigInteger__java_lang_String__int__void(val, 10);
 }
 //Factory method corresponding to constructor 'BigInteger(String, int)'.
 /** @nodts @return {!BigInteger} */
 static $create__java_lang_String__int(/** ?string */ val, /** number */ radix) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__java_lang_String__int__void(val, radix);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(String, int)'.
 /** @nodts */
 $ctor__java_math_BigInteger__java_lang_String__int__void(/** ?string */ val, /** number */ radix) {
  this.$ctor__java_lang_Number__void();
  this.$init__void_$p_java_math_BigInteger();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(val);
  if (radix < Character.f_MIN_RADIX__java_lang_Character || radix > Character.f_MAX_RADIX__java_lang_Character) {
   throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('Radix out of range'));
  }
  if (j_l_String.m_isEmpty__java_lang_String__boolean(val)) {
   throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('Zero length BigInteger'));
  }
  BigInteger.m_setFromString__java_math_BigInteger__java_lang_String__int__void(this, val, radix);
 }
 //Factory method corresponding to constructor 'BigInteger(int, int)'.
 /** @nodts @return {!BigInteger} */
 static $create__int__int(/** number */ sign, /** number */ bits) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__int__int__void(sign, bits);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(int, int)'.
 /** @nodts */
 $ctor__java_math_BigInteger__int__int__void(/** number */ sign, /** number */ bits) {
  this.$ctor__java_math_BigInteger__int__int__arrayOf_int__void(sign, 1, /**@type {!Array<number>}*/ ($Arrays.$init([bits], $$int)));
 }
 //Factory method corresponding to constructor 'BigInteger(int, int, int)'.
 /** @nodts @return {!BigInteger} */
 static $create__int__int__int(/** number */ sign, /** number */ lowBits, /** number */ highBits) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__int__int__int__void(sign, lowBits, highBits);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(int, int, int)'.
 /** @nodts */
 $ctor__java_math_BigInteger__int__int__int__void(/** number */ sign, /** number */ lowBits, /** number */ highBits) {
  this.$ctor__java_math_BigInteger__int__int__arrayOf_int__void(sign, 2, /**@type {!Array<number>}*/ ($Arrays.$init([lowBits, highBits], $$int)));
 }
 //Factory method corresponding to constructor 'BigInteger(int, int[])'.
 /** @nodts @return {!BigInteger} */
 static $create__int__arrayOf_int(/** number */ signum, /** Array<number> */ digits) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__int__arrayOf_int__void(signum, digits);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(int, int[])'.
 /** @nodts */
 $ctor__java_math_BigInteger__int__arrayOf_int__void(/** number */ signum, /** Array<number> */ digits) {
  this.$ctor__java_lang_Number__void();
  this.$init__void_$p_java_math_BigInteger();
  if (digits.length == 0) {
   this.f_sign__java_math_BigInteger = 0;
   this.f_numberLength__java_math_BigInteger = 1;
   this.f_digits__java_math_BigInteger = /**@type {!Array<number>}*/ ($Arrays.$init([0], $$int));
  } else {
   this.f_sign__java_math_BigInteger = signum;
   this.f_numberLength__java_math_BigInteger = digits.length;
   this.f_digits__java_math_BigInteger = digits;
   this.m_cutOffLeadingZeroes__void_$pp_java_math();
  }
 }
 //Factory method corresponding to constructor 'BigInteger(int, int, int[])'.
 /** @nodts @return {!BigInteger} */
 static $create__int__int__arrayOf_int(/** number */ sign, /** number */ numberLength, /** Array<number> */ digits) {
  BigInteger.$clinit();
  let $instance = new BigInteger();
  $instance.$ctor__java_math_BigInteger__int__int__arrayOf_int__void(sign, numberLength, digits);
  return $instance;
 }
 //Initialization from constructor 'BigInteger(int, int, int[])'.
 /** @nodts */
 $ctor__java_math_BigInteger__int__int__arrayOf_int__void(/** number */ sign, /** number */ numberLength, /** Array<number> */ digits) {
  this.$ctor__java_lang_Number__void();
  this.$init__void_$p_java_math_BigInteger();
  this.f_sign__java_math_BigInteger = sign;
  this.f_numberLength__java_math_BigInteger = numberLength;
  this.f_digits__java_math_BigInteger = digits;
 }
 /** @nodts @return {BigInteger} */
 m_abs__java_math_BigInteger() {
  return this.f_sign__java_math_BigInteger < 0 ? this.m_negate__java_math_BigInteger() : this;
 }
 /** @nodts @return {BigInteger} */
 m_add__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  return Elementary.m_add__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(this, val);
 }
 /** @nodts @return {BigInteger} */
 m_and__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  return Logical.m_and__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(this, val);
 }
 /** @nodts @return {BigInteger} */
 m_andNot__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  return Logical.m_andNot__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(this, val);
 }
 /** @nodts @return {number} */
 m_bitCount__int() {
  return BitLevel.m_bitCount__java_math_BigInteger__int(this);
 }
 /** @nodts @return {number} */
 m_bitLength__int() {
  return BitLevel.m_bitLength__java_math_BigInteger__int(this);
 }
 /** @nodts @return {number} */
 m_byteValueExact__byte() {
  if (this.f_numberLength__java_math_BigInteger <= 1 && this.m_bitLength__int() < Byte.f_SIZE__java_lang_Byte) {
   return this.m_byteValue__byte();
  }
  throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('out of byte range'));
 }
 /** @nodts @return {BigInteger} */
 m_clearBit__int__java_math_BigInteger(/** number */ n) {
  if (this.m_testBit__int__boolean(n)) {
   return BitLevel.m_flipBit__java_math_BigInteger__int__java_math_BigInteger(this, n);
  }
  return this;
 }
 /** @nodts @return {number} */
 m_compareTo__java_math_BigInteger__int(/** BigInteger */ val) {
  if (this.f_sign__java_math_BigInteger > val.f_sign__java_math_BigInteger) {
   return BigInteger.f_GREATER__java_math_BigInteger;
  }
  if (this.f_sign__java_math_BigInteger < val.f_sign__java_math_BigInteger) {
   return BigInteger.f_LESS__java_math_BigInteger;
  }
  if (this.f_numberLength__java_math_BigInteger > val.f_numberLength__java_math_BigInteger) {
   return this.f_sign__java_math_BigInteger;
  }
  if (this.f_numberLength__java_math_BigInteger < val.f_numberLength__java_math_BigInteger) {
   return - val.f_sign__java_math_BigInteger | 0;
  }
  return Math.imul(this.f_sign__java_math_BigInteger, Elementary.m_compareArrays__arrayOf_int__arrayOf_int__int__int(this.f_digits__java_math_BigInteger, val.f_digits__java_math_BigInteger, this.f_numberLength__java_math_BigInteger));
 }
 /** @nodts @return {BigInteger} */
 m_divide__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ divisor) {
  if (divisor.f_sign__java_math_BigInteger == 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger divide by zero'));
  }
  let divisorSign = divisor.f_sign__java_math_BigInteger;
  if (divisor.m_isOne__boolean_$pp_java_math()) {
   return divisor.f_sign__java_math_BigInteger > 0 ? this : this.m_negate__java_math_BigInteger();
  }
  let thisSign = this.f_sign__java_math_BigInteger;
  let thisLen = this.f_numberLength__java_math_BigInteger;
  let divisorLen = divisor.f_numberLength__java_math_BigInteger;
  if ((thisLen + divisorLen | 0) == 2) {
   let val = $LongUtils.divide($LongUtils.bitAnd($Primitives.widenIntToLong(this.f_digits__java_math_BigInteger[0]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(divisor.f_digits__java_math_BigInteger[0]), $Long.fromBits(-1, 0) /* 4294967295 */));
   if (thisSign != divisorSign) {
    val = $LongUtils.negate(val);
   }
   return BigInteger.m_valueOf__long__java_math_BigInteger(val);
  }
  let cmp = thisLen != divisorLen ? thisLen > divisorLen ? 1 : - 1 | 0 : Elementary.m_compareArrays__arrayOf_int__arrayOf_int__int__int(this.f_digits__java_math_BigInteger, divisor.f_digits__java_math_BigInteger, thisLen);
  if (cmp == BigInteger.f_EQUALS__java_math_BigInteger) {
   return thisSign == divisorSign ? BigInteger.$static_ONE__java_math_BigInteger : BigInteger.$static_MINUS_ONE__java_math_BigInteger;
  }
  if (cmp == BigInteger.f_LESS__java_math_BigInteger) {
   return BigInteger.$static_ZERO__java_math_BigInteger;
  }
  let resLength = thisLen - divisorLen + 1 | 0;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  let resSign = thisSign == divisorSign ? 1 : - 1 | 0;
  if (divisorLen == 1) {
   Division.m_divideArrayByInt__arrayOf_int__arrayOf_int__int__int__int(resDigits, this.f_digits__java_math_BigInteger, thisLen, divisor.f_digits__java_math_BigInteger[0]);
  } else {
   Division.m_divide__arrayOf_int__int__arrayOf_int__int__arrayOf_int__int__arrayOf_int(resDigits, resLength, this.f_digits__java_math_BigInteger, thisLen, divisor.f_digits__java_math_BigInteger, divisorLen);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(resSign, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {Array<BigInteger>} */
 m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(/** BigInteger */ divisor) {
  let divisorSign = divisor.f_sign__java_math_BigInteger;
  if (divisorSign == 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger divide by zero'));
  }
  let divisorLen = divisor.f_numberLength__java_math_BigInteger;
  let divisorDigits = divisor.f_digits__java_math_BigInteger;
  if (divisorLen == 1) {
   return Division.m_divideAndRemainderByInteger__java_math_BigInteger__int__int__arrayOf_java_math_BigInteger(this, divisorDigits[0], divisorSign);
  }
  let thisDigits = this.f_digits__java_math_BigInteger;
  let thisLen = this.f_numberLength__java_math_BigInteger;
  let cmp = thisLen != divisorLen ? thisLen > divisorLen ? 1 : - 1 | 0 : Elementary.m_compareArrays__arrayOf_int__arrayOf_int__int__int(thisDigits, divisorDigits, thisLen);
  if (cmp < 0) {
   return /**@type {!Array<BigInteger>}*/ ($Arrays.$init([BigInteger.$static_ZERO__java_math_BigInteger, this], BigInteger));
  }
  let thisSign = this.f_sign__java_math_BigInteger;
  let quotientLength = thisLen - divisorLen + 1 | 0;
  let remainderLength = divisorLen;
  let quotientSign = thisSign == divisorSign ? 1 : - 1 | 0;
  let quotientDigits = /**@type {!Array<number>}*/ ($Arrays.$create([quotientLength], $$int));
  let remainderDigits = Division.m_divide__arrayOf_int__int__arrayOf_int__int__arrayOf_int__int__arrayOf_int(quotientDigits, quotientLength, thisDigits, thisLen, divisorDigits, divisorLen);
  let result0 = BigInteger.$create__int__int__arrayOf_int(quotientSign, quotientLength, quotientDigits);
  let result1 = BigInteger.$create__int__int__arrayOf_int(thisSign, remainderLength, remainderDigits);
  result0.m_cutOffLeadingZeroes__void_$pp_java_math();
  result1.m_cutOffLeadingZeroes__void_$pp_java_math();
  return /**@type {!Array<BigInteger>}*/ ($Arrays.$init([result0, result1], BigInteger));
 }
 /** @override @nodts @return {number} */
 m_doubleValue__double() {
  return Double.m_parseDouble__java_lang_String__double(this.toString());
 }
 /** @override @return {boolean} */
 equals(/** * */ x) {
  if ($Equality.$same(this, x)) {
   return true;
  }
  if (BigInteger.$isInstance(x)) {
   let x1 = /**@type {BigInteger}*/ (x);
   return this.f_sign__java_math_BigInteger == x1.f_sign__java_math_BigInteger && this.f_numberLength__java_math_BigInteger == x1.f_numberLength__java_math_BigInteger && this.m_equalsArrays__arrayOf_int__boolean_$pp_java_math(x1.f_digits__java_math_BigInteger);
  }
  return false;
 }
 /** @nodts @return {BigInteger} */
 m_flipBit__int__java_math_BigInteger(/** number */ n) {
  if (n < 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Negative bit address'));
  }
  return BitLevel.m_flipBit__java_math_BigInteger__int__java_math_BigInteger(this, n);
 }
 /** @override @nodts @return {number} */
 m_floatValue__float() {
  return Float.m_parseFloat__java_lang_String__float(this.toString());
 }
 /** @nodts @return {BigInteger} */
 m_gcd__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  let val1 = this.m_abs__java_math_BigInteger();
  let val2 = val.m_abs__java_math_BigInteger();
  if (val1.m_signum__int() == 0) {
   return val2;
  } else if (val2.m_signum__int() == 0) {
   return val1;
  }
  if ((val1.f_numberLength__java_math_BigInteger == 1 || val1.f_numberLength__java_math_BigInteger == 2 && val1.f_digits__java_math_BigInteger[1] > 0) && (val2.f_numberLength__java_math_BigInteger == 1 || val2.f_numberLength__java_math_BigInteger == 2 && val2.f_digits__java_math_BigInteger[1] > 0)) {
   return BigInteger.m_valueOf__long__java_math_BigInteger(Division.m_gcdBinary__long__long__long(val1.m_longValue__long(), val2.m_longValue__long()));
  }
  return Division.m_gcdBinary__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val1.m_copy__java_math_BigInteger_$pp_java_math(), val2.m_copy__java_math_BigInteger_$pp_java_math());
 }
 /** @nodts @return {number} */
 m_getLowestSetBit__int() {
  if (this.f_sign__java_math_BigInteger == 0) {
   return - 1 | 0;
  }
  let i = this.m_getFirstNonzeroDigit__int_$pp_java_math();
  return (i << 5) + Integer.m_numberOfTrailingZeros__int__int(this.f_digits__java_math_BigInteger[i]) | 0;
 }
 /** @override @return {number} */
 hashCode() {
  if (this.f_hashCode__java_math_BigInteger_ != 0) {
   return this.f_hashCode__java_math_BigInteger_;
  }
  for (let i = 0; i < this.f_digits__java_math_BigInteger.length; i = i + 1 | 0) {
   this.f_hashCode__java_math_BigInteger_ = Math.imul(this.f_hashCode__java_math_BigInteger_, 33) + (this.f_digits__java_math_BigInteger[i] & -1) | 0;
  }
  this.f_hashCode__java_math_BigInteger_ = Math.imul(this.f_hashCode__java_math_BigInteger_, this.f_sign__java_math_BigInteger);
  return this.f_hashCode__java_math_BigInteger_;
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  let i = this.f_digits__java_math_BigInteger[0];
  return this.f_sign__java_math_BigInteger > 0 ? i : - i | 0;
 }
 /** @nodts @return {number} */
 m_intValueExact__int() {
  if (this.f_numberLength__java_math_BigInteger <= 1 && this.m_bitLength__int() < Integer.f_SIZE__java_lang_Integer) {
   return this.m_intValue__int();
  }
  throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('out of int range'));
 }
 /** @nodts @return {boolean} */
 m_isProbablePrime__int__boolean(/** number */ certainty) {
  return Primality.m_isProbablePrime__java_math_BigInteger__int__boolean(this.m_abs__java_math_BigInteger(), certainty);
 }
 /** @override @nodts @return {!$Long} */
 m_longValue__long() {
  let value = this.f_numberLength__java_math_BigInteger > 1 ? javaemul_internal_$LongUtils.fromBits(this.f_digits__java_math_BigInteger[0], this.f_digits__java_math_BigInteger[1]) : javaemul_internal_$LongUtils.fromBits(this.f_digits__java_math_BigInteger[0], 0);
  return this.f_sign__java_math_BigInteger > 0 ? value : $LongUtils.negate(value);
 }
 /** @nodts @return {!$Long} */
 m_longValueExact__long() {
  if (this.f_numberLength__java_math_BigInteger <= 2 && this.m_bitLength__int() < Long.f_SIZE__java_lang_Long) {
   return this.m_longValue__long();
  }
  throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('out of long range'));
 }
 /** @nodts @return {BigInteger} */
 m_max__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  return this.m_compareTo__java_math_BigInteger__int(val) == BigInteger.f_GREATER__java_math_BigInteger ? this : val;
 }
 /** @nodts @return {BigInteger} */
 m_min__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  return this.m_compareTo__java_math_BigInteger__int(val) == BigInteger.f_LESS__java_math_BigInteger ? this : val;
 }
 /** @nodts @return {BigInteger} */
 m_mod__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ m) {
  if (m.f_sign__java_math_BigInteger <= 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger: modulus not positive'));
  }
  let rem = this.m_remainder__java_math_BigInteger__java_math_BigInteger(m);
  return rem.f_sign__java_math_BigInteger < 0 ? rem.m_add__java_math_BigInteger__java_math_BigInteger(m) : rem;
 }
 /** @nodts @return {BigInteger} */
 m_modInverse__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ m) {
  if (m.f_sign__java_math_BigInteger <= 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger: modulus not positive'));
  }
  if (!(this.m_testBit__int__boolean(0) || m.m_testBit__int__boolean(0))) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger not invertible.'));
  }
  if (m.m_isOne__boolean_$pp_java_math()) {
   return BigInteger.$static_ZERO__java_math_BigInteger;
  }
  let res = Division.m_modInverseMontgomery__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(this.m_abs__java_math_BigInteger().m_mod__java_math_BigInteger__java_math_BigInteger(m), m);
  if (res.f_sign__java_math_BigInteger == 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger not invertible.'));
  }
  res = this.f_sign__java_math_BigInteger < 0 ? m.m_subtract__java_math_BigInteger__java_math_BigInteger(res) : res;
  return res;
 }
 /** @nodts @return {BigInteger} */
 m_modPow__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ exponent, /** BigInteger */ m) {
  if (m.f_sign__java_math_BigInteger <= 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger: modulus not positive'));
  }
  let base = this;
  if (!!(+ m.m_isOne__boolean_$pp_java_math() | + !!(+ (exponent.f_sign__java_math_BigInteger > 0) & + (base.f_sign__java_math_BigInteger == 0)))) {
   return BigInteger.$static_ZERO__java_math_BigInteger;
  }
  if (base.f_sign__java_math_BigInteger == 0 && exponent.f_sign__java_math_BigInteger == 0) {
   return BigInteger.$static_ONE__java_math_BigInteger;
  }
  if (exponent.f_sign__java_math_BigInteger < 0) {
   base = this.m_modInverse__java_math_BigInteger__java_math_BigInteger(m);
   exponent = exponent.m_negate__java_math_BigInteger();
  }
  let res = m.m_testBit__int__boolean(0) ? Division.m_oddModPow__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(base.m_abs__java_math_BigInteger(), exponent, m) : Division.m_evenModPow__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(base.m_abs__java_math_BigInteger(), exponent, m);
  if (base.f_sign__java_math_BigInteger < 0 && exponent.m_testBit__int__boolean(0)) {
   res = m.m_subtract__java_math_BigInteger__java_math_BigInteger(BigInteger.$static_ONE__java_math_BigInteger).m_multiply__java_math_BigInteger__java_math_BigInteger(res).m_mod__java_math_BigInteger__java_math_BigInteger(m);
  }
  return res;
 }
 /** @nodts @return {BigInteger} */
 m_multiply__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  if (val.f_sign__java_math_BigInteger == 0 || this.f_sign__java_math_BigInteger == 0) {
   return BigInteger.$static_ZERO__java_math_BigInteger;
  }
  return Multiplication.m_multiply__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(this, val);
 }
 /** @nodts @return {BigInteger} */
 m_negate__java_math_BigInteger() {
  return this.f_sign__java_math_BigInteger == 0 ? this : BigInteger.$create__int__int__arrayOf_int(- this.f_sign__java_math_BigInteger | 0, this.f_numberLength__java_math_BigInteger, this.f_digits__java_math_BigInteger);
 }
 /** @nodts @return {BigInteger} */
 m_nextProbablePrime__java_math_BigInteger() {
  if (this.f_sign__java_math_BigInteger < 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('start < 0: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this)));
  }
  return Primality.m_nextProbablePrime__java_math_BigInteger__java_math_BigInteger(this);
 }
 /** @nodts @return {BigInteger} */
 m_not__java_math_BigInteger() {
  return Logical.m_not__java_math_BigInteger__java_math_BigInteger(this);
 }
 /** @nodts @return {BigInteger} */
 m_or__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  return Logical.m_or__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(this, val);
 }
 /** @nodts @return {BigInteger} */
 m_pow__int__java_math_BigInteger(/** number */ exp) {
  if (exp < 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Negative exponent'));
  }
  if (exp == 0) {
   return BigInteger.$static_ONE__java_math_BigInteger;
  } else if (exp == 1 || this.equals(BigInteger.$static_ONE__java_math_BigInteger) || this.equals(BigInteger.$static_ZERO__java_math_BigInteger)) {
   return this;
  }
  if (!this.m_testBit__int__boolean(0)) {
   let x = 1;
   while (!this.m_testBit__int__boolean(x)) {
    x = x + 1 | 0;
   }
   return BigInteger.m_getPowerOfTwo__int__java_math_BigInteger(Math.imul(x, exp)).m_multiply__java_math_BigInteger__java_math_BigInteger(this.m_shiftRight__int__java_math_BigInteger(x).m_pow__int__java_math_BigInteger(exp));
  }
  return Multiplication.m_pow__java_math_BigInteger__int__java_math_BigInteger(this, exp);
 }
 /** @nodts @return {BigInteger} */
 m_remainder__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ divisor) {
  if (divisor.f_sign__java_math_BigInteger == 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger divide by zero'));
  }
  let thisLen = this.f_numberLength__java_math_BigInteger;
  let divisorLen = divisor.f_numberLength__java_math_BigInteger;
  if ((thisLen != divisorLen ? thisLen > divisorLen ? 1 : - 1 | 0 : Elementary.m_compareArrays__arrayOf_int__arrayOf_int__int__int(this.f_digits__java_math_BigInteger, divisor.f_digits__java_math_BigInteger, thisLen)) == BigInteger.f_LESS__java_math_BigInteger) {
   return this;
  }
  let resLength = divisorLen;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  if (resLength == 1) {
   $Arrays.$set(resDigits, 0, Division.m_remainderArrayByInt__arrayOf_int__int__int__int(this.f_digits__java_math_BigInteger, thisLen, divisor.f_digits__java_math_BigInteger[0]));
  } else {
   let qLen = thisLen - divisorLen + 1 | 0;
   resDigits = Division.m_divide__arrayOf_int__int__arrayOf_int__int__arrayOf_int__int__arrayOf_int(null, qLen, this.f_digits__java_math_BigInteger, thisLen, divisor.f_digits__java_math_BigInteger, divisorLen);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(this.f_sign__java_math_BigInteger, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 m_setBit__int__java_math_BigInteger(/** number */ n) {
  if (!this.m_testBit__int__boolean(n)) {
   return BitLevel.m_flipBit__java_math_BigInteger__int__java_math_BigInteger(this, n);
  }
  return this;
 }
 /** @nodts @return {BigInteger} */
 m_shiftLeft__int__java_math_BigInteger(/** number */ n) {
  if (n == 0 || this.f_sign__java_math_BigInteger == 0) {
   return this;
  }
  return n > 0 ? BitLevel.m_shiftLeft__java_math_BigInteger__int__java_math_BigInteger(this, n) : BitLevel.m_shiftRight__java_math_BigInteger__int__java_math_BigInteger(this, - n | 0);
 }
 /** @nodts @return {BigInteger} */
 m_shiftRight__int__java_math_BigInteger(/** number */ n) {
  if (n == 0 || this.f_sign__java_math_BigInteger == 0) {
   return this;
  }
  return n > 0 ? BitLevel.m_shiftRight__java_math_BigInteger__int__java_math_BigInteger(this, n) : BitLevel.m_shiftLeft__java_math_BigInteger__int__java_math_BigInteger(this, - n | 0);
 }
 /** @nodts @return {number} */
 m_shortValueExact__short() {
  if (this.f_numberLength__java_math_BigInteger <= 1 && this.m_bitLength__int() < Short.f_SIZE__java_lang_Short) {
   return this.m_shortValue__short();
  }
  throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('out of short range'));
 }
 /** @nodts @return {number} */
 m_signum__int() {
  return this.f_sign__java_math_BigInteger;
 }
 /** @nodts @return {BigInteger} */
 m_subtract__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  return Elementary.m_subtract__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(this, val);
 }
 /** @nodts @return {boolean} */
 m_testBit__int__boolean(/** number */ n) {
  if (n == 0) {
   return (this.f_digits__java_math_BigInteger[0] & 1) != 0;
  }
  if (n < 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Negative bit address'));
  }
  let intCount = n >> 5;
  if (intCount >= this.f_numberLength__java_math_BigInteger) {
   return this.f_sign__java_math_BigInteger < 0;
  }
  let digit = this.f_digits__java_math_BigInteger[intCount];
  n = 1 << (n & 31);
  if (this.f_sign__java_math_BigInteger < 0) {
   let firstNonZeroDigit = this.m_getFirstNonzeroDigit__int_$pp_java_math();
   if (intCount < firstNonZeroDigit) {
    return false;
   } else if (firstNonZeroDigit == intCount) {
    digit = - digit | 0;
   } else {
    digit = ~digit;
   }
  }
  return (digit & n) != 0;
 }
 /** @nodts @return {Array<number>} */
 m_toByteArray__arrayOf_byte() {
  if (this.f_sign__java_math_BigInteger == 0) {
   return /**@type {!Array<number>}*/ ($Arrays.$init([0], $$byte));
  }
  let temp = this;
  let bitLen = this.m_bitLength__int();
  let iThis = this.m_getFirstNonzeroDigit__int_$pp_java_math();
  let bytesLen = (bitLen >> 3) + 1 | 0;
  let bytes = /**@type {!Array<number>}*/ ($Arrays.$create([bytesLen], $$byte));
  let firstByteNumber = 0;
  let /** number */ highBytes;
  let digitIndex = 0;
  let bytesInInteger = 4;
  let /** number */ digit;
  let /** number */ hB;
  if ((bytesLen - (this.f_numberLength__java_math_BigInteger << 2) | 0) == 1) {
   $Arrays.$set(bytes, 0, $Primitives.narrowIntToByte(this.f_sign__java_math_BigInteger < 0 ? - 1 | 0 : 0));
   highBytes = 4;
   firstByteNumber = firstByteNumber + 1 | 0;
  } else {
   hB = bytesLen & 3;
   highBytes = hB == 0 ? 4 : hB;
  }
  digitIndex = iThis;
  bytesLen = bytesLen - (iThis << 2) | 0;
  if (this.f_sign__java_math_BigInteger < 0) {
   digit = - temp.f_digits__java_math_BigInteger[digitIndex] | 0;
   digitIndex = digitIndex + 1 | 0;
   if (digitIndex == this.f_numberLength__java_math_BigInteger) {
    bytesInInteger = highBytes;
   }
   for (let i = 0; i < bytesInInteger; i = i + 1 | 0, digit >>= 8) {
    $Arrays.$set(bytes, bytesLen = bytesLen - 1 | 0, $Primitives.narrowIntToByte(digit));
   }
   while (bytesLen > firstByteNumber) {
    digit = ~temp.f_digits__java_math_BigInteger[digitIndex];
    digitIndex = digitIndex + 1 | 0;
    if (digitIndex == this.f_numberLength__java_math_BigInteger) {
     bytesInInteger = highBytes;
    }
    for (let i_1 = 0; i_1 < bytesInInteger; i_1 = i_1 + 1 | 0, digit >>= 8) {
     $Arrays.$set(bytes, bytesLen = bytesLen - 1 | 0, $Primitives.narrowIntToByte(digit));
    }
   }
  } else {
   while (bytesLen > firstByteNumber) {
    digit = temp.f_digits__java_math_BigInteger[digitIndex];
    digitIndex = digitIndex + 1 | 0;
    if (digitIndex == this.f_numberLength__java_math_BigInteger) {
     bytesInInteger = highBytes;
    }
    for (let i_2 = 0; i_2 < bytesInInteger; i_2 = i_2 + 1 | 0, digit >>= 8) {
     $Arrays.$set(bytes, bytesLen = bytesLen - 1 | 0, $Primitives.narrowIntToByte(digit));
    }
   }
  }
  return bytes;
 }
 /** @override @return {?string} */
 toString() {
  return Conversion.m_toDecimalScaledString__java_math_BigInteger__int__java_lang_String(this, 0);
 }
 /** @nodts @return {?string} */
 m_toString__int__java_lang_String(/** number */ radix) {
  return Conversion.m_bigInteger2String__java_math_BigInteger__int__java_lang_String(this, radix);
 }
 /** @nodts @return {BigInteger} */
 m_xor__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  return Logical.m_xor__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(this, val);
 }
 /** @nodts @return {BigInteger} */
 m_copy__java_math_BigInteger_$pp_java_math() {
  let copyDigits = /**@type {!Array<number>}*/ ($Arrays.$create([this.f_numberLength__java_math_BigInteger], $$int));
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(this.f_digits__java_math_BigInteger, 0, copyDigits, 0, this.f_numberLength__java_math_BigInteger);
  return BigInteger.$create__int__int__arrayOf_int(this.f_sign__java_math_BigInteger, this.f_numberLength__java_math_BigInteger, copyDigits);
 }
 /** @final @nodts */
 m_cutOffLeadingZeroes__void_$pp_java_math() {
  let /** number */ $value;
  while (this.f_numberLength__java_math_BigInteger > 0 && this.f_digits__java_math_BigInteger[this.f_numberLength__java_math_BigInteger = this.f_numberLength__java_math_BigInteger - 1 | 0] == 0) {}
  if (this.f_digits__java_math_BigInteger[($value = this.f_numberLength__java_math_BigInteger, this.f_numberLength__java_math_BigInteger = this.f_numberLength__java_math_BigInteger + 1 | 0, $value)] == 0) {
   this.f_sign__java_math_BigInteger = 0;
  }
 }
 /** @nodts @return {boolean} */
 m_equalsArrays__arrayOf_int__boolean_$pp_java_math(/** Array<number> */ b) {
  let /** number */ i;
  for (i = this.f_numberLength__java_math_BigInteger - 1 | 0; i >= 0 && this.f_digits__java_math_BigInteger[i] == b[i]; i = i - 1 | 0) {}
  return i < 0;
 }
 /** @nodts @return {number} */
 m_getFirstNonzeroDigit__int_$pp_java_math() {
  if (this.f_firstNonzeroDigit__java_math_BigInteger_ == (- 2 | 0)) {
   let /** number */ i;
   if (this.f_sign__java_math_BigInteger == 0) {
    i = - 1 | 0;
   } else {
    for (i = 0; this.f_digits__java_math_BigInteger[i] == 0; i = i + 1 | 0) {}
   }
   this.f_firstNonzeroDigit__java_math_BigInteger_ = i;
  }
  return this.f_firstNonzeroDigit__java_math_BigInteger_;
 }
 /** @nodts @return {boolean} */
 m_isOne__boolean_$pp_java_math() {
  return this.f_numberLength__java_math_BigInteger == 1 && this.f_digits__java_math_BigInteger[0] == 1;
 }
 /** @nodts @return {BigInteger} */
 m_shiftLeftOneBit__java_math_BigInteger_$pp_java_math() {
  return this.f_sign__java_math_BigInteger == 0 ? this : BitLevel.m_shiftLeftOneBit__java_math_BigInteger__java_math_BigInteger(this);
 }
 /** @nodts */
 m_unCache__void_$pp_java_math() {
  this.f_firstNonzeroDigit__java_math_BigInteger_ = - 2 | 0;
 }
 /** @nodts */
 m_putBytesNegativeToIntegers__arrayOf_byte__void_$p_java_math_BigInteger(/** Array<number> */ byteValues) {
  let bytesLen = byteValues.length;
  let highBytes = bytesLen & 3;
  this.f_numberLength__java_math_BigInteger = (bytesLen >> 2) + (highBytes == 0 ? 0 : 1) | 0;
  this.f_digits__java_math_BigInteger = /**@type {!Array<number>}*/ ($Arrays.$create([this.f_numberLength__java_math_BigInteger], $$int));
  let i = 0;
  $Arrays.$set(this.f_digits__java_math_BigInteger, this.f_numberLength__java_math_BigInteger - 1 | 0, - 1 | 0);
  while (bytesLen > highBytes) {
   $Arrays.$set(this.f_digits__java_math_BigInteger, i, byteValues[bytesLen = bytesLen - 1 | 0] & 255 | (byteValues[bytesLen = bytesLen - 1 | 0] & 255) << 8 | (byteValues[bytesLen = bytesLen - 1 | 0] & 255) << 16 | (byteValues[bytesLen = bytesLen - 1 | 0] & 255) << 24);
   if (this.f_digits__java_math_BigInteger[i] != 0) {
    $Arrays.$set(this.f_digits__java_math_BigInteger, i, - this.f_digits__java_math_BigInteger[i] | 0);
    this.f_firstNonzeroDigit__java_math_BigInteger_ = i;
    i = i + 1 | 0;
    while (bytesLen > highBytes) {
     $Arrays.$set(this.f_digits__java_math_BigInteger, i, byteValues[bytesLen = bytesLen - 1 | 0] & 255 | (byteValues[bytesLen = bytesLen - 1 | 0] & 255) << 8 | (byteValues[bytesLen = bytesLen - 1 | 0] & 255) << 16 | (byteValues[bytesLen = bytesLen - 1 | 0] & 255) << 24);
     $Arrays.$set(this.f_digits__java_math_BigInteger, i, ~this.f_digits__java_math_BigInteger[i]);
     i = i + 1 | 0;
    }
    break;
   }
   i = i + 1 | 0;
  }
  if (highBytes != 0) {
   if (this.f_firstNonzeroDigit__java_math_BigInteger_ != (- 2 | 0)) {
    for (let j = 0; j < bytesLen; j = j + 1 | 0) {
     $Arrays.$set(this.f_digits__java_math_BigInteger, i, this.f_digits__java_math_BigInteger[i] << 8 | byteValues[j] & 255);
    }
    $Arrays.$set(this.f_digits__java_math_BigInteger, i, ~this.f_digits__java_math_BigInteger[i]);
   } else {
    for (let j_1 = 0; j_1 < bytesLen; j_1 = j_1 + 1 | 0) {
     $Arrays.$set(this.f_digits__java_math_BigInteger, i, this.f_digits__java_math_BigInteger[i] << 8 | byteValues[j_1] & 255);
    }
    $Arrays.$set(this.f_digits__java_math_BigInteger, i, - this.f_digits__java_math_BigInteger[i] | 0);
   }
  }
 }
 /** @nodts */
 m_putBytesPositiveToIntegers__arrayOf_byte__void_$p_java_math_BigInteger(/** Array<number> */ byteValues) {
  let bytesLen = byteValues.length;
  let highBytes = bytesLen & 3;
  this.f_numberLength__java_math_BigInteger = (bytesLen >> 2) + (highBytes == 0 ? 0 : 1) | 0;
  this.f_digits__java_math_BigInteger = /**@type {!Array<number>}*/ ($Arrays.$create([this.f_numberLength__java_math_BigInteger], $$int));
  let i = 0;
  while (bytesLen > highBytes) {
   let /** number */ $value;
   $Arrays.$set(this.f_digits__java_math_BigInteger, ($value = i, i = i + 1 | 0, $value), byteValues[bytesLen = bytesLen - 1 | 0] & 255 | (byteValues[bytesLen = bytesLen - 1 | 0] & 255) << 8 | (byteValues[bytesLen = bytesLen - 1 | 0] & 255) << 16 | (byteValues[bytesLen = bytesLen - 1 | 0] & 255) << 24);
  }
  for (let j = 0; j < bytesLen; j = j + 1 | 0) {
   $Arrays.$set(this.f_digits__java_math_BigInteger, i, this.f_digits__java_math_BigInteger[i] << 8 | byteValues[j] & 255);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** BigInteger */ arg0) {
  return this.m_compareTo__java_math_BigInteger__int(/**@type {BigInteger}*/ ($Casts.$to(arg0, BigInteger)));
 }
 /** @private @nodts */
 $init__void_$p_java_math_BigInteger() {
  this.f_firstNonzeroDigit__java_math_BigInteger_ = - 2 | 0;
  this.f_hashCode__java_math_BigInteger_ = 0;
 }
 /** @nodts @return {BigInteger} */
 static get f_ONE__java_math_BigInteger() {
  return (BigInteger.$clinit(), BigInteger.$static_ONE__java_math_BigInteger);
 }
 /** @nodts @return {BigInteger} */
 static get f_TEN__java_math_BigInteger() {
  return (BigInteger.$clinit(), BigInteger.$static_TEN__java_math_BigInteger);
 }
 /** @nodts @return {BigInteger} */
 static get f_ZERO__java_math_BigInteger() {
  return (BigInteger.$clinit(), BigInteger.$static_ZERO__java_math_BigInteger);
 }
 /** @nodts @return {BigInteger} */
 static get f_MINUS_ONE__java_math_BigInteger() {
  return (BigInteger.$clinit(), BigInteger.$static_MINUS_ONE__java_math_BigInteger);
 }
 /** @nodts @return {Array<BigInteger>} */
 static get f_SMALL_VALUES__java_math_BigInteger() {
  return (BigInteger.$clinit(), BigInteger.$static_SMALL_VALUES__java_math_BigInteger);
 }
 /** @nodts @return {Array<BigInteger>} */
 static get f_TWO_POWS__java_math_BigInteger() {
  return (BigInteger.$clinit(), BigInteger.$static_TWO_POWS__java_math_BigInteger);
 }
 /** @nodts */
 static $clinit() {
  BigInteger.$clinit = () =>{};
  BigInteger.$loadModules();
  Number.$clinit();
  BigInteger.$static_ONE__java_math_BigInteger = BigInteger.$create__int__int(1, 1);
  BigInteger.$static_TEN__java_math_BigInteger = BigInteger.$create__int__int(1, 10);
  BigInteger.$static_ZERO__java_math_BigInteger = BigInteger.$create__int__int(0, 0);
  BigInteger.$static_MINUS_ONE__java_math_BigInteger = BigInteger.$create__int__int(- 1 | 0, 1);
  BigInteger.$static_SMALL_VALUES__java_math_BigInteger = /**@type {!Array<BigInteger>}*/ ($Arrays.$init([BigInteger.$static_ZERO__java_math_BigInteger, BigInteger.$static_ONE__java_math_BigInteger, BigInteger.$create__int__int(1, 2), BigInteger.$create__int__int(1, 3), BigInteger.$create__int__int(1, 4), BigInteger.$create__int__int(1, 5), BigInteger.$create__int__int(1, 6), BigInteger.$create__int__int(1, 7), BigInteger.$create__int__int(1, 8), BigInteger.$create__int__int(1, 9), BigInteger.$static_TEN__java_math_BigInteger], BigInteger));
  BigInteger.$static_TWO_POWS__java_math_BigInteger = /**@type {!Array<BigInteger>}*/ ($Arrays.$create([32], BigInteger));
  for (let i = 0; i < BigInteger.$static_TWO_POWS__java_math_BigInteger.length; i = i + 1 | 0) {
   $Arrays.$set(BigInteger.$static_TWO_POWS__java_math_BigInteger, i, BigInteger.m_valueOf__long__java_math_BigInteger($LongUtils.leftShift($Long.fromInt(1), i)));
  }
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BigInteger;
 }
 
 /** @nodts */
 static $loadModules() {
  ArithmeticException = goog.module.get('java.lang.ArithmeticException$impl');
  Byte = goog.module.get('java.lang.Byte$impl');
  Character = goog.module.get('java.lang.Character$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Float = goog.module.get('java.lang.Float$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  Short = goog.module.get('java.lang.Short$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  System = goog.module.get('java.lang.System$impl');
  BitLevel = goog.module.get('java.math.BitLevel$impl');
  Conversion = goog.module.get('java.math.Conversion$impl');
  Division = goog.module.get('java.math.Division$impl');
  Elementary = goog.module.get('java.math.Elementary$impl');
  Logical = goog.module.get('java.math.Logical$impl');
  Multiplication = goog.module.get('java.math.Multiplication$impl');
  Primality = goog.module.get('java.math.Primality$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  javaemul_internal_$LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@private {BigInteger} @nodts*/
BigInteger.$static_ONE__java_math_BigInteger;
/**@private {BigInteger} @nodts*/
BigInteger.$static_TEN__java_math_BigInteger;
/**@private {BigInteger} @nodts*/
BigInteger.$static_ZERO__java_math_BigInteger;
/**@const {number} @nodts*/
BigInteger.f_EQUALS__java_math_BigInteger = 0;
/**@const {number} @nodts*/
BigInteger.f_GREATER__java_math_BigInteger = 1;
/**@const {number} @nodts*/
BigInteger.f_LESS__java_math_BigInteger = -1;
/**@private {BigInteger} @nodts*/
BigInteger.$static_MINUS_ONE__java_math_BigInteger;
/**@private {Array<BigInteger>} @nodts*/
BigInteger.$static_SMALL_VALUES__java_math_BigInteger;
/**@private {Array<BigInteger>} @nodts*/
BigInteger.$static_TWO_POWS__java_math_BigInteger;
/**@const {!$Long} @nodts*/
BigInteger.f_serialVersionUID__java_math_BigInteger_ = $Long.fromBits(-1455686883, -1929601249) /* -8287574255936472291 */;
Comparable.$markImplementor(BigInteger);
Serializable.$markImplementor(BigInteger);
$Util.$setClassMetadata(BigInteger, 'java.math.BigInteger');

exports = BigInteger;

//# sourceMappingURL=BigInteger.js.map
