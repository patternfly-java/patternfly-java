goog.module('java.util.Spliterator.OfPrimitive$impl');

const Spliterator = goog.require('java.util.Spliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template T, C, S
 * @extends {Spliterator<T>}
 */
class OfPrimitive {
 /** @abstract @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** C */ consumer) {}
 /** @abstract @nodts @return {S} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {}
 /** @abstract @nodts */
 m_forEachRemaining__java_lang_Object__void(/** C */ consumer) {}
 /** @nodts @template T, C, S */
 static m_forEachRemaining__$default__java_util_Spliterator_OfPrimitive__java_lang_Object__void(/** !OfPrimitive<T, C, S> */ $thisArg, /** C */ consumer) {
  OfPrimitive.$clinit();
  while ($thisArg.m_tryAdvance__java_lang_Object__boolean(consumer)) {}
 }
 /** @nodts */
 static $clinit() {
  OfPrimitive.$clinit = () =>{};
  OfPrimitive.$loadModules();
  Spliterator.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Spliterator.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_Spliterator_OfPrimitive = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Spliterator_OfPrimitive;
 }
 
 /** @nodts */
 static $loadModules() {}
}
OfPrimitive.$markImplementor(/**@type {Function}*/ (OfPrimitive));
$Util.$setClassMetadataForInterface(OfPrimitive, 'java.util.Spliterator$OfPrimitive');

exports = OfPrimitive;

//# sourceMappingURL=Spliterator$OfPrimitive.js.map
