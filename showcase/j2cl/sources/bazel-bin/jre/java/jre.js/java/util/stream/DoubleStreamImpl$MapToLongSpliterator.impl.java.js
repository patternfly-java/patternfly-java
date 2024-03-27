goog.module('java.util.stream.DoubleStreamImpl.MapToLongSpliterator$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleToLongFunction = goog.forwardDeclare('java.util.function.DoubleToLongFunction$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class MapToLongSpliterator extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DoubleToLongFunction} @nodts*/
  this.f_map__java_util_stream_DoubleStreamImpl_MapToLongSpliterator_;
  /**@type {OfDouble} @nodts*/
  this.f_original__java_util_stream_DoubleStreamImpl_MapToLongSpliterator_;
 }
 /** @nodts @return {!MapToLongSpliterator} */
 static $create__java_util_function_DoubleToLongFunction__java_util_Spliterator_OfDouble(/** DoubleToLongFunction */ map, /** OfDouble */ original) {
  MapToLongSpliterator.$clinit();
  let $instance = new MapToLongSpliterator();
  $instance.$ctor__java_util_stream_DoubleStreamImpl_MapToLongSpliterator__java_util_function_DoubleToLongFunction__java_util_Spliterator_OfDouble__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl_MapToLongSpliterator__java_util_function_DoubleToLongFunction__java_util_Spliterator_OfDouble__void(/** DoubleToLongFunction */ map, /** OfDouble */ original) {
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_DoubleStreamImpl_MapToLongSpliterator_ = map;
  this.f_original__java_util_stream_DoubleStreamImpl_MapToLongSpliterator_ = original;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  return this.f_original__java_util_stream_DoubleStreamImpl_MapToLongSpliterator_.m_tryAdvance__java_lang_Object__boolean(DoubleConsumer.$adapt((/** number */ u) =>{
   action.m_accept__long__void(this.f_map__java_util_stream_DoubleStreamImpl_MapToLongSpliterator_.m_applyAsLong__double__long(u));
  }));
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 /** @nodts */
 static $clinit() {
  MapToLongSpliterator.$clinit = () =>{};
  MapToLongSpliterator.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MapToLongSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MapToLongSpliterator, 'java.util.stream.DoubleStreamImpl$MapToLongSpliterator');

exports = MapToLongSpliterator;

//# sourceMappingURL=DoubleStreamImpl$MapToLongSpliterator.js.map
