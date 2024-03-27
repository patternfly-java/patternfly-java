goog.module('java.lang.Runnable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.lang.Runnable.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Runnable {
 /** @abstract @nodts */
 m_run__void() {}
 /** @nodts @return {Runnable} */
 static $adapt(/** ?function():void */ fn) {
  Runnable.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Runnable.$clinit = () =>{};
  Runnable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_Runnable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_Runnable;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.lang.Runnable.$LambdaAdaptor$impl');
 }
}
Runnable.$markImplementor(/**@type {Function}*/ (Runnable));
$Util.$setClassMetadataForInterface(Runnable, 'java.lang.Runnable');

exports = Runnable;

//# sourceMappingURL=Runnable.js.map
