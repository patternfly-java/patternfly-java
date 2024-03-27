goog.module('java.util.TreeMap.KeySet.$1$impl');

const MapIterator = goog.require('java.util.TreeMap.MapIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let KeySet = goog.forwardDeclare('java.util.TreeMap.KeySet$impl');
let Node = goog.forwardDeclare('java.util.TreeMap.Node$impl');

/**
 * @template K, V
 * @extends {MapIterator<K, K, V>}
 */
class $1 extends MapIterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {KeySet<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_KeySet_1;
 }
 /** @nodts @template K, V @return {!$1<K, V>} */
 static $create__java_util_TreeMap_KeySet__java_util_TreeMap_Node(/** KeySet<K, V> */ $outer_this, /** Node<K, V> */ $_0) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_TreeMap_KeySet_1__java_util_TreeMap_KeySet__java_util_TreeMap_Node__void($outer_this, $_0);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_KeySet_1__java_util_TreeMap_KeySet__java_util_TreeMap_Node__void(/** KeySet<K, V> */ $outer_this, /** Node<K, V> */ $_0) {
  this.$outer_this__java_util_TreeMap_KeySet_1 = $outer_this;
  this.$ctor__java_util_TreeMap_MapIterator__java_util_TreeMap__java_util_TreeMap_Node__void(this.$outer_this__java_util_TreeMap_KeySet_1.$outer_this__java_util_TreeMap_KeySet, $_0);
 }
 /** @override @nodts @return {K} */
 m_next__java_lang_Object() {
  return this.m_stepForward__java_util_TreeMap_Node().m_getKey__java_lang_Object();
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  MapIterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'java.util.TreeMap$KeySet$1');

exports = $1;

//# sourceMappingURL=TreeMap$KeySet$1.js.map
