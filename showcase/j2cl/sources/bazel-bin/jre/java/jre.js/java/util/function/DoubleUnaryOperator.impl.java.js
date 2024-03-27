goog.module('java.util.function.DoubleUnaryOperator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.DoubleUnaryOperator.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 */
class DoubleUnaryOperator {
 /** @nodts @return {DoubleUnaryOperator} */
 static m_identity__java_util_function_DoubleUnaryOperator() {
  DoubleUnaryOperator.$clinit();
  return DoubleUnaryOperator.$adapt((/** number */ operand) =>{
   return operand;
  });
 }
 /** @abstract @nodts @return {number} */
 m_applyAsDouble__double__double(/** number */ operand) {}
 /** @abstract @nodts @return {DoubleUnaryOperator} */
 m_andThen__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator(/** DoubleUnaryOperator */ after) {}
 /** @abstract @nodts @return {DoubleUnaryOperator} */
 m_compose__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator(/** DoubleUnaryOperator */ before) {}
 /** @nodts @return {DoubleUnaryOperator} */
 static $adapt(/** ?function(number):number */ fn) {
  DoubleUnaryOperator.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {DoubleUnaryOperator} */
 static m_andThen__$default__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator(/** !DoubleUnaryOperator */ $thisArg, /** DoubleUnaryOperator */ after) {
  DoubleUnaryOperator.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return DoubleUnaryOperator.$adapt((/** number */ operand) =>{
   return after.m_applyAsDouble__double__double($thisArg.m_applyAsDouble__double__double(operand));
  });
 }
 /** @nodts @return {DoubleUnaryOperator} */
 static m_compose__$default__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator__java_util_function_DoubleUnaryOperator(/** !DoubleUnaryOperator */ $thisArg, /** DoubleUnaryOperator */ before) {
  DoubleUnaryOperator.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(before);
  return DoubleUnaryOperator.$adapt((/** number */ operand) =>{
   return $thisArg.m_applyAsDouble__double__double(before.m_applyAsDouble__double__double(operand));
  });
 }
 /** @nodts */
 static $clinit() {
  DoubleUnaryOperator.$clinit = () =>{};
  DoubleUnaryOperator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_DoubleUnaryOperator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_DoubleUnaryOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.DoubleUnaryOperator.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
DoubleUnaryOperator.$markImplementor(/**@type {Function}*/ (DoubleUnaryOperator));
$Util.$setClassMetadataForInterface(DoubleUnaryOperator, 'java.util.function.DoubleUnaryOperator');

exports = DoubleUnaryOperator;

//# sourceMappingURL=DoubleUnaryOperator.js.map
