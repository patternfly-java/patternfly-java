goog.module('java.util.function.DoubleToIntFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.DoubleToIntFunction.$LambdaAdaptor$impl');

/**
 * @interface
 */
class DoubleToIntFunction {
 /** @abstract @nodts @return {number} */
 m_applyAsInt__double__int(/** number */ value) {}
 /** @nodts @return {DoubleToIntFunction} */
 static $adapt(/** ?function(number):number */ fn) {
  DoubleToIntFunction.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  DoubleToIntFunction.$clinit = () =>{};
  DoubleToIntFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_DoubleToIntFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_DoubleToIntFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.DoubleToIntFunction.$LambdaAdaptor$impl');
 }
}
DoubleToIntFunction.$markImplementor(/**@type {Function}*/ (DoubleToIntFunction));
$Util.$setClassMetadataForInterface(DoubleToIntFunction, 'java.util.function.DoubleToIntFunction');

exports = DoubleToIntFunction;

//# sourceMappingURL=DoubleToIntFunction.js.map
