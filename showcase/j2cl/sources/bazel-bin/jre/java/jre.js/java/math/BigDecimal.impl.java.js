goog.module('java.math.BigDecimal$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Number = goog.require('java.lang.Number$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArithmeticException = goog.forwardDeclare('java.lang.ArithmeticException$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Float = goog.forwardDeclare('java.lang.Float$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let StringIndexOutOfBoundsException = goog.forwardDeclare('java.lang.StringIndexOutOfBoundsException$impl');
let BigInteger = goog.forwardDeclare('java.math.BigInteger$impl');
let Conversion = goog.forwardDeclare('java.math.Conversion$impl');
let MathContext = goog.forwardDeclare('java.math.MathContext$impl');
let Multiplication = goog.forwardDeclare('java.math.Multiplication$impl');
let RoundingMode = goog.forwardDeclare('java.math.RoundingMode$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @implements {Comparable<BigDecimal>}
 * @implements {Serializable}
 */
class BigDecimal extends j_l_Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_bitLength__java_math_BigDecimal_ = 0;
  /**@type {number} @nodts*/
  this.f_hashCode__java_math_BigDecimal_ = 0;
  /**@type {BigInteger} @nodts*/
  this.f_intVal__java_math_BigDecimal_;
  /**@type {number} @nodts*/
  this.f_precision__java_math_BigDecimal_ = 0;
  /**@type {number} @nodts*/
  this.f_scale__java_math_BigDecimal_ = 0;
  /**@type {number} @nodts*/
  this.f_smallValue__java_math_BigDecimal_ = 0;
  /**@type {?string} @nodts*/
  this.f_toStringImage__java_math_BigDecimal_;
 }
 /** @nodts @return {BigDecimal} */
 static m_valueOf__double__java_math_BigDecimal(/** number */ val) {
  BigDecimal.$clinit();
  if (Double.m_isInfinite__double__boolean(val) || Double.m_isNaN__double__boolean(val)) {
   throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('Infinite or NaN'));
  }
  return BigDecimal.$create__java_lang_String(Double.m_toString__double__java_lang_String(val));
 }
 /** @nodts @return {BigDecimal} */
 static m_valueOf__long__java_math_BigDecimal(/** !$Long */ unscaledVal) {
  BigDecimal.$clinit();
  if ($LongUtils.greaterEquals(unscaledVal, $Long.fromInt(0)) && $LongUtils.less(unscaledVal, $Primitives.widenIntToLong(BigDecimal.f_BI_SCALED_BY_ZERO_LENGTH__java_math_BigDecimal_))) {
   return BigDecimal.f_BI_SCALED_BY_ZERO__java_math_BigDecimal_[$Primitives.narrowLongToInt(unscaledVal)];
  }
  return BigDecimal.$create__long__int(unscaledVal, 0);
 }
 /** @nodts @return {BigDecimal} */
 static m_valueOf__long__int__java_math_BigDecimal(/** !$Long */ unscaledVal, /** number */ scale) {
  BigDecimal.$clinit();
  if (scale == 0) {
   return BigDecimal.m_valueOf__long__java_math_BigDecimal(unscaledVal);
  }
  if ($LongUtils.equals(unscaledVal, $Long.fromInt(0)) && scale >= 0 && scale < BigDecimal.f_ZERO_SCALED_BY__java_math_BigDecimal_.length) {
   return BigDecimal.f_ZERO_SCALED_BY__java_math_BigDecimal_[scale];
  }
  return BigDecimal.$create__long__int(unscaledVal, scale);
 }
 /** @nodts @return {BigDecimal} */
 static m_addAndMult10__java_math_BigDecimal__java_math_BigDecimal__double__java_math_BigDecimal(/** BigDecimal */ thisValue, /** BigDecimal */ augend, /** number */ diffScale) {
  if (diffScale < BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_.length && (Math.max(thisValue.f_bitLength__java_math_BigDecimal_, augend.f_bitLength__java_math_BigDecimal_ + BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)] | 0) + 1 | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(thisValue.f_smallValue__java_math_BigDecimal_ + augend.f_smallValue__java_math_BigDecimal_ * BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)], thisValue.f_scale__java_math_BigDecimal_);
  }
  return BigDecimal.$create__java_math_BigInteger__double(thisValue.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_add__java_math_BigInteger__java_math_BigInteger(Multiplication.m_multiplyByTenPow__java_math_BigInteger__int__java_math_BigInteger(augend.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), $Primitives.narrowDoubleToInt(diffScale))), thisValue.f_scale__java_math_BigDecimal_);
 }
 /** @nodts @return {number} */
 static m_bitLength__double__int(/** number */ value) {
  if (value > - BigDecimal.f_POW47__java_math_BigDecimal_ && value < BigDecimal.f_POW47__java_math_BigDecimal_) {
   if (value == 0) {
    return 0;
   }
   let negative = value < 0;
   if (negative) {
    value = - value;
   }
   let result = $Primitives.narrowDoubleToInt(Math.floor(Math.log(value) / BigDecimal.f_LOG2__java_math_BigDecimal_));
   if (!negative || value != Math.pow(2, result)) {
    result = result + 1 | 0;
   }
   return result;
  }
  return BigDecimal.m_bitLength__long__int($Primitives.narrowDoubleToLong(value));
 }
 /** @nodts @return {number} */
 static m_bitLength__long__int(/** !$Long */ value) {
  if ($LongUtils.less(value, $Long.fromInt(0))) {
   value = $LongUtils.not(value);
  }
  return 64 - Long.m_numberOfLeadingZeros__long__int(value) | 0;
 }
 /** @nodts @return {BigDecimal} */
 static m_divideBigIntegers__java_math_BigInteger__java_math_BigInteger__int__java_math_RoundingMode__java_math_BigDecimal(/** BigInteger */ scaledDividend, /** BigInteger */ scaledDivisor, /** number */ scale, /** RoundingMode */ roundingMode) {
  let quotAndRem = scaledDividend.m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(scaledDivisor);
  let quotient = quotAndRem[0];
  let remainder = quotAndRem[1];
  if (remainder.m_signum__int() == 0) {
   return BigDecimal.$create__java_math_BigInteger__int(quotient, scale);
  }
  let sign = Math.imul(scaledDividend.m_signum__int(), scaledDivisor.m_signum__int());
  let /** number */ compRem;
  if (scaledDivisor.m_bitLength__int() < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   let rem = remainder.m_longValue__long();
   let divisor = scaledDivisor.m_longValue__long();
   compRem = Long.m_compare__long__long__int($LongUtils.leftShift(j_l_Math.m_abs__long__long(rem), 1), j_l_Math.m_abs__long__long(divisor));
   compRem = BigDecimal.m_roundingBehavior__int__int__java_math_RoundingMode__int(quotient.m_testBit__int__boolean(0) ? 1 : 0, Math.imul(sign, 5 + compRem), roundingMode);
  } else {
   compRem = remainder.m_abs__java_math_BigInteger().m_shiftLeftOneBit__java_math_BigInteger_$pp_java_math().m_compareTo__java_math_BigInteger__int(scaledDivisor.m_abs__java_math_BigInteger());
   compRem = BigDecimal.m_roundingBehavior__int__int__java_math_RoundingMode__int(quotient.m_testBit__int__boolean(0) ? 1 : 0, Math.imul(sign, 5 + compRem), roundingMode);
  }
  if (compRem != 0) {
   if (quotient.m_bitLength__int() < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
    return BigDecimal.m_valueOf__long__int__java_math_BigDecimal($LongUtils.plus(quotient.m_longValue__long(), $Primitives.widenIntToLong(compRem)), scale);
   }
   quotient = quotient.m_add__java_math_BigInteger__java_math_BigInteger(BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(compRem)));
   return BigDecimal.$create__java_math_BigInteger__int(quotient, scale);
  }
  return BigDecimal.$create__java_math_BigInteger__int(quotient, scale);
 }
 /** @nodts @return {BigDecimal} */
 static m_dividePrimitiveDoubles__double__double__int__java_math_RoundingMode__java_math_BigDecimal(/** number */ scaledDividend, /** number */ scaledDivisor, /** number */ scale, /** RoundingMode */ roundingMode) {
  let quotient = BigDecimal.m_intDivide__double__double__double(scaledDividend, scaledDivisor);
  let remainder = scaledDividend % scaledDivisor;
  let sign = Double.m_compare__double__double__int(scaledDividend * scaledDivisor, 0);
  if (remainder != 0) {
   let /** number */ compRem;
   compRem = Double.m_compare__double__double__int(Math.abs(remainder) * 2, Math.abs(scaledDivisor));
   quotient += BigDecimal.m_roundingBehavior__int__int__java_math_RoundingMode__int($Primitives.narrowDoubleToInt(quotient) & 1, Math.imul(sign, 5 + compRem), roundingMode);
  }
  return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(quotient, scale);
 }
 /** @nodts @return {number} */
 static m_intDivide__double__double__double(/** number */ dividend, /** number */ divisor) {
  let quotient = dividend / divisor;
  return quotient > 0 ? Math.floor(quotient) : Math.ceil(quotient);
 }
 /** @nodts @return {boolean} */
 static m_isValidBigUnscaledDecimal__java_lang_String__boolean(/** ?string */ str) {
  if ($Equality.$same(BigDecimal.f_unscaledRegex__java_math_BigDecimal_, null)) {
   BigDecimal.f_unscaledRegex__java_math_BigDecimal_ = new RegExp('^[+-]?\\d*$', 'i');
  }
  return BigDecimal.f_unscaledRegex__java_math_BigDecimal_.test(str);
 }
 /** @nodts @return {number} */
 static m_parseUnscaled__java_lang_String__double(/** ?string */ str) {
  return BigDecimal.m_isValidBigUnscaledDecimal__java_lang_String__boolean(str) ? Double.m_parseDouble__java_lang_String__double(str) : Double.f_NaN__java_lang_Double;
 }
 /** @nodts @return {number} */
 static m_roundingBehavior__int__int__java_math_RoundingMode__int(/** number */ parityBit, /** number */ fraction, /** RoundingMode */ roundingMode) {
  let increment = 0;
  switch (roundingMode.ordinal()) {
   case RoundingMode.$ordinal_UNNECESSARY__java_math_RoundingMode: 
    if (fraction != 0) {
     throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Rounding necessary'));
    }
    break;
   case RoundingMode.$ordinal_UP__java_math_RoundingMode: 
    increment = Integer.m_signum__int__int(fraction);
    break;
   case RoundingMode.$ordinal_DOWN__java_math_RoundingMode: 
    break;
   case RoundingMode.$ordinal_CEILING__java_math_RoundingMode: 
    increment = Math.max(Integer.m_signum__int__int(fraction), 0);
    break;
   case RoundingMode.$ordinal_FLOOR__java_math_RoundingMode: 
    increment = Math.min(Integer.m_signum__int__int(fraction), 0);
    break;
   case RoundingMode.$ordinal_HALF_UP__java_math_RoundingMode: 
    if (j_l_Math.m_abs__int__int(fraction) >= 5) {
     increment = Integer.m_signum__int__int(fraction);
    }
    break;
   case RoundingMode.$ordinal_HALF_DOWN__java_math_RoundingMode: 
    if (j_l_Math.m_abs__int__int(fraction) > 5) {
     increment = Integer.m_signum__int__int(fraction);
    }
    break;
   case RoundingMode.$ordinal_HALF_EVEN__java_math_RoundingMode: 
    if ((j_l_Math.m_abs__int__int(fraction) + parityBit | 0) > 5) {
     increment = Integer.m_signum__int__int(fraction);
    }
    break;
  }
  return increment;
 }
 /** @nodts @return {number} */
 static m_toIntScale__double__int(/** number */ doubleScale) {
  if (doubleScale < Integer.f_MIN_VALUE__java_lang_Integer) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Overflow'));
  } else if (doubleScale > Integer.f_MAX_VALUE__java_lang_Integer) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Underflow'));
  } else {
   return $Primitives.narrowDoubleToInt(doubleScale);
  }
 }
 /** @nodts @return {BigDecimal} */
 static m_valueOf__double__double__java_math_BigDecimal(/** number */ smallValue, /** number */ scale) {
  return BigDecimal.$create__double__double(smallValue, scale);
 }
 /** @nodts @return {BigDecimal} */
 static m_zeroScaledBy__double__java_math_BigDecimal(/** number */ doubleScale) {
  if (doubleScale == $Primitives.narrowDoubleToInt(doubleScale)) {
   return BigDecimal.m_valueOf__long__int__java_math_BigDecimal($Long.fromInt(0), $Primitives.narrowDoubleToInt(doubleScale));
  }
  if (doubleScale >= 0) {
   return BigDecimal.$create__long__int($Long.fromInt(0), Integer.f_MAX_VALUE__java_lang_Integer);
  }
  return BigDecimal.$create__long__int($Long.fromInt(0), Integer.f_MIN_VALUE__java_lang_Integer);
 }
 //Factory method corresponding to constructor 'BigDecimal(BigInteger)'.
 /** @nodts @return {!BigDecimal} */
 static $create__java_math_BigInteger(/** BigInteger */ val) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__java_math_BigInteger__void(val);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(BigInteger)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__java_math_BigInteger__void(/** BigInteger */ val) {
  this.$ctor__java_math_BigDecimal__java_math_BigInteger__int__void(val, 0);
 }
 //Factory method corresponding to constructor 'BigDecimal(BigInteger, int)'.
 /** @nodts @return {!BigDecimal} */
 static $create__java_math_BigInteger__int(/** BigInteger */ unscaledVal, /** number */ scale) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__java_math_BigInteger__int__void(unscaledVal, scale);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(BigInteger, int)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__java_math_BigInteger__int__void(/** BigInteger */ unscaledVal, /** number */ scale) {
  this.$ctor__java_math_BigDecimal__java_math_BigInteger__double__void(unscaledVal, scale);
 }
 //Factory method corresponding to constructor 'BigDecimal(BigInteger, int, MathContext)'.
 /** @nodts @return {!BigDecimal} */
 static $create__java_math_BigInteger__int__java_math_MathContext(/** BigInteger */ unscaledVal, /** number */ scale, /** MathContext */ mc) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__java_math_BigInteger__int__java_math_MathContext__void(unscaledVal, scale, mc);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(BigInteger, int, MathContext)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__java_math_BigInteger__int__java_math_MathContext__void(/** BigInteger */ unscaledVal, /** number */ scale, /** MathContext */ mc) {
  this.$ctor__java_math_BigDecimal__java_math_BigInteger__int__void(unscaledVal, scale);
  this.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
 }
 //Factory method corresponding to constructor 'BigDecimal(BigInteger, MathContext)'.
 /** @nodts @return {!BigDecimal} */
 static $create__java_math_BigInteger__java_math_MathContext(/** BigInteger */ val, /** MathContext */ mc) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__java_math_BigInteger__java_math_MathContext__void(val, mc);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(BigInteger, MathContext)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__java_math_BigInteger__java_math_MathContext__void(/** BigInteger */ val, /** MathContext */ mc) {
  this.$ctor__java_math_BigDecimal__java_math_BigInteger__void(val);
  this.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
 }
 //Factory method corresponding to constructor 'BigDecimal(char[])'.
 /** @nodts @return {!BigDecimal} */
 static $create__arrayOf_char(/** Array<number> */ in_1) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__arrayOf_char__void(in_1);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(char[])'.
 /** @nodts */
 $ctor__java_math_BigDecimal__arrayOf_char__void(/** Array<number> */ in_1) {
  this.$ctor__java_math_BigDecimal__arrayOf_char__int__int__void(in_1, 0, in_1.length);
 }
 //Factory method corresponding to constructor 'BigDecimal(char[], int, int)'.
 /** @nodts @return {!BigDecimal} */
 static $create__arrayOf_char__int__int(/** Array<number> */ in_1, /** number */ offset, /** number */ len) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__arrayOf_char__int__int__void(in_1, offset, len);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(char[], int, int)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__arrayOf_char__int__int__void(/** Array<number> */ in_1, /** number */ offset, /** number */ len) {
  this.$ctor__java_lang_Number__void();
  try {
   this.m_initFrom__java_lang_String__void_$p_java_math_BigDecimal(j_l_String.$create__arrayOf_char__int__int(in_1, offset, len));
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (StringIndexOutOfBoundsException.$isInstance(__$exc)) {
    let e = /**@type {StringIndexOutOfBoundsException}*/ (__$exc);
    throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String(e.m_getMessage__java_lang_String()));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 //Factory method corresponding to constructor 'BigDecimal(char[], int, int, MathContext)'.
 /** @nodts @return {!BigDecimal} */
 static $create__arrayOf_char__int__int__java_math_MathContext(/** Array<number> */ in_1, /** number */ offset, /** number */ len, /** MathContext */ mc) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__arrayOf_char__int__int__java_math_MathContext__void(in_1, offset, len, mc);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(char[], int, int, MathContext)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__arrayOf_char__int__int__java_math_MathContext__void(/** Array<number> */ in_1, /** number */ offset, /** number */ len, /** MathContext */ mc) {
  this.$ctor__java_math_BigDecimal__arrayOf_char__int__int__void(in_1, offset, len);
  this.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
 }
 //Factory method corresponding to constructor 'BigDecimal(char[], MathContext)'.
 /** @nodts @return {!BigDecimal} */
 static $create__arrayOf_char__java_math_MathContext(/** Array<number> */ in_1, /** MathContext */ mc) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__arrayOf_char__java_math_MathContext__void(in_1, mc);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(char[], MathContext)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__arrayOf_char__java_math_MathContext__void(/** Array<number> */ in_1, /** MathContext */ mc) {
  this.$ctor__java_math_BigDecimal__arrayOf_char__int__int__void(in_1, 0, in_1.length);
  this.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
 }
 //Factory method corresponding to constructor 'BigDecimal(double)'.
 /** @nodts @return {!BigDecimal} */
 static $create__double(/** number */ val) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__double__void(val);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(double)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__double__void(/** number */ val) {
  this.$ctor__java_lang_Number__void();
  if (Double.m_isInfinite__double__boolean(val) || Double.m_isNaN__double__boolean(val)) {
   throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('Infinite or NaN'));
  }
  this.m_initFrom__java_lang_String__void_$p_java_math_BigDecimal(Number.prototype.toPrecision.call(val, 20));
 }
 //Factory method corresponding to constructor 'BigDecimal(double, MathContext)'.
 /** @nodts @return {!BigDecimal} */
 static $create__double__java_math_MathContext(/** number */ val, /** MathContext */ mc) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__double__java_math_MathContext__void(val, mc);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(double, MathContext)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__double__java_math_MathContext__void(/** number */ val, /** MathContext */ mc) {
  this.$ctor__java_math_BigDecimal__double__void(val);
  this.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
 }
 //Factory method corresponding to constructor 'BigDecimal(int)'.
 /** @nodts @return {!BigDecimal} */
 static $create__int(/** number */ val) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__int__void(val);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(int)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__int__void(/** number */ val) {
  this.$ctor__java_math_BigDecimal__long__int__void($Primitives.widenIntToLong(val), 0);
 }
 //Factory method corresponding to constructor 'BigDecimal(int, MathContext)'.
 /** @nodts @return {!BigDecimal} */
 static $create__int__java_math_MathContext(/** number */ val, /** MathContext */ mc) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__int__java_math_MathContext__void(val, mc);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(int, MathContext)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__int__java_math_MathContext__void(/** number */ val, /** MathContext */ mc) {
  this.$ctor__java_math_BigDecimal__long__int__void($Primitives.widenIntToLong(val), 0);
  this.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
 }
 //Factory method corresponding to constructor 'BigDecimal(long)'.
 /** @nodts @return {!BigDecimal} */
 static $create__long(/** !$Long */ val) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__long__void(val);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(long)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__long__void(/** !$Long */ val) {
  this.$ctor__java_math_BigDecimal__long__int__void(val, 0);
 }
 //Factory method corresponding to constructor 'BigDecimal(long, MathContext)'.
 /** @nodts @return {!BigDecimal} */
 static $create__long__java_math_MathContext(/** !$Long */ val, /** MathContext */ mc) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__long__java_math_MathContext__void(val, mc);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(long, MathContext)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__long__java_math_MathContext__void(/** !$Long */ val, /** MathContext */ mc) {
  this.$ctor__java_math_BigDecimal__long__void(val);
  this.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
 }
 //Factory method corresponding to constructor 'BigDecimal(String)'.
 /** @nodts @return {!BigDecimal} */
 static $create__java_lang_String(/** ?string */ val) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__java_lang_String__void(val);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(String)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__java_lang_String__void(/** ?string */ val) {
  this.$ctor__java_lang_Number__void();
  this.m_initFrom__java_lang_String__void_$p_java_math_BigDecimal(val);
 }
 //Factory method corresponding to constructor 'BigDecimal(String, MathContext)'.
 /** @nodts @return {!BigDecimal} */
 static $create__java_lang_String__java_math_MathContext(/** ?string */ val, /** MathContext */ mc) {
  BigDecimal.$clinit();
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__java_lang_String__java_math_MathContext__void(val, mc);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(String, MathContext)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__java_lang_String__java_math_MathContext__void(/** ?string */ val, /** MathContext */ mc) {
  this.$ctor__java_math_BigDecimal__arrayOf_char__int__int__void(j_l_String.m_toCharArray__java_lang_String__arrayOf_char(val), 0, j_l_String.m_length__java_lang_String__int(val));
  this.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
 }
 //Factory method corresponding to constructor 'BigDecimal(BigInteger, double)'.
 /** @nodts @return {!BigDecimal} */
 static $create__java_math_BigInteger__double(/** BigInteger */ unscaledVal, /** number */ scale) {
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__java_math_BigInteger__double__void(unscaledVal, scale);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(BigInteger, double)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__java_math_BigInteger__double__void(/** BigInteger */ unscaledVal, /** number */ scale) {
  this.$ctor__java_lang_Number__void();
  this.f_scale__java_math_BigDecimal_ = scale;
  this.m_setUnscaledValue__java_math_BigInteger__void_$p_java_math_BigDecimal(/**@type {BigInteger}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(unscaledVal), BigInteger)));
 }
 //Factory method corresponding to constructor 'BigDecimal(double, double)'.
 /** @nodts @return {!BigDecimal} */
 static $create__double__double(/** number */ smallValue, /** number */ scale) {
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__double__double__void(smallValue, scale);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(double, double)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__double__double__void(/** number */ smallValue, /** number */ scale) {
  this.$ctor__java_lang_Number__void();
  this.f_smallValue__java_math_BigDecimal_ = smallValue;
  this.f_scale__java_math_BigDecimal_ = scale;
  this.f_bitLength__java_math_BigDecimal_ = BigDecimal.m_bitLength__double__int(smallValue);
 }
 //Factory method corresponding to constructor 'BigDecimal(long, int)'.
 /** @nodts @return {!BigDecimal} */
 static $create__long__int(/** !$Long */ smallValue, /** number */ scale) {
  let $instance = new BigDecimal();
  $instance.$ctor__java_math_BigDecimal__long__int__void(smallValue, scale);
  return $instance;
 }
 //Initialization from constructor 'BigDecimal(long, int)'.
 /** @nodts */
 $ctor__java_math_BigDecimal__long__int__void(/** !$Long */ smallValue, /** number */ scale) {
  this.$ctor__java_lang_Number__void();
  this.f_scale__java_math_BigDecimal_ = scale;
  this.f_bitLength__java_math_BigDecimal_ = BigDecimal.m_bitLength__long__int(smallValue);
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   this.f_smallValue__java_math_BigDecimal_ = $Primitives.widenLongToDouble(smallValue);
  } else {
   this.f_intVal__java_math_BigDecimal_ = BigInteger.m_valueOf__long__java_math_BigInteger(smallValue);
  }
 }
 /** @nodts @return {BigDecimal} */
 m_abs__java_math_BigDecimal() {
  return this.m_signum__int() < 0 ? this.m_negate__java_math_BigDecimal() : this;
 }
 /** @nodts @return {BigDecimal} */
 m_abs__java_math_MathContext__java_math_BigDecimal(/** MathContext */ mc) {
  return this.m_round__java_math_MathContext__java_math_BigDecimal(mc).m_abs__java_math_BigDecimal();
 }
 /** @nodts @return {BigDecimal} */
 m_add__java_math_BigDecimal__java_math_BigDecimal(/** BigDecimal */ augend) {
  let diffScale = this.f_scale__java_math_BigDecimal_ - augend.f_scale__java_math_BigDecimal_;
  if (this.m_isZero__boolean_$p_java_math_BigDecimal()) {
   if (diffScale <= 0) {
    return augend;
   }
   if (augend.m_isZero__boolean_$p_java_math_BigDecimal()) {
    return this;
   }
  } else if (augend.m_isZero__boolean_$p_java_math_BigDecimal()) {
   if (diffScale >= 0) {
    return this;
   }
  }
  if (diffScale == 0) {
   if ((Math.max(this.f_bitLength__java_math_BigDecimal_, augend.f_bitLength__java_math_BigDecimal_) + 1 | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
    return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_ + augend.f_smallValue__java_math_BigDecimal_, this.f_scale__java_math_BigDecimal_);
   }
   return BigDecimal.$create__java_math_BigInteger__double(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_add__java_math_BigInteger__java_math_BigInteger(augend.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal()), this.f_scale__java_math_BigDecimal_);
  } else if (diffScale > 0) {
   return BigDecimal.m_addAndMult10__java_math_BigDecimal__java_math_BigDecimal__double__java_math_BigDecimal(this, augend, diffScale);
  } else {
   return BigDecimal.m_addAndMult10__java_math_BigDecimal__java_math_BigDecimal__double__java_math_BigDecimal(augend, this, - diffScale);
  }
 }
 /** @nodts @return {BigDecimal} */
 m_add__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(/** BigDecimal */ augend, /** MathContext */ mc) {
  let /** BigDecimal */ larger;
  let /** BigDecimal */ smaller;
  let /** BigInteger */ tempBI;
  let diffScale = this.f_scale__java_math_BigDecimal_ - augend.f_scale__java_math_BigDecimal_;
  let /** number */ largerSignum;
  if (augend.m_isZero__boolean_$p_java_math_BigDecimal() || this.m_isZero__boolean_$p_java_math_BigDecimal() || mc.m_getPrecision__int() == 0) {
   return this.m_add__java_math_BigDecimal__java_math_BigDecimal(augend).m_round__java_math_MathContext__java_math_BigDecimal(mc);
  }
  if (this.m_approxPrecision__double_$p_java_math_BigDecimal() < diffScale - 1) {
   larger = augend;
   smaller = this;
  } else if (augend.m_approxPrecision__double_$p_java_math_BigDecimal() < - diffScale - 1) {
   larger = this;
   smaller = augend;
  } else {
   return this.m_add__java_math_BigDecimal__java_math_BigDecimal(augend).m_round__java_math_MathContext__java_math_BigDecimal(mc);
  }
  if (mc.m_getPrecision__int() >= larger.m_approxPrecision__double_$p_java_math_BigDecimal()) {
   return this.m_add__java_math_BigDecimal__java_math_BigDecimal(augend).m_round__java_math_MathContext__java_math_BigDecimal(mc);
  }
  largerSignum = larger.m_signum__int();
  if (largerSignum == smaller.m_signum__int()) {
   tempBI = Multiplication.m_multiplyByPositiveInt__java_math_BigInteger__int__java_math_BigInteger(larger.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), 10).m_add__java_math_BigInteger__java_math_BigInteger(BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(largerSignum)));
  } else {
   tempBI = larger.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_subtract__java_math_BigInteger__java_math_BigInteger(BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(largerSignum)));
   tempBI = Multiplication.m_multiplyByPositiveInt__java_math_BigInteger__int__java_math_BigInteger(tempBI, 10).m_add__java_math_BigInteger__java_math_BigInteger(BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(Math.imul(largerSignum, 9))));
  }
  larger = BigDecimal.$create__java_math_BigInteger__double(tempBI, larger.f_scale__java_math_BigDecimal_ + 1);
  return larger.m_round__java_math_MathContext__java_math_BigDecimal(mc);
 }
 /** @nodts @return {number} */
 m_byteValueExact__byte() {
  return $Primitives.narrowLongToByte(this.m_valueExact__int__long_$p_java_math_BigDecimal(8));
 }
 /** @nodts @return {number} */
 m_compareTo__java_math_BigDecimal__int(/** BigDecimal */ val) {
  let thisSign = this.m_signum__int();
  let valueSign = val.m_signum__int();
  if (thisSign == valueSign) {
   if (this.f_scale__java_math_BigDecimal_ == val.f_scale__java_math_BigDecimal_ && this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_ && val.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
    return this.f_smallValue__java_math_BigDecimal_ < val.f_smallValue__java_math_BigDecimal_ ? - 1 | 0 : this.f_smallValue__java_math_BigDecimal_ > val.f_smallValue__java_math_BigDecimal_ ? 1 : 0;
   }
   let diffScale = this.f_scale__java_math_BigDecimal_ - val.f_scale__java_math_BigDecimal_;
   let diffPrecision = this.m_approxPrecision__double_$p_java_math_BigDecimal() - val.m_approxPrecision__double_$p_java_math_BigDecimal();
   if (diffPrecision > diffScale + 1) {
    return thisSign;
   } else if (diffPrecision < diffScale - 1) {
    return - thisSign | 0;
   } else {
    let thisUnscaled = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
    let valUnscaled = val.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
    if (diffScale < 0) {
     thisUnscaled = thisUnscaled.m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(- diffScale));
    } else if (diffScale > 0) {
     valUnscaled = valUnscaled.m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(diffScale));
    }
    return thisUnscaled.m_compareTo__java_math_BigInteger__int(valUnscaled);
   }
  } else if (thisSign < valueSign) {
   return - 1 | 0;
  } else {
   return 1;
  }
 }
 /** @nodts @return {BigDecimal} */
 m_divide__java_math_BigDecimal__java_math_BigDecimal(/** BigDecimal */ divisor) {
  let p = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
  let q = divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
  let /** BigInteger */ gcd;
  let /** Array<BigInteger> */ quotAndRem;
  let diffScale = this.f_scale__java_math_BigDecimal_ - divisor.f_scale__java_math_BigDecimal_;
  let /** number */ newScale;
  let /** number */ k;
  let l = 0;
  let i = 1;
  let lastPow = BigDecimal.f_FIVE_POW__java_math_BigDecimal_.length - 1 | 0;
  if (divisor.m_isZero__boolean_$p_java_math_BigDecimal()) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Division by zero'));
  }
  if (p.m_signum__int() == 0) {
   return BigDecimal.m_zeroScaledBy__double__java_math_BigDecimal(diffScale);
  }
  gcd = p.m_gcd__java_math_BigInteger__java_math_BigInteger(q);
  p = p.m_divide__java_math_BigInteger__java_math_BigInteger(gcd);
  q = q.m_divide__java_math_BigInteger__java_math_BigInteger(gcd);
  k = q.m_getLowestSetBit__int();
  q = q.m_shiftRight__int__java_math_BigInteger(k);
  do {
   quotAndRem = q.m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(BigDecimal.f_FIVE_POW__java_math_BigDecimal_[i]);
   if (quotAndRem[1].m_signum__int() == 0) {
    l = l + i | 0;
    if (i < lastPow) {
     i = i + 1 | 0;
    }
    q = quotAndRem[0];
   } else {
    if (i == 1) {
     break;
    }
    i = 1;
   }
  } while (true);
  if (!q.m_abs__java_math_BigInteger().equals(BigInteger.f_ONE__java_math_BigInteger)) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Non-terminating decimal expansion; no exact representable decimal result'));
  }
  if (q.m_signum__int() < 0) {
   p = p.m_negate__java_math_BigInteger();
  }
  newScale = BigDecimal.m_toIntScale__double__int(diffScale + Math.max(k, l));
  i = k - l | 0;
  p = i > 0 ? Multiplication.m_multiplyByFivePow__java_math_BigInteger__int__java_math_BigInteger(p, i) : p.m_shiftLeft__int__java_math_BigInteger(- i | 0);
  return BigDecimal.$create__java_math_BigInteger__int(p, newScale);
 }
 /** @nodts @return {BigDecimal} */
 m_divide__java_math_BigDecimal__int__java_math_BigDecimal(/** BigDecimal */ divisor, /** number */ roundingMode) {
  return this.m_divide__java_math_BigDecimal__int__java_math_RoundingMode__java_math_BigDecimal(divisor, $Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_), RoundingMode.m_valueOf__int__java_math_RoundingMode(roundingMode));
 }
 /** @nodts @return {BigDecimal} */
 m_divide__java_math_BigDecimal__int__int__java_math_BigDecimal(/** BigDecimal */ divisor, /** number */ scale, /** number */ roundingMode) {
  return this.m_divide__java_math_BigDecimal__int__java_math_RoundingMode__java_math_BigDecimal(divisor, scale, RoundingMode.m_valueOf__int__java_math_RoundingMode(roundingMode));
 }
 /** @nodts @return {BigDecimal} */
 m_divide__java_math_BigDecimal__int__java_math_RoundingMode__java_math_BigDecimal(/** BigDecimal */ divisor, /** number */ scale, /** RoundingMode */ roundingMode) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(roundingMode);
  if (divisor.m_isZero__boolean_$p_java_math_BigDecimal()) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Division by zero'));
  }
  let diffScale = this.f_scale__java_math_BigDecimal_ - divisor.f_scale__java_math_BigDecimal_ - scale;
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_ && divisor.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   if (diffScale == 0) {
    return BigDecimal.m_dividePrimitiveDoubles__double__double__int__java_math_RoundingMode__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_, divisor.f_smallValue__java_math_BigDecimal_, scale, roundingMode);
   } else if (diffScale > 0) {
    if (diffScale < BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_.length && (divisor.f_bitLength__java_math_BigDecimal_ + BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)] | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
     return BigDecimal.m_dividePrimitiveDoubles__double__double__int__java_math_RoundingMode__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_, divisor.f_smallValue__java_math_BigDecimal_ * BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)], scale, roundingMode);
    }
   } else {
    if (- diffScale < BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_.length && (this.f_bitLength__java_math_BigDecimal_ + BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(- diffScale)] | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
     return BigDecimal.m_dividePrimitiveDoubles__double__double__int__java_math_RoundingMode__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_ * BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(- diffScale)], divisor.f_smallValue__java_math_BigDecimal_, scale, roundingMode);
    }
   }
  }
  let scaledDividend = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
  let scaledDivisor = divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
  if (diffScale > 0) {
   scaledDivisor = Multiplication.m_multiplyByTenPow__java_math_BigInteger__int__java_math_BigInteger(scaledDivisor, $Primitives.narrowDoubleToInt(diffScale));
  } else if (diffScale < 0) {
   scaledDividend = Multiplication.m_multiplyByTenPow__java_math_BigInteger__int__java_math_BigInteger(scaledDividend, $Primitives.narrowDoubleToInt(- diffScale));
  }
  return BigDecimal.m_divideBigIntegers__java_math_BigInteger__java_math_BigInteger__int__java_math_RoundingMode__java_math_BigDecimal(scaledDividend, scaledDivisor, scale, roundingMode);
 }
 /** @nodts @return {BigDecimal} */
 m_divide__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(/** BigDecimal */ divisor, /** MathContext */ mc) {
  let traillingZeros = $Primitives.widenLongToDouble($LongUtils.plus($Primitives.widenIntToLong(mc.m_getPrecision__int()), $Long.fromInt(2))) + divisor.m_approxPrecision__double_$p_java_math_BigDecimal() - this.m_approxPrecision__double_$p_java_math_BigDecimal();
  let diffScale = this.f_scale__java_math_BigDecimal_ - divisor.f_scale__java_math_BigDecimal_;
  let newScale = diffScale;
  let /** number */ compRem;
  let i = 1;
  let lastPow = BigDecimal.f_TEN_POW__java_math_BigDecimal_.length - 1 | 0;
  let /** BigInteger */ integerQuot;
  let quotAndRem = /**@type {!Array<BigInteger>}*/ ($Arrays.$init([this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal()], BigInteger));
  if (mc.m_getPrecision__int() == 0 || this.m_isZero__boolean_$p_java_math_BigDecimal() || divisor.m_isZero__boolean_$p_java_math_BigDecimal()) {
   return this.m_divide__java_math_BigDecimal__java_math_BigDecimal(divisor);
  }
  if (traillingZeros > 0) {
   $Arrays.$set(quotAndRem, 0, this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(traillingZeros)));
   newScale += traillingZeros;
  }
  quotAndRem = quotAndRem[0].m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal());
  integerQuot = quotAndRem[0];
  if (quotAndRem[1].m_signum__int() != 0) {
   compRem = quotAndRem[1].m_shiftLeftOneBit__java_math_BigInteger_$pp_java_math().m_compareTo__java_math_BigInteger__int(divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal());
   integerQuot = integerQuot.m_multiply__java_math_BigInteger__java_math_BigInteger(BigInteger.f_TEN__java_math_BigInteger).m_add__java_math_BigInteger__java_math_BigInteger(BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(Math.imul(quotAndRem[0].m_signum__int(), 5 + compRem))));
   newScale++;
  } else {
   while (!integerQuot.m_testBit__int__boolean(0)) {
    quotAndRem = integerQuot.m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(BigDecimal.f_TEN_POW__java_math_BigDecimal_[i]);
    if (quotAndRem[1].m_signum__int() == 0 && newScale - i >= diffScale) {
     newScale -= i;
     if (i < lastPow) {
      i = i + 1 | 0;
     }
     integerQuot = quotAndRem[0];
    } else {
     if (i == 1) {
      break;
     }
     i = 1;
    }
   }
  }
  return BigDecimal.$create__java_math_BigInteger__int__java_math_MathContext(integerQuot, BigDecimal.m_toIntScale__double__int(newScale), mc);
 }
 /** @nodts @return {BigDecimal} */
 m_divide__java_math_BigDecimal__java_math_RoundingMode__java_math_BigDecimal(/** BigDecimal */ divisor, /** RoundingMode */ roundingMode) {
  return this.m_divide__java_math_BigDecimal__int__java_math_RoundingMode__java_math_BigDecimal(divisor, $Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_), roundingMode);
 }
 /** @nodts @return {Array<BigDecimal>} */
 m_divideAndRemainder__java_math_BigDecimal__arrayOf_java_math_BigDecimal(/** BigDecimal */ divisor) {
  let quotAndRem = /**@type {!Array<BigDecimal>}*/ ($Arrays.$create([2], BigDecimal));
  $Arrays.$set(quotAndRem, 0, this.m_divideToIntegralValue__java_math_BigDecimal__java_math_BigDecimal(divisor));
  $Arrays.$set(quotAndRem, 1, this.m_subtract__java_math_BigDecimal__java_math_BigDecimal(quotAndRem[0].m_multiply__java_math_BigDecimal__java_math_BigDecimal(divisor)));
  return quotAndRem;
 }
 /** @nodts @return {Array<BigDecimal>} */
 m_divideAndRemainder__java_math_BigDecimal__java_math_MathContext__arrayOf_java_math_BigDecimal(/** BigDecimal */ divisor, /** MathContext */ mc) {
  let quotAndRem = /**@type {!Array<BigDecimal>}*/ ($Arrays.$create([2], BigDecimal));
  $Arrays.$set(quotAndRem, 0, this.m_divideToIntegralValue__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(divisor, mc));
  $Arrays.$set(quotAndRem, 1, this.m_subtract__java_math_BigDecimal__java_math_BigDecimal(quotAndRem[0].m_multiply__java_math_BigDecimal__java_math_BigDecimal(divisor)));
  return quotAndRem;
 }
 /** @nodts @return {BigDecimal} */
 m_divideToIntegralValue__java_math_BigDecimal__java_math_BigDecimal(/** BigDecimal */ divisor) {
  let /** BigInteger */ integralValue;
  let /** BigInteger */ powerOfTen;
  let quotAndRem = /**@type {!Array<BigInteger>}*/ ($Arrays.$init([this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal()], BigInteger));
  let newScale = this.f_scale__java_math_BigDecimal_ - divisor.f_scale__java_math_BigDecimal_;
  let tempScale = 0;
  let i = 1;
  let lastPow = BigDecimal.f_TEN_POW__java_math_BigDecimal_.length - 1 | 0;
  if (divisor.m_isZero__boolean_$p_java_math_BigDecimal()) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Division by zero'));
  }
  if (divisor.m_approxPrecision__double_$p_java_math_BigDecimal() + newScale > this.m_approxPrecision__double_$p_java_math_BigDecimal() + 1 || this.m_isZero__boolean_$p_java_math_BigDecimal()) {
   integralValue = BigInteger.f_ZERO__java_math_BigInteger;
  } else if (newScale == 0) {
   integralValue = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_divide__java_math_BigInteger__java_math_BigInteger(divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal());
  } else if (newScale > 0) {
   powerOfTen = Multiplication.m_powerOf10__double__java_math_BigInteger(newScale);
   integralValue = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_divide__java_math_BigInteger__java_math_BigInteger(divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_multiply__java_math_BigInteger__java_math_BigInteger(powerOfTen));
   integralValue = integralValue.m_multiply__java_math_BigInteger__java_math_BigInteger(powerOfTen);
  } else {
   powerOfTen = Multiplication.m_powerOf10__double__java_math_BigInteger(- newScale);
   integralValue = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_multiply__java_math_BigInteger__java_math_BigInteger(powerOfTen).m_divide__java_math_BigInteger__java_math_BigInteger(divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal());
   while (!integralValue.m_testBit__int__boolean(0)) {
    quotAndRem = integralValue.m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(BigDecimal.f_TEN_POW__java_math_BigDecimal_[i]);
    if (quotAndRem[1].m_signum__int() == 0 && tempScale - i >= newScale) {
     tempScale -= i;
     if (i < lastPow) {
      i = i + 1 | 0;
     }
     integralValue = quotAndRem[0];
    } else {
     if (i == 1) {
      break;
     }
     i = 1;
    }
   }
   newScale = tempScale;
  }
  return integralValue.m_signum__int() == 0 ? BigDecimal.m_zeroScaledBy__double__java_math_BigDecimal(newScale) : BigDecimal.$create__java_math_BigInteger__int(integralValue, BigDecimal.m_toIntScale__double__int(newScale));
 }
 /** @nodts @return {BigDecimal} */
 m_divideToIntegralValue__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(/** BigDecimal */ divisor, /** MathContext */ mc) {
  let mcPrecision = mc.m_getPrecision__int();
  let diffPrecision = this.m_precision__int() - divisor.m_precision__int() | 0;
  let lastPow = BigDecimal.f_TEN_POW__java_math_BigDecimal_.length - 1 | 0;
  let diffScale = this.f_scale__java_math_BigDecimal_ - divisor.f_scale__java_math_BigDecimal_;
  let newScale = diffScale;
  let quotPrecision = diffPrecision - diffScale + 1;
  let quotAndRem = /**@type {!Array<BigInteger>}*/ ($Arrays.$create([2], BigInteger));
  if (mcPrecision == 0 || this.m_isZero__boolean_$p_java_math_BigDecimal() || divisor.m_isZero__boolean_$p_java_math_BigDecimal()) {
   return this.m_divideToIntegralValue__java_math_BigDecimal__java_math_BigDecimal(divisor);
  }
  if (quotPrecision <= 0) {
   $Arrays.$set(quotAndRem, 0, BigInteger.f_ZERO__java_math_BigInteger);
  } else if (diffScale == 0) {
   $Arrays.$set(quotAndRem, 0, this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_divide__java_math_BigInteger__java_math_BigInteger(divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal()));
  } else if (diffScale > 0) {
   $Arrays.$set(quotAndRem, 0, this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_divide__java_math_BigInteger__java_math_BigInteger(divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(diffScale))));
   newScale = Math.min(diffScale, Math.max(mcPrecision - quotPrecision + 1, 0));
   $Arrays.$set(quotAndRem, 0, quotAndRem[0].m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(newScale)));
  } else {
   let exp = Math.min(- diffScale, Math.max(mcPrecision - diffPrecision, 0));
   let /** number */ compRemDiv;
   quotAndRem = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(exp)).m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal());
   newScale += exp;
   exp = - newScale;
   if (quotAndRem[1].m_signum__int() != 0 && exp > 0) {
    compRemDiv = BigDecimal.$create__java_math_BigInteger(quotAndRem[1]).m_precision__int() + exp - divisor.m_precision__int();
    if (compRemDiv == 0) {
     $Arrays.$set(quotAndRem, 1, quotAndRem[1].m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(exp)).m_divide__java_math_BigInteger__java_math_BigInteger(divisor.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal()));
     compRemDiv = j_l_Math.m_abs__int__int(quotAndRem[1].m_signum__int());
    }
    if (compRemDiv > 0) {
     throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Division impossible'));
    }
   }
  }
  if (quotAndRem[0].m_signum__int() == 0) {
   return BigDecimal.m_zeroScaledBy__double__java_math_BigDecimal(diffScale);
  }
  let strippedBI = quotAndRem[0];
  let integralValue = BigDecimal.$create__java_math_BigInteger(quotAndRem[0]);
  let resultPrecision = integralValue.m_precision__int();
  let i = 1;
  while (!strippedBI.m_testBit__int__boolean(0)) {
   quotAndRem = strippedBI.m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(BigDecimal.f_TEN_POW__java_math_BigDecimal_[i]);
   if (quotAndRem[1].m_signum__int() == 0 && ((resultPrecision - i | 0) >= mcPrecision || newScale - i >= diffScale)) {
    resultPrecision = resultPrecision - i | 0;
    newScale -= i;
    if (i < lastPow) {
     i = i + 1 | 0;
    }
    strippedBI = quotAndRem[0];
   } else {
    if (i == 1) {
     break;
    }
    i = 1;
   }
  }
  if (resultPrecision > mcPrecision) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Division impossible'));
  }
  integralValue.f_scale__java_math_BigDecimal_ = BigDecimal.m_toIntScale__double__int(newScale);
  integralValue.m_setUnscaledValue__java_math_BigInteger__void_$p_java_math_BigDecimal(strippedBI);
  return integralValue;
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
  if (BigDecimal.$isInstance(x)) {
   let x1 = /**@type {BigDecimal}*/ (x);
   return this.f_scale__java_math_BigDecimal_ == x1.f_scale__java_math_BigDecimal_ && this.m_compareTo__java_math_BigDecimal__int(x1) == 0;
  }
  return false;
 }
 /** @override @nodts @return {number} */
 m_floatValue__float() {
  let floatResult = this.m_signum__int();
  let powerOfTwo = this.f_bitLength__java_math_BigDecimal_ - this.f_scale__java_math_BigDecimal_ / BigDecimal.f_LOG10_2__java_math_BigDecimal_;
  if (powerOfTwo < (- 149 | 0) || floatResult == 0) {
   floatResult *= 0;
  } else if (powerOfTwo > 129) {
   floatResult *= Float.f_POSITIVE_INFINITY__java_lang_Float;
  } else {
   floatResult = this.m_doubleValue__double();
  }
  return floatResult;
 }
 /** @override @return {number} */
 hashCode() {
  if (this.f_hashCode__java_math_BigDecimal_ != 0) {
   return this.f_hashCode__java_math_BigDecimal_;
  }
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   let longValue = $Primitives.narrowDoubleToLong(this.f_smallValue__java_math_BigDecimal_);
   this.f_hashCode__java_math_BigDecimal_ = $Primitives.narrowLongToInt($LongUtils.bitAnd(longValue, $Long.fromInt(-1)));
   this.f_hashCode__java_math_BigDecimal_ = Math.imul(33, this.f_hashCode__java_math_BigDecimal_) + $Primitives.narrowLongToInt($LongUtils.bitAnd($LongUtils.rightShiftSigned(longValue, 32), $Long.fromInt(-1))) | 0;
   this.f_hashCode__java_math_BigDecimal_ = Math.imul(17, this.f_hashCode__java_math_BigDecimal_) + $Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_) | 0;
   return this.f_hashCode__java_math_BigDecimal_;
  }
  this.f_hashCode__java_math_BigDecimal_ = Math.imul(17, this.f_intVal__java_math_BigDecimal_.hashCode()) + $Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_) | 0;
  return this.f_hashCode__java_math_BigDecimal_;
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return this.f_scale__java_math_BigDecimal_ <= (- 32 | 0) || this.f_scale__java_math_BigDecimal_ > this.m_approxPrecision__double_$p_java_math_BigDecimal() ? 0 : this.m_toBigInteger__java_math_BigInteger().m_intValue__int();
 }
 /** @nodts @return {number} */
 m_intValueExact__int() {
  return $Primitives.narrowLongToInt(this.m_valueExact__int__long_$p_java_math_BigDecimal(32));
 }
 /** @override @nodts @return {!$Long} */
 m_longValue__long() {
  return this.f_scale__java_math_BigDecimal_ <= (- 64 | 0) || this.f_scale__java_math_BigDecimal_ > this.m_approxPrecision__double_$p_java_math_BigDecimal() ? $Long.fromInt(0) : this.m_toBigInteger__java_math_BigInteger().m_longValue__long();
 }
 /** @nodts @return {!$Long} */
 m_longValueExact__long() {
  return this.m_valueExact__int__long_$p_java_math_BigDecimal(64);
 }
 /** @nodts @return {BigDecimal} */
 m_max__java_math_BigDecimal__java_math_BigDecimal(/** BigDecimal */ val) {
  return this.m_compareTo__java_math_BigDecimal__int(val) >= 0 ? this : val;
 }
 /** @nodts @return {BigDecimal} */
 m_min__java_math_BigDecimal__java_math_BigDecimal(/** BigDecimal */ val) {
  return this.m_compareTo__java_math_BigDecimal__int(val) <= 0 ? this : val;
 }
 /** @nodts @return {BigDecimal} */
 m_movePointLeft__int__java_math_BigDecimal(/** number */ n) {
  return this.m_movePoint__double__java_math_BigDecimal_$p_java_math_BigDecimal(this.f_scale__java_math_BigDecimal_ + n);
 }
 /** @nodts @return {BigDecimal} */
 m_movePointRight__int__java_math_BigDecimal(/** number */ n) {
  return this.m_movePoint__double__java_math_BigDecimal_$p_java_math_BigDecimal(this.f_scale__java_math_BigDecimal_ - n);
 }
 /** @nodts @return {BigDecimal} */
 m_multiply__java_math_BigDecimal__java_math_BigDecimal(/** BigDecimal */ multiplicand) {
  let newScale = this.f_scale__java_math_BigDecimal_ + multiplicand.f_scale__java_math_BigDecimal_;
  if (this.m_isZero__boolean_$p_java_math_BigDecimal() || multiplicand.m_isZero__boolean_$p_java_math_BigDecimal()) {
   return BigDecimal.m_zeroScaledBy__double__java_math_BigDecimal(newScale);
  }
  if ((this.f_bitLength__java_math_BigDecimal_ + multiplicand.f_bitLength__java_math_BigDecimal_ | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_ * multiplicand.f_smallValue__java_math_BigDecimal_, BigDecimal.m_toIntScale__double__int(newScale));
  }
  return BigDecimal.$create__java_math_BigInteger__int(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_multiply__java_math_BigInteger__java_math_BigInteger(multiplicand.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal()), BigDecimal.m_toIntScale__double__int(newScale));
 }
 /** @nodts @return {BigDecimal} */
 m_multiply__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(/** BigDecimal */ multiplicand, /** MathContext */ mc) {
  let result = this.m_multiply__java_math_BigDecimal__java_math_BigDecimal(multiplicand);
  result.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
  return result;
 }
 /** @nodts @return {BigDecimal} */
 m_negate__java_math_BigDecimal() {
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(- this.f_smallValue__java_math_BigDecimal_, this.f_scale__java_math_BigDecimal_);
  }
  return BigDecimal.$create__java_math_BigInteger__double(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_negate__java_math_BigInteger(), this.f_scale__java_math_BigDecimal_);
 }
 /** @nodts @return {BigDecimal} */
 m_negate__java_math_MathContext__java_math_BigDecimal(/** MathContext */ mc) {
  return this.m_round__java_math_MathContext__java_math_BigDecimal(mc).m_negate__java_math_BigDecimal();
 }
 /** @nodts @return {BigDecimal} */
 m_plus__java_math_BigDecimal() {
  return this;
 }
 /** @nodts @return {BigDecimal} */
 m_plus__java_math_MathContext__java_math_BigDecimal(/** MathContext */ mc) {
  return this.m_round__java_math_MathContext__java_math_BigDecimal(mc);
 }
 /** @nodts @return {BigDecimal} */
 m_pow__int__java_math_BigDecimal(/** number */ n) {
  if (n == 0) {
   return BigDecimal.$static_ONE__java_math_BigDecimal;
  }
  if (n < 0 || n > 999999999) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Invalid Operation'));
  }
  let newScale = this.f_scale__java_math_BigDecimal_ * n;
  return this.m_isZero__boolean_$p_java_math_BigDecimal() ? BigDecimal.m_zeroScaledBy__double__java_math_BigDecimal(newScale) : BigDecimal.$create__java_math_BigInteger__int(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_pow__int__java_math_BigInteger(n), BigDecimal.m_toIntScale__double__int(newScale));
 }
 /** @nodts @return {BigDecimal} */
 m_pow__int__java_math_MathContext__java_math_BigDecimal(/** number */ n, /** MathContext */ mc) {
  let m = j_l_Math.m_abs__int__int(n);
  let mcPrecision = mc.m_getPrecision__int();
  let elength = $Primitives.narrowDoubleToInt(Math.log10(m)) + 1 | 0;
  let /** number */ oneBitMask;
  let /** BigDecimal */ accum;
  let newPrecision = mc;
  if (n == 0 || this.m_isZero__boolean_$p_java_math_BigDecimal() && n > 0) {
   return this.m_pow__int__java_math_BigDecimal(n);
  }
  if (m > 999999999 || mcPrecision == 0 && n < 0 || mcPrecision > 0 && elength > mcPrecision) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Invalid Operation'));
  }
  if (mcPrecision > 0) {
   newPrecision = MathContext.$create__int__java_math_RoundingMode(mcPrecision + elength + 1 | 0, mc.m_getRoundingMode__java_math_RoundingMode());
  }
  accum = this.m_round__java_math_MathContext__java_math_BigDecimal(newPrecision);
  oneBitMask = Integer.m_highestOneBit__int__int(m) >> 1;
  while (oneBitMask > 0) {
   accum = accum.m_multiply__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(accum, newPrecision);
   if ((m & oneBitMask) == oneBitMask) {
    accum = accum.m_multiply__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(this, newPrecision);
   }
   oneBitMask >>= 1;
  }
  if (n < 0) {
   accum = BigDecimal.$static_ONE__java_math_BigDecimal.m_divide__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(accum, newPrecision);
  }
  accum.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
  return accum;
 }
 /** @nodts @return {number} */
 m_precision__int() {
  if (this.f_precision__java_math_BigDecimal_ > 0) {
   return this.f_precision__java_math_BigDecimal_;
  }
  let decimalDigits = 1;
  let doubleUnsc = 1;
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   if (this.f_bitLength__java_math_BigDecimal_ >= 1) {
    doubleUnsc = this.f_smallValue__java_math_BigDecimal_;
   }
   decimalDigits += Math.log10(Math.abs(doubleUnsc));
  } else {
   decimalDigits += (this.f_bitLength__java_math_BigDecimal_ - 1 | 0) * BigDecimal.f_LOG10_2__java_math_BigDecimal_;
   if (this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_divide__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(decimalDigits)).m_signum__int() != 0) {
    decimalDigits++;
   }
  }
  this.f_precision__java_math_BigDecimal_ = $Primitives.narrowDoubleToInt(decimalDigits);
  return this.f_precision__java_math_BigDecimal_;
 }
 /** @nodts @return {BigDecimal} */
 m_remainder__java_math_BigDecimal__java_math_BigDecimal(/** BigDecimal */ divisor) {
  return this.m_divideAndRemainder__java_math_BigDecimal__arrayOf_java_math_BigDecimal(divisor)[1];
 }
 /** @nodts @return {BigDecimal} */
 m_remainder__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(/** BigDecimal */ divisor, /** MathContext */ mc) {
  return this.m_divideAndRemainder__java_math_BigDecimal__java_math_MathContext__arrayOf_java_math_BigDecimal(divisor, mc)[1];
 }
 /** @nodts @return {BigDecimal} */
 m_round__java_math_MathContext__java_math_BigDecimal(/** MathContext */ mc) {
  let thisBD = BigDecimal.$create__java_math_BigInteger__double(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), this.f_scale__java_math_BigDecimal_);
  thisBD.m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(mc);
  return thisBD;
 }
 /** @nodts @return {number} */
 m_scale__int() {
  return $Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_);
 }
 /** @nodts @return {BigDecimal} */
 m_scaleByPowerOfTen__int__java_math_BigDecimal(/** number */ n) {
  let newScale = this.f_scale__java_math_BigDecimal_ - n;
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   if (this.f_smallValue__java_math_BigDecimal_ == 0) {
    return BigDecimal.m_zeroScaledBy__double__java_math_BigDecimal(newScale);
   }
   return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_, BigDecimal.m_toIntScale__double__int(newScale));
  }
  return BigDecimal.$create__java_math_BigInteger__int(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), BigDecimal.m_toIntScale__double__int(newScale));
 }
 /** @nodts @return {BigDecimal} */
 m_setScale__int__java_math_BigDecimal(/** number */ newScale) {
  return this.m_setScale__int__java_math_RoundingMode__java_math_BigDecimal(newScale, RoundingMode.f_UNNECESSARY__java_math_RoundingMode);
 }
 /** @nodts @return {BigDecimal} */
 m_setScale__int__int__java_math_BigDecimal(/** number */ newScale, /** number */ roundingMode) {
  return this.m_setScale__int__java_math_RoundingMode__java_math_BigDecimal(newScale, RoundingMode.m_valueOf__int__java_math_RoundingMode(roundingMode));
 }
 /** @nodts @return {BigDecimal} */
 m_setScale__int__java_math_RoundingMode__java_math_BigDecimal(/** number */ newScale, /** RoundingMode */ roundingMode) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(roundingMode);
  let diffScale = newScale - this.f_scale__java_math_BigDecimal_;
  if (diffScale == 0) {
   return this;
  }
  if (diffScale > 0) {
   if (diffScale < BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_.length && (this.f_bitLength__java_math_BigDecimal_ + BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)] | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
    return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_ * BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)], newScale);
   }
   return BigDecimal.$create__java_math_BigInteger__int(Multiplication.m_multiplyByTenPow__java_math_BigInteger__int__java_math_BigInteger(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), $Primitives.narrowDoubleToInt(diffScale)), newScale);
  }
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_ && - diffScale < BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_.length) {
   return BigDecimal.m_dividePrimitiveDoubles__double__double__int__java_math_RoundingMode__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_, BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(- diffScale)], newScale, roundingMode);
  }
  return BigDecimal.m_divideBigIntegers__java_math_BigInteger__java_math_BigInteger__int__java_math_RoundingMode__java_math_BigDecimal(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), Multiplication.m_powerOf10__double__java_math_BigInteger(- diffScale), newScale, roundingMode);
 }
 /** @nodts @return {number} */
 m_shortValueExact__short() {
  return $Primitives.narrowLongToShort(this.m_valueExact__int__long_$p_java_math_BigDecimal(16));
 }
 /** @nodts @return {number} */
 m_signum__int() {
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   return this.f_smallValue__java_math_BigDecimal_ < 0 ? - 1 | 0 : this.f_smallValue__java_math_BigDecimal_ > 0 ? 1 : 0;
  }
  return this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_signum__int();
 }
 /** @nodts @return {BigDecimal} */
 m_stripTrailingZeros__java_math_BigDecimal() {
  let i = 1;
  let lastPow = BigDecimal.f_TEN_POW__java_math_BigDecimal_.length - 1 | 0;
  let newScale = this.f_scale__java_math_BigDecimal_;
  if (this.m_isZero__boolean_$p_java_math_BigDecimal()) {
   return BigDecimal.$create__java_lang_String('0');
  }
  let strippedBI = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
  let /** Array<BigInteger> */ quotAndRem;
  while (!strippedBI.m_testBit__int__boolean(0)) {
   quotAndRem = strippedBI.m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(BigDecimal.f_TEN_POW__java_math_BigDecimal_[i]);
   if (quotAndRem[1].m_signum__int() == 0) {
    newScale -= i;
    if (i < lastPow) {
     i = i + 1 | 0;
    }
    strippedBI = quotAndRem[0];
   } else {
    if (i == 1) {
     break;
    }
    i = 1;
   }
  }
  return BigDecimal.$create__java_math_BigInteger__int(strippedBI, BigDecimal.m_toIntScale__double__int(newScale));
 }
 /** @nodts @return {BigDecimal} */
 m_subtract__java_math_BigDecimal__java_math_BigDecimal(/** BigDecimal */ subtrahend) {
  let diffScale = this.f_scale__java_math_BigDecimal_ - subtrahend.f_scale__java_math_BigDecimal_;
  if (this.m_isZero__boolean_$p_java_math_BigDecimal()) {
   if (diffScale <= 0) {
    return subtrahend.m_negate__java_math_BigDecimal();
   }
   if (subtrahend.m_isZero__boolean_$p_java_math_BigDecimal()) {
    return this;
   }
  } else if (subtrahend.m_isZero__boolean_$p_java_math_BigDecimal()) {
   if (diffScale >= 0) {
    return this;
   }
  }
  if (diffScale == 0) {
   if ((Math.max(this.f_bitLength__java_math_BigDecimal_, subtrahend.f_bitLength__java_math_BigDecimal_) + 1 | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
    return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_ - subtrahend.f_smallValue__java_math_BigDecimal_, this.f_scale__java_math_BigDecimal_);
   }
   return BigDecimal.$create__java_math_BigInteger__double(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_subtract__java_math_BigInteger__java_math_BigInteger(subtrahend.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal()), this.f_scale__java_math_BigDecimal_);
  } else if (diffScale > 0) {
   if (diffScale < BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_.length && (Math.max(this.f_bitLength__java_math_BigDecimal_, subtrahend.f_bitLength__java_math_BigDecimal_ + BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)] | 0) + 1 | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
    return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_ - subtrahend.f_smallValue__java_math_BigDecimal_ * BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)], this.f_scale__java_math_BigDecimal_);
   }
   return BigDecimal.$create__java_math_BigInteger__double(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_subtract__java_math_BigInteger__java_math_BigInteger(Multiplication.m_multiplyByTenPow__java_math_BigInteger__int__java_math_BigInteger(subtrahend.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), $Primitives.narrowDoubleToInt(diffScale))), this.f_scale__java_math_BigDecimal_);
  } else {
   diffScale = - diffScale;
   if (diffScale < BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_.length && (Math.max(this.f_bitLength__java_math_BigDecimal_ + BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)] | 0, subtrahend.f_bitLength__java_math_BigDecimal_) + 1 | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
    return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_ * BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(diffScale)] - subtrahend.f_smallValue__java_math_BigDecimal_, subtrahend.f_scale__java_math_BigDecimal_);
   }
   return BigDecimal.$create__java_math_BigInteger__double(Multiplication.m_multiplyByTenPow__java_math_BigInteger__int__java_math_BigInteger(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), $Primitives.narrowDoubleToInt(diffScale)).m_subtract__java_math_BigInteger__java_math_BigInteger(subtrahend.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal()), subtrahend.f_scale__java_math_BigDecimal_);
  }
 }
 /** @nodts @return {BigDecimal} */
 m_subtract__java_math_BigDecimal__java_math_MathContext__java_math_BigDecimal(/** BigDecimal */ subtrahend, /** MathContext */ mc) {
  let diffScale = subtrahend.f_scale__java_math_BigDecimal_ - this.f_scale__java_math_BigDecimal_;
  let /** number */ thisSignum;
  let /** BigDecimal */ leftOperand;
  let /** BigInteger */ tempBI;
  if (subtrahend.m_isZero__boolean_$p_java_math_BigDecimal() || this.m_isZero__boolean_$p_java_math_BigDecimal() || mc.m_getPrecision__int() == 0) {
   return this.m_subtract__java_math_BigDecimal__java_math_BigDecimal(subtrahend).m_round__java_math_MathContext__java_math_BigDecimal(mc);
  }
  if (subtrahend.m_approxPrecision__double_$p_java_math_BigDecimal() < diffScale - 1) {
   if (mc.m_getPrecision__int() < this.m_approxPrecision__double_$p_java_math_BigDecimal()) {
    thisSignum = this.m_signum__int();
    if (thisSignum != subtrahend.m_signum__int()) {
     tempBI = Multiplication.m_multiplyByPositiveInt__java_math_BigInteger__int__java_math_BigInteger(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), 10).m_add__java_math_BigInteger__java_math_BigInteger(BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(thisSignum)));
    } else {
     tempBI = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_subtract__java_math_BigInteger__java_math_BigInteger(BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(thisSignum)));
     tempBI = Multiplication.m_multiplyByPositiveInt__java_math_BigInteger__int__java_math_BigInteger(tempBI, 10).m_add__java_math_BigInteger__java_math_BigInteger(BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(Math.imul(thisSignum, 9))));
    }
    leftOperand = BigDecimal.$create__java_math_BigInteger__double(tempBI, this.f_scale__java_math_BigDecimal_ + 1);
    return leftOperand.m_round__java_math_MathContext__java_math_BigDecimal(mc);
   }
  }
  return this.m_subtract__java_math_BigDecimal__java_math_BigDecimal(subtrahend).m_round__java_math_MathContext__java_math_BigDecimal(mc);
 }
 /** @nodts @return {BigInteger} */
 m_toBigInteger__java_math_BigInteger() {
  if (this.f_scale__java_math_BigDecimal_ == 0 || this.m_isZero__boolean_$p_java_math_BigDecimal()) {
   return this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
  } else if (this.f_scale__java_math_BigDecimal_ < 0) {
   return this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(- this.f_scale__java_math_BigDecimal_));
  } else {
   return this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_divide__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(this.f_scale__java_math_BigDecimal_));
  }
 }
 /** @nodts @return {BigInteger} */
 m_toBigIntegerExact__java_math_BigInteger() {
  if (this.f_scale__java_math_BigDecimal_ == 0 || this.m_isZero__boolean_$p_java_math_BigDecimal()) {
   return this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
  } else if (this.f_scale__java_math_BigDecimal_ < 0) {
   return this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(- this.f_scale__java_math_BigDecimal_));
  } else {
   let /** Array<BigInteger> */ integerAndFraction;
   if (this.f_scale__java_math_BigDecimal_ > this.m_approxPrecision__double_$p_java_math_BigDecimal() || this.f_scale__java_math_BigDecimal_ > this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_getLowestSetBit__int()) {
    throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Rounding necessary'));
   }
   integerAndFraction = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(this.f_scale__java_math_BigDecimal_));
   if (integerAndFraction[1].m_signum__int() != 0) {
    throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Rounding necessary'));
   }
   return integerAndFraction[0];
  }
 }
 /** @nodts @return {?string} */
 m_toEngineeringString__java_lang_String() {
  let intString = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().toString();
  if (this.f_scale__java_math_BigDecimal_ == 0) {
   return intString;
  }
  let begin = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_signum__int() < 0 ? 2 : 1;
  let end = j_l_String.m_length__java_lang_String__int(intString);
  let exponent = - this.f_scale__java_math_BigDecimal_ + end - begin;
  let result = StringBuilder.$create__java_lang_String(intString);
  if (this.f_scale__java_math_BigDecimal_ > 0 && exponent >= (- 6 | 0)) {
   if (exponent >= 0) {
    result.m_insert__int__char__java_lang_StringBuilder(end - $Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_) | 0, 46 /* '.' */);
   } else {
    result.m_insert__int__java_lang_String__java_lang_StringBuilder(begin - 1 | 0, '0.');
    result.m_insert__int__arrayOf_char__int__int__java_lang_StringBuilder(begin + 1 | 0, BigDecimal.f_CH_ZEROS__java_math_BigDecimal_, 0, - $Primitives.narrowDoubleToInt(exponent) - 1 | 0);
   }
  } else {
   let delta = end - begin | 0;
   let rem = $Primitives.narrowDoubleToInt(exponent % 3);
   if (rem != 0) {
    if (this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_signum__int() == 0) {
     rem = rem < 0 ? - rem | 0 : 3 - rem | 0;
     exponent += rem;
    } else {
     rem = rem < 0 ? rem + 3 | 0 : rem;
     exponent -= rem;
     begin = begin + rem | 0;
    }
    if (delta < 3) {
     for (let i = rem - delta | 0; i > 0; i = i - 1 | 0) {
      let /** number */ $value;
      result.m_insert__int__char__java_lang_StringBuilder(($value = end, end = end + 1 | 0, $value), 48 /* '0' */);
     }
    }
   }
   if ((end - begin | 0) >= 1) {
    result.m_insert__int__char__java_lang_StringBuilder(begin, 46 /* '.' */);
    end = end + 1 | 0;
   }
   if (exponent != 0) {
    result.m_insert__int__char__java_lang_StringBuilder(end, 69 /* 'E' */);
    if (exponent > 0) {
     result.m_insert__int__char__java_lang_StringBuilder(end = end + 1 | 0, 43 /* '+' */);
    }
    result.m_insert__int__java_lang_String__java_lang_StringBuilder(end = end + 1 | 0, Long.m_toString__long__java_lang_String($Primitives.narrowDoubleToLong(exponent)));
   }
  }
  return result.toString();
 }
 /** @nodts @return {?string} */
 m_toPlainString__java_lang_String() {
  let intStr = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().toString();
  if (this.f_scale__java_math_BigDecimal_ == 0 || this.m_isZero__boolean_$p_java_math_BigDecimal() && this.f_scale__java_math_BigDecimal_ < 0) {
   return intStr;
  }
  let begin = this.m_signum__int() < 0 ? 1 : 0;
  let delta = this.f_scale__java_math_BigDecimal_;
  let result = StringBuilder.$create__int(j_l_String.m_length__java_lang_String__int(intStr) + 1 + j_l_Math.m_abs__int__int($Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_)) | 0);
  if (begin == 1) {
   result.m_append__char__java_lang_StringBuilder(45 /* '-' */);
  }
  if (this.f_scale__java_math_BigDecimal_ > 0) {
   delta -= j_l_String.m_length__java_lang_String__int(intStr) - begin | 0;
   if (delta >= 0) {
    result.m_append__java_lang_String__java_lang_StringBuilder('0.');
    for (; delta > BigDecimal.f_CH_ZEROS__java_math_BigDecimal_.length; delta -= BigDecimal.f_CH_ZEROS__java_math_BigDecimal_.length) {
     result.m_append__arrayOf_char__java_lang_StringBuilder(BigDecimal.f_CH_ZEROS__java_math_BigDecimal_);
    }
    result.m_append__arrayOf_char__int__int__java_lang_StringBuilder(BigDecimal.f_CH_ZEROS__java_math_BigDecimal_, 0, $Primitives.narrowDoubleToInt(delta));
    result.m_append__java_lang_String__java_lang_StringBuilder(j_l_String.m_substring__java_lang_String__int__java_lang_String(intStr, begin));
   } else {
    delta = begin - delta;
    result.m_append__java_lang_String__java_lang_StringBuilder(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(intStr, begin, $Primitives.narrowDoubleToInt(delta)));
    result.m_append__char__java_lang_StringBuilder(46 /* '.' */);
    result.m_append__java_lang_String__java_lang_StringBuilder(j_l_String.m_substring__java_lang_String__int__java_lang_String(intStr, $Primitives.narrowDoubleToInt(delta)));
   }
  } else {
   result.m_append__java_lang_String__java_lang_StringBuilder(j_l_String.m_substring__java_lang_String__int__java_lang_String(intStr, begin));
   for (; delta < (- BigDecimal.f_CH_ZEROS__java_math_BigDecimal_.length | 0); delta += BigDecimal.f_CH_ZEROS__java_math_BigDecimal_.length) {
    result.m_append__arrayOf_char__java_lang_StringBuilder(BigDecimal.f_CH_ZEROS__java_math_BigDecimal_);
   }
   result.m_append__arrayOf_char__int__int__java_lang_StringBuilder(BigDecimal.f_CH_ZEROS__java_math_BigDecimal_, 0, $Primitives.narrowDoubleToInt(- delta));
  }
  return result.toString();
 }
 /** @override @return {?string} */
 toString() {
  if (!$Equality.$same(this.f_toStringImage__java_math_BigDecimal_, null)) {
   return this.f_toStringImage__java_math_BigDecimal_;
  }
  if (this.f_bitLength__java_math_BigDecimal_ < 32) {
   this.f_toStringImage__java_math_BigDecimal_ = Conversion.m_toDecimalScaledString__long__int__java_lang_String($Primitives.narrowDoubleToLong(this.f_smallValue__java_math_BigDecimal_), $Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_));
   return this.f_toStringImage__java_math_BigDecimal_;
  }
  let intString = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().toString();
  if (this.f_scale__java_math_BigDecimal_ == 0) {
   return intString;
  }
  let begin = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_signum__int() < 0 ? 2 : 1;
  let end = j_l_String.m_length__java_lang_String__int(intString);
  let exponent = - this.f_scale__java_math_BigDecimal_ + end - begin;
  let result = StringBuilder.$create__();
  result.m_append__java_lang_String__java_lang_StringBuilder(intString);
  if (this.f_scale__java_math_BigDecimal_ > 0 && exponent >= (- 6 | 0)) {
   if (exponent >= 0) {
    result.m_insert__int__char__java_lang_StringBuilder(end - $Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_) | 0, 46 /* '.' */);
   } else {
    result.m_insert__int__java_lang_String__java_lang_StringBuilder(begin - 1 | 0, '0.');
    result.m_insert__int__arrayOf_char__int__int__java_lang_StringBuilder(begin + 1 | 0, BigDecimal.f_CH_ZEROS__java_math_BigDecimal_, 0, - $Primitives.narrowDoubleToInt(exponent) - 1 | 0);
   }
  } else {
   if ((end - begin | 0) >= 1) {
    result.m_insert__int__char__java_lang_StringBuilder(begin, 46 /* '.' */);
    end = end + 1 | 0;
   }
   result.m_insert__int__char__java_lang_StringBuilder(end, 69 /* 'E' */);
   if (exponent > 0) {
    result.m_insert__int__char__java_lang_StringBuilder(end = end + 1 | 0, 43 /* '+' */);
   }
   result.m_insert__int__java_lang_String__java_lang_StringBuilder(end = end + 1 | 0, Long.m_toString__long__java_lang_String($Primitives.narrowDoubleToLong(exponent)));
  }
  this.f_toStringImage__java_math_BigDecimal_ = result.toString();
  return this.f_toStringImage__java_math_BigDecimal_;
 }
 /** @nodts @return {BigDecimal} */
 m_ulp__java_math_BigDecimal() {
  return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(1, this.f_scale__java_math_BigDecimal_);
 }
 /** @nodts @return {BigInteger} */
 m_unscaledValue__java_math_BigInteger() {
  return this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal();
 }
 /** @nodts @return {number} */
 m_approxPrecision__double_$p_java_math_BigDecimal() {
  return this.f_precision__java_math_BigDecimal_ > 0 ? this.f_precision__java_math_BigDecimal_ : Math.floor((this.f_bitLength__java_math_BigDecimal_ - 1 | 0) * BigDecimal.f_LOG10_2__java_math_BigDecimal_) + 1;
 }
 /** @nodts @return {BigInteger} */
 m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal() {
  if ($Equality.$same(this.f_intVal__java_math_BigDecimal_, null)) {
   this.f_intVal__java_math_BigDecimal_ = BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.narrowDoubleToLong(this.f_smallValue__java_math_BigDecimal_));
  }
  return this.f_intVal__java_math_BigDecimal_;
 }
 /** @nodts */
 m_initFrom__java_lang_String__void_$p_java_math_BigDecimal(/** ?string */ val) {
  let begin = 0;
  let offset = 0;
  let last = j_l_String.m_length__java_lang_String__int(val);
  let scaleString = null;
  let /** StringBuilder */ unscaledBuffer;
  unscaledBuffer = StringBuilder.$create__int(j_l_String.m_length__java_lang_String__int(val));
  if (offset < last && j_l_String.m_charAt__java_lang_String__int__char(val, offset) == 43 /* '+' */) {
   offset = offset + 1 | 0;
   begin = begin + 1 | 0;
   if (offset < last && (j_l_String.m_charAt__java_lang_String__int__char(val, offset) == 43 /* '+' */ || j_l_String.m_charAt__java_lang_String__int__char(val, offset) == 45 /* '-' */)) {
    throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('For input string: \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(val) + '\"'));
   }
  }
  while (offset < last && j_l_String.m_charAt__java_lang_String__int__char(val, offset) != 46 /* '.' */ && j_l_String.m_charAt__java_lang_String__int__char(val, offset) != 101 /* 'e' */ && j_l_String.m_charAt__java_lang_String__int__char(val, offset) != 69 /* 'E' */) {
   offset = offset + 1 | 0;
  }
  unscaledBuffer.m_append__java_lang_CharSequence__int__int__java_lang_StringBuilder(val, begin, offset);
  if (offset < last && j_l_String.m_charAt__java_lang_String__int__char(val, offset) == 46 /* '.' */) {
   offset = offset + 1 | 0;
   begin = offset;
   while (offset < last && j_l_String.m_charAt__java_lang_String__int__char(val, offset) != 101 /* 'e' */ && j_l_String.m_charAt__java_lang_String__int__char(val, offset) != 69 /* 'E' */) {
    offset = offset + 1 | 0;
   }
   this.f_scale__java_math_BigDecimal_ = offset - begin | 0;
   unscaledBuffer.m_append__java_lang_CharSequence__int__int__java_lang_StringBuilder(val, begin, offset);
  } else {
   this.f_scale__java_math_BigDecimal_ = 0;
  }
  if (offset < last && (j_l_String.m_charAt__java_lang_String__int__char(val, offset) == 101 /* 'e' */ || j_l_String.m_charAt__java_lang_String__int__char(val, offset) == 69 /* 'E' */)) {
   offset = offset + 1 | 0;
   begin = offset;
   if (offset < last && j_l_String.m_charAt__java_lang_String__int__char(val, offset) == 43 /* '+' */) {
    offset = offset + 1 | 0;
    if (offset < last && j_l_String.m_charAt__java_lang_String__int__char(val, offset) != 45 /* '-' */) {
     begin = begin + 1 | 0;
    }
   }
   scaleString = j_l_String.m_substring__java_lang_String__int__int__java_lang_String(val, begin, last);
   this.f_scale__java_math_BigDecimal_ = this.f_scale__java_math_BigDecimal_ - Integer.m_parseInt__java_lang_String__int(scaleString);
   if (this.f_scale__java_math_BigDecimal_ != $Primitives.narrowDoubleToInt(this.f_scale__java_math_BigDecimal_)) {
    throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('Exponent overflow.'));
   }
  }
  let unscaled = unscaledBuffer.toString();
  if (j_l_String.m_length__java_lang_String__int(unscaled) < 16) {
   this.f_smallValue__java_math_BigDecimal_ = BigDecimal.m_parseUnscaled__java_lang_String__double(unscaled);
   if (Double.m_isNaN__double__boolean(this.f_smallValue__java_math_BigDecimal_)) {
    throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String('For input string: \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(val) + '\"'));
   }
   this.f_bitLength__java_math_BigDecimal_ = BigDecimal.m_bitLength__double__int(this.f_smallValue__java_math_BigDecimal_);
  } else {
   this.m_setUnscaledValue__java_math_BigInteger__void_$p_java_math_BigDecimal(BigInteger.$create__java_lang_String(unscaled));
  }
  this.f_precision__java_math_BigDecimal_ = unscaledBuffer.m_length__int();
  for (let i = 0; i < unscaledBuffer.m_length__int(); i = i + 1 | 0) {
   let ch = unscaledBuffer.m_charAt__int__char(i);
   if (ch != 45 /* '-' */ && ch != 48 /* '0' */) {
    break;
   }
   this.f_precision__java_math_BigDecimal_ = this.f_precision__java_math_BigDecimal_ - 1 | 0;
  }
  if (this.f_precision__java_math_BigDecimal_ == 0) {
   this.f_precision__java_math_BigDecimal_ = 1;
  }
 }
 /** @nodts */
 m_inplaceRound__java_math_MathContext__void_$p_java_math_BigDecimal(/** MathContext */ mc) {
  let mcPrecision = mc.m_getPrecision__int();
  if (this.m_approxPrecision__double_$p_java_math_BigDecimal() - mcPrecision < 0 || mcPrecision == 0) {
   return;
  }
  let discardedPrecision = this.m_precision__int() - mcPrecision | 0;
  if (discardedPrecision <= 0) {
   return;
  }
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   this.m_smallRound__java_math_MathContext__int__void_$p_java_math_BigDecimal(mc, discardedPrecision);
   return;
  }
  let sizeOfFraction = Multiplication.m_powerOf10__double__java_math_BigInteger(discardedPrecision);
  let integerAndFraction = this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal().m_divideAndRemainder__java_math_BigInteger__arrayOf_java_math_BigInteger(sizeOfFraction);
  let newScale = this.f_scale__java_math_BigDecimal_ - discardedPrecision;
  let /** number */ compRem;
  let /** BigDecimal */ tempBD;
  if (integerAndFraction[1].m_signum__int() != 0) {
   compRem = integerAndFraction[1].m_abs__java_math_BigInteger().m_shiftLeftOneBit__java_math_BigInteger_$pp_java_math().m_compareTo__java_math_BigInteger__int(sizeOfFraction);
   compRem = BigDecimal.m_roundingBehavior__int__int__java_math_RoundingMode__int(integerAndFraction[0].m_testBit__int__boolean(0) ? 1 : 0, Math.imul(integerAndFraction[1].m_signum__int(), 5 + compRem), mc.m_getRoundingMode__java_math_RoundingMode());
   if (compRem != 0) {
    $Arrays.$set(integerAndFraction, 0, integerAndFraction[0].m_add__java_math_BigInteger__java_math_BigInteger(BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(compRem))));
   }
   tempBD = BigDecimal.$create__java_math_BigInteger(integerAndFraction[0]);
   if (tempBD.m_precision__int() > mcPrecision) {
    $Arrays.$set(integerAndFraction, 0, integerAndFraction[0].m_divide__java_math_BigInteger__java_math_BigInteger(BigInteger.f_TEN__java_math_BigInteger));
    newScale--;
   }
  }
  this.f_scale__java_math_BigDecimal_ = BigDecimal.m_toIntScale__double__int(newScale);
  this.f_precision__java_math_BigDecimal_ = mcPrecision;
  this.m_setUnscaledValue__java_math_BigInteger__void_$p_java_math_BigDecimal(integerAndFraction[0]);
 }
 /** @nodts @return {boolean} */
 m_isZero__boolean_$p_java_math_BigDecimal() {
  return this.f_bitLength__java_math_BigDecimal_ == 0 && this.f_smallValue__java_math_BigDecimal_ != (- 1 | 0);
 }
 /** @nodts @return {BigDecimal} */
 m_movePoint__double__java_math_BigDecimal_$p_java_math_BigDecimal(/** number */ newScale) {
  if (this.m_isZero__boolean_$p_java_math_BigDecimal()) {
   return BigDecimal.m_zeroScaledBy__double__java_math_BigDecimal(Math.max(newScale, 0));
  }
  if (newScale >= 0) {
   if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
    return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_, BigDecimal.m_toIntScale__double__int(newScale));
   }
   return BigDecimal.$create__java_math_BigInteger__int(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), BigDecimal.m_toIntScale__double__int(newScale));
  }
  if (- newScale < BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_.length && (this.f_bitLength__java_math_BigDecimal_ + BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(- newScale)] | 0) < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   return BigDecimal.m_valueOf__double__double__java_math_BigDecimal(this.f_smallValue__java_math_BigDecimal_ * BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[$Primitives.narrowDoubleToInt(- newScale)], 0);
  }
  return BigDecimal.$create__java_math_BigInteger__int(Multiplication.m_multiplyByTenPow__java_math_BigInteger__int__java_math_BigInteger(this.m_getUnscaledValue__java_math_BigInteger_$p_java_math_BigDecimal(), $Primitives.narrowDoubleToInt(- newScale)), 0);
 }
 /** @nodts */
 m_setUnscaledValue__java_math_BigInteger__void_$p_java_math_BigDecimal(/** BigInteger */ unscaledValue) {
  this.f_intVal__java_math_BigDecimal_ = unscaledValue;
  this.f_bitLength__java_math_BigDecimal_ = unscaledValue.m_bitLength__int();
  if (this.f_bitLength__java_math_BigDecimal_ < BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_) {
   this.f_smallValue__java_math_BigDecimal_ = $Primitives.widenLongToDouble(unscaledValue.m_longValue__long());
  }
 }
 /** @nodts */
 m_smallRound__java_math_MathContext__int__void_$p_java_math_BigDecimal(/** MathContext */ mc, /** number */ discardedPrecision) {
  let sizeOfFraction = $Primitives.narrowDoubleToLong(BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[discardedPrecision]);
  let newScale = $LongUtils.minus($Primitives.narrowDoubleToLong(this.f_scale__java_math_BigDecimal_), $Primitives.widenIntToLong(discardedPrecision));
  let unscaledVal = $Primitives.narrowDoubleToLong(this.f_smallValue__java_math_BigDecimal_);
  let integer = $LongUtils.divide(unscaledVal, sizeOfFraction);
  let fraction = $LongUtils.remainder(unscaledVal, sizeOfFraction);
  let /** number */ compRem;
  if ($LongUtils.notEquals(fraction, $Long.fromInt(0))) {
   compRem = Long.m_compare__long__long__int($LongUtils.leftShift(j_l_Math.m_abs__long__long(fraction), 1), sizeOfFraction);
   integer = $LongUtils.plus(integer, $Primitives.widenIntToLong(BigDecimal.m_roundingBehavior__int__int__java_math_RoundingMode__int($Primitives.narrowLongToInt(integer) & 1, Math.imul(Long.m_signum__long__int(fraction), 5 + compRem), mc.m_getRoundingMode__java_math_RoundingMode())));
   if (Math.log10($Primitives.widenLongToDouble(j_l_Math.m_abs__long__long(integer))) >= mc.m_getPrecision__int()) {
    integer = $LongUtils.divide(integer, $Long.fromInt(10));
    newScale = $LongUtils.minus(newScale, $Long.fromInt(1));
   }
  }
  this.f_scale__java_math_BigDecimal_ = BigDecimal.m_toIntScale__double__int($Primitives.widenLongToDouble(newScale));
  this.f_precision__java_math_BigDecimal_ = mc.m_getPrecision__int();
  this.f_smallValue__java_math_BigDecimal_ = $Primitives.widenLongToDouble(integer);
  this.f_bitLength__java_math_BigDecimal_ = BigDecimal.m_bitLength__long__int(integer);
  this.f_intVal__java_math_BigDecimal_ = null;
 }
 /** @nodts @return {!$Long} */
 m_valueExact__int__long_$p_java_math_BigDecimal(/** number */ bitLengthOfType) {
  let bigInteger = this.m_toBigIntegerExact__java_math_BigInteger();
  if (bigInteger.m_bitLength__int() < bitLengthOfType) {
   return bigInteger.m_longValue__long();
  }
  throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('Rounding necessary'));
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** BigDecimal */ arg0) {
  return this.m_compareTo__java_math_BigDecimal__int(/**@type {BigDecimal}*/ ($Casts.$to(arg0, BigDecimal)));
 }
 /** @nodts @return {BigDecimal} */
 static get f_ONE__java_math_BigDecimal() {
  return (BigDecimal.$clinit(), BigDecimal.$static_ONE__java_math_BigDecimal);
 }
 /** @nodts @return {BigDecimal} */
 static get f_TEN__java_math_BigDecimal() {
  return (BigDecimal.$clinit(), BigDecimal.$static_TEN__java_math_BigDecimal);
 }
 /** @nodts @return {BigDecimal} */
 static get f_ZERO__java_math_BigDecimal() {
  return (BigDecimal.$clinit(), BigDecimal.$static_ZERO__java_math_BigDecimal);
 }
 /** @nodts */
 static $clinit() {
  BigDecimal.$clinit = () =>{};
  BigDecimal.$loadModules();
  j_l_Number.$clinit();
  BigDecimal.$static_ONE__java_math_BigDecimal = BigDecimal.$create__long__int($Long.fromInt(1), 0);
  BigDecimal.$static_TEN__java_math_BigDecimal = BigDecimal.$create__long__int($Long.fromInt(10), 0);
  BigDecimal.$static_ZERO__java_math_BigDecimal = BigDecimal.$create__long__int($Long.fromInt(0), 0);
  BigDecimal.f_BI_SCALED_BY_ZERO__java_math_BigDecimal_ = /**@type {!Array<BigDecimal>}*/ ($Arrays.$create([BigDecimal.f_BI_SCALED_BY_ZERO_LENGTH__java_math_BigDecimal_], BigDecimal));
  BigDecimal.f_CH_ZEROS__java_math_BigDecimal_ = /**@type {!Array<number>}*/ ($Arrays.$create([100], $$char));
  BigDecimal.f_DOUBLE_FIVE_POW__java_math_BigDecimal_ = /**@type {!Array<number>}*/ ($Arrays.$init([1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125, 6.103515625E9, 3.0517578125E10, 1.52587890625E11, 7.62939453125E11, 3.814697265625E12, 1.9073486328125E13, 9.5367431640625E13, 4.76837158203125E14, 2.384185791015625E15], $$double));
  BigDecimal.f_DOUBLE_FIVE_POW_BIT_LENGTH__java_math_BigDecimal_ = /**@type {!Array<number>}*/ ($Arrays.$create([BigDecimal.f_DOUBLE_FIVE_POW__java_math_BigDecimal_.length], $$int));
  BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_ = /**@type {!Array<number>}*/ ($Arrays.$init([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 1.0E10, 1.0E11, 1.0E12, 1.0E13, 1.0E14, 1.0E15, 1.0E16], $$double));
  BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_ = /**@type {!Array<number>}*/ ($Arrays.$create([BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_.length], $$int));
  BigDecimal.f_ZERO_SCALED_BY__java_math_BigDecimal_ = /**@type {!Array<BigDecimal>}*/ ($Arrays.$create([11], BigDecimal));
  let i = 0;
  for (; i < BigDecimal.f_ZERO_SCALED_BY__java_math_BigDecimal_.length; i = i + 1 | 0) {
   $Arrays.$set(BigDecimal.f_BI_SCALED_BY_ZERO__java_math_BigDecimal_, i, BigDecimal.$create__long__int($Primitives.widenIntToLong(i), 0));
   $Arrays.$set(BigDecimal.f_ZERO_SCALED_BY__java_math_BigDecimal_, i, BigDecimal.$create__long__int($Long.fromInt(0), i));
   $Arrays.$set(BigDecimal.f_CH_ZEROS__java_math_BigDecimal_, i, 48 /* '0' */);
  }
  for (; i < BigDecimal.f_CH_ZEROS__java_math_BigDecimal_.length; i = i + 1 | 0) {
   $Arrays.$set(BigDecimal.f_CH_ZEROS__java_math_BigDecimal_, i, 48 /* '0' */);
  }
  for (let j = 0; j < BigDecimal.f_DOUBLE_FIVE_POW_BIT_LENGTH__java_math_BigDecimal_.length; j = j + 1 | 0) {
   $Arrays.$set(BigDecimal.f_DOUBLE_FIVE_POW_BIT_LENGTH__java_math_BigDecimal_, j, BigDecimal.m_bitLength__double__int(BigDecimal.f_DOUBLE_FIVE_POW__java_math_BigDecimal_[j]));
  }
  for (let j_1 = 0; j_1 < BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_.length; j_1 = j_1 + 1 | 0) {
   $Arrays.$set(BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_, j_1, BigDecimal.m_bitLength__double__int(BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_[j_1]));
  }
  BigDecimal.f_TEN_POW__java_math_BigDecimal_ = Multiplication.f_bigTenPows__java_math_Multiplication;
  BigDecimal.f_FIVE_POW__java_math_BigDecimal_ = Multiplication.f_bigFivePows__java_math_Multiplication;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BigDecimal;
 }
 
 /** @nodts */
 static $loadModules() {
  ArithmeticException = goog.module.get('java.lang.ArithmeticException$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Float = goog.module.get('java.lang.Float$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  StringIndexOutOfBoundsException = goog.module.get('java.lang.StringIndexOutOfBoundsException$impl');
  BigInteger = goog.module.get('java.math.BigInteger$impl');
  Conversion = goog.module.get('java.math.Conversion$impl');
  MathContext = goog.module.get('java.math.MathContext$impl');
  Multiplication = goog.module.get('java.math.Multiplication$impl');
  RoundingMode = goog.module.get('java.math.RoundingMode$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number} @nodts*/
BigDecimal.f_SMALL_VALUE_BITS__java_math_BigDecimal_ = 54;
/**@private {BigDecimal} @nodts*/
BigDecimal.$static_ONE__java_math_BigDecimal;
/**@const {number} @nodts*/
BigDecimal.f_ROUND_CEILING__java_math_BigDecimal = 2;
/**@const {number} @nodts*/
BigDecimal.f_ROUND_DOWN__java_math_BigDecimal = 1;
/**@const {number} @nodts*/
BigDecimal.f_ROUND_FLOOR__java_math_BigDecimal = 3;
/**@const {number} @nodts*/
BigDecimal.f_ROUND_HALF_DOWN__java_math_BigDecimal = 5;
/**@const {number} @nodts*/
BigDecimal.f_ROUND_HALF_EVEN__java_math_BigDecimal = 6;
/**@const {number} @nodts*/
BigDecimal.f_ROUND_HALF_UP__java_math_BigDecimal = 4;
/**@const {number} @nodts*/
BigDecimal.f_ROUND_UNNECESSARY__java_math_BigDecimal = 7;
/**@const {number} @nodts*/
BigDecimal.f_ROUND_UP__java_math_BigDecimal = 0;
/**@private {BigDecimal} @nodts*/
BigDecimal.$static_TEN__java_math_BigDecimal;
/**@private {BigDecimal} @nodts*/
BigDecimal.$static_ZERO__java_math_BigDecimal;
/**@type {RegExp} @nodts*/
BigDecimal.f_unscaledRegex__java_math_BigDecimal_;
/**@const {number} @nodts*/
BigDecimal.f_BI_SCALED_BY_ZERO_LENGTH__java_math_BigDecimal_ = 11;
/**@type {Array<BigDecimal>} @nodts*/
BigDecimal.f_BI_SCALED_BY_ZERO__java_math_BigDecimal_;
/**@type {Array<number>} @nodts*/
BigDecimal.f_CH_ZEROS__java_math_BigDecimal_;
/**@type {Array<number>} @nodts*/
BigDecimal.f_DOUBLE_FIVE_POW__java_math_BigDecimal_;
/**@type {Array<number>} @nodts*/
BigDecimal.f_DOUBLE_FIVE_POW_BIT_LENGTH__java_math_BigDecimal_;
/**@type {Array<number>} @nodts*/
BigDecimal.f_DOUBLE_TEN_POW__java_math_BigDecimal_;
/**@type {Array<number>} @nodts*/
BigDecimal.f_DOUBLE_TEN_POW_BIT_LENGTH__java_math_BigDecimal_;
/**@type {Array<BigInteger>} @nodts*/
BigDecimal.f_FIVE_POW__java_math_BigDecimal_;
/**@const {number} @nodts*/
BigDecimal.f_LOG2__java_math_BigDecimal_ = 0.6931471805599453;
/**@const {number} @nodts*/
BigDecimal.f_LOG10_2__java_math_BigDecimal_ = 0.3010299956639812;
/**@const {number} @nodts*/
BigDecimal.f_POW47__java_math_BigDecimal_ = 1.40737488355328E14;
/**@const {!$Long} @nodts*/
BigDecimal.f_serialVersionUID__java_math_BigDecimal_ = $Long.fromBits(-108976049, 1422333271) /* 6108874887143696463 */;
/**@type {Array<BigInteger>} @nodts*/
BigDecimal.f_TEN_POW__java_math_BigDecimal_;
/**@type {Array<BigDecimal>} @nodts*/
BigDecimal.f_ZERO_SCALED_BY__java_math_BigDecimal_;
Comparable.$markImplementor(BigDecimal);
Serializable.$markImplementor(BigDecimal);
$Util.$setClassMetadata(BigDecimal, 'java.math.BigDecimal');

exports = BigDecimal;

//# sourceMappingURL=BigDecimal.js.map
