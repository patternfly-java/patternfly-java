goog.module('java.util.stream.IntStream.$4$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntUnaryOperator = goog.forwardDeclare('java.util.function.IntUnaryOperator$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_next__java_util_stream_IntStream_4_ = 0;
  /**@type {number} @nodts*/
  this.$captured_seed__java_util_stream_IntStream_4 = 0;
  /**@type {IntUnaryOperator} @nodts*/
  this.$captured_f__java_util_stream_IntStream_4;
 }
 /** @nodts @return {!$4} */
 static $create__int__java_util_function_IntUnaryOperator__long__int(/** number */ $captured_seed, /** IntUnaryOperator */ $captured_f, /** !$Long */ $_0, /** number */ $_1) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__java_util_stream_IntStream_4__int__java_util_function_IntUnaryOperator__long__int__void($captured_seed, $captured_f, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStream_4__int__java_util_function_IntUnaryOperator__long__int__void(/** number */ $captured_seed, /** IntUnaryOperator */ $captured_f, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_seed__java_util_stream_IntStream_4 = $captured_seed;
  this.$captured_f__java_util_stream_IntStream_4 = $captured_f;
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void($_0, $_1);
  this.$init__void_$p_java_util_stream_IntStream_4();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  action.m_accept__int__void(this.f_next__java_util_stream_IntStream_4_);
  this.f_next__java_util_stream_IntStream_4_ = this.$captured_f__java_util_stream_IntStream_4.m_applyAsInt__int__int(this.f_next__java_util_stream_IntStream_4_);
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_IntStream_4() {
  this.f_next__java_util_stream_IntStream_4_ = this.$captured_seed__java_util_stream_IntStream_4;
 }
 /** @nodts */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 /** @nodts */
 static $loadModules() {
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($4, 'java.util.stream.IntStream$4');

exports = $4;

//# sourceMappingURL=IntStream$4.js.map
