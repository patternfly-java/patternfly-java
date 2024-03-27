goog.module('java.util.AbstractList.SubList$impl');

const AbstractList = goog.require('java.util.AbstractList$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @template E
 * @extends {AbstractList<E>}
 */
class SubList extends AbstractList {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<E>} @nodts*/
  this.f_wrapped__java_util_AbstractList_SubList_;
  /**@type {number} @nodts*/
  this.f_fromIndex__java_util_AbstractList_SubList_ = 0;
  /**@type {number} @nodts*/
  this.f_size__java_util_AbstractList_SubList_ = 0;
 }
 /** @nodts @template E @return {!SubList<E>} */
 static $create__java_util_List__int__int(/** List<E> */ wrapped, /** number */ fromIndex, /** number */ toIndex) {
  SubList.$clinit();
  let $instance = new SubList();
  $instance.$ctor__java_util_AbstractList_SubList__java_util_List__int__int__void(wrapped, fromIndex, toIndex);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_AbstractList_SubList__java_util_List__int__int__void(/** List<E> */ wrapped, /** number */ fromIndex, /** number */ toIndex) {
  this.$ctor__java_util_AbstractList__void();
  InternalPreconditions.m_checkCriticalPositionIndexes__int__int__int__void(fromIndex, toIndex, wrapped.size());
  this.f_wrapped__java_util_AbstractList_SubList_ = wrapped;
  this.f_fromIndex__java_util_AbstractList_SubList_ = fromIndex;
  this.f_size__java_util_AbstractList_SubList_ = toIndex - fromIndex | 0;
 }
 /** @override */
 addAtIndex(/** number */ index, /** E */ element) {
  InternalPreconditions.m_checkPositionIndex__int__int__void(index, this.f_size__java_util_AbstractList_SubList_);
  this.f_wrapped__java_util_AbstractList_SubList_.addAtIndex(this.f_fromIndex__java_util_AbstractList_SubList_ + index | 0, element);
  this.f_size__java_util_AbstractList_SubList_ = this.f_size__java_util_AbstractList_SubList_ + 1 | 0;
 }
 /** @override @return {E} */
 getAtIndex(/** number */ index) {
  InternalPreconditions.m_checkElementIndex__int__int__void(index, this.f_size__java_util_AbstractList_SubList_);
  return this.f_wrapped__java_util_AbstractList_SubList_.getAtIndex(this.f_fromIndex__java_util_AbstractList_SubList_ + index | 0);
 }
 /** @override @return {E} */
 removeAtIndex(/** number */ index) {
  InternalPreconditions.m_checkElementIndex__int__int__void(index, this.f_size__java_util_AbstractList_SubList_);
  let result = this.f_wrapped__java_util_AbstractList_SubList_.removeAtIndex(this.f_fromIndex__java_util_AbstractList_SubList_ + index | 0);
  this.f_size__java_util_AbstractList_SubList_ = this.f_size__java_util_AbstractList_SubList_ - 1 | 0;
  return result;
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ element) {
  InternalPreconditions.m_checkElementIndex__int__int__void(index, this.f_size__java_util_AbstractList_SubList_);
  return this.f_wrapped__java_util_AbstractList_SubList_.setAtIndex(this.f_fromIndex__java_util_AbstractList_SubList_ + index | 0, element);
 }
 /** @override @return {number} */
 size() {
  return this.f_size__java_util_AbstractList_SubList_;
 }
 /** @nodts */
 static $clinit() {
  SubList.$clinit = () =>{};
  SubList.$loadModules();
  AbstractList.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SubList;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
$Util.$setClassMetadata(SubList, 'java.util.AbstractList$SubList');

exports = SubList;

//# sourceMappingURL=AbstractList$SubList.js.map
