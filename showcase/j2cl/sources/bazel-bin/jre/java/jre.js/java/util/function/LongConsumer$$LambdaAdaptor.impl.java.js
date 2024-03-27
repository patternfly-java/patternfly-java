goog.module('java.util.function.LongConsumer.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const LongConsumer = goog.require('java.util.function.LongConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @implements {LongConsumer}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(!$Long):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(!$Long):void} @nodts*/
  this.f_fn__java_util_function_LongConsumer_$LambdaAdaptor;
  this.$ctor__java_util_function_LongConsumer_$LambdaAdaptor__java_util_function_LongConsumer_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_LongConsumer_$LambdaAdaptor__java_util_function_LongConsumer_$JsFunction__void(/** ?function(!$Long):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_LongConsumer_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_accept__long__void(/** !$Long */ arg0) {
  {
   let $function = this.f_fn__java_util_function_LongConsumer_$LambdaAdaptor;
   $function(arg0);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongConsumer} */
 m_andThen__java_util_function_LongConsumer__java_util_function_LongConsumer(/** LongConsumer */ arg0) {
  return LongConsumer.m_andThen__$default__java_util_function_LongConsumer__java_util_function_LongConsumer__java_util_function_LongConsumer(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  LongConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
LongConsumer.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.LongConsumer$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=LongConsumer$$LambdaAdaptor.js.map
