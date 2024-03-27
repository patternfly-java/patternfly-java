goog.module('java.util.stream.LongStreamImpl.MapToLongSpliterator$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongUnaryOperator = goog.forwardDeclare('java.util.function.LongUnaryOperator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class MapToLongSpliterator extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LongUnaryOperator} @nodts*/
  this.f_map__java_util_stream_LongStreamImpl_MapToLongSpliterator_;
  /**@type {OfLong} @nodts*/
  this.f_original__java_util_stream_LongStreamImpl_MapToLongSpliterator_;
 }
 /** @nodts @return {!MapToLongSpliterator} */
 static $create__java_util_function_LongUnaryOperator__java_util_Spliterator_OfLong(/** LongUnaryOperator */ map, /** OfLong */ original) {
  MapToLongSpliterator.$clinit();
  let $instance = new MapToLongSpliterator();
  $instance.$ctor__java_util_stream_LongStreamImpl_MapToLongSpliterator__java_util_function_LongUnaryOperator__java_util_Spliterator_OfLong__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStreamImpl_MapToLongSpliterator__java_util_function_LongUnaryOperator__java_util_Spliterator_OfLong__void(/** LongUnaryOperator */ map, /** OfLong */ original) {
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_LongStreamImpl_MapToLongSpliterator_ = map;
  this.f_original__java_util_stream_LongStreamImpl_MapToLongSpliterator_ = original;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  return this.f_original__java_util_stream_LongStreamImpl_MapToLongSpliterator_.m_tryAdvance__java_lang_Object__boolean(LongConsumer.$adapt((/** !$Long */ u) =>{
   action.m_accept__long__void(this.f_map__java_util_stream_LongStreamImpl_MapToLongSpliterator_.m_applyAsLong__long__long(u));
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
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MapToLongSpliterator, 'java.util.stream.LongStreamImpl$MapToLongSpliterator');

exports = MapToLongSpliterator;

//# sourceMappingURL=LongStreamImpl$MapToLongSpliterator.js.map
