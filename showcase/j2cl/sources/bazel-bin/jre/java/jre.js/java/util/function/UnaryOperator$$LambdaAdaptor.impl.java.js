goog.module('java.util.function.UnaryOperator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const UnaryOperator = goog.require('java.util.function.UnaryOperator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');

/**
 * @template T
 * @implements {UnaryOperator<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T):T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):T} @nodts*/
  this.f_fn__java_util_function_UnaryOperator_$LambdaAdaptor;
  this.$ctor__java_util_function_UnaryOperator_$LambdaAdaptor__java_util_function_UnaryOperator_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_UnaryOperator_$LambdaAdaptor__java_util_function_UnaryOperator_$JsFunction__void(/** ?function(T):T */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_UnaryOperator_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {T} */
 m_apply__java_lang_Object__java_lang_Object(/** T */ arg0) {
  let /** ?function(T):T */ $function;
  return ($function = this.f_fn__java_util_function_UnaryOperator_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {j_u_function_Function<T, V>} */
 m_andThen__java_util_function_Function__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {j_u_function_Function<T, V>}*/ (j_u_function_Function.m_andThen__$default__java_util_function_Function__java_util_function_Function__java_util_function_Function(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {j_u_function_Function<V, T>} */
 m_compose__java_util_function_Function__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {j_u_function_Function<V, T>}*/ (j_u_function_Function.m_compose__$default__java_util_function_Function__java_util_function_Function__java_util_function_Function(this, arg0));
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
 static $loadModules() {
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
 }
}
UnaryOperator.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.UnaryOperator$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=UnaryOperator$$LambdaAdaptor.js.map
