goog.module('java.util.function.DoubleConsumer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.DoubleConsumer.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 */
class DoubleConsumer {
 /** @abstract @nodts */
 m_accept__double__void(/** number */ value) {}
 /** @abstract @nodts @return {DoubleConsumer} */
 m_andThen__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(/** DoubleConsumer */ after) {}
 /** @nodts @return {DoubleConsumer} */
 static $adapt(/** ?function(number):void */ fn) {
  DoubleConsumer.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {DoubleConsumer} */
 static m_andThen__$default__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(/** !DoubleConsumer */ $thisArg, /** DoubleConsumer */ after) {
  DoubleConsumer.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return DoubleConsumer.$adapt((/** number */ value) =>{
   $thisArg.m_accept__double__void(value);
   after.m_accept__double__void(value);
  });
 }
 /** @nodts */
 static $clinit() {
  DoubleConsumer.$clinit = () =>{};
  DoubleConsumer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_DoubleConsumer = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_DoubleConsumer;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.DoubleConsumer.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
DoubleConsumer.$markImplementor(/**@type {Function}*/ (DoubleConsumer));
$Util.$setClassMetadataForInterface(DoubleConsumer, 'java.util.function.DoubleConsumer');

exports = DoubleConsumer;

//# sourceMappingURL=DoubleConsumer.js.map
