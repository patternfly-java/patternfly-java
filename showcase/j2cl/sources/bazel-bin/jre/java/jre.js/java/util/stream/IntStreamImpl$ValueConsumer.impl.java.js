goog.module('java.util.stream.IntStreamImpl.ValueConsumer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntConsumer = goog.require('java.util.function.IntConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 * @implements {IntConsumer}
 */
class ValueConsumer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__java_util_stream_IntStreamImpl_ValueConsumer = 0;
 }
 /** @nodts @return {!ValueConsumer} */
 static $create__() {
  ValueConsumer.$clinit();
  let $instance = new ValueConsumer();
  $instance.$ctor__java_util_stream_IntStreamImpl_ValueConsumer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl_ValueConsumer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts */
 m_accept__int__void(/** number */ value) {
  this.f_value__java_util_stream_IntStreamImpl_ValueConsumer = value;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntConsumer} */
 m_andThen__java_util_function_IntConsumer__java_util_function_IntConsumer(/** IntConsumer */ arg0) {
  return IntConsumer.m_andThen__$default__java_util_function_IntConsumer__java_util_function_IntConsumer__java_util_function_IntConsumer(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  ValueConsumer.$clinit = () =>{};
  ValueConsumer.$loadModules();
  j_l_Object.$clinit();
  IntConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValueConsumer;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IntConsumer.$markImplementor(ValueConsumer);
$Util.$setClassMetadata(ValueConsumer, 'java.util.stream.IntStreamImpl$ValueConsumer');

exports = ValueConsumer;

//# sourceMappingURL=IntStreamImpl$ValueConsumer.js.map
