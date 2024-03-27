goog.module('java.util.function.ToLongBiFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ToLongBiFunction = goog.require('java.util.function.ToLongBiFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @template T, U
 * @implements {ToLongBiFunction<T, U>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, U):!$Long */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, U):!$Long} @nodts*/
  this.f_fn__java_util_function_ToLongBiFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_ToLongBiFunction_$LambdaAdaptor__java_util_function_ToLongBiFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_ToLongBiFunction_$LambdaAdaptor__java_util_function_ToLongBiFunction_$JsFunction__void(/** ?function(T, U):!$Long */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_ToLongBiFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {!$Long} */
 m_applyAsLong__java_lang_Object__java_lang_Object__long(/** T */ arg0, /** U */ arg1) {
  let /** ?function(T, U):!$Long */ $function;
  return ($function = this.f_fn__java_util_function_ToLongBiFunction_$LambdaAdaptor, $function(arg0, arg1));
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
ToLongBiFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.ToLongBiFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ToLongBiFunction$$LambdaAdaptor.js.map
