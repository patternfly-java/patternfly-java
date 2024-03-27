goog.module('java.util.TreeMap.KeySet$impl');

const AbstractSet = goog.require('java.util.AbstractSet$impl');
const NavigableSet = goog.require('java.util.NavigableSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let SortedSet = goog.forwardDeclare('java.util.SortedSet$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let TreeMap = goog.forwardDeclare('java.util.TreeMap$impl');
let Bound = goog.forwardDeclare('java.util.TreeMap.Bound$impl');
let BoundedMap = goog.forwardDeclare('java.util.TreeMap.BoundedMap$impl');
let $1 = goog.forwardDeclare('java.util.TreeMap.KeySet.$1$impl');
let $2 = goog.forwardDeclare('java.util.TreeMap.KeySet.$2$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @template K, V
 * @extends {AbstractSet<K>}
 * @implements {NavigableSet<K>}
 */
class KeySet extends AbstractSet {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TreeMap<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_KeySet;
 }
 /** @nodts @template K, V @return {!KeySet<K, V>} */
 static $create__java_util_TreeMap(/** TreeMap<K, V> */ $outer_this) {
  KeySet.$clinit();
  let $instance = new KeySet();
  $instance.$ctor__java_util_TreeMap_KeySet__java_util_TreeMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_KeySet__java_util_TreeMap__void(/** TreeMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_TreeMap_KeySet = $outer_this;
  this.$ctor__java_util_AbstractSet__void();
 }
 /** @override @return {number} */
 size() {
  return this.$outer_this__java_util_TreeMap_KeySet.f_size__java_util_TreeMap_;
 }
 /** @override @nodts @return {Iterator<K>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!$1<K, V>}*/ ($1.$create__java_util_TreeMap_KeySet__java_util_TreeMap_Node(this, this.$outer_this__java_util_TreeMap_KeySet.m_getFirst__java_util_TreeMap_Node_$p_java_util_TreeMap()));
 }
 /** @override @nodts @return {Iterator<K>} */
 m_descendingIterator__java_util_Iterator() {
  return /**@type {!$2<K, V>}*/ ($2.$create__java_util_TreeMap_KeySet__java_util_TreeMap_Node(this, this.$outer_this__java_util_TreeMap_KeySet.m_getLast__java_util_TreeMap_Node_$p_java_util_TreeMap()));
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.$outer_this__java_util_TreeMap_KeySet.containsKey(o);
 }
 /** @override @return {boolean} */
 remove(/** * */ key) {
  return !$Equality.$same(this.$outer_this__java_util_TreeMap_KeySet.m_removeInternalByKey__java_lang_Object__java_util_TreeMap_Node_$p_java_util_TreeMap(key), null);
 }
 /** @override */
 clear() {
  this.$outer_this__java_util_TreeMap_KeySet.clear();
 }
 /** @override @nodts @return {Comparator<?>} */
 m_comparator__java_util_Comparator() {
  return this.$outer_this__java_util_TreeMap_KeySet.m_comparator__java_util_Comparator();
 }
 /** @override @nodts @return {K} */
 m_first__java_lang_Object() {
  return this.$outer_this__java_util_TreeMap_KeySet.m_firstKey__java_lang_Object();
 }
 /** @override @nodts @return {K} */
 m_last__java_lang_Object() {
  return this.$outer_this__java_util_TreeMap_KeySet.m_lastKey__java_lang_Object();
 }
 /** @override @nodts @return {K} */
 m_lower__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_lowerKey__java_lang_Object__java_lang_Object(key);
 }
 /** @override @nodts @return {K} */
 m_floor__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_floorKey__java_lang_Object__java_lang_Object(key);
 }
 /** @override @nodts @return {K} */
 m_ceiling__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_ceilingKey__java_lang_Object__java_lang_Object(key);
 }
 /** @override @nodts @return {K} */
 m_higher__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_higherKey__java_lang_Object__java_lang_Object(key);
 }
 /** @override @nodts @return {K} */
 m_pollFirst__java_lang_Object() {
  return TreeMap.m_getKeyOrNull__java_util_Map_Entry__java_lang_Object(this.$outer_this__java_util_TreeMap_KeySet.m_internalPollFirstEntry__java_util_TreeMap_Node_$p_java_util_TreeMap());
 }
 /** @override @nodts @return {K} */
 m_pollLast__java_lang_Object() {
  return TreeMap.m_getKeyOrNull__java_util_Map_Entry__java_lang_Object(this.$outer_this__java_util_TreeMap_KeySet.m_internalPollLastEntry__java_util_Map_Entry_$p_java_util_TreeMap());
 }
 /** @override @nodts @return {NavigableSet<K>} */
 m_subSet__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableSet(/** K */ from, /** boolean */ fromInclusive, /** K */ to, /** boolean */ toInclusive) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_subMap__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableMap(from, fromInclusive, to, toInclusive).m_navigableKeySet__java_util_NavigableSet();
 }
 /** @override @nodts @return {SortedSet<K>} */
 m_subSet__java_lang_Object__java_lang_Object__java_util_SortedSet(/** K */ fromInclusive, /** K */ toExclusive) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_subMap__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableMap(fromInclusive, true, toExclusive, false).m_navigableKeySet__java_util_NavigableSet();
 }
 /** @override @nodts @return {NavigableSet<K>} */
 m_headSet__java_lang_Object__boolean__java_util_NavigableSet(/** K */ to, /** boolean */ inclusive) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_headMap__java_lang_Object__boolean__java_util_NavigableMap(to, inclusive).m_navigableKeySet__java_util_NavigableSet();
 }
 /** @override @nodts @return {SortedSet<K>} */
 m_headSet__java_lang_Object__java_util_SortedSet(/** K */ toExclusive) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_headMap__java_lang_Object__boolean__java_util_NavigableMap(toExclusive, false).m_navigableKeySet__java_util_NavigableSet();
 }
 /** @override @nodts @return {NavigableSet<K>} */
 m_tailSet__java_lang_Object__boolean__java_util_NavigableSet(/** K */ from, /** boolean */ inclusive) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_tailMap__java_lang_Object__boolean__java_util_NavigableMap(from, inclusive).m_navigableKeySet__java_util_NavigableSet();
 }
 /** @override @nodts @return {SortedSet<K>} */
 m_tailSet__java_lang_Object__java_util_SortedSet(/** K */ fromInclusive) {
  return this.$outer_this__java_util_TreeMap_KeySet.m_tailMap__java_lang_Object__boolean__java_util_NavigableMap(fromInclusive, true).m_navigableKeySet__java_util_NavigableSet();
 }
 /** @override @nodts @return {NavigableSet<K>} */
 m_descendingSet__java_util_NavigableSet() {
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this.$outer_this__java_util_TreeMap_KeySet, false, null, Bound.NO_BOUND, null, Bound.NO_BOUND)).m_navigableKeySet__java_util_NavigableSet();
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<K>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<K>}*/ (SortedSet.m_spliterator__$default__java_util_SortedSet__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  KeySet.$clinit = () =>{};
  KeySet.$loadModules();
  AbstractSet.$clinit();
  SortedSet.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof KeySet;
 }
 
 /** @nodts */
 static $loadModules() {
  SortedSet = goog.module.get('java.util.SortedSet$impl');
  TreeMap = goog.module.get('java.util.TreeMap$impl');
  Bound = goog.module.get('java.util.TreeMap.Bound$impl');
  BoundedMap = goog.module.get('java.util.TreeMap.BoundedMap$impl');
  $1 = goog.module.get('java.util.TreeMap.KeySet.$1$impl');
  $2 = goog.module.get('java.util.TreeMap.KeySet.$2$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
NavigableSet.$markImplementor(KeySet);
$Util.$setClassMetadata(KeySet, 'java.util.TreeMap$KeySet');

exports = KeySet;

//# sourceMappingURL=TreeMap$KeySet.js.map
