goog.module('java.util.function.IntSupplier$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.IntSupplier.$LambdaAdaptor$impl');

/**
 * @interface
 */
class IntSupplier {
 /** @abstract @nodts @return {number} */
 m_getAsInt__int() {}
 /** @nodts @return {IntSupplier} */
 static $adapt(/** ?function():number */ fn) {
  IntSupplier.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  IntSupplier.$clinit = () =>{};
  IntSupplier.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_IntSupplier = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_IntSupplier;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.IntSupplier.$LambdaAdaptor$impl');
 }
}
IntSupplier.$markImplementor(/**@type {Function}*/ (IntSupplier));
$Util.$setClassMetadataForInterface(IntSupplier, 'java.util.function.IntSupplier');

exports = IntSupplier;

//# sourceMappingURL=IntSupplier.js.map
