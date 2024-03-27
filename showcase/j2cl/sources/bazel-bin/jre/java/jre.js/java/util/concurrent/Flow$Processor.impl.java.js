goog.module('java.util.concurrent.Flow.Processor$impl');

const Publisher = goog.require('java.util.concurrent.Flow.Publisher$impl');
const Subscriber = goog.require('java.util.concurrent.Flow.Subscriber$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template T, R
 * @extends {Subscriber<T>}
 * @extends {Publisher<R>}
 */
class Processor {
 /** @nodts */
 static $clinit() {
  Processor.$clinit = () =>{};
  Processor.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Subscriber.$markImplementor(ctor);
  Publisher.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_concurrent_Flow_Processor = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_Flow_Processor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Processor.$markImplementor(/**@type {Function}*/ (Processor));
$Util.$setClassMetadataForInterface(Processor, 'java.util.concurrent.Flow$Processor');

exports = Processor;

//# sourceMappingURL=Flow$Processor.js.map
