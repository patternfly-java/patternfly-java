goog.module('java.util.stream.StreamImpl.$1$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let BaseStream = goog.forwardDeclare('java.util.stream.BaseStream$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamImpl = goog.forwardDeclare('java.util.stream.StreamImpl$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template R, T
 * @extends {AbstractSpliterator<R>}
 */
class $1 extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {StreamImpl<T>} @nodts*/
  this.$outer_this__java_util_stream_StreamImpl_1;
  /**@type {Stream<?>} @nodts*/
  this.f_nextStream__java_util_stream_StreamImpl_1;
  /**@type {Spliterator<?>} @nodts*/
  this.f_next__java_util_stream_StreamImpl_1;
  /**@type {Spliterator<?>} @nodts*/
  this.$captured_spliteratorOfStreams__java_util_stream_StreamImpl_1;
 }
 /** @nodts @template R, T @return {!$1<R, T>} */
 static $create__java_util_stream_StreamImpl__java_util_Spliterator__long__int(/** StreamImpl<T> */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_stream_StreamImpl_1__java_util_stream_StreamImpl__java_util_Spliterator__long__int__void($outer_this, $captured_spliteratorOfStreams, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_1__java_util_stream_StreamImpl__java_util_Spliterator__long__int__void(/** StreamImpl<T> */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_StreamImpl_1 = $outer_this;
  this.$captured_spliteratorOfStreams__java_util_stream_StreamImpl_1 = $captured_spliteratorOfStreams;
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void($_0, $_1);
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  while (this.m_advanceToNextSpliterator__boolean_$p_java_util_stream_StreamImpl_1()) {
   if (this.f_next__java_util_stream_StreamImpl_1.m_tryAdvance__java_util_function_Consumer__boolean(action)) {
    return true;
   } else {
    this.f_nextStream__java_util_stream_StreamImpl_1.m_close__void();
    this.f_nextStream__java_util_stream_StreamImpl_1 = null;
    this.f_next__java_util_stream_StreamImpl_1 = null;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_advanceToNextSpliterator__boolean_$p_java_util_stream_StreamImpl_1() {
  while ($Equality.$same(this.f_next__java_util_stream_StreamImpl_1, null)) {
   if (!this.$captured_spliteratorOfStreams__java_util_stream_StreamImpl_1.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((n) =>{
    let n_1 = /**@type {Stream}*/ ($Casts.$to(n, Stream));
    if (!$Equality.$same(n_1, null)) {
     this.f_nextStream__java_util_stream_StreamImpl_1 = /**@type {Stream<*>}*/ (n_1);
     this.f_next__java_util_stream_StreamImpl_1 = /**@type {!BaseStream<*, Stream<?>>}*/ (n_1).m_spliterator__java_util_Spliterator();
    }
   }))) {
    return false;
   }
  }
  return true;
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Stream = goog.module.get('java.util.stream.Stream$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($1, 'java.util.stream.StreamImpl$1');

exports = $1;

//# sourceMappingURL=StreamImpl$1.js.map
