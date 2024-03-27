goog.module('java.util.TreeSet$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractSet = goog.require('java.util.AbstractSet$impl');
const NavigableSet = goog.require('java.util.NavigableSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let AbstractMap = goog.forwardDeclare('java.util.AbstractMap$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let NavigableMap = goog.forwardDeclare('java.util.NavigableMap$impl');
let SortedSet = goog.forwardDeclare('java.util.SortedSet$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let TreeMap = goog.forwardDeclare('java.util.TreeMap$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @extends {AbstractSet<E>}
 * @implements {NavigableSet<E>}
 * @implements {Serializable}
 */
class TreeSet extends AbstractSet {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {NavigableMap<E, ?boolean>} @nodts*/
  this.f_map__java_util_TreeSet_;
 }
 //Factory method corresponding to constructor 'TreeSet()'.
 /** @nodts @template E @return {!TreeSet<E>} */
 static $create__() {
  TreeSet.$clinit();
  let $instance = new TreeSet();
  $instance.$ctor__java_util_TreeSet__void();
  return $instance;
 }
 //Initialization from constructor 'TreeSet()'.
 /** @nodts */
 $ctor__java_util_TreeSet__void() {
  this.$ctor__java_util_AbstractSet__void();
  this.f_map__java_util_TreeSet_ = /**@type {!TreeMap<E, ?boolean>}*/ (TreeMap.$create__());
 }
 //Factory method corresponding to constructor 'TreeSet(Collection)'.
 /** @nodts @template E @return {!TreeSet<E>} */
 static $create__java_util_Collection(/** Collection<?> */ c) {
  TreeSet.$clinit();
  let $instance = new TreeSet();
  $instance.$ctor__java_util_TreeSet__java_util_Collection__void(c);
  return $instance;
 }
 //Initialization from constructor 'TreeSet(Collection)'.
 /** @nodts */
 $ctor__java_util_TreeSet__java_util_Collection__void(/** Collection<?> */ c) {
  this.$ctor__java_util_TreeSet__void();
  this.addAll(c);
 }
 //Factory method corresponding to constructor 'TreeSet(Comparator)'.
 /** @nodts @template E @return {!TreeSet<E>} */
 static $create__java_util_Comparator(/** Comparator<?> */ c) {
  TreeSet.$clinit();
  let $instance = new TreeSet();
  $instance.$ctor__java_util_TreeSet__java_util_Comparator__void(c);
  return $instance;
 }
 //Initialization from constructor 'TreeSet(Comparator)'.
 /** @nodts */
 $ctor__java_util_TreeSet__java_util_Comparator__void(/** Comparator<?> */ c) {
  this.$ctor__java_util_AbstractSet__void();
  this.f_map__java_util_TreeSet_ = /**@type {!TreeMap<E, ?boolean>}*/ (TreeMap.$create__java_util_Comparator(c));
 }
 //Factory method corresponding to constructor 'TreeSet(SortedSet)'.
 /** @nodts @template E @return {!TreeSet<E>} */
 static $create__java_util_SortedSet(/** SortedSet<E> */ s) {
  TreeSet.$clinit();
  let $instance = new TreeSet();
  $instance.$ctor__java_util_TreeSet__java_util_SortedSet__void(s);
  return $instance;
 }
 //Initialization from constructor 'TreeSet(SortedSet)'.
 /** @nodts */
 $ctor__java_util_TreeSet__java_util_SortedSet__void(/** SortedSet<E> */ s) {
  this.$ctor__java_util_TreeSet__java_util_Comparator__void(/**@type {SortedSet<E>}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(s), SortedSet)).m_comparator__java_util_Comparator());
  this.addAll(s);
 }
 //Factory method corresponding to constructor 'TreeSet(NavigableMap)'.
 /** @nodts @template E @return {!TreeSet<E>} */
 static $create__java_util_NavigableMap(/** NavigableMap<E, ?boolean> */ map) {
  let $instance = new TreeSet();
  $instance.$ctor__java_util_TreeSet__java_util_NavigableMap__void(map);
  return $instance;
 }
 //Initialization from constructor 'TreeSet(NavigableMap)'.
 /** @nodts */
 $ctor__java_util_TreeSet__java_util_NavigableMap__void(/** NavigableMap<E, ?boolean> */ map) {
  this.$ctor__java_util_AbstractSet__void();
  this.f_map__java_util_TreeSet_ = map;
 }
 /** @override @return {boolean} */
 add(/** E */ o) {
  return $Equality.$same(this.f_map__java_util_TreeSet_.put(o, Boolean.f_FALSE__java_lang_Boolean), null);
 }
 /** @override @nodts @return {E} */
 m_ceiling__java_lang_Object__java_lang_Object(/** E */ e) {
  return this.f_map__java_util_TreeSet_.m_ceilingKey__java_lang_Object__java_lang_Object(e);
 }
 /** @override */
 clear() {
  this.f_map__java_util_TreeSet_.clear();
 }
 /** @override @nodts @return {Comparator<?>} */
 m_comparator__java_util_Comparator() {
  return this.f_map__java_util_TreeSet_.m_comparator__java_util_Comparator();
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.f_map__java_util_TreeSet_.containsKey(o);
 }
 /** @override @nodts @return {Iterator<E>} */
 m_descendingIterator__java_util_Iterator() {
  return this.m_descendingSet__java_util_NavigableSet().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {NavigableSet<E>} */
 m_descendingSet__java_util_NavigableSet() {
  return /**@type {!TreeSet<E>}*/ (TreeSet.$create__java_util_NavigableMap(this.f_map__java_util_TreeSet_.m_descendingMap__java_util_NavigableMap()));
 }
 /** @override @nodts @return {E} */
 m_first__java_lang_Object() {
  return this.f_map__java_util_TreeSet_.m_firstKey__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_floor__java_lang_Object__java_lang_Object(/** E */ e) {
  return this.f_map__java_util_TreeSet_.m_floorKey__java_lang_Object__java_lang_Object(e);
 }
 /** @override @nodts @return {SortedSet<E>} */
 m_headSet__java_lang_Object__java_util_SortedSet(/** E */ toElement) {
  return this.m_headSet__java_lang_Object__boolean__java_util_NavigableSet(toElement, false);
 }
 /** @override @nodts @return {NavigableSet<E>} */
 m_headSet__java_lang_Object__boolean__java_util_NavigableSet(/** E */ toElement, /** boolean */ inclusive) {
  return /**@type {!TreeSet<E>}*/ (TreeSet.$create__java_util_NavigableMap(this.f_map__java_util_TreeSet_.m_headMap__java_lang_Object__boolean__java_util_NavigableMap(toElement, inclusive)));
 }
 /** @override @nodts @return {E} */
 m_higher__java_lang_Object__java_lang_Object(/** E */ e) {
  return this.f_map__java_util_TreeSet_.m_higherKey__java_lang_Object__java_lang_Object(e);
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return this.f_map__java_util_TreeSet_.keySet().m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {E} */
 m_last__java_lang_Object() {
  return this.f_map__java_util_TreeSet_.m_lastKey__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_lower__java_lang_Object__java_lang_Object(/** E */ e) {
  return this.f_map__java_util_TreeSet_.m_lowerKey__java_lang_Object__java_lang_Object(e);
 }
 /** @override @nodts @return {E} */
 m_pollFirst__java_lang_Object() {
  return AbstractMap.m_getEntryKeyOrNull__java_util_Map_Entry__java_lang_Object(this.f_map__java_util_TreeSet_.m_pollFirstEntry__java_util_Map_Entry());
 }
 /** @override @nodts @return {E} */
 m_pollLast__java_lang_Object() {
  return AbstractMap.m_getEntryKeyOrNull__java_util_Map_Entry__java_lang_Object(this.f_map__java_util_TreeSet_.m_pollLastEntry__java_util_Map_Entry());
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  return !$Equality.$same(this.f_map__java_util_TreeSet_.remove(o), null);
 }
 /** @override @return {number} */
 size() {
  return this.f_map__java_util_TreeSet_.size();
 }
 /** @override @nodts @return {NavigableSet<E>} */
 m_subSet__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableSet(/** E */ fromElement, /** boolean */ fromInclusive, /** E */ toElement, /** boolean */ toInclusive) {
  return /**@type {!TreeSet<E>}*/ (TreeSet.$create__java_util_NavigableMap(this.f_map__java_util_TreeSet_.m_subMap__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableMap(fromElement, fromInclusive, toElement, toInclusive)));
 }
 /** @override @nodts @return {SortedSet<E>} */
 m_subSet__java_lang_Object__java_lang_Object__java_util_SortedSet(/** E */ fromElement, /** E */ toElement) {
  return this.m_subSet__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableSet(fromElement, true, toElement, false);
 }
 /** @override @nodts @return {SortedSet<E>} */
 m_tailSet__java_lang_Object__java_util_SortedSet(/** E */ fromElement) {
  return this.m_tailSet__java_lang_Object__boolean__java_util_NavigableSet(fromElement, true);
 }
 /** @override @nodts @return {NavigableSet<E>} */
 m_tailSet__java_lang_Object__boolean__java_util_NavigableSet(/** E */ fromElement, /** boolean */ inclusive) {
  return /**@type {!TreeSet<E>}*/ (TreeSet.$create__java_util_NavigableMap(this.f_map__java_util_TreeSet_.m_tailMap__java_lang_Object__boolean__java_util_NavigableMap(fromElement, inclusive)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<E>}*/ (SortedSet.m_spliterator__$default__java_util_SortedSet__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  TreeSet.$clinit = () =>{};
  TreeSet.$loadModules();
  AbstractSet.$clinit();
  SortedSet.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TreeSet;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  AbstractMap = goog.module.get('java.util.AbstractMap$impl');
  SortedSet = goog.module.get('java.util.SortedSet$impl');
  TreeMap = goog.module.get('java.util.TreeMap$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NavigableSet.$markImplementor(TreeSet);
Serializable.$markImplementor(TreeSet);
$Util.$setClassMetadata(TreeSet, 'java.util.TreeSet');

exports = TreeSet;

//# sourceMappingURL=TreeSet.js.map
