goog.module('java.util.stream.DoubleStreamImpl.$3$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleStreamImpl = goog.forwardDeclare('java.util.stream.DoubleStreamImpl$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DoubleStreamImpl} @nodts*/
  this.$outer_this__java_util_stream_DoubleStreamImpl_3;
  /**@type {DoubleConsumer} @nodts*/
  this.$captured_action__java_util_stream_DoubleStreamImpl_3;
 }
 /** @nodts @return {!$3} */
 static $create__java_util_stream_DoubleStreamImpl__java_util_function_DoubleConsumer__long__int(/** DoubleStreamImpl */ $outer_this, /** DoubleConsumer */ $captured_action, /** !$Long */ $_0, /** number */ $_1) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__java_util_stream_DoubleStreamImpl_3__java_util_stream_DoubleStreamImpl__java_util_function_DoubleConsumer__long__int__void($outer_this, $captured_action, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl_3__java_util_stream_DoubleStreamImpl__java_util_function_DoubleConsumer__long__int__void(/** DoubleStreamImpl */ $outer_this, /** DoubleConsumer */ $captured_action, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_DoubleStreamImpl_3 = $outer_this;
  this.$captured_action__java_util_stream_DoubleStreamImpl_3 = $captured_action;
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ innerAction) {
  return this.$outer_this__java_util_stream_DoubleStreamImpl_3.f_spliterator__java_util_stream_DoubleStreamImpl_.m_tryAdvance__java_lang_Object__boolean(this.$captured_action__java_util_stream_DoubleStreamImpl_3.m_andThen__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(innerAction));
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
$Util.$setClassMetadata($3, 'java.util.stream.DoubleStreamImpl$3');

exports = $3;

//# sourceMappingURL=DoubleStreamImpl$3.js.map
