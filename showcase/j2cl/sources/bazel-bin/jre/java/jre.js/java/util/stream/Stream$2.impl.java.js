goog.module('java.util.stream.Stream.$2$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let BaseStream = goog.forwardDeclare('java.util.stream.BaseStream$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class $2 extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Spliterator<?>} @nodts*/
  this.f_next__java_util_stream_Stream_2;
  /**@type {Spliterator<?>} @nodts*/
  this.$captured_spliteratorOfStreams__java_util_stream_Stream_2;
 }
 /** @nodts @template T @return {!$2<T>} */
 static $create__java_util_Spliterator__long__int(/** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__java_util_stream_Stream_2__java_util_Spliterator__long__int__void($captured_spliteratorOfStreams, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_Stream_2__java_util_Spliterator__long__int__void(/** Spliterator<?> */ $captured_spliteratorOfStreams, /** !$Long */ $_0, /** number */ $_1) {
  this.$captured_spliteratorOfStreams__java_util_stream_Stream_2 = $captured_spliteratorOfStreams;
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void($_0, $_1);
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  while (this.m_advanceToNextSpliterator__boolean_$p_java_util_stream_Stream_2()) {
   if (this.f_next__java_util_stream_Stream_2.m_tryAdvance__java_util_function_Consumer__boolean(action)) {
    return true;
   } else {
    this.f_next__java_util_stream_Stream_2 = null;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_advanceToNextSpliterator__boolean_$p_java_util_stream_Stream_2() {
  while ($Equality.$same(this.f_next__java_util_stream_Stream_2, null)) {
   if (!this.$captured_spliteratorOfStreams__java_util_stream_Stream_2.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((n) =>{
    let n_1 = /**@type {Stream}*/ ($Casts.$to(n, Stream));
    if (!$Equality.$same(n_1, null)) {
     this.f_next__java_util_stream_Stream_2 = /**@type {!BaseStream<*, Stream<?>>}*/ (n_1).m_spliterator__java_util_Spliterator();
    }
   }))) {
    return false;
   }
  }
  return true;
 }
 /** @nodts */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Stream = goog.module.get('java.util.stream.Stream$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($2, 'java.util.stream.Stream$2');

exports = $2;

//# sourceMappingURL=Stream$2.js.map
