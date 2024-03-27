goog.module('java.util.stream.Stream.$4$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class $4 extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {T} @nodts*/
  this.f_next__java_util_stream_Stream_4_;
  /**@type {T} @nodts*/
  this.$captured_seed__java_util_stream_Stream_4;
  /**@type {UnaryOperator<T>} @nodts*/
  this.$captured_f__java_util_stream_Stream_4;
 }
 /** @nodts @template T @return {!$4<T>} */
 static $create__java_lang_Object__java_util_function_UnaryOperator__long__int(/** T */ $captured_seed, /** UnaryOperator<T> */ $captured_f, /** !$Long */ $_0, /** number */ $_1) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__java_util_stream_Stream_4__java_lang_Object__java_util_function_UnaryOperator__long__int__void($captured_seed, $captured_f, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_Stream_4__java_lang_Object__java_util_function_UnaryOperator__long__int__void(/** T */ $captured_seed, /** UnaryOperator<T> */ $captured_f, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_seed__java_util_stream_Stream_4 = $captured_seed;
  this.$captured_f__java_util_stream_Stream_4 = $captured_f;
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void($_0, $_1);
  this.$init__void_$p_java_util_stream_Stream_4();
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  action.m_accept__java_lang_Object__void(this.f_next__java_util_stream_Stream_4_);
  this.f_next__java_util_stream_Stream_4_ = this.$captured_f__java_util_stream_Stream_4.m_apply__java_lang_Object__java_lang_Object(this.f_next__java_util_stream_Stream_4_);
  return true;
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_Stream_4() {
  this.f_next__java_util_stream_Stream_4_ = this.$captured_seed__java_util_stream_Stream_4;
 }
 /** @nodts */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($4, 'java.util.stream.Stream$4');

exports = $4;

//# sourceMappingURL=Stream$4.js.map
