goog.module('java.util.stream.IntStreamImpl.$3$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntStreamImpl = goog.forwardDeclare('java.util.stream.IntStreamImpl$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {IntStreamImpl} @nodts*/
  this.$outer_this__java_util_stream_IntStreamImpl_3;
  /**@type {IntConsumer} @nodts*/
  this.$captured_action__java_util_stream_IntStreamImpl_3;
 }
 /** @nodts @return {!$3} */
 static $create__java_util_stream_IntStreamImpl__java_util_function_IntConsumer__long__int(/** IntStreamImpl */ $outer_this, /** IntConsumer */ $captured_action, /** !$Long */ $_0, /** number */ $_1) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__java_util_stream_IntStreamImpl_3__java_util_stream_IntStreamImpl__java_util_function_IntConsumer__long__int__void($outer_this, $captured_action, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl_3__java_util_stream_IntStreamImpl__java_util_function_IntConsumer__long__int__void(/** IntStreamImpl */ $outer_this, /** IntConsumer */ $captured_action, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_IntStreamImpl_3 = $outer_this;
  this.$captured_action__java_util_stream_IntStreamImpl_3 = $captured_action;
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ innerAction) {
  return this.$outer_this__java_util_stream_IntStreamImpl_3.f_spliterator__java_util_stream_IntStreamImpl_.m_tryAdvance__java_lang_Object__boolean(this.$captured_action__java_util_stream_IntStreamImpl_3.m_andThen__java_util_function_IntConsumer__java_util_function_IntConsumer(innerAction));
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
$Util.$setClassMetadata($3, 'java.util.stream.IntStreamImpl$3');

exports = $3;

//# sourceMappingURL=IntStreamImpl$3.js.map
