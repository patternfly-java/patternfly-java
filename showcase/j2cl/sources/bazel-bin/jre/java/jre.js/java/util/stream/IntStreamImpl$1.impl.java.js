goog.module('java.util.stream.IntStreamImpl.$1$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let IntStreamImpl = goog.forwardDeclare('java.util.stream.IntStreamImpl$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {IntStreamImpl} @nodts*/
  this.$outer_this__java_util_stream_IntStreamImpl_1;
  /**@type {IntStream} @nodts*/
  this.f_nextStream__java_util_stream_IntStreamImpl_1;
  /**@type {OfInt} @nodts*/
  this.f_next__java_util_stream_IntStreamImpl_1;
  /**@type {Spliterator<?>} @nodts*/
  this.$captured_spliteratorOfStreams__java_util_stream_IntStreamImpl_1;
 }
 /** @nodts @return {!$1} */
 static $create__java_util_stream_IntStreamImpl__java_util_Spliterator__long__int(/** IntStreamImpl */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_stream_IntStreamImpl_1__java_util_stream_IntStreamImpl__java_util_Spliterator__long__int__void($outer_this, $captured_spliteratorOfStreams, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl_1__java_util_stream_IntStreamImpl__java_util_Spliterator__long__int__void(/** IntStreamImpl */ $outer_this, /** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_IntStreamImpl_1 = $outer_this;
  this.$captured_spliteratorOfStreams__java_util_stream_IntStreamImpl_1 = $captured_spliteratorOfStreams;
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  while (this.m_advanceToNextSpliterator__boolean_$p_java_util_stream_IntStreamImpl_1()) {
   if (this.f_next__java_util_stream_IntStreamImpl_1.m_tryAdvance__java_lang_Object__boolean(action)) {
    return true;
   } else {
    this.f_nextStream__java_util_stream_IntStreamImpl_1.m_close__void();
    this.f_nextStream__java_util_stream_IntStreamImpl_1 = null;
    this.f_next__java_util_stream_IntStreamImpl_1 = null;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_advanceToNextSpliterator__boolean_$p_java_util_stream_IntStreamImpl_1() {
  while ($Equality.$same(this.f_next__java_util_stream_IntStreamImpl_1, null)) {
   if (!this.$captured_spliteratorOfStreams__java_util_stream_IntStreamImpl_1.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((n) =>{
    let n_1 = /**@type {IntStream}*/ ($Casts.$to(n, IntStream));
    if (!$Equality.$same(n_1, null)) {
     this.f_nextStream__java_util_stream_IntStreamImpl_1 = /**@type {IntStream}*/ (n_1);
     this.f_next__java_util_stream_IntStreamImpl_1 = /**@type {!IntStream}*/ (n_1).m_spliterator__java_util_Spliterator_OfInt();
    }
   }))) {
    return false;
   }
  }
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  IntStream = goog.module.get('java.util.stream.IntStream$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($1, 'java.util.stream.IntStreamImpl$1');

exports = $1;

//# sourceMappingURL=IntStreamImpl$1.js.map
