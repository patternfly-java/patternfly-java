goog.module('java.util.stream.StreamImpl.MapToObjSpliterator$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @final
 * @template U, T
 * @extends {AbstractSpliterator<T>}
 */
class MapToObjSpliterator extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {j_u_function_Function<?, ?>} @nodts*/
  this.f_map__java_util_stream_StreamImpl_MapToObjSpliterator_;
  /**@type {Spliterator<U>} @nodts*/
  this.f_original__java_util_stream_StreamImpl_MapToObjSpliterator_;
 }
 /** @nodts @template U, T @return {!MapToObjSpliterator<U, T>} */
 static $create__java_util_function_Function__java_util_Spliterator(/** j_u_function_Function<?, ?> */ map, /** Spliterator<U> */ original) {
  MapToObjSpliterator.$clinit();
  let $instance = new MapToObjSpliterator();
  $instance.$ctor__java_util_stream_StreamImpl_MapToObjSpliterator__java_util_function_Function__java_util_Spliterator__void(map, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_MapToObjSpliterator__java_util_function_Function__java_util_Spliterator__void(/** j_u_function_Function<?, ?> */ map, /** Spliterator<U> */ original) {
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  this.f_map__java_util_stream_StreamImpl_MapToObjSpliterator_ = map;
  this.f_original__java_util_stream_StreamImpl_MapToObjSpliterator_ = original;
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  return this.f_original__java_util_stream_StreamImpl_MapToObjSpliterator_.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((/** ? */ u) =>{
   action.m_accept__java_lang_Object__void(this.f_map__java_util_stream_StreamImpl_MapToObjSpliterator_.m_apply__java_lang_Object__java_lang_Object(u));
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
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
$Util.$setClassMetadata(MapToObjSpliterator, 'java.util.stream.StreamImpl$MapToObjSpliterator');

exports = MapToObjSpliterator;

//# sourceMappingURL=StreamImpl$MapToObjSpliterator.js.map
