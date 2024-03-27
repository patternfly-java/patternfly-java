goog.module('java.util.function.LongFunction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.LongFunction.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 * @template R
 */
class LongFunction {
 /** @abstract @nodts @return {R} */
 m_apply__long__java_lang_Object(/** !$Long */ value) {}
 /** @nodts @template R @return {LongFunction<R>} */
 static $adapt(/** ?function(!$Long):R */ fn) {
  LongFunction.$clinit();
  return /**@type {!$LambdaAdaptor<R>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  LongFunction.$clinit = () =>{};
  LongFunction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_LongFunction = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_LongFunction;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.LongFunction.$LambdaAdaptor$impl');
 }
}
LongFunction.$markImplementor(/**@type {Function}*/ (LongFunction));
$Util.$setClassMetadataForInterface(LongFunction, 'java.util.function.LongFunction');

exports = LongFunction;

//# sourceMappingURL=LongFunction.js.map
