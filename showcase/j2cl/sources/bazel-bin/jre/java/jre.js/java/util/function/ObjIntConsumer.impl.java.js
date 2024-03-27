goog.module('java.util.function.ObjIntConsumer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.ObjIntConsumer.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class ObjIntConsumer {
 /** @abstract @nodts */
 m_accept__java_lang_Object__int__void(/** T */ t, /** number */ value) {}
 /** @nodts @template T @return {ObjIntConsumer<T>} */
 static $adapt(/** ?function(T, number):void */ fn) {
  ObjIntConsumer.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ObjIntConsumer.$clinit = () =>{};
  ObjIntConsumer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_ObjIntConsumer = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_ObjIntConsumer;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.ObjIntConsumer.$LambdaAdaptor$impl');
 }
}
ObjIntConsumer.$markImplementor(/**@type {Function}*/ (ObjIntConsumer));
$Util.$setClassMetadataForInterface(ObjIntConsumer, 'java.util.function.ObjIntConsumer');

exports = ObjIntConsumer;

//# sourceMappingURL=ObjIntConsumer.js.map
