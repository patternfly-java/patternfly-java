goog.module('java.util.Spliterator.OfDouble$impl');

const OfPrimitive = goog.require('java.util.Spliterator.OfPrimitive$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @extends {OfPrimitive<?number, DoubleConsumer, OfDouble>}
 */
class OfDouble {
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ consumer) {}
 /** @abstract @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {}
 /** @nodts @return {boolean} */
 static m_tryAdvance__$default__java_util_Spliterator_OfDouble__java_util_function_Consumer__boolean(/** !OfDouble */ $thisArg, /** Consumer<?> */ consumer) {
  OfDouble.$clinit();
  if (DoubleConsumer.$isInstance(consumer)) {
   return $thisArg.m_tryAdvance__java_lang_Object__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(consumer, DoubleConsumer)));
  } else {
   return $thisArg.m_tryAdvance__java_lang_Object__boolean(/**@type {DoubleConsumer}*/ (DoubleConsumer.$adapt((/** number */ arg0) =>{
    consumer.m_accept__java_lang_Object__void(arg0);
   })));
  }
 }
 /** @nodts */
 static m_forEachRemaining__$default__java_util_Spliterator_OfDouble__java_util_function_Consumer__void(/** !OfDouble */ $thisArg, /** Consumer<?> */ consumer) {
  OfDouble.$clinit();
  if (DoubleConsumer.$isInstance(consumer)) {
   $thisArg.m_forEachRemaining__java_lang_Object__void(/**@type {DoubleConsumer}*/ ($Casts.$to(consumer, DoubleConsumer)));
  } else {
   $thisArg.m_forEachRemaining__java_lang_Object__void(/**@type {DoubleConsumer}*/ (DoubleConsumer.$adapt((/** number */ arg0) =>{
    consumer.m_accept__java_lang_Object__void(arg0);
   })));
  }
 }
 /** @nodts */
 static $clinit() {
  OfDouble.$clinit = () =>{};
  OfDouble.$loadModules();
  OfPrimitive.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  OfPrimitive.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_Spliterator_OfDouble = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Spliterator_OfDouble;
 }
 
 /** @nodts */
 static $loadModules() {
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfDouble.$markImplementor(/**@type {Function}*/ (OfDouble));
$Util.$setClassMetadataForInterface(OfDouble, 'java.util.Spliterator$OfDouble');

exports = OfDouble;

//# sourceMappingURL=Spliterator$OfDouble.js.map
