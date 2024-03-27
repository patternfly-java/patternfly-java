goog.module('java.util.stream.LongStreamImpl.SkipSpliterator$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @final
 */
class SkipSpliterator extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_skip__java_util_stream_LongStreamImpl_SkipSpliterator_ = $Long.fromInt(0);
  /**@type {OfLong} @nodts*/
  this.f_original__java_util_stream_LongStreamImpl_SkipSpliterator_;
 }
 /** @nodts @return {!SkipSpliterator} */
 static $create__long__java_util_Spliterator_OfLong(/** !$Long */ skip, /** OfLong */ original) {
  SkipSpliterator.$clinit();
  let $instance = new SkipSpliterator();
  $instance.$ctor__java_util_stream_LongStreamImpl_SkipSpliterator__long__java_util_Spliterator_OfLong__void(skip, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStreamImpl_SkipSpliterator__long__java_util_Spliterator_OfLong__void(/** !$Long */ skip, /** OfLong */ original) {
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(original.m_hasCharacteristics__int__boolean(Spliterator.f_SIZED__java_util_Spliterator) ? Math.m_max__long__long__long($Long.fromInt(0), $LongUtils.minus(original.m_estimateSize__long(), skip)) : Long.f_MAX_VALUE__java_lang_Long, original.m_characteristics__int());
  this.f_skip__java_util_stream_LongStreamImpl_SkipSpliterator_ = skip;
  this.f_original__java_util_stream_LongStreamImpl_SkipSpliterator_ = original;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.f_original__java_util_stream_LongStreamImpl_SkipSpliterator_.m_getComparator__java_util_Comparator();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  while ($LongUtils.greater(this.f_skip__java_util_stream_LongStreamImpl_SkipSpliterator_, $Long.fromInt(0))) {
   if (!this.f_original__java_util_stream_LongStreamImpl_SkipSpliterator_.m_tryAdvance__java_lang_Object__boolean(LongConsumer.$adapt((/** !$Long */ ignore) =>{}))) {
    return false;
   }
   this.f_skip__java_util_stream_LongStreamImpl_SkipSpliterator_ = $LongUtils.minus(this.f_skip__java_util_stream_LongStreamImpl_SkipSpliterator_, $Long.fromInt(1));
  }
  return this.f_original__java_util_stream_LongStreamImpl_SkipSpliterator_.m_tryAdvance__java_lang_Object__boolean(action);
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 /** @nodts */
 static $clinit() {
  SkipSpliterator.$clinit = () =>{};
  SkipSpliterator.$loadModules();
  AbstractLongSpliterator.$clinit();
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
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata(SkipSpliterator, 'java.util.stream.LongStreamImpl$SkipSpliterator');

exports = SkipSpliterator;

//# sourceMappingURL=LongStreamImpl$SkipSpliterator.js.map
