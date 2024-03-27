goog.module('java.util.stream.DoubleStreamImpl.MapToObjSpliterator$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleFunction = goog.forwardDeclare('java.util.function.DoubleFunction$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @final
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class MapToObjSpliterator extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DoubleFunction<?>} @nodts*/
  this.f_map__java_util_stream_DoubleStreamImpl_MapToObjSpliterator_;
  /**@type {OfDouble} @nodts*/
  this.f_original__java_util_stream_DoubleStreamImpl_MapToObjSpliterator_;
 }
 /** @nodts @template T @return {!MapToObjSpliterator<T>} */
 static $create__java_util_function_DoubleFunction__java_util_Spliterator_OfDouble(/** DoubleFunction<?> */ map, /** OfDouble */ original) {
  MapToObjSpliterator.$clinit();
  let $instance = new MapToObjSpliterator();
  $instance.$ctor__java_util_stream_DoubleStreamImpl_MapToObjSpliterator__java_util_function_DoubleFunction__java_util_Spliterator_OfDouble__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl_MapToObjSpliterator__java_util_function_DoubleFunction__java_util_Spliterator_OfDouble__void(/** DoubleFunction<?> */ map, /** OfDouble */ original) {
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_DoubleStreamImpl_MapToObjSpliterator_ = map;
  this.f_original__java_util_stream_DoubleStreamImpl_MapToObjSpliterator_ = original;
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  return this.f_original__java_util_stream_DoubleStreamImpl_MapToObjSpliterator_.m_tryAdvance__java_lang_Object__boolean(DoubleConsumer.$adapt((/** number */ u) =>{
   action.m_accept__java_lang_Object__void(this.f_map__java_util_stream_DoubleStreamImpl_MapToObjSpliterator_.m_apply__double__java_lang_Object(u));
  }));
 }
 /** @nodts */
 static $clinit() {
  MapToObjSpliterator.$clinit = () =>{};
  MapToObjSpliterator.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MapToObjSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
$Util.$setClassMetadata(MapToObjSpliterator, 'java.util.stream.DoubleStreamImpl$MapToObjSpliterator');

exports = MapToObjSpliterator;

//# sourceMappingURL=DoubleStreamImpl$MapToObjSpliterator.js.map
