goog.module('java.util.stream.LongStream.$5$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

class $5 extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_next__java_util_stream_LongStream_5_ = $Long.fromInt(0);
  /**@type {!$Long} @nodts*/
  this.$captured_startInclusive__java_util_stream_LongStream_5 = $Long.fromInt(0);
  /**@type {!$Long} @nodts*/
  this.$captured_endInclusive__java_util_stream_LongStream_5 = $Long.fromInt(0);
 }
 /** @nodts @return {!$5} */
 static $create__long__long__long__int(/** !$Long */ $captured_startInclusive, /** !$Long */ $captured_endInclusive, /** !$Long */ $_0, /** number */ $_1) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__java_util_stream_LongStream_5__long__long__long__int__void($captured_startInclusive, $captured_endInclusive, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStream_5__long__long__long__int__void(/** !$Long */ $captured_startInclusive, /** !$Long */ $captured_endInclusive, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_startInclusive__java_util_stream_LongStream_5 = $captured_startInclusive;
  this.$captured_endInclusive__java_util_stream_LongStream_5 = $captured_endInclusive;
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void($_0, $_1);
  this.$init__void_$p_java_util_stream_LongStream_5();
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return null;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  if ($LongUtils.lessEquals(this.f_next__java_util_stream_LongStream_5_, this.$captured_endInclusive__java_util_stream_LongStream_5)) {
   let /** !$Long */ $value;
   action.m_accept__long__void(($value = this.f_next__java_util_stream_LongStream_5_, this.f_next__java_util_stream_LongStream_5_ = $LongUtils.plus(this.f_next__java_util_stream_LongStream_5_, $Long.fromInt(1)), $value));
   return true;
  }
  return false;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_LongStream_5() {
  this.f_next__java_util_stream_LongStream_5_ = this.$captured_startInclusive__java_util_stream_LongStream_5;
 }
 /** @nodts */
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 /** @nodts */
 static $loadModules() {
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata($5, 'java.util.stream.LongStream$5');

exports = $5;

//# sourceMappingURL=LongStream$5.js.map
