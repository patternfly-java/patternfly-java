goog.module('java.util.stream.LongStream.$4$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongUnaryOperator = goog.forwardDeclare('java.util.function.LongUnaryOperator$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_next__java_util_stream_LongStream_4_ = $Long.fromInt(0);
  /**@type {!$Long} @nodts*/
  this.$captured_seed__java_util_stream_LongStream_4 = $Long.fromInt(0);
  /**@type {LongUnaryOperator} @nodts*/
  this.$captured_f__java_util_stream_LongStream_4;
 }
 /** @nodts @return {!$4} */
 static $create__long__java_util_function_LongUnaryOperator__long__int(/** !$Long */ $captured_seed, /** LongUnaryOperator */ $captured_f, /** !$Long */ $_0, /** number */ $_1) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__java_util_stream_LongStream_4__long__java_util_function_LongUnaryOperator__long__int__void($captured_seed, $captured_f, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStream_4__long__java_util_function_LongUnaryOperator__long__int__void(/** !$Long */ $captured_seed, /** LongUnaryOperator */ $captured_f, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_seed__java_util_stream_LongStream_4 = $captured_seed;
  this.$captured_f__java_util_stream_LongStream_4 = $captured_f;
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void($_0, $_1);
  this.$init__void_$p_java_util_stream_LongStream_4();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  action.m_accept__long__void(this.f_next__java_util_stream_LongStream_4_);
  this.f_next__java_util_stream_LongStream_4_ = this.$captured_f__java_util_stream_LongStream_4.m_applyAsLong__long__long(this.f_next__java_util_stream_LongStream_4_);
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_LongStream_4() {
  this.f_next__java_util_stream_LongStream_4_ = this.$captured_seed__java_util_stream_LongStream_4;
 }
 /** @nodts */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 /** @nodts */
 static $loadModules() {
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($4, 'java.util.stream.LongStream$4');

exports = $4;

//# sourceMappingURL=LongStream$4.js.map
