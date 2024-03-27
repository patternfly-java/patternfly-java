goog.module('java.util.function.ToDoubleFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ToDoubleFunction = goog.require('java.util.function.ToDoubleFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
 * @implements {ToDoubleFunction<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):number} @nodts*/
  this.f_fn__java_util_function_ToDoubleFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_ToDoubleFunction_$LambdaAdaptor__java_util_function_ToDoubleFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_ToDoubleFunction_$LambdaAdaptor__java_util_function_ToDoubleFunction_$JsFunction__void(/** ?function(T):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_ToDoubleFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_applyAsDouble__java_lang_Object__double(/** T */ arg0) {
  let /** ?function(T):number */ $function;
  return ($function = this.f_fn__java_util_function_ToDoubleFunction_$LambdaAdaptor, $function(arg0));
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
ToDoubleFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.ToDoubleFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ToDoubleFunction$$LambdaAdaptor.js.map
