goog.module('java.util.concurrent.atomic.AtomicBoolean$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');

/**
 * @implements {Serializable}
 */
class AtomicBoolean extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_value__java_util_concurrent_atomic_AtomicBoolean_ = false;
 }
 //Factory method corresponding to constructor 'AtomicBoolean(boolean)'.
 /** @nodts @return {!AtomicBoolean} */
 static $create__boolean(/** boolean */ initialValue) {
  AtomicBoolean.$clinit();
  let $instance = new AtomicBoolean();
  $instance.$ctor__java_util_concurrent_atomic_AtomicBoolean__boolean__void(initialValue);
  return $instance;
 }
 //Initialization from constructor 'AtomicBoolean(boolean)'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicBoolean__boolean__void(/** boolean */ initialValue) {
  this.$ctor__java_lang_Object__void();
  this.f_value__java_util_concurrent_atomic_AtomicBoolean_ = initialValue;
 }
 //Factory method corresponding to constructor 'AtomicBoolean()'.
 /** @nodts @return {!AtomicBoolean} */
 static $create__() {
  AtomicBoolean.$clinit();
  let $instance = new AtomicBoolean();
  $instance.$ctor__java_util_concurrent_atomic_AtomicBoolean__void();
  return $instance;
 }
 //Initialization from constructor 'AtomicBoolean()'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicBoolean__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @final @nodts @return {boolean} */
 m_get__boolean() {
  return this.f_value__java_util_concurrent_atomic_AtomicBoolean_;
 }
 /** @final @nodts @return {boolean} */
 m_compareAndSet__boolean__boolean__boolean(/** boolean */ expect, /** boolean */ update) {
  if (this.m_get__boolean() == expect) {
   this.m_set__boolean__void(update);
   return true;
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_weakCompareAndSet__boolean__boolean__boolean(/** boolean */ expect, /** boolean */ update) {
  return this.m_compareAndSet__boolean__boolean__boolean(expect, update);
 }
 /** @final @nodts */
 m_set__boolean__void(/** boolean */ newValue) {
  this.f_value__java_util_concurrent_atomic_AtomicBoolean_ = newValue;
 }
 /** @final @nodts */
 m_lazySet__boolean__void(/** boolean */ newValue) {
  this.m_set__boolean__void(newValue);
 }
 /** @final @nodts @return {boolean} */
 m_getAndSet__boolean__boolean(/** boolean */ newValue) {
  let current = this.m_get__boolean();
  this.m_set__boolean__void(newValue);
  return current;
 }
 /** @override @return {?string} */
 toString() {
  return Boolean.m_toString__boolean__java_lang_String(this.m_get__boolean());
 }
 /** @nodts */
 static $clinit() {
  AtomicBoolean.$clinit = () =>{};
  AtomicBoolean.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AtomicBoolean;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
 }
}
Serializable.$markImplementor(AtomicBoolean);
$Util.$setClassMetadata(AtomicBoolean, 'java.util.concurrent.atomic.AtomicBoolean');

exports = AtomicBoolean;

//# sourceMappingURL=AtomicBoolean.js.map
