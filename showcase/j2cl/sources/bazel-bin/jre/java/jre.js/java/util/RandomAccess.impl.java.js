goog.module('java.util.RandomAccess$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class RandomAccess {
 /** @nodts */
 static $clinit() {
  RandomAccess.$clinit = () =>{};
  RandomAccess.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_RandomAccess = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_RandomAccess;
 }
 
 /** @nodts */
 static $loadModules() {}
}
RandomAccess.$markImplementor(/**@type {Function}*/ (RandomAccess));
$Util.$setClassMetadataForInterface(RandomAccess, 'java.util.RandomAccess');

exports = RandomAccess;

//# sourceMappingURL=RandomAccess.js.map
