goog.module('java.util.function.DoubleUnaryOperator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const DoubleUnaryOperator = goog.require('java.util.function.DoubleUnaryOperator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {DoubleUnaryOperator}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):number} @nodts*/
  this.f_fn__java_util_function_DoubleUnaryOperator_$LambdaAdaptor;
  this.$ctor__java_util_function_DoubleUnaryOperator_$LambdaAdaptor__java_util_function_DoubleUnaryOperator_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_DoubleUnaryOperator_$LambdaAdaptor__java_util_function_DoubleUnaryOperator_$JsFunction__void(/** ?function(number):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_DoubleUnaryOperator_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_applyAsDouble__double__double(/** number */ arg0) {
  let /** ?function(number):number */ $function;
  return ($function = this.f_fn__java_util_function_DoubleUnaryOperator_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {DoubleUnaryOperator} */
 m_andThen__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator(/** DoubleUnaryOperator */ arg0) {
  return DoubleUnaryOperator.m_andThen__$default__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {DoubleUnaryOperator} */
 m_compose__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator(/** DoubleUnaryOperator */ arg0) {
  return DoubleUnaryOperator.m_compose__$default__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  DoubleUnaryOperator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
DoubleUnaryOperator.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.DoubleUnaryOperator$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DoubleUnaryOperator$$LambdaAdaptor.js.map
