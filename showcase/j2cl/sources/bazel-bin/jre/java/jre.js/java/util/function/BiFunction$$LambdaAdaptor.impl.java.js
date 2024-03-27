goog.module('java.util.function.BiFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const BiFunction = goog.require('java.util.function.BiFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');

/**
 * @template T, U, R
 * @implements {BiFunction<T, U, R>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, U):R */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, U):R} @nodts*/
  this.f_fn__java_util_function_BiFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_BiFunction_$LambdaAdaptor__java_util_function_BiFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_BiFunction_$LambdaAdaptor__java_util_function_BiFunction_$JsFunction__void(/** ?function(T, U):R */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_BiFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {R} */
 m_apply__java_lang_Object__java_lang_Object__java_lang_Object(/** T */ arg0, /** U */ arg1) {
  let /** ?function(T, U):R */ $function;
  return ($function = this.f_fn__java_util_function_BiFunction_$LambdaAdaptor, $function(arg0, arg1));
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {BiFunction<T, U, V>} */
 m_andThen__java_util_function_Function__java_util_function_BiFunction(/** j_u_function_Function<?, ?> */ arg0) {
  return BiFunction.m_andThen__$default__java_util_function_BiFunction__java_util_function_Function__java_util_function_BiFunction(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  BiFunction.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
BiFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.BiFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=BiFunction$$LambdaAdaptor.js.map
