goog.module('java.math.Elementary$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let System = goog.forwardDeclare('java.lang.System$impl');
let BigInteger = goog.forwardDeclare('java.math.BigInteger$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class Elementary extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {BigInteger} */
 static m_add__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ op1, /** BigInteger */ op2) {
  Elementary.$clinit();
  let /** Array<number> */ resDigits;
  let /** number */ resSign;
  let op1Sign = op1.f_sign__java_math_BigInteger;
  let op2Sign = op2.f_sign__java_math_BigInteger;
  if (op1Sign == 0) {
   return op2;
  }
  if (op2Sign == 0) {
   return op1;
  }
  let op1Len = op1.f_numberLength__java_math_BigInteger;
  let op2Len = op2.f_numberLength__java_math_BigInteger;
  if ((op1Len + op2Len | 0) == 2) {
   let a = $LongUtils.bitAnd($Primitives.widenIntToLong(op1.f_digits__java_math_BigInteger[0]), $Long.fromBits(-1, 0) /* 4294967295 */);
   let b = $LongUtils.bitAnd($Primitives.widenIntToLong(op2.f_digits__java_math_BigInteger[0]), $Long.fromBits(-1, 0) /* 4294967295 */);
   let /** !$Long */ res;
   let /** number */ valueLo;
   let /** number */ valueHi;
   if (op1Sign == op2Sign) {
    res = $LongUtils.plus(a, b);
    valueLo = $Primitives.narrowLongToInt(res);
    valueHi = $Primitives.narrowLongToInt($LongUtils.rightShiftUnsigned(res, 32));
    return valueHi == 0 ? BigInteger.$create__int__int(op1Sign, valueLo) : BigInteger.$create__int__int__arrayOf_int(op1Sign, 2, /**@type {!Array<number>}*/ ($Arrays.$init([valueLo, valueHi], $$int)));
   }
   return BigInteger.m_valueOf__long__java_math_BigInteger(op1Sign < 0 ? $LongUtils.minus(b, a) : $LongUtils.minus(a, b));
  } else if (op1Sign == op2Sign) {
   resSign = op1Sign;
   resDigits = op1Len >= op2Len ? Elementary.m_add__arrayOf_int__int__arrayOf_int__int__arrayOf_int(op1.f_digits__java_math_BigInteger, op1Len, op2.f_digits__java_math_BigInteger, op2Len) : Elementary.m_add__arrayOf_int__int__arrayOf_int__int__arrayOf_int(op2.f_digits__java_math_BigInteger, op2Len, op1.f_digits__java_math_BigInteger, op1Len);
  } else {
   let cmp = op1Len != op2Len ? op1Len > op2Len ? 1 : - 1 | 0 : Elementary.m_compareArrays__arrayOf_int__arrayOf_int__int__int(op1.f_digits__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op1Len);
   if (cmp == BigInteger.f_EQUALS__java_math_BigInteger) {
    return BigInteger.f_ZERO__java_math_BigInteger;
   }
   if (cmp == BigInteger.f_GREATER__java_math_BigInteger) {
    resSign = op1Sign;
    resDigits = Elementary.m_subtract__arrayOf_int__int__arrayOf_int__int__arrayOf_int(op1.f_digits__java_math_BigInteger, op1Len, op2.f_digits__java_math_BigInteger, op2Len);
   } else {
    resSign = op2Sign;
    resDigits = Elementary.m_subtract__arrayOf_int__int__arrayOf_int__int__arrayOf_int(op2.f_digits__java_math_BigInteger, op2Len, op1.f_digits__java_math_BigInteger, op1Len);
   }
  }
  let res_1 = BigInteger.$create__int__int__arrayOf_int(resSign, resDigits.length, resDigits);
  res_1.m_cutOffLeadingZeroes__void_$pp_java_math();
  return res_1;
 }
 /** @nodts @return {number} */
 static m_compareArrays__arrayOf_int__arrayOf_int__int__int(/** Array<number> */ a, /** Array<number> */ b, /** number */ size) {
  Elementary.$clinit();
  let /** number */ i;
  for (i = size - 1 | 0; i >= 0 && a[i] == b[i]; i = i - 1 | 0) {}
  return i < 0 ? BigInteger.f_EQUALS__java_math_BigInteger : $LongUtils.less($LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(b[i]), $Long.fromBits(-1, 0) /* 4294967295 */)) ? BigInteger.f_LESS__java_math_BigInteger : BigInteger.f_GREATER__java_math_BigInteger;
 }
 /** @nodts */
 static m_completeInPlaceAdd__java_math_BigInteger__java_math_BigInteger__void(/** BigInteger */ op1, /** BigInteger */ op2) {
  Elementary.$clinit();
  if (op1.f_sign__java_math_BigInteger == 0) {
   System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(op2.f_digits__java_math_BigInteger, 0, op1.f_digits__java_math_BigInteger, 0, op2.f_numberLength__java_math_BigInteger);
  } else if (op2.f_sign__java_math_BigInteger == 0) {
   return;
  } else if (op1.f_sign__java_math_BigInteger == op2.f_sign__java_math_BigInteger) {
   Elementary.m_add__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(op1.f_digits__java_math_BigInteger, op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
  } else {
   let sign = Elementary.m_unsignedArraysCompare__arrayOf_int__arrayOf_int__int__int__int(op1.f_digits__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
   if (sign > 0) {
    Elementary.m_subtract__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(op1.f_digits__java_math_BigInteger, op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
   } else {
    Elementary.m_inverseSubtract__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(op1.f_digits__java_math_BigInteger, op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
    op1.f_sign__java_math_BigInteger = - op1.f_sign__java_math_BigInteger | 0;
   }
  }
  op1.f_numberLength__java_math_BigInteger = Math.max(op1.f_numberLength__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger) + 1 | 0;
  op1.m_cutOffLeadingZeroes__void_$pp_java_math();
  op1.m_unCache__void_$pp_java_math();
 }
 /** @nodts */
 static m_completeInPlaceSubtract__java_math_BigInteger__java_math_BigInteger__void(/** BigInteger */ op1, /** BigInteger */ op2) {
  Elementary.$clinit();
  let resultSign = op1.m_compareTo__java_math_BigInteger__int(op2);
  if (op1.f_sign__java_math_BigInteger == 0) {
   System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(op2.f_digits__java_math_BigInteger, 0, op1.f_digits__java_math_BigInteger, 0, op2.f_numberLength__java_math_BigInteger);
   op1.f_sign__java_math_BigInteger = - op2.f_sign__java_math_BigInteger | 0;
  } else if (op1.f_sign__java_math_BigInteger != op2.f_sign__java_math_BigInteger) {
   Elementary.m_add__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(op1.f_digits__java_math_BigInteger, op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
   op1.f_sign__java_math_BigInteger = resultSign;
  } else {
   let sign = Elementary.m_unsignedArraysCompare__arrayOf_int__arrayOf_int__int__int__int(op1.f_digits__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
   if (sign > 0) {
    Elementary.m_subtract__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(op1.f_digits__java_math_BigInteger, op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
   } else {
    Elementary.m_inverseSubtract__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(op1.f_digits__java_math_BigInteger, op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
    op1.f_sign__java_math_BigInteger = - op1.f_sign__java_math_BigInteger | 0;
   }
  }
  op1.f_numberLength__java_math_BigInteger = Math.max(op1.f_numberLength__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger) + 1 | 0;
  op1.m_cutOffLeadingZeroes__void_$pp_java_math();
  op1.m_unCache__void_$pp_java_math();
 }
 /** @nodts */
 static m_inplaceAdd__java_math_BigInteger__java_math_BigInteger__void(/** BigInteger */ op1, /** BigInteger */ op2) {
  Elementary.$clinit();
  Elementary.m_add__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(op1.f_digits__java_math_BigInteger, op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
  op1.f_numberLength__java_math_BigInteger = Math.min(Math.max(op1.f_numberLength__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger) + 1 | 0, op1.f_digits__java_math_BigInteger.length);
  op1.m_cutOffLeadingZeroes__void_$pp_java_math();
  op1.m_unCache__void_$pp_java_math();
 }
 /** @nodts */
 static m_inplaceAdd__java_math_BigInteger__int__void(/** BigInteger */ op1, /** number */ addend) {
  Elementary.$clinit();
  let carry = Elementary.m_inplaceAdd__arrayOf_int__int__int__int(op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, addend);
  if (carry == 1) {
   $Arrays.$set(op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, 1);
   op1.f_numberLength__java_math_BigInteger = op1.f_numberLength__java_math_BigInteger + 1 | 0;
  }
  op1.m_unCache__void_$pp_java_math();
 }
 /** @nodts @return {number} */
 static m_inplaceAdd__arrayOf_int__int__int__int(/** Array<number> */ a, /** number */ aSize, /** number */ addend) {
  Elementary.$clinit();
  let carry = $LongUtils.bitAnd($Primitives.widenIntToLong(addend), $Long.fromBits(-1, 0) /* 4294967295 */);
  for (let i = 0; $LongUtils.notEquals(carry, $Long.fromInt(0)) && i < aSize; i = i + 1 | 0) {
   carry = $LongUtils.plus(carry, $LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */));
   $Arrays.$set(a, i, $Primitives.narrowLongToInt(carry));
   carry = $LongUtils.rightShiftSigned(carry, 32);
  }
  return $Primitives.narrowLongToInt(carry);
 }
 /** @nodts */
 static m_inplaceSubtract__java_math_BigInteger__java_math_BigInteger__void(/** BigInteger */ op1, /** BigInteger */ op2) {
  Elementary.$clinit();
  Elementary.m_subtract__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(op1.f_digits__java_math_BigInteger, op1.f_digits__java_math_BigInteger, op1.f_numberLength__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op2.f_numberLength__java_math_BigInteger);
  op1.m_cutOffLeadingZeroes__void_$pp_java_math();
  op1.m_unCache__void_$pp_java_math();
 }
 /** @nodts @return {BigInteger} */
 static m_subtract__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ op1, /** BigInteger */ op2) {
  Elementary.$clinit();
  let /** number */ resSign;
  let /** Array<number> */ resDigits;
  let op1Sign = op1.f_sign__java_math_BigInteger;
  let op2Sign = op2.f_sign__java_math_BigInteger;
  if (op2Sign == 0) {
   return op1;
  }
  if (op1Sign == 0) {
   return op2.m_negate__java_math_BigInteger();
  }
  let op1Len = op1.f_numberLength__java_math_BigInteger;
  let op2Len = op2.f_numberLength__java_math_BigInteger;
  if ((op1Len + op2Len | 0) == 2) {
   let a = $LongUtils.bitAnd($Primitives.widenIntToLong(op1.f_digits__java_math_BigInteger[0]), $Long.fromBits(-1, 0) /* 4294967295 */);
   let b = $LongUtils.bitAnd($Primitives.widenIntToLong(op2.f_digits__java_math_BigInteger[0]), $Long.fromBits(-1, 0) /* 4294967295 */);
   if (op1Sign < 0) {
    a = $LongUtils.negate(a);
   }
   if (op2Sign < 0) {
    b = $LongUtils.negate(b);
   }
   return BigInteger.m_valueOf__long__java_math_BigInteger($LongUtils.minus(a, b));
  }
  let cmp = op1Len != op2Len ? op1Len > op2Len ? 1 : - 1 | 0 : Elementary.m_compareArrays__arrayOf_int__arrayOf_int__int__int(op1.f_digits__java_math_BigInteger, op2.f_digits__java_math_BigInteger, op1Len);
  if (cmp == BigInteger.f_LESS__java_math_BigInteger) {
   resSign = - op2Sign | 0;
   resDigits = op1Sign == op2Sign ? Elementary.m_subtract__arrayOf_int__int__arrayOf_int__int__arrayOf_int(op2.f_digits__java_math_BigInteger, op2Len, op1.f_digits__java_math_BigInteger, op1Len) : Elementary.m_add__arrayOf_int__int__arrayOf_int__int__arrayOf_int(op2.f_digits__java_math_BigInteger, op2Len, op1.f_digits__java_math_BigInteger, op1Len);
  } else {
   resSign = op1Sign;
   if (op1Sign == op2Sign) {
    if (cmp == BigInteger.f_EQUALS__java_math_BigInteger) {
     return BigInteger.f_ZERO__java_math_BigInteger;
    }
    resDigits = Elementary.m_subtract__arrayOf_int__int__arrayOf_int__int__arrayOf_int(op1.f_digits__java_math_BigInteger, op1Len, op2.f_digits__java_math_BigInteger, op2Len);
   } else {
    resDigits = Elementary.m_add__arrayOf_int__int__arrayOf_int__int__arrayOf_int(op1.f_digits__java_math_BigInteger, op1Len, op2.f_digits__java_math_BigInteger, op2Len);
   }
  }
  let res = BigInteger.$create__int__int__arrayOf_int(resSign, resDigits.length, resDigits);
  res.m_cutOffLeadingZeroes__void_$pp_java_math();
  return res;
 }
 /** @nodts @return {Array<number>} */
 static m_add__arrayOf_int__int__arrayOf_int__int__arrayOf_int(/** Array<number> */ a, /** number */ aSize, /** Array<number> */ b, /** number */ bSize) {
  let res = /**@type {!Array<number>}*/ ($Arrays.$create([aSize + 1 | 0], $$int));
  Elementary.m_add__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(res, a, aSize, b, bSize);
  return res;
 }
 /** @nodts */
 static m_add__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(/** Array<number> */ res, /** Array<number> */ a, /** number */ aSize, /** Array<number> */ b, /** number */ bSize) {
  let /** number */ i;
  let carry = $LongUtils.plus($LongUtils.bitAnd($Primitives.widenIntToLong(a[0]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(b[0]), $Long.fromBits(-1, 0) /* 4294967295 */));
  $Arrays.$set(res, 0, $Primitives.narrowLongToInt(carry));
  carry = $LongUtils.rightShiftSigned(carry, 32);
  if (aSize >= bSize) {
   for (i = 1; i < bSize; i = i + 1 | 0) {
    carry = $LongUtils.plus(carry, $LongUtils.plus($LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(b[i]), $Long.fromBits(-1, 0) /* 4294967295 */)));
    $Arrays.$set(res, i, $Primitives.narrowLongToInt(carry));
    carry = $LongUtils.rightShiftSigned(carry, 32);
   }
   for (; i < aSize; i = i + 1 | 0) {
    carry = $LongUtils.plus(carry, $LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */));
    $Arrays.$set(res, i, $Primitives.narrowLongToInt(carry));
    carry = $LongUtils.rightShiftSigned(carry, 32);
   }
  } else {
   for (i = 1; i < aSize; i = i + 1 | 0) {
    carry = $LongUtils.plus(carry, $LongUtils.plus($LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(b[i]), $Long.fromBits(-1, 0) /* 4294967295 */)));
    $Arrays.$set(res, i, $Primitives.narrowLongToInt(carry));
    carry = $LongUtils.rightShiftSigned(carry, 32);
   }
   for (; i < bSize; i = i + 1 | 0) {
    carry = $LongUtils.plus(carry, $LongUtils.bitAnd($Primitives.widenIntToLong(b[i]), $Long.fromBits(-1, 0) /* 4294967295 */));
    $Arrays.$set(res, i, $Primitives.narrowLongToInt(carry));
    carry = $LongUtils.rightShiftSigned(carry, 32);
   }
  }
  if ($LongUtils.notEquals(carry, $Long.fromInt(0))) {
   $Arrays.$set(res, i, $Primitives.narrowLongToInt(carry));
  }
 }
 /** @nodts */
 static m_inverseSubtract__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(/** Array<number> */ res, /** Array<number> */ a, /** number */ aSize, /** Array<number> */ b, /** number */ bSize) {
  let /** number */ i;
  let borrow = $Long.fromInt(0);
  if (aSize < bSize) {
   for (i = 0; i < aSize; i = i + 1 | 0) {
    borrow = $LongUtils.plus(borrow, $LongUtils.minus($LongUtils.bitAnd($Primitives.widenIntToLong(b[i]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */)));
    $Arrays.$set(res, i, $Primitives.narrowLongToInt(borrow));
    borrow = $LongUtils.rightShiftSigned(borrow, 32);
   }
   for (; i < bSize; i = i + 1 | 0) {
    borrow = $LongUtils.plus(borrow, $LongUtils.bitAnd($Primitives.widenIntToLong(b[i]), $Long.fromBits(-1, 0) /* 4294967295 */));
    $Arrays.$set(res, i, $Primitives.narrowLongToInt(borrow));
    borrow = $LongUtils.rightShiftSigned(borrow, 32);
   }
  } else {
   for (i = 0; i < bSize; i = i + 1 | 0) {
    borrow = $LongUtils.plus(borrow, $LongUtils.minus($LongUtils.bitAnd($Primitives.widenIntToLong(b[i]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */)));
    $Arrays.$set(res, i, $Primitives.narrowLongToInt(borrow));
    borrow = $LongUtils.rightShiftSigned(borrow, 32);
   }
   for (; i < aSize; i = i + 1 | 0) {
    borrow = $LongUtils.minus(borrow, $LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */));
    $Arrays.$set(res, i, $Primitives.narrowLongToInt(borrow));
    borrow = $LongUtils.rightShiftSigned(borrow, 32);
   }
  }
 }
 /** @nodts @return {Array<number>} */
 static m_subtract__arrayOf_int__int__arrayOf_int__int__arrayOf_int(/** Array<number> */ a, /** number */ aSize, /** Array<number> */ b, /** number */ bSize) {
  let res = /**@type {!Array<number>}*/ ($Arrays.$create([aSize], $$int));
  Elementary.m_subtract__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(res, a, aSize, b, bSize);
  return res;
 }
 /** @nodts */
 static m_subtract__arrayOf_int__arrayOf_int__int__arrayOf_int__int__void(/** Array<number> */ res, /** Array<number> */ a, /** number */ aSize, /** Array<number> */ b, /** number */ bSize) {
  let /** number */ i;
  let borrow = $Long.fromInt(0);
  for (i = 0; i < bSize; i = i + 1 | 0) {
   borrow = $LongUtils.plus(borrow, $LongUtils.minus($LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(b[i]), $Long.fromBits(-1, 0) /* 4294967295 */)));
   $Arrays.$set(res, i, $Primitives.narrowLongToInt(borrow));
   borrow = $LongUtils.rightShiftSigned(borrow, 32);
  }
  for (; i < aSize; i = i + 1 | 0) {
   borrow = $LongUtils.plus(borrow, $LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */));
   $Arrays.$set(res, i, $Primitives.narrowLongToInt(borrow));
   borrow = $LongUtils.rightShiftSigned(borrow, 32);
  }
 }
 /** @nodts @return {number} */
 static m_unsignedArraysCompare__arrayOf_int__arrayOf_int__int__int__int(/** Array<number> */ a, /** Array<number> */ b, /** number */ aSize, /** number */ bSize) {
  if (aSize > bSize) {
   return 1;
  } else if (aSize < bSize) {
   return - 1 | 0;
  } else {
   let /** number */ i;
   for (i = aSize - 1 | 0; i >= 0 && a[i] == b[i]; i = i - 1 | 0) {}
   return i < 0 ? BigInteger.f_EQUALS__java_math_BigInteger : $LongUtils.less($LongUtils.bitAnd($Primitives.widenIntToLong(a[i]), $Long.fromBits(-1, 0) /* 4294967295 */), $LongUtils.bitAnd($Primitives.widenIntToLong(b[i]), $Long.fromBits(-1, 0) /* 4294967295 */)) ? BigInteger.f_LESS__java_math_BigInteger : BigInteger.f_GREATER__java_math_BigInteger;
  }
 }
 /** @nodts @return {!Elementary} */
 static $create__() {
  let $instance = new Elementary();
  $instance.$ctor__java_math_Elementary__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_math_Elementary__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Elementary.$clinit = () =>{};
  Elementary.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Elementary;
 }
 
 /** @nodts */
 static $loadModules() {
  System = goog.module.get('java.lang.System$impl');
  BigInteger = goog.module.get('java.math.BigInteger$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(Elementary, 'java.math.Elementary');

exports = Elementary;

//# sourceMappingURL=Elementary.js.map
