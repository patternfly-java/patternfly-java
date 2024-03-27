goog.module('java.util.function.BiFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.BiFunction.$LambdaAdaptor$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template T, U, R
 */
class BiFunction {
 /** @abstract @nodts @return {R} */
 m_apply__java_lang_Object__java_lang_Object__java_lang_Object(/** T */ t, /** U */ u) {}
 /** @abstract @nodts @template V @return {BiFunction<T, U, V>} */
 m_andThen__java_util_function_Function__java_util_function_BiFunction(/** j_u_function_Function<?, ?> */ after) {}
 /** @nodts @template T, U, R @return {BiFunction<T, U, R>} */
 static $adapt(/** ?function(T, U):R */ fn) {
  BiFunction.$clinit();
  return /**@type {!$LambdaAdaptor<T, U, R>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T, U, R, V @return {BiFunction<T, U, V>} */
 static m_andThen__$default__java_util_function_BiFunction__java_util_function_Function__java_util_function_BiFunction(/** !BiFunction<T, U, R> */ $thisArg, /** j_u_function_Function<?, ?> */ after) {
  BiFunction.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return BiFunction.$adapt((/** T */ t, /** U */ u) =>{
   return after.m_apply__java_lang_Object__java_lang_Object($thisArg.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(t, u));
  });
 }
 /** @nodts */
 static $clinit() {
  BiFunction.$clinit = () =>{};
  BiFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_BiFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_BiFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.BiFunction.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
BiFunction.$markImplementor(/**@type {Function}*/ (BiFunction));
$Util.$setClassMetadataForInterface(BiFunction, 'java.util.function.BiFunction');

exports = BiFunction;

//# sourceMappingURL=BiFunction.js.map
