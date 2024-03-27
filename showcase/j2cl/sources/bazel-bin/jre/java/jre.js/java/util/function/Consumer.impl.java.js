goog.module('java.util.function.Consumer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.Consumer.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template T
 */
class Consumer {
 /** @abstract @nodts */
 m_accept__java_lang_Object__void(/** T */ t) {}
 /** @abstract @nodts @return {Consumer<T>} */
 m_andThen__java_util_function_Consumer__java_util_function_Consumer(/** Consumer<?> */ after) {}
 /** @nodts @template T @return {Consumer<T>} */
 static $adapt(/** ?function(T):void */ fn) {
  Consumer.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T @return {Consumer<T>} */
 static m_andThen__$default__java_util_function_Consumer__java_util_function_Consumer__java_util_function_Consumer(/** !Consumer<T> */ $thisArg, /** Consumer<?> */ after) {
  Consumer.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(after);
  return Consumer.$adapt((/** T */ t) =>{
   $thisArg.m_accept__java_lang_Object__void(t);
   after.m_accept__java_lang_Object__void(t);
  });
 }
 /** @nodts */
 static $clinit() {
  Consumer.$clinit = () =>{};
  Consumer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_function_Consumer = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_Consumer;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.Consumer.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
Consumer.$markImplementor(/**@type {Function}*/ (Consumer));
$Util.$setClassMetadataForInterface(Consumer, 'java.util.function.Consumer');

exports = Consumer;

//# sourceMappingURL=Consumer.js.map
