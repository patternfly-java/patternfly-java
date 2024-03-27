goog.module('java.util.DoubleSummaryStatistics$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const DoubleConsumer = goog.require('java.util.function.DoubleConsumer$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {DoubleConsumer}
 */
class DoubleSummaryStatistics extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_count__java_util_DoubleSummaryStatistics_ = $Long.fromInt(0);
  /**@type {number} @nodts*/
  this.f_min__java_util_DoubleSummaryStatistics_ = 0;
  /**@type {number} @nodts*/
  this.f_max__java_util_DoubleSummaryStatistics_ = 0;
  /**@type {number} @nodts*/
  this.f_sum__java_util_DoubleSummaryStatistics_ = 0;
  /**@type {number} @nodts*/
  this.f_sumError__java_util_DoubleSummaryStatistics_ = 0;
  /**@type {number} @nodts*/
  this.f_naiveSum__java_util_DoubleSummaryStatistics_ = 0;
 }
 /** @nodts @return {!DoubleSummaryStatistics} */
 static $create__() {
  DoubleSummaryStatistics.$clinit();
  let $instance = new DoubleSummaryStatistics();
  $instance.$ctor__java_util_DoubleSummaryStatistics__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_DoubleSummaryStatistics__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_DoubleSummaryStatistics();
 }
 /** @override @nodts */
 m_accept__double__void(/** number */ value) {
  this.f_count__java_util_DoubleSummaryStatistics_ = $LongUtils.plus(this.f_count__java_util_DoubleSummaryStatistics_, $Long.fromInt(1));
  this.f_min__java_util_DoubleSummaryStatistics_ = Math.min(this.f_min__java_util_DoubleSummaryStatistics_, value);
  this.f_max__java_util_DoubleSummaryStatistics_ = Math.max(this.f_max__java_util_DoubleSummaryStatistics_, value);
  this.f_naiveSum__java_util_DoubleSummaryStatistics_ += value;
  this.m_sum__double__void_$p_java_util_DoubleSummaryStatistics(value);
 }
 /** @nodts */
 m_combine__java_util_DoubleSummaryStatistics__void(/** DoubleSummaryStatistics */ other) {
  this.f_count__java_util_DoubleSummaryStatistics_ = $LongUtils.plus(this.f_count__java_util_DoubleSummaryStatistics_, other.f_count__java_util_DoubleSummaryStatistics_);
  this.f_min__java_util_DoubleSummaryStatistics_ = Math.min(this.f_min__java_util_DoubleSummaryStatistics_, other.f_min__java_util_DoubleSummaryStatistics_);
  this.f_max__java_util_DoubleSummaryStatistics_ = Math.max(this.f_max__java_util_DoubleSummaryStatistics_, other.f_max__java_util_DoubleSummaryStatistics_);
  this.f_naiveSum__java_util_DoubleSummaryStatistics_ += other.f_naiveSum__java_util_DoubleSummaryStatistics_;
  this.m_sum__double__void_$p_java_util_DoubleSummaryStatistics(other.f_sum__java_util_DoubleSummaryStatistics_);
  this.m_sum__double__void_$p_java_util_DoubleSummaryStatistics(other.f_sumError__java_util_DoubleSummaryStatistics_);
 }
 /** @nodts @return {number} */
 m_getAverage__double() {
  return $LongUtils.greater(this.f_count__java_util_DoubleSummaryStatistics_, $Long.fromInt(0)) ? this.m_getSum__double() / $Primitives.widenLongToDouble(this.f_count__java_util_DoubleSummaryStatistics_) : 0;
 }
 /** @nodts @return {!$Long} */
 m_getCount__long() {
  return this.f_count__java_util_DoubleSummaryStatistics_;
 }
 /** @nodts @return {number} */
 m_getMin__double() {
  return this.f_min__java_util_DoubleSummaryStatistics_;
 }
 /** @nodts @return {number} */
 m_getMax__double() {
  return this.f_max__java_util_DoubleSummaryStatistics_;
 }
 /** @nodts @return {number} */
 m_getSum__double() {
  let compensatedSum = this.f_sum__java_util_DoubleSummaryStatistics_ + this.f_sumError__java_util_DoubleSummaryStatistics_;
  if (Double.m_isNaN__double__boolean(compensatedSum) && Double.m_isInfinite__double__boolean(this.f_naiveSum__java_util_DoubleSummaryStatistics_)) {
   return this.f_naiveSum__java_util_DoubleSummaryStatistics_;
  }
  return compensatedSum;
 }
 /** @override @return {?string} */
 toString() {
  return 'DoubleSummaryStatistics[' + 'count = ' + this.f_count__java_util_DoubleSummaryStatistics_ + ', avg = ' + this.m_getAverage__double() + ', min = ' + this.f_min__java_util_DoubleSummaryStatistics_ + ', max = ' + this.f_max__java_util_DoubleSummaryStatistics_ + ', sum = ' + this.m_getSum__double() + ']';
 }
 /** @nodts */
 m_sum__double__void_$p_java_util_DoubleSummaryStatistics(/** number */ value) {
  let compensatedValue = value - this.f_sumError__java_util_DoubleSummaryStatistics_;
  let newSum = this.f_sum__java_util_DoubleSummaryStatistics_ + compensatedValue;
  this.f_sumError__java_util_DoubleSummaryStatistics_ = newSum - this.f_sum__java_util_DoubleSummaryStatistics_ - compensatedValue;
  this.f_sum__java_util_DoubleSummaryStatistics_ = newSum;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {DoubleConsumer} */
 m_andThen__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(/** DoubleConsumer */ arg0) {
  return DoubleConsumer.m_andThen__$default__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_DoubleSummaryStatistics() {
  this.f_min__java_util_DoubleSummaryStatistics_ = Double.f_POSITIVE_INFINITY__java_lang_Double;
  this.f_max__java_util_DoubleSummaryStatistics_ = Double.f_NEGATIVE_INFINITY__java_lang_Double;
 }
 /** @nodts */
 static $clinit() {
  DoubleSummaryStatistics.$clinit = () =>{};
  DoubleSummaryStatistics.$loadModules();
  j_l_Object.$clinit();
  DoubleConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoubleSummaryStatistics;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
DoubleConsumer.$markImplementor(DoubleSummaryStatistics);
$Util.$setClassMetadata(DoubleSummaryStatistics, 'java.util.DoubleSummaryStatistics');

exports = DoubleSummaryStatistics;

//# sourceMappingURL=DoubleSummaryStatistics.js.map
