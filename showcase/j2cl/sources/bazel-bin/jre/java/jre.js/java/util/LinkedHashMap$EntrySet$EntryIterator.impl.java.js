goog.module('java.util.LinkedHashMap.EntrySet.EntryIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ChainEntry = goog.forwardDeclare('java.util.LinkedHashMap.ChainEntry$impl');
let EntrySet = goog.forwardDeclare('java.util.LinkedHashMap.EntrySet$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @final
 * @template K, V
 * @implements {Iterator<Entry<K, V>>}
 */
class EntryIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {EntrySet<K, V>} @nodts*/
  this.$outer_this__java_util_LinkedHashMap_EntrySet_EntryIterator;
  /**@type {ChainEntry<K, V>} @nodts*/
  this.f_last__java_util_LinkedHashMap_EntrySet_EntryIterator_;
  /**@type {ChainEntry<K, V>} @nodts*/
  this.f_next__java_util_LinkedHashMap_EntrySet_EntryIterator_;
  /**@type {number} @nodts*/
  this.f_lastModCount__java_util_LinkedHashMap_EntrySet_EntryIterator_ = 0;
 }
 /** @nodts @template K, V @return {!EntryIterator<K, V>} */
 static $create__java_util_LinkedHashMap_EntrySet(/** EntrySet<K, V> */ $outer_this) {
  EntryIterator.$clinit();
  let $instance = new EntryIterator();
  $instance.$ctor__java_util_LinkedHashMap_EntrySet_EntryIterator__java_util_LinkedHashMap_EntrySet__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_LinkedHashMap_EntrySet_EntryIterator__java_util_LinkedHashMap_EntrySet__void(/** EntrySet<K, V> */ $outer_this) {
  this.$outer_this__java_util_LinkedHashMap_EntrySet_EntryIterator = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.f_next__java_util_LinkedHashMap_EntrySet_EntryIterator_ = this.$outer_this__java_util_LinkedHashMap_EntrySet_EntryIterator.$outer_this__java_util_LinkedHashMap_EntrySet.f_head__java_util_LinkedHashMap_.f_next__java_util_LinkedHashMap_ChainEntry_;
  this.f_lastModCount__java_util_LinkedHashMap_EntrySet_EntryIterator_ = this.$outer_this__java_util_LinkedHashMap_EntrySet_EntryIterator.$outer_this__java_util_LinkedHashMap_EntrySet.f_map__java_util_LinkedHashMap_.f_modCount__java_util_AbstractHashMap;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return !$Equality.$same(this.f_next__java_util_LinkedHashMap_EntrySet_EntryIterator_, this.$outer_this__java_util_LinkedHashMap_EntrySet_EntryIterator.$outer_this__java_util_LinkedHashMap_EntrySet.f_head__java_util_LinkedHashMap_);
 }
 /** @nodts @return {Entry<K, V>} */
 m_next__java_util_Map_Entry() {
  InternalPreconditions.m_checkConcurrentModification__int__int__void(this.$outer_this__java_util_LinkedHashMap_EntrySet_EntryIterator.$outer_this__java_util_LinkedHashMap_EntrySet.f_map__java_util_LinkedHashMap_.f_modCount__java_util_AbstractHashMap, this.f_lastModCount__java_util_LinkedHashMap_EntrySet_EntryIterator_);
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.m_hasNext__boolean());
  this.f_last__java_util_LinkedHashMap_EntrySet_EntryIterator_ = this.f_next__java_util_LinkedHashMap_EntrySet_EntryIterator_;
  this.f_next__java_util_LinkedHashMap_EntrySet_EntryIterator_ = this.f_next__java_util_LinkedHashMap_EntrySet_EntryIterator_.f_next__java_util_LinkedHashMap_ChainEntry_;
  return this.f_last__java_util_LinkedHashMap_EntrySet_EntryIterator_;
 }
 /** @override @nodts */
 m_remove__void() {
  InternalPreconditions.m_checkState__boolean__void(!$Equality.$same(this.f_last__java_util_LinkedHashMap_EntrySet_EntryIterator_, null));
  InternalPreconditions.m_checkConcurrentModification__int__int__void(this.$outer_this__java_util_LinkedHashMap_EntrySet_EntryIterator.$outer_this__java_util_LinkedHashMap_EntrySet.f_map__java_util_LinkedHashMap_.f_modCount__java_util_AbstractHashMap, this.f_lastModCount__java_util_LinkedHashMap_EntrySet_EntryIterator_);
  this.f_last__java_util_LinkedHashMap_EntrySet_EntryIterator_.m_remove__void();
  this.$outer_this__java_util_LinkedHashMap_EntrySet_EntryIterator.$outer_this__java_util_LinkedHashMap_EntrySet.f_map__java_util_LinkedHashMap_.remove(this.f_last__java_util_LinkedHashMap_EntrySet_EntryIterator_.m_getKey__java_lang_Object());
  this.f_lastModCount__java_util_LinkedHashMap_EntrySet_EntryIterator_ = this.$outer_this__java_util_LinkedHashMap_EntrySet_EntryIterator.$outer_this__java_util_LinkedHashMap_EntrySet.f_map__java_util_LinkedHashMap_.f_modCount__java_util_AbstractHashMap;
  this.f_last__java_util_LinkedHashMap_EntrySet_EntryIterator_ = null;
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
 /** @nodts */
 static $clinit() {
  EntryIterator.$clinit = () =>{};
  EntryIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EntryIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Iterator.$markImplementor(EntryIterator);
$Util.$setClassMetadata(EntryIterator, 'java.util.LinkedHashMap$EntrySet$EntryIterator');

exports = EntryIterator;

//# sourceMappingURL=LinkedHashMap$EntrySet$EntryIterator.js.map
