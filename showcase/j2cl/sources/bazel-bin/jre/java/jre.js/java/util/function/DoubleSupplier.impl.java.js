goog.module('java.util.function.DoubleSupplier$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.DoubleSupplier.$LambdaAdaptor$impl');

/**
 * @interface
 */
class DoubleSupplier {
 /** @abstract @nodts @return {number} */
 m_getAsDouble__double() {}
 /** @nodts @return {DoubleSupplier} */
 static $adapt(/** ?function():number */ fn) {
  DoubleSupplier.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  DoubleSupplier.$clinit = () =>{};
  DoubleSupplier.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_DoubleSupplier = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_DoubleSupplier;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.DoubleSupplier.$LambdaAdaptor$impl');
 }
}
DoubleSupplier.$markImplementor(/**@type {Function}*/ (DoubleSupplier));
$Util.$setClassMetadataForInterface(DoubleSupplier, 'java.util.function.DoubleSupplier');

exports = DoubleSupplier;

//# sourceMappingURL=DoubleSupplier.js.map
