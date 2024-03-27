goog.module('java.util.stream.LongStream.$2$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfLong} @nodts*/
  this.f_next__java_util_stream_LongStream_2;
  /**@type {Spliterator<?>} @nodts*/
  this.$captured_spliteratorOfStreams__java_util_stream_LongStream_2;
 }
 /** @nodts @return {!$2} */
 static $create__java_util_Spliterator__long__int(/** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__java_util_stream_LongStream_2__java_util_Spliterator__long__int__void($captured_spliteratorOfStreams, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStream_2__java_util_Spliterator__long__int__void(/** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_spliteratorOfStreams__java_util_stream_LongStream_2 = $captured_spliteratorOfStreams;
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  while (this.m_advanceToNextSpliterator__boolean_$p_java_util_stream_LongStream_2()) {
   if (this.f_next__java_util_stream_LongStream_2.m_tryAdvance__java_lang_Object__boolean(action)) {
    return true;
   } else {
    this.f_next__java_util_stream_LongStream_2 = null;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_advanceToNextSpliterator__boolean_$p_java_util_stream_LongStream_2() {
  while ($Equality.$same(this.f_next__java_util_stream_LongStream_2, null)) {
   if (!this.$captured_spliteratorOfStreams__java_util_stream_LongStream_2.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((n) =>{
    let n_1 = /**@type {LongStream}*/ ($Casts.$to(n, LongStream));
    if (!$Equality.$same(n_1, null)) {
     this.f_next__java_util_stream_LongStream_2 = /**@type {!LongStream}*/ (n_1).m_spliterator__java_util_Spliterator_OfLong();
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
  $2.$clinit = () =>{};
  $2.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
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
$Util.$setClassMetadata($2, 'java.util.stream.LongStream$2');

exports = $2;

//# sourceMappingURL=LongStream$2.js.map
