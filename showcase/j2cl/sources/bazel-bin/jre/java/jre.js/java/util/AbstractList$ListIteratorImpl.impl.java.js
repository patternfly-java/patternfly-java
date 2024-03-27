goog.module('java.util.AbstractList.ListIteratorImpl$impl');

const IteratorImpl = goog.require('java.util.AbstractList.IteratorImpl$impl');
const ListIterator = goog.require('java.util.ListIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractList = goog.forwardDeclare('java.util.AbstractList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @final
 * @template E
 * @extends {IteratorImpl<E>}
 * @implements {ListIterator<E>}
 */
class ListIteratorImpl extends IteratorImpl {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {AbstractList<E>} @nodts*/
  this.$outer_this__java_util_AbstractList_ListIteratorImpl;
 }
 //Factory method corresponding to constructor 'ListIteratorImpl(AbstractList)'.
 /** @nodts @template E @return {!ListIteratorImpl<E>} */
 static $create__java_util_AbstractList(/** AbstractList<E> */ $outer_this) {
  let $instance = new ListIteratorImpl();
  $instance.$ctor__java_util_AbstractList_ListIteratorImpl__java_util_AbstractList__void($outer_this);
  return $instance;
 }
 //Initialization from constructor 'ListIteratorImpl(AbstractList)'.
 /** @nodts */
 $ctor__java_util_AbstractList_ListIteratorImpl__java_util_AbstractList__void(/** AbstractList<E> */ $outer_this) {
  this.$outer_this__java_util_AbstractList_ListIteratorImpl = $outer_this;
  this.$ctor__java_util_AbstractList_IteratorImpl__java_util_AbstractList__void($outer_this);
 }
 //Factory method corresponding to constructor 'ListIteratorImpl(AbstractList, int)'.
 /** @nodts @template E @return {!ListIteratorImpl<E>} */
 static $create__java_util_AbstractList__int(/** AbstractList<E> */ $outer_this, /** number */ start) {
  ListIteratorImpl.$clinit();
  let $instance = new ListIteratorImpl();
  $instance.$ctor__java_util_AbstractList_ListIteratorImpl__java_util_AbstractList__int__void($outer_this, start);
  return $instance;
 }
 //Initialization from constructor 'ListIteratorImpl(AbstractList, int)'.
 /** @nodts */
 $ctor__java_util_AbstractList_ListIteratorImpl__java_util_AbstractList__int__void(/** AbstractList<E> */ $outer_this, /** number */ start) {
  this.$outer_this__java_util_AbstractList_ListIteratorImpl = $outer_this;
  this.$ctor__java_util_AbstractList_IteratorImpl__java_util_AbstractList__void($outer_this);
  InternalPreconditions.m_checkPositionIndex__int__int__void(start, $outer_this.size());
  this.f_i__java_util_AbstractList_IteratorImpl = start;
 }
 /** @override @nodts */
 m_add__java_lang_Object__void(/** E */ o) {
  this.$outer_this__java_util_AbstractList_ListIteratorImpl.addAtIndex(this.f_i__java_util_AbstractList_IteratorImpl, o);
  this.f_i__java_util_AbstractList_IteratorImpl = this.f_i__java_util_AbstractList_IteratorImpl + 1 | 0;
  this.f_last__java_util_AbstractList_IteratorImpl = - 1 | 0;
 }
 /** @override @nodts @return {boolean} */
 m_hasPrevious__boolean() {
  return this.f_i__java_util_AbstractList_IteratorImpl > 0;
 }
 /** @override @nodts @return {number} */
 m_nextIndex__int() {
  return this.f_i__java_util_AbstractList_IteratorImpl;
 }
 /** @override @nodts @return {E} */
 m_previous__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(this.m_hasPrevious__boolean());
  return this.$outer_this__java_util_AbstractList_ListIteratorImpl.getAtIndex(this.f_last__java_util_AbstractList_IteratorImpl = this.f_i__java_util_AbstractList_IteratorImpl = this.f_i__java_util_AbstractList_IteratorImpl - 1 | 0);
 }
 /** @override @nodts @return {number} */
 m_previousIndex__int() {
  return this.f_i__java_util_AbstractList_IteratorImpl - 1 | 0;
 }
 /** @override @nodts */
 m_set__java_lang_Object__void(/** E */ o) {
  InternalPreconditions.m_checkState__boolean__void(this.f_last__java_util_AbstractList_IteratorImpl != (- 1 | 0));
  this.$outer_this__java_util_AbstractList_ListIteratorImpl.setAtIndex(this.f_last__java_util_AbstractList_IteratorImpl, o);
 }
 /** @nodts */
 static $clinit() {
  ListIteratorImpl.$clinit = () =>{};
  ListIteratorImpl.$loadModules();
  IteratorImpl.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ListIteratorImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterator = goog.module.get('java.util.Iterator$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
ListIterator.$markImplementor(ListIteratorImpl);
$Util.$setClassMetadata(ListIteratorImpl, 'java.util.AbstractList$ListIteratorImpl');

exports = ListIteratorImpl;

//# sourceMappingURL=AbstractList$ListIteratorImpl.js.map
