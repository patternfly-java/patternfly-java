goog.module('java.util.LinkedList$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Cloneable = goog.require('java.lang.Cloneable$impl');
const AbstractSequentialList = goog.require('java.util.AbstractSequentialList$impl');
const Deque = goog.require('java.util.Deque$impl');
const List = goog.require('java.util.List$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let DescendingIteratorImpl = goog.forwardDeclare('java.util.LinkedList.DescendingIteratorImpl$impl');
let ListIteratorImpl = goog.forwardDeclare('java.util.LinkedList.ListIteratorImpl$impl');
let Node = goog.forwardDeclare('java.util.LinkedList.Node$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @template E
 * @extends {AbstractSequentialList<E>}
 * @implements {Cloneable}
 * @implements {List<E>}
 * @implements {Deque<E>}
 * @implements {Serializable}
 */
class LinkedList extends AbstractSequentialList {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_exposeElement__java_util_LinkedList_;
  /**@type {Node<E>} @nodts*/
  this.f_header__java_util_LinkedList_;
  /**@type {Node<E>} @nodts*/
  this.f_tail__java_util_LinkedList_;
  /**@type {number} @nodts*/
  this.f_size__java_util_LinkedList_ = 0;
 }
 //Factory method corresponding to constructor 'LinkedList()'.
 /** @nodts @template E @return {!LinkedList<E>} */
 static $create__() {
  LinkedList.$clinit();
  let $instance = new LinkedList();
  $instance.$ctor__java_util_LinkedList__void();
  return $instance;
 }
 //Initialization from constructor 'LinkedList()'.
 /** @nodts */
 $ctor__java_util_LinkedList__void() {
  this.$ctor__java_util_AbstractSequentialList__void();
  this.$init__void_$p_java_util_LinkedList();
  this.m_reset__void_$p_java_util_LinkedList();
 }
 //Factory method corresponding to constructor 'LinkedList(Collection)'.
 /** @nodts @template E @return {!LinkedList<E>} */
 static $create__java_util_Collection(/** Collection<?> */ c) {
  LinkedList.$clinit();
  let $instance = new LinkedList();
  $instance.$ctor__java_util_LinkedList__java_util_Collection__void(c);
  return $instance;
 }
 //Initialization from constructor 'LinkedList(Collection)'.
 /** @nodts */
 $ctor__java_util_LinkedList__java_util_Collection__void(/** Collection<?> */ c) {
  this.$ctor__java_util_AbstractSequentialList__void();
  this.$init__void_$p_java_util_LinkedList();
  this.m_reset__void_$p_java_util_LinkedList();
  this.addAll(c);
 }
 /** @override @return {boolean} */
 add(/** E */ o) {
  this.m_addLast__java_lang_Object__void(o);
  return true;
 }
 /** @override @nodts */
 m_addFirst__java_lang_Object__void(/** E */ o) {
  this.m_addNode__java_lang_Object__java_util_LinkedList_Node__java_util_LinkedList_Node__void_$p_java_util_LinkedList(o, this.f_header__java_util_LinkedList_, this.f_header__java_util_LinkedList_.f_next__java_util_LinkedList_Node);
 }
 /** @override @nodts */
 m_addLast__java_lang_Object__void(/** E */ o) {
  this.m_addNode__java_lang_Object__java_util_LinkedList_Node__java_util_LinkedList_Node__void_$p_java_util_LinkedList(o, this.f_tail__java_util_LinkedList_.f_prev__java_util_LinkedList_Node, this.f_tail__java_util_LinkedList_);
 }
 /** @override */
 clear() {
  this.m_reset__void_$p_java_util_LinkedList();
 }
 /** @nodts */
 m_reset__void_$p_java_util_LinkedList() {
  this.f_header__java_util_LinkedList_.f_next__java_util_LinkedList_Node = this.f_tail__java_util_LinkedList_;
  this.f_tail__java_util_LinkedList_.f_prev__java_util_LinkedList_Node = this.f_header__java_util_LinkedList_;
  this.f_header__java_util_LinkedList_.f_prev__java_util_LinkedList_Node = this.f_tail__java_util_LinkedList_.f_next__java_util_LinkedList_Node = null;
  this.f_size__java_util_LinkedList_ = 0;
 }
 /** @nodts @return {*} */
 m_clone__java_lang_Object() {
  return /**@type {!LinkedList<E>}*/ (LinkedList.$create__java_util_Collection(this));
 }
 /** @override @nodts @return {Iterator<E>} */
 m_descendingIterator__java_util_Iterator() {
  return /**@type {!DescendingIteratorImpl<E>}*/ (DescendingIteratorImpl.$create__java_util_LinkedList(this));
 }
 /** @override @nodts @return {E} */
 m_element__java_lang_Object() {
  return this.m_getFirst__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_getFirst__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(this.f_size__java_util_LinkedList_ != 0);
  return this.f_header__java_util_LinkedList_.f_next__java_util_LinkedList_Node.f_value__java_util_LinkedList_Node;
 }
 /** @override @nodts @return {E} */
 m_getLast__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(this.f_size__java_util_LinkedList_ != 0);
  return this.f_tail__java_util_LinkedList_.f_prev__java_util_LinkedList_Node.f_value__java_util_LinkedList_Node;
 }
 /** @override @nodts @return {ListIterator<E>} */
 m_listIterator__int__java_util_ListIterator(/** number */ index) {
  InternalPreconditions.m_checkPositionIndex__int__int__void(index, this.f_size__java_util_LinkedList_);
  let /** Node<E> */ node;
  if (index >= this.f_size__java_util_LinkedList_ >> 1) {
   node = this.f_tail__java_util_LinkedList_;
   for (let i = this.f_size__java_util_LinkedList_; i > index; i = i - 1 | 0) {
    node = node.f_prev__java_util_LinkedList_Node;
   }
  } else {
   node = this.f_header__java_util_LinkedList_.f_next__java_util_LinkedList_Node;
   for (let i_1 = 0; i_1 < index; i_1 = i_1 + 1 | 0) {
    node = node.f_next__java_util_LinkedList_Node;
   }
  }
  return /**@type {!ListIteratorImpl<E>}*/ (ListIteratorImpl.$create__java_util_LinkedList__int__java_util_LinkedList_Node(this, index, node));
 }
 /** @override @nodts @return {boolean} */
 m_offer__java_lang_Object__boolean(/** E */ o) {
  return this.m_offerLast__java_lang_Object__boolean(o);
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
  return this.f_size__java_util_LinkedList_ == 0 ? null : this.m_getFirst__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_peekLast__java_lang_Object() {
  return this.f_size__java_util_LinkedList_ == 0 ? null : this.m_getLast__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_poll__java_lang_Object() {
  return this.m_pollFirst__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_pollFirst__java_lang_Object() {
  return this.f_size__java_util_LinkedList_ == 0 ? null : this.m_removeFirst__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_pollLast__java_lang_Object() {
  return this.f_size__java_util_LinkedList_ == 0 ? null : this.m_removeLast__java_lang_Object();
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
 /** @override @nodts @return {E} */
 m_removeFirst__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(this.f_size__java_util_LinkedList_ != 0);
  return this.m_removeNode__java_util_LinkedList_Node__java_lang_Object_$p_java_util_LinkedList(this.f_header__java_util_LinkedList_.f_next__java_util_LinkedList_Node);
 }
 /** @override @nodts @return {boolean} */
 m_removeFirstOccurrence__java_lang_Object__boolean(/** * */ o) {
  return this.remove(o);
 }
 /** @override @nodts @return {E} */
 m_removeLast__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(this.f_size__java_util_LinkedList_ != 0);
  return this.m_removeNode__java_util_LinkedList_Node__java_lang_Object_$p_java_util_LinkedList(this.f_tail__java_util_LinkedList_.f_prev__java_util_LinkedList_Node);
 }
 /** @override @nodts @return {boolean} */
 m_removeLastOccurrence__java_lang_Object__boolean(/** * */ o) {
  for (let e = this.f_tail__java_util_LinkedList_.f_prev__java_util_LinkedList_Node; !$Equality.$same(e, this.f_header__java_util_LinkedList_); e = e.f_prev__java_util_LinkedList_Node) {
   if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(e.f_value__java_util_LinkedList_Node, o)) {
    this.m_removeNode__java_util_LinkedList_Node__java_lang_Object_$p_java_util_LinkedList(e);
    return true;
   }
  }
  return false;
 }
 /** @override @return {number} */
 size() {
  return this.f_size__java_util_LinkedList_;
 }
 /** @nodts */
 m_addNode__java_lang_Object__java_util_LinkedList_Node__java_util_LinkedList_Node__void_$p_java_util_LinkedList(/** E */ o, /** Node<E> */ prev, /** Node<E> */ next) {
  let node = /**@type {!Node<E>}*/ (Node.$create__());
  node.f_value__java_util_LinkedList_Node = o;
  node.f_prev__java_util_LinkedList_Node = prev;
  node.f_next__java_util_LinkedList_Node = next;
  next.f_prev__java_util_LinkedList_Node = prev.f_next__java_util_LinkedList_Node = node;
  this.f_size__java_util_LinkedList_ = this.f_size__java_util_LinkedList_ + 1 | 0;
 }
 /** @nodts @return {E} */
 m_removeNode__java_util_LinkedList_Node__java_lang_Object_$p_java_util_LinkedList(/** Node<E> */ node) {
  let oldValue = node.f_value__java_util_LinkedList_Node;
  node.f_next__java_util_LinkedList_Node.f_prev__java_util_LinkedList_Node = node.f_prev__java_util_LinkedList_Node;
  node.f_prev__java_util_LinkedList_Node.f_next__java_util_LinkedList_Node = node.f_next__java_util_LinkedList_Node;
  node.f_next__java_util_LinkedList_Node = node.f_prev__java_util_LinkedList_Node = null;
  node.f_value__java_util_LinkedList_Node = null;
  this.f_size__java_util_LinkedList_ = this.f_size__java_util_LinkedList_ - 1 | 0;
  return oldValue;
 }
 /** @private @nodts */
 $init__void_$p_java_util_LinkedList() {
  this.f_header__java_util_LinkedList_ = /**@type {!Node<E>}*/ (Node.$create__());
  this.f_tail__java_util_LinkedList_ = /**@type {!Node<E>}*/ (Node.$create__());
 }
 /** @nodts */
 static $clinit() {
  LinkedList.$clinit = () =>{};
  LinkedList.$loadModules();
  AbstractSequentialList.$clinit();
  List.$clinit();
  Collection.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LinkedList;
 }
 
 /** @nodts */
 static $loadModules() {
  Collection = goog.module.get('java.util.Collection$impl');
  DescendingIteratorImpl = goog.module.get('java.util.LinkedList.DescendingIteratorImpl$impl');
  ListIteratorImpl = goog.module.get('java.util.LinkedList.ListIteratorImpl$impl');
  Node = goog.module.get('java.util.LinkedList.Node$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Cloneable.$markImplementor(LinkedList);
List.$markImplementor(LinkedList);
Deque.$markImplementor(LinkedList);
Serializable.$markImplementor(LinkedList);
$Util.$setClassMetadata(LinkedList, 'java.util.LinkedList');

exports = LinkedList;

//# sourceMappingURL=LinkedList.js.map
