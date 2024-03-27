goog.module('java.util.function.BinaryOperator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const BinaryOperator = goog.require('java.util.function.BinaryOperator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');

/**
 * @template T
 * @implements {BinaryOperator<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, T):T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, T):T} @nodts*/
  this.f_fn__java_util_function_BinaryOperator_$LambdaAdaptor;
  this.$ctor__java_util_function_BinaryOperator_$LambdaAdaptor__java_util_function_BinaryOperator_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_BinaryOperator_$LambdaAdaptor__java_util_function_BinaryOperator_$JsFunction__void(/** ?function(T, T):T */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_BinaryOperator_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {T} */
 m_apply__java_lang_Object__java_lang_Object__java_lang_Object(/** T */ arg0, /** T */ arg1) {
  let /** ?function(T, T):T */ $function;
  return ($function = this.f_fn__java_util_function_BinaryOperator_$LambdaAdaptor, $function(arg0, arg1));
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {BiFunction<T, T, V>} */
 m_andThen__java_util_function_Function__java_util_function_BiFunction(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {BiFunction<T, T, V>}*/ (BiFunction.m_andThen__$default__java_util_function_BiFunction__java_util_function_Function__java_util_function_BiFunction(this, arg0));
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
 static $loadModules() {
  BiFunction = goog.module.get('java.util.function.BiFunction$impl');
 }
}
BinaryOperator.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.BinaryOperator$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=BinaryOperator$$LambdaAdaptor.js.map
