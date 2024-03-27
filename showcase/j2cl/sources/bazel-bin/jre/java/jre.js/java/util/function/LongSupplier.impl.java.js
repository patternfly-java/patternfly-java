goog.module('java.util.function.LongSupplier$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.LongSupplier.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class LongSupplier {
 /** @abstract @nodts @return {!$Long} */
 m_getAsLong__long() {}
 /** @nodts @return {LongSupplier} */
 static $adapt(/** ?function():!$Long */ fn) {
  LongSupplier.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  LongSupplier.$clinit = () =>{};
  LongSupplier.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_LongSupplier = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_LongSupplier;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.LongSupplier.$LambdaAdaptor$impl');
 }
}
LongSupplier.$markImplementor(/**@type {Function}*/ (LongSupplier));
$Util.$setClassMetadataForInterface(LongSupplier, 'java.util.function.LongSupplier');

exports = LongSupplier;

//# sourceMappingURL=LongSupplier.js.map
