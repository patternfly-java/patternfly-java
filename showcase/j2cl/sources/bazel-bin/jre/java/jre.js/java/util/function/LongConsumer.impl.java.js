goog.module('java.util.function.LongConsumer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.LongConsumer.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class LongConsumer {
 /** @abstract @nodts */
 m_accept__long__void(/** !$Long */ value) {}
 /** @abstract @nodts @return {LongConsumer} */
 m_andThen__java_util_function_LongConsumer__java_util_function_LongConsumer(/** LongConsumer */ after) {}
 /** @nodts @return {LongConsumer} */
 static $adapt(/** ?function(!$Long):void */ fn) {
  LongConsumer.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {LongConsumer} */
 static m_andThen__$default__java_util_function_LongConsumer__java_util_function_LongConsumer__java_util_function_LongConsumer(/** !LongConsumer */ $thisArg, /** LongConsumer */ after) {
  LongConsumer.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return LongConsumer.$adapt((/** !$Long */ value) =>{
   $thisArg.m_accept__long__void(value);
   after.m_accept__long__void(value);
  });
 }
 /** @nodts */
 static $clinit() {
  LongConsumer.$clinit = () =>{};
  LongConsumer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_LongConsumer = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_LongConsumer;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.LongConsumer.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
LongConsumer.$markImplementor(/**@type {Function}*/ (LongConsumer));
$Util.$setClassMetadataForInterface(LongConsumer, 'java.util.function.LongConsumer');

exports = LongConsumer;

//# sourceMappingURL=LongConsumer.js.map
