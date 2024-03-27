goog.module('java.util.Collections.UnmodifiableSortedMap$impl');

const UnmodifiableMap = goog.require('java.util.Collections.UnmodifiableMap$impl');
const SortedMap = goog.require('java.util.SortedMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template K, V
 * @extends {UnmodifiableMap<K, V>}
 * @implements {SortedMap<K, V>}
 */
class UnmodifiableSortedMap extends UnmodifiableMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SortedMap<K, ?>} @nodts*/
  this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_;
 }
 /** @nodts @template K, V @return {!UnmodifiableSortedMap<K, V>} */
 static $create__java_util_SortedMap(/** SortedMap<K, ?> */ sortedMap) {
  UnmodifiableSortedMap.$clinit();
  let $instance = new UnmodifiableSortedMap();
  $instance.$ctor__java_util_Collections_UnmodifiableSortedMap__java_util_SortedMap__void(sortedMap);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableSortedMap__java_util_SortedMap__void(/** SortedMap<K, ?> */ sortedMap) {
  this.$ctor__java_util_Collections_UnmodifiableMap__java_util_Map__void(sortedMap);
  this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_ = sortedMap;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_comparator__java_util_Comparator() {
  return this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_.m_comparator__java_util_Comparator();
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_.equals(o);
 }
 /** @override @nodts @return {K} */
 m_firstKey__java_lang_Object() {
  return this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_.m_firstKey__java_lang_Object();
 }
 /** @override @return {number} */
 hashCode() {
  return $Objects.m_hashCode__java_lang_Object__int(this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_);
 }
 /** @override @nodts @return {SortedMap<K, V>} */
 m_headMap__java_lang_Object__java_util_SortedMap(/** K */ toKey) {
  return /**@type {!UnmodifiableSortedMap<K, V>}*/ (UnmodifiableSortedMap.$create__java_util_SortedMap(this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_.m_headMap__java_lang_Object__java_util_SortedMap(toKey)));
 }
 /** @override @nodts @return {K} */
 m_lastKey__java_lang_Object() {
  return this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_.m_lastKey__java_lang_Object();
 }
 /** @override @nodts @return {SortedMap<K, V>} */
 m_subMap__java_lang_Object__java_lang_Object__java_util_SortedMap(/** K */ fromKey, /** K */ toKey) {
  return /**@type {!UnmodifiableSortedMap<K, V>}*/ (UnmodifiableSortedMap.$create__java_util_SortedMap(this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_.m_subMap__java_lang_Object__java_lang_Object__java_util_SortedMap(fromKey, toKey)));
 }
 /** @override @nodts @return {SortedMap<K, V>} */
 m_tailMap__java_lang_Object__java_util_SortedMap(/** K */ fromKey) {
  return /**@type {!UnmodifiableSortedMap<K, V>}*/ (UnmodifiableSortedMap.$create__java_util_SortedMap(this.f_sortedMap__java_util_Collections_UnmodifiableSortedMap_.m_tailMap__java_lang_Object__java_util_SortedMap(fromKey)));
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableSortedMap.$clinit = () =>{};
  UnmodifiableSortedMap.$loadModules();
  UnmodifiableMap.$clinit();
  Map.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableSortedMap;
 }
 
 /** @nodts */
 static $loadModules() {
  Map = goog.module.get('java.util.Map$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
SortedMap.$markImplementor(UnmodifiableSortedMap);
$Util.$setClassMetadata(UnmodifiableSortedMap, 'java.util.Collections$UnmodifiableSortedMap');

exports = UnmodifiableSortedMap;

//# sourceMappingURL=Collections$UnmodifiableSortedMap.js.map
