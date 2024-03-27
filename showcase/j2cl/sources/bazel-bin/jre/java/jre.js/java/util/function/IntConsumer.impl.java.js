goog.module('java.util.function.IntConsumer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.IntConsumer.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 */
class IntConsumer {
 /** @abstract @nodts */
 m_accept__int__void(/** number */ value) {}
 /** @abstract @nodts @return {IntConsumer} */
 m_andThen__java_util_function_IntConsumer__java_util_function_IntConsumer(/** IntConsumer */ after) {}
 /** @nodts @return {IntConsumer} */
 static $adapt(/** ?function(number):void */ fn) {
  IntConsumer.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {IntConsumer} */
 static m_andThen__$default__java_util_function_IntConsumer__java_util_function_IntConsumer__java_util_function_IntConsumer(/** !IntConsumer */ $thisArg, /** IntConsumer */ after) {
  IntConsumer.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return IntConsumer.$adapt((/** number */ value) =>{
   $thisArg.m_accept__int__void(value);
   after.m_accept__int__void(value);
  });
 }
 /** @nodts */
 static $clinit() {
  IntConsumer.$clinit = () =>{};
  IntConsumer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_IntConsumer = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_IntConsumer;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.IntConsumer.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
IntConsumer.$markImplementor(/**@type {Function}*/ (IntConsumer));
$Util.$setClassMetadataForInterface(IntConsumer, 'java.util.function.IntConsumer');

exports = IntConsumer;

//# sourceMappingURL=IntConsumer.js.map
