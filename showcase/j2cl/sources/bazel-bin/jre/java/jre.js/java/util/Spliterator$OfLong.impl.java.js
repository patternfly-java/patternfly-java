goog.module('java.util.Spliterator.OfLong$impl');

const OfPrimitive = goog.require('java.util.Spliterator.OfPrimitive$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @extends {OfPrimitive<Long, LongConsumer, OfLong>}
 */
class OfLong {
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ consumer) {}
 /** @abstract @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {}
 /** @nodts @return {boolean} */
 static m_tryAdvance__$default__java_util_Spliterator_OfLong__java_util_function_Consumer__boolean(/** !OfLong */ $thisArg, /** Consumer<?> */ consumer) {
  OfLong.$clinit();
  if (LongConsumer.$isInstance(consumer)) {
   return $thisArg.m_tryAdvance__java_lang_Object__boolean(/**@type {LongConsumer}*/ ($Casts.$to(consumer, LongConsumer)));
  } else {
   return $thisArg.m_tryAdvance__java_lang_Object__boolean(/**@type {LongConsumer}*/ (LongConsumer.$adapt((/** !$Long */ arg0) =>{
    consumer.m_accept__java_lang_Object__void(Long.m_valueOf__long__java_lang_Long(arg0));
   })));
  }
 }
 /** @nodts */
 static m_forEachRemaining__$default__java_util_Spliterator_OfLong__java_util_function_Consumer__void(/** !OfLong */ $thisArg, /** Consumer<?> */ consumer) {
  OfLong.$clinit();
  if (LongConsumer.$isInstance(consumer)) {
   $thisArg.m_forEachRemaining__java_lang_Object__void(/**@type {LongConsumer}*/ ($Casts.$to(consumer, LongConsumer)));
  } else {
   $thisArg.m_forEachRemaining__java_lang_Object__void(/**@type {LongConsumer}*/ (LongConsumer.$adapt((/** !$Long */ arg0) =>{
    consumer.m_accept__java_lang_Object__void(Long.m_valueOf__long__java_lang_Long(arg0));
   })));
  }
 }
 /** @nodts */
 static $clinit() {
  OfLong.$clinit = () =>{};
  OfLong.$loadModules();
  OfPrimitive.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  OfPrimitive.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_Spliterator_OfLong = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Spliterator_OfLong;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfLong.$markImplementor(/**@type {Function}*/ (OfLong));
$Util.$setClassMetadataForInterface(OfLong, 'java.util.Spliterator$OfLong');

exports = OfLong;

//# sourceMappingURL=Spliterator$OfLong.js.map
