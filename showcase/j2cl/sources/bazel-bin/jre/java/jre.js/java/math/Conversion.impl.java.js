goog.module('java.math.Conversion$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let System = goog.forwardDeclare('java.lang.System$impl');
let BigInteger = goog.forwardDeclare('java.math.BigInteger$impl');
let Division = goog.forwardDeclare('java.math.Division$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class Conversion extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {?string} */
 static m_bigInteger2String__java_math_BigInteger__int__java_lang_String(/** BigInteger */ val, /** number */ radix) {
  Conversion.$clinit();
  let sign = val.f_sign__java_math_BigInteger;
  let numberLength = val.f_numberLength__java_math_BigInteger;
  let digits = val.f_digits__java_math_BigInteger;
  if (sign == 0) {
   return '0';
  }
  if (numberLength == 1) {
   let highDigit = digits[numberLength - 1 | 0];
   let v = $LongUtils.bitAnd($Primitives.widenIntToLong(highDigit), $Long.fromBits(-1, 0) /* 4294967295 */);
   if (sign < 0) {
    v = $LongUtils.negate(v);
   }
   return Long.m_toString__long__int__java_lang_String(v, radix);
  }
  if (radix == 10 || radix < Character.f_MIN_RADIX__java_lang_Character || radix > Character.f_MAX_RADIX__java_lang_Character) {
   return val.toString();
  }
  let /** number */ bitsForRadixDigit;
  bitsForRadixDigit = Math.log(radix) / Math.log(2);
  let resLengthInChars = $Primitives.narrowDoubleToInt(val.m_abs__java_math_BigInteger().m_bitLength__int() / bitsForRadixDigit + (sign < 0 ? 1 : 0)) + 1 | 0;
  let result = /**@type {!Array<number>}*/ ($Arrays.$create([resLengthInChars], $$char));
  let currentChar = resLengthInChars;
  let /** number */ resDigit;
  if (radix != 16) {
   let temp = /**@type {!Array<number>}*/ ($Arrays.$create([numberLength], $$int));
   System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(digits, 0, temp, 0, numberLength);
   let tempLen = numberLength;
   let charsPerInt = Conversion.$static_digitFitInInt__java_math_Conversion[radix];
   let /** number */ i;
   let bigRadix = Conversion.$static_bigRadices__java_math_Conversion[radix - 2 | 0];
   while (true) {
    resDigit = Division.m_divideArrayByInt__arrayOf_int__arrayOf_int__int__int__int(temp, temp, tempLen, bigRadix);
    let previous = currentChar;
    do {
     $Arrays.$set(result, currentChar = currentChar - 1 | 0, Character.m_forDigit__int__int__char($Primitives.coerceDivision(resDigit % radix), radix));
    } while ((resDigit = $Primitives.coerceDivision(resDigit / radix)) != 0 && currentChar != 0);
    let delta = charsPerInt - previous + currentChar | 0;
    for (i = 0; i < delta && currentChar > 0; i = i + 1 | 0) {
     $Arrays.$set(result, currentChar = currentChar - 1 | 0, 48 /* '0' */);
    }
    for (i = tempLen - 1 | 0; i > 0 && temp[i] == 0; i = i - 1 | 0) {}
    tempLen = i + 1 | 0;
    if (tempLen == 1 && temp[0] == 0) {
     break;
    }
   }
  } else {
   for (let i_1 = 0; i_1 < numberLength; i_1 = i_1 + 1 | 0) {
    for (let j = 0; j < 8 && currentChar > 0; j = j + 1 | 0) {
     resDigit = digits[i_1] >> (j << 2) & 15;
     $Arrays.$set(result, currentChar = currentChar - 1 | 0, Character.m_forDigit__int__int__char(resDigit, 16));
    }
   }
  }
  while (result[currentChar] == 48 /* '0' */) {
   currentChar = currentChar + 1 | 0;
  }
  if (sign == (- 1 | 0)) {
   $Arrays.$set(result, currentChar = currentChar - 1 | 0, 45 /* '-' */);
  }
  return j_l_String.$create__arrayOf_char__int__int(result, currentChar, resLengthInChars - currentChar | 0);
 }
 /** @nodts @return {!$Long} */
 static m_divideLongByBillion__long__long(/** !$Long */ a) {
  Conversion.$clinit();
  let /** !$Long */ quot;
  let /** !$Long */ rem;
  if ($LongUtils.greaterEquals(a, $Long.fromInt(0))) {
   let bLong = $Long.fromInt(1000000000);
   quot = $LongUtils.divide(a, bLong);
   rem = $LongUtils.remainder(a, bLong);
  } else {
   let aPos = $LongUtils.rightShiftUnsigned(a, 1);
   let bPos = $LongUtils.rightShiftUnsigned($Long.fromInt(1000000000), 1);
   quot = $LongUtils.divide(aPos, bPos);
   rem = $LongUtils.remainder(aPos, bPos);
   rem = $LongUtils.plus($LongUtils.leftShift(rem, 1), $LongUtils.bitAnd(a, $Long.fromInt(1)));
  }
  return $LongUtils.bitOr($LongUtils.leftShift(rem, 32), $LongUtils.bitAnd(quot, $Long.fromBits(-1, 0) /* 4294967295 */));
 }
 /** @nodts @return {?string} */
 static m_toDecimalScaledString__java_math_BigInteger__int__java_lang_String(/** BigInteger */ val, /** number */ scale) {
  Conversion.$clinit();
  let sign = val.f_sign__java_math_BigInteger;
  let numberLength = val.f_numberLength__java_math_BigInteger;
  let digits = val.f_digits__java_math_BigInteger;
  let /** number */ resLengthInChars;
  let /** number */ currentChar;
  let /** Array<number> */ result;
  if (sign == 0) {
   let /** StringBuilder */ result1;
   switch (scale) {
    case 0: 
     return '0';
    case 1: 
     return '0.0';
    case 2: 
     return '0.00';
    case 3: 
     return '0.000';
    case 4: 
     return '0.0000';
    case 5: 
     return '0.00000';
    case 6: 
     return '0.000000';
    default: 
     result1 = StringBuilder.$create__();
     if (scale < 0) {
      result1.m_append__java_lang_String__java_lang_StringBuilder('0E+');
     } else {
      result1.m_append__java_lang_String__java_lang_StringBuilder('0E');
     }
     result1.m_append__int__java_lang_StringBuilder(- scale | 0);
     return result1.toString();
   }
  }
  resLengthInChars = Math.imul(numberLength, 10) + 1 + 7 | 0;
  result = /**@type {!Array<number>}*/ ($Arrays.$create([resLengthInChars + 1 | 0], $$char));
  currentChar = resLengthInChars;
  if (numberLength == 1) {
   let highDigit = digits[0];
   if (highDigit < 0) {
    let v = $LongUtils.bitAnd($Primitives.widenIntToLong(highDigit), $Long.fromBits(-1, 0) /* 4294967295 */);
    do {
     let prev = v;
     v = $LongUtils.divide(v, $Long.fromInt(10));
     $Arrays.$set(result, currentChar = currentChar - 1 | 0, $Primitives.narrowIntToChar(48 + $Primitives.narrowLongToInt($LongUtils.minus(prev, $LongUtils.times(v, $Long.fromInt(10)))) | 0));
    } while ($LongUtils.notEquals(v, $Long.fromInt(0)));
   } else {
    let v_1 = highDigit;
    do {
     let prev_1 = v_1;
     v_1 = $Primitives.coerceDivision(v_1 / 10);
     $Arrays.$set(result, currentChar = currentChar - 1 | 0, $Primitives.narrowIntToChar(48 + (prev_1 - Math.imul(v_1, 10)) | 0));
    } while (v_1 != 0);
   }
  } else {
   let temp = /**@type {!Array<number>}*/ ($Arrays.$create([numberLength], $$int));
   let tempLen = numberLength;
   System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(digits, 0, temp, 0, tempLen);
   BIG_LOOP: while (true) {
    let result11 = $Long.fromInt(0);
    for (let i1 = tempLen - 1 | 0; i1 >= 0; i1 = i1 - 1 | 0) {
     let temp1 = $LongUtils.plus($LongUtils.leftShift(result11, 32), $LongUtils.bitAnd($Primitives.widenIntToLong(temp[i1]), $Long.fromBits(-1, 0) /* 4294967295 */));
     let res = Conversion.m_divideLongByBillion__long__long(temp1);
     $Arrays.$set(temp, i1, $Primitives.narrowLongToInt(res));
     result11 = $Primitives.widenIntToLong($Primitives.narrowLongToInt($LongUtils.rightShiftSigned(res, 32)));
    }
    let resDigit = $Primitives.narrowLongToInt(result11);
    let previous = currentChar;
    do {
     $Arrays.$set(result, currentChar = currentChar - 1 | 0, $Primitives.narrowIntToChar(48 + $Primitives.coerceDivision(resDigit % 10) | 0));
    } while ((resDigit = $Primitives.coerceDivision(resDigit / 10)) != 0 && currentChar != 0);
    let delta = 9 - previous + currentChar | 0;
    for (let i = 0; i < delta && currentChar > 0; i = i + 1 | 0) {
     $Arrays.$set(result, currentChar = currentChar - 1 | 0, 48 /* '0' */);
    }
    let j = tempLen - 1 | 0;
    for (; temp[j] == 0; j = j - 1 | 0) {
     if (j == 0) {
      break BIG_LOOP;
     }
    }
    tempLen = j + 1 | 0;
   }
   while (result[currentChar] == 48 /* '0' */) {
    currentChar = currentChar + 1 | 0;
   }
  }
  let negNumber = sign < 0;
  let exponent = resLengthInChars - currentChar - scale - 1 | 0;
  if (scale == 0) {
   if (negNumber) {
    $Arrays.$set(result, currentChar = currentChar - 1 | 0, 45 /* '-' */);
   }
   return j_l_String.$create__arrayOf_char__int__int(result, currentChar, resLengthInChars - currentChar | 0);
  }
  if (scale > 0 && exponent >= (- 6 | 0)) {
   if (exponent >= 0) {
    let insertPoint = currentChar + exponent | 0;
    for (let j_1 = resLengthInChars - 1 | 0; j_1 >= insertPoint; j_1 = j_1 - 1 | 0) {
     $Arrays.$set(result, j_1 + 1 | 0, result[j_1]);
    }
    $Arrays.$set(result, insertPoint = insertPoint + 1 | 0, 46 /* '.' */);
    if (negNumber) {
     $Arrays.$set(result, currentChar = currentChar - 1 | 0, 45 /* '-' */);
    }
    return j_l_String.$create__arrayOf_char__int__int(result, currentChar, resLengthInChars - currentChar + 1 | 0);
   }
   for (let j_2 = 2; j_2 < (- exponent + 1 | 0); j_2 = j_2 + 1 | 0) {
    $Arrays.$set(result, currentChar = currentChar - 1 | 0, 48 /* '0' */);
   }
   $Arrays.$set(result, currentChar = currentChar - 1 | 0, 46 /* '.' */);
   $Arrays.$set(result, currentChar = currentChar - 1 | 0, 48 /* '0' */);
   if (negNumber) {
    $Arrays.$set(result, currentChar = currentChar - 1 | 0, 45 /* '-' */);
   }
   return j_l_String.$create__arrayOf_char__int__int(result, currentChar, resLengthInChars - currentChar | 0);
  }
  let startPoint = currentChar + 1 | 0;
  let endPoint = resLengthInChars;
  let result1_1 = StringBuilder.$create__int(16 + endPoint - startPoint | 0);
  if (negNumber) {
   result1_1.m_append__char__java_lang_StringBuilder(45 /* '-' */);
  }
  if ((endPoint - startPoint | 0) >= 1) {
   result1_1.m_append__char__java_lang_StringBuilder(result[currentChar]);
   result1_1.m_append__char__java_lang_StringBuilder(46 /* '.' */);
   result1_1.m_append__arrayOf_char__int__int__java_lang_StringBuilder(result, currentChar + 1 | 0, resLengthInChars - currentChar - 1 | 0);
  } else {
   result1_1.m_append__arrayOf_char__int__int__java_lang_StringBuilder(result, currentChar, resLengthInChars - currentChar | 0);
  }
  result1_1.m_append__char__java_lang_StringBuilder(69 /* 'E' */);
  if (exponent > 0) {
   result1_1.m_append__char__java_lang_StringBuilder(43 /* '+' */);
  }
  result1_1.m_append__java_lang_String__java_lang_StringBuilder(Integer.m_toString__int__java_lang_String(exponent));
  return result1_1.toString();
 }
 /** @nodts @return {?string} */
 static m_toDecimalScaledString__long__int__java_lang_String(/** !$Long */ value, /** number */ scale) {
  Conversion.$clinit();
  let /** number */ resLengthInChars;
  let /** number */ currentChar;
  let /** Array<number> */ result;
  let negNumber = $LongUtils.less(value, $Long.fromInt(0));
  if (negNumber) {
   value = $LongUtils.negate(value);
  }
  if ($LongUtils.equals(value, $Long.fromInt(0))) {
   let /** StringBuilder */ result1;
   switch (scale) {
    case 0: 
     return '0';
    case 1: 
     return '0.0';
    case 2: 
     return '0.00';
    case 3: 
     return '0.000';
    case 4: 
     return '0.0000';
    case 5: 
     return '0.00000';
    case 6: 
     return '0.000000';
    default: 
     result1 = StringBuilder.$create__();
     if (scale < 0) {
      result1.m_append__java_lang_String__java_lang_StringBuilder('0E+');
     } else {
      result1.m_append__java_lang_String__java_lang_StringBuilder('0E');
     }
     result1.m_append__java_lang_String__java_lang_StringBuilder(scale == Integer.f_MIN_VALUE__java_lang_Integer ? '2147483648' : Integer.m_toString__int__java_lang_String(- scale | 0));
     return result1.toString();
   }
  }
  resLengthInChars = 18;
  result = /**@type {!Array<number>}*/ ($Arrays.$create([resLengthInChars + 1 | 0], $$char));
  currentChar = resLengthInChars;
  let v = value;
  do {
   let prev = v;
   v = $LongUtils.divide(v, $Long.fromInt(10));
   $Arrays.$set(result, currentChar = currentChar - 1 | 0, $Primitives.narrowLongToChar($LongUtils.plus($Long.fromInt(48), $LongUtils.minus(prev, $LongUtils.times(v, $Long.fromInt(10))))));
  } while ($LongUtils.notEquals(v, $Long.fromInt(0)));
  let exponent = $LongUtils.minus($LongUtils.minus($LongUtils.minus($Primitives.widenIntToLong(resLengthInChars), $Primitives.widenIntToLong(currentChar)), $Primitives.widenIntToLong(scale)), $Long.fromInt(1));
  if (scale == 0) {
   if (negNumber) {
    $Arrays.$set(result, currentChar = currentChar - 1 | 0, 45 /* '-' */);
   }
   return j_l_String.$create__arrayOf_char__int__int(result, currentChar, resLengthInChars - currentChar | 0);
  }
  if (scale > 0 && $LongUtils.greaterEquals(exponent, $Primitives.widenIntToLong(- 6 | 0))) {
   if ($LongUtils.greaterEquals(exponent, $Long.fromInt(0))) {
    let insertPoint = currentChar + $Primitives.narrowLongToInt(exponent) | 0;
    for (let j = resLengthInChars - 1 | 0; j >= insertPoint; j = j - 1 | 0) {
     $Arrays.$set(result, j + 1 | 0, result[j]);
    }
    $Arrays.$set(result, insertPoint = insertPoint + 1 | 0, 46 /* '.' */);
    if (negNumber) {
     $Arrays.$set(result, currentChar = currentChar - 1 | 0, 45 /* '-' */);
    }
    return j_l_String.$create__arrayOf_char__int__int(result, currentChar, resLengthInChars - currentChar + 1 | 0);
   }
   for (let j_1 = 2; $LongUtils.less($Primitives.widenIntToLong(j_1), $LongUtils.plus($LongUtils.negate(exponent), $Long.fromInt(1))); j_1 = j_1 + 1 | 0) {
    $Arrays.$set(result, currentChar = currentChar - 1 | 0, 48 /* '0' */);
   }
   $Arrays.$set(result, currentChar = currentChar - 1 | 0, 46 /* '.' */);
   $Arrays.$set(result, currentChar = currentChar - 1 | 0, 48 /* '0' */);
   if (negNumber) {
    $Arrays.$set(result, currentChar = currentChar - 1 | 0, 45 /* '-' */);
   }
   return j_l_String.$create__arrayOf_char__int__int(result, currentChar, resLengthInChars - currentChar | 0);
  }
  let startPoint = currentChar + 1 | 0;
  let endPoint = resLengthInChars;
  let result1_1 = StringBuilder.$create__int(16 + endPoint - startPoint | 0);
  if (negNumber) {
   result1_1.m_append__char__java_lang_StringBuilder(45 /* '-' */);
  }
  if ((endPoint - startPoint | 0) >= 1) {
   result1_1.m_append__char__java_lang_StringBuilder(result[currentChar]);
   result1_1.m_append__char__java_lang_StringBuilder(46 /* '.' */);
   result1_1.m_append__arrayOf_char__int__int__java_lang_StringBuilder(result, currentChar + 1 | 0, resLengthInChars - currentChar - 1 | 0);
  } else {
   result1_1.m_append__arrayOf_char__int__int__java_lang_StringBuilder(result, currentChar, resLengthInChars - currentChar | 0);
  }
  result1_1.m_append__char__java_lang_StringBuilder(69 /* 'E' */);
  if ($LongUtils.greater(exponent, $Long.fromInt(0))) {
   result1_1.m_append__char__java_lang_StringBuilder(43 /* '+' */);
  }
  result1_1.m_append__java_lang_String__java_lang_StringBuilder(Long.m_toString__long__java_lang_String(exponent));
  return result1_1.toString();
 }
 /** @nodts @return {!Conversion} */
 static $create__() {
  let $instance = new Conversion();
  $instance.$ctor__java_math_Conversion__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_math_Conversion__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Array<number>} */
 static get f_bigRadices__java_math_Conversion() {
  return (Conversion.$clinit(), Conversion.$static_bigRadices__java_math_Conversion);
 }
 /** @nodts @return {Array<number>} */
 static get f_digitFitInInt__java_math_Conversion() {
  return (Conversion.$clinit(), Conversion.$static_digitFitInInt__java_math_Conversion);
 }
 /** @nodts */
 static $clinit() {
  Conversion.$clinit = () =>{};
  Conversion.$loadModules();
  j_l_Object.$clinit();
  Conversion.$static_bigRadices__java_math_Conversion = /**@type {!Array<number>}*/ ($Arrays.$init([-2147483648, 1162261467, 1073741824, 1220703125, 362797056, 1977326743, 1073741824, 387420489, 1000000000, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, 1073741824, 1291467969, 1544804416, 1838265625, 60466176], $$int));
  Conversion.$static_digitFitInInt__java_math_Conversion = /**@type {!Array<number>}*/ ($Arrays.$init([- 1 | 0, - 1 | 0, 31, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5], $$int));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Conversion;
 }
 
 /** @nodts */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  System = goog.module.get('java.lang.System$impl');
  Division = goog.module.get('java.math.Division$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@private {Array<number>} @nodts*/
Conversion.$static_bigRadices__java_math_Conversion;
/**@private {Array<number>} @nodts*/
Conversion.$static_digitFitInInt__java_math_Conversion;
$Util.$setClassMetadata(Conversion, 'java.math.Conversion');

exports = Conversion;

//# sourceMappingURL=Conversion.js.map
