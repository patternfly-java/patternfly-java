goog.module('java.util.Spliterators.AbstractDoubleSpliterator$impl');

const OfDouble = goog.require('java.util.Spliterator.OfDouble$impl');
const BaseSpliterator = goog.require('java.util.Spliterators.BaseSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let OfPrimitive = goog.forwardDeclare('java.util.Spliterator.OfPrimitive$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @extends {BaseSpliterator<?number, OfDouble>}
 * @implements {OfDouble}
 */
class AbstractDoubleSpliterator extends BaseSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(/** !$Long */ size, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_BaseSpliterator__long__int__void(size, characteristics);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  OfDouble.m_forEachRemaining__$default__java_util_Spliterator_OfDouble__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return OfDouble.m_tryAdvance__$default__java_util_Spliterator_OfDouble__java_util_function_Consumer__boolean(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_forEachRemaining__java_lang_Object__void(/** DoubleConsumer */ arg0) {
  OfPrimitive.m_forEachRemaining__$default__java_util_Spliterator_OfPrimitive__java_lang_Object__void(this, /**@type {DoubleConsumer}*/ ($Casts.$to(arg0, DoubleConsumer)));
 }
 //Bridge method.
 /** @final @override @nodts @return {OfDouble} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {
  return /**@type {OfDouble}*/ ($Casts.$to(this.m_trySplit__java_util_Spliterator(), OfDouble));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_forEachRemaining__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ arg0) {
  OfPrimitive.m_forEachRemaining__$default__java_util_Spliterator_OfPrimitive__java_lang_Object__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  AbstractDoubleSpliterator.$clinit = () =>{};
  AbstractDoubleSpliterator.$loadModules();
  BaseSpliterator.$clinit();
  OfDouble.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDoubleSpliterator;
 }
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {}
 
 /** @nodts */
 static $loadModules() {
  OfPrimitive = goog.module.get('java.util.Spliterator.OfPrimitive$impl');
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfDouble.$markImplementor(AbstractDoubleSpliterator);
$Util.$setClassMetadata(AbstractDoubleSpliterator, 'java.util.Spliterators$AbstractDoubleSpliterator');

exports = AbstractDoubleSpliterator;

//# sourceMappingURL=Spliterators$AbstractDoubleSpliterator.js.map
