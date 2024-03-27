goog.module('java.util.Arrays.ArrayList$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractList = goog.require('java.util.AbstractList$impl');
const RandomAccess = goog.require('java.util.RandomAccess$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @template E
 * @extends {AbstractList<E>}
 * @implements {RandomAccess}
 * @implements {Serializable}
 */
class ArrayList extends AbstractList {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<E>} @nodts*/
  this.f_array__java_util_Arrays_ArrayList_;
 }
 /** @nodts @template E @return {!ArrayList<E>} */
 static $create__arrayOf_java_lang_Object(/** Array<E> */ array) {
  ArrayList.$clinit();
  let $instance = new ArrayList();
  $instance.$ctor__java_util_Arrays_ArrayList__arrayOf_java_lang_Object__void(array);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Arrays_ArrayList__arrayOf_java_lang_Object__void(/** Array<E> */ array) {
  this.$ctor__java_util_AbstractList__void();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(array);
  this.f_array__java_util_Arrays_ArrayList_ = array;
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.indexOf(o) != (- 1 | 0);
 }
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  for (let $array = this.f_array__java_util_Arrays_ArrayList_, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    consumer.m_accept__java_lang_Object__void(e);
   }
  }
 }
 /** @override @return {E} */
 getAtIndex(/** number */ index) {
  InternalPreconditions.m_checkElementIndex__int__int__void(index, this.size());
  return this.f_array__java_util_Arrays_ArrayList_[index];
 }
 /** @override @nodts */
 m_replaceAll__java_util_function_UnaryOperator__void(/** UnaryOperator<E> */ operator) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(operator);
  for (let i = 0; i < this.f_array__java_util_Arrays_ArrayList_.length; i = i + 1 | 0) {
   $Arrays.$set(this.f_array__java_util_Arrays_ArrayList_, i, operator.m_apply__java_lang_Object__java_lang_Object(this.f_array__java_util_Arrays_ArrayList_[i]));
  }
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ value) {
  let was = this.getAtIndex(index);
  $Arrays.$set(this.f_array__java_util_Arrays_ArrayList_, index, value);
  return was;
 }
 /** @override @return {number} */
 size() {
  return this.f_array__java_util_Arrays_ArrayList_.length;
 }
 /** @override @nodts */
 m_sort__java_util_Comparator__void(/** Comparator<?> */ c) {
  Arrays.m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(this.f_array__java_util_Arrays_ArrayList_, 0, this.f_array__java_util_Arrays_ArrayList_.length, c);
 }
 /** @override @return {Array<*>} */
 toArray() {
  return this.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(new Array(this.f_array__java_util_Arrays_ArrayList_.length));
 }
 /** @override @nodts @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Array<T> */ out) {
  let size = this.f_array__java_util_Arrays_ArrayList_.length;
  if (out.length < size) {
   out = ArrayHelper.m_createFrom__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object(out, size);
  }
  for (let i = 0; i < size; i = i + 1 | 0) {
   $Arrays.$set(out, i, /**@type {T}*/ (this.f_array__java_util_Arrays_ArrayList_[i]));
  }
  if (out.length > size) {
   $Arrays.$set(out, size, null);
  }
  return out;
 }
 /** @nodts */
 static $clinit() {
  ArrayList.$clinit = () =>{};
  ArrayList.$loadModules();
  AbstractList.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayList;
 }
 
 /** @nodts */
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
RandomAccess.$markImplementor(ArrayList);
Serializable.$markImplementor(ArrayList);
$Util.$setClassMetadata(ArrayList, 'java.util.Arrays$ArrayList');

exports = ArrayList;

//# sourceMappingURL=Arrays$ArrayList.js.map
