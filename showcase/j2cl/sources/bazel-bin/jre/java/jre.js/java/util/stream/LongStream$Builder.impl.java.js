goog.module('java.util.stream.LongStream.Builder$impl');

const LongConsumer = goog.require('java.util.function.LongConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 * @extends {LongConsumer}
 */
class Builder {
 /** @abstract @override @nodts */
 m_accept__long__void(/** !$Long */ t) {}
 /** @abstract @nodts @return {Builder} */
 m_add__long__java_util_stream_LongStream_Builder(/** !$Long */ t) {}
 /** @abstract @nodts @return {LongStream} */
 m_build__java_util_stream_LongStream() {}
 /** @nodts @return {Builder} */
 static m_add__$default__java_util_stream_LongStream_Builder__long__java_util_stream_LongStream_Builder(/** !Builder */ $thisArg, /** !$Long */ t) {
  Builder.$clinit();
  $thisArg.m_accept__long__void(t);
  return $thisArg;
 }
 /** @nodts */
 static $clinit() {
  Builder.$clinit = () =>{};
  Builder.$loadModules();
  LongConsumer.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  LongConsumer.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_stream_LongStream_Builder = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_LongStream_Builder;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Builder.$markImplementor(/**@type {Function}*/ (Builder));
$Util.$setClassMetadataForInterface(Builder, 'java.util.stream.LongStream$Builder');

exports = Builder;

//# sourceMappingURL=LongStream$Builder.js.map
