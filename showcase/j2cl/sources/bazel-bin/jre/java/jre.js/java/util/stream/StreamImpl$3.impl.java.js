goog.module('java.util.stream.StreamImpl.$3$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let StreamImpl = goog.forwardDeclare('java.util.stream.StreamImpl$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 */
class $3 extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {StreamImpl<T>} @nodts*/
  this.$outer_this__java_util_stream_StreamImpl_3;
  /**@type {LongStream} @nodts*/
  this.f_nextStream__java_util_stream_StreamImpl_3;
  /**@type {OfLong} @nodts*/
  this.f_next__java_util_stream_StreamImpl_3;
  /**@type {Spliterator<?>} @nodts*/
  this.$captured_spliteratorOfStreams__java_util_stream_StreamImpl_3;
 }
 /** @nodts @template T @return {!$3<T>} */
 static $create__java_util_stream_StreamImpl__java_util_Spliterator__long__int(/** StreamImpl<T> */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__java_util_stream_StreamImpl_3__java_util_stream_StreamImpl__java_util_Spliterator__long__int__void($outer_this, $captured_spliteratorOfStreams, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_3__java_util_stream_StreamImpl__java_util_Spliterator__long__int__void(/** StreamImpl<T> */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_StreamImpl_3 = $outer_this;
  this.$captured_spliteratorOfStreams__java_util_stream_StreamImpl_3 = $captured_spliteratorOfStreams;
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  while (this.m_advanceToNextSpliterator__boolean_$p_java_util_stream_StreamImpl_3()) {
   if (this.f_next__java_util_stream_StreamImpl_3.m_tryAdvance__java_lang_Object__boolean(action)) {
    return true;
   } else {
    this.f_nextStream__java_util_stream_StreamImpl_3.m_close__void();
    this.f_nextStream__java_util_stream_StreamImpl_3 = null;
    this.f_next__java_util_stream_StreamImpl_3 = null;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_advanceToNextSpliterator__boolean_$p_java_util_stream_StreamImpl_3() {
  while ($Equality.$same(this.f_next__java_util_stream_StreamImpl_3, null)) {
   if (!this.$captured_spliteratorOfStreams__java_util_stream_StreamImpl_3.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((n) =>{
    let n_1 = /**@type {LongStream}*/ ($Casts.$to(n, LongStream));
    if (!$Equality.$same(n_1, null)) {
     this.f_nextStream__java_util_stream_StreamImpl_3 = /**@type {LongStream}*/ (n_1);
     this.f_next__java_util_stream_StreamImpl_3 = /**@type {!LongStream}*/ (n_1).m_spliterator__java_util_Spliterator_OfLong();
    }
   }))) {
    return false;
   }
  }
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 /** @nodts */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  LongStream = goog.module.get('java.util.stream.LongStream$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($3, 'java.util.stream.StreamImpl$3');

exports = $3;

//# sourceMappingURL=StreamImpl$3.js.map
