goog.module('java.util.function.ToIntBiFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.ToIntBiFunction.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, U
 */
class ToIntBiFunction {
 /** @abstract @nodts @return {number} */
 m_applyAsInt__java_lang_Object__java_lang_Object__int(/** T */ t, /** U */ u) {}
 /** @nodts @template T, U @return {ToIntBiFunction<T, U>} */
 static $adapt(/** ?function(T, U):number */ fn) {
  ToIntBiFunction.$clinit();
  return /**@type {!$LambdaAdaptor<T, U>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ToIntBiFunction.$clinit = () =>{};
  ToIntBiFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_ToIntBiFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_ToIntBiFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.ToIntBiFunction.$LambdaAdaptor$impl');
 }
}
ToIntBiFunction.$markImplementor(/**@type {Function}*/ (ToIntBiFunction));
$Util.$setClassMetadataForInterface(ToIntBiFunction, 'java.util.function.ToIntBiFunction');

exports = ToIntBiFunction;

//# sourceMappingURL=ToIntBiFunction.js.map
