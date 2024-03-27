goog.module('java.util.function.IntBinaryOperator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntBinaryOperator = goog.require('java.util.function.IntBinaryOperator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {IntBinaryOperator}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number, number):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number, number):number} @nodts*/
  this.f_fn__java_util_function_IntBinaryOperator_$LambdaAdaptor;
  this.$ctor__java_util_function_IntBinaryOperator_$LambdaAdaptor__java_util_function_IntBinaryOperator_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_IntBinaryOperator_$LambdaAdaptor__java_util_function_IntBinaryOperator_$JsFunction__void(/** ?function(number, number):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_IntBinaryOperator_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_applyAsInt__int__int__int(/** number */ arg0, /** number */ arg1) {
  let /** ?function(number, number):number */ $function;
  return ($function = this.f_fn__java_util_function_IntBinaryOperator_$LambdaAdaptor, $function(arg0, arg1));
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IntBinaryOperator.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.IntBinaryOperator$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=IntBinaryOperator$$LambdaAdaptor.js.map
