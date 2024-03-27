goog.module('java.util.stream.IntStream.$2$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfInt} @nodts*/
  this.f_next__java_util_stream_IntStream_2;
  /**@type {Spliterator<?>} @nodts*/
  this.$captured_spliteratorOfStreams__java_util_stream_IntStream_2;
 }
 /** @nodts @return {!$2} */
 static $create__java_util_Spliterator__long__int(/** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__java_util_stream_IntStream_2__java_util_Spliterator__long__int__void($captured_spliteratorOfStreams, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStream_2__java_util_Spliterator__long__int__void(/** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_spliteratorOfStreams__java_util_stream_IntStream_2 = $captured_spliteratorOfStreams;
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  while (this.m_advanceToNextSpliterator__boolean_$p_java_util_stream_IntStream_2()) {
   if (this.f_next__java_util_stream_IntStream_2.m_tryAdvance__java_lang_Object__boolean(action)) {
    return true;
   } else {
    this.f_next__java_util_stream_IntStream_2 = null;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_advanceToNextSpliterator__boolean_$p_java_util_stream_IntStream_2() {
  while ($Equality.$same(this.f_next__java_util_stream_IntStream_2, null)) {
   if (!this.$captured_spliteratorOfStreams__java_util_stream_IntStream_2.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((n) =>{
    let n_1 = /**@type {IntStream}*/ ($Casts.$to(n, IntStream));
    if (!$Equality.$same(n_1, null)) {
     this.f_next__java_util_stream_IntStream_2 = /**@type {!IntStream}*/ (n_1).m_spliterator__java_util_Spliterator_OfInt();
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
  $2.$clinit = () =>{};
  $2.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
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
$Util.$setClassMetadata($2, 'java.util.stream.IntStream$2');

exports = $2;

//# sourceMappingURL=IntStream$2.js.map
