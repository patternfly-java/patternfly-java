goog.module('java.util.function.IntConsumer.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntConsumer = goog.require('java.util.function.IntConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {IntConsumer}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):void} @nodts*/
  this.f_fn__java_util_function_IntConsumer_$LambdaAdaptor;
  this.$ctor__java_util_function_IntConsumer_$LambdaAdaptor__java_util_function_IntConsumer_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_IntConsumer_$LambdaAdaptor__java_util_function_IntConsumer_$JsFunction__void(/** ?function(number):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_IntConsumer_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_accept__int__void(/** number */ arg0) {
  {
   let $function = this.f_fn__java_util_function_IntConsumer_$LambdaAdaptor;
   $function(arg0);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntConsumer} */
 m_andThen__java_util_function_IntConsumer__java_util_function_IntConsumer(/** IntConsumer */ arg0) {
  return IntConsumer.m_andThen__$default__java_util_function_IntConsumer__java_util_function_IntConsumer__java_util_function_IntConsumer(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IntConsumer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IntConsumer.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.IntConsumer$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=IntConsumer$$LambdaAdaptor.js.map
