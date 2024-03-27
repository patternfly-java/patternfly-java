goog.module('java.util.concurrent.Executor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let $LambdaAdaptor = goog.forwardDeclare('java.util.concurrent.Executor.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Executor {
 /** @abstract @nodts */
 m_execute__java_lang_Runnable__void(/** Runnable */ command) {}
 /** @nodts @return {Executor} */
 static $adapt(/** ?function(Runnable):void */ fn) {
  Executor.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Executor.$clinit = () =>{};
  Executor.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_concurrent_Executor = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_Executor;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.concurrent.Executor.$LambdaAdaptor$impl');
 }
}
Executor.$markImplementor(/**@type {Function}*/ (Executor));
$Util.$setClassMetadataForInterface(Executor, 'java.util.concurrent.Executor');

exports = Executor;

//# sourceMappingURL=Executor.js.map
