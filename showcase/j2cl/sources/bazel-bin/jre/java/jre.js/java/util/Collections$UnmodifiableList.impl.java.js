goog.module('java.util.Collections.UnmodifiableList$impl');

const UnmodifiableCollection = goog.require('java.util.Collections.UnmodifiableCollection$impl');
const List = goog.require('java.util.List$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let UnmodifiableListIterator = goog.forwardDeclare('java.util.Collections.UnmodifiableListIterator$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @extends {UnmodifiableCollection<T>}
 * @implements {List<T>}
 */
class UnmodifiableList extends UnmodifiableCollection {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<?>} @nodts*/
  this.f_list__java_util_Collections_UnmodifiableList_;
 }
 /** @nodts @template T @return {!UnmodifiableList<T>} */
 static $create__java_util_List(/** List<?> */ list) {
  UnmodifiableList.$clinit();
  let $instance = new UnmodifiableList();
  $instance.$ctor__java_util_Collections_UnmodifiableList__java_util_List__void(list);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableList__java_util_List__void(/** List<?> */ list) {
  this.$ctor__java_util_Collections_UnmodifiableCollection__java_util_Collection__void(list);
  this.f_list__java_util_Collections_UnmodifiableList_ = list;
 }
 /** @override */
 addAtIndex(/** number */ index, /** T */ element) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {boolean} */
 addAllAtIndex(/** number */ index, /** Collection<?> */ c) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_list__java_util_Collections_UnmodifiableList_, o);
 }
 /** @override @return {T} */
 getAtIndex(/** number */ index) {
  return this.f_list__java_util_Collections_UnmodifiableList_.getAtIndex(index);
 }
 /** @override @return {number} */
 hashCode() {
  return $Objects.m_hashCode__java_lang_Object__int(this.f_list__java_util_Collections_UnmodifiableList_);
 }
 /** @override @return {number} */
 indexOf(/** * */ o) {
  return this.f_list__java_util_Collections_UnmodifiableList_.indexOf(o);
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_list__java_util_Collections_UnmodifiableList_.isEmpty();
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ o) {
  return this.f_list__java_util_Collections_UnmodifiableList_.lastIndexOf(o);
 }
 /** @override @nodts @return {ListIterator<T>} */
 m_listIterator__java_util_ListIterator() {
  return this.m_listIterator__int__java_util_ListIterator(0);
 }
 /** @override @nodts @return {ListIterator<T>} */
 m_listIterator__int__java_util_ListIterator(/** number */ from) {
  return /**@type {!UnmodifiableListIterator<T>}*/ (UnmodifiableListIterator.$create__java_util_ListIterator(this.f_list__java_util_Collections_UnmodifiableList_.m_listIterator__int__java_util_ListIterator(from)));
 }
 /** @override @nodts */
 m_replaceAll__java_util_function_UnaryOperator__void(/** UnaryOperator<T> */ operator) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @nodts */
 m_sort__java_util_Comparator__void(/** Comparator<?> */ c) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {T} */
 removeAtIndex(/** number */ index) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {T} */
 setAtIndex(/** number */ index, /** T */ element) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {!List<T>} */
 subList(/** number */ fromIndex, /** number */ toIndex) {
  return /**@type {!UnmodifiableList<T>}*/ (UnmodifiableList.$create__java_util_List(this.f_list__java_util_Collections_UnmodifiableList_.subList(fromIndex, toIndex)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<T>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<T>}*/ (List.m_spliterator__$default__java_util_List__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableList.$clinit = () =>{};
  UnmodifiableList.$loadModules();
  UnmodifiableCollection.$clinit();
  List.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableList;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  UnmodifiableListIterator = goog.module.get('java.util.Collections.UnmodifiableListIterator$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
List.$markImplementor(UnmodifiableList);
$Util.$setClassMetadata(UnmodifiableList, 'java.util.Collections$UnmodifiableList');

exports = UnmodifiableList;

//# sourceMappingURL=Collections$UnmodifiableList.js.map
