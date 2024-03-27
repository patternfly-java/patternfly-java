goog.module('java.util.function.DoubleToIntFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const DoubleToIntFunction = goog.require('java.util.function.DoubleToIntFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {DoubleToIntFunction}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):number} @nodts*/
  this.f_fn__java_util_function_DoubleToIntFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_DoubleToIntFunction_$LambdaAdaptor__java_util_function_DoubleToIntFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_DoubleToIntFunction_$LambdaAdaptor__java_util_function_DoubleToIntFunction_$JsFunction__void(/** ?function(number):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_DoubleToIntFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_applyAsInt__double__int(/** number */ arg0) {
  let /** ?function(number):number */ $function;
  return ($function = this.f_fn__java_util_function_DoubleToIntFunction_$LambdaAdaptor, $function(arg0));
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
DoubleToIntFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.DoubleToIntFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DoubleToIntFunction$$LambdaAdaptor.js.map
