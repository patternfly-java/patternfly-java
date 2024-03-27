goog.module('java.util.IntSummaryStatistics$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntConsumer = goog.require('java.util.function.IntConsumer$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {IntConsumer}
 */
class IntSummaryStatistics extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_count__java_util_IntSummaryStatistics_ = $Long.fromInt(0);
  /**@type {number} @nodts*/
  this.f_min__java_util_IntSummaryStatistics_ = 0;
  /**@type {number} @nodts*/
  this.f_max__java_util_IntSummaryStatistics_ = 0;
  /**@type {!$Long} @nodts*/
  this.f_sum__java_util_IntSummaryStatistics_ = $Long.fromInt(0);
 }
 /** @nodts @return {!IntSummaryStatistics} */
 static $create__() {
  IntSummaryStatistics.$clinit();
  let $instance = new IntSummaryStatistics();
  $instance.$ctor__java_util_IntSummaryStatistics__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_IntSummaryStatistics__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_IntSummaryStatistics();
 }
 /** @override @nodts */
 m_accept__int__void(/** number */ value) {
  this.f_count__java_util_IntSummaryStatistics_ = $LongUtils.plus(this.f_count__java_util_IntSummaryStatistics_, $Long.fromInt(1));
  this.f_min__java_util_IntSummaryStatistics_ = Math.min(this.f_min__java_util_IntSummaryStatistics_, value);
  this.f_max__java_util_IntSummaryStatistics_ = Math.max(this.f_max__java_util_IntSummaryStatistics_, value);
  this.f_sum__java_util_IntSummaryStatistics_ = $LongUtils.plus(this.f_sum__java_util_IntSummaryStatistics_, $Primitives.widenIntToLong(value));
 }
 /** @nodts */
 m_combine__java_util_IntSummaryStatistics__void(/** IntSummaryStatistics */ other) {
  this.f_count__java_util_IntSummaryStatistics_ = $LongUtils.plus(this.f_count__java_util_IntSummaryStatistics_, other.f_count__java_util_IntSummaryStatistics_);
  this.f_min__java_util_IntSummaryStatistics_ = Math.min(this.f_min__java_util_IntSummaryStatistics_, other.f_min__java_util_IntSummaryStatistics_);
  this.f_max__java_util_IntSummaryStatistics_ = Math.max(this.f_max__java_util_IntSummaryStatistics_, other.f_max__java_util_IntSummaryStatistics_);
  this.f_sum__java_util_IntSummaryStatistics_ = $LongUtils.plus(this.f_sum__java_util_IntSummaryStatistics_, other.f_sum__java_util_IntSummaryStatistics_);
 }
 /** @nodts @return {number} */
 m_getAverage__double() {
  return $LongUtils.greater(this.f_count__java_util_IntSummaryStatistics_, $Long.fromInt(0)) ? $Primitives.widenLongToDouble(this.f_sum__java_util_IntSummaryStatistics_) / $Primitives.widenLongToDouble(this.f_count__java_util_IntSummaryStatistics_) : 0;
 }
 /** @nodts @return {!$Long} */
 m_getCount__long() {
  return this.f_count__java_util_IntSummaryStatistics_;
 }
 /** @nodts @return {number} */
 m_getMin__int() {
  return this.f_min__java_util_IntSummaryStatistics_;
 }
 /** @nodts @return {number} */
 m_getMax__int() {
  return this.f_max__java_util_IntSummaryStatistics_;
 }
 /** @nodts @return {!$Long} */
 m_getSum__long() {
  return this.f_sum__java_util_IntSummaryStatistics_;
 }
 /** @override @return {?string} */
 toString() {
  return 'IntSummaryStatistics[' + 'count = ' + this.f_count__java_util_IntSummaryStatistics_ + ', avg = ' + this.m_getAverage__double() + ', min = ' + this.f_min__java_util_IntSummaryStatistics_ + ', max = ' + this.f_max__java_util_IntSummaryStatistics_ + ', sum = ' + this.f_sum__java_util_IntSummaryStatistics_ + ']';
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntConsumer} */
 m_andThen__java_util_function_IntConsumer__java_util_function_IntConsumer(/** IntConsumer */ arg0) {
  return IntConsumer.m_andThen__$default__java_util_function_IntConsumer__java_util_function_IntConsumer__java_util_function_IntConsumer(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_IntSummaryStatistics() {
  this.f_min__java_util_IntSummaryStatistics_ = Integer.f_MAX_VALUE__java_lang_Integer;
  this.f_max__java_util_IntSummaryStatistics_ = Integer.f_MIN_VALUE__java_lang_Integer;
 }
 /** @nodts */
 static $clinit() {
  IntSummaryStatistics.$clinit = () =>{};
  IntSummaryStatistics.$loadModules();
  j_l_Object.$clinit();
  IntConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IntSummaryStatistics;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
IntConsumer.$markImplementor(IntSummaryStatistics);
$Util.$setClassMetadata(IntSummaryStatistics, 'java.util.IntSummaryStatistics');

exports = IntSummaryStatistics;

//# sourceMappingURL=IntSummaryStatistics.js.map
