goog.module('java.util.function.IntFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.IntFunction.$LambdaAdaptor$impl');

/**
 * @interface
 * @template R
 */
class IntFunction {
 /** @abstract @nodts @return {R} */
 m_apply__int__java_lang_Object(/** number */ value) {}
 /** @nodts @template R @return {IntFunction<R>} */
 static $adapt(/** ?function(number):R */ fn) {
  IntFunction.$clinit();
  return /**@type {!$LambdaAdaptor<R>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  IntFunction.$clinit = () =>{};
  IntFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_IntFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_IntFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.IntFunction.$LambdaAdaptor$impl');
 }
}
IntFunction.$markImplementor(/**@type {Function}*/ (IntFunction));
$Util.$setClassMetadataForInterface(IntFunction, 'java.util.function.IntFunction');

exports = IntFunction;

//# sourceMappingURL=IntFunction.js.map
