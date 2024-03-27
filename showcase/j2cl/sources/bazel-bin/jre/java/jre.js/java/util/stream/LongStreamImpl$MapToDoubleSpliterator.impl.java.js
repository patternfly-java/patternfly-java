goog.module('java.util.stream.LongStreamImpl.MapToDoubleSpliterator$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongToDoubleFunction = goog.forwardDeclare('java.util.function.LongToDoubleFunction$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class MapToDoubleSpliterator extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LongToDoubleFunction} @nodts*/
  this.f_map__java_util_stream_LongStreamImpl_MapToDoubleSpliterator_;
  /**@type {OfLong} @nodts*/
  this.f_original__java_util_stream_LongStreamImpl_MapToDoubleSpliterator_;
 }
 /** @nodts @return {!MapToDoubleSpliterator} */
 static $create__java_util_function_LongToDoubleFunction__java_util_Spliterator_OfLong(/** LongToDoubleFunction */ map, /** OfLong */ original) {
  MapToDoubleSpliterator.$clinit();
  let $instance = new MapToDoubleSpliterator();
  $instance.$ctor__java_util_stream_LongStreamImpl_MapToDoubleSpliterator__java_util_function_LongToDoubleFunction__java_util_Spliterator_OfLong__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStreamImpl_MapToDoubleSpliterator__java_util_function_LongToDoubleFunction__java_util_Spliterator_OfLong__void(/** LongToDoubleFunction */ map, /** OfLong */ original) {
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_LongStreamImpl_MapToDoubleSpliterator_ = map;
  this.f_original__java_util_stream_LongStreamImpl_MapToDoubleSpliterator_ = original;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  return this.f_original__java_util_stream_LongStreamImpl_MapToDoubleSpliterator_.m_tryAdvance__java_lang_Object__boolean(LongConsumer.$adapt((/** !$Long */ u) =>{
   action.m_accept__double__void(this.f_map__java_util_stream_LongStreamImpl_MapToDoubleSpliterator_.m_applyAsDouble__long__double(u));
  }));
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_DoubleConsumer__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, DoubleConsumer)));
 }
 /** @nodts */
 static $clinit() {
  MapToDoubleSpliterator.$clinit = () =>{};
  MapToDoubleSpliterator.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MapToDoubleSpliterator;
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
$Util.$setClassMetadata(MapToDoubleSpliterator, 'java.util.stream.LongStreamImpl$MapToDoubleSpliterator');

exports = MapToDoubleSpliterator;

//# sourceMappingURL=LongStreamImpl$MapToDoubleSpliterator.js.map
