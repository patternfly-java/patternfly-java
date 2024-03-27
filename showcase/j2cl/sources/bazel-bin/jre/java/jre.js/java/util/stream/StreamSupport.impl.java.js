goog.module('java.util.stream.StreamSupport$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let DoubleStreamImpl = goog.forwardDeclare('java.util.stream.DoubleStreamImpl$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let IntStreamImpl = goog.forwardDeclare('java.util.stream.IntStreamImpl$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let LongStreamImpl = goog.forwardDeclare('java.util.stream.LongStreamImpl$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamImpl = goog.forwardDeclare('java.util.stream.StreamImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class StreamSupport extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DoubleStream} */
 static m_doubleStream__java_util_Spliterator_OfDouble__boolean__java_util_stream_DoubleStream(/** OfDouble */ spliterator, /** boolean */ parallel) {
  StreamSupport.$clinit();
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(null, spliterator);
 }
 /** @nodts @return {DoubleStream} */
 static m_doubleStream__java_util_function_Supplier__int__boolean__java_util_stream_DoubleStream(/** Supplier<?> */ supplier, /** number */ characteristics, /** boolean */ parallel) {
  StreamSupport.$clinit();
  return /**@type {Stream<OfDouble>}*/ (/**@type {Stream<Supplier<?>>}*/ (Stream.m_of__java_lang_Object__java_util_stream_Stream(supplier)).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {Supplier}*/ ($Casts.$to(arg0, Supplier));
   return /**@type {?}*/ ($Casts.$to(arg0_1.m_get__java_lang_Object(), OfDouble));
  }))).m_flatMapToDouble__java_util_function_Function__java_util_stream_DoubleStream(j_u_function_Function.$adapt((doubleSpliterator) =>{
   let doubleSpliterator_1 = /**@type {OfDouble}*/ ($Casts.$to(doubleSpliterator, OfDouble));
   return StreamSupport.m_doubleStream__java_util_Spliterator_OfDouble__boolean__java_util_stream_DoubleStream(/**@type {OfDouble}*/ (doubleSpliterator_1), parallel);
  }));
 }
 /** @nodts @return {IntStream} */
 static m_intStream__java_util_Spliterator_OfInt__boolean__java_util_stream_IntStream(/** OfInt */ spliterator, /** boolean */ parallel) {
  StreamSupport.$clinit();
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(null, spliterator);
 }
 /** @nodts @return {IntStream} */
 static m_intStream__java_util_function_Supplier__int__boolean__java_util_stream_IntStream(/** Supplier<?> */ supplier, /** number */ characteristics, /** boolean */ parallel) {
  StreamSupport.$clinit();
  return /**@type {Stream<OfInt>}*/ (/**@type {Stream<Supplier<?>>}*/ (Stream.m_of__java_lang_Object__java_util_stream_Stream(supplier)).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {Supplier}*/ ($Casts.$to(arg0, Supplier));
   return /**@type {?}*/ ($Casts.$to(arg0_1.m_get__java_lang_Object(), OfInt));
  }))).m_flatMapToInt__java_util_function_Function__java_util_stream_IntStream(j_u_function_Function.$adapt((intSpliterator) =>{
   let intSpliterator_1 = /**@type {OfInt}*/ ($Casts.$to(intSpliterator, OfInt));
   return StreamSupport.m_intStream__java_util_Spliterator_OfInt__boolean__java_util_stream_IntStream(/**@type {OfInt}*/ (intSpliterator_1), parallel);
  }));
 }
 /** @nodts @return {LongStream} */
 static m_longStream__java_util_Spliterator_OfLong__boolean__java_util_stream_LongStream(/** OfLong */ spliterator, /** boolean */ parallel) {
  StreamSupport.$clinit();
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(null, spliterator);
 }
 /** @nodts @return {LongStream} */
 static m_longStream__java_util_function_Supplier__int__boolean__java_util_stream_LongStream(/** Supplier<?> */ supplier, /** number */ characteristics, /** boolean */ parallel) {
  StreamSupport.$clinit();
  return /**@type {Stream<OfLong>}*/ (/**@type {Stream<Supplier<?>>}*/ (Stream.m_of__java_lang_Object__java_util_stream_Stream(supplier)).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {Supplier}*/ ($Casts.$to(arg0, Supplier));
   return /**@type {?}*/ ($Casts.$to(arg0_1.m_get__java_lang_Object(), OfLong));
  }))).m_flatMapToLong__java_util_function_Function__java_util_stream_LongStream(j_u_function_Function.$adapt((longSpliterator) =>{
   let longSpliterator_1 = /**@type {OfLong}*/ ($Casts.$to(longSpliterator, OfLong));
   return StreamSupport.m_longStream__java_util_Spliterator_OfLong__boolean__java_util_stream_LongStream(/**@type {OfLong}*/ (longSpliterator_1), parallel);
  }));
 }
 /** @nodts @template T @return {Stream<T>} */
 static m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(/** Spliterator<T> */ spliterator, /** boolean */ parallel) {
  StreamSupport.$clinit();
  return /**@type {!StreamImpl<T>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(null, spliterator));
 }
 /** @nodts @template T @return {Stream<T>} */
 static m_stream__java_util_function_Supplier__int__boolean__java_util_stream_Stream(/** Supplier<?> */ supplier, /** number */ characteristics, /** boolean */ parallel) {
  StreamSupport.$clinit();
  return /**@type {Stream<T>}*/ (/**@type {Stream<Spliterator>}*/ (/**@type {Stream<Supplier<?>>}*/ (Stream.m_of__java_lang_Object__java_util_stream_Stream(supplier)).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {Supplier}*/ ($Casts.$to(arg0, Supplier));
   return /**@type {?}*/ ($Casts.$to(arg0_1.m_get__java_lang_Object(), Spliterator));
  }))).m_flatMap__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((spliterator) =>{
   let spliterator_1 = /**@type {Spliterator}*/ ($Casts.$to(spliterator, Spliterator));
   return /**@type {Stream<T>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(/**@type {Spliterator<T>}*/ (spliterator_1), parallel));
  })));
 }
 /** @nodts @return {!StreamSupport} */
 static $create__() {
  let $instance = new StreamSupport();
  $instance.$ctor__java_util_stream_StreamSupport__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamSupport__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  StreamSupport.$clinit = () =>{};
  StreamSupport.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StreamSupport;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  OfDouble = goog.module.get('java.util.Spliterator.OfDouble$impl');
  OfInt = goog.module.get('java.util.Spliterator.OfInt$impl');
  OfLong = goog.module.get('java.util.Spliterator.OfLong$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  DoubleStreamImpl = goog.module.get('java.util.stream.DoubleStreamImpl$impl');
  IntStreamImpl = goog.module.get('java.util.stream.IntStreamImpl$impl');
  LongStreamImpl = goog.module.get('java.util.stream.LongStreamImpl$impl');
  Stream = goog.module.get('java.util.stream.Stream$impl');
  StreamImpl = goog.module.get('java.util.stream.StreamImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(StreamSupport, 'java.util.stream.StreamSupport');

exports = StreamSupport;

//# sourceMappingURL=StreamSupport.js.map
