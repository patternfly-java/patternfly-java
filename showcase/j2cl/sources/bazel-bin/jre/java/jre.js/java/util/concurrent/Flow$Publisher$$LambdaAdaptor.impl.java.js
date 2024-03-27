goog.module('java.util.concurrent.Flow.Publisher.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Publisher = goog.require('java.util.concurrent.Flow.Publisher$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Subscriber = goog.forwardDeclare('java.util.concurrent.Flow.Subscriber$impl');

/**
 * @template T
 * @implements {Publisher<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Subscriber<?>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Subscriber<?>):void} @nodts*/
  this.f_fn__java_util_concurrent_Flow_Publisher_$LambdaAdaptor;
  this.$ctor__java_util_concurrent_Flow_Publisher_$LambdaAdaptor__java_util_concurrent_Flow_Publisher_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_concurrent_Flow_Publisher_$LambdaAdaptor__java_util_concurrent_Flow_Publisher_$JsFunction__void(/** ?function(Subscriber<?>):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_concurrent_Flow_Publisher_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_subscribe__java_util_concurrent_Flow_Subscriber__void(/** Subscriber<?> */ arg0) {
  {
   let $function = this.f_fn__java_util_concurrent_Flow_Publisher_$LambdaAdaptor;
   $function(arg0);
  }
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Publisher.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.concurrent.Flow$Publisher$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Flow$Publisher$$LambdaAdaptor.js.map
