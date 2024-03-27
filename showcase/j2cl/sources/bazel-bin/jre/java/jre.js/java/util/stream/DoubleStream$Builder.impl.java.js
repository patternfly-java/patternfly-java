goog.module('java.util.stream.DoubleStream.Builder$impl');

const DoubleConsumer = goog.require('java.util.function.DoubleConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');

/**
 * @interface
 * @extends {DoubleConsumer}
 */
class Builder {
 /** @abstract @override @nodts */
 m_accept__double__void(/** number */ t) {}
 /** @abstract @nodts @return {Builder} */
 m_add__double__java_util_stream_DoubleStream_Builder(/** number */ t) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_build__java_util_stream_DoubleStream() {}
 /** @nodts @return {Builder} */
 static m_add__$default__java_util_stream_DoubleStream_Builder__double__java_util_stream_DoubleStream_Builder(/** !Builder */ $thisArg, /** number */ t) {
  Builder.$clinit();
  $thisArg.m_accept__double__void(t);
  return $thisArg;
 }
 /** @nodts */
 static $clinit() {
  Builder.$clinit = () =>{};
  Builder.$loadModules();
  DoubleConsumer.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  DoubleConsumer.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_stream_DoubleStream_Builder = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_DoubleStream_Builder;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Builder.$markImplementor(/**@type {Function}*/ (Builder));
$Util.$setClassMetadataForInterface(Builder, 'java.util.stream.DoubleStream$Builder');

exports = Builder;

//# sourceMappingURL=DoubleStream$Builder.js.map
