goog.module('java.lang.Number.__ParseLong$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');
let $$long = goog.forwardDeclare('vmbootstrap.primitives.$long$impl');

class ____ParseLong extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!____ParseLong} */
 static $create__() {
  ____ParseLong.$clinit();
  let $instance = new ____ParseLong();
  $instance.$ctor__java_lang_Number___ParseLong__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Number___ParseLong__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Array<number>} */
 static get f_maxDigitsForRadix__java_lang_Number___ParseLong_() {
  return (____ParseLong.$clinit(), ____ParseLong.$static_maxDigitsForRadix__java_lang_Number___ParseLong_);
 }
 /** @nodts @return {Array<number>} */
 static get f_maxDigitsRadixPower__java_lang_Number___ParseLong_() {
  return (____ParseLong.$clinit(), ____ParseLong.$static_maxDigitsRadixPower__java_lang_Number___ParseLong_);
 }
 /** @nodts @return {Array<number>} */
 static get f_maxLengthForRadix__java_lang_Number___ParseLong_() {
  return (____ParseLong.$clinit(), ____ParseLong.$static_maxLengthForRadix__java_lang_Number___ParseLong_);
 }
 /** @nodts @return {Array<!$Long>} */
 static get f_maxValueForRadix__java_lang_Number___ParseLong_() {
  return (____ParseLong.$clinit(), ____ParseLong.$static_maxValueForRadix__java_lang_Number___ParseLong_);
 }
 /** @nodts */
 static $clinit() {
  ____ParseLong.$clinit = () =>{};
  ____ParseLong.$loadModules();
  j_l_Object.$clinit();
  ____ParseLong.$static_maxDigitsForRadix__java_lang_Number___ParseLong_ = /**@type {!Array<number>}*/ ($Arrays.$init([- 1 | 0, - 1 | 0, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5], $$int));
  ____ParseLong.$static_maxDigitsRadixPower__java_lang_Number___ParseLong_ = /**@type {!Array<number>}*/ ($Arrays.$create([37], $$int));
  ____ParseLong.$static_maxLengthForRadix__java_lang_Number___ParseLong_ = /**@type {!Array<number>}*/ ($Arrays.$init([- 1 | 0, - 1 | 0, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13], $$int));
  ____ParseLong.$static_maxValueForRadix__java_lang_Number___ParseLong_ = /**@type {!Array<!$Long>}*/ ($Arrays.$create([37], $$long));
  for (let i = 2; i <= 36; i = i + 1 | 0) {
   $Arrays.$set(____ParseLong.$static_maxDigitsRadixPower__java_lang_Number___ParseLong_, i, $Primitives.narrowDoubleToInt(Math.pow(i, ____ParseLong.$static_maxDigitsForRadix__java_lang_Number___ParseLong_[i])));
   $Arrays.$set(____ParseLong.$static_maxValueForRadix__java_lang_Number___ParseLong_, i, $LongUtils.divide(Long.f_MAX_VALUE__java_lang_Long, $Primitives.widenIntToLong(____ParseLong.$static_maxDigitsRadixPower__java_lang_Number___ParseLong_[i])));
  }
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ____ParseLong;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
  $$long = goog.module.get('vmbootstrap.primitives.$long$impl');
 }
}
/**@private {Array<number>} @nodts*/
____ParseLong.$static_maxDigitsForRadix__java_lang_Number___ParseLong_;
/**@private {Array<number>} @nodts*/
____ParseLong.$static_maxDigitsRadixPower__java_lang_Number___ParseLong_;
/**@private {Array<number>} @nodts*/
____ParseLong.$static_maxLengthForRadix__java_lang_Number___ParseLong_;
/**@private {Array<!$Long>} @nodts*/
____ParseLong.$static_maxValueForRadix__java_lang_Number___ParseLong_;
$Util.$setClassMetadata(____ParseLong, 'java.lang.Number$__ParseLong');

exports = ____ParseLong;

//# sourceMappingURL=Number$__ParseLong.js.map
