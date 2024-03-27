goog.module('java.util.stream.BaseStream$impl');

const AutoCloseable = goog.require('java.lang.AutoCloseable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');

/**
 * @interface
 * @template T, S
 * @extends {AutoCloseable}
 */
class BaseStream {
 /** @abstract @nodts @return {Iterator<T>} */
 m_iterator__java_util_Iterator() {}
 /** @abstract @nodts @return {Spliterator<T>} */
 m_spliterator__java_util_Spliterator() {}
 /** @abstract @nodts @return {boolean} */
 m_isParallel__boolean() {}
 /** @abstract @nodts @return {S} */
 m_sequential__java_util_stream_BaseStream() {}
 /** @abstract @nodts @return {S} */
 m_parallel__java_util_stream_BaseStream() {}
 /** @abstract @nodts @return {S} */
 m_unordered__java_util_stream_BaseStream() {}
 /** @abstract @nodts @return {S} */
 m_onClose__java_lang_Runnable__java_util_stream_BaseStream(/** Runnable */ closeHandler) {}
 /** @abstract @override @nodts */
 m_close__void() {}
 /** @nodts */
 static $clinit() {
  BaseStream.$clinit = () =>{};
  BaseStream.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  AutoCloseable.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_stream_BaseStream = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_BaseStream;
 }
 
 /** @nodts */
 static $loadModules() {}
}
BaseStream.$markImplementor(/**@type {Function}*/ (BaseStream));
$Util.$setClassMetadataForInterface(BaseStream, 'java.util.stream.BaseStream');

exports = BaseStream;

//# sourceMappingURL=BaseStream.js.map
