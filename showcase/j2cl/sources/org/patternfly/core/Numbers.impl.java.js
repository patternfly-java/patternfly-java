goog.module('org.patternfly.core.Numbers$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BigDecimal = goog.forwardDeclare('java.math.BigDecimal$impl');
let RoundingMode = goog.forwardDeclare('java.math.RoundingMode$impl');

class Numbers extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Numbers} */
 static $create__() {
  Numbers.$clinit();
  let $instance = new Numbers();
  $instance.$ctor__org_patternfly_core_Numbers__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_Numbers__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 static m_percentage__double__double__double(/** number */ value, /** number */ max) {
  Numbers.$clinit();
  return max != 0 ? Numbers.m_round__double__double(value * 100 / max) : 0;
 }
 /** @nodts @return {number} */
 static m_percentage__double__double__double__double(/** number */ value, /** number */ min, /** number */ max) {
  Numbers.$clinit();
  return max - min != 0 ? Numbers.m_round__double__double((value - min) * 100 / (max - min)) : 0;
 }
 /** @nodts @return {number} */
 static m_round__double__double(/** number */ value) {
  let bd = BigDecimal.m_valueOf__double__java_math_BigDecimal(value);
  bd = bd.m_setScale__int__java_math_RoundingMode__java_math_BigDecimal(2, RoundingMode.f_HALF_UP__java_math_RoundingMode);
  return bd.m_doubleValue__double();
 }
 /** @nodts */
 static $clinit() {
  Numbers.$clinit = () =>{};
  Numbers.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Numbers;
 }
 
 /** @nodts */
 static $loadModules() {
  BigDecimal = goog.module.get('java.math.BigDecimal$impl');
  RoundingMode = goog.module.get('java.math.RoundingMode$impl');
 }
}
$Util.$setClassMetadata(Numbers, 'org.patternfly.core.Numbers');

exports = Numbers;

//# sourceMappingURL=Numbers.js.map
