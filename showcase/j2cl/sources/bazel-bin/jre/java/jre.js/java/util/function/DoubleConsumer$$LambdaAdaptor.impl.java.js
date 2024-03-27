goog.module('java.util.function.DoubleConsumer.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const DoubleConsumer = goog.require('java.util.function.DoubleConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {DoubleConsumer}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):void} @nodts*/
  this.f_fn__java_util_function_DoubleConsumer_$LambdaAdaptor;
  this.$ctor__java_util_function_DoubleConsumer_$LambdaAdaptor__java_util_function_DoubleConsumer_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_DoubleConsumer_$LambdaAdaptor__java_util_function_DoubleConsumer_$JsFunction__void(/** ?function(number):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_DoubleConsumer_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_accept__double__void(/** number */ arg0) {
  {
   let $function = this.f_fn__java_util_function_DoubleConsumer_$LambdaAdaptor;
   $function(arg0);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {DoubleConsumer} */
 m_andThen__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(/** DoubleConsumer */ arg0) {
  return DoubleConsumer.m_andThen__$default__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  DoubleConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
DoubleConsumer.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.DoubleConsumer$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DoubleConsumer$$LambdaAdaptor.js.map
