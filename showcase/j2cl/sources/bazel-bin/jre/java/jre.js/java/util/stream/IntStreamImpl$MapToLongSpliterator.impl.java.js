goog.module('java.util.stream.IntStreamImpl.MapToLongSpliterator$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntToLongFunction = goog.forwardDeclare('java.util.function.IntToLongFunction$impl');
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
  /**@type {IntToLongFunction} @nodts*/
  this.f_map__java_util_stream_IntStreamImpl_MapToLongSpliterator_;
  /**@type {OfInt} @nodts*/
  this.f_original__java_util_stream_IntStreamImpl_MapToLongSpliterator_;
 }
 /** @nodts @return {!MapToLongSpliterator} */
 static $create__java_util_function_IntToLongFunction__java_util_Spliterator_OfInt(/** IntToLongFunction */ map, /** OfInt */ original) {
  MapToLongSpliterator.$clinit();
  let $instance = new MapToLongSpliterator();
  $instance.$ctor__java_util_stream_IntStreamImpl_MapToLongSpliterator__java_util_function_IntToLongFunction__java_util_Spliterator_OfInt__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl_MapToLongSpliterator__java_util_function_IntToLongFunction__java_util_Spliterator_OfInt__void(/** IntToLongFunction */ map, /** OfInt */ original) {
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_IntStreamImpl_MapToLongSpliterator_ = map;
  this.f_original__java_util_stream_IntStreamImpl_MapToLongSpliterator_ = original;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  return this.f_original__java_util_stream_IntStreamImpl_MapToLongSpliterator_.m_tryAdvance__java_lang_Object__boolean(IntConsumer.$adapt((/** number */ u) =>{
   action.m_accept__long__void(this.f_map__java_util_stream_IntStreamImpl_MapToLongSpliterator_.m_applyAsLong__int__long(u));
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
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MapToLongSpliterator, 'java.util.stream.IntStreamImpl$MapToLongSpliterator');

exports = MapToLongSpliterator;

//# sourceMappingURL=IntStreamImpl$MapToLongSpliterator.js.map
