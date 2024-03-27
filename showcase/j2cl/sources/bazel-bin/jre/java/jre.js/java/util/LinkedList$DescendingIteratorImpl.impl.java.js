goog.module('java.util.LinkedList.DescendingIteratorImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let ListIteratorImpl = goog.forwardDeclare('java.util.LinkedList.ListIteratorImpl$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');

/**
 * @final
 * @template E
 * @implements {Iterator<E>}
 */
class DescendingIteratorImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LinkedList<E>} @nodts*/
  this.$outer_this__java_util_LinkedList_DescendingIteratorImpl;
  /**@type {ListIterator<E>} @nodts*/
  this.f_itr__java_util_LinkedList_DescendingIteratorImpl_;
 }
 /** @nodts @template E @return {!DescendingIteratorImpl<E>} */
 static $create__java_util_LinkedList(/** LinkedList<E> */ $outer_this) {
  DescendingIteratorImpl.$clinit();
  let $instance = new DescendingIteratorImpl();
  $instance.$ctor__java_util_LinkedList_DescendingIteratorImpl__java_util_LinkedList__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_LinkedList_DescendingIteratorImpl__java_util_LinkedList__void(/** LinkedList<E> */ $outer_this) {
  this.$outer_this__java_util_LinkedList_DescendingIteratorImpl = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_LinkedList_DescendingIteratorImpl();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_itr__java_util_LinkedList_DescendingIteratorImpl_.m_hasPrevious__boolean();
 }
 /** @override @nodts @return {E} */
 m_next__java_lang_Object() {
  return this.f_itr__java_util_LinkedList_DescendingIteratorImpl_.m_previous__java_lang_Object();
 }
 /** @override @nodts */
 m_remove__void() {
  this.f_itr__java_util_LinkedList_DescendingIteratorImpl_.m_remove__void();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_LinkedList_DescendingIteratorImpl() {
  this.f_itr__java_util_LinkedList_DescendingIteratorImpl_ = /**@type {!ListIteratorImpl<E>}*/ (ListIteratorImpl.$create__java_util_LinkedList__int__java_util_LinkedList_Node(this.$outer_this__java_util_LinkedList_DescendingIteratorImpl, this.$outer_this__java_util_LinkedList_DescendingIteratorImpl.f_size__java_util_LinkedList_, this.$outer_this__java_util_LinkedList_DescendingIteratorImpl.f_tail__java_util_LinkedList_));
 }
 /** @nodts */
 static $clinit() {
  DescendingIteratorImpl.$clinit = () =>{};
  DescendingIteratorImpl.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DescendingIteratorImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  ListIteratorImpl = goog.module.get('java.util.LinkedList.ListIteratorImpl$impl');
 }
}
Iterator.$markImplementor(DescendingIteratorImpl);
$Util.$setClassMetadata(DescendingIteratorImpl, 'java.util.LinkedList$DescendingIteratorImpl');

exports = DescendingIteratorImpl;

//# sourceMappingURL=LinkedList$DescendingIteratorImpl.js.map
