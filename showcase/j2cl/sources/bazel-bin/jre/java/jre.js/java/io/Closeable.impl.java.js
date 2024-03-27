goog.module('java.io.Closeable$impl');

const AutoCloseable = goog.require('java.lang.AutoCloseable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.io.Closeable.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {AutoCloseable}
 */
class Closeable {
 /** @abstract @override @nodts */
 m_close__void() {}
 /** @nodts @return {Closeable} */
 static $adapt(/** ?function():void */ fn) {
  Closeable.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Closeable.$clinit = () =>{};
  Closeable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  AutoCloseable.$markImplementor(ctor);
  ctor.prototype.$implements__java_io_Closeable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_io_Closeable;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.io.Closeable.$LambdaAdaptor$impl');
 }
}
Closeable.$markImplementor(/**@type {Function}*/ (Closeable));
$Util.$setClassMetadataForInterface(Closeable, 'java.io.Closeable');

exports = Closeable;

//# sourceMappingURL=Closeable.js.map
