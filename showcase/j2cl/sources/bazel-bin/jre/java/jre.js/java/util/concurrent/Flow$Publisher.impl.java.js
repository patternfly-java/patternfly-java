goog.module('java.util.concurrent.Flow.Publisher$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.concurrent.Flow.Publisher.$LambdaAdaptor$impl');
let Subscriber = goog.forwardDeclare('java.util.concurrent.Flow.Subscriber$impl');

/**
 * @interface
 * @template T
 */
class Publisher {
 /** @abstract @nodts */
 m_subscribe__java_util_concurrent_Flow_Subscriber__void(/** Subscriber<?> */ subscriber) {}
 /** @nodts @template T @return {Publisher<T>} */
 static $adapt(/** ?function(Subscriber<?>):void */ fn) {
  Publisher.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Publisher.$clinit = () =>{};
  Publisher.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_concurrent_Flow_Publisher = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_Flow_Publisher;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.concurrent.Flow.Publisher.$LambdaAdaptor$impl');
 }
}
Publisher.$markImplementor(/**@type {Function}*/ (Publisher));
$Util.$setClassMetadataForInterface(Publisher, 'java.util.concurrent.Flow$Publisher');

exports = Publisher;

//# sourceMappingURL=Flow$Publisher.js.map
