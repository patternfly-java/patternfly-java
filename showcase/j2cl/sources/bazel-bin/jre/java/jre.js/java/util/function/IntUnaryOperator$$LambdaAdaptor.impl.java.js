goog.module('java.util.function.IntUnaryOperator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntUnaryOperator = goog.require('java.util.function.IntUnaryOperator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {IntUnaryOperator}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):number} @nodts*/
  this.f_fn__java_util_function_IntUnaryOperator_$LambdaAdaptor;
  this.$ctor__java_util_function_IntUnaryOperator_$LambdaAdaptor__java_util_function_IntUnaryOperator_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_IntUnaryOperator_$LambdaAdaptor__java_util_function_IntUnaryOperator_$JsFunction__void(/** ?function(number):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_IntUnaryOperator_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_applyAsInt__int__int(/** number */ arg0) {
  let /** ?function(number):number */ $function;
  return ($function = this.f_fn__java_util_function_IntUnaryOperator_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntUnaryOperator} */
 m_andThen__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator(/** IntUnaryOperator */ arg0) {
  return IntUnaryOperator.m_andThen__$default__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntUnaryOperator} */
 m_compose__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator(/** IntUnaryOperator */ arg0) {
  return IntUnaryOperator.m_compose__$default__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IntUnaryOperator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IntUnaryOperator.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.IntUnaryOperator$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=IntUnaryOperator$$LambdaAdaptor.js.map
