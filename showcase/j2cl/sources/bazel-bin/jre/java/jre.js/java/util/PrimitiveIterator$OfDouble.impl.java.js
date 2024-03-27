goog.module('java.util.PrimitiveIterator.OfDouble$impl');

const PrimitiveIterator = goog.require('java.util.PrimitiveIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @extends {PrimitiveIterator<?number, DoubleConsumer>}
 */
class OfDouble {
 /** @abstract @nodts @return {number} */
 m_nextDouble__double() {}
 /** @abstract @nodts @return {?number} */
 m_next__java_lang_Double() {}
 /** @abstract @nodts */
 m_forEachRemaining__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ consumer) {}
 /** @abstract @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {}
 /** @nodts @return {?number} */
 static m_next__$default__java_util_PrimitiveIterator_OfDouble__java_lang_Double(/** !OfDouble */ $thisArg) {
  OfDouble.$clinit();
  return $thisArg.m_nextDouble__double();
 }
 /** @nodts */
 static m_forEachRemaining__$default__java_util_PrimitiveIterator_OfDouble__java_util_function_DoubleConsumer__void(/** !OfDouble */ $thisArg, /** DoubleConsumer */ consumer) {
  OfDouble.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  while ($thisArg.m_hasNext__boolean()) {
   consumer.m_accept__double__void($thisArg.m_nextDouble__double());
  }
 }
 /** @nodts */
 static m_forEachRemaining__$default__java_util_PrimitiveIterator_OfDouble__java_util_function_Consumer__void(/** !OfDouble */ $thisArg, /** Consumer<?> */ consumer) {
  OfDouble.$clinit();
  if (DoubleConsumer.$isInstance(consumer)) {
   $thisArg.m_forEachRemaining__java_util_function_DoubleConsumer__void(/**@type {DoubleConsumer}*/ ($Casts.$to(consumer, DoubleConsumer)));
  } else {
   $thisArg.m_forEachRemaining__java_util_function_DoubleConsumer__void(/**@type {DoubleConsumer}*/ (DoubleConsumer.$adapt((/** number */ arg0) =>{
    consumer.m_accept__java_lang_Object__void(arg0);
   })));
  }
 }
 /** @nodts */
 static $clinit() {
  OfDouble.$clinit = () =>{};
  OfDouble.$loadModules();
  Iterator.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PrimitiveIterator.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_PrimitiveIterator_OfDouble = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_PrimitiveIterator_OfDouble;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterator = goog.module.get('java.util.Iterator$impl');
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfDouble.$markImplementor(/**@type {Function}*/ (OfDouble));
$Util.$setClassMetadataForInterface(OfDouble, 'java.util.PrimitiveIterator$OfDouble');

exports = OfDouble;

//# sourceMappingURL=PrimitiveIterator$OfDouble.js.map
