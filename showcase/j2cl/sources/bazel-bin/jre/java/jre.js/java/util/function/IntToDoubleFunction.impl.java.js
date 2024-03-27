goog.module('java.util.function.IntToDoubleFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.IntToDoubleFunction.$LambdaAdaptor$impl');

/**
 * @interface
 */
class IntToDoubleFunction {
 /** @abstract @nodts @return {number} */
 m_applyAsDouble__int__double(/** number */ value) {}
 /** @nodts @return {IntToDoubleFunction} */
 static $adapt(/** ?function(number):number */ fn) {
  IntToDoubleFunction.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  IntToDoubleFunction.$clinit = () =>{};
  IntToDoubleFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_IntToDoubleFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_IntToDoubleFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.IntToDoubleFunction.$LambdaAdaptor$impl');
 }
}
IntToDoubleFunction.$markImplementor(/**@type {Function}*/ (IntToDoubleFunction));
$Util.$setClassMetadataForInterface(IntToDoubleFunction, 'java.util.function.IntToDoubleFunction');

exports = IntToDoubleFunction;

//# sourceMappingURL=IntToDoubleFunction.js.map
