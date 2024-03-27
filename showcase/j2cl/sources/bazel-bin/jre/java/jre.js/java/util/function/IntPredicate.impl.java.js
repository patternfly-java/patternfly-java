goog.module('java.util.function.IntPredicate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.IntPredicate.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 */
class IntPredicate {
 /** @abstract @nodts @return {boolean} */
 m_test__int__boolean(/** number */ value) {}
 /** @abstract @nodts @return {IntPredicate} */
 m_negate__java_util_function_IntPredicate() {}
 /** @abstract @nodts @return {IntPredicate} */
 m_and__java_util_function_IntPredicate__java_util_function_IntPredicate(/** IntPredicate */ other) {}
 /** @abstract @nodts @return {IntPredicate} */
 m_or__java_util_function_IntPredicate__java_util_function_IntPredicate(/** IntPredicate */ other) {}
 /** @nodts @return {IntPredicate} */
 static $adapt(/** ?function(number):boolean */ fn) {
  IntPredicate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {IntPredicate} */
 static m_negate__$default__java_util_function_IntPredicate__java_util_function_IntPredicate(/** !IntPredicate */ $thisArg) {
  IntPredicate.$clinit();
  return IntPredicate.$adapt((/** number */ value) =>{
   return !$thisArg.m_test__int__boolean(value);
  });
 }
 /** @nodts @return {IntPredicate} */
 static m_and__$default__java_util_function_IntPredicate__java_util_function_IntPredicate__java_util_function_IntPredicate(/** !IntPredicate */ $thisArg, /** IntPredicate */ other) {
  IntPredicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return IntPredicate.$adapt((/** number */ value) =>{
   return $thisArg.m_test__int__boolean(value) && other.m_test__int__boolean(value);
  });
 }
 /** @nodts @return {IntPredicate} */
 static m_or__$default__java_util_function_IntPredicate__java_util_function_IntPredicate__java_util_function_IntPredicate(/** !IntPredicate */ $thisArg, /** IntPredicate */ other) {
  IntPredicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return IntPredicate.$adapt((/** number */ value) =>{
   return $thisArg.m_test__int__boolean(value) || other.m_test__int__boolean(value);
  });
 }
 /** @nodts */
 static $clinit() {
  IntPredicate.$clinit = () =>{};
  IntPredicate.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_IntPredicate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_IntPredicate;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.IntPredicate.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
IntPredicate.$markImplementor(/**@type {Function}*/ (IntPredicate));
$Util.$setClassMetadataForInterface(IntPredicate, 'java.util.function.IntPredicate');

exports = IntPredicate;

//# sourceMappingURL=IntPredicate.js.map
