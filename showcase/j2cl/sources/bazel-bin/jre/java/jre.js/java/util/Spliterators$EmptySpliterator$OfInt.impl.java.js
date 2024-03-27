goog.module('java.util.Spliterators.EmptySpliterator.OfInt$impl');

const Spliterator_OfInt = goog.require('java.util.Spliterator.OfInt$impl');
const EmptySpliterator = goog.require('java.util.Spliterators.EmptySpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @extends {EmptySpliterator<Integer, Spliterator_OfInt, IntConsumer>}
 * @implements {Spliterator_OfInt}
 */
class OfInt extends EmptySpliterator {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!OfInt} */
 static $create__() {
  OfInt.$clinit();
  let $instance = new OfInt();
  $instance.$ctor__java_util_Spliterators_EmptySpliterator_OfInt__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Spliterators_EmptySpliterator_OfInt__void() {
  this.$ctor__java_util_Spliterators_EmptySpliterator__void();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Spliterator_OfInt.m_forEachRemaining__$default__java_util_Spliterator_OfInt__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return Spliterator_OfInt.m_tryAdvance__$default__java_util_Spliterator_OfInt__java_util_function_Consumer__boolean(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Spliterator_OfInt} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {
  return /**@type {Spliterator_OfInt}*/ ($Casts.$to(this.m_trySplit__java_util_Spliterator(), Spliterator_OfInt));
 }
 /** @nodts */
 static $clinit() {
  OfInt.$clinit = () =>{};
  OfInt.$loadModules();
  EmptySpliterator.$clinit();
  Spliterator_OfInt.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OfInt;
 }
 
 /** @nodts */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Spliterator_OfInt.$markImplementor(OfInt);
$Util.$setClassMetadata(OfInt, 'java.util.Spliterators$EmptySpliterator$OfInt');

exports = OfInt;

//# sourceMappingURL=Spliterators$EmptySpliterator$OfInt.js.map
