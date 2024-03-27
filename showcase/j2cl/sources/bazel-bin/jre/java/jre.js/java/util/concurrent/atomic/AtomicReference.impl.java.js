goog.module('java.util.concurrent.atomic.AtomicReference$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @template V
 */
class AtomicReference extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {V} @nodts*/
  this.f_value__java_util_concurrent_atomic_AtomicReference_;
 }
 //Factory method corresponding to constructor 'AtomicReference()'.
 /** @nodts @template V @return {!AtomicReference<V>} */
 static $create__() {
  AtomicReference.$clinit();
  let $instance = new AtomicReference();
  $instance.$ctor__java_util_concurrent_atomic_AtomicReference__void();
  return $instance;
 }
 //Initialization from constructor 'AtomicReference()'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicReference__void() {
  this.$ctor__java_lang_Object__void();
 }
 //Factory method corresponding to constructor 'AtomicReference(Object)'.
 /** @nodts @template V @return {!AtomicReference<V>} */
 static $create__java_lang_Object(/** V */ initialValue) {
  AtomicReference.$clinit();
  let $instance = new AtomicReference();
  $instance.$ctor__java_util_concurrent_atomic_AtomicReference__java_lang_Object__void(initialValue);
  return $instance;
 }
 //Initialization from constructor 'AtomicReference(Object)'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicReference__java_lang_Object__void(/** V */ initialValue) {
  this.$ctor__java_lang_Object__void();
  this.f_value__java_util_concurrent_atomic_AtomicReference_ = initialValue;
 }
 /** @final @nodts @return {boolean} */
 m_compareAndSet__java_lang_Object__java_lang_Object__boolean(/** V */ expect, /** V */ update) {
  if ($Equality.$same(this.f_value__java_util_concurrent_atomic_AtomicReference_, expect)) {
   this.f_value__java_util_concurrent_atomic_AtomicReference_ = update;
   return true;
  } else {
   return false;
  }
 }
 /** @final @nodts @return {V} */
 m_get__java_lang_Object() {
  return this.f_value__java_util_concurrent_atomic_AtomicReference_;
 }
 /** @final @nodts @return {V} */
 m_getAndSet__java_lang_Object__java_lang_Object(/** V */ newValue) {
  let oldValue = this.f_value__java_util_concurrent_atomic_AtomicReference_;
  this.f_value__java_util_concurrent_atomic_AtomicReference_ = newValue;
  return oldValue;
 }
 /** @final @nodts */
 m_lazySet__java_lang_Object__void(/** V */ newValue) {
  this.m_set__java_lang_Object__void(newValue);
 }
 /** @final @nodts */
 m_set__java_lang_Object__void(/** V */ newValue) {
  this.f_value__java_util_concurrent_atomic_AtomicReference_ = newValue;
 }
 /** @final @nodts @return {boolean} */
 m_weakCompareAndSet__java_lang_Object__java_lang_Object__boolean(/** V */ expect, /** V */ update) {
  return this.m_compareAndSet__java_lang_Object__java_lang_Object__boolean(expect, update);
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_value__java_util_concurrent_atomic_AtomicReference_);
 }
 /** @nodts */
 static $clinit() {
  AtomicReference.$clinit = () =>{};
  AtomicReference.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AtomicReference;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(AtomicReference, 'java.util.concurrent.atomic.AtomicReference');

exports = AtomicReference;

//# sourceMappingURL=AtomicReference.js.map
