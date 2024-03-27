goog.module('java.util.stream.DoubleStreamImpl.ValueConsumer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const DoubleConsumer = goog.require('java.util.function.DoubleConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {DoubleConsumer}
 */
class ValueConsumer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__java_util_stream_DoubleStreamImpl_ValueConsumer = 0;
 }
 /** @nodts @return {!ValueConsumer} */
 static $create__() {
  ValueConsumer.$clinit();
  let $instance = new ValueConsumer();
  $instance.$ctor__java_util_stream_DoubleStreamImpl_ValueConsumer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl_ValueConsumer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts */
 m_accept__double__void(/** number */ value) {
  this.f_value__java_util_stream_DoubleStreamImpl_ValueConsumer = value;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {DoubleConsumer} */
 m_andThen__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(/** DoubleConsumer */ arg0) {
  return DoubleConsumer.m_andThen__$default__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  ValueConsumer.$clinit = () =>{};
  ValueConsumer.$loadModules();
  j_l_Object.$clinit();
  DoubleConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValueConsumer;
 }
 
 /** @nodts */
 static $loadModules() {}
}
DoubleConsumer.$markImplementor(ValueConsumer);
$Util.$setClassMetadata(ValueConsumer, 'java.util.stream.DoubleStreamImpl$ValueConsumer');

exports = ValueConsumer;

//# sourceMappingURL=DoubleStreamImpl$ValueConsumer.js.map
