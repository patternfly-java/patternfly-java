goog.module('java.util.function.ToIntFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.ToIntFunction.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class ToIntFunction {
 /** @abstract @nodts @return {number} */
 m_applyAsInt__java_lang_Object__int(/** T */ value) {}
 /** @nodts @template T @return {ToIntFunction<T>} */
 static $adapt(/** ?function(T):number */ fn) {
  ToIntFunction.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ToIntFunction.$clinit = () =>{};
  ToIntFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_ToIntFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_ToIntFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.ToIntFunction.$LambdaAdaptor$impl');
 }
}
ToIntFunction.$markImplementor(/**@type {Function}*/ (ToIntFunction));
$Util.$setClassMetadataForInterface(ToIntFunction, 'java.util.function.ToIntFunction');

exports = ToIntFunction;

//# sourceMappingURL=ToIntFunction.js.map
