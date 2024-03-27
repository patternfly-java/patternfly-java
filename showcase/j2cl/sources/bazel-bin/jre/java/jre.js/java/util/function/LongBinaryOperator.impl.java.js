goog.module('java.util.function.LongBinaryOperator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.LongBinaryOperator.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class LongBinaryOperator {
 /** @abstract @nodts @return {!$Long} */
 m_applyAsLong__long__long__long(/** !$Long */ left, /** !$Long */ right) {}
 /** @nodts @return {LongBinaryOperator} */
 static $adapt(/** ?function(!$Long, !$Long):!$Long */ fn) {
  LongBinaryOperator.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  LongBinaryOperator.$clinit = () =>{};
  LongBinaryOperator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_LongBinaryOperator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_LongBinaryOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.LongBinaryOperator.$LambdaAdaptor$impl');
 }
}
LongBinaryOperator.$markImplementor(/**@type {Function}*/ (LongBinaryOperator));
$Util.$setClassMetadataForInterface(LongBinaryOperator, 'java.util.function.LongBinaryOperator');

exports = LongBinaryOperator;

//# sourceMappingURL=LongBinaryOperator.js.map
