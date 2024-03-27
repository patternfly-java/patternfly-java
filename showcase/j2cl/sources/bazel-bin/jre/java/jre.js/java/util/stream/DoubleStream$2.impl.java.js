goog.module('java.util.stream.DoubleStream.$2$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfDouble} @nodts*/
  this.f_next__java_util_stream_DoubleStream_2;
  /**@type {Spliterator<?>} @nodts*/
  this.$captured_spliteratorOfStreams__java_util_stream_DoubleStream_2;
 }
 /** @nodts @return {!$2} */
 static $create__java_util_Spliterator__long__int(/** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__java_util_stream_DoubleStream_2__java_util_Spliterator__long__int__void($captured_spliteratorOfStreams, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStream_2__java_util_Spliterator__long__int__void(/** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_spliteratorOfStreams__java_util_stream_DoubleStream_2 = $captured_spliteratorOfStreams;
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void($_0, $_1);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  while (this.m_advanceToNextSpliterator__boolean_$p_java_util_stream_DoubleStream_2()) {
   if (this.f_next__java_util_stream_DoubleStream_2.m_tryAdvance__java_lang_Object__boolean(action)) {
    return true;
   } else {
    this.f_next__java_util_stream_DoubleStream_2 = null;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_advanceToNextSpliterator__boolean_$p_java_util_stream_DoubleStream_2() {
  while ($Equality.$same(this.f_next__java_util_stream_DoubleStream_2, null)) {
   if (!this.$captured_spliteratorOfStreams__java_util_stream_DoubleStream_2.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((n) =>{
    let n_1 = /**@type {DoubleStream}*/ ($Casts.$to(n, DoubleStream));
    if (!$Equality.$same(n_1, null)) {
     this.f_next__java_util_stream_DoubleStream_2 = /**@type {!DoubleStream}*/ (n_1).m_spliterator__java_util_Spliterator_OfDouble();
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
  $2.$clinit = () =>{};
  $2.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
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
$Util.$setClassMetadata($2, 'java.util.stream.DoubleStream$2');

exports = $2;

//# sourceMappingURL=DoubleStream$2.js.map
