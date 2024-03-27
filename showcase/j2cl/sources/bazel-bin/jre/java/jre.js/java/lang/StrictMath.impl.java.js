goog.module('java.lang.StrictMath$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @final
 */
class StrictMath extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!StrictMath} */
 static $create__() {
  StrictMath.$clinit();
  let $instance = new StrictMath();
  $instance.$ctor__java_lang_StrictMath__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_StrictMath__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 static m_abs__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.abs(x);
 }
 /** @nodts @return {number} */
 static m_abs__float__float(/** number */ x) {
  StrictMath.$clinit();
  return Math.abs(x);
 }
 /** @nodts @return {number} */
 static m_abs__int__int(/** number */ x) {
  StrictMath.$clinit();
  return j_l_Math.m_abs__int__int(x);
 }
 /** @nodts @return {number} */
 static m_acos__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.acos(x);
 }
 /** @nodts @return {number} */
 static m_addExact__int__int__int(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return j_l_Math.m_addExact__int__int__int(x, y);
 }
 /** @nodts @return {!$Long} */
 static m_addExact__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  StrictMath.$clinit();
  return j_l_Math.m_addExact__long__long__long(x, y);
 }
 /** @nodts @return {number} */
 static m_asin__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.asin(x);
 }
 /** @nodts @return {number} */
 static m_atan__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.atan(x);
 }
 /** @nodts @return {number} */
 static m_atan2__double__double__double(/** number */ y, /** number */ x) {
  StrictMath.$clinit();
  return Math.atan(x);
 }
 /** @nodts @return {number} */
 static m_ceil__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.ceil(x);
 }
 /** @nodts @return {number} */
 static m_copySign__double__double__double(/** number */ magnitude, /** number */ sign) {
  StrictMath.$clinit();
  return j_l_Math.m_copySign__double__double__double(magnitude, sign);
 }
 /** @nodts @return {number} */
 static m_copySign__float__float__float(/** number */ magnitude, /** number */ sign) {
  StrictMath.$clinit();
  return j_l_Math.m_copySign__float__float__float(magnitude, sign);
 }
 /** @nodts @return {number} */
 static m_cos__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.cos(x);
 }
 /** @nodts @return {number} */
 static m_cosh__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.cosh(x);
 }
 /** @nodts @return {number} */
 static m_exp__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.exp(x);
 }
 /** @nodts @return {number} */
 static m_expm1__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.expm1(x);
 }
 /** @nodts @return {number} */
 static m_floor__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.floor(x);
 }
 /** @nodts @return {number} */
 static m_floorDiv__int__int__int(/** number */ dividend, /** number */ divisor) {
  StrictMath.$clinit();
  return j_l_Math.m_floorDiv__int__int__int(dividend, divisor);
 }
 /** @nodts @return {!$Long} */
 static m_floorDiv__long__long__long(/** !$Long */ dividend, /** !$Long */ divisor) {
  StrictMath.$clinit();
  return j_l_Math.m_floorDiv__long__long__long(dividend, divisor);
 }
 /** @nodts @return {number} */
 static m_floorMod__int__int__int(/** number */ dividend, /** number */ divisor) {
  StrictMath.$clinit();
  return j_l_Math.m_floorMod__int__int__int(dividend, divisor);
 }
 /** @nodts @return {!$Long} */
 static m_floorMod__long__long__long(/** !$Long */ dividend, /** !$Long */ divisor) {
  StrictMath.$clinit();
  return j_l_Math.m_floorMod__long__long__long(dividend, divisor);
 }
 /** @nodts @return {number} */
 static m_hypot__double__double__double(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return Math.hypot(x, y);
 }
 /** @nodts @return {number} */
 static m_log__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.log(x);
 }
 /** @nodts @return {number} */
 static m_log10__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.log10(x);
 }
 /** @nodts @return {number} */
 static m_log1p__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.log1p(x);
 }
 /** @nodts @return {number} */
 static m_max__double__double__double(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return Math.max(x, y);
 }
 /** @nodts @return {number} */
 static m_max__float__float__float(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return Math.max(x, y);
 }
 /** @nodts @return {number} */
 static m_max__int__int__int(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return Math.max(x, y);
 }
 /** @nodts @return {!$Long} */
 static m_max__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  StrictMath.$clinit();
  return j_l_Math.m_max__long__long__long(x, y);
 }
 /** @nodts @return {number} */
 static m_min__double__double__double(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return Math.min(x, y);
 }
 /** @nodts @return {number} */
 static m_min__float__float__float(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return Math.min(x, y);
 }
 /** @nodts @return {number} */
 static m_min__int__int__int(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return Math.min(x, y);
 }
 /** @nodts @return {!$Long} */
 static m_min__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  StrictMath.$clinit();
  return j_l_Math.m_min__long__long__long(x, y);
 }
 /** @nodts @return {number} */
 static m_multiplyExact__int__int__int(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return j_l_Math.m_multiplyExact__int__int__int(x, y);
 }
 /** @nodts @return {!$Long} */
 static m_multiplyExact__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  StrictMath.$clinit();
  return j_l_Math.m_multiplyExact__long__long__long(x, y);
 }
 /** @nodts @return {number} */
 static m_pow__double__double__double(/** number */ x, /** number */ exp) {
  StrictMath.$clinit();
  return Math.pow(x, exp);
 }
 /** @nodts @return {number} */
 static m_random__double() {
  StrictMath.$clinit();
  return Math.random();
 }
 /** @nodts @return {number} */
 static m_rint__double__double(/** number */ x) {
  StrictMath.$clinit();
  return j_l_Math.m_rint__double__double(x);
 }
 /** @nodts @return {!$Long} */
 static m_round__double__long(/** number */ x) {
  StrictMath.$clinit();
  return j_l_Math.m_round__double__long(x);
 }
 /** @nodts @return {number} */
 static m_round__float__int(/** number */ x) {
  StrictMath.$clinit();
  return j_l_Math.m_round__float__int(x);
 }
 /** @nodts @return {number} */
 static m_scalb__double__int__double(/** number */ d, /** number */ scaleFactor) {
  StrictMath.$clinit();
  return j_l_Math.m_scalb__double__int__double(d, scaleFactor);
 }
 /** @nodts @return {number} */
 static m_scalb__float__int__float(/** number */ f, /** number */ scaleFactor) {
  StrictMath.$clinit();
  return j_l_Math.m_scalb__float__int__float(f, scaleFactor);
 }
 /** @nodts @return {number} */
 static m_signum__double__double(/** number */ d) {
  StrictMath.$clinit();
  return Math.sign(d);
 }
 /** @nodts @return {number} */
 static m_signum__float__float(/** number */ f) {
  StrictMath.$clinit();
  return Math.sign(f);
 }
 /** @nodts @return {number} */
 static m_sin__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.sin(x);
 }
 /** @nodts @return {number} */
 static m_sinh__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.sinh(x);
 }
 /** @nodts @return {number} */
 static m_sqrt__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.sqrt(x);
 }
 /** @nodts @return {number} */
 static m_subtractExact__int__int__int(/** number */ x, /** number */ y) {
  StrictMath.$clinit();
  return j_l_Math.m_subtractExact__int__int__int(x, y);
 }
 /** @nodts @return {!$Long} */
 static m_subtractExact__long__long__long(/** !$Long */ x, /** !$Long */ y) {
  StrictMath.$clinit();
  return j_l_Math.m_subtractExact__long__long__long(x, y);
 }
 /** @nodts @return {number} */
 static m_tan__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.tan(x);
 }
 /** @nodts @return {number} */
 static m_tanh__double__double(/** number */ x) {
  StrictMath.$clinit();
  return Math.tanh(x);
 }
 /** @nodts @return {number} */
 static m_toDegrees__double__double(/** number */ x) {
  StrictMath.$clinit();
  return j_l_Math.m_toDegrees__double__double(x);
 }
 /** @nodts @return {number} */
 static m_toIntExact__long__int(/** !$Long */ x) {
  StrictMath.$clinit();
  return j_l_Math.m_toIntExact__long__int(x);
 }
 /** @nodts @return {number} */
 static m_toRadians__double__double(/** number */ x) {
  StrictMath.$clinit();
  return j_l_Math.m_toRadians__double__double(x);
 }
 /** @nodts */
 static $clinit() {
  StrictMath.$clinit = () =>{};
  StrictMath.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StrictMath;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_Math = goog.module.get('java.lang.Math$impl');
 }
}
/**@const {number} @nodts*/
StrictMath.f_E__java_lang_StrictMath = 2.718281828459045;
/**@const {number} @nodts*/
StrictMath.f_PI__java_lang_StrictMath = 3.141592653589793;
$Util.$setClassMetadata(StrictMath, 'java.lang.StrictMath');

exports = StrictMath;

//# sourceMappingURL=StrictMath.js.map
