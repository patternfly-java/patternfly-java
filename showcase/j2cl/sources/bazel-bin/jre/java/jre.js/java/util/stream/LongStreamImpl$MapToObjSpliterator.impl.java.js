goog.module('java.util.stream.LongStreamImpl.MapToObjSpliterator$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongFunction = goog.forwardDeclare('java.util.function.LongFunction$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @final
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class MapToObjSpliterator extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LongFunction<?>} @nodts*/
  this.f_map__java_util_stream_LongStreamImpl_MapToObjSpliterator_;
  /**@type {OfLong} @nodts*/
  this.f_original__java_util_stream_LongStreamImpl_MapToObjSpliterator_;
 }
 /** @nodts @template T @return {!MapToObjSpliterator<T>} */
 static $create__java_util_function_LongFunction__java_util_Spliterator_OfLong(/** LongFunction<?> */ map, /** OfLong */ original) {
  MapToObjSpliterator.$clinit();
  let $instance = new MapToObjSpliterator();
  $instance.$ctor__java_util_stream_LongStreamImpl_MapToObjSpliterator__java_util_function_LongFunction__java_util_Spliterator_OfLong__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStreamImpl_MapToObjSpliterator__java_util_function_LongFunction__java_util_Spliterator_OfLong__void(/** LongFunction<?> */ map, /** OfLong */ original) {
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_LongStreamImpl_MapToObjSpliterator_ = map;
  this.f_original__java_util_stream_LongStreamImpl_MapToObjSpliterator_ = original;
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  return this.f_original__java_util_stream_LongStreamImpl_MapToObjSpliterator_.m_tryAdvance__java_lang_Object__boolean(LongConsumer.$adapt((/** !$Long */ u) =>{
   action.m_accept__java_lang_Object__void(this.f_map__java_util_stream_LongStreamImpl_MapToObjSpliterator_.m_apply__long__java_lang_Object(u));
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
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
$Util.$setClassMetadata(MapToObjSpliterator, 'java.util.stream.LongStreamImpl$MapToObjSpliterator');

exports = MapToObjSpliterator;

//# sourceMappingURL=LongStreamImpl$MapToObjSpliterator.js.map
