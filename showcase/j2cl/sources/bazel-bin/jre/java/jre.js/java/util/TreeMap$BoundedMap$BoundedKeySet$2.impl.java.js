goog.module('java.util.TreeMap.BoundedMap.BoundedKeySet.$2$impl');

const BoundedIterator = goog.require('java.util.TreeMap.BoundedMap.BoundedIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BoundedKeySet = goog.forwardDeclare('java.util.TreeMap.BoundedMap.BoundedKeySet$impl');
let Node = goog.forwardDeclare('java.util.TreeMap.Node$impl');

/**
 * @template K, V
 * @extends {BoundedIterator<K, K, V>}
 */
class $2 extends BoundedIterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {BoundedKeySet<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_BoundedMap_BoundedKeySet_2;
 }
 /** @nodts @template K, V @return {!$2<K, V>} */
 static $create__java_util_TreeMap_BoundedMap_BoundedKeySet__java_util_TreeMap_Node(/** BoundedKeySet<K, V> */ $outer_this, /** Node<K, V> */ $_0) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__java_util_TreeMap_BoundedMap_BoundedKeySet_2__java_util_TreeMap_BoundedMap_BoundedKeySet__java_util_TreeMap_Node__void($outer_this, $_0);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_BoundedMap_BoundedKeySet_2__java_util_TreeMap_BoundedMap_BoundedKeySet__java_util_TreeMap_Node__void(/** BoundedKeySet<K, V> */ $outer_this, /** Node<K, V> */ $_0) {
  this.$outer_this__java_util_TreeMap_BoundedMap_BoundedKeySet_2 = $outer_this;
  this.$ctor__java_util_TreeMap_BoundedMap_BoundedIterator__java_util_TreeMap_BoundedMap__java_util_TreeMap_Node__void(this.$outer_this__java_util_TreeMap_BoundedMap_BoundedKeySet_2.$outer_this__java_util_TreeMap_BoundedMap_BoundedKeySet, $_0);
 }
 /** @override @nodts @return {K} */
 m_next__java_lang_Object() {
  return (this.$outer_this__java_util_TreeMap_BoundedMap_BoundedKeySet_2.$outer_this__java_util_TreeMap_BoundedMap_BoundedKeySet.f_ascending__java_util_TreeMap_BoundedMap_ ? this.m_stepBackward__java_util_TreeMap_Node() : this.m_stepForward__java_util_TreeMap_Node()).m_getKey__java_lang_Object();
 }
 /** @nodts */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  BoundedIterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($2, 'java.util.TreeMap$BoundedMap$BoundedKeySet$2');

exports = $2;

//# sourceMappingURL=TreeMap$BoundedMap$BoundedKeySet$2.js.map
