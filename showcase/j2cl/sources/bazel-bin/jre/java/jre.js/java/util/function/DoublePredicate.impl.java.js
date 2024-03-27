goog.module('java.util.function.DoublePredicate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.DoublePredicate.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 */
class DoublePredicate {
 /** @abstract @nodts @return {boolean} */
 m_test__double__boolean(/** number */ value) {}
 /** @abstract @nodts @return {DoublePredicate} */
 m_negate__java_util_function_DoublePredicate() {}
 /** @abstract @nodts @return {DoublePredicate} */
 m_and__java_util_function_DoublePredicate__java_util_function_DoublePredicate(/** DoublePredicate */ other) {}
 /** @abstract @nodts @return {DoublePredicate} */
 m_or__java_util_function_DoublePredicate__java_util_function_DoublePredicate(/** DoublePredicate */ other) {}
 /** @nodts @return {DoublePredicate} */
 static $adapt(/** ?function(number):boolean */ fn) {
  DoublePredicate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {DoublePredicate} */
 static m_negate__$default__java_util_function_DoublePredicate__java_util_function_DoublePredicate(/** !DoublePredicate */ $thisArg) {
  DoublePredicate.$clinit();
  return DoublePredicate.$adapt((/** number */ value) =>{
   return !$thisArg.m_test__double__boolean(value);
  });
 }
 /** @nodts @return {DoublePredicate} */
 static m_and__$default__java_util_function_DoublePredicate__java_util_function_DoublePredicate__java_util_function_DoublePredicate(/** !DoublePredicate */ $thisArg, /** DoublePredicate */ other) {
  DoublePredicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return DoublePredicate.$adapt((/** number */ value) =>{
   return $thisArg.m_test__double__boolean(value) && other.m_test__double__boolean(value);
  });
 }
 /** @nodts @return {DoublePredicate} */
 static m_or__$default__java_util_function_DoublePredicate__java_util_function_DoublePredicate__java_util_function_DoublePredicate(/** !DoublePredicate */ $thisArg, /** DoublePredicate */ other) {
  DoublePredicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return DoublePredicate.$adapt((/** number */ value) =>{
   return $thisArg.m_test__double__boolean(value) || other.m_test__double__boolean(value);
  });
 }
 /** @nodts */
 static $clinit() {
  DoublePredicate.$clinit = () =>{};
  DoublePredicate.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_DoublePredicate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_DoublePredicate;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.DoublePredicate.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
DoublePredicate.$markImplementor(/**@type {Function}*/ (DoublePredicate));
$Util.$setClassMetadataForInterface(DoublePredicate, 'java.util.function.DoublePredicate');

exports = DoublePredicate;

//# sourceMappingURL=DoublePredicate.js.map
