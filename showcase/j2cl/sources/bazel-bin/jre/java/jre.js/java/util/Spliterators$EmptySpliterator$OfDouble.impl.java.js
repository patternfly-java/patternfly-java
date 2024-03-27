goog.module('java.util.Spliterators.EmptySpliterator.OfDouble$impl');

const Spliterator_OfDouble = goog.require('java.util.Spliterator.OfDouble$impl');
const EmptySpliterator = goog.require('java.util.Spliterators.EmptySpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @extends {EmptySpliterator<?number, Spliterator_OfDouble, DoubleConsumer>}
 * @implements {Spliterator_OfDouble}
 */
class OfDouble extends EmptySpliterator {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!OfDouble} */
 static $create__() {
  OfDouble.$clinit();
  let $instance = new OfDouble();
  $instance.$ctor__java_util_Spliterators_EmptySpliterator_OfDouble__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Spliterators_EmptySpliterator_OfDouble__void() {
  this.$ctor__java_util_Spliterators_EmptySpliterator__void();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Spliterator_OfDouble.m_forEachRemaining__$default__java_util_Spliterator_OfDouble__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return Spliterator_OfDouble.m_tryAdvance__$default__java_util_Spliterator_OfDouble__java_util_function_Consumer__boolean(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Spliterator_OfDouble} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {
  return /**@type {Spliterator_OfDouble}*/ ($Casts.$to(this.m_trySplit__java_util_Spliterator(), Spliterator_OfDouble));
 }
 /** @nodts */
 static $clinit() {
  OfDouble.$clinit = () =>{};
  OfDouble.$loadModules();
  EmptySpliterator.$clinit();
  Spliterator_OfDouble.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OfDouble;
 }
 
 /** @nodts */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Spliterator_OfDouble.$markImplementor(OfDouble);
$Util.$setClassMetadata(OfDouble, 'java.util.Spliterators$EmptySpliterator$OfDouble');

exports = OfDouble;

//# sourceMappingURL=Spliterators$EmptySpliterator$OfDouble.js.map
