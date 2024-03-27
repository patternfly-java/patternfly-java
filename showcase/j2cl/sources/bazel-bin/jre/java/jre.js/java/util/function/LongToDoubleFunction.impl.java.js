goog.module('java.util.function.LongToDoubleFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.LongToDoubleFunction.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class LongToDoubleFunction {
 /** @abstract @nodts @return {number} */
 m_applyAsDouble__long__double(/** !$Long */ value) {}
 /** @nodts @return {LongToDoubleFunction} */
 static $adapt(/** ?function(!$Long):number */ fn) {
  LongToDoubleFunction.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  LongToDoubleFunction.$clinit = () =>{};
  LongToDoubleFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_LongToDoubleFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_LongToDoubleFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.LongToDoubleFunction.$LambdaAdaptor$impl');
 }
}
LongToDoubleFunction.$markImplementor(/**@type {Function}*/ (LongToDoubleFunction));
$Util.$setClassMetadataForInterface(LongToDoubleFunction, 'java.util.function.LongToDoubleFunction');

exports = LongToDoubleFunction;

//# sourceMappingURL=LongToDoubleFunction.js.map
