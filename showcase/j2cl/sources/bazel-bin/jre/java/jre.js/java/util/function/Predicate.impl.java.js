goog.module('java.util.function.Predicate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $LambdaAdaptor = goog.forwardDeclare('java.util.function.Predicate.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @interface
 * @template T
 */
class Predicate {
 /** @nodts @template T_1 @return {Predicate<T_1>} */
 static m_isEqual__java_lang_Object__java_util_function_Predicate(/** * */ targetRef) {
  Predicate.$clinit();
  return $Equality.$same(targetRef, null) ? Predicate.$adapt((/** T_1 */ arg0) =>{
   return Objects.m_isNull__java_lang_Object__boolean(arg0);
  }) : Predicate.$adapt((/** T_1 */ arg0_1) =>{
   return $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(targetRef, arg0_1);
  });
 }
 /** @abstract @nodts @return {boolean} */
 m_test__java_lang_Object__boolean(/** T */ t) {}
 /** @abstract @nodts @return {Predicate<T>} */
 m_negate__java_util_function_Predicate() {}
 /** @abstract @nodts @return {Predicate<T>} */
 m_and__java_util_function_Predicate__java_util_function_Predicate(/** Predicate<?> */ other) {}
 /** @abstract @nodts @return {Predicate<T>} */
 m_or__java_util_function_Predicate__java_util_function_Predicate(/** Predicate<?> */ other) {}
 /** @nodts @template T @return {Predicate<T>} */
 static $adapt(/** ?function(T):boolean */ fn) {
  Predicate.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T @return {Predicate<T>} */
 static m_negate__$default__java_util_function_Predicate__java_util_function_Predicate(/** !Predicate<T> */ $thisArg) {
  Predicate.$clinit();
  return Predicate.$adapt((/** T */ t) =>{
   return !$thisArg.m_test__java_lang_Object__boolean(t);
  });
 }
 /** @nodts @template T @return {Predicate<T>} */
 static m_and__$default__java_util_function_Predicate__java_util_function_Predicate__java_util_function_Predicate(/** !Predicate<T> */ $thisArg, /** Predicate<?> */ other) {
  Predicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return Predicate.$adapt((/** T */ t) =>{
   return $thisArg.m_test__java_lang_Object__boolean(t) && other.m_test__java_lang_Object__boolean(t);
  });
 }
 /** @nodts @template T @return {Predicate<T>} */
 static m_or__$default__java_util_function_Predicate__java_util_function_Predicate__java_util_function_Predicate(/** !Predicate<T> */ $thisArg, /** Predicate<?> */ other) {
  Predicate.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(other);
  return Predicate.$adapt((/** T */ t) =>{
   return $thisArg.m_test__java_lang_Object__boolean(t) || other.m_test__java_lang_Object__boolean(t);
  });
 }
 /** @nodts */
 static $clinit() {
  Predicate.$clinit = () =>{};
  Predicate.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_Predicate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_Predicate;
 }
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  $LambdaAdaptor = goog.module.get('java.util.function.Predicate.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Predicate.$markImplementor(/**@type {Function}*/ (Predicate));
$Util.$setClassMetadataForInterface(Predicate, 'java.util.function.Predicate');

exports = Predicate;

//# sourceMappingURL=Predicate.js.map
