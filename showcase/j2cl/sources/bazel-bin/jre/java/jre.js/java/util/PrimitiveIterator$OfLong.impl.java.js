goog.module('java.util.PrimitiveIterator.OfLong$impl');

const PrimitiveIterator = goog.require('java.util.PrimitiveIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @extends {PrimitiveIterator<Long, LongConsumer>}
 */
class OfLong {
 /** @abstract @nodts @return {!$Long} */
 m_nextLong__long() {}
 /** @abstract @nodts @return {Long} */
 m_next__java_lang_Long() {}
 /** @abstract @nodts */
 m_forEachRemaining__java_util_function_LongConsumer__void(/** LongConsumer */ consumer) {}
 /** @abstract @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {}
 /** @nodts @return {Long} */
 static m_next__$default__java_util_PrimitiveIterator_OfLong__java_lang_Long(/** !OfLong */ $thisArg) {
  OfLong.$clinit();
  return Long.m_valueOf__long__java_lang_Long($thisArg.m_nextLong__long());
 }
 /** @nodts */
 static m_forEachRemaining__$default__java_util_PrimitiveIterator_OfLong__java_util_function_LongConsumer__void(/** !OfLong */ $thisArg, /** LongConsumer */ consumer) {
  OfLong.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  while ($thisArg.m_hasNext__boolean()) {
   consumer.m_accept__long__void($thisArg.m_nextLong__long());
  }
 }
 /** @nodts */
 static m_forEachRemaining__$default__java_util_PrimitiveIterator_OfLong__java_util_function_Consumer__void(/** !OfLong */ $thisArg, /** Consumer<?> */ consumer) {
  OfLong.$clinit();
  if (LongConsumer.$isInstance(consumer)) {
   $thisArg.m_forEachRemaining__java_util_function_LongConsumer__void(/**@type {LongConsumer}*/ ($Casts.$to(consumer, LongConsumer)));
  } else {
   $thisArg.m_forEachRemaining__java_util_function_LongConsumer__void(/**@type {LongConsumer}*/ (LongConsumer.$adapt((/** !$Long */ arg0) =>{
    consumer.m_accept__java_lang_Object__void(Long.m_valueOf__long__java_lang_Long(arg0));
   })));
  }
 }
 /** @nodts */
 static $clinit() {
  OfLong.$clinit = () =>{};
  OfLong.$loadModules();
  Iterator.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PrimitiveIterator.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_PrimitiveIterator_OfLong = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_PrimitiveIterator_OfLong;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Iterator = goog.module.get('java.util.Iterator$impl');
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfLong.$markImplementor(/**@type {Function}*/ (OfLong));
$Util.$setClassMetadataForInterface(OfLong, 'java.util.PrimitiveIterator$OfLong');

exports = OfLong;

//# sourceMappingURL=PrimitiveIterator$OfLong.js.map
