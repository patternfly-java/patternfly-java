goog.module('java.util.Vector$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Cloneable = goog.require('java.lang.Cloneable$impl');
const AbstractList = goog.require('java.util.AbstractList$impl');
const List = goog.require('java.util.List$impl');
const RandomAccess = goog.require('java.util.RandomAccess$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayIndexOutOfBoundsException = goog.forwardDeclare('java.lang.ArrayIndexOutOfBoundsException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Enumeration = goog.forwardDeclare('java.util.Enumeration$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template E
 * @extends {AbstractList<E>}
 * @implements {List<E>}
 * @implements {RandomAccess}
 * @implements {Cloneable}
 * @implements {Serializable}
 */
class Vector extends AbstractList {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ArrayList<E>} @nodts*/
  this.f_arrayList__java_util_Vector_;
  /**@type {E} @nodts*/
  this.f_exposeElement__java_util_Vector_;
 }
 //Factory method corresponding to constructor 'Vector()'.
 /** @nodts @template E @return {!Vector<E>} */
 static $create__() {
  Vector.$clinit();
  let $instance = new Vector();
  $instance.$ctor__java_util_Vector__void();
  return $instance;
 }
 //Initialization from constructor 'Vector()'.
 /** @nodts */
 $ctor__java_util_Vector__void() {
  this.$ctor__java_util_AbstractList__void();
  this.f_arrayList__java_util_Vector_ = /**@type {!ArrayList<E>}*/ (ArrayList.$create__());
 }
 //Factory method corresponding to constructor 'Vector(Collection)'.
 /** @nodts @template E @return {!Vector<E>} */
 static $create__java_util_Collection(/** Collection<?> */ c) {
  Vector.$clinit();
  let $instance = new Vector();
  $instance.$ctor__java_util_Vector__java_util_Collection__void(c);
  return $instance;
 }
 //Initialization from constructor 'Vector(Collection)'.
 /** @nodts */
 $ctor__java_util_Vector__java_util_Collection__void(/** Collection<?> */ c) {
  this.$ctor__java_util_AbstractList__void();
  this.f_arrayList__java_util_Vector_ = /**@type {!ArrayList<E>}*/ (ArrayList.$create__());
  this.addAll(c);
 }
 //Factory method corresponding to constructor 'Vector(int)'.
 /** @nodts @template E @return {!Vector<E>} */
 static $create__int(/** number */ initialCapacity) {
  Vector.$clinit();
  let $instance = new Vector();
  $instance.$ctor__java_util_Vector__int__void(initialCapacity);
  return $instance;
 }
 //Initialization from constructor 'Vector(int)'.
 /** @nodts */
 $ctor__java_util_Vector__int__void(/** number */ initialCapacity) {
  this.$ctor__java_util_AbstractList__void();
  this.f_arrayList__java_util_Vector_ = /**@type {!ArrayList<E>}*/ (ArrayList.$create__int(initialCapacity));
 }
 //Factory method corresponding to constructor 'Vector(int, int)'.
 /** @nodts @template E @return {!Vector<E>} */
 static $create__int__int(/** number */ initialCapacity, /** number */ ignoredCapacityIncrement) {
  Vector.$clinit();
  let $instance = new Vector();
  $instance.$ctor__java_util_Vector__int__int__void(initialCapacity, ignoredCapacityIncrement);
  return $instance;
 }
 //Initialization from constructor 'Vector(int, int)'.
 /** @nodts */
 $ctor__java_util_Vector__int__int__void(/** number */ initialCapacity, /** number */ ignoredCapacityIncrement) {
  this.$ctor__java_util_Vector__int__void(initialCapacity);
 }
 /** @override @return {boolean} */
 add(/** E */ o) {
  return this.f_arrayList__java_util_Vector_.add(o);
 }
 /** @override */
 addAtIndex(/** number */ index, /** E */ o) {
  Vector.m_checkArrayElementIndex__int__int__void(index, this.size() + 1 | 0);
  this.f_arrayList__java_util_Vector_.addAtIndex(index, o);
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ c) {
  return this.f_arrayList__java_util_Vector_.addAll(c);
 }
 /** @override @return {boolean} */
 addAllAtIndex(/** number */ index, /** Collection<?> */ c) {
  Vector.m_checkArrayElementIndex__int__int__void(index, this.size() + 1 | 0);
  return this.f_arrayList__java_util_Vector_.addAllAtIndex(index, c);
 }
 /** @nodts */
 m_addElement__java_lang_Object__void(/** E */ o) {
  this.add(o);
 }
 /** @nodts @return {number} */
 m_capacity__int() {
  return this.f_arrayList__java_util_Vector_.size();
 }
 /** @override */
 clear() {
  this.f_arrayList__java_util_Vector_.clear();
 }
 /** @nodts @return {*} */
 m_clone__java_lang_Object() {
  return /**@type {!Vector<E>}*/ (Vector.$create__java_util_Collection(this));
 }
 /** @override @return {boolean} */
 contains(/** * */ elem) {
  return this.f_arrayList__java_util_Vector_.contains(elem);
 }
 /** @override @return {boolean} */
 containsAll(/** Collection<?> */ c) {
  return this.f_arrayList__java_util_Vector_.containsAll(c);
 }
 /** @nodts */
 m_copyInto__arrayOf_java_lang_Object__void(/** Array<*> */ objs) {
  let i = - 1 | 0;
  let n = this.size();
  while ((i = i + 1 | 0) < n) {
   $Arrays.$set(objs, i, this.getAtIndex(i));
  }
 }
 /** @nodts @return {E} */
 m_elementAt__int__java_lang_Object(/** number */ index) {
  return this.getAtIndex(index);
 }
 /** @nodts @return {Enumeration<E>} */
 m_elements__java_util_Enumeration() {
  return /**@type {Enumeration<E>}*/ (Collections.m_enumeration__java_util_Collection__java_util_Enumeration(this.f_arrayList__java_util_Vector_));
 }
 /** @nodts */
 m_ensureCapacity__int__void(/** number */ capacity) {
  this.f_arrayList__java_util_Vector_.m_ensureCapacity__int__void(capacity);
 }
 /** @nodts @return {E} */
 m_firstElement__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(!this.isEmpty());
  return this.getAtIndex(0);
 }
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {
  this.f_arrayList__java_util_Vector_.m_forEach__java_util_function_Consumer__void(consumer);
 }
 /** @override @return {E} */
 getAtIndex(/** number */ index) {
  Vector.m_checkArrayElementIndex__int__int__void(index, this.size());
  return this.f_arrayList__java_util_Vector_.getAtIndex(index);
 }
 /** @override @return {number} */
 indexOf(/** * */ elem) {
  return this.f_arrayList__java_util_Vector_.indexOf(elem);
 }
 /** @nodts @return {number} */
 m_indexOf__java_lang_Object__int__int(/** * */ elem, /** number */ index) {
  Vector.m_checkArrayIndexOutOfBounds__boolean__int__void(index >= 0, index);
  return this.f_arrayList__java_util_Vector_.m_indexOf__java_lang_Object__int__int_$pp_java_util(elem, index);
 }
 /** @nodts */
 m_insertElementAt__java_lang_Object__int__void(/** E */ o, /** number */ index) {
  this.addAtIndex(index, o);
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_arrayList__java_util_Vector_.size() == 0;
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return this.f_arrayList__java_util_Vector_.m_iterator__java_util_Iterator();
 }
 /** @nodts @return {E} */
 m_lastElement__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(!this.isEmpty());
  return this.getAtIndex(this.size() - 1 | 0);
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ o) {
  return this.f_arrayList__java_util_Vector_.lastIndexOf(o);
 }
 /** @nodts @return {number} */
 m_lastIndexOf__java_lang_Object__int__int(/** * */ o, /** number */ index) {
  Vector.m_checkArrayIndexOutOfBounds__boolean__int__void(index < this.size(), index);
  return this.f_arrayList__java_util_Vector_.m_lastIndexOf__java_lang_Object__int__int_$pp_java_util(o, index);
 }
 /** @override @return {E} */
 removeAtIndex(/** number */ index) {
  Vector.m_checkArrayElementIndex__int__int__void(index, this.size());
  return this.f_arrayList__java_util_Vector_.removeAtIndex(index);
 }
 /** @override @return {boolean} */
 removeAll(/** Collection<?> */ c) {
  return this.f_arrayList__java_util_Vector_.removeAll(c);
 }
 /** @nodts */
 m_removeAllElements__void() {
  this.clear();
 }
 /** @nodts @return {boolean} */
 m_removeElement__java_lang_Object__boolean(/** * */ o) {
  return this.remove(o);
 }
 /** @nodts */
 m_removeElementAt__int__void(/** number */ index) {
  this.removeAtIndex(index);
 }
 /** @override @nodts @return {boolean} */
 m_removeIf__java_util_function_Predicate__boolean(/** Predicate<?> */ filter) {
  return this.f_arrayList__java_util_Vector_.m_removeIf__java_util_function_Predicate__boolean(filter);
 }
 /** @override @nodts */
 m_replaceAll__java_util_function_UnaryOperator__void(/** UnaryOperator<E> */ operator) {
  this.f_arrayList__java_util_Vector_.m_replaceAll__java_util_function_UnaryOperator__void(operator);
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ elem) {
  Vector.m_checkArrayElementIndex__int__int__void(index, this.size());
  return this.f_arrayList__java_util_Vector_.setAtIndex(index, elem);
 }
 /** @nodts */
 m_setElementAt__java_lang_Object__int__void(/** E */ o, /** number */ index) {
  this.setAtIndex(index, o);
 }
 /** @nodts */
 m_setSize__int__void(/** number */ size) {
  Vector.m_checkArrayIndexOutOfBounds__boolean__int__void(size >= 0, size);
  this.f_arrayList__java_util_Vector_.m_setSize__int__void_$pp_java_util(size);
 }
 /** @override @return {number} */
 size() {
  return this.f_arrayList__java_util_Vector_.size();
 }
 /** @override @nodts */
 m_sort__java_util_Comparator__void(/** Comparator<?> */ c) {
  this.f_arrayList__java_util_Vector_.m_sort__java_util_Comparator__void(c);
 }
 /** @override @return {!List<E>} */
 subList(/** number */ fromIndex, /** number */ toIndex) {
  return this.f_arrayList__java_util_Vector_.subList(fromIndex, toIndex);
 }
 /** @override @return {Array<*>} */
 toArray() {
  return this.f_arrayList__java_util_Vector_.toArray();
 }
 /** @override @nodts @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Array<T> */ a) {
  return this.f_arrayList__java_util_Vector_.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(a);
 }
 /** @override @return {?string} */
 toString() {
  return this.f_arrayList__java_util_Vector_.toString();
 }
 /** @nodts */
 m_trimToSize__void() {
  this.f_arrayList__java_util_Vector_.m_trimToSize__void();
 }
 /** @override @nodts */
 m_removeRange__int__int__void(/** number */ fromIndex, /** number */ endIndex) {
  this.f_arrayList__java_util_Vector_.m_removeRange__int__int__void(fromIndex, endIndex);
 }
 /** @nodts */
 static m_checkArrayElementIndex__int__int__void(/** number */ index, /** number */ size) {
  if (index < 0 || index >= size) {
   throw $Exceptions.toJs(ArrayIndexOutOfBoundsException.$create__());
  }
 }
 /** @nodts */
 static m_checkArrayIndexOutOfBounds__boolean__int__void(/** boolean */ expression, /** number */ index) {
  if (!expression) {
   throw $Exceptions.toJs(ArrayIndexOutOfBoundsException.$create__java_lang_String(j_l_String.m_valueOf__int__java_lang_String(index)));
  }
 }
 /** @nodts */
 static $clinit() {
  Vector.$clinit = () =>{};
  Vector.$loadModules();
  AbstractList.$clinit();
  List.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Vector;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayIndexOutOfBoundsException = goog.module.get('java.lang.ArrayIndexOutOfBoundsException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
List.$markImplementor(Vector);
RandomAccess.$markImplementor(Vector);
Cloneable.$markImplementor(Vector);
Serializable.$markImplementor(Vector);
$Util.$setClassMetadata(Vector, 'java.util.Vector');

exports = Vector;

//# sourceMappingURL=Vector.js.map
