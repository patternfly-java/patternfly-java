goog.module('java.lang.Math$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @final
 */
class j_l_Math extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!j_l_Math} */
 static $create__() {
  j_l_Math.$clinit();
  let $instance = new j_l_Math();
  $instance.$ctor__java_lang_Math__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Math__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 static m_abs__int__int(/** number */ x) {
  j_l_Math.$clinit();
  return x < 0 ? - x | 0 : x;
 }
 /** @nodts @return {!$Long} */
 static m_abs__long__long(/** !$Long */ x) {
  j_l_Math.$clinit();
  return $LongUtils.less(x, $Long.fromInt(0)) ? $LongUtils.negate(x) : x;
 }
 /** @nodts @return {number} */
 static m_addExact__int__int__int(/** number */ x, /** number */ y) {
  j_l_Math.$clinit();
  let r = x + y;
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void(j_l_Math.m_isSafeIntegerRange__double__boolean(r));
  return $Primitives.narrowDoubleToInt(r);
 }
 /** @nodts @return {!$Long} */
 static m_addExact__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  j_l_Math.$clinit();
  let r = $LongUtils.plus(x, y);
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void($LongUtils.greaterEquals($LongUtils.bitAnd($LongUtils.bitXor(x, r), $LongUtils.bitXor(y, r)), $Long.fromInt(0)));
  return r;
 }
 /** @nodts @return {number} */
 static m_copySign__double__double__double(/** number */ magnitude, /** number */ sign) {
  j_l_Math.$clinit();
  return j_l_Math.m_isNegative__double__boolean(sign) ? - Math.abs(magnitude) : Math.abs(magnitude);
 }
 /** @nodts @return {boolean} */
 static m_isNegative__double__boolean(/** number */ d) {
  return d < 0 || 1 / d < 0;
 }
 /** @nodts @return {number} */
 static m_copySign__float__float__float(/** number */ magnitude, /** number */ sign) {
  j_l_Math.$clinit();
  return j_l_Math.m_copySign__double__double__double(magnitude, sign);
 }
 /** @nodts @return {number} */
 static m_decrementExact__int__int(/** number */ x) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void(x != Integer.f_MIN_VALUE__java_lang_Integer);
  return x - 1 | 0;
 }
 /** @nodts @return {!$Long} */
 static m_decrementExact__long__long(/** !$Long */ x) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void($LongUtils.notEquals(x, Long.f_MIN_VALUE__java_lang_Long));
  return $LongUtils.minus(x, $Long.fromInt(1));
 }
 /** @nodts @return {number} */
 static m_floorDiv__int__int__int(/** number */ dividend, /** number */ divisor) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void(divisor != 0);
  return (dividend ^ divisor) >= 0 ? $Primitives.coerceDivision(dividend / divisor) : $Primitives.coerceDivision((dividend + 1 | 0) / divisor) - 1 | 0;
 }
 /** @nodts @return {!$Long} */
 static m_floorDiv__long__long__long(/** !$Long */ dividend, /** !$Long */ divisor) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void($LongUtils.notEquals(divisor, $Long.fromInt(0)));
  return $LongUtils.greaterEquals($LongUtils.bitXor(dividend, divisor), $Long.fromInt(0)) ? $LongUtils.divide(dividend, divisor) : $LongUtils.minus($LongUtils.divide($LongUtils.plus(dividend, $Long.fromInt(1)), divisor), $Long.fromInt(1));
 }
 /** @nodts @return {number} */
 static m_floorMod__int__int__int(/** number */ dividend, /** number */ divisor) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void(divisor != 0);
  return $Primitives.coerceDivision(($Primitives.coerceDivision(dividend % divisor) + divisor | 0) % divisor);
 }
 /** @nodts @return {!$Long} */
 static m_floorMod__long__long__long(/** !$Long */ dividend, /** !$Long */ divisor) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void($LongUtils.notEquals(divisor, $Long.fromInt(0)));
  return $LongUtils.remainder($LongUtils.plus($LongUtils.remainder(dividend, divisor), divisor), divisor);
 }
 /** @nodts @return {number} */
 static m_incrementExact__int__int(/** number */ x) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void(x != Integer.f_MAX_VALUE__java_lang_Integer);
  return x + 1 | 0;
 }
 /** @nodts @return {!$Long} */
 static m_incrementExact__long__long(/** !$Long */ x) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void($LongUtils.notEquals(x, Long.f_MAX_VALUE__java_lang_Long));
  return $LongUtils.plus(x, $Long.fromInt(1));
 }
 /** @nodts @return {!$Long} */
 static m_max__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  j_l_Math.$clinit();
  return $LongUtils.greater(x, y) ? x : y;
 }
 /** @nodts @return {!$Long} */
 static m_min__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  j_l_Math.$clinit();
  return $LongUtils.less(x, y) ? x : y;
 }
 /** @nodts @return {number} */
 static m_multiplyExact__int__int__int(/** number */ x, /** number */ y) {
  j_l_Math.$clinit();
  let r = x * y;
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void(j_l_Math.m_isSafeIntegerRange__double__boolean(r));
  return $Primitives.narrowDoubleToInt(r);
 }
 /** @nodts @return {!$Long} */
 static m_multiplyExact__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  j_l_Math.$clinit();
  if ($LongUtils.equals(y, $Primitives.widenIntToLong(- 1 | 0))) {
   return j_l_Math.m_negateExact__long__long(x);
  }
  if ($LongUtils.equals(y, $Long.fromInt(0))) {
   return $Long.fromInt(0);
  }
  let r = $LongUtils.times(x, y);
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void($LongUtils.equals($LongUtils.divide(r, y), x));
  return r;
 }
 /** @nodts @return {number} */
 static m_negateExact__int__int(/** number */ x) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void(x != Integer.f_MIN_VALUE__java_lang_Integer);
  return - x | 0;
 }
 /** @nodts @return {!$Long} */
 static m_negateExact__long__long(/** !$Long */ x) {
  j_l_Math.$clinit();
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void($LongUtils.notEquals(x, Long.f_MIN_VALUE__java_lang_Long));
  return $LongUtils.negate(x);
 }
 /** @nodts @return {number} */
 static m_rint__double__double(/** number */ x) {
  j_l_Math.$clinit();
  if (Math.abs(x) < $Primitives.widenLongToDouble($LongUtils.leftShift($Long.fromInt(1), 52))) {
   let mod2 = x % 2;
   if (mod2 == - 1.5 || mod2 == 0.5) {
    x = Math.floor(x);
   } else {
    x = $Primitives.widenLongToDouble(j_l_Math.m_round__double__long(x));
   }
  }
  return x;
 }
 /** @nodts @return {!$Long} */
 static m_round__double__long(/** number */ x) {
  j_l_Math.$clinit();
  return $Primitives.narrowDoubleToLong(Math.round(x));
 }
 /** @nodts @return {number} */
 static m_round__float__int(/** number */ x) {
  j_l_Math.$clinit();
  return $Primitives.narrowDoubleToInt(Math.round(x));
 }
 /** @nodts @return {number} */
 static m_subtractExact__int__int__int(/** number */ x, /** number */ y) {
  j_l_Math.$clinit();
  let r = x - y;
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void(j_l_Math.m_isSafeIntegerRange__double__boolean(r));
  return $Primitives.narrowDoubleToInt(r);
 }
 /** @nodts @return {!$Long} */
 static m_subtractExact__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  j_l_Math.$clinit();
  let r = $LongUtils.minus(x, y);
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void($LongUtils.greaterEquals($LongUtils.bitAnd($LongUtils.bitXor(x, y), $LongUtils.bitXor(x, r)), $Long.fromInt(0)));
  return r;
 }
 /** @nodts @return {number} */
 static m_scalb__double__int__double(/** number */ d, /** number */ scaleFactor) {
  j_l_Math.$clinit();
  if (scaleFactor >= 31 || scaleFactor <= (- 31 | 0)) {
   return d * Math.pow(2, scaleFactor);
  } else if (scaleFactor > 0) {
   return d * (1 << scaleFactor);
  } else if (scaleFactor == 0) {
   return d;
  } else {
   return d / (1 << (- scaleFactor | 0));
  }
 }
 /** @nodts @return {number} */
 static m_scalb__float__int__float(/** number */ f, /** number */ scaleFactor) {
  j_l_Math.$clinit();
  return j_l_Math.m_scalb__double__int__double(f, scaleFactor);
 }
 /** @nodts @return {number} */
 static m_toDegrees__double__double(/** number */ x) {
  j_l_Math.$clinit();
  return x * j_l_Math.f_PI_UNDER_180__java_lang_Math_;
 }
 /** @nodts @return {number} */
 static m_toIntExact__long__int(/** !$Long */ x) {
  j_l_Math.$clinit();
  let ix = $Primitives.narrowLongToInt(x);
  InternalPreconditions.m_checkCriticalArithmetic__boolean__void($LongUtils.equals($Primitives.widenIntToLong(ix), x));
  return ix;
 }
 /** @nodts @return {number} */
 static m_toRadians__double__double(/** number */ x) {
  j_l_Math.$clinit();
  return x * j_l_Math.f_PI_OVER_180__java_lang_Math_;
 }
 /** @nodts @return {boolean} */
 static m_isSafeIntegerRange__double__boolean(/** number */ value) {
  return Integer.f_MIN_VALUE__java_lang_Integer <= value && value <= Integer.f_MAX_VALUE__java_lang_Integer;
 }
 /** @nodts */
 static $clinit() {
  j_l_Math.$clinit = () =>{};
  j_l_Math.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof j_l_Math;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number} @nodts*/
j_l_Math.f_E__java_lang_Math = 2.718281828459045;
/**@const {number} @nodts*/
j_l_Math.f_PI__java_lang_Math = 3.141592653589793;
/**@const {number} @nodts*/
j_l_Math.f_PI_OVER_180__java_lang_Math_ = 0.017453292519943295;
/**@const {number} @nodts*/
j_l_Math.f_PI_UNDER_180__java_lang_Math_ = 57.29577951308232;
$Util.$setClassMetadata(j_l_Math, 'java.lang.Math');

exports = j_l_Math;

//# sourceMappingURL=Math.js.map
