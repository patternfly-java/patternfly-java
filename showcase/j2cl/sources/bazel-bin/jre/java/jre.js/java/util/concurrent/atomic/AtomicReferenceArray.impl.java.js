goog.module('java.util.concurrent.atomic.AtomicReferenceArray$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template V
 */
class AtomicReferenceArray extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<V>} @nodts*/
  this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_;
 }
 //Factory method corresponding to constructor 'AtomicReferenceArray(Object[])'.
 /** @nodts @template V @return {!AtomicReferenceArray<V>} */
 static $create__arrayOf_java_lang_Object(/** Array<V> */ array) {
  AtomicReferenceArray.$clinit();
  let $instance = new AtomicReferenceArray();
  $instance.$ctor__java_util_concurrent_atomic_AtomicReferenceArray__arrayOf_java_lang_Object__void(array);
  return $instance;
 }
 //Initialization from constructor 'AtomicReferenceArray(Object[])'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicReferenceArray__arrayOf_java_lang_Object__void(/** Array<V> */ array) {
  this.$ctor__java_lang_Object__void();
  this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_ = /**@type {!ArrayList<V>}*/ (ArrayList.$create__java_util_Collection(/**@type {List<V>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(array))));
 }
 //Factory method corresponding to constructor 'AtomicReferenceArray(int)'.
 /** @nodts @template V @return {!AtomicReferenceArray<V>} */
 static $create__int(/** number */ length) {
  AtomicReferenceArray.$clinit();
  let $instance = new AtomicReferenceArray();
  $instance.$ctor__java_util_concurrent_atomic_AtomicReferenceArray__int__void(length);
  return $instance;
 }
 //Initialization from constructor 'AtomicReferenceArray(int)'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicReferenceArray__int__void(/** number */ length) {
  this.$ctor__java_lang_Object__void();
  this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_ = /**@type {!ArrayList<V>}*/ (ArrayList.$create__java_util_Collection(/**@type {List<V>}*/ (Collections.m_nCopies__int__java_lang_Object__java_util_List(length, null))));
 }
 /** @nodts @return {boolean} */
 m_compareAndSet__int__java_lang_Object__java_lang_Object__boolean(/** number */ i, /** V */ expect, /** V */ update) {
  if ($Equality.$same(this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_.getAtIndex(i), expect)) {
   this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_.setAtIndex(i, update);
   return true;
  }
  return false;
 }
 /** @nodts @return {V} */
 m_get__int__java_lang_Object(/** number */ i) {
  return this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_.getAtIndex(i);
 }
 /** @nodts @return {V} */
 m_getAndSet__int__java_lang_Object__java_lang_Object(/** number */ i, /** V */ x) {
  return this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_.setAtIndex(i, x);
 }
 /** @nodts */
 m_lazySet__int__java_lang_Object__void(/** number */ i, /** V */ x) {
  this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_.setAtIndex(i, x);
 }
 /** @nodts @return {number} */
 m_length__int() {
  return this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_.size();
 }
 /** @nodts */
 m_set__int__java_lang_Object__void(/** number */ i, /** V */ x) {
  this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_.setAtIndex(i, x);
 }
 /** @nodts @return {boolean} */
 m_weakCompareAndSet__int__java_lang_Object__java_lang_Object__boolean(/** number */ i, /** V */ expect, /** V */ update) {
  return this.m_compareAndSet__int__java_lang_Object__java_lang_Object__boolean(i, expect, update);
 }
 /** @override @return {?string} */
 toString() {
  return $Objects.m_toString__java_lang_Object__java_lang_String(this.f_values__java_util_concurrent_atomic_AtomicReferenceArray_);
 }
 /** @nodts */
 static $clinit() {
  AtomicReferenceArray.$clinit = () =>{};
  AtomicReferenceArray.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AtomicReferenceArray;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(AtomicReferenceArray, 'java.util.concurrent.atomic.AtomicReferenceArray');

exports = AtomicReferenceArray;

//# sourceMappingURL=AtomicReferenceArray.js.map
