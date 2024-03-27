goog.module('java.util.TreeMap.EntrySet$impl');

const AbstractSet = goog.require('java.util.AbstractSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let TreeMap = goog.forwardDeclare('java.util.TreeMap$impl');
let $1 = goog.forwardDeclare('java.util.TreeMap.EntrySet.$1$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template K, V
 * @extends {AbstractSet<Entry<K, V>>}
 */
class EntrySet extends AbstractSet {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TreeMap<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_EntrySet;
 }
 /** @nodts @template K, V @return {!EntrySet<K, V>} */
 static $create__java_util_TreeMap(/** TreeMap<K, V> */ $outer_this) {
  EntrySet.$clinit();
  let $instance = new EntrySet();
  $instance.$ctor__java_util_TreeMap_EntrySet__java_util_TreeMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_EntrySet__java_util_TreeMap__void(/** TreeMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_TreeMap_EntrySet = $outer_this;
  this.$ctor__java_util_AbstractSet__void();
 }
 /** @override @return {number} */
 size() {
  return this.$outer_this__java_util_TreeMap_EntrySet.f_size__java_util_TreeMap_;
 }
 /** @override @nodts @return {Iterator<Entry<K, V>>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!$1<K, V>}*/ ($1.$create__java_util_TreeMap_EntrySet__java_util_TreeMap_Node(this, this.$outer_this__java_util_TreeMap_EntrySet.m_getFirst__java_util_TreeMap_Node_$p_java_util_TreeMap()));
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return Entry.$isInstance(o) && !$Equality.$same(this.$outer_this__java_util_TreeMap_EntrySet.m_findByEntry__java_util_Map_Entry__java_util_TreeMap_Node_$p_java_util_TreeMap(/**@type {Entry<*, *>}*/ ($Casts.$to(o, Entry))), null);
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  if (!Entry.$isInstance(o)) {
   return false;
  }
  let node = this.$outer_this__java_util_TreeMap_EntrySet.m_findByEntry__java_util_Map_Entry__java_util_TreeMap_Node_$p_java_util_TreeMap(/**@type {Entry<*, *>}*/ ($Casts.$to(o, Entry)));
  if ($Equality.$same(node, null)) {
   return false;
  }
  this.$outer_this__java_util_TreeMap_EntrySet.m_removeInternal__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node);
  return true;
 }
 /** @override */
 clear() {
  this.$outer_this__java_util_TreeMap_EntrySet.clear();
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
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $1 = goog.module.get('java.util.TreeMap.EntrySet.$1$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(EntrySet, 'java.util.TreeMap$EntrySet');

exports = EntrySet;

//# sourceMappingURL=TreeMap$EntrySet.js.map
