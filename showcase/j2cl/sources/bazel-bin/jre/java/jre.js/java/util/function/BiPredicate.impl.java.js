goog.module('java.util.function.BiPredicate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.BiPredicate.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template T, U
 */
class BiPredicate {
 /** @abstract @nodts @return {boolean} */
 m_test__java_lang_Object__java_lang_Object__boolean(/** T */ t, /** U */ u) {}
 /** @abstract @nodts @return {BiPredicate<T, U>} */
 m_negate__java_util_function_BiPredicate() {}
 /** @abstract @nodts @return {BiPredicate<T, U>} */
 m_and__java_util_function_BiPredicate__java_util_function_BiPredicate(/** BiPredicate<?, ?> */ other) {}
 /** @abstract @nodts @return {BiPredicate<T, U>} */
 m_or__java_util_function_BiPredicate__java_util_function_BiPredicate(/** BiPredicate<?, ?> */ other) {}
 /** @nodts @template T, U @return {BiPredicate<T, U>} */
 static $adapt(/** ?function(T, U):boolean */ fn) {
  BiPredicate.$clinit();
  return /**@type {!$LambdaAdaptor<T, U>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T, U @return {BiPredicate<T, U>} */
 static m_negate__$default__java_util_function_BiPredicate__java_util_function_BiPredicate(/** !BiPredicate<T, U> */ $thisArg) {
  BiPredicate.$clinit();
  return BiPredicate.$adapt((/** T */ t, /** U */ u) =>{
   return !$thisArg.m_test__java_lang_Object__java_lang_Object__boolean(t, u);
  });
 }
 /** @nodts @template T, U @return {BiPredicate<T, U>} */
 static m_and__$default__java_util_function_BiPredicate__java_util_function_BiPredicate__java_util_function_BiPredicate(/** !BiPredicate<T, U> */ $thisArg, /** BiPredicate<?, ?> */ other) {
  BiPredicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return BiPredicate.$adapt((/** T */ t, /** U */ u) =>{
   return $thisArg.m_test__java_lang_Object__java_lang_Object__boolean(t, u) && other.m_test__java_lang_Object__java_lang_Object__boolean(t, u);
  });
 }
 /** @nodts @template T, U @return {BiPredicate<T, U>} */
 static m_or__$default__java_util_function_BiPredicate__java_util_function_BiPredicate__java_util_function_BiPredicate(/** !BiPredicate<T, U> */ $thisArg, /** BiPredicate<?, ?> */ other) {
  BiPredicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return BiPredicate.$adapt((/** T */ t, /** U */ u) =>{
   return $thisArg.m_test__java_lang_Object__java_lang_Object__boolean(t, u) || other.m_test__java_lang_Object__java_lang_Object__boolean(t, u);
  });
 }
 /** @nodts */
 static $clinit() {
  BiPredicate.$clinit = () =>{};
  BiPredicate.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_BiPredicate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_BiPredicate;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.BiPredicate.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
BiPredicate.$markImplementor(/**@type {Function}*/ (BiPredicate));
$Util.$setClassMetadataForInterface(BiPredicate, 'java.util.function.BiPredicate');

exports = BiPredicate;

//# sourceMappingURL=BiPredicate.js.map
