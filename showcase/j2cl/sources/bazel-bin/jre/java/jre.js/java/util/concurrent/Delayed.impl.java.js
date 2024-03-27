goog.module('java.util.concurrent.Delayed$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let TimeUnit = goog.forwardDeclare('java.util.concurrent.TimeUnit$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 * @extends {Comparable<Delayed>}
 */
class Delayed {
 /** @abstract @nodts @return {!$Long} */
 m_getDelay__java_util_concurrent_TimeUnit__long(/** TimeUnit */ unit) {}
 /** @nodts */
 static $clinit() {
  Delayed.$clinit = () =>{};
  Delayed.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Comparable.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_concurrent_Delayed = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_Delayed;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Delayed.$markImplementor(/**@type {Function}*/ (Delayed));
$Util.$setClassMetadataForInterface(Delayed, 'java.util.concurrent.Delayed');

exports = Delayed;

//# sourceMappingURL=Delayed.js.map
