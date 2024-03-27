goog.module('java.util.function.ObjLongConsumer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.ObjLongConsumer.$LambdaAdaptor$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 * @template T
 */
class ObjLongConsumer {
 /** @abstract @nodts */
 m_accept__java_lang_Object__long__void(/** T */ t, /** !$Long */ value) {}
 /** @nodts @template T @return {ObjLongConsumer<T>} */
 static $adapt(/** ?function(T, !$Long):void */ fn) {
  ObjLongConsumer.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ObjLongConsumer.$clinit = () =>{};
  ObjLongConsumer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_ObjLongConsumer = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_ObjLongConsumer;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.ObjLongConsumer.$LambdaAdaptor$impl');
 }
}
ObjLongConsumer.$markImplementor(/**@type {Function}*/ (ObjLongConsumer));
$Util.$setClassMetadataForInterface(ObjLongConsumer, 'java.util.function.ObjLongConsumer');

exports = ObjLongConsumer;

//# sourceMappingURL=ObjLongConsumer.js.map
