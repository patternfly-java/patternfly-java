goog.module('java.util.function.DoubleFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.DoubleFunction.$LambdaAdaptor$impl');

/**
 * @interface
 * @template R
 */
class DoubleFunction {
 /** @abstract @nodts @return {R} */
 m_apply__double__java_lang_Object(/** number */ value) {}
 /** @nodts @template R @return {DoubleFunction<R>} */
 static $adapt(/** ?function(number):R */ fn) {
  DoubleFunction.$clinit();
  return /**@type {!$LambdaAdaptor<R>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  DoubleFunction.$clinit = () =>{};
  DoubleFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_DoubleFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_DoubleFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.DoubleFunction.$LambdaAdaptor$impl');
 }
}
DoubleFunction.$markImplementor(/**@type {Function}*/ (DoubleFunction));
$Util.$setClassMetadataForInterface(DoubleFunction, 'java.util.function.DoubleFunction');

exports = DoubleFunction;

//# sourceMappingURL=DoubleFunction.js.map
