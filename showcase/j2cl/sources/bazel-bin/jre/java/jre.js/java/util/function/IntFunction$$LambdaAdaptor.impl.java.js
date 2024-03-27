goog.module('java.util.function.IntFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntFunction = goog.require('java.util.function.IntFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template R
 * @implements {IntFunction<R>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):R */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):R} @nodts*/
  this.f_fn__java_util_function_IntFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_IntFunction_$LambdaAdaptor__java_util_function_IntFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_IntFunction_$LambdaAdaptor__java_util_function_IntFunction_$JsFunction__void(/** ?function(number):R */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_IntFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {R} */
 m_apply__int__java_lang_Object(/** number */ arg0) {
  let /** ?function(number):R */ $function;
  return ($function = this.f_fn__java_util_function_IntFunction_$LambdaAdaptor, $function(arg0));
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
IntFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.IntFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=IntFunction$$LambdaAdaptor.js.map
