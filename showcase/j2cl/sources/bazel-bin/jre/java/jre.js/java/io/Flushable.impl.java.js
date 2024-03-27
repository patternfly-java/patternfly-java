goog.module('java.io.Flushable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.io.Flushable.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Flushable {
 /** @abstract @nodts */
 m_flush__void() {}
 /** @nodts @return {Flushable} */
 static $adapt(/** ?function():void */ fn) {
  Flushable.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Flushable.$clinit = () =>{};
  Flushable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_io_Flushable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_io_Flushable;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.io.Flushable.$LambdaAdaptor$impl');
 }
}
Flushable.$markImplementor(/**@type {Function}*/ (Flushable));
$Util.$setClassMetadataForInterface(Flushable, 'java.io.Flushable');

exports = Flushable;

//# sourceMappingURL=Flushable.js.map
