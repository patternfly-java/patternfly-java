goog.module('java.util.stream.IntStream.$3$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntSupplier = goog.forwardDeclare('java.util.function.IntSupplier$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {IntSupplier} @nodts*/
  this.$captured_s__java_util_stream_IntStream_3;
 }
 /** @nodts @return {!$3} */
 static $create__java_util_function_IntSupplier__long__int(/** IntSupplier */ $captured_s, /** !$Long */ $_0, /** number */ $_1) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__java_util_stream_IntStream_3__java_util_function_IntSupplier__long__int__void($captured_s, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStream_3__java_util_function_IntSupplier__long__int__void(/** IntSupplier */ $captured_s, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_s__java_util_stream_IntStream_3 = $captured_s;
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  action.m_accept__int__void(this.$captured_s__java_util_stream_IntStream_3.m_getAsInt__int());
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 /** @nodts */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 /** @nodts */
 static $loadModules() {
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($3, 'java.util.stream.IntStream$3');

exports = $3;

//# sourceMappingURL=IntStream$3.js.map
