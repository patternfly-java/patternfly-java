goog.module('java.util.stream.Stream.Builder$impl');

const Consumer = goog.require('java.util.function.Consumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');

/**
 * @interface
 * @template T
 * @extends {Consumer<T>}
 */
class Builder {
 /** @abstract @override @nodts */
 m_accept__java_lang_Object__void(/** T */ t) {}
 /** @abstract @nodts @return {Builder<T>} */
 m_add__java_lang_Object__java_util_stream_Stream_Builder(/** T */ t) {}
 /** @abstract @nodts @return {Stream<T>} */
 m_build__java_util_stream_Stream() {}
 /** @nodts @template T @return {Builder<T>} */
 static m_add__$default__java_util_stream_Stream_Builder__java_lang_Object__java_util_stream_Stream_Builder(/** !Builder<T> */ $thisArg, /** T */ t) {
  Builder.$clinit();
  $thisArg.m_accept__java_lang_Object__void(t);
  return $thisArg;
 }
 /** @nodts */
 static $clinit() {
  Builder.$clinit = () =>{};
  Builder.$loadModules();
  Consumer.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Consumer.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_stream_Stream_Builder = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_Stream_Builder;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Builder.$markImplementor(/**@type {Function}*/ (Builder));
$Util.$setClassMetadataForInterface(Builder, 'java.util.stream.Stream$Builder');

exports = Builder;

//# sourceMappingURL=Stream$Builder.js.map
