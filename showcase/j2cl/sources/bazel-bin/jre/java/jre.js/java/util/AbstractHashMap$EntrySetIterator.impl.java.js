goog.module('java.util.AbstractHashMap.EntrySetIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractHashMap = goog.forwardDeclare('java.util.AbstractHashMap$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @template K, V
 * @implements {Iterator<Entry<K, V>>}
 */
class EntrySetIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {AbstractHashMap<K, V>} @nodts*/
  this.$outer_this__java_util_AbstractHashMap_EntrySetIterator;
  /**@type {Iterator<Entry<K, V>>} @nodts*/
  this.f_stringMapEntries__java_util_AbstractHashMap_EntrySetIterator_;
  /**@type {Iterator<Entry<K, V>>} @nodts*/
  this.f_current__java_util_AbstractHashMap_EntrySetIterator_;
  /**@type {Iterator<Entry<K, V>>} @nodts*/
  this.f_last__java_util_AbstractHashMap_EntrySetIterator_;
  /**@type {boolean} @nodts*/
  this.f_hasNext__java_util_AbstractHashMap_EntrySetIterator_ = false;
  /**@type {number} @nodts*/
  this.f_lastModCount__java_util_AbstractHashMap_EntrySetIterator_ = 0;
 }
 /** @nodts @template K, V @return {!EntrySetIterator<K, V>} */
 static $create__java_util_AbstractHashMap(/** AbstractHashMap<K, V> */ $outer_this) {
  EntrySetIterator.$clinit();
  let $instance = new EntrySetIterator();
  $instance.$ctor__java_util_AbstractHashMap_EntrySetIterator__java_util_AbstractHashMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_AbstractHashMap_EntrySetIterator__java_util_AbstractHashMap__void(/** AbstractHashMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_AbstractHashMap_EntrySetIterator = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_AbstractHashMap_EntrySetIterator();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_hasNext__java_util_AbstractHashMap_EntrySetIterator_;
 }
 /** @nodts @return {boolean} */
 m_computeHasNext__boolean_$p_java_util_AbstractHashMap_EntrySetIterator() {
  if (this.f_current__java_util_AbstractHashMap_EntrySetIterator_.m_hasNext__boolean()) {
   return true;
  }
  if (!$Equality.$same(this.f_current__java_util_AbstractHashMap_EntrySetIterator_, this.f_stringMapEntries__java_util_AbstractHashMap_EntrySetIterator_)) {
   return false;
  }
  this.f_current__java_util_AbstractHashMap_EntrySetIterator_ = this.$outer_this__java_util_AbstractHashMap_EntrySetIterator.f_hashCodeMap__java_util_AbstractHashMap_.m_iterator__java_util_Iterator();
  return this.f_current__java_util_AbstractHashMap_EntrySetIterator_.m_hasNext__boolean();
 }
 /** @nodts @return {Entry<K, V>} */
 m_next__java_util_Map_Entry() {
  InternalPreconditions.m_checkConcurrentModification__int__int__void(this.$outer_this__java_util_AbstractHashMap_EntrySetIterator.f_modCount__java_util_AbstractHashMap, this.f_lastModCount__java_util_AbstractHashMap_EntrySetIterator_);
  InternalPreconditions.m_checkElement__boolean__void(this.m_hasNext__boolean());
  this.f_last__java_util_AbstractHashMap_EntrySetIterator_ = this.f_current__java_util_AbstractHashMap_EntrySetIterator_;
  let rv = /**@type {Entry<K, V>}*/ ($Casts.$to(this.f_current__java_util_AbstractHashMap_EntrySetIterator_.m_next__java_lang_Object(), Entry));
  this.f_hasNext__java_util_AbstractHashMap_EntrySetIterator_ = this.m_computeHasNext__boolean_$p_java_util_AbstractHashMap_EntrySetIterator();
  return rv;
 }
 /** @override @nodts */
 m_remove__void() {
  InternalPreconditions.m_checkState__boolean__void(!$Equality.$same(this.f_last__java_util_AbstractHashMap_EntrySetIterator_, null));
  InternalPreconditions.m_checkConcurrentModification__int__int__void(this.$outer_this__java_util_AbstractHashMap_EntrySetIterator.f_modCount__java_util_AbstractHashMap, this.f_lastModCount__java_util_AbstractHashMap_EntrySetIterator_);
  this.f_last__java_util_AbstractHashMap_EntrySetIterator_.m_remove__void();
  this.f_last__java_util_AbstractHashMap_EntrySetIterator_ = null;
  this.f_hasNext__java_util_AbstractHashMap_EntrySetIterator_ = this.m_computeHasNext__boolean_$p_java_util_AbstractHashMap_EntrySetIterator();
  this.f_lastModCount__java_util_AbstractHashMap_EntrySetIterator_ = this.$outer_this__java_util_AbstractHashMap_EntrySetIterator.f_modCount__java_util_AbstractHashMap;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Entry<K, V>} */
 m_next__java_lang_Object() {
  return this.m_next__java_util_Map_Entry();
 }
 /** @private @nodts */
 $init__void_$p_java_util_AbstractHashMap_EntrySetIterator() {
  this.f_stringMapEntries__java_util_AbstractHashMap_EntrySetIterator_ = this.$outer_this__java_util_AbstractHashMap_EntrySetIterator.f_stringMap__java_util_AbstractHashMap_.m_iterator__java_util_Iterator();
  this.f_current__java_util_AbstractHashMap_EntrySetIterator_ = this.f_stringMapEntries__java_util_AbstractHashMap_EntrySetIterator_;
  this.f_hasNext__java_util_AbstractHashMap_EntrySetIterator_ = this.m_computeHasNext__boolean_$p_java_util_AbstractHashMap_EntrySetIterator();
  this.f_lastModCount__java_util_AbstractHashMap_EntrySetIterator_ = this.$outer_this__java_util_AbstractHashMap_EntrySetIterator.f_modCount__java_util_AbstractHashMap;
 }
 /** @nodts */
 static $clinit() {
  EntrySetIterator.$clinit = () =>{};
  EntrySetIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EntrySetIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Entry = goog.module.get('java.util.Map.Entry$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Iterator.$markImplementor(EntrySetIterator);
$Util.$setClassMetadata(EntrySetIterator, 'java.util.AbstractHashMap$EntrySetIterator');

exports = EntrySetIterator;

//# sourceMappingURL=AbstractHashMap$EntrySetIterator.js.map
