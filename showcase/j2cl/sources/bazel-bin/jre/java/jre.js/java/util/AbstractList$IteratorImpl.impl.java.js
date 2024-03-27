goog.module('java.util.AbstractList.IteratorImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractList = goog.forwardDeclare('java.util.AbstractList$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @template E
 * @implements {Iterator<E>}
 */
class IteratorImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {AbstractList<E>} @nodts*/
  this.$outer_this__java_util_AbstractList_IteratorImpl;
  /**@type {number} @nodts*/
  this.f_i__java_util_AbstractList_IteratorImpl = 0;
  /**@type {number} @nodts*/
  this.f_last__java_util_AbstractList_IteratorImpl = 0;
 }
 /** @nodts @template E @return {!IteratorImpl<E>} */
 static $create__java_util_AbstractList(/** AbstractList<E> */ $outer_this) {
  IteratorImpl.$clinit();
  let $instance = new IteratorImpl();
  $instance.$ctor__java_util_AbstractList_IteratorImpl__java_util_AbstractList__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_AbstractList_IteratorImpl__java_util_AbstractList__void(/** AbstractList<E> */ $outer_this) {
  this.$outer_this__java_util_AbstractList_IteratorImpl = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_AbstractList_IteratorImpl();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_i__java_util_AbstractList_IteratorImpl < this.$outer_this__java_util_AbstractList_IteratorImpl.size();
 }
 /** @override @nodts @return {E} */
 m_next__java_lang_Object() {
  let /** number */ $value;
  InternalPreconditions.m_checkElement__boolean__void(this.m_hasNext__boolean());
  return this.$outer_this__java_util_AbstractList_IteratorImpl.getAtIndex(this.f_last__java_util_AbstractList_IteratorImpl = ($value = this.f_i__java_util_AbstractList_IteratorImpl, this.f_i__java_util_AbstractList_IteratorImpl = this.f_i__java_util_AbstractList_IteratorImpl + 1 | 0, $value));
 }
 /** @override @nodts */
 m_remove__void() {
  InternalPreconditions.m_checkState__boolean__void(this.f_last__java_util_AbstractList_IteratorImpl != (- 1 | 0));
  this.$outer_this__java_util_AbstractList_IteratorImpl.removeAtIndex(this.f_last__java_util_AbstractList_IteratorImpl);
  this.f_i__java_util_AbstractList_IteratorImpl = this.f_last__java_util_AbstractList_IteratorImpl;
  this.f_last__java_util_AbstractList_IteratorImpl = - 1 | 0;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_AbstractList_IteratorImpl() {
  this.f_i__java_util_AbstractList_IteratorImpl = 0;
  this.f_last__java_util_AbstractList_IteratorImpl = - 1 | 0;
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
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
Iterator.$markImplementor(IteratorImpl);
$Util.$setClassMetadata(IteratorImpl, 'java.util.AbstractList$IteratorImpl');

exports = IteratorImpl;

//# sourceMappingURL=AbstractList$IteratorImpl.js.map
