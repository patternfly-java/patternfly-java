goog.module('java.util.stream.Stream.$3$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class $3 extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Supplier<T>} @nodts*/
  this.$captured_s__java_util_stream_Stream_3;
 }
 /** @nodts @template T @return {!$3<T>} */
 static $create__java_util_function_Supplier__long__int(/** Supplier<T> */ $captured_s, /** !$Long */ $_0, /** number */ $_1) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__java_util_stream_Stream_3__java_util_function_Supplier__long__int__void($captured_s, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_Stream_3__java_util_function_Supplier__long__int__void(/** Supplier<T> */ $captured_s, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_s__java_util_stream_Stream_3 = $captured_s;
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void($_0, $_1);
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  action.m_accept__java_lang_Object__void(this.$captured_s__java_util_stream_Stream_3.m_get__java_lang_Object());
  return true;
 }
 /** @nodts */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($3, 'java.util.stream.Stream$3');

exports = $3;

//# sourceMappingURL=Stream$3.js.map
