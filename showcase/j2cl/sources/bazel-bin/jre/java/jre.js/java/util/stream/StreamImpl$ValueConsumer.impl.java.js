goog.module('java.util.stream.StreamImpl.ValueConsumer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Consumer = goog.require('java.util.function.Consumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 * @template T
 * @implements {Consumer<T>}
 */
class ValueConsumer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {T} @nodts*/
  this.f_value__java_util_stream_StreamImpl_ValueConsumer;
 }
 /** @nodts @template T @return {!ValueConsumer<T>} */
 static $create__() {
  ValueConsumer.$clinit();
  let $instance = new ValueConsumer();
  $instance.$ctor__java_util_stream_StreamImpl_ValueConsumer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_ValueConsumer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts */
 m_accept__java_lang_Object__void(/** T */ value) {
  this.f_value__java_util_stream_StreamImpl_ValueConsumer = value;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Consumer<T>} */
 m_andThen__java_util_function_Consumer__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  return /**@type {Consumer<T>}*/ (Consumer.m_andThen__$default__java_util_function_Consumer__java_util_function_Consumer__java_util_function_Consumer(this, arg0));
 }
 /** @nodts */
 static $clinit() {
  ValueConsumer.$clinit = () =>{};
  ValueConsumer.$loadModules();
  j_l_Object.$clinit();
  Consumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValueConsumer;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Consumer.$markImplementor(ValueConsumer);
$Util.$setClassMetadata(ValueConsumer, 'java.util.stream.StreamImpl$ValueConsumer');

exports = ValueConsumer;

//# sourceMappingURL=StreamImpl$ValueConsumer.js.map
