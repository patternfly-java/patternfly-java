goog.module('java.util.stream.DoubleStreamImpl.SkipSpliterator$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @final
 */
class SkipSpliterator extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_skip__java_util_stream_DoubleStreamImpl_SkipSpliterator_ = $Long.fromInt(0);
  /**@type {OfDouble} @nodts*/
  this.f_original__java_util_stream_DoubleStreamImpl_SkipSpliterator_;
 }
 /** @nodts @return {!SkipSpliterator} */
 static $create__long__java_util_Spliterator_OfDouble(/** !$Long */ skip, /** OfDouble */ original) {
  SkipSpliterator.$clinit();
  let $instance = new SkipSpliterator();
  $instance.$ctor__java_util_stream_DoubleStreamImpl_SkipSpliterator__long__java_util_Spliterator_OfDouble__void(skip, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl_SkipSpliterator__long__java_util_Spliterator_OfDouble__void(/** !$Long */ skip, /** OfDouble */ original) {
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(original.m_hasCharacteristics__int__boolean(Spliterator.f_SIZED__java_util_Spliterator) ? Math.m_max__long__long__long($Long.fromInt(0), $LongUtils.minus(original.m_estimateSize__long(), skip)) : Long.f_MAX_VALUE__java_lang_Long, original.m_characteristics__int());
  this.f_skip__java_util_stream_DoubleStreamImpl_SkipSpliterator_ = skip;
  this.f_original__java_util_stream_DoubleStreamImpl_SkipSpliterator_ = original;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.f_original__java_util_stream_DoubleStreamImpl_SkipSpliterator_.m_getComparator__java_util_Comparator();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  while ($LongUtils.greater(this.f_skip__java_util_stream_DoubleStreamImpl_SkipSpliterator_, $Long.fromInt(0))) {
   if (!this.f_original__java_util_stream_DoubleStreamImpl_SkipSpliterator_.m_tryAdvance__java_lang_Object__boolean(DoubleConsumer.$adapt((/** number */ ignore) =>{}))) {
    return false;
   }
   this.f_skip__java_util_stream_DoubleStreamImpl_SkipSpliterator_ = $LongUtils.minus(this.f_skip__java_util_stream_DoubleStreamImpl_SkipSpliterator_, $Long.fromInt(1));
  }
  return this.f_original__java_util_stream_DoubleStreamImpl_SkipSpliterator_.m_tryAdvance__java_lang_Object__boolean(action);
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_DoubleConsumer__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, DoubleConsumer)));
 }
 /** @nodts */
 static $clinit() {
  SkipSpliterator.$clinit = () =>{};
  SkipSpliterator.$loadModules();
  AbstractDoubleSpliterator.$clinit();
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
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata(SkipSpliterator, 'java.util.stream.DoubleStreamImpl$SkipSpliterator');

exports = SkipSpliterator;

//# sourceMappingURL=DoubleStreamImpl$SkipSpliterator.js.map
