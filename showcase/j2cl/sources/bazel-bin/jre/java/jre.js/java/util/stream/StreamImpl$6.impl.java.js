goog.module('java.util.stream.StreamImpl.$6$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let StreamImpl = goog.forwardDeclare('java.util.stream.StreamImpl$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class $6 extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {StreamImpl<T>} @nodts*/
  this.$outer_this__java_util_stream_StreamImpl_6;
  /**@type {Consumer<?>} @nodts*/
  this.$captured_action__java_util_stream_StreamImpl_6;
 }
 /** @nodts @template T @return {!$6<T>} */
 static $create__java_util_stream_StreamImpl__java_util_function_Consumer__long__int(/** StreamImpl<T> */ $outer_this, /** Consumer<?> */ $captured_action, /** !$Long */ $_0, /** number */ $_1) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__java_util_stream_StreamImpl_6__java_util_stream_StreamImpl__java_util_function_Consumer__long__int__void($outer_this, $captured_action, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_6__java_util_stream_StreamImpl__java_util_function_Consumer__long__int__void(/** StreamImpl<T> */ $outer_this, /** Consumer<?> */ $captured_action, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_StreamImpl_6 = $outer_this;
  this.$captured_action__java_util_stream_StreamImpl_6 = $captured_action;
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void($_0, $_1);
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ innerAction) {
  return this.$outer_this__java_util_stream_StreamImpl_6.f_spliterator__java_util_stream_StreamImpl_.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((/** ? */ item) =>{
   this.$captured_action__java_util_stream_StreamImpl_6.m_accept__java_lang_Object__void(item);
   innerAction.m_accept__java_lang_Object__void(item);
  }));
 }
 /** @nodts */
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
 }
}
$Util.$setClassMetadata($6, 'java.util.stream.StreamImpl$6');

exports = $6;

//# sourceMappingURL=StreamImpl$6.js.map
