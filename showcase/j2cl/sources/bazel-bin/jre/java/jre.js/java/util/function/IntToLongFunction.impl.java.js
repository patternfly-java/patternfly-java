goog.module('java.util.function.IntToLongFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.IntToLongFunction.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class IntToLongFunction {
 /** @abstract @nodts @return {!$Long} */
 m_applyAsLong__int__long(/** number */ value) {}
 /** @nodts @return {IntToLongFunction} */
 static $adapt(/** ?function(number):!$Long */ fn) {
  IntToLongFunction.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  IntToLongFunction.$clinit = () =>{};
  IntToLongFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_IntToLongFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_IntToLongFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.IntToLongFunction.$LambdaAdaptor$impl');
 }
}
IntToLongFunction.$markImplementor(/**@type {Function}*/ (IntToLongFunction));
$Util.$setClassMetadataForInterface(IntToLongFunction, 'java.util.function.IntToLongFunction');

exports = IntToLongFunction;

//# sourceMappingURL=IntToLongFunction.js.map
