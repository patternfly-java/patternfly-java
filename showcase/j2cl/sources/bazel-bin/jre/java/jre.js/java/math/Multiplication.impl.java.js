goog.module('java.math.Multiplication$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArithmeticException = goog.forwardDeclare('java.lang.ArithmeticException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let BigInteger = goog.forwardDeclare('java.math.BigInteger$impl');
let BitLevel = goog.forwardDeclare('java.math.BitLevel$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class Multiplication extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {BigInteger} */
 static m_karatsuba__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ op1, /** BigInteger */ op2) {
  Multiplication.$clinit();
  let /** BigInteger */ temp;
  if (op2.f_numberLength__java_math_BigInteger > op1.f_numberLength__java_math_BigInteger) {
   temp = op1;
   op1 = op2;
   op2 = temp;
  }
  if (op2.f_numberLength__java_math_BigInteger < Multiplication.f_whenUseKaratsuba__java_math_Multiplication) {
   return Multiplication.m_multiplyPAP__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(op1, op2);
  }
  let ndiv2 = (op1.f_numberLength__java_math_BigInteger & -2) << 4;
  let upperOp1 = op1.m_shiftRight__int__java_math_BigInteger(ndiv2);
  let upperOp2 = op2.m_shiftRight__int__java_math_BigInteger(ndiv2);
  let lowerOp1 = op1.m_subtract__java_math_BigInteger__java_math_BigInteger(upperOp1.m_shiftLeft__int__java_math_BigInteger(ndiv2));
  let lowerOp2 = op2.m_subtract__java_math_BigInteger__java_math_BigInteger(upperOp2.m_shiftLeft__int__java_math_BigInteger(ndiv2));
  let upper = Multiplication.m_karatsuba__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(upperOp1, upperOp2);
  let lower = Multiplication.m_karatsuba__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(lowerOp1, lowerOp2);
  let middle = Multiplication.m_karatsuba__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(upperOp1.m_subtract__java_math_BigInteger__java_math_BigInteger(lowerOp1), lowerOp2.m_subtract__java_math_BigInteger__java_math_BigInteger(upperOp2));
  middle = middle.m_add__java_math_BigInteger__java_math_BigInteger(upper).m_add__java_math_BigInteger__java_math_BigInteger(lower);
  middle = middle.m_shiftLeft__int__java_math_BigInteger(ndiv2);
  upper = upper.m_shiftLeft__int__java_math_BigInteger(ndiv2 << 1);
  return upper.m_add__java_math_BigInteger__java_math_BigInteger(middle).m_add__java_math_BigInteger__java_math_BigInteger(lower);
 }
 /** @nodts */
 static m_multArraysPAP__arrayOf_int__int__arrayOf_int__int__arrayOf_int__void(/** Array<number> */ aDigits, /** number */ aLen, /** Array<number> */ bDigits, /** number */ bLen, /** Array<number> */ resDigits) {
  Multiplication.$clinit();
  if (aLen == 0 || bLen == 0) {
   return;
  }
  if (aLen == 1) {
   $Arrays.$set(resDigits, bLen, Multiplication.m_multiplyByInt__arrayOf_int__arrayOf_int__int__int__int(resDigits, bDigits, bLen, aDigits[0]));
  } else if (bLen == 1) {
   $Arrays.$set(resDigits, aLen, Multiplication.m_multiplyByInt__arrayOf_int__arrayOf_int__int__int__int(resDigits, aDigits, aLen, bDigits[0]));
  } else {
   Multiplication.m_multPAP__arrayOf_int__arrayOf_int__arrayOf_int__int__int__void(aDigits, bDigits, resDigits, aLen, bLen);
  }
 }
 /** @nodts @return {BigInteger} */
 static m_multiply__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ x, /** BigInteger */ y) {
  Multiplication.$clinit();
  return Multiplication.m_karatsuba__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(x, y);
 }
 /** @nodts @return {BigInteger} */
 static m_multiplyByFivePow__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ val, /** number */ exp) {
  Multiplication.$clinit();
  if (exp < Multiplication.$static_fivePows__java_math_Multiplication.length) {
   return Multiplication.m_multiplyByPositiveInt__java_math_BigInteger__int__java_math_BigInteger(val, Multiplication.$static_fivePows__java_math_Multiplication[exp]);
  } else if (exp < Multiplication.$static_bigFivePows__java_math_Multiplication.length) {
   return val.m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.$static_bigFivePows__java_math_Multiplication[exp]);
  } else {
   return val.m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.$static_bigFivePows__java_math_Multiplication[1].m_pow__int__java_math_BigInteger(exp));
  }
 }
 /** @nodts @return {number} */
 static m_multiplyByInt__arrayOf_int__int__int__int(/** Array<number> */ a, /** number */ aSize, /** number */ factor) {
  Multiplication.$clinit();
  return Multiplication.m_multiplyByInt__arrayOf_int__arrayOf_int__int__int__int(a, a, aSize, factor);
 }
 /** @nodts @return {BigInteger} */
 static m_multiplyByPositiveInt__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ val, /** number */ factor) {
  Multiplication.$clinit();
  let resSign = val.f_sign__java_math_BigInteger;
  if (resSign == 0) {
   return BigInteger.f_ZERO__java_math_BigInteger;
  }
  let aNumberLength = val.f_numberLength__java_math_BigInteger;
  let aDigits = val.f_digits__java_math_BigInteger;
  if (aNumberLength == 1) {
   let res = Multiplication.m_unsignedMultAddAdd__int__int__int__int__long(aDigits[0], factor, 0, 0);
   let resLo = $Primitives.narrowLongToInt(res);
   let resHi = $Primitives.narrowLongToInt($LongUtils.rightShiftUnsigned(res, 32));
   return resHi == 0 ? BigInteger.$create__int__int(resSign, resLo) : BigInteger.$create__int__int__arrayOf_int(resSign, 2, /**@type {!Array<number>}*/ ($Arrays.$init([resLo, resHi], $$int)));
  }
  let resLength = aNumberLength + 1 | 0;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  $Arrays.$set(resDigits, aNumberLength, Multiplication.m_multiplyByInt__arrayOf_int__arrayOf_int__int__int__int(resDigits, aDigits, aNumberLength, factor));
  let result = BigInteger.$create__int__int__arrayOf_int(resSign, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_multiplyByTenPow__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ val, /** number */ exp) {
  Multiplication.$clinit();
  return exp < Multiplication.$static_tenPows__java_math_Multiplication.length ? Multiplication.m_multiplyByPositiveInt__java_math_BigInteger__int__java_math_BigInteger(val, Multiplication.$static_tenPows__java_math_Multiplication[exp]) : val.m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.m_powerOf10__double__java_math_BigInteger(exp));
 }
 /** @nodts @return {BigInteger} */
 static m_multiplyPAP__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ a, /** BigInteger */ b) {
  Multiplication.$clinit();
  let aLen = a.f_numberLength__java_math_BigInteger;
  let bLen = b.f_numberLength__java_math_BigInteger;
  let resLength = aLen + bLen | 0;
  let resSign = a.f_sign__java_math_BigInteger != b.f_sign__java_math_BigInteger ? - 1 | 0 : 1;
  if (resLength == 2) {
   let val = Multiplication.m_unsignedMultAddAdd__int__int__int__int__long(a.f_digits__java_math_BigInteger[0], b.f_digits__java_math_BigInteger[0], 0, 0);
   let valueLo = $Primitives.narrowLongToInt(val);
   let valueHi = $Primitives.narrowLongToInt($LongUtils.rightShiftUnsigned(val, 32));
   return valueHi == 0 ? BigInteger.$create__int__int(resSign, valueLo) : BigInteger.$create__int__int__arrayOf_int(resSign, 2, /**@type {!Array<number>}*/ ($Arrays.$init([valueLo, valueHi], $$int)));
  }
  let aDigits = a.f_digits__java_math_BigInteger;
  let bDigits = b.f_digits__java_math_BigInteger;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  Multiplication.m_multArraysPAP__arrayOf_int__int__arrayOf_int__int__arrayOf_int__void(aDigits, aLen, bDigits, bLen, resDigits);
  let result = BigInteger.$create__int__int__arrayOf_int(resSign, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts */
 static m_multPAP__arrayOf_int__arrayOf_int__arrayOf_int__int__int__void(/** Array<number> */ a, /** Array<number> */ b, /** Array<number> */ t, /** number */ aLen, /** number */ bLen) {
  Multiplication.$clinit();
  if ($Equality.$same(a, b) && aLen == bLen) {
   Multiplication.m_square__arrayOf_int__int__arrayOf_int__arrayOf_int(a, aLen, t);
   return;
  }
  for (let i = 0; i < aLen; i = i + 1 | 0) {
   let carry = $Long.fromInt(0);
   let aI = a[i];
   for (let j = 0; j < bLen; j = j + 1 | 0) {
    carry = Multiplication.m_unsignedMultAddAdd__int__int__int__int__long(aI, b[j], t[i + j | 0], $Primitives.narrowLongToInt(carry));
    $Arrays.$set(t, i + j | 0, $Primitives.narrowLongToInt(carry));
    carry = $LongUtils.rightShiftUnsigned(carry, 32);
   }
   $Arrays.$set(t, i + bLen | 0, $Primitives.narrowLongToInt(carry));
  }
 }
 /** @nodts @return {BigInteger} */
 static m_pow__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ base, /** number */ exponent) {
  Multiplication.$clinit();
  let res = BigInteger.f_ONE__java_math_BigInteger;
  let acc = base;
  for (; exponent > 1; exponent >>= 1) {
   if ((exponent & 1) != 0) {
    res = res.m_multiply__java_math_BigInteger__java_math_BigInteger(acc);
   }
   if (acc.f_numberLength__java_math_BigInteger == 1) {
    acc = acc.m_multiply__java_math_BigInteger__java_math_BigInteger(acc);
   } else {
    acc = BigInteger.$create__int__arrayOf_int(1, Multiplication.m_square__arrayOf_int__int__arrayOf_int__arrayOf_int(acc.f_digits__java_math_BigInteger, acc.f_numberLength__java_math_BigInteger, /**@type {!Array<number>}*/ ($Arrays.$create([acc.f_numberLength__java_math_BigInteger << 1], $$int))));
   }
  }
  res = res.m_multiply__java_math_BigInteger__java_math_BigInteger(acc);
  return res;
 }
 /** @nodts @return {BigInteger} */
 static m_powerOf10__double__java_math_BigInteger(/** number */ exp) {
  Multiplication.$clinit();
  let intExp = $Primitives.narrowDoubleToInt(exp);
  if (exp < Multiplication.$static_bigTenPows__java_math_Multiplication.length) {
   return Multiplication.$static_bigTenPows__java_math_Multiplication[intExp];
  } else if (exp <= 50) {
   return BigInteger.f_TEN__java_math_BigInteger.m_pow__int__java_math_BigInteger(intExp);
  } else if (exp <= 1000) {
   return Multiplication.$static_bigFivePows__java_math_Multiplication[1].m_pow__int__java_math_BigInteger(intExp).m_shiftLeft__int__java_math_BigInteger(intExp);
  }
  if (exp > 1000000) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('power of ten too big'));
  }
  if (exp <= Integer.f_MAX_VALUE__java_lang_Integer) {
   return Multiplication.$static_bigFivePows__java_math_Multiplication[1].m_pow__int__java_math_BigInteger(intExp).m_shiftLeft__int__java_math_BigInteger(intExp);
  }
  let powerOfFive = Multiplication.$static_bigFivePows__java_math_Multiplication[1].m_pow__int__java_math_BigInteger(Integer.f_MAX_VALUE__java_lang_Integer);
  let res = powerOfFive;
  let longExp = $Primitives.narrowDoubleToLong(exp - Integer.f_MAX_VALUE__java_lang_Integer);
  intExp = $Primitives.narrowDoubleToInt(exp % Integer.f_MAX_VALUE__java_lang_Integer);
  while ($LongUtils.greater(longExp, $Primitives.widenIntToLong(Integer.f_MAX_VALUE__java_lang_Integer))) {
   res = res.m_multiply__java_math_BigInteger__java_math_BigInteger(powerOfFive);
   longExp = $LongUtils.minus(longExp, $Primitives.widenIntToLong(Integer.f_MAX_VALUE__java_lang_Integer));
  }
  res = res.m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.$static_bigFivePows__java_math_Multiplication[1].m_pow__int__java_math_BigInteger(intExp));
  res = res.m_shiftLeft__int__java_math_BigInteger(Integer.f_MAX_VALUE__java_lang_Integer);
  longExp = $Primitives.narrowDoubleToLong(exp - Integer.f_MAX_VALUE__java_lang_Integer);
  while ($LongUtils.greater(longExp, $Primitives.widenIntToLong(Integer.f_MAX_VALUE__java_lang_Integer))) {
   res = res.m_shiftLeft__int__java_math_BigInteger(Integer.f_MAX_VALUE__java_lang_Integer);
   longExp = $LongUtils.minus(longExp, $Primitives.widenIntToLong(Integer.f_MAX_VALUE__java_lang_Integer));
  }
  res = res.m_shiftLeft__int__java_math_BigInteger(intExp);
  return res;
 }
 /** @nodts @return {Array<number>} */
 static m_square__arrayOf_int__int__arrayOf_int__arrayOf_int(/** Array<number> */ a, /** number */ aLen, /** Array<number> */ res) {
  Multiplication.$clinit();
  let /** !$Long */ carry;
  for (let i = 0; i < aLen; i = i + 1 | 0) {
   carry = $Long.fromInt(0);
   for (let j = i + 1 | 0; j < aLen; j = j + 1 | 0) {
    carry = Multiplication.m_unsignedMultAddAdd__int__int__int__int__long(a[i], a[j], res[i + j | 0], $Primitives.narrowLongToInt(carry));
    $Arrays.$set(res, i + j | 0, $Primitives.narrowLongToInt(carry));
    carry = $LongUtils.rightShiftUnsigned(carry, 32);
   }
   $Arrays.$set(res, i + aLen | 0, $Primitives.narrowLongToInt(carry));
  }
  BitLevel.m_shiftLeftOneBit__arrayOf_int__arrayOf_int__int__void(res, res, aLen << 1);
  carry = $Long.fromInt(0);
  for (let i_1 = 0, index = 0; i_1 < aLen; i_1 = i_1 + 1 | 0, index = index + 1 | 0) {
   carry = Multiplication.m_unsignedMultAddAdd__int__int__int__int__long(a[i_1], a[i_1], res[index], $Primitives.narrowLongToInt(carry));
   $Arrays.$set(res, index, $Primitives.narrowLongToInt(carry));
   carry = $LongUtils.rightShiftUnsigned(carry, 32);
   index = index + 1 | 0;
   carry = $LongUtils.plus(carry, $LongUtils.bitAnd($Primitives.widenIntToLong(res[index]), $Long.fromBits(-1, 0) /* 4294967295 */));
   $Arrays.$set(res, index, $Primitives.narrowLongToInt(carry));
   carry = $LongUtils.rightShiftUnsigned(carry, 32);
  }
  return res;
 }
 /** @nodts @return {!$Long} */
 static m_unsignedMultAddAdd__int__int__int__int__long(/** number */ a, /** number */ b, /** number */ c, /** number */ d) {
  Multiplication.$clinit();
  return $LongUtils.plus($LongUtils.plus($LongUtils.times($LongUtils.bitAnd($Primitives.widenIntToLong(a), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(b), $Long.fromBits(-1, 0) /* 4294967295 */)), $LongUtils.bitAnd($Primitives.widenIntToLong(c), $Long.fromBits(-1, 0) /* 4294967295 */)), $LongUtils.bitAnd($Primitives.widenIntToLong(d), $Long.fromBits(-1, 0) /* 4294967295 */));
 }
 /** @nodts @return {number} */
 static m_multiplyByInt__arrayOf_int__arrayOf_int__int__int__int(/** Array<number> */ res, /** Array<number> */ a, /** number */ aSize, /** number */ factor) {
  let carry = $Long.fromInt(0);
  for (let i = 0; i < aSize; i = i + 1 | 0) {
   carry = Multiplication.m_unsignedMultAddAdd__int__int__int__int__long(a[i], factor, $Primitives.narrowLongToInt(carry), 0);
   $Arrays.$set(res, i, $Primitives.narrowLongToInt(carry));
   carry = $LongUtils.rightShiftUnsigned(carry, 32);
  }
  return $Primitives.narrowLongToInt(carry);
 }
 /** @nodts @return {!Multiplication} */
 static $create__() {
  let $instance = new Multiplication();
  $instance.$ctor__java_math_Multiplication__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_math_Multiplication__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Array<BigInteger>} */
 static get f_bigFivePows__java_math_Multiplication() {
  return (Multiplication.$clinit(), Multiplication.$static_bigFivePows__java_math_Multiplication);
 }
 /** @nodts @return {Array<BigInteger>} */
 static get f_bigTenPows__java_math_Multiplication() {
  return (Multiplication.$clinit(), Multiplication.$static_bigTenPows__java_math_Multiplication);
 }
 /** @nodts @return {Array<number>} */
 static get f_fivePows__java_math_Multiplication() {
  return (Multiplication.$clinit(), Multiplication.$static_fivePows__java_math_Multiplication);
 }
 /** @nodts @return {Array<number>} */
 static get f_tenPows__java_math_Multiplication() {
  return (Multiplication.$clinit(), Multiplication.$static_tenPows__java_math_Multiplication);
 }
 /** @nodts */
 static $clinit() {
  Multiplication.$clinit = () =>{};
  Multiplication.$loadModules();
  j_l_Object.$clinit();
  Multiplication.$static_bigFivePows__java_math_Multiplication = /**@type {!Array<BigInteger>}*/ ($Arrays.$create([32], BigInteger));
  Multiplication.$static_bigTenPows__java_math_Multiplication = /**@type {!Array<BigInteger>}*/ ($Arrays.$create([32], BigInteger));
  Multiplication.$static_fivePows__java_math_Multiplication = /**@type {!Array<number>}*/ ($Arrays.$init([1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125], $$int));
  Multiplication.$static_tenPows__java_math_Multiplication = /**@type {!Array<number>}*/ ($Arrays.$init([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], $$int));
  let /** number */ i;
  let fivePow = $Long.fromInt(1);
  for (i = 0; i <= 18; i = i + 1 | 0) {
   $Arrays.$set(Multiplication.$static_bigFivePows__java_math_Multiplication, i, BigInteger.m_valueOf__long__java_math_BigInteger(fivePow));
   $Arrays.$set(Multiplication.$static_bigTenPows__java_math_Multiplication, i, BigInteger.m_valueOf__long__java_math_BigInteger($LongUtils.leftShift(fivePow, i)));
   fivePow = $LongUtils.times(fivePow, $Long.fromInt(5));
  }
  for (; i < Multiplication.$static_bigTenPows__java_math_Multiplication.length; i = i + 1 | 0) {
   $Arrays.$set(Multiplication.$static_bigFivePows__java_math_Multiplication, i, Multiplication.$static_bigFivePows__java_math_Multiplication[i - 1 | 0].m_multiply__java_math_BigInteger__java_math_BigInteger(Multiplication.$static_bigFivePows__java_math_Multiplication[1]));
   $Arrays.$set(Multiplication.$static_bigTenPows__java_math_Multiplication, i, Multiplication.$static_bigTenPows__java_math_Multiplication[i - 1 | 0].m_multiply__java_math_BigInteger__java_math_BigInteger(BigInteger.f_TEN__java_math_BigInteger));
  }
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Multiplication;
 }
 
 /** @nodts */
 static $loadModules() {
  ArithmeticException = goog.module.get('java.lang.ArithmeticException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  BigInteger = goog.module.get('java.math.BigInteger$impl');
  BitLevel = goog.module.get('java.math.BitLevel$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@private {Array<BigInteger>} @nodts*/
Multiplication.$static_bigFivePows__java_math_Multiplication;
/**@private {Array<BigInteger>} @nodts*/
Multiplication.$static_bigTenPows__java_math_Multiplication;
/**@private {Array<number>} @nodts*/
Multiplication.$static_fivePows__java_math_Multiplication;
/**@private {Array<number>} @nodts*/
Multiplication.$static_tenPows__java_math_Multiplication;
/**@const {number} @nodts*/
Multiplication.f_whenUseKaratsuba__java_math_Multiplication = 63;
$Util.$setClassMetadata(Multiplication, 'java.math.Multiplication');

exports = Multiplication;

//# sourceMappingURL=Multiplication.js.map
