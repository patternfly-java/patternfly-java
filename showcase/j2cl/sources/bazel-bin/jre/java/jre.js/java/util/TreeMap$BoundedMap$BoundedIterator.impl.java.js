goog.module('java.util.TreeMap.BoundedMap.BoundedIterator$impl');

const MapIterator = goog.require('java.util.TreeMap.MapIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Bound = goog.forwardDeclare('java.util.TreeMap.Bound$impl');
let BoundedMap = goog.forwardDeclare('java.util.TreeMap.BoundedMap$impl');
let Node = goog.forwardDeclare('java.util.TreeMap.Node$impl');

/**
 * @abstract
 * @template T, K, V
 * @extends {MapIterator<T, K, V>}
 */
class BoundedIterator extends MapIterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {BoundedMap<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_BoundedMap_BoundedIterator;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_BoundedMap_BoundedIterator__java_util_TreeMap_BoundedMap__java_util_TreeMap_Node__void(/** BoundedMap<K, V> */ $outer_this, /** Node<K, V> */ next) {
  this.$outer_this__java_util_TreeMap_BoundedMap_BoundedIterator = $outer_this;
  this.$ctor__java_util_TreeMap_MapIterator__java_util_TreeMap__java_util_TreeMap_Node__void(this.$outer_this__java_util_TreeMap_BoundedMap_BoundedIterator.$outer_this__java_util_TreeMap_BoundedMap, next);
 }
 /** @override @nodts @return {Node<K, V>} */
 m_stepForward__java_util_TreeMap_Node() {
  let result = super.m_stepForward__java_util_TreeMap_Node();
  this.f_next__java_util_TreeMap_MapIterator = this.$outer_this__java_util_TreeMap_BoundedMap_BoundedIterator.m_bound__java_util_TreeMap_Node__java_util_TreeMap_Bound__java_util_TreeMap_Bound__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(this.f_next__java_util_TreeMap_MapIterator, Bound.NO_BOUND, this.$outer_this__java_util_TreeMap_BoundedMap_BoundedIterator.f_toBound__java_util_TreeMap_BoundedMap_);
  return result;
 }
 /** @override @nodts @return {Node<K, V>} */
 m_stepBackward__java_util_TreeMap_Node() {
  let result = super.m_stepBackward__java_util_TreeMap_Node();
  this.f_next__java_util_TreeMap_MapIterator = this.$outer_this__java_util_TreeMap_BoundedMap_BoundedIterator.m_bound__java_util_TreeMap_Node__java_util_TreeMap_Bound__java_util_TreeMap_Bound__java_util_TreeMap_Node_$p_java_util_TreeMap_BoundedMap(this.f_next__java_util_TreeMap_MapIterator, this.$outer_this__java_util_TreeMap_BoundedMap_BoundedIterator.f_fromBound__java_util_TreeMap_BoundedMap_, Bound.NO_BOUND);
  return result;
 }
 /** @nodts */
 static $clinit() {
  BoundedIterator.$clinit = () =>{};
  BoundedIterator.$loadModules();
  MapIterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoundedIterator;
 }
 /** @abstract @override @nodts @return {T} */
 m_next__java_lang_Object() {}
 
 /** @nodts */
 static $loadModules() {
  Bound = goog.module.get('java.util.TreeMap.Bound$impl');
 }
}
$Util.$setClassMetadata(BoundedIterator, 'java.util.TreeMap$BoundedMap$BoundedIterator');

exports = BoundedIterator;

//# sourceMappingURL=TreeMap$BoundedMap$BoundedIterator.js.map
