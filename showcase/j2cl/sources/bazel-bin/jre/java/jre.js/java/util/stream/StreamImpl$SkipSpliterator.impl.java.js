goog.module('java.util.stream.StreamImpl.SkipSpliterator$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @final
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class SkipSpliterator extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_skip__java_util_stream_StreamImpl_SkipSpliterator_ = $Long.fromInt(0);
  /**@type {Spliterator<T>} @nodts*/
  this.f_original__java_util_stream_StreamImpl_SkipSpliterator_;
 }
 /** @nodts @template T @return {!SkipSpliterator<T>} */
 static $create__long__java_util_Spliterator(/** !$Long */ skip, /** Spliterator<T> */ original) {
  SkipSpliterator.$clinit();
  let $instance = new SkipSpliterator();
  $instance.$ctor__java_util_stream_StreamImpl_SkipSpliterator__long__java_util_Spliterator__void(skip, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_SkipSpliterator__long__java_util_Spliterator__void(/** !$Long */ skip, /** Spliterator<T> */ original) {
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(original.m_hasCharacteristics__int__boolean(Spliterator.f_SIZED__java_util_Spliterator) ? Math.m_max__long__long__long($Long.fromInt(0), $LongUtils.minus(original.m_estimateSize__long(), skip)) : Long.f_MAX_VALUE__java_lang_Long, original.m_characteristics__int());
  this.f_skip__java_util_stream_StreamImpl_SkipSpliterator_ = skip;
  this.f_original__java_util_stream_StreamImpl_SkipSpliterator_ = original;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.f_original__java_util_stream_StreamImpl_SkipSpliterator_.m_getComparator__java_util_Comparator();
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  while ($LongUtils.greater(this.f_skip__java_util_stream_StreamImpl_SkipSpliterator_, $Long.fromInt(0))) {
   if (!this.f_original__java_util_stream_StreamImpl_SkipSpliterator_.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((/** ? */ ignore) =>{}))) {
    return false;
   }
   this.f_skip__java_util_stream_StreamImpl_SkipSpliterator_ = $LongUtils.minus(this.f_skip__java_util_stream_StreamImpl_SkipSpliterator_, $Long.fromInt(1));
  }
  return this.f_original__java_util_stream_StreamImpl_SkipSpliterator_.m_tryAdvance__java_util_function_Consumer__boolean(action);
 }
 /** @nodts */
 static $clinit() {
  SkipSpliterator.$clinit = () =>{};
  SkipSpliterator.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SkipSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Math = goog.module.get('java.lang.Math$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata(SkipSpliterator, 'java.util.stream.StreamImpl$SkipSpliterator');

exports = SkipSpliterator;

//# sourceMappingURL=StreamImpl$SkipSpliterator.js.map
