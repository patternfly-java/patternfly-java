goog.module('java.util.TreeMap.MapIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let TreeMap = goog.forwardDeclare('java.util.TreeMap$impl');
let Node = goog.forwardDeclare('java.util.TreeMap.Node$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @abstract
 * @template T, K, V
 * @implements {Iterator<T>}
 */
class MapIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TreeMap<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_MapIterator;
  /**@type {Node<K, V>} @nodts*/
  this.f_next__java_util_TreeMap_MapIterator;
  /**@type {Node<K, V>} @nodts*/
  this.f_last__java_util_TreeMap_MapIterator;
  /**@type {number} @nodts*/
  this.f_expectedModCount__java_util_TreeMap_MapIterator = 0;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_MapIterator__java_util_TreeMap__java_util_TreeMap_Node__void(/** TreeMap<K, V> */ $outer_this, /** Node<K, V> */ next) {
  this.$outer_this__java_util_TreeMap_MapIterator = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_TreeMap_MapIterator();
  this.f_next__java_util_TreeMap_MapIterator = next;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return !$Equality.$same(this.f_next__java_util_TreeMap_MapIterator, null);
 }
 /** @nodts @return {Node<K, V>} */
 m_stepForward__java_util_TreeMap_Node() {
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(this.f_next__java_util_TreeMap_MapIterator, null));
  InternalPreconditions.m_checkConcurrentModification__int__int__void(this.$outer_this__java_util_TreeMap_MapIterator.f_modCount__java_util_TreeMap_, this.f_expectedModCount__java_util_TreeMap_MapIterator);
  this.f_last__java_util_TreeMap_MapIterator = this.f_next__java_util_TreeMap_MapIterator;
  this.f_next__java_util_TreeMap_MapIterator = this.f_next__java_util_TreeMap_MapIterator.m_next__java_util_TreeMap_Node_$pp_java_util();
  return this.f_last__java_util_TreeMap_MapIterator;
 }
 /** @nodts @return {Node<K, V>} */
 m_stepBackward__java_util_TreeMap_Node() {
  InternalPreconditions.m_checkElement__boolean__void(!$Equality.$same(this.f_next__java_util_TreeMap_MapIterator, null));
  InternalPreconditions.m_checkConcurrentModification__int__int__void(this.$outer_this__java_util_TreeMap_MapIterator.f_modCount__java_util_TreeMap_, this.f_expectedModCount__java_util_TreeMap_MapIterator);
  this.f_last__java_util_TreeMap_MapIterator = this.f_next__java_util_TreeMap_MapIterator;
  this.f_next__java_util_TreeMap_MapIterator = this.f_next__java_util_TreeMap_MapIterator.m_prev__java_util_TreeMap_Node_$pp_java_util();
  return this.f_last__java_util_TreeMap_MapIterator;
 }
 /** @override @nodts */
 m_remove__void() {
  InternalPreconditions.m_checkState__boolean__void(!$Equality.$same(this.f_last__java_util_TreeMap_MapIterator, null));
  this.$outer_this__java_util_TreeMap_MapIterator.m_removeInternal__java_util_TreeMap_Node__void_$p_java_util_TreeMap(this.f_last__java_util_TreeMap_MapIterator);
  this.f_expectedModCount__java_util_TreeMap_MapIterator = this.$outer_this__java_util_TreeMap_MapIterator.f_modCount__java_util_TreeMap_;
  this.f_last__java_util_TreeMap_MapIterator = null;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_TreeMap_MapIterator() {
  this.f_expectedModCount__java_util_TreeMap_MapIterator = this.$outer_this__java_util_TreeMap_MapIterator.f_modCount__java_util_TreeMap_;
 }
 /** @nodts */
 static $clinit() {
  MapIterator.$clinit = () =>{};
  MapIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MapIterator;
 }
 /** @abstract @override @nodts @return {T} */
 m_next__java_lang_Object() {}
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Iterator.$markImplementor(MapIterator);
$Util.$setClassMetadata(MapIterator, 'java.util.TreeMap$MapIterator');

exports = MapIterator;

//# sourceMappingURL=TreeMap$MapIterator.js.map
