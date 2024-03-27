goog.module('java.util.TreeMap.BoundedMap$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractMap = goog.require('java.util.AbstractMap$impl');
const NavigableMap = goog.require('java.util.NavigableMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let NavigableSet = goog.forwardDeclare('java.util.NavigableSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let TreeMap = goog.forwardDeclare('java.util.TreeMap$impl');
let Bound = goog.forwardDeclare('java.util.TreeMap.Bound$impl');
let BoundedEntrySet = goog.forwardDeclare('java.util.TreeMap.BoundedMap.BoundedEntrySet$impl');
let BoundedKeySet = goog.forwardDeclare('java.util.TreeMap.BoundedMap.BoundedKeySet$impl');
let Node = goog.forwardDeclare('java.util.TreeMap.Node$impl');
let Relation = goog.forwardDeclare('java.util.TreeMap.Relation$impl');
let Relation_$Overlay = goog.forwardDeclare('java.util.TreeMap.Relation.$Overlay$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Enums_BoxedComparableLightEnum = goog.forwardDeclare('vmbootstrap.Enums.BoxedComparableLightEnum$impl');

/**
 * @final
 * @template K, V
 * @extends {AbstractMap<K, V>}
 * @implements {NavigableMap<K, V>}
 * @implements {Serializable}
 */
class BoundedMap extends AbstractMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TreeMap<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_BoundedMap;
  /**@type {boolean} @nodts*/
  this.f_ascending__java_util_TreeMap_BoundedMap_ = false;
  /**@type {K} @nodts*/
  this.f_from__java_util_TreeMap_BoundedMap_;
  /**@type {?Bound} @nodts*/
  this.f_fromBound__java_util_TreeMap_BoundedMap_;
  /**@type {K} @nodts*/
  this.f_to__java_util_TreeMap_BoundedMap_;
  /**@type {?Bound} @nodts*/
  this.f_toBound__java_util_TreeMap_BoundedMap_;
  /**@type {BoundedEntrySet<K, V>} @nodts*/
  this.f_entrySet__java_util_TreeMap_BoundedMap_;
  /**@type {BoundedKeySet<K, V>} @nodts*/
  this.f_keySet__java_util_TreeMap_BoundedMap_;
 }
 /** @nodts @template K, V @return {!BoundedMap<K, V>} */
 static $create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(/** TreeMap<K, V> */ $outer_this, /** boolean */ ascending, /** K */ from, /** ?Bound */ fromBound, /** K */ to, /** ?Bound */ toBound) {
  BoundedMap.$clinit();
  let $instance = new BoundedMap();
  $instance.$ctor__java_util_TreeMap_BoundedMap__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound__void($outer_this, ascending, from, fromBound, to, toBound);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_BoundedMap__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound__void(/** TreeMap<K, V> */ $outer_this, /** boolean */ ascending, /** K */ from, /** ?Bound */ fromBound, /** K */ to, /** ?Bound */ toBound) {
  this.$outer_this__java_util_TreeMap_BoundedMap = $outer_this;
  this.$ctor__java_util_AbstractMap__void();
  if (!$Equality.$same(fromBound, Bound.NO_BOUND) && !$Equality.$same(toBound, Bound.NO_BOUND)) {
   InternalPreconditions.m_checkCriticalArgument__boolean__void($outer_this.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(from, to) <= 0);
  } else if (!$Equality.$same(fromBound, Bound.NO_BOUND)) {
   let unused = $outer_this.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(from, from);
  } else if (!$Equality.$same(toBound, Bound.NO_BOUND)) {
   let unused_1 = $outer_this.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(to, to);
  }
  this.f_ascending__java_util_TreeMap_BoundedMap_ = ascending;
  this.f_from__java_util_TreeMap_BoundedMap_ = from;
  this.f_fromBound__java_util_TreeMap_BoundedMap_ = fromBound;
  this.f_to__java_util_TreeMap_BoundedMap_ = to;
  this.f_toBound__java_util_TreeMap_BoundedMap_ = toBound;
 }
 /** @override @return {boolean} */
 isEmpty() {
  return $Equality.$same(this.m_endpoint__boolean__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(true), null);
 }
 /** @override @return {V} */
 get(/** * */ key) {
  return this.m_isInBounds__java_lang_Object__boolean_$p_java_util_TreeMap_BoundedMap(key) ? this.$outer_this__java_util_TreeMap_BoundedMap.get(key) : null;
 }
 /** @override @return {boolean} */
 containsKey(/** * */ key) {
  return this.m_isInBounds__java_lang_Object__boolean_$p_java_util_TreeMap_BoundedMap(key) && this.$outer_this__java_util_TreeMap_BoundedMap.containsKey(key);
 }
 /** @override @return {V} */
 put(/** K */ key, /** V */ value) {
  this.m_checkInBounds__java_lang_Object__java_util_TreeMap_Bound__java_util_TreeMap_Bound__void_$p_java_util_TreeMap_BoundedMap(key, this.f_fromBound__java_util_TreeMap_BoundedMap_, this.f_toBound__java_util_TreeMap_BoundedMap_);
  return this.$outer_this__java_util_TreeMap_BoundedMap.m_putInternal__java_lang_Object__java_lang_Object__java_lang_Object_$p_java_util_TreeMap(key, value);
 }
 /** @override @return {V} */
 putIfAbsent(/** K */ key, /** V */ value) {
  this.m_checkInBounds__java_lang_Object__java_util_TreeMap_Bound__java_util_TreeMap_Bound__void_$p_java_util_TreeMap_BoundedMap(key, this.f_fromBound__java_util_TreeMap_BoundedMap_, this.f_toBound__java_util_TreeMap_BoundedMap_);
  return this.$outer_this__java_util_TreeMap_BoundedMap.m_putInternalIfAbsent__java_lang_Object__java_lang_Object__java_lang_Object_$p_java_util_TreeMap(key, value);
 }
 /** @override @return {V} */
 remove(/** * */ key) {
  return this.m_isInBounds__java_lang_Object__boolean_$p_java_util_TreeMap_BoundedMap(key) ? this.$outer_this__java_util_TreeMap_BoundedMap.remove(key) : null;
 }
 /** @nodts @return {boolean} */
 m_isInBounds__java_lang_Object__boolean_$p_java_util_TreeMap_BoundedMap(/** * */ key) {
  return this.m_isInBounds__java_lang_Object__java_util_TreeMap_Bound__java_util_TreeMap_Bound__boolean_$p_java_util_TreeMap_BoundedMap(/**@type {K}*/ (key), this.f_fromBound__java_util_TreeMap_BoundedMap_, this.f_toBound__java_util_TreeMap_BoundedMap_);
 }
 /** @nodts @return {boolean} */
 m_isInBounds__java_lang_Object__java_util_TreeMap_Bound__java_util_TreeMap_Bound__boolean_$p_java_util_TreeMap_BoundedMap(/** K */ key, /** ?Bound */ fromBound, /** ?Bound */ toBound) {
  if ($Equality.$same(fromBound, Bound.INCLUSIVE)) {
   if (this.$outer_this__java_util_TreeMap_BoundedMap.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(key, this.f_from__java_util_TreeMap_BoundedMap_) < 0) {
    return false;
   }
  } else if ($Equality.$same(fromBound, Bound.EXCLUSIVE)) {
   if (this.$outer_this__java_util_TreeMap_BoundedMap.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(key, this.f_from__java_util_TreeMap_BoundedMap_) <= 0) {
    return false;
   }
  }
  if ($Equality.$same(toBound, Bound.INCLUSIVE)) {
   if (this.$outer_this__java_util_TreeMap_BoundedMap.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(key, this.f_to__java_util_TreeMap_BoundedMap_) > 0) {
    return false;
   }
  } else if ($Equality.$same(toBound, Bound.EXCLUSIVE)) {
   if (this.$outer_this__java_util_TreeMap_BoundedMap.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(key, this.f_to__java_util_TreeMap_BoundedMap_) >= 0) {
    return false;
   }
  }
  return true;
 }
 /** @nodts */
 m_checkInBounds__java_lang_Object__java_util_TreeMap_Bound__java_util_TreeMap_Bound__void_$p_java_util_TreeMap_BoundedMap(/** K */ key, /** ?Bound */ fromBound, /** ?Bound */ toBound) {
  if (!this.m_isInBounds__java_lang_Object__java_util_TreeMap_Bound__java_util_TreeMap_Bound__boolean_$p_java_util_TreeMap_BoundedMap(key, fromBound, toBound)) {
   InternalPreconditions.m_checkCriticalArgument__boolean__java_lang_Object__void(false, j_l_String.m_valueOf__java_lang_Object__java_lang_String(key) + ' not in range ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_from__java_util_TreeMap_BoundedMap_) + '..' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_to__java_util_TreeMap_BoundedMap_));
  }
 }
 /** @nodts @return {Node<K, V>} */
 m_bound__java_util_TreeMap_Node__java_util_TreeMap_Bound__java_util_TreeMap_Bound__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(/** Node<K, V> */ node, /** ?Bound */ fromBound, /** ?Bound */ toBound) {
  return !$Equality.$same(node, null) && this.m_isInBounds__java_lang_Object__java_util_TreeMap_Bound__java_util_TreeMap_Bound__boolean_$p_java_util_TreeMap_BoundedMap(node.m_getKey__java_lang_Object(), fromBound, toBound) ? node : null;
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_firstEntry__java_util_Map_Entry() {
  return this.$outer_this__java_util_TreeMap_BoundedMap.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(this.m_endpoint__boolean__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(true));
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_pollFirstEntry__java_util_Map_Entry() {
  let result = this.m_endpoint__boolean__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(true);
  if (!$Equality.$same(result, null)) {
   this.$outer_this__java_util_TreeMap_BoundedMap.m_removeInternal__java_util_TreeMap_Node__void_$p_java_util_TreeMap(result);
  }
  return this.$outer_this__java_util_TreeMap_BoundedMap.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(result);
 }
 /** @override @nodts @return {K} */
 m_firstKey__java_lang_Object() {
  let entry = this.m_endpoint__boolean__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(true);
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(entry, null));
  return entry.m_getKey__java_lang_Object();
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_lastEntry__java_util_Map_Entry() {
  return this.$outer_this__java_util_TreeMap_BoundedMap.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(this.m_endpoint__boolean__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(false));
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_pollLastEntry__java_util_Map_Entry() {
  let result = this.m_endpoint__boolean__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(false);
  if (!$Equality.$same(result, null)) {
   this.$outer_this__java_util_TreeMap_BoundedMap.m_removeInternal__java_util_TreeMap_Node__void_$p_java_util_TreeMap(result);
  }
  return this.$outer_this__java_util_TreeMap_BoundedMap.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(result);
 }
 /** @override @nodts @return {K} */
 m_lastKey__java_lang_Object() {
  let entry = this.m_endpoint__boolean__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(false);
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(entry, null));
  return entry.m_getKey__java_lang_Object();
 }
 /** @nodts @return {Node<K, V>} */
 m_endpoint__boolean__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(/** boolean */ first) {
  let node = null;
  if (this.f_ascending__java_util_TreeMap_BoundedMap_ == first) {
   switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(this.f_fromBound__java_util_TreeMap_BoundedMap_)) {
    case Bound.NO_BOUND: 
     node = this.$outer_this__java_util_TreeMap_BoundedMap.m_getFirst__java_util_TreeMap_Node_$p_java_util_TreeMap();
     break;
    case Bound.INCLUSIVE: 
     node = this.$outer_this__java_util_TreeMap_BoundedMap.m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(this.f_from__java_util_TreeMap_BoundedMap_, Relation.CEILING);
     break;
    case Bound.EXCLUSIVE: 
     node = this.$outer_this__java_util_TreeMap_BoundedMap.m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(this.f_from__java_util_TreeMap_BoundedMap_, Relation.HIGHER);
     break;
   }
   return this.m_bound__java_util_TreeMap_Node__java_util_TreeMap_Bound__java_util_TreeMap_Bound__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(node, Bound.NO_BOUND, this.f_toBound__java_util_TreeMap_BoundedMap_);
  } else {
   switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(this.f_toBound__java_util_TreeMap_BoundedMap_)) {
    case Bound.NO_BOUND: 
     node = this.$outer_this__java_util_TreeMap_BoundedMap.m_getLast__java_util_TreeMap_Node_$p_java_util_TreeMap();
     break;
    case Bound.INCLUSIVE: 
     node = this.$outer_this__java_util_TreeMap_BoundedMap.m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(this.f_to__java_util_TreeMap_BoundedMap_, Relation.FLOOR);
     break;
    case Bound.EXCLUSIVE: 
     node = this.$outer_this__java_util_TreeMap_BoundedMap.m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(this.f_to__java_util_TreeMap_BoundedMap_, Relation.LOWER);
     break;
   }
   return this.m_bound__java_util_TreeMap_Node__java_util_TreeMap_Bound__java_util_TreeMap_Bound__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(node, this.f_fromBound__java_util_TreeMap_BoundedMap_, Bound.NO_BOUND);
  }
 }
 /** @nodts @return {Node<K, V>} */
 m_findBounded__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(/** K */ key, /** ?Relation */ relation) {
  relation = Relation_$Overlay.m_forOrder__$devirt__java_util_TreeMap_Relation__boolean__java_util_TreeMap_Relation(relation, this.f_ascending__java_util_TreeMap_BoundedMap_);
  let fromBoundForCheck = this.f_fromBound__java_util_TreeMap_BoundedMap_;
  let toBoundForCheck = this.f_toBound__java_util_TreeMap_BoundedMap_;
  if (!$Equality.$same(this.f_toBound__java_util_TreeMap_BoundedMap_, Bound.NO_BOUND) && ($Equality.$same(relation, Relation.LOWER) || $Equality.$same(relation, Relation.FLOOR))) {
   let comparison = this.$outer_this__java_util_TreeMap_BoundedMap.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(this.f_to__java_util_TreeMap_BoundedMap_, key);
   if (comparison <= 0) {
    key = this.f_to__java_util_TreeMap_BoundedMap_;
    if ($Equality.$same(this.f_toBound__java_util_TreeMap_BoundedMap_, Bound.EXCLUSIVE)) {
     relation = Relation.LOWER;
    } else if (comparison < 0) {
     relation = Relation.FLOOR;
    }
   }
   toBoundForCheck = Bound.NO_BOUND;
  }
  if (!$Equality.$same(this.f_fromBound__java_util_TreeMap_BoundedMap_, Bound.NO_BOUND) && ($Equality.$same(relation, Relation.CEILING) || $Equality.$same(relation, Relation.HIGHER))) {
   let comparison_1 = this.$outer_this__java_util_TreeMap_BoundedMap.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(this.f_from__java_util_TreeMap_BoundedMap_, key);
   if (comparison_1 >= 0) {
    key = this.f_from__java_util_TreeMap_BoundedMap_;
    if ($Equality.$same(this.f_fromBound__java_util_TreeMap_BoundedMap_, Bound.EXCLUSIVE)) {
     relation = Relation.HIGHER;
    } else if (comparison_1 > 0) {
     relation = Relation.CEILING;
    }
   }
   fromBoundForCheck = Bound.NO_BOUND;
  }
  return this.m_bound__java_util_TreeMap_Node__java_util_TreeMap_Bound__java_util_TreeMap_Bound__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(this.$outer_this__java_util_TreeMap_BoundedMap.m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(key, relation), fromBoundForCheck, toBoundForCheck);
 }
 /** @nodts @return {K} */
 m_findBoundedKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap_BoundedMap(/** K */ key, /** ?Relation */ relation) {
  return TreeMap.m_getKeyOrNull__java_util_Map_Entry__java_lang_Object(this.m_findBounded__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(key, relation));
 }
 /** @nodts @return {Entry<K, V>} */
 m_findBoundedEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap_BoundedMap(/** K */ key, /** ?Relation */ relation) {
  return this.$outer_this__java_util_TreeMap_BoundedMap.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(this.m_findBounded__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(key, relation));
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_lowerEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {
  return this.m_findBoundedEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap_BoundedMap(key, Relation.LOWER);
 }
 /** @override @nodts @return {K} */
 m_lowerKey__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.m_findBoundedKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap_BoundedMap(key, Relation.LOWER);
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_floorEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {
  return this.m_findBoundedEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap_BoundedMap(key, Relation.FLOOR);
 }
 /** @override @nodts @return {K} */
 m_floorKey__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.m_findBoundedKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap_BoundedMap(key, Relation.FLOOR);
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_ceilingEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {
  return this.m_findBoundedEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap_BoundedMap(key, Relation.CEILING);
 }
 /** @override @nodts @return {K} */
 m_ceilingKey__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.m_findBoundedKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap_BoundedMap(key, Relation.CEILING);
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_higherEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {
  return this.m_findBoundedEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap_BoundedMap(key, Relation.HIGHER);
 }
 /** @override @nodts @return {K} */
 m_higherKey__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.m_findBoundedKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap_BoundedMap(key, Relation.HIGHER);
 }
 /** @override @nodts @return {Comparator<?>} */
 m_comparator__java_util_Comparator() {
  let forward = this.$outer_this__java_util_TreeMap_BoundedMap.m_comparator__java_util_Comparator();
  if (this.f_ascending__java_util_TreeMap_BoundedMap_) {
   return forward;
  } else {
   return /**@type {Comparator<*>}*/ (Collections.m_reverseOrder__java_util_Comparator__java_util_Comparator(forward));
  }
 }
 /** @override @nodts @return {Set<Entry<K, V>>} */
 m_entrySet__java_util_Set() {
  if ($Equality.$same(this.f_entrySet__java_util_TreeMap_BoundedMap_, null)) {
   this.f_entrySet__java_util_TreeMap_BoundedMap_ = /**@type {!BoundedEntrySet<K, V>}*/ (BoundedEntrySet.$create__java_util_TreeMap_BoundedMap(this));
  }
  return this.f_entrySet__java_util_TreeMap_BoundedMap_;
 }
 /** @override @return {!Set<K>} */
 keySet() {
  return this.m_navigableKeySet__java_util_NavigableSet();
 }
 /** @override @nodts @return {NavigableSet<K>} */
 m_navigableKeySet__java_util_NavigableSet() {
  if ($Equality.$same(this.f_keySet__java_util_TreeMap_BoundedMap_, null)) {
   this.f_keySet__java_util_TreeMap_BoundedMap_ = /**@type {!BoundedKeySet<K, V>}*/ (BoundedKeySet.$create__java_util_TreeMap_BoundedMap(this));
  }
  return this.f_keySet__java_util_TreeMap_BoundedMap_;
 }
 /** @override @nodts @return {NavigableMap<K, V>} */
 m_descendingMap__java_util_NavigableMap() {
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this.$outer_this__java_util_TreeMap_BoundedMap, !this.f_ascending__java_util_TreeMap_BoundedMap_, this.f_from__java_util_TreeMap_BoundedMap_, this.f_fromBound__java_util_TreeMap_BoundedMap_, this.f_to__java_util_TreeMap_BoundedMap_, this.f_toBound__java_util_TreeMap_BoundedMap_));
 }
 /** @override @nodts @return {NavigableSet<K>} */
 m_descendingKeySet__java_util_NavigableSet() {
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this.$outer_this__java_util_TreeMap_BoundedMap, !this.f_ascending__java_util_TreeMap_BoundedMap_, this.f_from__java_util_TreeMap_BoundedMap_, this.f_fromBound__java_util_TreeMap_BoundedMap_, this.f_to__java_util_TreeMap_BoundedMap_, this.f_toBound__java_util_TreeMap_BoundedMap_)).m_navigableKeySet__java_util_NavigableSet();
 }
 /** @override @nodts @return {NavigableMap<K, V>} */
 m_subMap__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableMap(/** K */ from, /** boolean */ fromInclusive, /** K */ to, /** boolean */ toInclusive) {
  let fromBound = fromInclusive ? Bound.INCLUSIVE : Bound.EXCLUSIVE;
  let toBound = toInclusive ? Bound.INCLUSIVE : Bound.EXCLUSIVE;
  return this.m_subMap__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound__java_util_NavigableMap_$p_java_util_TreeMap_BoundedMap(from, fromBound, to, toBound);
 }
 /** @nodts @return {NavigableMap<K, V>} */
 m_subMap__java_lang_Object__java_lang_Object__java_util_NavigableMap(/** K */ fromInclusive, /** K */ toExclusive) {
  return this.m_subMap__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound__java_util_NavigableMap_$p_java_util_TreeMap_BoundedMap(fromInclusive, Bound.INCLUSIVE, toExclusive, Bound.EXCLUSIVE);
 }
 /** @override @nodts @return {NavigableMap<K, V>} */
 m_headMap__java_lang_Object__boolean__java_util_NavigableMap(/** K */ to, /** boolean */ inclusive) {
  let toBound = inclusive ? Bound.INCLUSIVE : Bound.EXCLUSIVE;
  return this.m_subMap__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound__java_util_NavigableMap_$p_java_util_TreeMap_BoundedMap(null, Bound.NO_BOUND, to, toBound);
 }
 /** @nodts @return {NavigableMap<K, V>} */
 m_headMap__java_lang_Object__java_util_NavigableMap(/** K */ toExclusive) {
  return this.m_subMap__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound__java_util_NavigableMap_$p_java_util_TreeMap_BoundedMap(null, Bound.NO_BOUND, toExclusive, Bound.EXCLUSIVE);
 }
 /** @override @nodts @return {NavigableMap<K, V>} */
 m_tailMap__java_lang_Object__boolean__java_util_NavigableMap(/** K */ from, /** boolean */ inclusive) {
  let fromBound = inclusive ? Bound.INCLUSIVE : Bound.EXCLUSIVE;
  return this.m_subMap__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound__java_util_NavigableMap_$p_java_util_TreeMap_BoundedMap(from, fromBound, null, Bound.NO_BOUND);
 }
 /** @nodts @return {NavigableMap<K, V>} */
 m_tailMap__java_lang_Object__java_util_NavigableMap(/** K */ fromInclusive) {
  return this.m_subMap__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound__java_util_NavigableMap_$p_java_util_TreeMap_BoundedMap(fromInclusive, Bound.INCLUSIVE, null, Bound.NO_BOUND);
 }
 /** @nodts @return {NavigableMap<K, V>} */
 m_subMap__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound__java_util_NavigableMap_$p_java_util_TreeMap_BoundedMap(/** K */ from, /** ?Bound */ fromBound, /** K */ to, /** ?Bound */ toBound) {
  if (!this.f_ascending__java_util_TreeMap_BoundedMap_) {
   let fromTmp = from;
   let fromBoundTmp = fromBound;
   from = to;
   fromBound = toBound;
   to = fromTmp;
   toBound = fromBoundTmp;
  }
  if ($Equality.$same(fromBound, Bound.NO_BOUND)) {
   from = this.f_from__java_util_TreeMap_BoundedMap_;
   fromBound = this.f_fromBound__java_util_TreeMap_BoundedMap_;
  } else {
   let fromBoundToCheck = $Equality.$same(fromBound, this.f_fromBound__java_util_TreeMap_BoundedMap_) ? Bound.INCLUSIVE : this.f_fromBound__java_util_TreeMap_BoundedMap_;
   this.m_checkInBounds__java_lang_Object__java_util_TreeMap_Bound__java_util_TreeMap_Bound__void_$p_java_util_TreeMap_BoundedMap(from, fromBoundToCheck, this.f_toBound__java_util_TreeMap_BoundedMap_);
  }
  if ($Equality.$same(toBound, Bound.NO_BOUND)) {
   to = this.f_to__java_util_TreeMap_BoundedMap_;
   toBound = this.f_toBound__java_util_TreeMap_BoundedMap_;
  } else {
   let toBoundToCheck = $Equality.$same(toBound, this.f_toBound__java_util_TreeMap_BoundedMap_) ? Bound.INCLUSIVE : this.f_toBound__java_util_TreeMap_BoundedMap_;
   this.m_checkInBounds__java_lang_Object__java_util_TreeMap_Bound__java_util_TreeMap_Bound__void_$p_java_util_TreeMap_BoundedMap(to, this.f_fromBound__java_util_TreeMap_BoundedMap_, toBoundToCheck);
  }
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this.$outer_this__java_util_TreeMap_BoundedMap, this.f_ascending__java_util_TreeMap_BoundedMap_, from, fromBound, to, toBound));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigableMap<K, V>} */
 m_headMap__java_lang_Object__java_util_SortedMap(/** K */ arg0) {
  return this.m_headMap__java_lang_Object__java_util_NavigableMap(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigableMap<K, V>} */
 m_subMap__java_lang_Object__java_lang_Object__java_util_SortedMap(/** K */ arg0, /** K */ arg1) {
  return this.m_subMap__java_lang_Object__java_lang_Object__java_util_NavigableMap(arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigableMap<K, V>} */
 m_tailMap__java_lang_Object__java_util_SortedMap(/** K */ arg0) {
  return this.m_tailMap__java_lang_Object__java_util_NavigableMap(arg0);
 }
 /** @nodts */
 static $clinit() {
  BoundedMap.$clinit = () =>{};
  BoundedMap.$loadModules();
  AbstractMap.$clinit();
  Map.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoundedMap;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Map = goog.module.get('java.util.Map$impl');
  TreeMap = goog.module.get('java.util.TreeMap$impl');
  Bound = goog.module.get('java.util.TreeMap.Bound$impl');
  BoundedEntrySet = goog.module.get('java.util.TreeMap.BoundedMap.BoundedEntrySet$impl');
  BoundedKeySet = goog.module.get('java.util.TreeMap.BoundedMap.BoundedKeySet$impl');
  Relation = goog.module.get('java.util.TreeMap.Relation$impl');
  Relation_$Overlay = goog.module.get('java.util.TreeMap.Relation.$Overlay$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
NavigableMap.$markImplementor(BoundedMap);
Serializable.$markImplementor(BoundedMap);
$Util.$setClassMetadata(BoundedMap, 'java.util.TreeMap$BoundedMap');

exports = BoundedMap;

//# sourceMappingURL=TreeMap$BoundedMap.js.map
