goog.module('java.util.function.ToLongBiFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.ToLongBiFunction.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 * @template T, U
 */
class ToLongBiFunction {
 /** @abstract @nodts @return {!$Long} */
 m_applyAsLong__java_lang_Object__java_lang_Object__long(/** T */ t, /** U */ u) {}
 /** @nodts @template T, U @return {ToLongBiFunction<T, U>} */
 static $adapt(/** ?function(T, U):!$Long */ fn) {
  ToLongBiFunction.$clinit();
  return /**@type {!$LambdaAdaptor<T, U>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ToLongBiFunction.$clinit = () =>{};
  ToLongBiFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_ToLongBiFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_ToLongBiFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.ToLongBiFunction.$LambdaAdaptor$impl');
 }
}
ToLongBiFunction.$markImplementor(/**@type {Function}*/ (ToLongBiFunction));
$Util.$setClassMetadataForInterface(ToLongBiFunction, 'java.util.function.ToLongBiFunction');

exports = ToLongBiFunction;

//# sourceMappingURL=ToLongBiFunction.js.map
