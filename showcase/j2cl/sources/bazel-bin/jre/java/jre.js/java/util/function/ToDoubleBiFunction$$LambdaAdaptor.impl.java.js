goog.module('java.util.function.ToDoubleBiFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ToDoubleBiFunction = goog.require('java.util.function.ToDoubleBiFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T, U
 * @implements {ToDoubleBiFunction<T, U>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, U):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, U):number} @nodts*/
  this.f_fn__java_util_function_ToDoubleBiFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_ToDoubleBiFunction_$LambdaAdaptor__java_util_function_ToDoubleBiFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_ToDoubleBiFunction_$LambdaAdaptor__java_util_function_ToDoubleBiFunction_$JsFunction__void(/** ?function(T, U):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_ToDoubleBiFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_applyAsDouble__java_lang_Object__java_lang_Object__double(/** T */ arg0, /** U */ arg1) {
  let /** ?function(T, U):number */ $function;
  return ($function = this.f_fn__java_util_function_ToDoubleBiFunction_$LambdaAdaptor, $function(arg0, arg1));
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
ToDoubleBiFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.ToDoubleBiFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ToDoubleBiFunction$$LambdaAdaptor.js.map
