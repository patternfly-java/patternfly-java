goog.module('java.util.stream.DoubleStreamImpl.$1$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let DoubleStreamImpl = goog.forwardDeclare('java.util.stream.DoubleStreamImpl$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DoubleStreamImpl} @nodts*/
  this.$outer_this__java_util_stream_DoubleStreamImpl_1;
  /**@type {DoubleStream} @nodts*/
  this.f_nextStream__java_util_stream_DoubleStreamImpl_1;
  /**@type {OfDouble} @nodts*/
  this.f_next__java_util_stream_DoubleStreamImpl_1;
  /**@type {Spliterator<?>} @nodts*/
  this.$captured_spliteratorOfStreams__java_util_stream_DoubleStreamImpl_1;
 }
 /** @nodts @return {!$1} */
 static $create__java_util_stream_DoubleStreamImpl__java_util_Spliterator__long__int(/** DoubleStreamImpl */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_stream_DoubleStreamImpl_1__java_util_stream_DoubleStreamImpl__java_util_Spliterator__long__int__void($outer_this, $captured_spliteratorOfStreams, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl_1__java_util_stream_DoubleStreamImpl__java_util_Spliterator__long__int__void(/** DoubleStreamImpl */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_DoubleStreamImpl_1 = $outer_this;
  this.$captured_spliteratorOfStreams__java_util_stream_DoubleStreamImpl_1 = $captured_spliteratorOfStreams;
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  while (this.m_advanceToNextSpliterator__boolean_$p_java_util_stream_DoubleStreamImpl_1()) {
   if (this.f_next__java_util_stream_DoubleStreamImpl_1.m_tryAdvance__java_lang_Object__boolean(action)) {
    return true;
   } else {
    this.f_nextStream__java_util_stream_DoubleStreamImpl_1.m_close__void();
    this.f_nextStream__java_util_stream_DoubleStreamImpl_1 = null;
    this.f_next__java_util_stream_DoubleStreamImpl_1 = null;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_advanceToNextSpliterator__boolean_$p_java_util_stream_DoubleStreamImpl_1() {
  while ($Equality.$same(this.f_next__java_util_stream_DoubleStreamImpl_1, null)) {
   if (!this.$captured_spliteratorOfStreams__java_util_stream_DoubleStreamImpl_1.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((n) =>{
    let n_1 = /**@type {DoubleStream}*/ ($Casts.$to(n, DoubleStream));
    if (!$Equality.$same(n_1, null)) {
     this.f_nextStream__java_util_stream_DoubleStreamImpl_1 = /**@type {DoubleStream}*/ (n_1);
     this.f_next__java_util_stream_DoubleStreamImpl_1 = /**@type {!DoubleStream}*/ (n_1).m_spliterator__java_util_Spliterator_OfDouble();
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
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
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
$Util.$setClassMetadata($1, 'java.util.stream.DoubleStreamImpl$1');

exports = $1;

//# sourceMappingURL=DoubleStreamImpl$1.js.map
