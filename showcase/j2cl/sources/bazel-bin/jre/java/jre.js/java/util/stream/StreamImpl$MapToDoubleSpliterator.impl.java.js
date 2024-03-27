goog.module('java.util.stream.StreamImpl.MapToDoubleSpliterator$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let ToDoubleFunction = goog.forwardDeclare('java.util.function.ToDoubleFunction$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @template T
 */
class MapToDoubleSpliterator extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ToDoubleFunction<?>} @nodts*/
  this.f_map__java_util_stream_StreamImpl_MapToDoubleSpliterator_;
  /**@type {Spliterator<T>} @nodts*/
  this.f_original__java_util_stream_StreamImpl_MapToDoubleSpliterator_;
 }
 /** @nodts @template T @return {!MapToDoubleSpliterator<T>} */
 static $create__java_util_function_ToDoubleFunction__java_util_Spliterator(/** ToDoubleFunction<?> */ map, /** Spliterator<T> */ original) {
  MapToDoubleSpliterator.$clinit();
  let $instance = new MapToDoubleSpliterator();
  $instance.$ctor__java_util_stream_StreamImpl_MapToDoubleSpliterator__java_util_function_ToDoubleFunction__java_util_Spliterator__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_MapToDoubleSpliterator__java_util_function_ToDoubleFunction__java_util_Spliterator__void(/** ToDoubleFunction<?> */ map, /** Spliterator<T> */ original) {
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_StreamImpl_MapToDoubleSpliterator_ = map;
  this.f_original__java_util_stream_StreamImpl_MapToDoubleSpliterator_ = original;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  return this.f_original__java_util_stream_StreamImpl_MapToDoubleSpliterator_.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((/** ? */ u) =>{
   action.m_accept__double__void(this.f_map__java_util_stream_StreamImpl_MapToDoubleSpliterator_.m_applyAsDouble__java_lang_Object__double(u));
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
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MapToDoubleSpliterator, 'java.util.stream.StreamImpl$MapToDoubleSpliterator');

exports = MapToDoubleSpliterator;

//# sourceMappingURL=StreamImpl$MapToDoubleSpliterator.js.map
