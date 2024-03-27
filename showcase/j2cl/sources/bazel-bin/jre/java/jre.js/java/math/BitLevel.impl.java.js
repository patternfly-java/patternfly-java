goog.module('java.math.BitLevel$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let System = goog.forwardDeclare('java.lang.System$impl');
let BigInteger = goog.forwardDeclare('java.math.BigInteger$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class BitLevel extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {number} */
 static m_bitCount__java_math_BigInteger__int(/** BigInteger */ val) {
  BitLevel.$clinit();
  let bCount = 0;
  if (val.f_sign__java_math_BigInteger == 0) {
   return 0;
  }
  let i = val.m_getFirstNonzeroDigit__int_$pp_java_math();
  if (val.f_sign__java_math_BigInteger > 0) {
   for (; i < val.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
    bCount = bCount + Integer.m_bitCount__int__int(val.f_digits__java_math_BigInteger[i]) | 0;
   }
  } else {
   bCount = bCount + Integer.m_bitCount__int__int(- val.f_digits__java_math_BigInteger[i] | 0) | 0;
   for (i = i + 1 | 0; i < val.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
    bCount = bCount + Integer.m_bitCount__int__int(~val.f_digits__java_math_BigInteger[i]) | 0;
   }
   bCount = (val.f_numberLength__java_math_BigInteger << 5) - bCount | 0;
  }
  return bCount;
 }
 /** @nodts @return {number} */
 static m_bitLength__java_math_BigInteger__int(/** BigInteger */ val) {
  BitLevel.$clinit();
  if (val.f_sign__java_math_BigInteger == 0) {
   return 0;
  }
  let bLength = val.f_numberLength__java_math_BigInteger << 5;
  let highDigit = val.f_digits__java_math_BigInteger[val.f_numberLength__java_math_BigInteger - 1 | 0];
  if (val.f_sign__java_math_BigInteger < 0) {
   let i = val.m_getFirstNonzeroDigit__int_$pp_java_math();
   if (i == (val.f_numberLength__java_math_BigInteger - 1 | 0)) {
    highDigit = highDigit - 1 | 0;
   }
  }
  bLength = bLength - Integer.m_numberOfLeadingZeros__int__int(highDigit) | 0;
  return bLength;
 }
 /** @nodts @return {BigInteger} */
 static m_flipBit__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ val, /** number */ n) {
  BitLevel.$clinit();
  let resSign = val.f_sign__java_math_BigInteger == 0 ? 1 : val.f_sign__java_math_BigInteger;
  let intCount = n >> 5;
  let bitN = n & 31;
  let resLength = Math.max(intCount + 1 | 0, val.f_numberLength__java_math_BigInteger) + 1 | 0;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  let /** number */ i;
  let bitNumber = 1 << bitN;
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(val.f_digits__java_math_BigInteger, 0, resDigits, 0, val.f_numberLength__java_math_BigInteger);
  if (val.f_sign__java_math_BigInteger < 0) {
   if (intCount >= val.f_numberLength__java_math_BigInteger) {
    $Arrays.$set(resDigits, intCount, bitNumber);
   } else {
    let firstNonZeroDigit = val.m_getFirstNonzeroDigit__int_$pp_java_math();
    if (intCount > firstNonZeroDigit) {
     resDigits[intCount] ^= bitNumber;
    } else if (intCount < firstNonZeroDigit) {
     let /** number */ $value;
     $Arrays.$set(resDigits, intCount, - bitNumber | 0);
     for (i = intCount + 1 | 0; i < firstNonZeroDigit; i = i + 1 | 0) {
      $Arrays.$set(resDigits, i, - 1 | 0);
     }
     $Arrays.$set(resDigits, i, ($value = resDigits[i], $Arrays.$set(resDigits, i, resDigits[i] - 1 | 0), $value));
    } else {
     i = intCount;
     $Arrays.$set(resDigits, i, - ((- resDigits[intCount] | 0) ^ bitNumber) | 0);
     if (resDigits[i] == 0) {
      for (i = i + 1 | 0; resDigits[i] == (- 1 | 0); i = i + 1 | 0) {
       $Arrays.$set(resDigits, i, 0);
      }
      $Arrays.$set(resDigits, i, resDigits[i] + 1 | 0);
     }
    }
   }
  } else {
   resDigits[intCount] ^= bitNumber;
  }
  let result = BigInteger.$create__int__int__arrayOf_int(resSign, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts */
 static m_inplaceShiftLeft__java_math_BigInteger__int__void(/** BigInteger */ val, /** number */ count) {
  BitLevel.$clinit();
  let intCount = count >> 5;
  val.f_numberLength__java_math_BigInteger = val.f_numberLength__java_math_BigInteger + (intCount + ((Integer.m_numberOfLeadingZeros__int__int(val.f_digits__java_math_BigInteger[val.f_numberLength__java_math_BigInteger - 1 | 0]) - (count & 31) | 0) >= 0 ? 0 : 1)) | 0;
  BitLevel.m_shiftLeft__arrayOf_int__arrayOf_int__int__int__void(val.f_digits__java_math_BigInteger, val.f_digits__java_math_BigInteger, intCount, count & 31);
  val.m_cutOffLeadingZeroes__void_$pp_java_math();
  val.m_unCache__void_$pp_java_math();
 }
 /** @nodts */
 static m_inplaceShiftRight__java_math_BigInteger__int__void(/** BigInteger */ val, /** number */ count) {
  BitLevel.$clinit();
  let sign = val.m_signum__int();
  if (count == 0 || val.m_signum__int() == 0) {
   return;
  }
  let intCount = count >> 5;
  val.f_numberLength__java_math_BigInteger = val.f_numberLength__java_math_BigInteger - intCount | 0;
  if (!BitLevel.m_shiftRight__arrayOf_int__int__arrayOf_int__int__int__boolean(val.f_digits__java_math_BigInteger, val.f_numberLength__java_math_BigInteger, val.f_digits__java_math_BigInteger, intCount, count & 31) && sign < 0) {
   let /** number */ i;
   for (i = 0; i < val.f_numberLength__java_math_BigInteger && val.f_digits__java_math_BigInteger[i] == (- 1 | 0); i = i + 1 | 0) {
    $Arrays.$set(val.f_digits__java_math_BigInteger, i, 0);
   }
   if (i == val.f_numberLength__java_math_BigInteger) {
    val.f_numberLength__java_math_BigInteger = val.f_numberLength__java_math_BigInteger + 1 | 0;
   }
   $Arrays.$set(val.f_digits__java_math_BigInteger, i, val.f_digits__java_math_BigInteger[i] + 1 | 0);
  }
  val.m_cutOffLeadingZeroes__void_$pp_java_math();
  val.m_unCache__void_$pp_java_math();
 }
 /** @nodts @return {boolean} */
 static m_nonZeroDroppedBits__int__arrayOf_int__boolean(/** number */ numberOfBits, /** Array<number> */ digits) {
  BitLevel.$clinit();
  let intCount = numberOfBits >> 5;
  let bitCount = numberOfBits & 31;
  let /** number */ i;
  for (i = 0; i < intCount && digits[i] == 0; i = i + 1 | 0) {}
  return i != intCount || digits[i] << (32 - bitCount | 0) != 0;
 }
 /** @nodts @return {BigInteger} */
 static m_shiftLeft__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ source, /** number */ count) {
  BitLevel.$clinit();
  let intCount = count >> 5;
  count &= 31;
  let resLength = source.f_numberLength__java_math_BigInteger + intCount + (count == 0 ? 0 : 1) | 0;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength], $$int));
  BitLevel.m_shiftLeft__arrayOf_int__arrayOf_int__int__int__void(resDigits, source.f_digits__java_math_BigInteger, intCount, count);
  let result = BigInteger.$create__int__int__arrayOf_int(source.f_sign__java_math_BigInteger, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts */
 static m_shiftLeft__arrayOf_int__arrayOf_int__int__int__void(/** Array<number> */ result, /** Array<number> */ source, /** number */ intCount, /** number */ count) {
  BitLevel.$clinit();
  if (count == 0) {
   System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(source, 0, result, intCount, result.length - intCount | 0);
  } else {
   let rightShiftCount = 32 - count | 0;
   $Arrays.$set(result, result.length - 1 | 0, 0);
   for (let i = result.length - 1 | 0; i > intCount; i = i - 1 | 0) {
    result[i] |= source[i - intCount - 1 | 0] >>> rightShiftCount | 0;
    $Arrays.$set(result, i - 1 | 0, source[i - intCount - 1 | 0] << count);
   }
  }
  for (let i_1 = 0; i_1 < intCount; i_1 = i_1 + 1 | 0) {
   $Arrays.$set(result, i_1, 0);
  }
 }
 /** @nodts @return {BigInteger} */
 static m_shiftLeftOneBit__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ source) {
  BitLevel.$clinit();
  let srcLen = source.f_numberLength__java_math_BigInteger;
  let resLen = srcLen + 1 | 0;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLen], $$int));
  BitLevel.m_shiftLeftOneBit__arrayOf_int__arrayOf_int__int__void(resDigits, source.f_digits__java_math_BigInteger, srcLen);
  let result = BigInteger.$create__int__int__arrayOf_int(source.f_sign__java_math_BigInteger, resLen, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts */
 static m_shiftLeftOneBit__arrayOf_int__arrayOf_int__int__void(/** Array<number> */ result, /** Array<number> */ source, /** number */ srcLen) {
  BitLevel.$clinit();
  let carry = 0;
  for (let i = 0; i < srcLen; i = i + 1 | 0) {
   let val = source[i];
   $Arrays.$set(result, i, val << 1 | carry);
   carry = val >>> 31 | 0;
  }
  if (carry != 0) {
   $Arrays.$set(result, srcLen, carry);
  }
 }
 /** @nodts @return {BigInteger} */
 static m_shiftRight__java_math_BigInteger__int__java_math_BigInteger(/** BigInteger */ source, /** number */ count) {
  BitLevel.$clinit();
  let intCount = count >> 5;
  count &= 31;
  if (intCount >= source.f_numberLength__java_math_BigInteger) {
   return source.f_sign__java_math_BigInteger < 0 ? BigInteger.f_MINUS_ONE__java_math_BigInteger : BigInteger.f_ZERO__java_math_BigInteger;
  }
  let /** number */ i;
  let resLength = source.f_numberLength__java_math_BigInteger - intCount | 0;
  let resDigits = /**@type {!Array<number>}*/ ($Arrays.$create([resLength + 1 | 0], $$int));
  BitLevel.m_shiftRight__arrayOf_int__int__arrayOf_int__int__int__boolean(resDigits, resLength, source.f_digits__java_math_BigInteger, intCount, count);
  if (source.f_sign__java_math_BigInteger < 0) {
   for (i = 0; i < intCount && source.f_digits__java_math_BigInteger[i] == 0; i = i + 1 | 0) {}
   if (i < intCount || count > 0 && source.f_digits__java_math_BigInteger[i] << (32 - count | 0) != 0) {
    for (i = 0; i < resLength && resDigits[i] == (- 1 | 0); i = i + 1 | 0) {
     $Arrays.$set(resDigits, i, 0);
    }
    if (i == resLength) {
     resLength = resLength + 1 | 0;
    }
    $Arrays.$set(resDigits, i, resDigits[i] + 1 | 0);
   }
  }
  let result = BigInteger.$create__int__int__arrayOf_int(source.f_sign__java_math_BigInteger, resLength, resDigits);
  result.m_cutOffLeadingZeroes__void_$pp_java_math();
  return result;
 }
 /** @nodts @return {boolean} */
 static m_shiftRight__arrayOf_int__int__arrayOf_int__int__int__boolean(/** Array<number> */ result, /** number */ resultLen, /** Array<number> */ source, /** number */ intCount, /** number */ count) {
  BitLevel.$clinit();
  let /** number */ i;
  let allZero = true;
  for (i = 0; i < intCount; i = i + 1 | 0) {
   allZero = !!(+ allZero & + (source[i] == 0));
  }
  if (count == 0) {
   System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(source, intCount, result, 0, resultLen);
   i = resultLen;
  } else {
   let leftShiftCount = 32 - count | 0;
   allZero = !!(+ allZero & + (source[i] << leftShiftCount == 0));
   for (i = 0; i < (resultLen - 1 | 0); i = i + 1 | 0) {
    $Arrays.$set(result, i, source[i + intCount | 0] >>> count | 0 | source[i + intCount + 1 | 0] << leftShiftCount);
   }
   $Arrays.$set(result, i, source[i + intCount | 0] >>> count | 0);
   i = i + 1 | 0;
  }
  return allZero;
 }
 /** @nodts @return {boolean} */
 static m_testBit__java_math_BigInteger__int__boolean(/** BigInteger */ val, /** number */ n) {
  BitLevel.$clinit();
  return (val.f_digits__java_math_BigInteger[n >> 5] & 1 << (n & 31)) != 0;
 }
 /** @nodts @return {!BitLevel} */
 static $create__() {
  let $instance = new BitLevel();
  $instance.$ctor__java_math_BitLevel__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_math_BitLevel__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  BitLevel.$clinit = () =>{};
  BitLevel.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BitLevel;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  System = goog.module.get('java.lang.System$impl');
  BigInteger = goog.module.get('java.math.BigInteger$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(BitLevel, 'java.math.BitLevel');

exports = BitLevel;

//# sourceMappingURL=BitLevel.js.map
