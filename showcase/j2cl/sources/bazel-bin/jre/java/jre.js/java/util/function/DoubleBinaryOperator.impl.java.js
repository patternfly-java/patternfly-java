goog.module('java.util.function.DoubleBinaryOperator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.DoubleBinaryOperator.$LambdaAdaptor$impl');

/**
 * @interface
 */
class DoubleBinaryOperator {
 /** @abstract @nodts @return {number} */
 m_applyAsDouble__double__double__double(/** number */ left, /** number */ right) {}
 /** @nodts @return {DoubleBinaryOperator} */
 static $adapt(/** ?function(number, number):number */ fn) {
  DoubleBinaryOperator.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  DoubleBinaryOperator.$clinit = () =>{};
  DoubleBinaryOperator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_DoubleBinaryOperator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_DoubleBinaryOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.DoubleBinaryOperator.$LambdaAdaptor$impl');
 }
}
DoubleBinaryOperator.$markImplementor(/**@type {Function}*/ (DoubleBinaryOperator));
$Util.$setClassMetadataForInterface(DoubleBinaryOperator, 'java.util.function.DoubleBinaryOperator');

exports = DoubleBinaryOperator;

//# sourceMappingURL=DoubleBinaryOperator.js.map
