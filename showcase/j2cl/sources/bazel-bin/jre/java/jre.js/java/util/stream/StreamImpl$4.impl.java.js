goog.module('java.util.stream.StreamImpl.$4$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let StreamImpl = goog.forwardDeclare('java.util.stream.StreamImpl$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 */
class $4 extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {StreamImpl<T>} @nodts*/
  this.$outer_this__java_util_stream_StreamImpl_4;
  /**@type {DoubleStream} @nodts*/
  this.f_nextStream__java_util_stream_StreamImpl_4;
  /**@type {OfDouble} @nodts*/
  this.f_next__java_util_stream_StreamImpl_4;
  /**@type {Spliterator<?>} @nodts*/
  this.$captured_spliteratorOfStreams__java_util_stream_StreamImpl_4;
 }
 /** @nodts @template T @return {!$4<T>} */
 static $create__java_util_stream_StreamImpl__java_util_Spliterator__long__int(/** StreamImpl<T> */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__java_util_stream_StreamImpl_4__java_util_stream_StreamImpl__java_util_Spliterator__long__int__void($outer_this, $captured_spliteratorOfStreams, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_4__java_util_stream_StreamImpl__java_util_Spliterator__long__int__void(/** StreamImpl<T> */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_StreamImpl_4 = $outer_this;
  this.$captured_spliteratorOfStreams__java_util_stream_StreamImpl_4 = $captured_spliteratorOfStreams;
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  while (this.m_advanceToNextSpliterator__boolean_$p_java_util_stream_StreamImpl_4()) {
   if (this.f_next__java_util_stream_StreamImpl_4.m_tryAdvance__java_lang_Object__boolean(action)) {
    return true;
   } else {
    this.f_nextStream__java_util_stream_StreamImpl_4.m_close__void();
    this.f_nextStream__java_util_stream_StreamImpl_4 = null;
    this.f_next__java_util_stream_StreamImpl_4 = null;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_advanceToNextSpliterator__boolean_$p_java_util_stream_StreamImpl_4() {
  while ($Equality.$same(this.f_next__java_util_stream_StreamImpl_4, null)) {
   if (!this.$captured_spliteratorOfStreams__java_util_stream_StreamImpl_4.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((n) =>{
    let n_1 = /**@type {DoubleStream}*/ ($Casts.$to(n, DoubleStream));
    if (!$Equality.$same(n_1, null)) {
     this.f_nextStream__java_util_stream_StreamImpl_4 = /**@type {DoubleStream}*/ (n_1);
     this.f_next__java_util_stream_StreamImpl_4 = /**@type {!DoubleStream}*/ (n_1).m_spliterator__java_util_Spliterator_OfDouble();
    }
   }))) {
    return false;
   }
  }
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_DoubleConsumer__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, DoubleConsumer)));
 }
 /** @nodts */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  DoubleStream = goog.module.get('java.util.stream.DoubleStream$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($4, 'java.util.stream.StreamImpl$4');

exports = $4;

//# sourceMappingURL=StreamImpl$4.js.map
