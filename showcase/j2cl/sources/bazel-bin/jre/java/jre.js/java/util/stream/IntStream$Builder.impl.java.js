goog.module('java.util.stream.IntStream.Builder$impl');

const IntConsumer = goog.require('java.util.function.IntConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');

/**
 * @interface
 * @extends {IntConsumer}
 */
class Builder {
 /** @abstract @override @nodts */
 m_accept__int__void(/** number */ t) {}
 /** @abstract @nodts @return {Builder} */
 m_add__int__java_util_stream_IntStream_Builder(/** number */ t) {}
 /** @abstract @nodts @return {IntStream} */
 m_build__java_util_stream_IntStream() {}
 /** @nodts @return {Builder} */
 static m_add__$default__java_util_stream_IntStream_Builder__int__java_util_stream_IntStream_Builder(/** !Builder */ $thisArg, /** number */ t) {
  Builder.$clinit();
  $thisArg.m_accept__int__void(t);
  return $thisArg;
 }
 /** @nodts */
 static $clinit() {
  Builder.$clinit = () =>{};
  Builder.$loadModules();
  IntConsumer.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IntConsumer.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_stream_IntStream_Builder = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_IntStream_Builder;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Builder.$markImplementor(/**@type {Function}*/ (Builder));
$Util.$setClassMetadataForInterface(Builder, 'java.util.stream.IntStream$Builder');

exports = Builder;

//# sourceMappingURL=IntStream$Builder.js.map
