goog.module('java.util.SortedMap$impl');

const Map = goog.require('java.util.Map$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');

/**
 * @interface
 * @template K, V
 * @extends {Map<K, V>}
 */
class SortedMap {
 /** @abstract @nodts @return {Comparator<?>} */
 m_comparator__java_util_Comparator() {}
 /** @abstract @nodts @return {K} */
 m_firstKey__java_lang_Object() {}
 /** @abstract @nodts @return {SortedMap<K, V>} */
 m_headMap__java_lang_Object__java_util_SortedMap(/** K */ toKey) {}
 /** @abstract @nodts @return {K} */
 m_lastKey__java_lang_Object() {}
 /** @abstract @nodts @return {SortedMap<K, V>} */
 m_subMap__java_lang_Object__java_lang_Object__java_util_SortedMap(/** K */ fromKey, /** K */ toKey) {}
 /** @abstract @nodts @return {SortedMap<K, V>} */
 m_tailMap__java_lang_Object__java_util_SortedMap(/** K */ fromKey) {}
 /** @nodts */
 static $clinit() {
  SortedMap.$clinit = () =>{};
  SortedMap.$loadModules();
  Map.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Map.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_SortedMap = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_SortedMap;
 }
 
 /** @nodts */
 static $loadModules() {}
}
SortedMap.$markImplementor(/**@type {Function}*/ (SortedMap));
$Util.$setClassMetadataForInterface(SortedMap, 'java.util.SortedMap');

exports = SortedMap;

//# sourceMappingURL=SortedMap.js.map
