goog.module('java.util.stream.IntStream.$5$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $5 extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_next__java_util_stream_IntStream_5_ = 0;
  /**@type {number} @nodts*/
  this.$captured_startInclusive__java_util_stream_IntStream_5 = 0;
  /**@type {number} @nodts*/
  this.$captured_endInclusive__java_util_stream_IntStream_5 = 0;
 }
 /** @nodts @return {!$5} */
 static $create__int__int__long__int(/** number */ $captured_startInclusive, /** number */ $captured_endInclusive, /** !$Long */ $_0, /** number */ $_1) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__java_util_stream_IntStream_5__int__int__long__int__void($captured_startInclusive, $captured_endInclusive, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStream_5__int__int__long__int__void(/** number */ $captured_startInclusive, /** number */ $captured_endInclusive, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_startInclusive__java_util_stream_IntStream_5 = $captured_startInclusive;
  this.$captured_endInclusive__java_util_stream_IntStream_5 = $captured_endInclusive;
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void($_0, $_1);
  this.$init__void_$p_java_util_stream_IntStream_5();
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return null;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  if (this.f_next__java_util_stream_IntStream_5_ <= this.$captured_endInclusive__java_util_stream_IntStream_5) {
   let /** number */ $value;
   action.m_accept__int__void(($value = this.f_next__java_util_stream_IntStream_5_, this.f_next__java_util_stream_IntStream_5_ = this.f_next__java_util_stream_IntStream_5_ + 1 | 0, $value));
   return true;
  }
  return false;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_IntStream_5() {
  this.f_next__java_util_stream_IntStream_5_ = this.$captured_startInclusive__java_util_stream_IntStream_5;
 }
 /** @nodts */
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 /** @nodts */
 static $loadModules() {
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($5, 'java.util.stream.IntStream$5');

exports = $5;

//# sourceMappingURL=IntStream$5.js.map
