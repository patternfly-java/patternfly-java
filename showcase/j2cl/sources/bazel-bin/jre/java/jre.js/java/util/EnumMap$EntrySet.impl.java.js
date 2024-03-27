goog.module('java.util.EnumMap.EntrySet$impl');

const AbstractSet = goog.require('java.util.AbstractSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let EnumMap = goog.forwardDeclare('java.util.EnumMap$impl');
let EntrySetIterator = goog.forwardDeclare('java.util.EnumMap.EntrySetIterator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @template K, V
 * @extends {AbstractSet<Entry<K, V>>}
 */
class EntrySet extends AbstractSet {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {EnumMap<K, V>} @nodts*/
  this.$outer_this__java_util_EnumMap_EntrySet;
 }
 /** @nodts @template K, V @return {!EntrySet<K, V>} */
 static $create__java_util_EnumMap(/** EnumMap<K, V> */ $outer_this) {
  EntrySet.$clinit();
  let $instance = new EntrySet();
  $instance.$ctor__java_util_EnumMap_EntrySet__java_util_EnumMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_EnumMap_EntrySet__java_util_EnumMap__void(/** EnumMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_EnumMap_EntrySet = $outer_this;
  this.$ctor__java_util_AbstractSet__void();
 }
 /** @override */
 clear() {
  this.$outer_this__java_util_EnumMap_EntrySet.clear();
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  if (Entry.$isInstance(o)) {
   return this.$outer_this__java_util_EnumMap_EntrySet.m_containsEntry__java_util_Map_Entry__boolean_$pp_java_util(/**@type {Entry<*, *>}*/ ($Casts.$to(o, Entry)));
  }
  return false;
 }
 /** @override @nodts @return {Iterator<Entry<K, V>>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!EntrySetIterator<K, V>}*/ (EntrySetIterator.$create__java_util_EnumMap(this.$outer_this__java_util_EnumMap_EntrySet));
 }
 /** @override @return {boolean} */
 remove(/** * */ entry) {
  if (this.contains(entry)) {
   let key = /**@type {Entry<*, *>}*/ ($Casts.$to(entry, Entry)).m_getKey__java_lang_Object();
   this.$outer_this__java_util_EnumMap_EntrySet.remove(key);
   return true;
  }
  return false;
 }
 /** @override @return {number} */
 size() {
  return this.$outer_this__java_util_EnumMap_EntrySet.size();
 }
 /** @nodts */
 static $clinit() {
  EntrySet.$clinit = () =>{};
  EntrySet.$loadModules();
  AbstractSet.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EntrySet;
 }
 
 /** @nodts */
 static $loadModules() {
  EntrySetIterator = goog.module.get('java.util.EnumMap.EntrySetIterator$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(EntrySet, 'java.util.EnumMap$EntrySet');

exports = EntrySet;

//# sourceMappingURL=EnumMap$EntrySet.js.map
