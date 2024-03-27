goog.module('java.util.NavigableMap$impl');

const SortedMap = goog.require('java.util.SortedMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let NavigableSet = goog.forwardDeclare('java.util.NavigableSet$impl');

/**
 * @interface
 * @template K, V
 * @extends {SortedMap<K, V>}
 */
class NavigableMap {
 /** @abstract @nodts @return {Entry<K, V>} */
 m_ceilingEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {}
 /** @abstract @nodts @return {K} */
 m_ceilingKey__java_lang_Object__java_lang_Object(/** K */ key) {}
 /** @abstract @nodts @return {NavigableSet<K>} */
 m_descendingKeySet__java_util_NavigableSet() {}
 /** @abstract @nodts @return {NavigableMap<K, V>} */
 m_descendingMap__java_util_NavigableMap() {}
 /** @abstract @nodts @return {Entry<K, V>} */
 m_firstEntry__java_util_Map_Entry() {}
 /** @abstract @nodts @return {Entry<K, V>} */
 m_floorEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {}
 /** @abstract @nodts @return {K} */
 m_floorKey__java_lang_Object__java_lang_Object(/** K */ key) {}
 /** @abstract @nodts @return {NavigableMap<K, V>} */
 m_headMap__java_lang_Object__boolean__java_util_NavigableMap(/** K */ toKey, /** boolean */ inclusive) {}
 /** @abstract @nodts @return {Entry<K, V>} */
 m_higherEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {}
 /** @abstract @nodts @return {K} */
 m_higherKey__java_lang_Object__java_lang_Object(/** K */ key) {}
 /** @abstract @nodts @return {Entry<K, V>} */
 m_lastEntry__java_util_Map_Entry() {}
 /** @abstract @nodts @return {Entry<K, V>} */
 m_lowerEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {}
 /** @abstract @nodts @return {K} */
 m_lowerKey__java_lang_Object__java_lang_Object(/** K */ key) {}
 /** @abstract @nodts @return {NavigableSet<K>} */
 m_navigableKeySet__java_util_NavigableSet() {}
 /** @abstract @nodts @return {Entry<K, V>} */
 m_pollFirstEntry__java_util_Map_Entry() {}
 /** @abstract @nodts @return {Entry<K, V>} */
 m_pollLastEntry__java_util_Map_Entry() {}
 /** @abstract @nodts @return {NavigableMap<K, V>} */
 m_subMap__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableMap(/** K */ fromKey, /** boolean */ fromInclusive, /** K */ toKey, /** boolean */ toInclusive) {}
 /** @abstract @nodts @return {NavigableMap<K, V>} */
 m_tailMap__java_lang_Object__boolean__java_util_NavigableMap(/** K */ fromKey, /** boolean */ inclusive) {}
 /** @nodts */
 static $clinit() {
  NavigableMap.$clinit = () =>{};
  NavigableMap.$loadModules();
  Map.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  SortedMap.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_NavigableMap = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_NavigableMap;
 }
 
 /** @nodts */
 static $loadModules() {
  Map = goog.module.get('java.util.Map$impl');
 }
}
NavigableMap.$markImplementor(/**@type {Function}*/ (NavigableMap));
$Util.$setClassMetadataForInterface(NavigableMap, 'java.util.NavigableMap');

exports = NavigableMap;

//# sourceMappingURL=NavigableMap.js.map
