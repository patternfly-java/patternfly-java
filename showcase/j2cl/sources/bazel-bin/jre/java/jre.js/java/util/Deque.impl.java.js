goog.module('java.util.Deque$impl');

const Queue = goog.require('java.util.Queue$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');

/**
 * @interface
 * @template E
 * @extends {Queue<E>}
 */
class Deque {
 /** @abstract @nodts */
 m_addFirst__java_lang_Object__void(/** E */ e) {}
 /** @abstract @nodts */
 m_addLast__java_lang_Object__void(/** E */ e) {}
 /** @abstract @nodts @return {Iterator<E>} */
 m_descendingIterator__java_util_Iterator() {}
 /** @abstract @nodts @return {E} */
 m_getFirst__java_lang_Object() {}
 /** @abstract @nodts @return {E} */
 m_getLast__java_lang_Object() {}
 /** @abstract @nodts @return {boolean} */
 m_offerFirst__java_lang_Object__boolean(/** E */ e) {}
 /** @abstract @nodts @return {boolean} */
 m_offerLast__java_lang_Object__boolean(/** E */ e) {}
 /** @abstract @nodts @return {E} */
 m_peekFirst__java_lang_Object() {}
 /** @abstract @nodts @return {E} */
 m_peekLast__java_lang_Object() {}
 /** @abstract @nodts @return {E} */
 m_pollFirst__java_lang_Object() {}
 /** @abstract @nodts @return {E} */
 m_pollLast__java_lang_Object() {}
 /** @abstract @nodts @return {E} */
 m_pop__java_lang_Object() {}
 /** @abstract @nodts */
 m_push__java_lang_Object__void(/** E */ e) {}
 /** @abstract @nodts @return {E} */
 m_removeFirst__java_lang_Object() {}
 /** @abstract @nodts @return {boolean} */
 m_removeFirstOccurrence__java_lang_Object__boolean(/** * */ o) {}
 /** @abstract @nodts @return {E} */
 m_removeLast__java_lang_Object() {}
 /** @abstract @nodts @return {boolean} */
 m_removeLastOccurrence__java_lang_Object__boolean(/** * */ o) {}
 /** @nodts */
 static $clinit() {
  Deque.$clinit = () =>{};
  Deque.$loadModules();
  Collection.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Queue.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_Deque = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Deque;
 }
 
 /** @nodts */
 static $loadModules() {
  Collection = goog.module.get('java.util.Collection$impl');
 }
}
Deque.$markImplementor(/**@type {Function}*/ (Deque));
$Util.$setClassMetadataForInterface(Deque, 'java.util.Deque');

exports = Deque;

//# sourceMappingURL=Deque.js.map
