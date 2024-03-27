goog.module('java.util.ArrayList$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Cloneable = goog.require('java.lang.Cloneable$impl');
const AbstractList = goog.require('java.util.AbstractList$impl');
const List = goog.require('java.util.List$impl');
const RandomAccess = goog.require('java.util.RandomAccess$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_Object = goog.forwardDeclare('java.lang.Object$impl');
let $1 = goog.forwardDeclare('java.util.ArrayList.$1$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @template E
 * @extends {AbstractList<E>}
 * @implements {List<E>}
 * @implements {Cloneable}
 * @implements {RandomAccess}
 * @implements {Serializable}
 */
class ArrayList extends AbstractList {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<E>} @nodts*/
  this.f_array__java_util_ArrayList_;
  /**@type {E} @nodts*/
  this.f_exposeElement__java_util_ArrayList_;
 }
 //Factory method corresponding to constructor 'ArrayList()'.
 /** @nodts @template E @return {!ArrayList<E>} */
 static $create__() {
  ArrayList.$clinit();
  let $instance = new ArrayList();
  $instance.$ctor__java_util_ArrayList__void();
  return $instance;
 }
 //Initialization from constructor 'ArrayList()'.
 /** @nodts */
 $ctor__java_util_ArrayList__void() {
  this.$ctor__java_util_AbstractList__void();
  this.$init__void_$p_java_util_ArrayList();
 }
 //Factory method corresponding to constructor 'ArrayList(Collection)'.
 /** @nodts @template E @return {!ArrayList<E>} */
 static $create__java_util_Collection(/** Collection<?> */ c) {
  ArrayList.$clinit();
  let $instance = new ArrayList();
  $instance.$ctor__java_util_ArrayList__java_util_Collection__void(c);
  return $instance;
 }
 //Initialization from constructor 'ArrayList(Collection)'.
 /** @nodts */
 $ctor__java_util_ArrayList__java_util_Collection__void(/** Collection<?> */ c) {
  this.$ctor__java_util_AbstractList__void();
  this.$init__void_$p_java_util_ArrayList();
  ArrayHelper.m_insertTo__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object__void(this.f_array__java_util_ArrayList_, 0, c.toArray());
 }
 //Factory method corresponding to constructor 'ArrayList(int)'.
 /** @nodts @template E @return {!ArrayList<E>} */
 static $create__int(/** number */ initialCapacity) {
  ArrayList.$clinit();
  let $instance = new ArrayList();
  $instance.$ctor__java_util_ArrayList__int__void(initialCapacity);
  return $instance;
 }
 //Initialization from constructor 'ArrayList(int)'.
 /** @nodts */
 $ctor__java_util_ArrayList__int__void(/** number */ initialCapacity) {
  this.$ctor__java_util_AbstractList__void();
  this.$init__void_$p_java_util_ArrayList();
  InternalPreconditions.m_checkArgument__boolean__java_lang_Object__void(initialCapacity >= 0, 'Initial capacity must not be negative');
 }
 /** @override @return {boolean} */
 add(/** E */ o) {
  ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(this.f_array__java_util_ArrayList_, o);
  return true;
 }
 /** @override */
 addAtIndex(/** number */ index, /** E */ o) {
  InternalPreconditions.m_checkPositionIndex__int__int__void(index, this.f_array__java_util_ArrayList_.length);
  ArrayHelper.m_insertTo__arrayOf_java_lang_Object__int__java_lang_Object__void(this.f_array__java_util_ArrayList_, index, o);
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ c) {
  let cArray = c.toArray();
  let len = cArray.length;
  if (len == 0) {
   return false;
  }
  ArrayHelper.m_insertTo__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object__void(this.f_array__java_util_ArrayList_, this.f_array__java_util_ArrayList_.length, cArray);
  return true;
 }
 /** @override @return {boolean} */
 addAllAtIndex(/** number */ index, /** Collection<?> */ c) {
  InternalPreconditions.m_checkPositionIndex__int__int__void(index, this.f_array__java_util_ArrayList_.length);
  let cArray = c.toArray();
  let len = cArray.length;
  if (len == 0) {
   return false;
  }
  ArrayHelper.m_insertTo__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object__void(this.f_array__java_util_ArrayList_, index, cArray);
  return true;
 }
 /** @override */
 clear() {
  this.m_setSize__int__void_$pp_java_util(0);
 }
 /** @nodts @return {*} */
 m_clone__java_lang_Object() {
  return /**@type {!ArrayList<E>}*/ (ArrayList.$create__java_util_Collection(this));
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.indexOf(o) != (- 1 | 0);
 }
 /** @nodts */
 m_ensureCapacity__int__void(/** number */ ignored) {}
 /** @override @return {E} */
 getAtIndex(/** number */ index) {
  InternalPreconditions.m_checkElementIndex__int__int__void(index, this.f_array__java_util_ArrayList_.length);
  return this.f_array__java_util_ArrayList_[index];
 }
 /** @override @return {number} */
 indexOf(/** * */ o) {
  return this.m_indexOf__java_lang_Object__int__int_$pp_java_util(o, 0);
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!$1<E>}*/ ($1.$create__java_util_ArrayList(this));
 }
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  for (let $array = this.f_array__java_util_ArrayList_, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    consumer.m_accept__java_lang_Object__void(e);
   }
  }
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_array__java_util_ArrayList_.length == 0;
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ o) {
  return this.m_lastIndexOf__java_lang_Object__int__int_$pp_java_util(o, this.size() - 1 | 0);
 }
 /** @override @return {E} */
 removeAtIndex(/** number */ index) {
  let previous = this.getAtIndex(index);
  ArrayHelper.m_removeFrom__arrayOf_java_lang_Object__int__int__void(this.f_array__java_util_ArrayList_, index, 1);
  return previous;
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  let i = this.indexOf(o);
  if (i == (- 1 | 0)) {
   return false;
  }
  this.removeAtIndex(i);
  return true;
 }
 /** @override @nodts @return {boolean} */
 m_removeIf__java_util_function_Predicate__boolean(/** Predicate<?> */ filter) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(filter);
  let newIndex = 0;
  for (let index = 0; index < this.f_array__java_util_ArrayList_.length; index = index + 1 | 0) {
   let e = this.f_array__java_util_ArrayList_[index];
   if (!filter.m_test__java_lang_Object__boolean(e)) {
    if (newIndex != index) {
     $Arrays.$set(this.f_array__java_util_ArrayList_, newIndex, e);
    }
    newIndex = newIndex + 1 | 0;
   }
  }
  if (newIndex != this.f_array__java_util_ArrayList_.length) {
   this.m_setSize__int__void_$pp_java_util(newIndex);
   return true;
  }
  return false;
 }
 /** @override @nodts */
 m_replaceAll__java_util_function_UnaryOperator__void(/** UnaryOperator<E> */ operator) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(operator);
  for (let i = 0; i < this.f_array__java_util_ArrayList_.length; i = i + 1 | 0) {
   $Arrays.$set(this.f_array__java_util_ArrayList_, i, operator.m_apply__java_lang_Object__java_lang_Object(this.f_array__java_util_ArrayList_[i]));
  }
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ o) {
  let previous = this.getAtIndex(index);
  $Arrays.$set(this.f_array__java_util_ArrayList_, index, o);
  return previous;
 }
 /** @override @return {number} */
 size() {
  return this.f_array__java_util_ArrayList_.length;
 }
 /** @override @nodts */
 m_sort__java_util_Comparator__void(/** Comparator<?> */ c) {
  Arrays.m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(this.f_array__java_util_ArrayList_, 0, this.f_array__java_util_ArrayList_.length, c);
 }
 /** @override @return {Array<*>} */
 toArray() {
  return /**@type {Array<*>}*/ ($Arrays.$castTo(ArrayHelper.m_clone__java_lang_Object__java_lang_Object(this.f_array__java_util_ArrayList_), j_l_Object, 1));
 }
 /** @override @nodts @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Array<T> */ out) {
  let size = this.f_array__java_util_ArrayList_.length;
  if (out.length < size) {
   out = ArrayHelper.m_createFrom__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object(out, size);
  }
  for (let i = 0; i < size; i = i + 1 | 0) {
   $Arrays.$set(out, i, /**@type {T}*/ (this.f_array__java_util_ArrayList_[i]));
  }
  if (out.length > size) {
   $Arrays.$set(out, size, null);
  }
  return out;
 }
 /** @nodts */
 m_trimToSize__void() {}
 /** @override @nodts */
 m_removeRange__int__int__void(/** number */ fromIndex, /** number */ endIndex) {
  InternalPreconditions.m_checkPositionIndexes__int__int__int__void(fromIndex, endIndex, this.f_array__java_util_ArrayList_.length);
  let count = endIndex - fromIndex | 0;
  ArrayHelper.m_removeFrom__arrayOf_java_lang_Object__int__int__void(this.f_array__java_util_ArrayList_, fromIndex, count);
 }
 /** @nodts @return {number} */
 m_indexOf__java_lang_Object__int__int_$pp_java_util(/** * */ o, /** number */ index) {
  for (; index < this.f_array__java_util_ArrayList_.length; index = index + 1 | 0) {
   if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(o, this.f_array__java_util_ArrayList_[index])) {
    return index;
   }
  }
  return - 1 | 0;
 }
 /** @nodts @return {number} */
 m_lastIndexOf__java_lang_Object__int__int_$pp_java_util(/** * */ o, /** number */ index) {
  for (; index >= 0; index = index - 1 | 0) {
   if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(o, this.f_array__java_util_ArrayList_[index])) {
    return index;
   }
  }
  return - 1 | 0;
 }
 /** @nodts */
 m_setSize__int__void_$pp_java_util(/** number */ newSize) {
  ArrayHelper.m_setLength__java_lang_Object__int__void(this.f_array__java_util_ArrayList_, newSize);
 }
 /** @private @nodts */
 $init__void_$p_java_util_ArrayList() {
  this.f_array__java_util_ArrayList_ = /**@type {!Array<E>}*/ (new Array(0));
 }
 /** @nodts */
 static $clinit() {
  ArrayList.$clinit = () =>{};
  ArrayList.$loadModules();
  AbstractList.$clinit();
  List.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayList;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_Object = goog.module.get('java.lang.Object$impl');
  $1 = goog.module.get('java.util.ArrayList.$1$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
List.$markImplementor(ArrayList);
Cloneable.$markImplementor(ArrayList);
RandomAccess.$markImplementor(ArrayList);
Serializable.$markImplementor(ArrayList);
$Util.$setClassMetadata(ArrayList, 'java.util.ArrayList');

exports = ArrayList;

//# sourceMappingURL=ArrayList.js.map
