goog.module('java.util.function.IntUnaryOperator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.IntUnaryOperator.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 */
class IntUnaryOperator {
 /** @nodts @return {IntUnaryOperator} */
 static m_identity__java_util_function_IntUnaryOperator() {
  IntUnaryOperator.$clinit();
  return IntUnaryOperator.$adapt((/** number */ operand) =>{
   return operand;
  });
 }
 /** @abstract @nodts @return {number} */
 m_applyAsInt__int__int(/** number */ operand) {}
 /** @abstract @nodts @return {IntUnaryOperator} */
 m_andThen__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator(/** IntUnaryOperator */ after) {}
 /** @abstract @nodts @return {IntUnaryOperator} */
 m_compose__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator(/** IntUnaryOperator */ before) {}
 /** @nodts @return {IntUnaryOperator} */
 static $adapt(/** ?function(number):number */ fn) {
  IntUnaryOperator.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {IntUnaryOperator} */
 static m_andThen__$default__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator(/** !IntUnaryOperator */ $thisArg, /** IntUnaryOperator */ after) {
  IntUnaryOperator.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return IntUnaryOperator.$adapt((/** number */ operand) =>{
   return after.m_applyAsInt__int__int($thisArg.m_applyAsInt__int__int(operand));
  });
 }
 /** @nodts @return {IntUnaryOperator} */
 static m_compose__$default__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator__java_util_function_IntUnaryOperator(/** !IntUnaryOperator */ $thisArg, /** IntUnaryOperator */ before) {
  IntUnaryOperator.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(before);
  return IntUnaryOperator.$adapt((/** number */ operand) =>{
   return $thisArg.m_applyAsInt__int__int(before.m_applyAsInt__int__int(operand));
  });
 }
 /** @nodts */
 static $clinit() {
  IntUnaryOperator.$clinit = () =>{};
  IntUnaryOperator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_IntUnaryOperator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_IntUnaryOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.IntUnaryOperator.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
IntUnaryOperator.$markImplementor(/**@type {Function}*/ (IntUnaryOperator));
$Util.$setClassMetadataForInterface(IntUnaryOperator, 'java.util.function.IntUnaryOperator');

exports = IntUnaryOperator;

//# sourceMappingURL=IntUnaryOperator.js.map
