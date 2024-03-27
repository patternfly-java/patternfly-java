goog.module('java.util.function.LongUnaryOperator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.LongUnaryOperator.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class LongUnaryOperator {
 /** @nodts @return {LongUnaryOperator} */
 static m_identity__java_util_function_LongUnaryOperator() {
  LongUnaryOperator.$clinit();
  return LongUnaryOperator.$adapt((/** !$Long */ operand) =>{
   return operand;
  });
 }
 /** @abstract @nodts @return {!$Long} */
 m_applyAsLong__long__long(/** !$Long */ operand) {}
 /** @abstract @nodts @return {LongUnaryOperator} */
 m_andThen__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator(/** LongUnaryOperator */ after) {}
 /** @abstract @nodts @return {LongUnaryOperator} */
 m_compose__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator(/** LongUnaryOperator */ before) {}
 /** @nodts @return {LongUnaryOperator} */
 static $adapt(/** ?function(!$Long):!$Long */ fn) {
  LongUnaryOperator.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {LongUnaryOperator} */
 static m_andThen__$default__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator(/** !LongUnaryOperator */ $thisArg, /** LongUnaryOperator */ after) {
  LongUnaryOperator.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return LongUnaryOperator.$adapt((/** !$Long */ operand) =>{
   return after.m_applyAsLong__long__long($thisArg.m_applyAsLong__long__long(operand));
  });
 }
 /** @nodts @return {LongUnaryOperator} */
 static m_compose__$default__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator(/** !LongUnaryOperator */ $thisArg, /** LongUnaryOperator */ before) {
  LongUnaryOperator.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(before);
  return LongUnaryOperator.$adapt((/** !$Long */ operand) =>{
   return $thisArg.m_applyAsLong__long__long(before.m_applyAsLong__long__long(operand));
  });
 }
 /** @nodts */
 static $clinit() {
  LongUnaryOperator.$clinit = () =>{};
  LongUnaryOperator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_LongUnaryOperator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_LongUnaryOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.LongUnaryOperator.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
LongUnaryOperator.$markImplementor(/**@type {Function}*/ (LongUnaryOperator));
$Util.$setClassMetadataForInterface(LongUnaryOperator, 'java.util.function.LongUnaryOperator');

exports = LongUnaryOperator;

//# sourceMappingURL=LongUnaryOperator.js.map
