goog.module('java.util.stream.DoubleStream.$3$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleSupplier = goog.forwardDeclare('java.util.function.DoubleSupplier$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DoubleSupplier} @nodts*/
  this.$captured_s__java_util_stream_DoubleStream_3;
 }
 /** @nodts @return {!$3} */
 static $create__java_util_function_DoubleSupplier__long__int(/** DoubleSupplier */ $captured_s, /** !$Long */ $_0, /** number */ $_1) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__java_util_stream_DoubleStream_3__java_util_function_DoubleSupplier__long__int__void($captured_s, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStream_3__java_util_function_DoubleSupplier__long__int__void(/** DoubleSupplier */ $captured_s, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_s__java_util_stream_DoubleStream_3 = $captured_s;
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  action.m_accept__double__void(this.$captured_s__java_util_stream_DoubleStream_3.m_getAsDouble__double());
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_DoubleConsumer__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, DoubleConsumer)));
 }
 /** @nodts */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 /** @nodts */
 static $loadModules() {
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($3, 'java.util.stream.DoubleStream$3');

exports = $3;

//# sourceMappingURL=DoubleStream$3.js.map
