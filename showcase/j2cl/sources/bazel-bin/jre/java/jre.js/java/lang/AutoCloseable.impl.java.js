goog.module('java.lang.AutoCloseable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.lang.AutoCloseable.$LambdaAdaptor$impl');

/**
 * @interface
 */
class AutoCloseable {
 /** @abstract @nodts */
 m_close__void() {}
 /** @nodts @return {AutoCloseable} */
 static $adapt(/** ?function():void */ fn) {
  AutoCloseable.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  AutoCloseable.$clinit = () =>{};
  AutoCloseable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_AutoCloseable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_AutoCloseable;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.lang.AutoCloseable.$LambdaAdaptor$impl');
 }
}
AutoCloseable.$markImplementor(/**@type {Function}*/ (AutoCloseable));
$Util.$setClassMetadataForInterface(AutoCloseable, 'java.lang.AutoCloseable');

exports = AutoCloseable;

//# sourceMappingURL=AutoCloseable.js.map
