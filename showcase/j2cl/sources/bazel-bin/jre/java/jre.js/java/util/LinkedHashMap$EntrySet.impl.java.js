goog.module('java.util.LinkedHashMap.EntrySet$impl');

const AbstractSet = goog.require('java.util.AbstractSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let EntryIterator = goog.forwardDeclare('java.util.LinkedHashMap.EntrySet.EntryIterator$impl');
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
  /**@type {LinkedHashMap<K, V>} @nodts*/
  this.$outer_this__java_util_LinkedHashMap_EntrySet;
 }
 /** @nodts @template K, V @return {!EntrySet<K, V>} */
 static $create__java_util_LinkedHashMap(/** LinkedHashMap<K, V> */ $outer_this) {
  EntrySet.$clinit();
  let $instance = new EntrySet();
  $instance.$ctor__java_util_LinkedHashMap_EntrySet__java_util_LinkedHashMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_LinkedHashMap_EntrySet__java_util_LinkedHashMap__void(/** LinkedHashMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_LinkedHashMap_EntrySet = $outer_this;
  this.$ctor__java_util_AbstractSet__void();
 }
 /** @override */
 clear() {
  this.$outer_this__java_util_LinkedHashMap_EntrySet.clear();
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  if (Entry.$isInstance(o)) {
   return this.$outer_this__java_util_LinkedHashMap_EntrySet.m_containsEntry__java_util_Map_Entry__boolean_$pp_java_util(/**@type {Entry<*, *>}*/ ($Casts.$to(o, Entry)));
  }
  return false;
 }
 /** @override @nodts @return {Iterator<Entry<K, V>>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!EntryIterator<K, V>}*/ (EntryIterator.$create__java_util_LinkedHashMap_EntrySet(this));
 }
 /** @override @return {boolean} */
 remove(/** * */ entry) {
  if (this.contains(entry)) {
   let key = /**@type {Entry<*, *>}*/ ($Casts.$to(entry, Entry)).m_getKey__java_lang_Object();
   this.$outer_this__java_util_LinkedHashMap_EntrySet.remove(key);
   return true;
  }
  return false;
 }
 /** @override @return {number} */
 size() {
  return this.$outer_this__java_util_LinkedHashMap_EntrySet.size();
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
  EntryIterator = goog.module.get('java.util.LinkedHashMap.EntrySet.EntryIterator$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(EntrySet, 'java.util.LinkedHashMap$EntrySet');

exports = EntrySet;

//# sourceMappingURL=LinkedHashMap$EntrySet.js.map
