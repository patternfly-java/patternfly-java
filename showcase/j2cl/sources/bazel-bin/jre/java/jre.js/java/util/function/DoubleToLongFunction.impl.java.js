goog.module('java.util.function.DoubleToLongFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.DoubleToLongFunction.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class DoubleToLongFunction {
 /** @abstract @nodts @return {!$Long} */
 m_applyAsLong__double__long(/** number */ value) {}
 /** @nodts @return {DoubleToLongFunction} */
 static $adapt(/** ?function(number):!$Long */ fn) {
  DoubleToLongFunction.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  DoubleToLongFunction.$clinit = () =>{};
  DoubleToLongFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_DoubleToLongFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_DoubleToLongFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.DoubleToLongFunction.$LambdaAdaptor$impl');
 }
}
DoubleToLongFunction.$markImplementor(/**@type {Function}*/ (DoubleToLongFunction));
$Util.$setClassMetadataForInterface(DoubleToLongFunction, 'java.util.function.DoubleToLongFunction');

exports = DoubleToLongFunction;

//# sourceMappingURL=DoubleToLongFunction.js.map
