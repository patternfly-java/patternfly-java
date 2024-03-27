goog.module('java.util.function.Supplier$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.Supplier.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Supplier {
 /** @abstract @nodts @return {T} */
 m_get__java_lang_Object() {}
 /** @nodts @template T @return {Supplier<T>} */
 static $adapt(/** ?function():T */ fn) {
  Supplier.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Supplier.$clinit = () =>{};
  Supplier.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_Supplier = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_Supplier;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.Supplier.$LambdaAdaptor$impl');
 }
}
Supplier.$markImplementor(/**@type {Function}*/ (Supplier));
$Util.$setClassMetadataForInterface(Supplier, 'java.util.function.Supplier');

exports = Supplier;

//# sourceMappingURL=Supplier.js.map
