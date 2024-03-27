goog.module('java.util.stream.LongStreamImpl.ValueConsumer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const LongConsumer = goog.require('java.util.function.LongConsumer$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 * @implements {LongConsumer}
 */
class ValueConsumer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_value__java_util_stream_LongStreamImpl_ValueConsumer = $Long.fromInt(0);
 }
 /** @nodts @return {!ValueConsumer} */
 static $create__() {
  ValueConsumer.$clinit();
  let $instance = new ValueConsumer();
  $instance.$ctor__java_util_stream_LongStreamImpl_ValueConsumer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStreamImpl_ValueConsumer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts */
 m_accept__long__void(/** !$Long */ value) {
  this.f_value__java_util_stream_LongStreamImpl_ValueConsumer = value;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongConsumer} */
 m_andThen__java_util_function_LongConsumer__java_util_function_LongConsumer(/** LongConsumer */ arg0) {
  return LongConsumer.m_andThen__$default__java_util_function_LongConsumer__java_util_function_LongConsumer__java_util_function_LongConsumer(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  ValueConsumer.$clinit = () =>{};
  ValueConsumer.$loadModules();
  j_l_Object.$clinit();
  LongConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValueConsumer;
 }
 
 /** @nodts */
 static $loadModules() {}
}
LongConsumer.$markImplementor(ValueConsumer);
$Util.$setClassMetadata(ValueConsumer, 'java.util.stream.LongStreamImpl$ValueConsumer');

exports = ValueConsumer;

//# sourceMappingURL=LongStreamImpl$ValueConsumer.js.map
