goog.module('java.util.Collections.LifoQueue$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractQueue = goog.require('java.util.AbstractQueue$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Deque = goog.forwardDeclare('java.util.Deque$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');

/**
 * @final
 * @template E
 * @extends {AbstractQueue<E>}
 * @implements {Serializable}
 */
class LifoQueue extends AbstractQueue {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Deque<E>} @nodts*/
  this.f_deque__java_util_Collections_LifoQueue_;
 }
 /** @nodts @template E @return {!LifoQueue<E>} */
 static $create__java_util_Deque(/** Deque<E> */ deque) {
  LifoQueue.$clinit();
  let $instance = new LifoQueue();
  $instance.$ctor__java_util_Collections_LifoQueue__java_util_Deque__void(deque);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_LifoQueue__java_util_Deque__void(/** Deque<E> */ deque) {
  this.$ctor__java_util_AbstractQueue__void();
  this.f_deque__java_util_Collections_LifoQueue_ = deque;
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return this.f_deque__java_util_Collections_LifoQueue_.m_iterator__java_util_Iterator();
 }
 /** @override @nodts @return {boolean} */
 m_offer__java_lang_Object__boolean(/** E */ e) {
  return this.f_deque__java_util_Collections_LifoQueue_.m_offerFirst__java_lang_Object__boolean(e);
 }
 /** @override @nodts @return {E} */
 m_peek__java_lang_Object() {
  return this.f_deque__java_util_Collections_LifoQueue_.m_peekFirst__java_lang_Object();
 }
 /** @override @nodts @return {E} */
 m_poll__java_lang_Object() {
  return this.f_deque__java_util_Collections_LifoQueue_.m_pollFirst__java_lang_Object();
 }
 /** @override @return {number} */
 size() {
  return this.f_deque__java_util_Collections_LifoQueue_.size();
 }
 /** @nodts */
 static $clinit() {
  LifoQueue.$clinit = () =>{};
  LifoQueue.$loadModules();
  AbstractQueue.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LifoQueue;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Serializable.$markImplementor(LifoQueue);
$Util.$setClassMetadata(LifoQueue, 'java.util.Collections$LifoQueue');

exports = LifoQueue;

//# sourceMappingURL=Collections$LifoQueue.js.map
