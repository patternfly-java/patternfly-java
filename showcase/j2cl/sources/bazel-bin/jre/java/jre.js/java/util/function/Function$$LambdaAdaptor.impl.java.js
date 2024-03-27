goog.module('java.util.function.Function.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const j_u_function_Function = goog.require('java.util.function.Function$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T, R
 * @implements {j_u_function_Function<T, R>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T):R */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):R} @nodts*/
  this.f_fn__java_util_function_Function_$LambdaAdaptor;
  this.$ctor__java_util_function_Function_$LambdaAdaptor__java_util_function_Function_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_Function_$LambdaAdaptor__java_util_function_Function_$JsFunction__void(/** ?function(T):R */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_Function_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {R} */
 m_apply__java_lang_Object__java_lang_Object(/** T */ arg0) {
  let /** ?function(T):R */ $function;
  return ($function = this.f_fn__java_util_function_Function_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {j_u_function_Function<T, V>} */
 m_andThen__java_util_function_Function__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return j_u_function_Function.m_andThen__$default__java_util_function_Function__java_util_function_Function__java_util_function_Function(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {j_u_function_Function<V, R>} */
 m_compose__java_util_function_Function__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return j_u_function_Function.m_compose__$default__java_util_function_Function__java_util_function_Function__java_util_function_Function(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  j_u_function_Function.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
j_u_function_Function.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.Function$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Function$$LambdaAdaptor.js.map
