goog.module('java.util.stream.LongStream.$3$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongSupplier = goog.forwardDeclare('java.util.function.LongSupplier$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LongSupplier} @nodts*/
  this.$captured_s__java_util_stream_LongStream_3;
 }
 /** @nodts @return {!$3} */
 static $create__java_util_function_LongSupplier__long__int(/** LongSupplier */ $captured_s, /** !$Long */ $_0, /** number */ $_1) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__java_util_stream_LongStream_3__java_util_function_LongSupplier__long__int__void($captured_s, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStream_3__java_util_function_LongSupplier__long__int__void(/** LongSupplier */ $captured_s, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_s__java_util_stream_LongStream_3 = $captured_s;
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  action.m_accept__long__void(this.$captured_s__java_util_stream_LongStream_3.m_getAsLong__long());
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 /** @nodts */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 /** @nodts */
 static $loadModules() {
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($3, 'java.util.stream.LongStream$3');

exports = $3;

//# sourceMappingURL=LongStream$3.js.map
