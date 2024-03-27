goog.module('java.util.Queue$impl');

const Collection = goog.require('java.util.Collection$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template E
 * @extends {Collection<E>}
 */
class Queue {
 /** @abstract @nodts @return {E} */
 m_element__java_lang_Object() {}
 /** @abstract @nodts @return {boolean} */
 m_offer__java_lang_Object__boolean(/** E */ o) {}
 /** @abstract @nodts @return {E} */
 m_peek__java_lang_Object() {}
 /** @abstract @nodts @return {E} */
 m_poll__java_lang_Object() {}
 /** @abstract @nodts @return {E} */
 m_remove__java_lang_Object() {}
 /** @nodts */
 static $clinit() {
  Queue.$clinit = () =>{};
  Queue.$loadModules();
  Collection.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Collection.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_Queue = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Queue;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Queue.$markImplementor(/**@type {Function}*/ (Queue));
$Util.$setClassMetadataForInterface(Queue, 'java.util.Queue');

exports = Queue;

//# sourceMappingURL=Queue.js.map
