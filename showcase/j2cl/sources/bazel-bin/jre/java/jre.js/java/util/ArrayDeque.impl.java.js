goog.module('java.util.ArrayDeque$impl');

const Cloneable = goog.require('java.lang.Cloneable$impl');
const AbstractCollection = goog.require('java.util.AbstractCollection$impl');
const Deque = goog.require('java.util.Deque$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let DescendingIteratorImpl = goog.forwardDeclare('java.util.ArrayDeque.DescendingIteratorImpl$impl');
let IteratorImpl = goog.forwardDeclare('java.util.ArrayDeque.IteratorImpl$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let ConcurrentModificationException = goog.forwardDeclare('java.util.ConcurrentModificationException$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template E
 * @extends {AbstractCollection<E>}
 * @implements {Deque<E>}
 * @implements {Cloneable}
 */
class ArrayDeque extends AbstractCollection {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<E>} @nodts*/
  this.f_array__java_util_ArrayDeque_;
  /**@type {number} @nodts*/
  this.f_head__java_util_ArrayDeque_ = 0;
  /**@type {number} @nodts*/
  this.f_tail__java_util_ArrayDeque_ = 0;
 }
 /** @nodts */
 static m_checkConcurrentModification__boolean__void(/** boolean */ expression) {
  ArrayDeque.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(ConcurrentModificationException.$create__());
  }
 }
 /** @nodts @return {number} */
 static m_nextArrayLength__int__int(/** number */ numElements) {
  return ArrayDeque.m_nextPowerOfTwo__int__int(Math.max(ArrayDeque.f_MIN_INITIAL_CAPACITY__java_util_ArrayDeque_, numElements));
 }
 /** @nodts @return {number} */
 static m_nextPowerOfTwo__int__int(/** number */ num) {
  return Integer.m_highestOneBit__int__int(num) << 1;
 }
 //Factory method corresponding to constructor 'ArrayDeque()'.
 /** @nodts @template E @return {!ArrayDeque<E>} */
 static $create__() {
  ArrayDeque.$clinit();
  let $instance = new ArrayDeque();
  $instance.$ctor__java_util_ArrayDeque__void();
  return $instance;
 }
 //Initialization from constructor 'ArrayDeque()'.
 /** @nodts */
 $ctor__java_util_ArrayDeque__void() {
  this.$ctor__java_util_AbstractCollection__void();
  this.f_array__java_util_ArrayDeque_ = /**@type {!Array<E>}*/ (new Array(ArrayDeque.f_MIN_INITIAL_CAPACITY__java_util_ArrayDeque_));
 }
 //Factory method corresponding to constructor 'ArrayDeque(int)'.
 /** @nodts @template E @return {!ArrayDeque<E>} */
 static $create__int(/** number */ numElements) {
  ArrayDeque.$clinit();
  let $instance = new ArrayDeque();
  $instance.$ctor__java_util_ArrayDeque__int__void(numElements);
  return $instance;
 }
 //Initialization from constructor 'ArrayDeque(int)'.
 /** @nodts */
 $ctor__java_util_ArrayDeque__int__void(/** number */ numElements) {
  this.$ctor__java_util_AbstractCollection__void();
  this.f_array__java_util_ArrayDeque_ = /**@type {!Array<E>}*/ (new Array(ArrayDeque.m_nextArrayLength__int__int(numElements)));
 }
 //Factory method corresponding to constructor 'ArrayDeque(Collection)'.
 /** @nodts @template E @return {!ArrayDeque<E>} */
 static $create__java_util_Collection(/** Collection<?> */ c) {
  ArrayDeque.$clinit();
  let $instance = new ArrayDeque();
  $instance.$ctor__java_util_ArrayDeque__java_util_Collection__void(c);
  return $instance;
 }
 //Initialization from constructor 'ArrayDeque(Collection)'.
 /** @nodts */
 $ctor__java_util_ArrayDeque__java_util_Collection__void(/** Collection<?> */ c) {
  this.$ctor__java_util_ArrayDeque__int__void(c.size());
  this.addAll(c);
 }
 /** @override @return {boolean} */
 add(/** E */ e) {
  this.m_addLast__java_lang_Object__void(e);
  return true;
 }
 /** @override @nodts */
 m_addFirst__java_lang_Object__void(/** E */ e) {
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(e);
  this.f_head__java_util_ArrayDeque_ = (this.f_head__java_util_ArrayDeque_ - 1 | 0) & (this.f_array__java_util_ArrayDeque_.length - 1 | 0);
  $Arrays.$set(this.f_array__java_util_ArrayDeque_, this.f_head__java_util_ArrayDeque_, e);
  this.m_ensureCapacity__void_$p_java_util_ArrayDeque();
 }
 /** @override @nodts */
 m_addLast__java_lang_Object__void(/** E */ e) {
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(e);
  $Arrays.$set(this.f_array__java_util_ArrayDeque_, this.f_tail__java_util_ArrayDeque_, e);
  this.f_tail__java_util_ArrayDeque_ = (this.f_tail__java_util_ArrayDeque_ + 1 | 0) & (this.f_array__java_util_ArrayDeque_.length - 1 | 0);
  this.m_ensureCapacity__void_$p_java_util_ArrayDeque();
 }
 /** @override */
 clear() {
  if (this.f_head__java_util_ArrayDeque_ == this.f_tail__java_util_ArrayDeque_) {
   return;
  }
  this.f_array__java_util_ArrayDeque_ = /**@type {!Array<E>}*/ (new Array(ArrayDeque.f_MIN_INITIAL_CAPACITY__java_util_ArrayDeque_));
  this.f_head__java_util_ArrayDeque_ = 0;
  this.f_tail__java_util_ArrayDeque_ = 0;
 }
 /** @nodts @return {*} */
 m_clone__java_lang_Object() {
  return /**@type {!ArrayDeque<E>}*/ (ArrayDeque.$create__java_util_Collection(this));
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.m_contains__java_util_Iterator__java_lang_Object__boolean_$p_java_util_ArrayDeque(this.m_iterator__java_util_Iterator(), o);
 }
 /** @override @nodts @return {Iterator<E>} */
 m_descendingIterator__java_util_Iterator() {
  return /**@type {!DescendingIteratorImpl<E>}*/ (DescendingIteratorImpl.$create__java_util_ArrayDeque(this));
 }
 /** @override @nodts @return {E} */
 m_element__java_lang_Object() {
  return this.m_getFirst__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_getFirst__java_lang_Object() {
  let e = this.m_peekFirstElement__java_lang_Object_$p_java_util_ArrayDeque();
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(e, null));
  return e;
 }
 /** @override @nodts @return {E} */
 m_getLast__java_lang_Object() {
  let e = this.m_peekLastElement__java_lang_Object_$p_java_util_ArrayDeque();
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(e, null));
  return e;
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_head__java_util_ArrayDeque_ == this.f_tail__java_util_ArrayDeque_;
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!IteratorImpl<E>}*/ (IteratorImpl.$create__java_util_ArrayDeque(this));
 }
 /** @override @nodts @return {boolean} */
 m_offer__java_lang_Object__boolean(/** E */ e) {
  return this.m_offerLast__java_lang_Object__boolean(e);
 }
 /** @override @nodts @return {boolean} */
 m_offerFirst__java_lang_Object__boolean(/** E */ e) {
  this.m_addFirst__java_lang_Object__void(e);
  return true;
 }
 /** @override @nodts @return {boolean} */
 m_offerLast__java_lang_Object__boolean(/** E */ e) {
  this.m_addLast__java_lang_Object__void(e);
  return true;
 }
 /** @override @nodts @return {E} */
 m_peek__java_lang_Object() {
  return this.m_peekFirst__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_peekFirst__java_lang_Object() {
  return this.m_peekFirstElement__java_lang_Object_$p_java_util_ArrayDeque();
 }
 /** @override @nodts @return {E} */
 m_peekLast__java_lang_Object() {
  return this.m_peekLastElement__java_lang_Object_$p_java_util_ArrayDeque();
 }
 /** @override @nodts @return {E} */
 m_poll__java_lang_Object() {
  return this.m_pollFirst__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_pollFirst__java_lang_Object() {
  let e = this.m_peekFirstElement__java_lang_Object_$p_java_util_ArrayDeque();
  if ($Equality.$same(e, null)) {
   return null;
  }
  $Arrays.$set(this.f_array__java_util_ArrayDeque_, this.f_head__java_util_ArrayDeque_, null);
  this.f_head__java_util_ArrayDeque_ = (this.f_head__java_util_ArrayDeque_ + 1 | 0) & (this.f_array__java_util_ArrayDeque_.length - 1 | 0);
  return e;
 }
 /** @override @nodts @return {E} */
 m_pollLast__java_lang_Object() {
  let e = this.m_peekLastElement__java_lang_Object_$p_java_util_ArrayDeque();
  if ($Equality.$same(e, null)) {
   return null;
  }
  this.f_tail__java_util_ArrayDeque_ = (this.f_tail__java_util_ArrayDeque_ - 1 | 0) & (this.f_array__java_util_ArrayDeque_.length - 1 | 0);
  $Arrays.$set(this.f_array__java_util_ArrayDeque_, this.f_tail__java_util_ArrayDeque_, null);
  return e;
 }
 /** @override @nodts @return {E} */
 m_pop__java_lang_Object() {
  return this.m_removeFirst__java_lang_Object();
 }
 /** @override @nodts */
 m_push__java_lang_Object__void(/** E */ e) {
  this.m_addFirst__java_lang_Object__void(e);
 }
 /** @override @nodts @return {E} */
 m_remove__java_lang_Object() {
  return this.m_removeFirst__java_lang_Object();
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  return this.m_removeFirstOccurrence__java_lang_Object__boolean(o);
 }
 /** @override @nodts @return {E} */
 m_removeFirst__java_lang_Object() {
  let e = this.m_pollFirst__java_lang_Object();
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(e, null));
  return e;
 }
 /** @override @nodts @return {boolean} */
 m_removeFirstOccurrence__java_lang_Object__boolean(/** * */ o) {
  return this.m_remove__java_util_Iterator__java_lang_Object__boolean_$p_java_util_ArrayDeque(this.m_iterator__java_util_Iterator(), o);
 }
 /** @override @nodts @return {E} */
 m_removeLast__java_lang_Object() {
  let e = this.m_pollLast__java_lang_Object();
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(e, null));
  return e;
 }
 /** @override @nodts @return {boolean} */
 m_removeLastOccurrence__java_lang_Object__boolean(/** * */ o) {
  return this.m_remove__java_util_Iterator__java_lang_Object__boolean_$p_java_util_ArrayDeque(this.m_descendingIterator__java_util_Iterator(), o);
 }
 /** @override @return {number} */
 size() {
  return (this.f_tail__java_util_ArrayDeque_ - this.f_head__java_util_ArrayDeque_ | 0) & (this.f_array__java_util_ArrayDeque_.length - 1 | 0);
 }
 /** @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<E>}*/ (Spliterators.m_spliterator__java_util_Collection__int__java_util_Spliterator(this, Spliterator.f_NONNULL__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator));
 }
 /** @override @nodts @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Array<T> */ out) {
  let size = this.size();
  if (out.length < size) {
   out = ArrayHelper.m_createFrom__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object(out, size);
  }
  this.m_copyElements__arrayOf_java_lang_Object__int__void_$p_java_util_ArrayDeque(out, size);
  if (out.length > size) {
   $Arrays.$set(out, size, null);
  }
  return out;
 }
 /** @nodts @return {boolean} */
 m_contains__java_util_Iterator__java_lang_Object__boolean_$p_java_util_ArrayDeque(/** Iterator<E> */ it, /** * */ o) {
  if ($Equality.$same(o, null)) {
   return false;
  }
  while (it.m_hasNext__boolean()) {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object__boolean(o, it.m_next__java_lang_Object())) {
    return true;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_remove__java_util_Iterator__java_lang_Object__boolean_$p_java_util_ArrayDeque(/** Iterator<E> */ it, /** * */ o) {
  if (this.m_contains__java_util_Iterator__java_lang_Object__boolean_$p_java_util_ArrayDeque(it, o)) {
   it.m_remove__void();
   return true;
  }
  return false;
 }
 /** @nodts @return {E} */
 m_peekFirstElement__java_lang_Object_$p_java_util_ArrayDeque() {
  return this.f_array__java_util_ArrayDeque_[this.f_head__java_util_ArrayDeque_];
 }
 /** @nodts @return {E} */
 m_peekLastElement__java_lang_Object_$p_java_util_ArrayDeque() {
  return this.f_array__java_util_ArrayDeque_[(this.f_tail__java_util_ArrayDeque_ - 1 | 0) & (this.f_array__java_util_ArrayDeque_.length - 1 | 0)];
 }
 /** @nodts */
 m_copyElements__arrayOf_java_lang_Object__int__void_$p_java_util_ArrayDeque(/** Array<*> */ dest, /** number */ count) {
  let mask = this.f_array__java_util_ArrayDeque_.length - 1 | 0;
  for (let i = this.f_head__java_util_ArrayDeque_, dstIdx = 0; dstIdx < count; i = (i + 1 | 0) & mask, dstIdx = dstIdx + 1 | 0) {
   $Arrays.$set(dest, dstIdx, this.f_array__java_util_ArrayDeque_[i]);
  }
 }
 /** @nodts */
 m_ensureCapacity__void_$p_java_util_ArrayDeque() {
  if (this.f_head__java_util_ArrayDeque_ != this.f_tail__java_util_ArrayDeque_) {
   return;
  }
  let numElements = this.f_array__java_util_ArrayDeque_.length;
  let newLength = ArrayDeque.m_nextArrayLength__int__int(numElements);
  if (this.f_head__java_util_ArrayDeque_ != 0) {
   let newArray = ArrayHelper.m_createFrom__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object(this.f_array__java_util_ArrayDeque_, newLength);
   this.m_copyElements__arrayOf_java_lang_Object__int__void_$p_java_util_ArrayDeque(newArray, numElements);
   this.f_array__java_util_ArrayDeque_ = newArray;
   this.f_head__java_util_ArrayDeque_ = 0;
  } else {
   ArrayHelper.m_setLength__java_lang_Object__int__void(this.f_array__java_util_ArrayDeque_, newLength);
  }
  this.f_tail__java_util_ArrayDeque_ = numElements;
 }
 /** @nodts @return {number} */
 m_removeAtIndex__int__int_$p_java_util_ArrayDeque(/** number */ i) {
  let mask = this.f_array__java_util_ArrayDeque_.length - 1 | 0;
  let headDistance = (i - this.f_head__java_util_ArrayDeque_ | 0) & mask;
  let tailDistance = (this.f_tail__java_util_ArrayDeque_ - i | 0) & mask;
  let size = (this.f_tail__java_util_ArrayDeque_ - this.f_head__java_util_ArrayDeque_ | 0) & mask;
  ArrayDeque.m_checkConcurrentModification__boolean__void(headDistance < size);
  if (headDistance >= tailDistance) {
   this.m_shiftLeftAtIndex__int__void_$p_java_util_ArrayDeque(i);
   return - 1 | 0;
  } else {
   this.m_shiftRightAtIndex__int__void_$p_java_util_ArrayDeque(i);
   return 1;
  }
 }
 /** @nodts */
 m_shiftLeftAtIndex__int__void_$p_java_util_ArrayDeque(/** number */ i) {
  let mask = this.f_array__java_util_ArrayDeque_.length - 1 | 0;
  this.f_tail__java_util_ArrayDeque_ = (this.f_tail__java_util_ArrayDeque_ - 1 | 0) & mask;
  while (i != this.f_tail__java_util_ArrayDeque_) {
   let nextOffset = (i + 1 | 0) & mask;
   $Arrays.$set(this.f_array__java_util_ArrayDeque_, i, this.f_array__java_util_ArrayDeque_[nextOffset]);
   i = nextOffset;
  }
  $Arrays.$set(this.f_array__java_util_ArrayDeque_, this.f_tail__java_util_ArrayDeque_, null);
 }
 /** @nodts */
 m_shiftRightAtIndex__int__void_$p_java_util_ArrayDeque(/** number */ i) {
  let mask = this.f_array__java_util_ArrayDeque_.length - 1 | 0;
  while (i != this.f_head__java_util_ArrayDeque_) {
   let prevOffset = (i - 1 | 0) & mask;
   $Arrays.$set(this.f_array__java_util_ArrayDeque_, i, this.f_array__java_util_ArrayDeque_[prevOffset]);
   i = prevOffset;
  }
  $Arrays.$set(this.f_array__java_util_ArrayDeque_, this.f_head__java_util_ArrayDeque_, null);
  this.f_head__java_util_ArrayDeque_ = (this.f_head__java_util_ArrayDeque_ + 1 | 0) & mask;
 }
 /** @nodts */
 static $clinit() {
  ArrayDeque.$clinit = () =>{};
  ArrayDeque.$loadModules();
  AbstractCollection.$clinit();
  Collection.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayDeque;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  DescendingIteratorImpl = goog.module.get('java.util.ArrayDeque.DescendingIteratorImpl$impl');
  IteratorImpl = goog.module.get('java.util.ArrayDeque.IteratorImpl$impl');
  Collection = goog.module.get('java.util.Collection$impl');
  ConcurrentModificationException = goog.module.get('java.util.ConcurrentModificationException$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {number} @nodts*/
ArrayDeque.f_MIN_INITIAL_CAPACITY__java_util_ArrayDeque_ = 8;
Deque.$markImplementor(ArrayDeque);
Cloneable.$markImplementor(ArrayDeque);
$Util.$setClassMetadata(ArrayDeque, 'java.util.ArrayDeque');

exports = ArrayDeque;

//# sourceMappingURL=ArrayDeque.js.map
