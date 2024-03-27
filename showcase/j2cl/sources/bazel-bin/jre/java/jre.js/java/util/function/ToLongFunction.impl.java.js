goog.module('java.util.function.ToLongFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.ToLongFunction.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 * @template T
 */
class ToLongFunction {
 /** @abstract @nodts @return {!$Long} */
 m_applyAsLong__java_lang_Object__long(/** T */ value) {}
 /** @nodts @template T @return {ToLongFunction<T>} */
 static $adapt(/** ?function(T):!$Long */ fn) {
  ToLongFunction.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ToLongFunction.$clinit = () =>{};
  ToLongFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_ToLongFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_ToLongFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.ToLongFunction.$LambdaAdaptor$impl');
 }
}
ToLongFunction.$markImplementor(/**@type {Function}*/ (ToLongFunction));
$Util.$setClassMetadataForInterface(ToLongFunction, 'java.util.function.ToLongFunction');

exports = ToLongFunction;

//# sourceMappingURL=ToLongFunction.js.map
