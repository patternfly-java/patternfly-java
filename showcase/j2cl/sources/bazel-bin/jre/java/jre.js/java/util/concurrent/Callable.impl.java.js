goog.module('java.util.concurrent.Callable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.concurrent.Callable.$LambdaAdaptor$impl');

/**
 * @interface
 * @template V
 */
class Callable {
 /** @abstract @nodts @return {V} */
 m_call__java_lang_Object() {}
 /** @nodts @template V @return {Callable<V>} */
 static $adapt(/** ?function():V */ fn) {
  Callable.$clinit();
  return /**@type {!$LambdaAdaptor<V>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Callable.$clinit = () =>{};
  Callable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_concurrent_Callable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_Callable;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.concurrent.Callable.$LambdaAdaptor$impl');
 }
}
Callable.$markImplementor(/**@type {Function}*/ (Callable));
$Util.$setClassMetadataForInterface(Callable, 'java.util.concurrent.Callable');

exports = Callable;

//# sourceMappingURL=Callable.js.map
