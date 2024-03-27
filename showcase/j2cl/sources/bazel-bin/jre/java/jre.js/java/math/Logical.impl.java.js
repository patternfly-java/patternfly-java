goog.module('java.math.Logical$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BigInteger = goog.forwardDeclare('java.math.BigInteger$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class Logical extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {BigInteger} */
 static m_and__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val, /** BigInteger */ that) {
  Logical.$clinit();
  if (that.f_sign__java_math_BigInteger == 0 || val.f_sign__java_math_BigInteger == 0) {
   return BigInteger.f_ZERO__java_math_BigInteger;
  }
  if (that.equals(BigInteger.f_MINUS_ONE__java_math_BigInteger)) {
   return val;
  }
  if (val.equals(BigInteger.f_MINUS_ONE__java_math_BigInteger)) {
   return that;
  }
  if (val.f_sign__java_math_BigInteger > 0) {
   if (that.f_sign__java_math_BigInteger > 0) {
    return Logical.m_andPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   } else {
    return Logical.m_andDiffSigns__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   }
  } else {
   if (that.f_sign__java_math_BigInteger > 0) {
    return Logical.m_andDiffSigns__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(that, val);
   } else if (val.f_numberLength__java_math_BigInteger > that.f_numberLength__java_math_BigInteger) {
    return Logical.m_andNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   } else {
    return Logical.m_andNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(that, val);
   }
  }
 }
 /** @nodts @return {BigInteger} */
 static m_andDiffSigns__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ positive, /** BigInteger */ negative) {
  Logical.$clinit();
  let iPos = positive.m_getFirstNonzeroDigit__int_$pp_java_math();
  let iNeg = negative.m_getFirstNonzeroDigit__int_$pp_java_math();
  if (iNeg >= positive.f_numberLength__java_math_BigInteger) {
   return BigInteger.f_ZERO__java_math_BigInteger;
  }
  let resLength = positive.f_numberLength__java_math_BigInteger;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  let i = Math.max(iPos, iNeg);
  if (i == iNeg) {
   $Arrays.$set(resDigits, i, (- negative.f_digits__java_math_BigInteger[i] | 0) & positive.f_digits__java_math_BigInteger[i]);
   i = i + 1 | 0;
  }
  let limit = Math.min(negative.f_numberLength__java_math_BigInteger, positive.f_numberLength__java_math_BigInteger);
  for (; i < limit; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, ~negative.f_digits__java_math_BigInteger[i] & positive.f_digits__java_math_BigInteger[i]);
  }
  if (i >= negative.f_numberLength__java_math_BigInteger) {
   for (; i < positive.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, positive.f_digits__java_math_BigInteger[i]);
   }
  }
  let result = BigInteger.$create__int__int__arrayOf_int(1, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_andNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ longer, /** BigInteger */ shorter) {
  Logical.$clinit();
  let iLonger = longer.m_getFirstNonzeroDigit__int_$pp_java_math();
  let iShorter = shorter.m_getFirstNonzeroDigit__int_$pp_java_math();
  if (iLonger >= shorter.f_numberLength__java_math_BigInteger) {
   return longer;
  }
  let /** number */ resLength;
  let /** Array<number> */ resDigits;
  let i = Math.max(iShorter, iLonger);
  let /** number */ digit;
  if (iShorter > iLonger) {
   digit = (- shorter.f_digits__java_math_BigInteger[i] | 0) & ~longer.f_digits__java_math_BigInteger[i];
  } else if (iShorter < iLonger) {
   digit = ~shorter.f_digits__java_math_BigInteger[i] & (- longer.f_digits__java_math_BigInteger[i] | 0);
  } else {
   digit = (- shorter.f_digits__java_math_BigInteger[i] | 0) & (- longer.f_digits__java_math_BigInteger[i] | 0);
  }
  if (digit == 0) {
   for (i = i + 1 | 0; i < shorter.f_numberLength__java_math_BigInteger && (digit = ~(longer.f_digits__java_math_BigInteger[i] | shorter.f_digits__java_math_BigInteger[i])) == 0; i = i + 1 | 0) {}
   if (digit == 0) {
    for (; i < longer.f_numberLength__java_math_BigInteger && (digit = ~longer.f_digits__java_math_BigInteger[i]) == 0; i = i + 1 | 0) {}
    if (digit == 0) {
     resLength = longer.f_numberLength__java_math_BigInteger + 1 | 0;
     resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
     $Arrays.$set(resDigits, resLength - 1 | 0, 1);
     let result = BigInteger.$create__int__int__arrayOf_int(- 1 | 0, resLength, resDigits);
     return result;
    }
   }
  }
  resLength = longer.f_numberLength__java_math_BigInteger;
  resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  $Arrays.$set(resDigits, i, - digit | 0);
  for (i = i + 1 | 0; i < shorter.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, longer.f_digits__java_math_BigInteger[i] | shorter.f_digits__java_math_BigInteger[i]);
  }
  for (; i < longer.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, longer.f_digits__java_math_BigInteger[i]);
  }
  let result_1 = BigInteger.$create__int__int__arrayOf_int(- 1 | 0, resLength, resDigits);
  return result_1;
 }
 /** @nodts @return {BigInteger} */
 static m_andNot__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val, /** BigInteger */ that) {
  Logical.$clinit();
  if (that.f_sign__java_math_BigInteger == 0) {
   return val;
  }
  if (val.f_sign__java_math_BigInteger == 0) {
   return BigInteger.f_ZERO__java_math_BigInteger;
  }
  if (val.equals(BigInteger.f_MINUS_ONE__java_math_BigInteger)) {
   return that.m_not__java_math_BigInteger();
  }
  if (that.equals(BigInteger.f_MINUS_ONE__java_math_BigInteger)) {
   return BigInteger.f_ZERO__java_math_BigInteger;
  }
  if (val.f_sign__java_math_BigInteger > 0) {
   if (that.f_sign__java_math_BigInteger > 0) {
    return Logical.m_andNotPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   } else {
    return Logical.m_andNotPositiveNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   }
  } else {
   if (that.f_sign__java_math_BigInteger > 0) {
    return Logical.m_andNotNegativePositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   } else {
    return Logical.m_andNotNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   }
  }
 }
 /** @nodts @return {BigInteger} */
 static m_andNotNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val, /** BigInteger */ that) {
  Logical.$clinit();
  let iVal = val.m_getFirstNonzeroDigit__int_$pp_java_math();
  let iThat = that.m_getFirstNonzeroDigit__int_$pp_java_math();
  if (iVal >= that.f_numberLength__java_math_BigInteger) {
   return BigInteger.f_ZERO__java_math_BigInteger;
  }
  let resLength = that.f_numberLength__java_math_BigInteger;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  let /** number */ limit;
  let i = iVal;
  if (iVal < iThat) {
   $Arrays.$set(resDigits, i, - val.f_digits__java_math_BigInteger[i] | 0);
   limit = Math.min(val.f_numberLength__java_math_BigInteger, iThat);
   for (i = i + 1 | 0; i < limit; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, ~val.f_digits__java_math_BigInteger[i]);
   }
   if (i == val.f_numberLength__java_math_BigInteger) {
    for (; i < iThat; i = i + 1 | 0) {
     $Arrays.$set(resDigits, i, - 1 | 0);
    }
    $Arrays.$set(resDigits, i, that.f_digits__java_math_BigInteger[i] - 1 | 0);
   } else {
    $Arrays.$set(resDigits, i, ~val.f_digits__java_math_BigInteger[i] & (that.f_digits__java_math_BigInteger[i] - 1 | 0));
   }
  } else if (iThat < iVal) {
   $Arrays.$set(resDigits, i, (- val.f_digits__java_math_BigInteger[i] | 0) & that.f_digits__java_math_BigInteger[i]);
  } else {
   $Arrays.$set(resDigits, i, (- val.f_digits__java_math_BigInteger[i] | 0) & (that.f_digits__java_math_BigInteger[i] - 1 | 0));
  }
  limit = Math.min(val.f_numberLength__java_math_BigInteger, that.f_numberLength__java_math_BigInteger);
  for (i = i + 1 | 0; i < limit; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, ~val.f_digits__java_math_BigInteger[i] & that.f_digits__java_math_BigInteger[i]);
  }
  for (; i < that.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, that.f_digits__java_math_BigInteger[i]);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(1, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_andNotNegativePositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ negative, /** BigInteger */ positive) {
  Logical.$clinit();
  let /** number */ resLength;
  let /** Array<number> */ resDigits;
  let /** number */ limit;
  let /** number */ digit;
  let iNeg = negative.m_getFirstNonzeroDigit__int_$pp_java_math();
  let iPos = positive.m_getFirstNonzeroDigit__int_$pp_java_math();
  if (iNeg >= positive.f_numberLength__java_math_BigInteger) {
   return negative;
  }
  resLength = Math.max(negative.f_numberLength__java_math_BigInteger, positive.f_numberLength__java_math_BigInteger);
  let i = iNeg;
  if (iPos > iNeg) {
   resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
   limit = Math.min(negative.f_numberLength__java_math_BigInteger, iPos);
   for (; i < limit; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i]);
   }
   if (i == negative.f_numberLength__java_math_BigInteger) {
    for (i = iPos; i < positive.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
     $Arrays.$set(resDigits, i, positive.f_digits__java_math_BigInteger[i]);
    }
   }
  } else {
   digit = (- negative.f_digits__java_math_BigInteger[i] | 0) & ~positive.f_digits__java_math_BigInteger[i];
   if (digit == 0) {
    limit = Math.min(positive.f_numberLength__java_math_BigInteger, negative.f_numberLength__java_math_BigInteger);
    for (i = i + 1 | 0; i < limit && (digit = ~(negative.f_digits__java_math_BigInteger[i] | positive.f_digits__java_math_BigInteger[i])) == 0; i = i + 1 | 0) {}
    if (digit == 0) {
     for (; i < positive.f_numberLength__java_math_BigInteger && (digit = ~positive.f_digits__java_math_BigInteger[i]) == 0; i = i + 1 | 0) {}
     for (; i < negative.f_numberLength__java_math_BigInteger && (digit = ~negative.f_digits__java_math_BigInteger[i]) == 0; i = i + 1 | 0) {}
     if (digit == 0) {
      resLength = resLength + 1 | 0;
      resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
      $Arrays.$set(resDigits, resLength - 1 | 0, 1);
      let result = BigInteger.$create__int__int__arrayOf_int(- 1 | 0, resLength, resDigits);
      return result;
     }
    }
   }
   resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
   $Arrays.$set(resDigits, i, - digit | 0);
   i = i + 1 | 0;
  }
  limit = Math.min(positive.f_numberLength__java_math_BigInteger, negative.f_numberLength__java_math_BigInteger);
  for (; i < limit; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i] | positive.f_digits__java_math_BigInteger[i]);
  }
  for (; i < negative.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i]);
  }
  for (; i < positive.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, positive.f_digits__java_math_BigInteger[i]);
  }
  let result_1 = BigInteger.$create__int__int__arrayOf_int(- 1 | 0, resLength, resDigits);
  return result_1;
 }
 /** @nodts @return {BigInteger} */
 static m_andNotPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val, /** BigInteger */ that) {
  Logical.$clinit();
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([val.f_numberLength__java_math_BigInteger], $$int));
  let limit = Math.min(val.f_numberLength__java_math_BigInteger, that.f_numberLength__java_math_BigInteger);
  let /** number */ i;
  for (i = val.m_getFirstNonzeroDigit__int_$pp_java_math(); i < limit; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, val.f_digits__java_math_BigInteger[i] & ~that.f_digits__java_math_BigInteger[i]);
  }
  for (; i < val.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, val.f_digits__java_math_BigInteger[i]);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(1, val.f_numberLength__java_math_BigInteger, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_andNotPositiveNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ positive, /** BigInteger */ negative) {
  Logical.$clinit();
  let iNeg = negative.m_getFirstNonzeroDigit__int_$pp_java_math();
  let iPos = positive.m_getFirstNonzeroDigit__int_$pp_java_math();
  if (iNeg >= positive.f_numberLength__java_math_BigInteger) {
   return positive;
  }
  let resLength = Math.min(positive.f_numberLength__java_math_BigInteger, negative.f_numberLength__java_math_BigInteger);
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  let i = iPos;
  for (; i < iNeg; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, positive.f_digits__java_math_BigInteger[i]);
  }
  if (i == iNeg) {
   $Arrays.$set(resDigits, i, positive.f_digits__java_math_BigInteger[i] & (negative.f_digits__java_math_BigInteger[i] - 1 | 0));
   i = i + 1 | 0;
  }
  for (; i < resLength; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, positive.f_digits__java_math_BigInteger[i] & negative.f_digits__java_math_BigInteger[i]);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(1, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_andPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val, /** BigInteger */ that) {
  Logical.$clinit();
  let resLength = Math.min(val.f_numberLength__java_math_BigInteger, that.f_numberLength__java_math_BigInteger);
  let i = Math.max(val.m_getFirstNonzeroDigit__int_$pp_java_math(), that.m_getFirstNonzeroDigit__int_$pp_java_math());
  if (i >= resLength) {
   return BigInteger.f_ZERO__java_math_BigInteger;
  }
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  for (; i < resLength; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, val.f_digits__java_math_BigInteger[i] & that.f_digits__java_math_BigInteger[i]);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(1, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_not__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val) {
  Logical.$clinit();
  if (val.f_sign__java_math_BigInteger == 0) {
   return BigInteger.f_MINUS_ONE__java_math_BigInteger;
  }
  if (val.equals(BigInteger.f_MINUS_ONE__java_math_BigInteger)) {
   return BigInteger.f_ZERO__java_math_BigInteger;
  }
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([val.f_numberLength__java_math_BigInteger + 1 | 0], $$int));
  let /** number */ i;
  if (val.f_sign__java_math_BigInteger > 0) {
   if (val.f_digits__java_math_BigInteger[val.f_numberLength__java_math_BigInteger - 1 | 0] != (- 1 | 0)) {
    for (i = 0; val.f_digits__java_math_BigInteger[i] == (- 1 | 0); i = i + 1 | 0) {}
   } else {
    for (i = 0; i < val.f_numberLength__java_math_BigInteger && val.f_digits__java_math_BigInteger[i] == (- 1 | 0); i = i + 1 | 0) {}
    if (i == val.f_numberLength__java_math_BigInteger) {
     $Arrays.$set(resDigits, i, 1);
     return BigInteger.$create__int__int__arrayOf_int(- val.f_sign__java_math_BigInteger | 0, i + 1 | 0, resDigits);
    }
   }
  } else {
   for (i = 0; val.f_digits__java_math_BigInteger[i] == 0; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, - 1 | 0);
   }
  }
  $Arrays.$set(resDigits, i, val.f_digits__java_math_BigInteger[i] + val.f_sign__java_math_BigInteger | 0);
  for (i = i + 1 | 0; i < val.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, val.f_digits__java_math_BigInteger[i]);
  }
  return BigInteger.$create__int__int__arrayOf_int(- val.f_sign__java_math_BigInteger | 0, i, resDigits);
 }
 /** @nodts @return {BigInteger} */
 static m_or__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val, /** BigInteger */ that) {
  Logical.$clinit();
  if (that.equals(BigInteger.f_MINUS_ONE__java_math_BigInteger) || val.equals(BigInteger.f_MINUS_ONE__java_math_BigInteger)) {
   return BigInteger.f_MINUS_ONE__java_math_BigInteger;
  }
  if (that.f_sign__java_math_BigInteger == 0) {
   return val;
  }
  if (val.f_sign__java_math_BigInteger == 0) {
   return that;
  }
  if (val.f_sign__java_math_BigInteger > 0) {
   if (that.f_sign__java_math_BigInteger > 0) {
    if (val.f_numberLength__java_math_BigInteger > that.f_numberLength__java_math_BigInteger) {
     return Logical.m_orPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
    } else {
     return Logical.m_orPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(that, val);
    }
   } else {
    return Logical.m_orDiffSigns__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   }
  } else {
   if (that.f_sign__java_math_BigInteger > 0) {
    return Logical.m_orDiffSigns__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(that, val);
   } else if (that.m_getFirstNonzeroDigit__int_$pp_java_math() > val.m_getFirstNonzeroDigit__int_$pp_java_math()) {
    return Logical.m_orNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(that, val);
   } else {
    return Logical.m_orNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   }
  }
 }
 /** @nodts @return {BigInteger} */
 static m_orDiffSigns__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ positive, /** BigInteger */ negative) {
  Logical.$clinit();
  let iNeg = negative.m_getFirstNonzeroDigit__int_$pp_java_math();
  let iPos = positive.m_getFirstNonzeroDigit__int_$pp_java_math();
  let /** number */ i;
  let /** number */ limit;
  if (iPos >= negative.f_numberLength__java_math_BigInteger) {
   return negative;
  }
  let resLength = negative.f_numberLength__java_math_BigInteger;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  if (iNeg < iPos) {
   for (i = iNeg; i < iPos; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i]);
   }
  } else if (iPos < iNeg) {
   i = iPos;
   $Arrays.$set(resDigits, i, - positive.f_digits__java_math_BigInteger[i] | 0);
   limit = Math.min(positive.f_numberLength__java_math_BigInteger, iNeg);
   for (i = i + 1 | 0; i < limit; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, ~positive.f_digits__java_math_BigInteger[i]);
   }
   if (i != positive.f_numberLength__java_math_BigInteger) {
    $Arrays.$set(resDigits, i, ~(- negative.f_digits__java_math_BigInteger[i] | 0 | positive.f_digits__java_math_BigInteger[i]));
   } else {
    for (; i < iNeg; i = i + 1 | 0) {
     $Arrays.$set(resDigits, i, - 1 | 0);
    }
    $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i] - 1 | 0);
   }
   i = i + 1 | 0;
  } else {
   i = iPos;
   $Arrays.$set(resDigits, i, - (- negative.f_digits__java_math_BigInteger[i] | 0 | positive.f_digits__java_math_BigInteger[i]) | 0);
   i = i + 1 | 0;
  }
  limit = Math.min(negative.f_numberLength__java_math_BigInteger, positive.f_numberLength__java_math_BigInteger);
  for (; i < limit; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i] & ~positive.f_digits__java_math_BigInteger[i]);
  }
  for (; i < negative.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i]);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(- 1 | 0, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_orNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val, /** BigInteger */ that) {
  Logical.$clinit();
  let iThat = that.m_getFirstNonzeroDigit__int_$pp_java_math();
  let iVal = val.m_getFirstNonzeroDigit__int_$pp_java_math();
  let /** number */ i;
  if (iVal >= that.f_numberLength__java_math_BigInteger) {
   return that;
  } else if (iThat >= val.f_numberLength__java_math_BigInteger) {
   return val;
  }
  let resLength = Math.min(val.f_numberLength__java_math_BigInteger, that.f_numberLength__java_math_BigInteger);
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  if (iThat == iVal) {
   $Arrays.$set(resDigits, iVal, - (- val.f_digits__java_math_BigInteger[iVal] | 0 | (- that.f_digits__java_math_BigInteger[iVal] | 0)) | 0);
   i = iVal;
  } else {
   for (i = iThat; i < iVal; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, that.f_digits__java_math_BigInteger[i]);
   }
   $Arrays.$set(resDigits, i, that.f_digits__java_math_BigInteger[i] & (val.f_digits__java_math_BigInteger[i] - 1 | 0));
  }
  for (i = i + 1 | 0; i < resLength; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, val.f_digits__java_math_BigInteger[i] & that.f_digits__java_math_BigInteger[i]);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(- 1 | 0, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_orPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ longer, /** BigInteger */ shorter) {
  Logical.$clinit();
  let resLength = longer.f_numberLength__java_math_BigInteger;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  let i = Math.min(longer.m_getFirstNonzeroDigit__int_$pp_java_math(), shorter.m_getFirstNonzeroDigit__int_$pp_java_math());
  for (i = 0; i < shorter.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, longer.f_digits__java_math_BigInteger[i] | shorter.f_digits__java_math_BigInteger[i]);
  }
  for (; i < resLength; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, longer.f_digits__java_math_BigInteger[i]);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(1, resLength, resDigits);
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_xor__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val, /** BigInteger */ that) {
  Logical.$clinit();
  if (that.f_sign__java_math_BigInteger == 0) {
   return val;
  }
  if (val.f_sign__java_math_BigInteger == 0) {
   return that;
  }
  if (that.equals(BigInteger.f_MINUS_ONE__java_math_BigInteger)) {
   return val.m_not__java_math_BigInteger();
  }
  if (val.equals(BigInteger.f_MINUS_ONE__java_math_BigInteger)) {
   return that.m_not__java_math_BigInteger();
  }
  if (val.f_sign__java_math_BigInteger > 0) {
   if (that.f_sign__java_math_BigInteger > 0) {
    if (val.f_numberLength__java_math_BigInteger > that.f_numberLength__java_math_BigInteger) {
     return Logical.m_xorPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
    } else {
     return Logical.m_xorPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(that, val);
    }
   } else {
    return Logical.m_xorDiffSigns__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   }
  } else {
   if (that.f_sign__java_math_BigInteger > 0) {
    return Logical.m_xorDiffSigns__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(that, val);
   } else if (that.m_getFirstNonzeroDigit__int_$pp_java_math() > val.m_getFirstNonzeroDigit__int_$pp_java_math()) {
    return Logical.m_xorNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(that, val);
   } else {
    return Logical.m_xorNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(val, that);
   }
  }
 }
 /** @nodts @return {BigInteger} */
 static m_xorDiffSigns__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ positive, /** BigInteger */ negative) {
  Logical.$clinit();
  let resLength = Math.max(negative.f_numberLength__java_math_BigInteger, positive.f_numberLength__java_math_BigInteger);
  let /** Array<number> */ resDigits;
  let iNeg = negative.m_getFirstNonzeroDigit__int_$pp_java_math();
  let iPos = positive.m_getFirstNonzeroDigit__int_$pp_java_math();
  let /** number */ i;
  let /** number */ limit;
  if (iNeg < iPos) {
   resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
   i = iNeg;
   $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i]);
   limit = Math.min(negative.f_numberLength__java_math_BigInteger, iPos);
   for (i = i + 1 | 0; i < limit; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i]);
   }
   if (i == negative.f_numberLength__java_math_BigInteger) {
    for (; i < positive.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
     $Arrays.$set(resDigits, i, positive.f_digits__java_math_BigInteger[i]);
    }
   }
  } else if (iPos < iNeg) {
   resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
   i = iPos;
   $Arrays.$set(resDigits, i, - positive.f_digits__java_math_BigInteger[i] | 0);
   limit = Math.min(positive.f_numberLength__java_math_BigInteger, iNeg);
   for (i = i + 1 | 0; i < limit; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, ~positive.f_digits__java_math_BigInteger[i]);
   }
   if (i == iNeg) {
    $Arrays.$set(resDigits, i, ~(positive.f_digits__java_math_BigInteger[i] ^ (- negative.f_digits__java_math_BigInteger[i] | 0)));
    i = i + 1 | 0;
   } else {
    for (; i < iNeg; i = i + 1 | 0) {
     $Arrays.$set(resDigits, i, - 1 | 0);
    }
    for (; i < negative.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
     $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i]);
    }
   }
  } else {
   let /** number */ digit;
   i = iNeg;
   digit = positive.f_digits__java_math_BigInteger[i] ^ (- negative.f_digits__java_math_BigInteger[i] | 0);
   if (digit == 0) {
    limit = Math.min(positive.f_numberLength__java_math_BigInteger, negative.f_numberLength__java_math_BigInteger);
    for (i = i + 1 | 0; i < limit && (digit = positive.f_digits__java_math_BigInteger[i] ^ ~negative.f_digits__java_math_BigInteger[i]) == 0; i = i + 1 | 0) {}
    if (digit == 0) {
     for (; i < positive.f_numberLength__java_math_BigInteger && (digit = ~positive.f_digits__java_math_BigInteger[i]) == 0; i = i + 1 | 0) {}
     for (; i < negative.f_numberLength__java_math_BigInteger && (digit = ~negative.f_digits__java_math_BigInteger[i]) == 0; i = i + 1 | 0) {}
     if (digit == 0) {
      resLength = resLength + 1 | 0;
      resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
      $Arrays.$set(resDigits, resLength - 1 | 0, 1);
      let result = BigInteger.$create__int__int__arrayOf_int(- 1 | 0, resLength, resDigits);
      return result;
     }
    }
   }
   resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
   $Arrays.$set(resDigits, i, - digit | 0);
   i = i + 1 | 0;
  }
  limit = Math.min(negative.f_numberLength__java_math_BigInteger, positive.f_numberLength__java_math_BigInteger);
  for (; i < limit; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, ~(~negative.f_digits__java_math_BigInteger[i] ^ positive.f_digits__java_math_BigInteger[i]));
  }
  for (; i < positive.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, positive.f_digits__java_math_BigInteger[i]);
  }
  for (; i < negative.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, negative.f_digits__java_math_BigInteger[i]);
  }
  let result_1 = BigInteger.$create__int__int__arrayOf_int(- 1 | 0, resLength, resDigits);
  result_1.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result_1;
 }
 /** @nodts @return {BigInteger} */
 static m_xorNegative__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ val, /** BigInteger */ that) {
  Logical.$clinit();
  let resLength = Math.max(val.f_numberLength__java_math_BigInteger, that.f_numberLength__java_math_BigInteger);
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  let iVal = val.m_getFirstNonzeroDigit__int_$pp_java_math();
  let iThat = that.m_getFirstNonzeroDigit__int_$pp_java_math();
  let i = iThat;
  let /** number */ limit;
  if (iVal == iThat) {
   $Arrays.$set(resDigits, i, (- val.f_digits__java_math_BigInteger[i] | 0) ^ (- that.f_digits__java_math_BigInteger[i] | 0));
  } else {
   $Arrays.$set(resDigits, i, - that.f_digits__java_math_BigInteger[i] | 0);
   limit = Math.min(that.f_numberLength__java_math_BigInteger, iVal);
   for (i = i + 1 | 0; i < limit; i = i + 1 | 0) {
    $Arrays.$set(resDigits, i, ~that.f_digits__java_math_BigInteger[i]);
   }
   if (i == that.f_numberLength__java_math_BigInteger) {
    for (; i < iVal; i = i + 1 | 0) {
     $Arrays.$set(resDigits, i, - 1 | 0);
    }
    $Arrays.$set(resDigits, i, val.f_digits__java_math_BigInteger[i] - 1 | 0);
   } else {
    $Arrays.$set(resDigits, i, (- val.f_digits__java_math_BigInteger[i] | 0) ^ ~that.f_digits__java_math_BigInteger[i]);
   }
  }
  limit = Math.min(val.f_numberLength__java_math_BigInteger, that.f_numberLength__java_math_BigInteger);
  for (i = i + 1 | 0; i < limit; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, val.f_digits__java_math_BigInteger[i] ^ that.f_digits__java_math_BigInteger[i]);
  }
  for (; i < val.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, val.f_digits__java_math_BigInteger[i]);
  }
  for (; i < that.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, that.f_digits__java_math_BigInteger[i]);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(1, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {BigInteger} */
 static m_xorPositive__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ longer, /** BigInteger */ shorter) {
  Logical.$clinit();
  let resLength = longer.f_numberLength__java_math_BigInteger;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  let i = Math.min(longer.m_getFirstNonzeroDigit__int_$pp_java_math(), shorter.m_getFirstNonzeroDigit__int_$pp_java_math());
  for (; i < shorter.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, longer.f_digits__java_math_BigInteger[i] ^ shorter.f_digits__java_math_BigInteger[i]);
  }
  for (; i < longer.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
   $Arrays.$set(resDigits, i, longer.f_digits__java_math_BigInteger[i]);
  }
  let result = BigInteger.$create__int__int__arrayOf_int(1, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {!Logical} */
 static $create__() {
  let $instance = new Logical();
  $instance.$ctor__java_math_Logical__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_math_Logical__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Logical.$clinit = () =>{};
  Logical.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Logical;
 }
 
 /** @nodts */
 static $loadModules() {
  BigInteger = goog.module.get('java.math.BigInteger$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(Logical, 'java.math.Logical');

exports = Logical;

//# sourceMappingURL=Logical.js.map
