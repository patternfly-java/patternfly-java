goog.module('java.util.stream.IntStreamImpl.MapToIntSpliterator$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntUnaryOperator = goog.forwardDeclare('java.util.function.IntUnaryOperator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class MapToIntSpliterator extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {IntUnaryOperator} @nodts*/
  this.f_map__java_util_stream_IntStreamImpl_MapToIntSpliterator_;
  /**@type {OfInt} @nodts*/
  this.f_original__java_util_stream_IntStreamImpl_MapToIntSpliterator_;
 }
 /** @nodts @return {!MapToIntSpliterator} */
 static $create__java_util_function_IntUnaryOperator__java_util_Spliterator_OfInt(/** IntUnaryOperator */ map, /** OfInt */ original) {
  MapToIntSpliterator.$clinit();
  let $instance = new MapToIntSpliterator();
  $instance.$ctor__java_util_stream_IntStreamImpl_MapToIntSpliterator__java_util_function_IntUnaryOperator__java_util_Spliterator_OfInt__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl_MapToIntSpliterator__java_util_function_IntUnaryOperator__java_util_Spliterator_OfInt__void(/** IntUnaryOperator */ map, /** OfInt */ original) {
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_IntStreamImpl_MapToIntSpliterator_ = map;
  this.f_original__java_util_stream_IntStreamImpl_MapToIntSpliterator_ = original;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  return this.f_original__java_util_stream_IntStreamImpl_MapToIntSpliterator_.m_tryAdvance__java_lang_Object__boolean(IntConsumer.$adapt((/** number */ u) =>{
   action.m_accept__int__void(this.f_map__java_util_stream_IntStreamImpl_MapToIntSpliterator_.m_applyAsInt__int__int(u));
  }));
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 /** @nodts */
 static $clinit() {
  MapToIntSpliterator.$clinit = () =>{};
  MapToIntSpliterator.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MapToIntSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MapToIntSpliterator, 'java.util.stream.IntStreamImpl$MapToIntSpliterator');

exports = MapToIntSpliterator;

//# sourceMappingURL=IntStreamImpl$MapToIntSpliterator.js.map
