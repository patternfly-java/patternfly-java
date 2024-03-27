goog.module('java.util.stream.IntStreamImpl.SkipSpliterator$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @final
 */
class SkipSpliterator extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_skip__java_util_stream_IntStreamImpl_SkipSpliterator_ = $Long.fromInt(0);
  /**@type {OfInt} @nodts*/
  this.f_original__java_util_stream_IntStreamImpl_SkipSpliterator_;
 }
 /** @nodts @return {!SkipSpliterator} */
 static $create__long__java_util_Spliterator_OfInt(/** !$Long */ skip, /** OfInt */ original) {
  SkipSpliterator.$clinit();
  let $instance = new SkipSpliterator();
  $instance.$ctor__java_util_stream_IntStreamImpl_SkipSpliterator__long__java_util_Spliterator_OfInt__void(skip, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl_SkipSpliterator__long__java_util_Spliterator_OfInt__void(/** !$Long */ skip, /** OfInt */ original) {
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void(original.m_hasCharacteristics__int__boolean(Spliterator.f_SIZED__java_util_Spliterator) ? Math.m_max__long__long__long($Long.fromInt(0), $LongUtils.minus(original.m_estimateSize__long(), skip)) : Long.f_MAX_VALUE__java_lang_Long, original.m_characteristics__int());
  this.f_skip__java_util_stream_IntStreamImpl_SkipSpliterator_ = skip;
  this.f_original__java_util_stream_IntStreamImpl_SkipSpliterator_ = original;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.f_original__java_util_stream_IntStreamImpl_SkipSpliterator_.m_getComparator__java_util_Comparator();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  while ($LongUtils.greater(this.f_skip__java_util_stream_IntStreamImpl_SkipSpliterator_, $Long.fromInt(0))) {
   if (!this.f_original__java_util_stream_IntStreamImpl_SkipSpliterator_.m_tryAdvance__java_lang_Object__boolean(IntConsumer.$adapt((/** number */ ignore) =>{}))) {
    return false;
   }
   this.f_skip__java_util_stream_IntStreamImpl_SkipSpliterator_ = $LongUtils.minus(this.f_skip__java_util_stream_IntStreamImpl_SkipSpliterator_, $Long.fromInt(1));
  }
  return this.f_original__java_util_stream_IntStreamImpl_SkipSpliterator_.m_tryAdvance__java_lang_Object__boolean(action);
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 /** @nodts */
 static $clinit() {
  SkipSpliterator.$clinit = () =>{};
  SkipSpliterator.$loadModules();
  AbstractIntSpliterator.$clinit();
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
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata(SkipSpliterator, 'java.util.stream.IntStreamImpl$SkipSpliterator');

exports = SkipSpliterator;

//# sourceMappingURL=IntStreamImpl$SkipSpliterator.js.map
