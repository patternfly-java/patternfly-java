goog.module('java.util.function.LongToIntFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.LongToIntFunction.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class LongToIntFunction {
 /** @abstract @nodts @return {number} */
 m_applyAsInt__long__int(/** !$Long */ value) {}
 /** @nodts @return {LongToIntFunction} */
 static $adapt(/** ?function(!$Long):number */ fn) {
  LongToIntFunction.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  LongToIntFunction.$clinit = () =>{};
  LongToIntFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_LongToIntFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_LongToIntFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.LongToIntFunction.$LambdaAdaptor$impl');
 }
}
LongToIntFunction.$markImplementor(/**@type {Function}*/ (LongToIntFunction));
$Util.$setClassMetadataForInterface(LongToIntFunction, 'java.util.function.LongToIntFunction');

exports = LongToIntFunction;

//# sourceMappingURL=LongToIntFunction.js.map
