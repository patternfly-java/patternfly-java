goog.module('java.util.function.ToDoubleBiFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.ToDoubleBiFunction.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, U
 */
class ToDoubleBiFunction {
 /** @abstract @nodts @return {number} */
 m_applyAsDouble__java_lang_Object__java_lang_Object__double(/** T */ t, /** U */ u) {}
 /** @nodts @template T, U @return {ToDoubleBiFunction<T, U>} */
 static $adapt(/** ?function(T, U):number */ fn) {
  ToDoubleBiFunction.$clinit();
  return /**@type {!$LambdaAdaptor<T, U>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ToDoubleBiFunction.$clinit = () =>{};
  ToDoubleBiFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_ToDoubleBiFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_ToDoubleBiFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.ToDoubleBiFunction.$LambdaAdaptor$impl');
 }
}
ToDoubleBiFunction.$markImplementor(/**@type {Function}*/ (ToDoubleBiFunction));
$Util.$setClassMetadataForInterface(ToDoubleBiFunction, 'java.util.function.ToDoubleBiFunction');

exports = ToDoubleBiFunction;

//# sourceMappingURL=ToDoubleBiFunction.js.map
