goog.module('java.util.stream.LongStreamImpl.$3$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongStreamImpl = goog.forwardDeclare('java.util.stream.LongStreamImpl$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LongStreamImpl} @nodts*/
  this.$outer_this__java_util_stream_LongStreamImpl_3;
  /**@type {LongConsumer} @nodts*/
  this.$captured_action__java_util_stream_LongStreamImpl_3;
 }
 /** @nodts @return {!$3} */
 static $create__java_util_stream_LongStreamImpl__java_util_function_LongConsumer__long__int(/** LongStreamImpl */ $outer_this, /** LongConsumer */ $captured_action, /** !$Long */ $_0, /** number */ $_1) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__java_util_stream_LongStreamImpl_3__java_util_stream_LongStreamImpl__java_util_function_LongConsumer__long__int__void($outer_this, $captured_action, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStreamImpl_3__java_util_stream_LongStreamImpl__java_util_function_LongConsumer__long__int__void(/** LongStreamImpl */ $outer_this, /** LongConsumer */ $captured_action, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_LongStreamImpl_3 = $outer_this;
  this.$captured_action__java_util_stream_LongStreamImpl_3 = $captured_action;
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ innerAction) {
  return this.$outer_this__java_util_stream_LongStreamImpl_3.f_spliterator__java_util_stream_LongStreamImpl_.m_tryAdvance__java_lang_Object__boolean(this.$captured_action__java_util_stream_LongStreamImpl_3.m_andThen__java_util_function_LongConsumer__java_util_function_LongConsumer(innerAction));
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
$Util.$setClassMetadata($3, 'java.util.stream.LongStreamImpl$3');

exports = $3;

//# sourceMappingURL=LongStreamImpl$3.js.map
