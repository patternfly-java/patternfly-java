goog.module('java.util.Spliterator.OfInt$impl');

const OfPrimitive = goog.require('java.util.Spliterator.OfPrimitive$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @extends {OfPrimitive<Integer, IntConsumer, OfInt>}
 */
class OfInt {
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ consumer) {}
 /** @abstract @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {}
 /** @nodts @return {boolean} */
 static m_tryAdvance__$default__java_util_Spliterator_OfInt__java_util_function_Consumer__boolean(/** !OfInt */ $thisArg, /** Consumer<?> */ consumer) {
  OfInt.$clinit();
  if (IntConsumer.$isInstance(consumer)) {
   return $thisArg.m_tryAdvance__java_lang_Object__boolean(/**@type {IntConsumer}*/ ($Casts.$to(consumer, IntConsumer)));
  } else {
   return $thisArg.m_tryAdvance__java_lang_Object__boolean(/**@type {IntConsumer}*/ (IntConsumer.$adapt((/** number */ arg0) =>{
    consumer.m_accept__java_lang_Object__void(Integer.m_valueOf__int__java_lang_Integer(arg0));
   })));
  }
 }
 /** @nodts */
 static m_forEachRemaining__$default__java_util_Spliterator_OfInt__java_util_function_Consumer__void(/** !OfInt */ $thisArg, /** Consumer<?> */ consumer) {
  OfInt.$clinit();
  if (IntConsumer.$isInstance(consumer)) {
   $thisArg.m_forEachRemaining__java_lang_Object__void(/**@type {IntConsumer}*/ ($Casts.$to(consumer, IntConsumer)));
  } else {
   $thisArg.m_forEachRemaining__java_lang_Object__void(/**@type {IntConsumer}*/ (IntConsumer.$adapt((/** number */ arg0) =>{
    consumer.m_accept__java_lang_Object__void(Integer.m_valueOf__int__java_lang_Integer(arg0));
   })));
  }
 }
 /** @nodts */
 static $clinit() {
  OfInt.$clinit = () =>{};
  OfInt.$loadModules();
  OfPrimitive.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  OfPrimitive.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_Spliterator_OfInt = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Spliterator_OfInt;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfInt.$markImplementor(/**@type {Function}*/ (OfInt));
$Util.$setClassMetadataForInterface(OfInt, 'java.util.Spliterator$OfInt');

exports = OfInt;

//# sourceMappingURL=Spliterator$OfInt.js.map
