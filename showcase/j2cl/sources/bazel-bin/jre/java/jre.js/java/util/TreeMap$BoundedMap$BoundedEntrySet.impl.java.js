goog.module('java.util.TreeMap.BoundedMap.BoundedEntrySet$impl');

const AbstractSet = goog.require('java.util.AbstractSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let BoundedMap = goog.forwardDeclare('java.util.TreeMap.BoundedMap$impl');
let $1 = goog.forwardDeclare('java.util.TreeMap.BoundedMap.BoundedEntrySet.$1$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @template K, V
 * @extends {AbstractSet<Entry<K, V>>}
 */
class BoundedEntrySet extends AbstractSet {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {BoundedMap<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet;
 }
 /** @nodts @template K, V @return {!BoundedEntrySet<K, V>} */
 static $create__java_util_TreeMap_BoundedMap(/** BoundedMap<K, V> */ $outer_this) {
  BoundedEntrySet.$clinit();
  let $instance = new BoundedEntrySet();
  $instance.$ctor__java_util_TreeMap_BoundedMap_BoundedEntrySet__java_util_TreeMap_BoundedMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_BoundedMap_BoundedEntrySet__java_util_TreeMap_BoundedMap__void(/** BoundedMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet = $outer_this;
  this.$ctor__java_util_AbstractSet__void();
 }
 /** @override @return {number} */
 size() {
  let count = 0;
  for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let ignored = /**@type {Entry<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    count = count + 1 | 0;
   }
  }
  return count;
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet.isEmpty();
 }
 /** @override @nodts @return {Iterator<Entry<K, V>>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!$1<K, V>}*/ ($1.$create__java_util_TreeMap_BoundedMap_BoundedEntrySet__java_util_TreeMap_Node(this, this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet.m_endpoint__boolean__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(true)));
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  if (!Entry.$isInstance(o)) {
   return false;
  }
  let entry = /**@type {Entry<*, *>}*/ ($Casts.$to(o, Entry));
  return this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet.m_isInBounds__java_lang_Object__boolean_$p_java_util_TreeMap_BoundedMap(entry.m_getKey__java_lang_Object()) && !$Equality.$same(this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet.$outer_this__java_util_TreeMap_BoundedMap.m_findByEntry__java_util_Map_Entry__java_util_TreeMap_Node_$p_java_util_TreeMap(entry), null);
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  if (!Entry.$isInstance(o)) {
   return false;
  }
  let entry = /**@type {Entry<*, *>}*/ ($Casts.$to(o, Entry));
  return this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet.m_isInBounds__java_lang_Object__boolean_$p_java_util_TreeMap_BoundedMap(entry.m_getKey__java_lang_Object()) && this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet.$outer_this__java_util_TreeMap_BoundedMap.m_entrySet__java_util_Set().remove(entry);
 }
 /** @nodts */
 static $clinit() {
  BoundedEntrySet.$clinit = () =>{};
  BoundedEntrySet.$loadModules();
  AbstractSet.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoundedEntrySet;
 }
 
 /** @nodts */
 static $loadModules() {
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $1 = goog.module.get('java.util.TreeMap.BoundedMap.BoundedEntrySet.$1$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BoundedEntrySet, 'java.util.TreeMap$BoundedMap$BoundedEntrySet');

exports = BoundedEntrySet;

//# sourceMappingURL=TreeMap$BoundedMap$BoundedEntrySet.js.map
