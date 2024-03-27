goog.module('java.util.function.ObjDoubleConsumer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.ObjDoubleConsumer.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class ObjDoubleConsumer {
 /** @abstract @nodts */
 m_accept__java_lang_Object__double__void(/** T */ t, /** number */ value) {}
 /** @nodts @template T @return {ObjDoubleConsumer<T>} */
 static $adapt(/** ?function(T, number):void */ fn) {
  ObjDoubleConsumer.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ObjDoubleConsumer.$clinit = () =>{};
  ObjDoubleConsumer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_ObjDoubleConsumer = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_ObjDoubleConsumer;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.ObjDoubleConsumer.$LambdaAdaptor$impl');
 }
}
ObjDoubleConsumer.$markImplementor(/**@type {Function}*/ (ObjDoubleConsumer));
$Util.$setClassMetadataForInterface(ObjDoubleConsumer, 'java.util.function.ObjDoubleConsumer');

exports = ObjDoubleConsumer;

//# sourceMappingURL=ObjDoubleConsumer.js.map
