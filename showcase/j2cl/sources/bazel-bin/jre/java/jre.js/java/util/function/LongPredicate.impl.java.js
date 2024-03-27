goog.module('java.util.function.LongPredicate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.LongPredicate.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class LongPredicate {
 /** @abstract @nodts @return {boolean} */
 m_test__long__boolean(/** !$Long */ value) {}
 /** @abstract @nodts @return {LongPredicate} */
 m_negate__java_util_function_LongPredicate() {}
 /** @abstract @nodts @return {LongPredicate} */
 m_and__java_util_function_LongPredicate__java_util_function_LongPredicate(/** LongPredicate */ other) {}
 /** @abstract @nodts @return {LongPredicate} */
 m_or__java_util_function_LongPredicate__java_util_function_LongPredicate(/** LongPredicate */ other) {}
 /** @nodts @return {LongPredicate} */
 static $adapt(/** ?function(!$Long):boolean */ fn) {
  LongPredicate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {LongPredicate} */
 static m_negate__$default__java_util_function_LongPredicate__java_util_function_LongPredicate(/** !LongPredicate */ $thisArg) {
  LongPredicate.$clinit();
  return LongPredicate.$adapt((/** !$Long */ value) =>{
   return !$thisArg.m_test__long__boolean(value);
  });
 }
 /** @nodts @return {LongPredicate} */
 static m_and__$default__java_util_function_LongPredicate__java_util_function_LongPredicate__java_util_function_LongPredicate(/** !LongPredicate */ $thisArg, /** LongPredicate */ other) {
  LongPredicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return LongPredicate.$adapt((/** !$Long */ value) =>{
   return $thisArg.m_test__long__boolean(value) && other.m_test__long__boolean(value);
  });
 }
 /** @nodts @return {LongPredicate} */
 static m_or__$default__java_util_function_LongPredicate__java_util_function_LongPredicate__java_util_function_LongPredicate(/** !LongPredicate */ $thisArg, /** LongPredicate */ other) {
  LongPredicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return LongPredicate.$adapt((/** !$Long */ value) =>{
   return $thisArg.m_test__long__boolean(value) || other.m_test__long__boolean(value);
  });
 }
 /** @nodts */
 static $clinit() {
  LongPredicate.$clinit = () =>{};
  LongPredicate.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_LongPredicate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_LongPredicate;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.LongPredicate.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
LongPredicate.$markImplementor(/**@type {Function}*/ (LongPredicate));
$Util.$setClassMetadataForInterface(LongPredicate, 'java.util.function.LongPredicate');

exports = LongPredicate;

//# sourceMappingURL=LongPredicate.js.map
