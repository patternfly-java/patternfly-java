goog.module('java.util.LongSummaryStatistics$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntConsumer = goog.require('java.util.function.IntConsumer$impl');
const LongConsumer = goog.require('java.util.function.LongConsumer$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {LongConsumer}
 * @implements {IntConsumer}
 */
class LongSummaryStatistics extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_count__java_util_LongSummaryStatistics_ = $Long.fromInt(0);
  /**@type {!$Long} @nodts*/
  this.f_min__java_util_LongSummaryStatistics_ = $Long.fromInt(0);
  /**@type {!$Long} @nodts*/
  this.f_max__java_util_LongSummaryStatistics_ = $Long.fromInt(0);
  /**@type {!$Long} @nodts*/
  this.f_sum__java_util_LongSummaryStatistics_ = $Long.fromInt(0);
 }
 /** @nodts @return {!LongSummaryStatistics} */
 static $create__() {
  LongSummaryStatistics.$clinit();
  let $instance = new LongSummaryStatistics();
  $instance.$ctor__java_util_LongSummaryStatistics__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_LongSummaryStatistics__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_LongSummaryStatistics();
 }
 /** @override @nodts */
 m_accept__int__void(/** number */ value) {
  this.m_accept__long__void($Primitives.widenIntToLong(value));
 }
 /** @override @nodts */
 m_accept__long__void(/** !$Long */ value) {
  this.f_count__java_util_LongSummaryStatistics_ = $LongUtils.plus(this.f_count__java_util_LongSummaryStatistics_, $Long.fromInt(1));
  this.f_min__java_util_LongSummaryStatistics_ = Math.m_min__long__long__long(this.f_min__java_util_LongSummaryStatistics_, value);
  this.f_max__java_util_LongSummaryStatistics_ = Math.m_max__long__long__long(this.f_max__java_util_LongSummaryStatistics_, value);
  this.f_sum__java_util_LongSummaryStatistics_ = $LongUtils.plus(this.f_sum__java_util_LongSummaryStatistics_, value);
 }
 /** @nodts */
 m_combine__java_util_LongSummaryStatistics__void(/** LongSummaryStatistics */ other) {
  this.f_count__java_util_LongSummaryStatistics_ = $LongUtils.plus(this.f_count__java_util_LongSummaryStatistics_, other.f_count__java_util_LongSummaryStatistics_);
  this.f_min__java_util_LongSummaryStatistics_ = Math.m_min__long__long__long(this.f_min__java_util_LongSummaryStatistics_, other.f_min__java_util_LongSummaryStatistics_);
  this.f_max__java_util_LongSummaryStatistics_ = Math.m_max__long__long__long(this.f_max__java_util_LongSummaryStatistics_, other.f_max__java_util_LongSummaryStatistics_);
  this.f_sum__java_util_LongSummaryStatistics_ = $LongUtils.plus(this.f_sum__java_util_LongSummaryStatistics_, other.f_sum__java_util_LongSummaryStatistics_);
 }
 /** @nodts @return {number} */
 m_getAverage__double() {
  return $LongUtils.greater(this.f_count__java_util_LongSummaryStatistics_, $Long.fromInt(0)) ? $Primitives.widenLongToDouble(this.f_sum__java_util_LongSummaryStatistics_) / $Primitives.widenLongToDouble(this.f_count__java_util_LongSummaryStatistics_) : 0;
 }
 /** @nodts @return {!$Long} */
 m_getCount__long() {
  return this.f_count__java_util_LongSummaryStatistics_;
 }
 /** @nodts @return {!$Long} */
 m_getMin__long() {
  return this.f_min__java_util_LongSummaryStatistics_;
 }
 /** @nodts @return {!$Long} */
 m_getMax__long() {
  return this.f_max__java_util_LongSummaryStatistics_;
 }
 /** @nodts @return {!$Long} */
 m_getSum__long() {
  return this.f_sum__java_util_LongSummaryStatistics_;
 }
 /** @override @return {?string} */
 toString() {
  return 'LongSummaryStatistics[' + 'count = ' + this.f_count__java_util_LongSummaryStatistics_ + ', avg = ' + this.m_getAverage__double() + ', min = ' + this.f_min__java_util_LongSummaryStatistics_ + ', max = ' + this.f_max__java_util_LongSummaryStatistics_ + ', sum = ' + this.f_sum__java_util_LongSummaryStatistics_ + ']';
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongConsumer} */
 m_andThen__java_util_function_LongConsumer__java_util_function_LongConsumer(/** LongConsumer */ arg0) {
  return LongConsumer.m_andThen__$default__java_util_function_LongConsumer__java_util_function_LongConsumer__java_util_function_LongConsumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntConsumer} */
 m_andThen__java_util_function_IntConsumer__java_util_function_IntConsumer(/** IntConsumer */ arg0) {
  return IntConsumer.m_andThen__$default__java_util_function_IntConsumer__java_util_function_IntConsumer__java_util_function_IntConsumer(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_LongSummaryStatistics() {
  this.f_min__java_util_LongSummaryStatistics_ = Long.f_MAX_VALUE__java_lang_Long;
  this.f_max__java_util_LongSummaryStatistics_ = Long.f_MIN_VALUE__java_lang_Long;
 }
 /** @nodts */
 static $clinit() {
  LongSummaryStatistics.$clinit = () =>{};
  LongSummaryStatistics.$loadModules();
  j_l_Object.$clinit();
  LongConsumer.$clinit();
  IntConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LongSummaryStatistics;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Math = goog.module.get('java.lang.Math$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
LongConsumer.$markImplementor(LongSummaryStatistics);
IntConsumer.$markImplementor(LongSummaryStatistics);
$Util.$setClassMetadata(LongSummaryStatistics, 'java.util.LongSummaryStatistics');

exports = LongSummaryStatistics;

//# sourceMappingURL=LongSummaryStatistics.js.map
