goog.module('java.util.Iterator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 * @template T
 */
class Iterator {
 /** @abstract @nodts @return {boolean} */
 m_hasNext__boolean() {}
 /** @abstract @nodts @return {T} */
 m_next__java_lang_Object() {}
 /** @abstract @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {}
 /** @abstract @nodts */
 m_remove__void() {}
 /** @nodts @template T */
 static m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(/** !Iterator<T> */ $thisArg, /** Consumer<?> */ consumer) {
  Iterator.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  while ($thisArg.m_hasNext__boolean()) {
   consumer.m_accept__java_lang_Object__void($thisArg.m_next__java_lang_Object());
  }
 }
 /** @nodts @template T */
 static m_remove__$default__java_util_Iterator__void(/** !Iterator<T> */ $thisArg) {
  Iterator.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @nodts */
 static $clinit() {
  Iterator.$clinit = () =>{};
  Iterator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_Iterator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Iterator;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Iterator.$markImplementor(/**@type {Function}*/ (Iterator));
$Util.$setClassMetadataForInterface(Iterator, 'java.util.Iterator');

exports = Iterator;

//# sourceMappingURL=Iterator.js.map
