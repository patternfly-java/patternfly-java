goog.module('java.util.List$impl');

const Collection = goog.require('java.util.Collection$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template E
 * @extends {Collection<E>}
 */
class List {
 /** @abstract */
 addAtIndex(/** number */ index, /** E */ element) {}
 /** @abstract @return {boolean} */
 addAllAtIndex(/** number */ index, /** Collection<?> */ c) {}
 /** @abstract @return {E} */
 getAtIndex(/** number */ index) {}
 /** @abstract @return {number} */
 indexOf(/** * */ o) {}
 /** @abstract @return {number} */
 lastIndexOf(/** * */ o) {}
 /** @abstract @nodts @return {ListIterator<E>} */
 m_listIterator__java_util_ListIterator() {}
 /** @abstract @nodts @return {ListIterator<E>} */
 m_listIterator__int__java_util_ListIterator(/** number */ from) {}
 /** @abstract @return {E} */
 removeAtIndex(/** number */ index) {}
 /** @abstract @nodts */
 m_replaceAll__java_util_function_UnaryOperator__void(/** UnaryOperator<E> */ operator) {}
 /** @abstract @return {E} */
 setAtIndex(/** number */ index, /** E */ element) {}
 /** @abstract @nodts */
 m_sort__java_util_Comparator__void(/** Comparator<?> */ c) {}
 /** @abstract @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {}
 /** @abstract @return {!List<E>} */
 subList(/** number */ fromIndex, /** number */ toIndex) {}
 /** @nodts @template E */
 static m_replaceAll__$default__java_util_List__java_util_function_UnaryOperator__void(/** !List<E> */ $thisArg, /** UnaryOperator<E> */ operator) {
  List.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(operator);
  for (let i = 0, size = $thisArg.size(); i < size; i = i + 1 | 0) {
   $thisArg.setAtIndex(i, operator.m_apply__java_lang_Object__java_lang_Object($thisArg.getAtIndex(i)));
  }
 }
 /** @nodts @template E */
 static m_sort__$default__java_util_List__java_util_Comparator__void(/** !List<E> */ $thisArg, /** Comparator<?> */ c) {
  List.$clinit();
  let a = $thisArg.toArray();
  Arrays.m_sort__arrayOf_java_lang_Object__java_util_Comparator__void(a, /**@type {Comparator<*>}*/ (c));
  for (let i = 0; i < a.length; i = i + 1 | 0) {
   $thisArg.setAtIndex(i, /**@type {E}*/ (a[i]));
  }
 }
 /** @nodts @template E @return {Spliterator<E>} */
 static m_spliterator__$default__java_util_List__java_util_Spliterator(/** !List<E> */ $thisArg) {
  List.$clinit();
  return /**@type {Spliterator<E>}*/ (Spliterators.m_spliterator__java_util_Collection__int__java_util_Spliterator($thisArg, Spliterator.f_ORDERED__java_util_Spliterator));
 }
 /** @nodts */
 static $clinit() {
  List.$clinit = () =>{};
  List.$loadModules();
  Collection.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Collection.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_List = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_List;
 }
 
 /** @nodts */
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
List.$markImplementor(/**@type {Function}*/ (List));
$Util.$setClassMetadataForInterface(List, 'java.util.List');

exports = List;

//# sourceMappingURL=List.js.map
