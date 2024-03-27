goog.module('java.util.function.ToIntFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ToIntFunction = goog.require('java.util.function.ToIntFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
 * @implements {ToIntFunction<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):number} @nodts*/
  this.f_fn__java_util_function_ToIntFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_ToIntFunction_$LambdaAdaptor__java_util_function_ToIntFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_ToIntFunction_$LambdaAdaptor__java_util_function_ToIntFunction_$JsFunction__void(/** ?function(T):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_ToIntFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_applyAsInt__java_lang_Object__int(/** T */ arg0) {
  let /** ?function(T):number */ $function;
  return ($function = this.f_fn__java_util_function_ToIntFunction_$LambdaAdaptor, $function(arg0));
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
ToIntFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.ToIntFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ToIntFunction$$LambdaAdaptor.js.map
