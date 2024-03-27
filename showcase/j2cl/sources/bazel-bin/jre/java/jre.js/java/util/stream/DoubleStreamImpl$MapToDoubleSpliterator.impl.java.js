goog.module('java.util.stream.DoubleStreamImpl.MapToDoubleSpliterator$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleUnaryOperator = goog.forwardDeclare('java.util.function.DoubleUnaryOperator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class MapToDoubleSpliterator extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DoubleUnaryOperator} @nodts*/
  this.f_map__java_util_stream_DoubleStreamImpl_MapToDoubleSpliterator_;
  /**@type {OfDouble} @nodts*/
  this.f_original__java_util_stream_DoubleStreamImpl_MapToDoubleSpliterator_;
 }
 /** @nodts @return {!MapToDoubleSpliterator} */
 static $create__java_util_function_DoubleUnaryOperator__java_util_Spliterator_OfDouble(/** DoubleUnaryOperator */ map, /** OfDouble */ original) {
  MapToDoubleSpliterator.$clinit();
  let $instance = new MapToDoubleSpliterator();
  $instance.$ctor__java_util_stream_DoubleStreamImpl_MapToDoubleSpliterator__java_util_function_DoubleUnaryOperator__java_util_Spliterator_OfDouble__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl_MapToDoubleSpliterator__java_util_function_DoubleUnaryOperator__java_util_Spliterator_OfDouble__void(/** DoubleUnaryOperator */ map, /** OfDouble */ original) {
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_DoubleStreamImpl_MapToDoubleSpliterator_ = map;
  this.f_original__java_util_stream_DoubleStreamImpl_MapToDoubleSpliterator_ = original;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  return this.f_original__java_util_stream_DoubleStreamImpl_MapToDoubleSpliterator_.m_tryAdvance__java_lang_Object__boolean(DoubleConsumer.$adapt((/** number */ u) =>{
   action.m_accept__double__void(this.f_map__java_util_stream_DoubleStreamImpl_MapToDoubleSpliterator_.m_applyAsDouble__double__double(u));
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
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MapToDoubleSpliterator, 'java.util.stream.DoubleStreamImpl$MapToDoubleSpliterator');

exports = MapToDoubleSpliterator;

//# sourceMappingURL=DoubleStreamImpl$MapToDoubleSpliterator.js.map
