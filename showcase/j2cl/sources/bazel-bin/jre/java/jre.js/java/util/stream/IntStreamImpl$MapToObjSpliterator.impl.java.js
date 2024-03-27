goog.module('java.util.stream.IntStreamImpl.MapToObjSpliterator$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntFunction = goog.forwardDeclare('java.util.function.IntFunction$impl');
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
  /**@type {IntFunction<?>} @nodts*/
  this.f_map__java_util_stream_IntStreamImpl_MapToObjSpliterator_;
  /**@type {OfInt} @nodts*/
  this.f_original__java_util_stream_IntStreamImpl_MapToObjSpliterator_;
 }
 /** @nodts @template T @return {!MapToObjSpliterator<T>} */
 static $create__java_util_function_IntFunction__java_util_Spliterator_OfInt(/** IntFunction<?> */ map, /** OfInt */ original) {
  MapToObjSpliterator.$clinit();
  let $instance = new MapToObjSpliterator();
  $instance.$ctor__java_util_stream_IntStreamImpl_MapToObjSpliterator__java_util_function_IntFunction__java_util_Spliterator_OfInt__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl_MapToObjSpliterator__java_util_function_IntFunction__java_util_Spliterator_OfInt__void(/** IntFunction<?> */ map, /** OfInt */ original) {
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_IntStreamImpl_MapToObjSpliterator_ = map;
  this.f_original__java_util_stream_IntStreamImpl_MapToObjSpliterator_ = original;
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  return this.f_original__java_util_stream_IntStreamImpl_MapToObjSpliterator_.m_tryAdvance__java_lang_Object__boolean(IntConsumer.$adapt((/** number */ u) =>{
   action.m_accept__java_lang_Object__void(this.f_map__java_util_stream_IntStreamImpl_MapToObjSpliterator_.m_apply__int__java_lang_Object(u));
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
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
$Util.$setClassMetadata(MapToObjSpliterator, 'java.util.stream.IntStreamImpl$MapToObjSpliterator');

exports = MapToObjSpliterator;

//# sourceMappingURL=IntStreamImpl$MapToObjSpliterator.js.map
