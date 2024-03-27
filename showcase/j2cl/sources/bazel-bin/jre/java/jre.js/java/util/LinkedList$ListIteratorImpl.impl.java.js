goog.module('java.util.LinkedList.ListIteratorImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ListIterator = goog.require('java.util.ListIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let Node = goog.forwardDeclare('java.util.LinkedList.Node$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @final
 * @template E
 * @implements {ListIterator<E>}
 */
class ListIteratorImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LinkedList<E>} @nodts*/
  this.$outer_this__java_util_LinkedList_ListIteratorImpl;
  /**@type {number} @nodts*/
  this.f_currentIndex__java_util_LinkedList_ListIteratorImpl = 0;
  /**@type {Node<E>} @nodts*/
  this.f_currentNode__java_util_LinkedList_ListIteratorImpl;
  /**@type {Node<E>} @nodts*/
  this.f_lastNode__java_util_LinkedList_ListIteratorImpl;
 }
 /** @nodts @template E @return {!ListIteratorImpl<E>} */
 static $create__java_util_LinkedList__int__java_util_LinkedList_Node(/** LinkedList<E> */ $outer_this, /** number */ index, /** Node<E> */ startNode) {
  ListIteratorImpl.$clinit();
  let $instance = new ListIteratorImpl();
  $instance.$ctor__java_util_LinkedList_ListIteratorImpl__java_util_LinkedList__int__java_util_LinkedList_Node__void($outer_this, index, startNode);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_LinkedList_ListIteratorImpl__java_util_LinkedList__int__java_util_LinkedList_Node__void(/** LinkedList<E> */ $outer_this, /** number */ index, /** Node<E> */ startNode) {
  this.$outer_this__java_util_LinkedList_ListIteratorImpl = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_LinkedList_ListIteratorImpl();
  this.f_currentNode__java_util_LinkedList_ListIteratorImpl = startNode;
  this.f_currentIndex__java_util_LinkedList_ListIteratorImpl = index;
 }
 /** @override @nodts */
 m_add__java_lang_Object__void(/** E */ o) {
  this.$outer_this__java_util_LinkedList_ListIteratorImpl.m_addNode__java_lang_Object__java_util_LinkedList_Node__java_util_LinkedList_Node__void_$p_java_util_LinkedList(o, this.f_currentNode__java_util_LinkedList_ListIteratorImpl.f_prev__java_util_LinkedList_Node, this.f_currentNode__java_util_LinkedList_ListIteratorImpl);
  this.f_currentIndex__java_util_LinkedList_ListIteratorImpl = this.f_currentIndex__java_util_LinkedList_ListIteratorImpl + 1 | 0;
  this.f_lastNode__java_util_LinkedList_ListIteratorImpl = null;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return !$Equality.$same(this.f_currentNode__java_util_LinkedList_ListIteratorImpl, this.$outer_this__java_util_LinkedList_ListIteratorImpl.f_tail__java_util_LinkedList_);
 }
 /** @override @nodts @return {boolean} */
 m_hasPrevious__boolean() {
  return !$Equality.$same(this.f_currentNode__java_util_LinkedList_ListIteratorImpl.f_prev__java_util_LinkedList_Node, this.$outer_this__java_util_LinkedList_ListIteratorImpl.f_header__java_util_LinkedList_);
 }
 /** @override @nodts @return {E} */
 m_next__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(this.m_hasNext__boolean());
  this.f_lastNode__java_util_LinkedList_ListIteratorImpl = this.f_currentNode__java_util_LinkedList_ListIteratorImpl;
  this.f_currentNode__java_util_LinkedList_ListIteratorImpl = this.f_currentNode__java_util_LinkedList_ListIteratorImpl.f_next__java_util_LinkedList_Node;
  this.f_currentIndex__java_util_LinkedList_ListIteratorImpl = this.f_currentIndex__java_util_LinkedList_ListIteratorImpl + 1 | 0;
  return this.f_lastNode__java_util_LinkedList_ListIteratorImpl.f_value__java_util_LinkedList_Node;
 }
 /** @override @nodts @return {number} */
 m_nextIndex__int() {
  return this.f_currentIndex__java_util_LinkedList_ListIteratorImpl;
 }
 /** @override @nodts @return {E} */
 m_previous__java_lang_Object() {
  InternalPreconditions.m_checkElement__boolean__void(this.m_hasPrevious__boolean());
  this.f_lastNode__java_util_LinkedList_ListIteratorImpl = this.f_currentNode__java_util_LinkedList_ListIteratorImpl = this.f_currentNode__java_util_LinkedList_ListIteratorImpl.f_prev__java_util_LinkedList_Node;
  this.f_currentIndex__java_util_LinkedList_ListIteratorImpl = this.f_currentIndex__java_util_LinkedList_ListIteratorImpl - 1 | 0;
  return this.f_lastNode__java_util_LinkedList_ListIteratorImpl.f_value__java_util_LinkedList_Node;
 }
 /** @override @nodts @return {number} */
 m_previousIndex__int() {
  return this.f_currentIndex__java_util_LinkedList_ListIteratorImpl - 1 | 0;
 }
 /** @override @nodts */
 m_remove__void() {
  InternalPreconditions.m_checkState__boolean__void(!$Equality.$same(this.f_lastNode__java_util_LinkedList_ListIteratorImpl, null));
  let nextNode = this.f_lastNode__java_util_LinkedList_ListIteratorImpl.f_next__java_util_LinkedList_Node;
  this.$outer_this__java_util_LinkedList_ListIteratorImpl.m_removeNode__java_util_LinkedList_Node__java_lang_Object_$p_java_util_LinkedList(this.f_lastNode__java_util_LinkedList_ListIteratorImpl);
  if ($Equality.$same(this.f_currentNode__java_util_LinkedList_ListIteratorImpl, this.f_lastNode__java_util_LinkedList_ListIteratorImpl)) {
   this.f_currentNode__java_util_LinkedList_ListIteratorImpl = nextNode;
  } else {
   this.f_currentIndex__java_util_LinkedList_ListIteratorImpl = this.f_currentIndex__java_util_LinkedList_ListIteratorImpl - 1 | 0;
  }
  this.f_lastNode__java_util_LinkedList_ListIteratorImpl = null;
 }
 /** @override @nodts */
 m_set__java_lang_Object__void(/** E */ o) {
  InternalPreconditions.m_checkState__boolean__void(!$Equality.$same(this.f_lastNode__java_util_LinkedList_ListIteratorImpl, null));
  this.f_lastNode__java_util_LinkedList_ListIteratorImpl.f_value__java_util_LinkedList_Node = o;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_LinkedList_ListIteratorImpl() {
  this.f_lastNode__java_util_LinkedList_ListIteratorImpl = null;
 }
 /** @nodts */
 static $clinit() {
  ListIteratorImpl.$clinit = () =>{};
  ListIteratorImpl.$loadModules();
  j_l_Object.$clinit();
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
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
ListIterator.$markImplementor(ListIteratorImpl);
$Util.$setClassMetadata(ListIteratorImpl, 'java.util.LinkedList$ListIteratorImpl');

exports = ListIteratorImpl;

//# sourceMappingURL=LinkedList$ListIteratorImpl.js.map
