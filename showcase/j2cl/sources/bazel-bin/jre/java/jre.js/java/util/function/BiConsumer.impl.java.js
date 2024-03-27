goog.module('java.util.function.BiConsumer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.BiConsumer.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template T, U
 */
class BiConsumer {
 /** @abstract @nodts */
 m_accept__java_lang_Object__java_lang_Object__void(/** T */ t, /** U */ u) {}
 /** @abstract @nodts @return {BiConsumer<T, U>} */
 m_andThen__java_util_function_BiConsumer__java_util_function_BiConsumer(/** BiConsumer<?, ?> */ after) {}
 /** @nodts @template T, U @return {BiConsumer<T, U>} */
 static $adapt(/** ?function(T, U):void */ fn) {
  BiConsumer.$clinit();
  return /**@type {!$LambdaAdaptor<T, U>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T, U @return {BiConsumer<T, U>} */
 static m_andThen__$default__java_util_function_BiConsumer__java_util_function_BiConsumer__java_util_function_BiConsumer(/** !BiConsumer<T, U> */ $thisArg, /** BiConsumer<?, ?> */ after) {
  BiConsumer.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return BiConsumer.$adapt((/** T */ t, /** U */ u) =>{
   $thisArg.m_accept__java_lang_Object__java_lang_Object__void(t, u);
   after.m_accept__java_lang_Object__java_lang_Object__void(t, u);
  });
 }
 /** @nodts */
 static $clinit() {
  BiConsumer.$clinit = () =>{};
  BiConsumer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_BiConsumer = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_BiConsumer;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.BiConsumer.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
BiConsumer.$markImplementor(/**@type {Function}*/ (BiConsumer));
$Util.$setClassMetadataForInterface(BiConsumer, 'java.util.function.BiConsumer');

exports = BiConsumer;

//# sourceMappingURL=BiConsumer.js.map
