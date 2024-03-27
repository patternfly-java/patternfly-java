goog.module('java.util.PriorityQueue$impl');

const AbstractQueue = goog.require('java.util.AbstractQueue$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Comparators = goog.forwardDeclare('java.util.Comparators$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let $1 = goog.forwardDeclare('java.util.PriorityQueue.$1$impl');
let SortedSet = goog.forwardDeclare('java.util.SortedSet$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @template E
 * @extends {AbstractQueue<E>}
 */
class PriorityQueue extends AbstractQueue {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Comparator<?>} @nodts*/
  this.f_cmp__java_util_PriorityQueue_;
  /**@type {ArrayList<E>} @nodts*/
  this.f_heap__java_util_PriorityQueue_;
 }
 /** @nodts @return {number} */
 static m_getLeftChild__int__int(/** number */ node) {
  return Math.imul(2, node) + 1 | 0;
 }
 /** @nodts @return {number} */
 static m_getParent__int__int(/** number */ node) {
  return $Primitives.coerceDivision((node - 1 | 0) / 2);
 }
 /** @nodts @return {number} */
 static m_getRightChild__int__int(/** number */ node) {
  return Math.imul(2, node) + 2 | 0;
 }
 /** @nodts @return {boolean} */
 static m_isLeaf__int__int__boolean(/** number */ node, /** number */ size) {
  return (Math.imul(node, 2) + 1 | 0) >= size;
 }
 //Factory method corresponding to constructor 'PriorityQueue()'.
 /** @nodts @template E @return {!PriorityQueue<E>} */
 static $create__() {
  PriorityQueue.$clinit();
  let $instance = new PriorityQueue();
  $instance.$ctor__java_util_PriorityQueue__void();
  return $instance;
 }
 //Initialization from constructor 'PriorityQueue()'.
 /** @nodts */
 $ctor__java_util_PriorityQueue__void() {
  this.$ctor__java_util_PriorityQueue__int__void(PriorityQueue.f_DEFAULT_INITIAL_CAPACITY__java_util_PriorityQueue_);
 }
 //Factory method corresponding to constructor 'PriorityQueue(Collection)'.
 /** @nodts @template E @return {!PriorityQueue<E>} */
 static $create__java_util_Collection(/** Collection<?> */ c) {
  PriorityQueue.$clinit();
  let $instance = new PriorityQueue();
  $instance.$ctor__java_util_PriorityQueue__java_util_Collection__void(c);
  return $instance;
 }
 //Initialization from constructor 'PriorityQueue(Collection)'.
 /** @nodts */
 $ctor__java_util_PriorityQueue__java_util_Collection__void(/** Collection<?> */ c) {
  this.$ctor__java_util_PriorityQueue__int__void(c.size());
  this.addAll(c);
 }
 //Factory method corresponding to constructor 'PriorityQueue(int)'.
 /** @nodts @template E @return {!PriorityQueue<E>} */
 static $create__int(/** number */ initialCapacity) {
  PriorityQueue.$clinit();
  let $instance = new PriorityQueue();
  $instance.$ctor__java_util_PriorityQueue__int__void(initialCapacity);
  return $instance;
 }
 //Initialization from constructor 'PriorityQueue(int)'.
 /** @nodts */
 $ctor__java_util_PriorityQueue__int__void(/** number */ initialCapacity) {
  this.$ctor__java_util_PriorityQueue__int__java_util_Comparator__void(initialCapacity, null);
 }
 //Factory method corresponding to constructor 'PriorityQueue(int, Comparator)'.
 /** @nodts @template E @return {!PriorityQueue<E>} */
 static $create__int__java_util_Comparator(/** number */ initialCapacity, /** Comparator<?> */ cmp) {
  PriorityQueue.$clinit();
  let $instance = new PriorityQueue();
  $instance.$ctor__java_util_PriorityQueue__int__java_util_Comparator__void(initialCapacity, cmp);
  return $instance;
 }
 //Initialization from constructor 'PriorityQueue(int, Comparator)'.
 /** @nodts */
 $ctor__java_util_PriorityQueue__int__java_util_Comparator__void(/** number */ initialCapacity, /** Comparator<?> */ cmp) {
  this.$ctor__java_util_AbstractQueue__void();
  this.f_heap__java_util_PriorityQueue_ = /**@type {!ArrayList<E>}*/ (ArrayList.$create__int(initialCapacity));
  this.f_cmp__java_util_PriorityQueue_ = /**@type {Comparator<*>}*/ (Comparators.m_nullToNaturalOrder__java_util_Comparator__java_util_Comparator(cmp));
 }
 //Factory method corresponding to constructor 'PriorityQueue(Comparator)'.
 /** @nodts @template E @return {!PriorityQueue<E>} */
 static $create__java_util_Comparator(/** Comparator<?> */ comparator) {
  PriorityQueue.$clinit();
  let $instance = new PriorityQueue();
  $instance.$ctor__java_util_PriorityQueue__java_util_Comparator__void(comparator);
  return $instance;
 }
 //Initialization from constructor 'PriorityQueue(Comparator)'.
 /** @nodts */
 $ctor__java_util_PriorityQueue__java_util_Comparator__void(/** Comparator<?> */ comparator) {
  this.$ctor__java_util_PriorityQueue__int__java_util_Comparator__void(PriorityQueue.f_DEFAULT_INITIAL_CAPACITY__java_util_PriorityQueue_, comparator);
 }
 //Factory method corresponding to constructor 'PriorityQueue(PriorityQueue)'.
 /** @nodts @template E @return {!PriorityQueue<E>} */
 static $create__java_util_PriorityQueue(/** PriorityQueue<?> */ c) {
  PriorityQueue.$clinit();
  let $instance = new PriorityQueue();
  $instance.$ctor__java_util_PriorityQueue__java_util_PriorityQueue__void(c);
  return $instance;
 }
 //Initialization from constructor 'PriorityQueue(PriorityQueue)'.
 /** @nodts */
 $ctor__java_util_PriorityQueue__java_util_PriorityQueue__void(/** PriorityQueue<?> */ c) {
  this.$ctor__java_util_PriorityQueue__int__java_util_Comparator__void(c.size(), /**@type {Comparator<*>}*/ (c.m_comparator__java_util_Comparator()));
  this.addAll(c);
 }
 //Factory method corresponding to constructor 'PriorityQueue(SortedSet)'.
 /** @nodts @template E @return {!PriorityQueue<E>} */
 static $create__java_util_SortedSet(/** SortedSet<?> */ c) {
  PriorityQueue.$clinit();
  let $instance = new PriorityQueue();
  $instance.$ctor__java_util_PriorityQueue__java_util_SortedSet__void(c);
  return $instance;
 }
 //Initialization from constructor 'PriorityQueue(SortedSet)'.
 /** @nodts */
 $ctor__java_util_PriorityQueue__java_util_SortedSet__void(/** SortedSet<?> */ c) {
  this.$ctor__java_util_PriorityQueue__int__java_util_Comparator__void(c.size(), /**@type {Comparator<*>}*/ (c.m_comparator__java_util_Comparator()));
  this.addAll(c);
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ c) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(c);
  InternalPreconditions.m_checkArgument__boolean__void(!$Equality.$same(c, this));
  let oldSize = this.f_heap__java_util_PriorityQueue_.size();
  for (let $iterator = c.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    this.f_heap__java_util_PriorityQueue_.add(InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(e));
   }
  }
  if (oldSize != this.f_heap__java_util_PriorityQueue_.size()) {
   this.m_makeHeap__int__void_$p_java_util_PriorityQueue(0);
   return true;
  }
  return false;
 }
 /** @override */
 clear() {
  this.f_heap__java_util_PriorityQueue_.clear();
 }
 /** @nodts @return {Comparator<?>} */
 m_comparator__java_util_Comparator() {
  return /**@type {Comparator<*>}*/ (Comparators.m_naturalOrderToNull__java_util_Comparator__java_util_Comparator(this.f_cmp__java_util_PriorityQueue_));
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.m_indexOf__java_lang_Object__int_$p_java_util_PriorityQueue(o) != (- 1 | 0);
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!$1<E>}*/ ($1.$create__java_util_PriorityQueue(this));
 }
 /** @override @nodts @return {boolean} */
 m_offer__java_lang_Object__boolean(/** E */ e) {
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(e);
  let node = this.f_heap__java_util_PriorityQueue_.size();
  this.f_heap__java_util_PriorityQueue_.add(e);
  while (node > 0) {
   let childNode = node;
   node = PriorityQueue.m_getParent__int__int(node);
   if (this.f_cmp__java_util_PriorityQueue_.m_compare__java_lang_Object__java_lang_Object__int(this.f_heap__java_util_PriorityQueue_.getAtIndex(node), e) <= 0) {
    this.f_heap__java_util_PriorityQueue_.setAtIndex(childNode, e);
    return true;
   }
   this.f_heap__java_util_PriorityQueue_.setAtIndex(childNode, this.f_heap__java_util_PriorityQueue_.getAtIndex(node));
  }
  this.f_heap__java_util_PriorityQueue_.setAtIndex(node, e);
  return true;
 }
 /** @override @nodts @return {E} */
 m_peek__java_lang_Object() {
  return this.f_heap__java_util_PriorityQueue_.isEmpty() ? null : this.f_heap__java_util_PriorityQueue_.getAtIndex(0);
 }
 /** @override @nodts @return {E} */
 m_poll__java_lang_Object() {
  let value = this.m_peek__java_lang_Object();
  if (!$Equality.$same(value, null)) {
   this.m_removeAtIndex__int__void_$p_java_util_PriorityQueue(0);
  }
  return value;
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  let index = this.m_indexOf__java_lang_Object__int_$p_java_util_PriorityQueue(o);
  if (index < 0) {
   return false;
  }
  this.m_removeAtIndex__int__void_$p_java_util_PriorityQueue(index);
  return true;
 }
 /** @override @return {boolean} */
 removeAll(/** Collection<?> */ c) {
  if (this.f_heap__java_util_PriorityQueue_.removeAll(c)) {
   this.m_makeHeap__int__void_$p_java_util_PriorityQueue(0);
   return true;
  }
  return false;
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ c) {
  if (this.f_heap__java_util_PriorityQueue_.retainAll(c)) {
   this.m_makeHeap__int__void_$p_java_util_PriorityQueue(0);
   return true;
  }
  return false;
 }
 /** @override @return {number} */
 size() {
  return this.f_heap__java_util_PriorityQueue_.size();
 }
 /** @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<E>}*/ (Spliterators.m_spliterator__java_util_Collection__int__java_util_Spliterator(this, Spliterator.f_NONNULL__java_util_Spliterator));
 }
 /** @override @return {Array<*>} */
 toArray() {
  return this.f_heap__java_util_PriorityQueue_.toArray();
 }
 /** @override @nodts @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Array<T> */ a) {
  return this.f_heap__java_util_PriorityQueue_.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(a);
 }
 /** @nodts */
 m_makeHeap__int__void_$p_java_util_PriorityQueue(/** number */ node) {
  if (this.m_isLeaf__int__boolean_$p_java_util_PriorityQueue(node)) {
   return;
  }
  this.m_makeHeap__int__void_$p_java_util_PriorityQueue(PriorityQueue.m_getLeftChild__int__int(node));
  let rightChild = PriorityQueue.m_getRightChild__int__int(node);
  if (rightChild < this.f_heap__java_util_PriorityQueue_.size()) {
   this.m_makeHeap__int__void_$p_java_util_PriorityQueue(rightChild);
  }
  this.m_mergeHeaps__int__void_$p_java_util_PriorityQueue(node);
 }
 /** @nodts */
 m_mergeHeaps__int__void_$p_java_util_PriorityQueue(/** number */ node) {
  let heapSize = this.f_heap__java_util_PriorityQueue_.size();
  let value = this.f_heap__java_util_PriorityQueue_.getAtIndex(node);
  while (!PriorityQueue.m_isLeaf__int__int__boolean(node, heapSize)) {
   let smallestChild = this.m_getSmallestChild__int__int__int_$p_java_util_PriorityQueue(node, heapSize);
   if (this.f_cmp__java_util_PriorityQueue_.m_compare__java_lang_Object__java_lang_Object__int(value, this.f_heap__java_util_PriorityQueue_.getAtIndex(smallestChild)) < 0) {
    break;
   }
   this.f_heap__java_util_PriorityQueue_.setAtIndex(node, this.f_heap__java_util_PriorityQueue_.getAtIndex(smallestChild));
   node = smallestChild;
  }
  this.f_heap__java_util_PriorityQueue_.setAtIndex(node, value);
 }
 /** @nodts @return {number} */
 m_getSmallestChild__int__int__int_$p_java_util_PriorityQueue(/** number */ node, /** number */ heapSize) {
  let /** number */ smallestChild;
  let leftChild = PriorityQueue.m_getLeftChild__int__int(node);
  let rightChild = leftChild + 1 | 0;
  smallestChild = leftChild;
  if (rightChild < heapSize && this.f_cmp__java_util_PriorityQueue_.m_compare__java_lang_Object__java_lang_Object__int(this.f_heap__java_util_PriorityQueue_.getAtIndex(rightChild), this.f_heap__java_util_PriorityQueue_.getAtIndex(leftChild)) < 0) {
   smallestChild = rightChild;
  }
  return smallestChild;
 }
 /** @nodts @return {number} */
 m_indexOf__java_lang_Object__int_$p_java_util_PriorityQueue(/** * */ o) {
  return $Equality.$same(o, null) ? - 1 | 0 : this.f_heap__java_util_PriorityQueue_.indexOf(o);
 }
 /** @nodts @return {boolean} */
 m_isLeaf__int__boolean_$p_java_util_PriorityQueue(/** number */ node) {
  return PriorityQueue.m_isLeaf__int__int__boolean(node, this.f_heap__java_util_PriorityQueue_.size());
 }
 /** @nodts */
 m_removeAtIndex__int__void_$p_java_util_PriorityQueue(/** number */ index) {
  let lastValue = this.f_heap__java_util_PriorityQueue_.removeAtIndex(this.f_heap__java_util_PriorityQueue_.size() - 1 | 0);
  if (index < this.f_heap__java_util_PriorityQueue_.size()) {
   this.f_heap__java_util_PriorityQueue_.setAtIndex(index, lastValue);
   this.m_mergeHeaps__int__void_$p_java_util_PriorityQueue(index);
  }
 }
 /** @nodts */
 static $clinit() {
  PriorityQueue.$clinit = () =>{};
  PriorityQueue.$loadModules();
  AbstractQueue.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PriorityQueue;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Comparators = goog.module.get('java.util.Comparators$impl');
  $1 = goog.module.get('java.util.PriorityQueue.$1$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number} @nodts*/
PriorityQueue.f_DEFAULT_INITIAL_CAPACITY__java_util_PriorityQueue_ = 11;
$Util.$setClassMetadata(PriorityQueue, 'java.util.PriorityQueue');

exports = PriorityQueue;

//# sourceMappingURL=PriorityQueue.js.map
