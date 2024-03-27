goog.module('java.util.TreeMap$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractMap = goog.require('java.util.AbstractMap$impl');
const NavigableMap = goog.require('java.util.NavigableMap$impl');
const SortedMap = goog.require('java.util.SortedMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let SimpleImmutableEntry = goog.forwardDeclare('java.util.AbstractMap.SimpleImmutableEntry$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Comparators = goog.forwardDeclare('java.util.Comparators$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let NavigableSet = goog.forwardDeclare('java.util.NavigableSet$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Bound = goog.forwardDeclare('java.util.TreeMap.Bound$impl');
let BoundedMap = goog.forwardDeclare('java.util.TreeMap.BoundedMap$impl');
let EntrySet = goog.forwardDeclare('java.util.TreeMap.EntrySet$impl');
let KeySet = goog.forwardDeclare('java.util.TreeMap.KeySet$impl');
let Node = goog.forwardDeclare('java.util.TreeMap.Node$impl');
let Relation = goog.forwardDeclare('java.util.TreeMap.Relation$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Enums_BoxedComparableLightEnum = goog.forwardDeclare('vmbootstrap.Enums.BoxedComparableLightEnum$impl');

/**
 * @template K, V
 * @extends {AbstractMap<K, V>}
 * @implements {SortedMap<K, V>}
 * @implements {NavigableMap<K, V>}
 * @implements {Serializable}
 */
class TreeMap extends AbstractMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Comparator<?>} @nodts*/
  this.f_comparator__java_util_TreeMap_;
  /**@type {Node<K, V>} @nodts*/
  this.f_root__java_util_TreeMap_;
  /**@type {number} @nodts*/
  this.f_size__java_util_TreeMap_ = 0;
  /**@type {number} @nodts*/
  this.f_modCount__java_util_TreeMap_ = 0;
  /**@type {EntrySet<K, V>} @nodts*/
  this.f_entrySet__java_util_TreeMap_;
  /**@type {KeySet<K, V>} @nodts*/
  this.f_keySet__java_util_TreeMap_;
 }
 //Factory method corresponding to constructor 'TreeMap()'.
 /** @nodts @template K, V @return {!TreeMap<K, V>} */
 static $create__() {
  TreeMap.$clinit();
  let $instance = new TreeMap();
  $instance.$ctor__java_util_TreeMap__void();
  return $instance;
 }
 //Initialization from constructor 'TreeMap()'.
 /** @nodts */
 $ctor__java_util_TreeMap__void() {
  this.$ctor__java_util_TreeMap__java_util_Comparator__void(/**@type {Comparator<*>}*/ (null));
 }
 //Factory method corresponding to constructor 'TreeMap(Comparator)'.
 /** @nodts @template K, V @return {!TreeMap<K, V>} */
 static $create__java_util_Comparator(/** Comparator<?> */ comparator) {
  TreeMap.$clinit();
  let $instance = new TreeMap();
  $instance.$ctor__java_util_TreeMap__java_util_Comparator__void(comparator);
  return $instance;
 }
 //Initialization from constructor 'TreeMap(Comparator)'.
 /** @nodts */
 $ctor__java_util_TreeMap__java_util_Comparator__void(/** Comparator<?> */ comparator) {
  this.$ctor__java_util_AbstractMap__void();
  this.f_comparator__java_util_TreeMap_ = /**@type {Comparator<*>}*/ (Comparators.m_nullToNaturalOrder__java_util_Comparator__java_util_Comparator(comparator));
 }
 //Factory method corresponding to constructor 'TreeMap(Map)'.
 /** @nodts @template K, V @return {!TreeMap<K, V>} */
 static $create__java_util_Map(/** Map<?, ?> */ copyFrom) {
  TreeMap.$clinit();
  let $instance = new TreeMap();
  $instance.$ctor__java_util_TreeMap__java_util_Map__void(copyFrom);
  return $instance;
 }
 //Initialization from constructor 'TreeMap(Map)'.
 /** @nodts */
 $ctor__java_util_TreeMap__java_util_Map__void(/** Map<?, ?> */ copyFrom) {
  this.$ctor__java_util_TreeMap__void();
  this.putAll(copyFrom);
 }
 //Factory method corresponding to constructor 'TreeMap(SortedMap)'.
 /** @nodts @template K, V @return {!TreeMap<K, V>} */
 static $create__java_util_SortedMap(/** SortedMap<K, ?> */ copyFrom) {
  TreeMap.$clinit();
  let $instance = new TreeMap();
  $instance.$ctor__java_util_TreeMap__java_util_SortedMap__void(copyFrom);
  return $instance;
 }
 //Initialization from constructor 'TreeMap(SortedMap)'.
 /** @nodts */
 $ctor__java_util_TreeMap__java_util_SortedMap__void(/** SortedMap<K, ?> */ copyFrom) {
  this.$ctor__java_util_TreeMap__java_util_Comparator__void(copyFrom.m_comparator__java_util_Comparator());
  this.putAll(copyFrom);
 }
 /** @override @return {number} */
 size() {
  return this.f_size__java_util_TreeMap_;
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_size__java_util_TreeMap_ == 0;
 }
 /** @override @return {V} */
 get(/** * */ key) {
  let entry = this.m_findByObject__java_lang_Object__java_util_TreeMap_Node_$p_java_util_TreeMap(key);
  return !$Equality.$same(entry, null) ? entry.m_getValue__java_lang_Object() : null;
 }
 /** @override @return {boolean} */
 containsKey(/** * */ key) {
  return !$Equality.$same(this.m_findByObject__java_lang_Object__java_util_TreeMap_Node_$p_java_util_TreeMap(key), null);
 }
 /** @override @return {V} */
 put(/** K */ key, /** V */ value) {
  return this.m_putInternal__java_lang_Object__java_lang_Object__java_lang_Object_$p_java_util_TreeMap(key, value);
 }
 /** @override @return {V} */
 putIfAbsent(/** K */ key, /** V */ value) {
  return this.m_putInternalIfAbsent__java_lang_Object__java_lang_Object__java_lang_Object_$p_java_util_TreeMap(key, value);
 }
 /** @override */
 clear() {
  this.f_root__java_util_TreeMap_ = null;
  this.f_size__java_util_TreeMap_ = 0;
  this.m_structureChanged__void_$p_java_util_TreeMap();
 }
 /** @nodts */
 m_structureChanged__void_$p_java_util_TreeMap() {
  if (!InternalPreconditions.m_isApiChecked__boolean()) {
   return;
  }
  this.f_modCount__java_util_TreeMap_ = this.f_modCount__java_util_TreeMap_ + 1 | 0;
 }
 /** @override @return {V} */
 remove(/** * */ key) {
  let node = this.m_removeInternalByKey__java_lang_Object__java_util_TreeMap_Node_$p_java_util_TreeMap(key);
  return !$Equality.$same(node, null) ? node.m_getValue__java_lang_Object() : null;
 }
 /** @nodts @return {V} */
 m_putInternal__java_lang_Object__java_lang_Object__java_lang_Object_$p_java_util_TreeMap(/** K */ key, /** V */ value) {
  return this.m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(key, Relation.CREATE).m_setValue__java_lang_Object__java_lang_Object(value);
 }
 /** @nodts @return {V} */
 m_putInternalIfAbsent__java_lang_Object__java_lang_Object__java_lang_Object_$p_java_util_TreeMap(/** K */ key, /** V */ value) {
  let prevSize = this.f_size__java_util_TreeMap_;
  let node = this.m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(key, Relation.CREATE);
  if (prevSize == this.f_size__java_util_TreeMap_) {
   return node.m_getValue__java_lang_Object();
  }
  return node.m_setValue__java_lang_Object__java_lang_Object(value);
 }
 /** @nodts @return {Node<K, V>} */
 m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(/** K */ key, /** ?Relation */ relation) {
  if ($Equality.$same(this.f_root__java_util_TreeMap_, null)) {
   if ($Equality.$same(relation, Relation.CREATE)) {
    this.f_root__java_util_TreeMap_ = /**@type {!Node<K, V>}*/ (Node.$create__java_util_TreeMap_Node__java_lang_Object(null, key));
    this.f_size__java_util_TreeMap_ = 1;
    this.m_structureChanged__void_$p_java_util_TreeMap();
    return this.f_root__java_util_TreeMap_;
   } else {
    return null;
   }
  }
  let nearest = this.f_root__java_util_TreeMap_;
  while (true) {
   let comparison = this.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(key, nearest.m_getKey__java_lang_Object());
   if (comparison == 0) {
    switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(relation)) {
     case Relation.LOWER: 
      return nearest.m_prev__java_util_TreeMap_Node_$pp_java_util();
     case Relation.FLOOR: 
     case Relation.CEILING: 
      return nearest;
     case Relation.HIGHER: 
      return nearest.m_next__java_util_TreeMap_Node_$pp_java_util();
     case Relation.CREATE: 
      return nearest;
    }
   }
   let child = comparison < 0 ? nearest.f_left__java_util_TreeMap_Node : nearest.f_right__java_util_TreeMap_Node;
   if ($Equality.$same(child, null)) {
    let /** Node<K, V> */ created;
    switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(relation)) {
     case Relation.LOWER: 
     case Relation.FLOOR: 
      return comparison < 0 ? nearest.m_prev__java_util_TreeMap_Node_$pp_java_util() : nearest;
     case Relation.CEILING: 
     case Relation.HIGHER: 
      return comparison < 0 ? nearest : nearest.m_next__java_util_TreeMap_Node_$pp_java_util();
     case Relation.CREATE: 
      created = /**@type {!Node<K, V>}*/ (Node.$create__java_util_TreeMap_Node__java_lang_Object(nearest, key));
      if (comparison < 0) {
       nearest.f_left__java_util_TreeMap_Node = created;
      } else {
       nearest.f_right__java_util_TreeMap_Node = created;
      }
      this.f_size__java_util_TreeMap_ = this.f_size__java_util_TreeMap_ + 1 | 0;
      this.m_structureChanged__void_$p_java_util_TreeMap();
      this.m_rebalance__java_util_TreeMap_Node__boolean__void_$p_java_util_TreeMap(nearest, true);
      return created;
    }
   }
   nearest = child;
  }
 }
 /** @nodts @return {K} */
 m_findKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap(/** K */ key, /** ?Relation */ relation) {
  return TreeMap.m_getKeyOrNull__java_util_Map_Entry__java_lang_Object(this.m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(key, relation));
 }
 /** @nodts @return {Entry<K, V>} */
 m_findEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap(/** K */ key, /** ?Relation */ relation) {
  return this.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(this.m_find__java_lang_Object__java_util_TreeMap_Relation__java_util_TreeMap_Node_$p_java_util_TreeMap(key, relation));
 }
 /** @nodts @return {Node<K, V>} */
 m_findByObject__java_lang_Object__java_util_TreeMap_Node_$p_java_util_TreeMap(/** * */ key) {
  let node = this.f_root__java_util_TreeMap_;
  while (!$Equality.$same(node, null)) {
   let c = this.f_comparator__java_util_TreeMap_.m_compare__java_lang_Object__java_lang_Object__int(/**@type {K}*/ (key), node.m_getKey__java_lang_Object());
   if (c == 0) {
    return node;
   }
   node = c < 0 ? node.f_left__java_util_TreeMap_Node : node.f_right__java_util_TreeMap_Node;
  }
  return null;
 }
 /** @nodts @return {Node<K, V>} */
 m_findByEntry__java_util_Map_Entry__java_util_TreeMap_Node_$p_java_util_TreeMap(/** Entry<?, ?> */ entry) {
  let mine = this.m_findByObject__java_lang_Object__java_util_TreeMap_Node_$p_java_util_TreeMap(entry.m_getKey__java_lang_Object());
  let valuesEqual = !$Equality.$same(mine, null) && Objects.m_equals__java_lang_Object__java_lang_Object__boolean(mine.m_getValue__java_lang_Object(), entry.m_getValue__java_lang_Object());
  return valuesEqual ? mine : null;
 }
 /** @nodts */
 m_removeInternal__java_util_TreeMap_Node__void_$p_java_util_TreeMap(/** Node<K, V> */ node) {
  let left = node.f_left__java_util_TreeMap_Node;
  let right = node.f_right__java_util_TreeMap_Node;
  let originalParent = node.f_parent__java_util_TreeMap_Node;
  if (!$Equality.$same(left, null) && !$Equality.$same(right, null)) {
   let adjacent = left.f_height__java_util_TreeMap_Node > right.f_height__java_util_TreeMap_Node ? left.m_last__java_util_TreeMap_Node_$pp_java_util() : right.m_first__java_util_TreeMap_Node_$pp_java_util();
   this.m_removeInternal__java_util_TreeMap_Node__void_$p_java_util_TreeMap(adjacent);
   let leftHeight = 0;
   left = node.f_left__java_util_TreeMap_Node;
   if (!$Equality.$same(left, null)) {
    leftHeight = left.f_height__java_util_TreeMap_Node;
    adjacent.f_left__java_util_TreeMap_Node = left;
    left.f_parent__java_util_TreeMap_Node = adjacent;
    node.f_left__java_util_TreeMap_Node = null;
   }
   let rightHeight = 0;
   right = node.f_right__java_util_TreeMap_Node;
   if (!$Equality.$same(right, null)) {
    rightHeight = right.f_height__java_util_TreeMap_Node;
    adjacent.f_right__java_util_TreeMap_Node = right;
    right.f_parent__java_util_TreeMap_Node = adjacent;
    node.f_right__java_util_TreeMap_Node = null;
   }
   adjacent.f_height__java_util_TreeMap_Node = Math.max(leftHeight, rightHeight) + 1 | 0;
   this.m_replaceInParent__java_util_TreeMap_Node__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node, adjacent);
   return;
  } else if (!$Equality.$same(left, null)) {
   this.m_replaceInParent__java_util_TreeMap_Node__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node, left);
   node.f_left__java_util_TreeMap_Node = null;
  } else if (!$Equality.$same(right, null)) {
   this.m_replaceInParent__java_util_TreeMap_Node__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node, right);
   node.f_right__java_util_TreeMap_Node = null;
  } else {
   this.m_replaceInParent__java_util_TreeMap_Node__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node, null);
  }
  this.m_rebalance__java_util_TreeMap_Node__boolean__void_$p_java_util_TreeMap(originalParent, false);
  this.f_size__java_util_TreeMap_ = this.f_size__java_util_TreeMap_ - 1 | 0;
  this.m_structureChanged__void_$p_java_util_TreeMap();
 }
 /** @nodts @return {Node<K, V>} */
 m_removeInternalByKey__java_lang_Object__java_util_TreeMap_Node_$p_java_util_TreeMap(/** * */ key) {
  let node = this.m_findByObject__java_lang_Object__java_util_TreeMap_Node_$p_java_util_TreeMap(key);
  if (!$Equality.$same(node, null)) {
   this.m_removeInternal__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node);
  }
  return node;
 }
 /** @nodts */
 m_replaceInParent__java_util_TreeMap_Node__java_util_TreeMap_Node__void_$p_java_util_TreeMap(/** Node<K, V> */ node, /** Node<K, V> */ replacement) {
  let parent = node.f_parent__java_util_TreeMap_Node;
  node.f_parent__java_util_TreeMap_Node = null;
  if (!$Equality.$same(replacement, null)) {
   replacement.f_parent__java_util_TreeMap_Node = parent;
  }
  if (!$Equality.$same(parent, null)) {
   if ($Equality.$same(parent.f_left__java_util_TreeMap_Node, node)) {
    parent.f_left__java_util_TreeMap_Node = replacement;
   } else {
    parent.f_right__java_util_TreeMap_Node = replacement;
   }
  } else {
   this.f_root__java_util_TreeMap_ = replacement;
  }
 }
 /** @nodts */
 m_rebalance__java_util_TreeMap_Node__boolean__void_$p_java_util_TreeMap(/** Node<K, V> */ unbalanced, /** boolean */ insert) {
  for (let node = unbalanced; !$Equality.$same(node, null); node = node.f_parent__java_util_TreeMap_Node) {
   let left = node.f_left__java_util_TreeMap_Node;
   let right = node.f_right__java_util_TreeMap_Node;
   let leftHeight = !$Equality.$same(left, null) ? left.f_height__java_util_TreeMap_Node : 0;
   let rightHeight = !$Equality.$same(right, null) ? right.f_height__java_util_TreeMap_Node : 0;
   let delta = leftHeight - rightHeight | 0;
   if (delta == (- 2 | 0)) {
    let rightLeft = right.f_left__java_util_TreeMap_Node;
    let rightRight = right.f_right__java_util_TreeMap_Node;
    let rightRightHeight = !$Equality.$same(rightRight, null) ? rightRight.f_height__java_util_TreeMap_Node : 0;
    let rightLeftHeight = !$Equality.$same(rightLeft, null) ? rightLeft.f_height__java_util_TreeMap_Node : 0;
    let rightDelta = rightLeftHeight - rightRightHeight | 0;
    if (rightDelta == (- 1 | 0) || rightDelta == 0 && !insert) {
     this.m_rotateLeft__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node);
    } else {
     this.m_rotateRight__java_util_TreeMap_Node__void_$p_java_util_TreeMap(right);
     this.m_rotateLeft__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node);
    }
    if (insert) {
     break;
    }
   } else if (delta == 2) {
    let leftLeft = left.f_left__java_util_TreeMap_Node;
    let leftRight = left.f_right__java_util_TreeMap_Node;
    let leftRightHeight = !$Equality.$same(leftRight, null) ? leftRight.f_height__java_util_TreeMap_Node : 0;
    let leftLeftHeight = !$Equality.$same(leftLeft, null) ? leftLeft.f_height__java_util_TreeMap_Node : 0;
    let leftDelta = leftLeftHeight - leftRightHeight | 0;
    if (leftDelta == 1 || leftDelta == 0 && !insert) {
     this.m_rotateRight__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node);
    } else {
     this.m_rotateLeft__java_util_TreeMap_Node__void_$p_java_util_TreeMap(left);
     this.m_rotateRight__java_util_TreeMap_Node__void_$p_java_util_TreeMap(node);
    }
    if (insert) {
     break;
    }
   } else if (delta == 0) {
    node.f_height__java_util_TreeMap_Node = leftHeight + 1 | 0;
    if (insert) {
     break;
    }
   } else {
    node.f_height__java_util_TreeMap_Node = Math.max(leftHeight, rightHeight) + 1 | 0;
    if (!insert) {
     break;
    }
   }
  }
 }
 /** @nodts */
 m_rotateLeft__java_util_TreeMap_Node__void_$p_java_util_TreeMap(/** Node<K, V> */ root) {
  let left = root.f_left__java_util_TreeMap_Node;
  let pivot = root.f_right__java_util_TreeMap_Node;
  let pivotLeft = pivot.f_left__java_util_TreeMap_Node;
  let pivotRight = pivot.f_right__java_util_TreeMap_Node;
  root.f_right__java_util_TreeMap_Node = pivotLeft;
  if (!$Equality.$same(pivotLeft, null)) {
   pivotLeft.f_parent__java_util_TreeMap_Node = root;
  }
  this.m_replaceInParent__java_util_TreeMap_Node__java_util_TreeMap_Node__void_$p_java_util_TreeMap(root, pivot);
  pivot.f_left__java_util_TreeMap_Node = root;
  root.f_parent__java_util_TreeMap_Node = pivot;
  root.f_height__java_util_TreeMap_Node = Math.max(!$Equality.$same(left, null) ? left.f_height__java_util_TreeMap_Node : 0, !$Equality.$same(pivotLeft, null) ? pivotLeft.f_height__java_util_TreeMap_Node : 0) + 1 | 0;
  pivot.f_height__java_util_TreeMap_Node = Math.max(root.f_height__java_util_TreeMap_Node, !$Equality.$same(pivotRight, null) ? pivotRight.f_height__java_util_TreeMap_Node : 0) + 1 | 0;
 }
 /** @nodts */
 m_rotateRight__java_util_TreeMap_Node__void_$p_java_util_TreeMap(/** Node<K, V> */ root) {
  let pivot = root.f_left__java_util_TreeMap_Node;
  let right = root.f_right__java_util_TreeMap_Node;
  let pivotLeft = pivot.f_left__java_util_TreeMap_Node;
  let pivotRight = pivot.f_right__java_util_TreeMap_Node;
  root.f_left__java_util_TreeMap_Node = pivotRight;
  if (!$Equality.$same(pivotRight, null)) {
   pivotRight.f_parent__java_util_TreeMap_Node = root;
  }
  this.m_replaceInParent__java_util_TreeMap_Node__java_util_TreeMap_Node__void_$p_java_util_TreeMap(root, pivot);
  pivot.f_right__java_util_TreeMap_Node = root;
  root.f_parent__java_util_TreeMap_Node = pivot;
  root.f_height__java_util_TreeMap_Node = Math.max(!$Equality.$same(right, null) ? right.f_height__java_util_TreeMap_Node : 0, !$Equality.$same(pivotRight, null) ? pivotRight.f_height__java_util_TreeMap_Node : 0) + 1 | 0;
  pivot.f_height__java_util_TreeMap_Node = Math.max(root.f_height__java_util_TreeMap_Node, !$Equality.$same(pivotLeft, null) ? pivotLeft.f_height__java_util_TreeMap_Node : 0) + 1 | 0;
 }
 /** @nodts @return {SimpleImmutableEntry<K, V>} */
 m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(/** Entry<K, V> */ entry) {
  return $Equality.$same(entry, null) ? null : /**@type {!SimpleImmutableEntry<K, V>}*/ (SimpleImmutableEntry.$create__java_util_Map_Entry(entry));
 }
 /** @nodts @return {Node<K, V>} */
 m_getFirst__java_util_TreeMap_Node_$p_java_util_TreeMap() {
  return $Equality.$same(this.f_root__java_util_TreeMap_, null) ? null : this.f_root__java_util_TreeMap_.m_first__java_util_TreeMap_Node_$pp_java_util();
 }
 /** @nodts @return {Node<K, V>} */
 m_getLast__java_util_TreeMap_Node_$p_java_util_TreeMap() {
  return $Equality.$same(this.f_root__java_util_TreeMap_, null) ? null : this.f_root__java_util_TreeMap_.m_last__java_util_TreeMap_Node_$pp_java_util();
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_firstEntry__java_util_Map_Entry() {
  return this.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(this.m_getFirst__java_util_TreeMap_Node_$p_java_util_TreeMap());
 }
 /** @nodts @return {Node<K, V>} */
 m_internalPollFirstEntry__java_util_TreeMap_Node_$p_java_util_TreeMap() {
  if ($Equality.$same(this.f_root__java_util_TreeMap_, null)) {
   return null;
  }
  let result = this.f_root__java_util_TreeMap_.m_first__java_util_TreeMap_Node_$pp_java_util();
  this.m_removeInternal__java_util_TreeMap_Node__void_$p_java_util_TreeMap(result);
  return result;
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_pollFirstEntry__java_util_Map_Entry() {
  return this.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(this.m_internalPollFirstEntry__java_util_TreeMap_Node_$p_java_util_TreeMap());
 }
 /** @override @nodts @return {K} */
 m_firstKey__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(this.f_root__java_util_TreeMap_, null));
  return this.f_root__java_util_TreeMap_.m_first__java_util_TreeMap_Node_$pp_java_util().m_getKey__java_lang_Object();
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_lastEntry__java_util_Map_Entry() {
  return this.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(this.m_getLast__java_util_TreeMap_Node_$p_java_util_TreeMap());
 }
 /** @nodts @return {Entry<K, V>} */
 m_internalPollLastEntry__java_util_Map_Entry_$p_java_util_TreeMap() {
  if ($Equality.$same(this.f_root__java_util_TreeMap_, null)) {
   return null;
  }
  let result = this.f_root__java_util_TreeMap_.m_last__java_util_TreeMap_Node_$pp_java_util();
  this.m_removeInternal__java_util_TreeMap_Node__void_$p_java_util_TreeMap(result);
  return result;
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_pollLastEntry__java_util_Map_Entry() {
  return this.m_immutableCopy__java_util_Map_Entry__java_util_AbstractMap_SimpleImmutableEntry_$p_java_util_TreeMap(this.m_internalPollLastEntry__java_util_Map_Entry_$p_java_util_TreeMap());
 }
 /** @override @nodts @return {K} */
 m_lastKey__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(this.f_root__java_util_TreeMap_, null));
  return this.f_root__java_util_TreeMap_.m_last__java_util_TreeMap_Node_$pp_java_util().m_getKey__java_lang_Object();
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_lowerEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {
  return this.m_findEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap(key, Relation.LOWER);
 }
 /** @override @nodts @return {K} */
 m_lowerKey__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.m_findKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap(key, Relation.LOWER);
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_floorEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {
  return this.m_findEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap(key, Relation.FLOOR);
 }
 /** @override @nodts @return {K} */
 m_floorKey__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.m_findKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap(key, Relation.FLOOR);
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_ceilingEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {
  return this.m_findEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap(key, Relation.CEILING);
 }
 /** @override @nodts @return {K} */
 m_ceilingKey__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.m_findKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap(key, Relation.CEILING);
 }
 /** @override @nodts @return {Entry<K, V>} */
 m_higherEntry__java_lang_Object__java_util_Map_Entry(/** K */ key) {
  return this.m_findEntry__java_lang_Object__java_util_TreeMap_Relation__java_util_Map_Entry_$p_java_util_TreeMap(key, Relation.HIGHER);
 }
 /** @override @nodts @return {K} */
 m_higherKey__java_lang_Object__java_lang_Object(/** K */ key) {
  return this.m_findKey__java_lang_Object__java_util_TreeMap_Relation__java_lang_Object_$p_java_util_TreeMap(key, Relation.HIGHER);
 }
 /** @override @nodts @return {Comparator<?>} */
 m_comparator__java_util_Comparator() {
  return /**@type {Comparator<*>}*/ (Comparators.m_naturalOrderToNull__java_util_Comparator__java_util_Comparator(this.f_comparator__java_util_TreeMap_));
 }
 /** @override @nodts @return {Set<Entry<K, V>>} */
 m_entrySet__java_util_Set() {
  if ($Equality.$same(this.f_entrySet__java_util_TreeMap_, null)) {
   this.f_entrySet__java_util_TreeMap_ = /**@type {!EntrySet<K, V>}*/ (EntrySet.$create__java_util_TreeMap(this));
  }
  return this.f_entrySet__java_util_TreeMap_;
 }
 /** @override @return {!Set<K>} */
 keySet() {
  return this.m_navigableKeySet__java_util_NavigableSet();
 }
 /** @override @nodts @return {NavigableSet<K>} */
 m_navigableKeySet__java_util_NavigableSet() {
  if ($Equality.$same(this.f_keySet__java_util_TreeMap_, null)) {
   this.f_keySet__java_util_TreeMap_ = /**@type {!KeySet<K, V>}*/ (KeySet.$create__java_util_TreeMap(this));
  }
  return this.f_keySet__java_util_TreeMap_;
 }
 /** @override @nodts @return {NavigableMap<K, V>} */
 m_subMap__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableMap(/** K */ from, /** boolean */ fromInclusive, /** K */ to, /** boolean */ toInclusive) {
  let fromBound = fromInclusive ? Bound.INCLUSIVE : Bound.EXCLUSIVE;
  let toBound = toInclusive ? Bound.INCLUSIVE : Bound.EXCLUSIVE;
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this, true, from, fromBound, to, toBound));
 }
 /** @override @nodts @return {SortedMap<K, V>} */
 m_subMap__java_lang_Object__java_lang_Object__java_util_SortedMap(/** K */ fromInclusive, /** K */ toExclusive) {
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this, true, fromInclusive, Bound.INCLUSIVE, toExclusive, Bound.EXCLUSIVE));
 }
 /** @override @nodts @return {NavigableMap<K, V>} */
 m_headMap__java_lang_Object__boolean__java_util_NavigableMap(/** K */ to, /** boolean */ inclusive) {
  let toBound = inclusive ? Bound.INCLUSIVE : Bound.EXCLUSIVE;
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this, true, null, Bound.NO_BOUND, to, toBound));
 }
 /** @override @nodts @return {SortedMap<K, V>} */
 m_headMap__java_lang_Object__java_util_SortedMap(/** K */ toExclusive) {
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this, true, null, Bound.NO_BOUND, toExclusive, Bound.EXCLUSIVE));
 }
 /** @override @nodts @return {NavigableMap<K, V>} */
 m_tailMap__java_lang_Object__boolean__java_util_NavigableMap(/** K */ from, /** boolean */ inclusive) {
  let fromBound = inclusive ? Bound.INCLUSIVE : Bound.EXCLUSIVE;
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this, true, from, fromBound, null, Bound.NO_BOUND));
 }
 /** @override @nodts @return {SortedMap<K, V>} */
 m_tailMap__java_lang_Object__java_util_SortedMap(/** K */ fromInclusive) {
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this, true, fromInclusive, Bound.INCLUSIVE, null, Bound.NO_BOUND));
 }
 /** @override @nodts @return {NavigableMap<K, V>} */
 m_descendingMap__java_util_NavigableMap() {
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this, false, null, Bound.NO_BOUND, null, Bound.NO_BOUND));
 }
 /** @override @nodts @return {NavigableSet<K>} */
 m_descendingKeySet__java_util_NavigableSet() {
  return /**@type {!BoundedMap<K, V>}*/ (BoundedMap.$create__java_util_TreeMap__boolean__java_lang_Object__java_util_TreeMap_Bound__java_lang_Object__java_util_TreeMap_Bound(this, false, null, Bound.NO_BOUND, null, Bound.NO_BOUND)).m_navigableKeySet__java_util_NavigableSet();
 }
 /** @nodts @template K_1 @return {K_1} */
 static m_getKeyOrNull__java_util_Map_Entry__java_lang_Object(/** Entry<K_1, ?> */ entry) {
  TreeMap.$clinit();
  return $Equality.$same(entry, null) ? null : entry.m_getKey__java_lang_Object();
 }
 /** @nodts */
 static $clinit() {
  TreeMap.$clinit = () =>{};
  TreeMap.$loadModules();
  AbstractMap.$clinit();
  Map.$clinit();
  Map.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TreeMap;
 }
 
 /** @nodts */
 static $loadModules() {
  SimpleImmutableEntry = goog.module.get('java.util.AbstractMap.SimpleImmutableEntry$impl');
  Comparators = goog.module.get('java.util.Comparators$impl');
  Map = goog.module.get('java.util.Map$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Bound = goog.module.get('java.util.TreeMap.Bound$impl');
  BoundedMap = goog.module.get('java.util.TreeMap.BoundedMap$impl');
  EntrySet = goog.module.get('java.util.TreeMap.EntrySet$impl');
  KeySet = goog.module.get('java.util.TreeMap.KeySet$impl');
  Node = goog.module.get('java.util.TreeMap.Node$impl');
  Relation = goog.module.get('java.util.TreeMap.Relation$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
SortedMap.$markImplementor(TreeMap);
NavigableMap.$markImplementor(TreeMap);
Serializable.$markImplementor(TreeMap);
$Util.$setClassMetadata(TreeMap, 'java.util.TreeMap');

exports = TreeMap;

//# sourceMappingURL=TreeMap.js.map
