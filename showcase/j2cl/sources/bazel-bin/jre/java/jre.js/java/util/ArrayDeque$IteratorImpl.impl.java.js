goog.module('java.util.ArrayDeque.IteratorImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayDeque = goog.forwardDeclare('java.util.ArrayDeque$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @final
 * @template E
 * @implements {Iterator<E>}
 */
class IteratorImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ArrayDeque<E>} @nodts*/
  this.$outer_this__java_util_ArrayDeque_IteratorImpl;
  /**@type {number} @nodts*/
  this.f_currentIndex__java_util_ArrayDeque_IteratorImpl_ = 0;
  /**@type {number} @nodts*/
  this.f_fence__java_util_ArrayDeque_IteratorImpl_ = 0;
  /**@type {number} @nodts*/
  this.f_lastIndex__java_util_ArrayDeque_IteratorImpl_ = 0;
 }
 /** @nodts @template E @return {!IteratorImpl<E>} */
 static $create__java_util_ArrayDeque(/** ArrayDeque<E> */ $outer_this) {
  IteratorImpl.$clinit();
  let $instance = new IteratorImpl();
  $instance.$ctor__java_util_ArrayDeque_IteratorImpl__java_util_ArrayDeque__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_ArrayDeque_IteratorImpl__java_util_ArrayDeque__void(/** ArrayDeque<E> */ $outer_this) {
  this.$outer_this__java_util_ArrayDeque_IteratorImpl = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_ArrayDeque_IteratorImpl();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_currentIndex__java_util_ArrayDeque_IteratorImpl_ != this.f_fence__java_util_ArrayDeque_IteratorImpl_;
 }
 /** @override @nodts @return {E} */
 m_next__java_lang_Object() {
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.m_hasNext__boolean());
  let e = this.$outer_this__java_util_ArrayDeque_IteratorImpl.f_array__java_util_ArrayDeque_[this.f_currentIndex__java_util_ArrayDeque_IteratorImpl_];
  ArrayDeque.m_checkConcurrentModification__boolean__void(this.f_fence__java_util_ArrayDeque_IteratorImpl_ == this.$outer_this__java_util_ArrayDeque_IteratorImpl.f_tail__java_util_ArrayDeque_ && !$Equality.$same(e, null));
  this.f_lastIndex__java_util_ArrayDeque_IteratorImpl_ = this.f_currentIndex__java_util_ArrayDeque_IteratorImpl_;
  this.f_currentIndex__java_util_ArrayDeque_IteratorImpl_ = (this.f_currentIndex__java_util_ArrayDeque_IteratorImpl_ + 1 | 0) & (this.$outer_this__java_util_ArrayDeque_IteratorImpl.f_array__java_util_ArrayDeque_.length - 1 | 0);
  return e;
 }
 /** @override @nodts */
 m_remove__void() {
  InternalPreconditions.m_checkState__boolean__void(this.f_lastIndex__java_util_ArrayDeque_IteratorImpl_ >= 0);
  if (this.$outer_this__java_util_ArrayDeque_IteratorImpl.m_removeAtIndex__int__int_$p_java_util_ArrayDeque(this.f_lastIndex__java_util_ArrayDeque_IteratorImpl_) < 0) {
   this.f_currentIndex__java_util_ArrayDeque_IteratorImpl_ = (this.f_currentIndex__java_util_ArrayDeque_IteratorImpl_ - 1 | 0) & (this.$outer_this__java_util_ArrayDeque_IteratorImpl.f_array__java_util_ArrayDeque_.length - 1 | 0);
   this.f_fence__java_util_ArrayDeque_IteratorImpl_ = this.$outer_this__java_util_ArrayDeque_IteratorImpl.f_tail__java_util_ArrayDeque_;
  }
  this.f_lastIndex__java_util_ArrayDeque_IteratorImpl_ = - 1 | 0;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_ArrayDeque_IteratorImpl() {
  this.f_currentIndex__java_util_ArrayDeque_IteratorImpl_ = this.$outer_this__java_util_ArrayDeque_IteratorImpl.f_head__java_util_ArrayDeque_;
  this.f_fence__java_util_ArrayDeque_IteratorImpl_ = this.$outer_this__java_util_ArrayDeque_IteratorImpl.f_tail__java_util_ArrayDeque_;
  this.f_lastIndex__java_util_ArrayDeque_IteratorImpl_ = - 1 | 0;
 }
 /** @nodts */
 static $clinit() {
  IteratorImpl.$clinit = () =>{};
  IteratorImpl.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IteratorImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayDeque = goog.module.get('java.util.ArrayDeque$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Iterator.$markImplementor(IteratorImpl);
$Util.$setClassMetadata(IteratorImpl, 'java.util.ArrayDeque$IteratorImpl');

exports = IteratorImpl;

//# sourceMappingURL=ArrayDeque$IteratorImpl.js.map
