goog.module('java.util.function.BiConsumer.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const BiConsumer = goog.require('java.util.function.BiConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T, U
 * @implements {BiConsumer<T, U>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, U):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, U):void} @nodts*/
  this.f_fn__java_util_function_BiConsumer_$LambdaAdaptor;
  this.$ctor__java_util_function_BiConsumer_$LambdaAdaptor__java_util_function_BiConsumer_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_BiConsumer_$LambdaAdaptor__java_util_function_BiConsumer_$JsFunction__void(/** ?function(T, U):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_BiConsumer_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_accept__java_lang_Object__java_lang_Object__void(/** T */ arg0, /** U */ arg1) {
  {
   let $function = this.f_fn__java_util_function_BiConsumer_$LambdaAdaptor;
   $function(arg0, arg1);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {BiConsumer<T, U>} */
 m_andThen__java_util_function_BiConsumer__java_util_function_BiConsumer(/** BiConsumer<?, ?> */ arg0) {
  return BiConsumer.m_andThen__$default__java_util_function_BiConsumer__java_util_function_BiConsumer__java_util_function_BiConsumer(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  BiConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
BiConsumer.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.BiConsumer$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=BiConsumer$$LambdaAdaptor.js.map
