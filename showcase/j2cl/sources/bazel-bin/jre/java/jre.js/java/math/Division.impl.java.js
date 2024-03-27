goog.module('java.math.Division$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArithmeticException = goog.forwardDeclare('java.lang.ArithmeticException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let System = goog.forwardDeclare('java.lang.System$impl');
let BigInteger = goog.forwardDeclare('java.math.BigInteger$impl');
let BitLevel = goog.forwardDeclare('java.math.BitLevel$impl');
let Elementary = goog.forwardDeclare('java.math.Elementary$impl');
let Multiplication = goog.forwardDeclare('java.math.Multiplication$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class Division extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Division} */
 static $create__() {
  Division.$clinit();
  let $instance = new Division();
  $instance.$ctor__java_math_Division__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_math_Division__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Array<number>} */
 static m_divide__arrayOf_int__int__arrayOf_int__int__arrayOf_int__int__arrayOf_int(/** Array<number> */ quot, /** number */ quotLength, /** Array<number> */ a, /** number */ aLength, /** Array<number> */ b, /** number */ bLength) {
  Division.$clinit();
  let normA = /**@type {!Array<number>}*/ ($Arrays.$create([aLength + 1 | 0], $$int));
  let normB = /**@type {!Array<number>}*/ ($Arrays.$create([bLength + 1 | 0], $$int));
  let normBLength = bLength;
  let divisorShift = Integer.m_numberOfLeadingZeros__int__int(b[bLength - 1 | 0]);
  if (divisorShift != 0) {
   BitLevel.m_shiftLeft__arrayOf_int__arrayOf_int__int__int__void(normB, b, 0, divisorShift);
   BitLevel.m_shiftLeft__arrayOf_int__arrayOf_int__int__int__void(normA, a, 0, divisorShift);
  } else {
   System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(a, 0, normA, 0, aLength);
   System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(b, 0, normB, 0, bLength);
  }
  let firstDivisorDigit = normB[normBLength - 1 | 0];
  let i = quotLength - 1 | 0;
  let j = aLength;
  while (i >= 0) {
   let guessDigit = 0;
   if (normA[j] == firstDivisorDigit) {
    guessDigit = - 1 | 0;
   } else {
    let product = $LongUtils.plus($LongUtils.leftShift($LongUtils.bitAnd($Primitives.widenIntToLong(normA[j]), $Long.fromBits(-1, 0) /* 4294967295 */), 32), $LongUtils.bitAnd($Primitives.widenIntToLong(normA[j - 1 | 0]), $Long.fromBits(-1, 0) /* 4294967295 */));
    let res = Division.m_divideLongByInt__long__int__long(product, firstDivisorDigit);
    guessDigit = $Primitives.narrowLongToInt(res);
    let rem = $Primitives.narrowLongToInt($LongUtils.rightShiftSigned(res, 32));
    if (guessDigit != 0) {
     let leftHand = $Long.fromInt(0);
     let rightHand = $Long.fromInt(0);
     let rOverflowed = false;
     guessDigit = guessDigit + 1 | 0;
     do {
      guessDigit = guessDigit - 1 | 0;
      if (rOverflowed) {
       break;
      }
      leftHand = $LongUtils.times($LongUtils.bitAnd($Primitives.widenIntToLong(guessDigit), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(normB[normBLength - 2 | 0]), $Long.fromBits(-1, 0) /* 4294967295 */));
      rightHand = $LongUtils.plus($LongUtils.leftShift($Primitives.widenIntToLong(rem), 32), $LongUtils.bitAnd($Primitives.widenIntToLong(normA[j - 2 | 0]), $Long.fromBits(-1, 0) /* 4294967295 */));
      let longR = $LongUtils.plus($LongUtils.bitAnd($Primitives.widenIntToLong(rem), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(firstDivisorDigit), $Long.fromBits(-1, 0) /* 4294967295 */));
      if (Integer.m_numberOfLeadingZeros__int__int($Primitives.narrowLongToInt($LongUtils.rightShiftUnsigned(longR, 32))) < 32) {
       rOverflowed = true;
      } else {
       rem = $Primitives.narrowLongToInt(longR);
      }
     } while ($LongUtils.greater($LongUtils.bitXor(leftHand, $Long.fromBits(0, -2147483648) /* -9223372036854775808 */), $LongUtils.bitXor(rightHand, $Long.fromBits(0, -2147483648) /* -9223372036854775808 */)));
    }
   }
   if (guessDigit != 0) {
    let borrow = Division.m_multiplyAndSubtract__arrayOf_int__int__arrayOf_int__int__int__int(normA, j - normBLength | 0, normB, normBLength, guessDigit);
    if (borrow != 0) {
     guessDigit = guessDigit - 1 | 0;
     let carry = $Long.fromInt(0);
     for (let k = 0; k < normBLength; k = k + 1 | 0) {
      carry = $LongUtils.plus(carry, $LongUtils.plus($LongUtils.bitAnd($Primitives.widenIntToLong(normA[j - normBLength + k | 0]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(normB[k]), $Long.fromBits(-1, 0) /* 4294967295 */)));
      $Arrays.$set(normA, j - normBLength + k | 0, $Primitives.narrowLongToInt(carry));
      carry = $LongUtils.rightShiftUnsigned(carry, 32);
     }
    }
   }
   if (!$Equality.$same(quot, null)) {
    $Arrays.$set(quot, i, guessDigit);
   }
   j = j - 1 | 0;
   i = i - 1 | 0;
  }
  if (divisorShift != 0) {
   BitLevel.m_shiftRight__arrayOf_int__int__arrayOf_int__int__int__boolean(normB, normBLength, normA, 0, divisorShift);
   return normB;
  }
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(normA, 0, normB, 0, bLength);
  return normA;
 }
 /** @nodts @return {Array<BigInteger>} */
 static m_divideAndRemainderByInteger__java_math_BigInteger__int__int__arrayOf_java_math_BigInteger(/** BigInteger */ val, /** number */ divisor, /** number */ divisorSign) {
  Division.$clinit();
  let valDigits = val.f_digits__java_math_BigInteger;
  let valLen = val.f_numberLength__java_math_BigInteger;
  let valSign = val.f_sign__java_math_BigInteger;
  if (valLen == 1) {
   let a = $LongUtils.bitAnd($Primitives.widenIntToLong(valDigits[0]), $Long.fromBits(-1, 0) /* 4294967295 */);
   let b = $LongUtils.bitAnd($Primitives.widenIntToLong(divisor), $Long.fromBits(-1, 0) /* 4294967295 */);
   let quo = $LongUtils.divide(a, b);
   let rem = $LongUtils.remainder(a, b);
   if (valSign != divisorSign) {
    quo = $LongUtils.negate(quo);
   }
   if (valSign < 0) {
    rem = $LongUtils.negate(rem);
   }
   return /**@type {!Array<BigInteger>}*/ ($Arrays.$init([BigInteger.m_valueOf__long__java_math_BigInteger(quo), BigInteger.m_valueOf__long__java_math_BigInteger(rem)], BigInteger));
  }
  let quotientLength = valLen;
  let quotientSign = valSign == divisorSign ? 1 : - 1 | 0;
  let quotientDigits = /**@type {!Array<number>}*/ ($Arrays.$create([quotientLength], $$int));
  let /** Array<number> */ remainderDigits;
  remainderDigits = /**@type {!Array<number>}*/ ($Arrays.$init([Division.m_divideArrayByInt__arrayOf_int__arrayOf_int__int__int__int(quotientDigits, valDigits, valLen, divisor)], $$int));
  let result0 = BigInteger.$create__int__int__arrayOf_int(quotientSign, quotientLength, quotientDigits);
  let result1 = BigInteger.$create__int__int__arrayOf_int(valSign, 1, remainderDigits);
  result0.m_cutOffLeadingZeroes__void_$pp_java_math();
  result1.m_cutOffLeadingZeroes__void_$pp_java_math();
  return /**@type {!Array<BigInteger>}*/ ($Arrays.$init([result0, result1], BigInteger));
 }
 /** @nodts @return {number} */
 static m_divideArrayByInt__arrayOf_int__arrayOf_int__int__int__int(/** Array<number> */ dest, /** Array<number> */ src, /** number */ srcLength, /** number */ divisor) {
  Division.$clinit();
  let rem = $Long.fromInt(0);
  let bLong = $LongUtils.bitAnd($Primitives.widenIntToLong(divisor), $Long.fromBits(-1, 0) /* 4294967295 */);
  for (let i = srcLength - 1 | 0; i >= 0; i = i - 1 | 0) {
   let temp = $LongUtils.bitOr($LongUtils.leftShift(rem, 32), $LongUtils.bitAnd($Primitives.widenIntToLong(src[i]), $Long.fromBits(-1, 0) /* 4294967295 */));
   let /** !$Long */ quot;
   if ($LongUtils.greaterEquals(temp, $Long.fromInt(0))) {
    quot = $LongUtils.divide(temp, bLong);
    rem = $LongUtils.remainder(temp, bLong);
   } else {
    let aPos = $LongUtils.rightShiftUnsigned(temp, 1);
    let bPos = $Primitives.widenIntToLong(divisor >>> 1 | 0);
    quot = $LongUtils.divide(aPos, bPos);
    rem = $LongUtils.remainder(aPos, bPos);
    rem = $LongUtils.plus($LongUtils.leftShift(rem, 1), $LongUtils.bitAnd(temp, $Long.fromInt(1)));
    if ((divisor & 1) != 0) {
     if ($LongUtils.lessEquals(quot, rem)) {
      rem = $LongUtils.minus(rem, quot);
     } else {
      if ($LongUtils.lessEquals($LongUtils.minus(quot, rem), bLong)) {
       rem = $LongUtils.plus(rem, $LongUtils.minus(bLong, quot));
       quot = $LongUtils.minus(quot, $Long.fromInt(1));
      } else {
       rem = $LongUtils.plus(rem, $LongUtils.minus($LongUtils.leftShift(bLong, 1), quot));
       quot = $LongUtils.minus(quot, $Long.fromInt(2));
      }
     }
    }
   }
   $Arrays.$set(dest, i, $Primitives.narrowLongToInt($LongUtils.bitAnd(quot, $Long.fromBits(-1, 0) /* 4294967295 */)));
  }
  return $Primitives.narrowLongToInt(rem);
 }
 /** @nodts @return {!$Long} */
 static m_divideLongByInt__long__int__long(/** !$Long */ a, /** number */ b) {
  Division.$clinit();
  let /** !$Long */ quot;
  let /** !$Long */ rem;
  let bLong = $LongUtils.bitAnd($Primitives.widenIntToLong(b), $Long.fromBits(-1, 0) /* 4294967295 */);
  if ($LongUtils.greaterEquals(a, $Long.fromInt(0))) {
   quot = $LongUtils.divide(a, bLong);
   rem = $LongUtils.remainder(a, bLong);
  } else {
   let aPos = $LongUtils.rightShiftUnsigned(a, 1);
   let bPos = $Primitives.widenIntToLong(b >>> 1 | 0);
   quot = $LongUtils.divide(aPos, bPos);
   rem = $LongUtils.remainder(aPos, bPos);
   rem = $LongUtils.plus($LongUtils.leftShift(rem, 1), $LongUtils.bitAnd(a, $Long.fromInt(1)));
   if ((b & 1) != 0) {
    if ($LongUtils.lessEquals(quot, rem)) {
     rem = $LongUtils.minus(rem, quot);
    } else {
     if ($LongUtils.lessEquals($LongUtils.minus(quot, rem), bLong)) {
      rem = $LongUtils.plus(rem, $LongUtils.minus(bLong, quot));
      quot = $LongUtils.minus(quot, $Long.fromInt(1));
     } else {
      rem = $LongUtils.plus(rem, $LongUtils.minus($LongUtils.leftShift(bLong, 1), quot));
      quot = $LongUtils.minus(quot, $Long.fromInt(2));
     }
    }
   }
  }
  return $LongUtils.bitOr($LongUtils.leftShift(rem, 32), $LongUtils.bitAnd(quot, $Long.fromBits(-1, 0) /* 4294967295 */));
 }
 /** @nodts @return {BigInteger} */
 static m_evenModPow__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ base, /** BigInteger */ exponent, /** BigInteger */ modulus) {
  Division.$clinit();
  let j = modulus.m_getLowestSetBit__int();
  let q = modulus.m_shiftRight__int__java_math_BigInteger(j);
  let x1 = Division.m_oddModPow__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(base, exponent, q);
  let x2 = Division.m_pow2ModPow__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(base, exponent, j);
  let qInv = Division.m_modPow2Inverse__java_math_BigInteger__int__java_math_BigInteger(q, j);
  let y = x2.m_subtract__java_math_BigInteger__java_math_BigInteger(x1).m_multiply__java_math_BigInteger__java_math_BigInteger(qInv);
  Division.m_inplaceModPow2__java_math_BigInteger__int__void(y, j);
  if (y.f_sign__java_math_BigInteger < 0) {
   y = y.m_add__java_math_BigInteger__java_math_BigInteger(BigInteger.m_getPowerOfTwo__int__java_math_BigInteger(j));
  }
  return x1.m_add__java_math_BigInteger__java_math_BigInteger(q.m_multiply__java_math_BigInteger__java_math_BigInteger(y));
 }
 /** @nodts @return {BigInteger} */
 static m_finalSubtraction__arrayOf_int__java_math_BigInteger__java_math_BigInteger(/** Array<number> */ res, /** BigInteger */ modulus) {
  Division.$clinit();
  let modulusLen = modulus.f_numberLength__java_math_BigInteger;
  let doSub = res[modulusLen] != 0;
  if (!doSub) {
   let modulusDigits = modulus.f_digits__java_math_BigInteger;
   doSub = true;
   for (let i = modulusLen - 1 | 0; i >= 0; i = i - 1 | 0) {
    if (res[i] != modulusDigits[i]) {
     doSub = res[i] != 0 && $LongUtils.greater($LongUtils.bitAnd($Primitives.widenIntToLong(res[i]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(modulusDigits[i]), $Long.fromBits(-1, 0) /* 4294967295 */));
     break;
    }
   }
  }
  let result = BigInteger.$create__int__int__arrayOf_int(1, modulusLen + 1 | 0, res);
  if (doSub) {
   Elementary.m_inplaceSubtract__java_math_BigInteger__java_math_BigInteger__void(result, modulus);
  }
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_gcdBinary__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ op1, /** BigInteger */ op2) {
  Division.$clinit();
  let lsb1 = op1.m_getLowestSetBit__int();
  let lsb2 = op2.m_getLowestSetBit__int();
  let pow2Count = Math.min(lsb1, lsb2);
  BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(op1, lsb1);
  BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(op2, lsb2);
  let /** BigInteger */ swap;
  if (op1.m_compareTo__java_math_BigInteger__int(op2) == BigInteger.f_GREATER__java_math_BigInteger) {
   swap = op1;
   op1 = op2;
   op2 = swap;
  }
  do {
   if (op2.f_numberLength__java_math_BigInteger == 1 || op2.f_numberLength__java_math_BigInteger == 2 && op2.f_digits__java_math_BigInteger[1] > 0) {
    op2 = BigInteger.m_valueOf__long__java_math_BigInteger(Division.m_gcdBinary__long__long__long(op1.m_longValue__long(), op2.m_longValue__long()));
    break;
   }
   if (op2.f_numberLength__java_math_BigInteger > op1.f_numberLength__java_math_BigInteger * 1.2) {
    op2 = op2.m_remainder__java_math_BigInteger__java_math_BigInteger(op1);
    if (op2.m_signum__int() != 0) {
     BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(op2, op2.m_getLowestSetBit__int());
    }
   } else {
    do {
     Elementary.m_inplaceSubtract__java_math_BigInteger__java_math_BigInteger__void(op2, op1);
     BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(op2, op2.m_getLowestSetBit__int());
    } while (op2.m_compareTo__java_math_BigInteger__int(op1) >= BigInteger.f_EQUALS__java_math_BigInteger);
   }
   swap = op2;
   op2 = op1;
   op1 = swap;
  } while (op1.f_sign__java_math_BigInteger != 0);
  return op2.m_shiftLeft__int__java_math_BigInteger(pow2Count);
 }
 /** @nodts @return {!$Long} */
 static m_gcdBinary__long__long__long(/** !$Long */ op1, /** !$Long */ op2) {
  Division.$clinit();
  let lsb1 = Long.m_numberOfTrailingZeros__long__int(op1);
  let lsb2 = Long.m_numberOfTrailingZeros__long__int(op2);
  let pow2Count = Math.min(lsb1, lsb2);
  if (lsb1 != 0) {
   op1 = $LongUtils.rightShiftUnsigned(op1, lsb1);
  }
  if (lsb2 != 0) {
   op2 = $LongUtils.rightShiftUnsigned(op2, lsb2);
  }
  do {
   if ($LongUtils.greaterEquals(op1, op2)) {
    op1 = $LongUtils.minus(op1, op2);
    op1 = $LongUtils.rightShiftUnsigned(op1, Long.m_numberOfTrailingZeros__long__int(op1));
   } else {
    op2 = $LongUtils.minus(op2, op1);
    op2 = $LongUtils.rightShiftUnsigned(op2, Long.m_numberOfTrailingZeros__long__int(op2));
   }
  } while ($LongUtils.notEquals(op1, $Long.fromInt(0)));
  return $LongUtils.leftShift(op2, pow2Count);
 }
 /** @nodts */
 static m_inplaceModPow2__java_math_BigInteger__int__void(/** BigInteger */ x, /** number */ n) {
  Division.$clinit();
  let fd = n >> 5;
  let /** number */ leadingZeros;
  if (x.f_numberLength__java_math_BigInteger < fd || x.m_bitLength__int() <= n) {
   return;
  }
  leadingZeros = 32 - (n & 31) | 0;
  x.f_numberLength__java_math_BigInteger = fd + 1 | 0;
  x.f_digits__java_math_BigInteger[fd] &= leadingZeros < 32 ? - 1 >>> leadingZeros | 0 : 0;
  x.m_cutOffLeadingZeroes__void_$pp_java_math();
 }
 /** @nodts @return {BigInteger} */
 static m_modInverseLorencz__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ a, /** BigInteger */ modulo) {
  Division.$clinit();
  let max = Math.max(a.f_numberLength__java_math_BigInteger, modulo.f_numberLength__java_math_BigInteger);
  let uDigits = /**@type {!Array<number>}*/ ($Arrays.$create([max + 1 | 0], $$int));
  let vDigits = /**@type {!Array<number>}*/ ($Arrays.$create([max + 1 | 0], $$int));
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(modulo.f_digits__java_math_BigInteger, 0, uDigits, 0, modulo.f_numberLength__java_math_BigInteger);
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(a.f_digits__java_math_BigInteger, 0, vDigits, 0, a.f_numberLength__java_math_BigInteger);
  let u = BigInteger.$create__int__int__arrayOf_int(modulo.f_sign__java_math_BigInteger, modulo.f_numberLength__java_math_BigInteger, uDigits);
  let v = BigInteger.$create__int__int__arrayOf_int(a.f_sign__java_math_BigInteger, a.f_numberLength__java_math_BigInteger, vDigits);
  let r = BigInteger.$create__int__int__arrayOf_int(0, 1, /**@type {!Array<number>}*/ ($Arrays.$create([max + 1 | 0], $$int)));
  let s = BigInteger.$create__int__int__arrayOf_int(1, 1, /**@type {!Array<number>}*/ ($Arrays.$create([max + 1 | 0], $$int)));
  $Arrays.$set(s.f_digits__java_math_BigInteger, 0, 1);
  let coefU = 0, coefV = 0;
  let n = modulo.m_bitLength__int();
  let /** number */ k;
  while (!Division.m_isPowerOfTwo__java_math_BigInteger__int__boolean(u, coefU) && !Division.m_isPowerOfTwo__java_math_BigInteger__int__boolean(v, coefV)) {
   k = Division.m_howManyIterations__java_math_BigInteger__int__int(u, n);
   if (k != 0) {
    BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(u, k);
    if (coefU >= coefV) {
     BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(r, k);
    } else {
     BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(s, Math.min(coefV - coefU | 0, k));
     if ((k - (coefV - coefU) | 0) > 0) {
      BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(r, k - coefV + coefU | 0);
     }
    }
    coefU = coefU + k | 0;
   }
   k = Division.m_howManyIterations__java_math_BigInteger__int__int(v, n);
   if (k != 0) {
    BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(v, k);
    if (coefV >= coefU) {
     BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(s, k);
    } else {
     BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(r, Math.min(coefU - coefV | 0, k));
     if ((k - (coefU - coefV) | 0) > 0) {
      BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(s, k - coefU + coefV | 0);
     }
    }
    coefV = coefV + k | 0;
   }
   if (u.m_signum__int() == v.m_signum__int()) {
    if (coefU <= coefV) {
     Elementary.m_completeInPlaceSubtract__java_math_BigInteger__java_math_BigInteger__void(u, v);
     Elementary.m_completeInPlaceSubtract__java_math_BigInteger__java_math_BigInteger__void(r, s);
    } else {
     Elementary.m_completeInPlaceSubtract__java_math_BigInteger__java_math_BigInteger__void(v, u);
     Elementary.m_completeInPlaceSubtract__java_math_BigInteger__java_math_BigInteger__void(s, r);
    }
   } else {
    if (coefU <= coefV) {
     Elementary.m_completeInPlaceAdd__java_math_BigInteger__java_math_BigInteger__void(u, v);
     Elementary.m_completeInPlaceAdd__java_math_BigInteger__java_math_BigInteger__void(r, s);
    } else {
     Elementary.m_completeInPlaceAdd__java_math_BigInteger__java_math_BigInteger__void(v, u);
     Elementary.m_completeInPlaceAdd__java_math_BigInteger__java_math_BigInteger__void(s, r);
    }
   }
   if (v.m_signum__int() == 0 || u.m_signum__int() == 0) {
    throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger not invertible.'));
   }
  }
  if (Division.m_isPowerOfTwo__java_math_BigInteger__int__boolean(v, coefV)) {
   r = s;
   if (v.m_signum__int() != u.m_signum__int()) {
    u = u.m_negate__java_math_BigInteger();
   }
  }
  if (u.m_testBit__int__boolean(n)) {
   if (r.m_signum__int() < 0) {
    r = r.m_negate__java_math_BigInteger();
   } else {
    r = modulo.m_subtract__java_math_BigInteger__java_math_BigInteger(r);
   }
  }
  if (r.m_signum__int() < 0) {
   r = r.m_add__java_math_BigInteger__java_math_BigInteger(modulo);
  }
  return r;
 }
 /** @nodts @return {BigInteger} */
 static m_modInverseMontgomery__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ a, /** BigInteger */ p) {
  Division.$clinit();
  if (a.f_sign__java_math_BigInteger == 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger not invertible.'));
  }
  if (!p.m_testBit__int__boolean(0)) {
   return Division.m_modInverseLorencz__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(a, p);
  }
  let m = Math.imul(p.f_numberLength__java_math_BigInteger, 32);
  let /** BigInteger */ u, /** BigInteger */ v, /** BigInteger */ r, /** BigInteger */ s;
  u = p.m_copy__java_math_BigInteger_$pp_java_math();
  v = a.m_copy__java_math_BigInteger_$pp_java_math();
  let max = Math.max(v.f_numberLength__java_math_BigInteger, u.f_numberLength__java_math_BigInteger);
  r = BigInteger.$create__int__int__arrayOf_int(1, 1, /**@type {!Array<number>}*/ ($Arrays.$create([max + 1 | 0], $$int)));
  s = BigInteger.$create__int__int__arrayOf_int(1, 1, /**@type {!Array<number>}*/ ($Arrays.$create([max + 1 | 0], $$int)));
  $Arrays.$set(s.f_digits__java_math_BigInteger, 0, 1);
  let k = 0;
  let lsbu = u.m_getLowestSetBit__int();
  let lsbv = v.m_getLowestSetBit__int();
  let /** number */ toShift;
  if (lsbu > lsbv) {
   BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(u, lsbu);
   BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(v, lsbv);
   BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(r, lsbv);
   k = k + (lsbu - lsbv) | 0;
  } else {
   BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(u, lsbu);
   BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(v, lsbv);
   BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(s, lsbu);
   k = k + (lsbv - lsbu) | 0;
  }
  r.f_sign__java_math_BigInteger = 1;
  while (v.m_signum__int() > 0) {
   while (u.m_compareTo__java_math_BigInteger__int(v) > BigInteger.f_EQUALS__java_math_BigInteger) {
    Elementary.m_inplaceSubtract__java_math_BigInteger__java_math_BigInteger__void(u, v);
    toShift = u.m_getLowestSetBit__int();
    BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(u, toShift);
    Elementary.m_inplaceAdd__java_math_BigInteger__java_math_BigInteger__void(r, s);
    BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(s, toShift);
    k = k + toShift | 0;
   }
   while (u.m_compareTo__java_math_BigInteger__int(v) <= BigInteger.f_EQUALS__java_math_BigInteger) {
    Elementary.m_inplaceSubtract__java_math_BigInteger__java_math_BigInteger__void(v, u);
    if (v.m_signum__int() == 0) {
     break;
    }
    toShift = v.m_getLowestSetBit__int();
    BitLevel.m_inplaceShiftRight__java_math_BigInteger__int__void(v, toShift);
    Elementary.m_inplaceAdd__java_math_BigInteger__java_math_BigInteger__void(s, r);
    BitLevel.m_inplaceShiftLeft__java_math_BigInteger__int__void(r, toShift);
    k = k + toShift | 0;
   }
  }
  if (!u.m_isOne__boolean_$pp_java_math()) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('BigInteger not invertible.'));
  }
  if (r.m_compareTo__java_math_BigInteger__int(p) >= BigInteger.f_EQUALS__java_math_BigInteger) {
   Elementary.m_inplaceSubtract__java_math_BigInteger__java_math_BigInteger__void(r, p);
  }
  r = p.m_subtract__java_math_BigInteger__java_math_BigInteger(r);
  let n1 = Division.m_calcN__java_math_BigInteger__int(p);
  if (k > m) {
   r = Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(r, BigInteger.f_ONE__java_math_BigInteger, p, n1);
   k = k - m | 0;
  }
  r = Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(r, BigInteger.m_getPowerOfTwo__int__java_math_BigInteger(m - k | 0), p, n1);
  return r;
 }
 /** @nodts @return {BigInteger} */
 static m_modPow2Inverse__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ x, /** number */ n) {
  Division.$clinit();
  let y = BigInteger.$create__int__arrayOf_int(1, /**@type {!Array<number>}*/ ($Arrays.$create([1 << n], $$int)));
  y.f_numberLength__java_math_BigInteger = 1;
  $Arrays.$set(y.f_digits__java_math_BigInteger, 0, 1);
  y.f_sign__java_math_BigInteger = 1;
  for (let i = 1; i < n; i = i + 1 | 0) {
   if (BitLevel.m_testBit__java_math_BigInteger__int__boolean(x.m_multiply__java_math_BigInteger__java_math_BigInteger(y), i)) {
    y.f_digits__java_math_BigInteger[i >> 5] |= 1 << (i & 31);
   }
  }
  return y;
 }
 /** @nodts @return {BigInteger} */
 static m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ a, /** BigInteger */ b, /** BigInteger */ modulus, /** number */ n2) {
  Division.$clinit();
  let modulusLen = modulus.f_numberLength__java_math_BigInteger;
  let res = /**@type {!Array<number>}*/ ($Arrays.$create([(modulusLen << 1) + 1 | 0], $$int));
  Multiplication.m_multArraysPAP__arrayOf_int__int__arrayOf_int__int__arrayOf_int__void(a.f_digits__java_math_BigInteger, Math.min(modulusLen, a.f_numberLength__java_math_BigInteger), b.f_digits__java_math_BigInteger, Math.min(modulusLen, b.f_numberLength__java_math_BigInteger), res);
  Division.m_monReduction__arrayOf_int__java_math_BigInteger__int__void(res, modulus, n2);
  return Division.m_finalSubtraction__arrayOf_int__java_math_BigInteger__java_math_BigInteger(res, modulus);
 }
 /** @nodts @return {number} */
 static m_multiplyAndSubtract__arrayOf_int__int__arrayOf_int__int__int__int(/** Array<number> */ a, /** number */ start, /** Array<number> */ b, /** number */ bLen, /** number */ c) {
  Division.$clinit();
  let carry0 = $Long.fromInt(0);
  let carry1 = $Long.fromInt(0);
  for (let i = 0; i < bLen; i = i + 1 | 0) {
   carry0 = Multiplication.m_unsignedMultAddAdd__int__int__int__int__long(b[i], c, $Primitives.narrowLongToInt(carry0), 0);
   carry1 = $LongUtils.plus($LongUtils.minus($LongUtils.bitAnd($Primitives.widenIntToLong(a[start + i | 0]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd(carry0, $Long.fromBits(-1, 0) /* 4294967295 */)), carry1);
   $Arrays.$set(a, start + i | 0, $Primitives.narrowLongToInt(carry1));
   carry1 = $LongUtils.rightShiftSigned(carry1, 32);
   carry0 = $LongUtils.rightShiftUnsigned(carry0, 32);
  }
  carry1 = $LongUtils.plus($LongUtils.minus($LongUtils.bitAnd($Primitives.widenIntToLong(a[start + bLen | 0]), $Long.fromBits(-1, 0) /* 4294967295 */), carry0), carry1);
  $Arrays.$set(a, start + bLen | 0, $Primitives.narrowLongToInt(carry1));
  return $Primitives.narrowLongToInt($LongUtils.rightShiftSigned(carry1, 32));
 }
 /** @nodts @return {BigInteger} */
 static m_oddModPow__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ base, /** BigInteger */ exponent, /** BigInteger */ modulus) {
  Division.$clinit();
  let k = modulus.f_numberLength__java_math_BigInteger << 5;
  let a2 = base.m_shiftLeft__int__java_math_BigInteger(k).m_mod__java_math_BigInteger__java_math_BigInteger(modulus);
  let x2 = BigInteger.m_getPowerOfTwo__int__java_math_BigInteger(k).m_mod__java_math_BigInteger__java_math_BigInteger(modulus);
  let /** BigInteger */ res;
  let n2 = Division.m_calcN__java_math_BigInteger__int(modulus);
  if (modulus.f_numberLength__java_math_BigInteger == 1) {
   res = Division.m_squareAndMultiply__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(x2, a2, exponent, modulus, n2);
  } else {
   res = Division.m_slidingWindow__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(x2, a2, exponent, modulus, n2);
  }
  return Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(res, BigInteger.f_ONE__java_math_BigInteger, modulus, n2);
 }
 /** @nodts @return {BigInteger} */
 static m_pow2ModPow__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ base, /** BigInteger */ exponent, /** number */ j) {
  Division.$clinit();
  let res = BigInteger.f_ONE__java_math_BigInteger;
  let e = exponent.m_copy__java_math_BigInteger_$pp_java_math();
  let baseMod2toN = base.m_copy__java_math_BigInteger_$pp_java_math();
  let /** BigInteger */ res2;
  if (base.m_testBit__int__boolean(0)) {
   Division.m_inplaceModPow2__java_math_BigInteger__int__void(e, j - 1 | 0);
  }
  Division.m_inplaceModPow2__java_math_BigInteger__int__void(baseMod2toN, j);
  for (let i = e.m_bitLength__int() - 1 | 0; i >= 0; i = i - 1 | 0) {
   res2 = res.m_copy__java_math_BigInteger_$pp_java_math();
   Division.m_inplaceModPow2__java_math_BigInteger__int__void(res2, j);
   res = res.m_multiply__java_math_BigInteger__java_math_BigInteger(res2);
   if (BitLevel.m_testBit__java_math_BigInteger__int__boolean(e, i)) {
    res = res.m_multiply__java_math_BigInteger__java_math_BigInteger(baseMod2toN);
    Division.m_inplaceModPow2__java_math_BigInteger__int__void(res, j);
   }
  }
  Division.m_inplaceModPow2__java_math_BigInteger__int__void(res, j);
  return res;
 }
 /** @nodts @return {number} */
 static m_remainder__java_math_BigInteger__int__int(/** BigInteger */ dividend, /** number */ divisor) {
  Division.$clinit();
  return Division.m_remainderArrayByInt__arrayOf_int__int__int__int(dividend.f_digits__java_math_BigInteger, dividend.f_numberLength__java_math_BigInteger, divisor);
 }
 /** @nodts @return {number} */
 static m_remainderArrayByInt__arrayOf_int__int__int__int(/** Array<number> */ src, /** number */ srcLength, /** number */ divisor) {
  Division.$clinit();
  let result = $Long.fromInt(0);
  for (let i = srcLength - 1 | 0; i >= 0; i = i - 1 | 0) {
   let temp = $LongUtils.plus($LongUtils.leftShift(result, 32), $LongUtils.bitAnd($Primitives.widenIntToLong(src[i]), $Long.fromBits(-1, 0) /* 4294967295 */));
   let res = Division.m_divideLongByInt__long__int__long(temp, divisor);
   result = $Primitives.widenIntToLong($Primitives.narrowLongToInt($LongUtils.rightShiftSigned(res, 32)));
  }
  return $Primitives.narrowLongToInt(result);
 }
 /** @nodts @return {BigInteger} */
 static m_slidingWindow__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ x2, /** BigInteger */ a2, /** BigInteger */ exponent, /** BigInteger */ modulus, /** number */ n2) {
  Division.$clinit();
  let pows = /**@type {!Array<BigInteger>}*/ ($Arrays.$create([8], BigInteger));
  let res = x2;
  let /** number */ lowexp;
  let /** BigInteger */ x3;
  let /** number */ acc3;
  $Arrays.$set(pows, 0, a2);
  x3 = Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(a2, a2, modulus, n2);
  for (let i = 1; i <= 7; i = i + 1 | 0) {
   $Arrays.$set(pows, i, Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(pows[i - 1 | 0], x3, modulus, n2));
  }
  for (let i_1 = exponent.m_bitLength__int() - 1 | 0; i_1 >= 0; i_1 = i_1 - 1 | 0) {
   if (BitLevel.m_testBit__java_math_BigInteger__int__boolean(exponent, i_1)) {
    lowexp = 1;
    acc3 = i_1;
    for (let j = Math.max(i_1 - 3 | 0, 0); j <= (i_1 - 1 | 0); j = j + 1 | 0) {
     if (BitLevel.m_testBit__java_math_BigInteger__int__boolean(exponent, j)) {
      if (j < acc3) {
       acc3 = j;
       lowexp = lowexp << (i_1 - j | 0) ^ 1;
      } else {
       lowexp = lowexp ^ 1 << (j - acc3 | 0);
      }
     }
    }
    for (let j_1 = acc3; j_1 <= i_1; j_1 = j_1 + 1 | 0) {
     res = Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(res, res, modulus, n2);
    }
    res = Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(pows[(lowexp - 1 | 0) >> 1], res, modulus, n2);
    i_1 = acc3;
   } else {
    res = Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(res, res, modulus, n2);
   }
  }
  return res;
 }
 /** @nodts @return {BigInteger} */
 static m_squareAndMultiply__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ x2, /** BigInteger */ a2, /** BigInteger */ exponent, /** BigInteger */ modulus, /** number */ n2) {
  Division.$clinit();
  let res = x2;
  for (let i = exponent.m_bitLength__int() - 1 | 0; i >= 0; i = i - 1 | 0) {
   res = Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(res, res, modulus, n2);
   if (BitLevel.m_testBit__java_math_BigInteger__int__boolean(exponent, i)) {
    res = Division.m_monPro__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger__int__java_math_BigInteger(res, a2, modulus, n2);
   }
  }
  return res;
 }
 /** @nodts @return {number} */
 static m_calcN__java_math_BigInteger__int(/** BigInteger */ a) {
  let m0 = $LongUtils.bitAnd($Primitives.widenIntToLong(a.f_digits__java_math_BigInteger[0]), $Long.fromBits(-1, 0) /* 4294967295 */);
  let n2 = $Long.fromInt(1);
  let powerOfTwo = $Long.fromInt(2);
  do {
   if ($LongUtils.notEquals($LongUtils.bitAnd($LongUtils.times(m0, n2), powerOfTwo), $Long.fromInt(0))) {
    n2 = $LongUtils.bitOr(n2, powerOfTwo);
   }
   powerOfTwo = $LongUtils.leftShift(powerOfTwo, 1);
  } while ($LongUtils.less(powerOfTwo, $Long.fromBits(0, 1) /* 4294967296 */));
  n2 = $LongUtils.negate(n2);
  return $Primitives.narrowLongToInt($LongUtils.bitAnd(n2, $Long.fromBits(-1, 0) /* 4294967295 */));
 }
 /** @nodts @return {number} */
 static m_howManyIterations__java_math_BigInteger__int__int(/** BigInteger */ bi, /** number */ n) {
  let i = n - 1 | 0;
  if (bi.f_sign__java_math_BigInteger > 0) {
   while (!bi.m_testBit__int__boolean(i)) {
    i = i - 1 | 0;
   }
   return n - 1 - i | 0;
  } else {
   while (bi.m_testBit__int__boolean(i)) {
    i = i - 1 | 0;
   }
   return n - 1 - Math.max(i, bi.m_getLowestSetBit__int()) | 0;
  }
 }
 /** @nodts @return {boolean} */
 static m_isPowerOfTwo__java_math_BigInteger__int__boolean(/** BigInteger */ bi, /** number */ exp) {
  let result = false;
  result = exp >> 5 == (bi.f_numberLength__java_math_BigInteger - 1 | 0) && bi.f_digits__java_math_BigInteger[bi.f_numberLength__java_math_BigInteger - 1 | 0] == 1 << (exp & 31);
  if (result) {
   for (let i = 0; result && i < (bi.f_numberLength__java_math_BigInteger - 1 | 0); i = i + 1 | 0) {
    result = bi.f_digits__java_math_BigInteger[i] == 0;
   }
  }
  return result;
 }
 /** @nodts */
 static m_monReduction__arrayOf_int__java_math_BigInteger__int__void(/** Array<number> */ res, /** BigInteger */ modulus, /** number */ n2) {
  let modulusDigits = modulus.f_digits__java_math_BigInteger;
  let modulusLen = modulus.f_numberLength__java_math_BigInteger;
  let outerCarry = $Long.fromInt(0);
  for (let i = 0; i < modulusLen; i = i + 1 | 0) {
   let innnerCarry = $Long.fromInt(0);
   let m = $Primitives.narrowLongToInt(Multiplication.m_unsignedMultAddAdd__int__int__int__int__long(res[i], n2, 0, 0));
   for (let j = 0; j < modulusLen; j = j + 1 | 0) {
    innnerCarry = Multiplication.m_unsignedMultAddAdd__int__int__int__int__long(m, modulusDigits[j], res[i + j | 0], $Primitives.narrowLongToInt(innnerCarry));
    $Arrays.$set(res, i + j | 0, $Primitives.narrowLongToInt(innnerCarry));
    innnerCarry = $LongUtils.rightShiftUnsigned(innnerCarry, 32);
   }
   outerCarry = $LongUtils.plus(outerCarry, $LongUtils.plus($LongUtils.bitAnd($Primitives.widenIntToLong(res[i + modulusLen | 0]), $Long.fromBits(-1, 0) /* 4294967295 */), innnerCarry));
   $Arrays.$set(res, i + modulusLen | 0, $Primitives.narrowLongToInt(outerCarry));
   outerCarry = $LongUtils.rightShiftUnsigned(outerCarry, 32);
  }
  $Arrays.$set(res, modulusLen << 1, $Primitives.narrowLongToInt(outerCarry));
  for (let j_1 = 0; j_1 < (modulusLen + 1 | 0); j_1 = j_1 + 1 | 0) {
   $Arrays.$set(res, j_1, res[j_1 + modulusLen | 0]);
  }
 }
 /** @nodts */
 static $clinit() {
  Division.$clinit = () =>{};
  Division.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Division;
 }
 
 /** @nodts */
 static $loadModules() {
  ArithmeticException = goog.module.get('java.lang.ArithmeticException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  System = goog.module.get('java.lang.System$impl');
  BigInteger = goog.module.get('java.math.BigInteger$impl');
  BitLevel = goog.module.get('java.math.BitLevel$impl');
  Elementary = goog.module.get('java.math.Elementary$impl');
  Multiplication = goog.module.get('java.math.Multiplication$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(Division, 'java.math.Division');

exports = Division;

//# sourceMappingURL=Division.js.map
