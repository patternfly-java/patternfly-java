goog.module('java.util.function.Function$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.Function.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template T, R
 */
class j_u_function_Function {
 /** @nodts @template T_1 @return {j_u_function_Function<T_1, T_1>} */
 static m_identity__java_util_function_Function() {
  j_u_function_Function.$clinit();
  return j_u_function_Function.$adapt((/** T_1 */ t) =>{
   return t;
  });
 }
 /** @abstract @nodts @return {R} */
 m_apply__java_lang_Object__java_lang_Object(/** T */ t) {}
 /** @abstract @nodts @template V @return {j_u_function_Function<T, V>} */
 m_andThen__java_util_function_Function__java_util_function_Function(/** j_u_function_Function<?, ?> */ after) {}
 /** @abstract @nodts @template V @return {j_u_function_Function<V, R>} */
 m_compose__java_util_function_Function__java_util_function_Function(/** j_u_function_Function<?, ?> */ before) {}
 /** @nodts @template T, R @return {j_u_function_Function<T, R>} */
 static $adapt(/** ?function(T):R */ fn) {
  j_u_function_Function.$clinit();
  return /**@type {!$LambdaAdaptor<T, R>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T, R, V @return {j_u_function_Function<T, V>} */
 static m_andThen__$default__java_util_function_Function__java_util_function_Function__java_util_function_Function(/** !j_u_function_Function<T, R> */ $thisArg, /** j_u_function_Function<?, ?> */ after) {
  j_u_function_Function.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return j_u_function_Function.$adapt((/** T */ t) =>{
   return after.m_apply__java_lang_Object__java_lang_Object($thisArg.m_apply__java_lang_Object__java_lang_Object(t));
  });
 }
 /** @nodts @template T, R, V @return {j_u_function_Function<V, R>} */
 static m_compose__$default__java_util_function_Function__java_util_function_Function__java_util_function_Function(/** !j_u_function_Function<T, R> */ $thisArg, /** j_u_function_Function<?, ?> */ before) {
  j_u_function_Function.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(before);
  return j_u_function_Function.$adapt((/** V */ t) =>{
   return $thisArg.m_apply__java_lang_Object__java_lang_Object(before.m_apply__java_lang_Object__java_lang_Object(t));
  });
 }
 /** @nodts */
 static $clinit() {
  j_u_function_Function.$clinit = () =>{};
  j_u_function_Function.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_Function = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_Function;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.Function.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
j_u_function_Function.$markImplementor(/**@type {Function}*/ (j_u_function_Function));
$Util.$setClassMetadataForInterface(j_u_function_Function, 'java.util.function.Function');

exports = j_u_function_Function;

//# sourceMappingURL=Function.js.map
