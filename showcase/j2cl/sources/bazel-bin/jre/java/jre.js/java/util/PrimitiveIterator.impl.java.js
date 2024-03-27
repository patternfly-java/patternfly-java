goog.module('java.util.PrimitiveIterator$impl');

const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template T, C
 * @extends {Iterator<T>}
 */
class PrimitiveIterator {
 /** @abstract @nodts */
 m_forEachRemaining__java_lang_Object__void(/** C */ consumer) {}
 /** @nodts */
 static $clinit() {
  PrimitiveIterator.$clinit = () =>{};
  PrimitiveIterator.$loadModules();
  Iterator.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Iterator.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_PrimitiveIterator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_PrimitiveIterator;
 }
 
 /** @nodts */
 static $loadModules() {}
}
PrimitiveIterator.$markImplementor(/**@type {Function}*/ (PrimitiveIterator));
$Util.$setClassMetadataForInterface(PrimitiveIterator, 'java.util.PrimitiveIterator');

exports = PrimitiveIterator;

//# sourceMappingURL=PrimitiveIterator.js.map
