goog.module('java.util.function.IntBinaryOperator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.IntBinaryOperator.$LambdaAdaptor$impl');

/**
 * @interface
 */
class IntBinaryOperator {
 /** @abstract @nodts @return {number} */
 m_applyAsInt__int__int__int(/** number */ left, /** number */ right) {}
 /** @nodts @return {IntBinaryOperator} */
 static $adapt(/** ?function(number, number):number */ fn) {
  IntBinaryOperator.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  IntBinaryOperator.$clinit = () =>{};
  IntBinaryOperator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_IntBinaryOperator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_IntBinaryOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.IntBinaryOperator.$LambdaAdaptor$impl');
 }
}
IntBinaryOperator.$markImplementor(/**@type {Function}*/ (IntBinaryOperator));
$Util.$setClassMetadataForInterface(IntBinaryOperator, 'java.util.function.IntBinaryOperator');

exports = IntBinaryOperator;

//# sourceMappingURL=IntBinaryOperator.js.map
