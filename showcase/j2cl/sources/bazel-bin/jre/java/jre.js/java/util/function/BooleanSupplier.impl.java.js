goog.module('java.util.function.BooleanSupplier$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.BooleanSupplier.$LambdaAdaptor$impl');

/**
 * @interface
 */
class BooleanSupplier {
 /** @abstract @nodts @return {boolean} */
 m_getAsBoolean__boolean() {}
 /** @nodts @return {BooleanSupplier} */
 static $adapt(/** ?function():boolean */ fn) {
  BooleanSupplier.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  BooleanSupplier.$clinit = () =>{};
  BooleanSupplier.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_BooleanSupplier = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_BooleanSupplier;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.BooleanSupplier.$LambdaAdaptor$impl');
 }
}
BooleanSupplier.$markImplementor(/**@type {Function}*/ (BooleanSupplier));
$Util.$setClassMetadataForInterface(BooleanSupplier, 'java.util.function.BooleanSupplier');

exports = BooleanSupplier;

//# sourceMappingURL=BooleanSupplier.js.map
