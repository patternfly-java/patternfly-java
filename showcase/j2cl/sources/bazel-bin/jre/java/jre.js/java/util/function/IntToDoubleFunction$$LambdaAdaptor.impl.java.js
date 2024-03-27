goog.module('java.util.function.IntToDoubleFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntToDoubleFunction = goog.require('java.util.function.IntToDoubleFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {IntToDoubleFunction}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):number} @nodts*/
  this.f_fn__java_util_function_IntToDoubleFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_IntToDoubleFunction_$LambdaAdaptor__java_util_function_IntToDoubleFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_IntToDoubleFunction_$LambdaAdaptor__java_util_function_IntToDoubleFunction_$JsFunction__void(/** ?function(number):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_IntToDoubleFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_applyAsDouble__int__double(/** number */ arg0) {
  let /** ?function(number):number */ $function;
  return ($function = this.f_fn__java_util_function_IntToDoubleFunction_$LambdaAdaptor, $function(arg0));
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
IntToDoubleFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.IntToDoubleFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=IntToDoubleFunction$$LambdaAdaptor.js.map
