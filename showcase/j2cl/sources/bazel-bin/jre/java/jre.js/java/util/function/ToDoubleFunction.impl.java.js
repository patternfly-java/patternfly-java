goog.module('java.util.function.ToDoubleFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.ToDoubleFunction.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class ToDoubleFunction {
 /** @abstract @nodts @return {number} */
 m_applyAsDouble__java_lang_Object__double(/** T */ value) {}
 /** @nodts @template T @return {ToDoubleFunction<T>} */
 static $adapt(/** ?function(T):number */ fn) {
  ToDoubleFunction.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ToDoubleFunction.$clinit = () =>{};
  ToDoubleFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_ToDoubleFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_ToDoubleFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.ToDoubleFunction.$LambdaAdaptor$impl');
 }
}
ToDoubleFunction.$markImplementor(/**@type {Function}*/ (ToDoubleFunction));
$Util.$setClassMetadataForInterface(ToDoubleFunction, 'java.util.function.ToDoubleFunction');

exports = ToDoubleFunction;

//# sourceMappingURL=ToDoubleFunction.js.map
