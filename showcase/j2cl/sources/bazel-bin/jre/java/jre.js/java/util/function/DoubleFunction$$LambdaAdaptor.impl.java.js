goog.module('java.util.function.DoubleFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const DoubleFunction = goog.require('java.util.function.DoubleFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template R
 * @implements {DoubleFunction<R>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):R */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):R} @nodts*/
  this.f_fn__java_util_function_DoubleFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_DoubleFunction_$LambdaAdaptor__java_util_function_DoubleFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_DoubleFunction_$LambdaAdaptor__java_util_function_DoubleFunction_$JsFunction__void(/** ?function(number):R */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_DoubleFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {R} */
 m_apply__double__java_lang_Object(/** number */ arg0) {
  let /** ?function(number):R */ $function;
  return ($function = this.f_fn__java_util_function_DoubleFunction_$LambdaAdaptor, $function(arg0));
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
DoubleFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.DoubleFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DoubleFunction$$LambdaAdaptor.js.map
