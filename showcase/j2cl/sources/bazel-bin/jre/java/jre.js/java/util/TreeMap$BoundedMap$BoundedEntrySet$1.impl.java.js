goog.module('java.util.TreeMap.BoundedMap.BoundedEntrySet.$1$impl');

const BoundedIterator = goog.require('java.util.TreeMap.BoundedMap.BoundedIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let BoundedEntrySet = goog.forwardDeclare('java.util.TreeMap.BoundedMap.BoundedEntrySet$impl');
let Node = goog.forwardDeclare('java.util.TreeMap.Node$impl');

/**
 * @template K, V
 * @extends {BoundedIterator<Entry<K, V>, K, V>}
 */
class $1 extends BoundedIterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {BoundedEntrySet<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet_1;
 }
 /** @nodts @template K, V @return {!$1<K, V>} */
 static $create__java_util_TreeMap_BoundedMap_BoundedEntrySet__java_util_TreeMap_Node(/** BoundedEntrySet<K, V> */ $outer_this, /** Node<K, V> */ $_0) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_TreeMap_BoundedMap_BoundedEntrySet_1__java_util_TreeMap_BoundedMap_BoundedEntrySet__java_util_TreeMap_Node__void($outer_this, $_0);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_BoundedMap_BoundedEntrySet_1__java_util_TreeMap_BoundedMap_BoundedEntrySet__java_util_TreeMap_Node__void(/** BoundedEntrySet<K, V> */ $outer_this, /** Node<K, V> */ $_0) {
  this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet_1 = $outer_this;
  this.$ctor__java_util_TreeMap_BoundedMap_BoundedIterator__java_util_TreeMap_BoundedMap__java_util_TreeMap_Node__void(this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet_1.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet, $_0);
 }
 /** @nodts @return {Entry<K, V>} */
 m_next__java_util_Map_Entry() {
  return this.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet_1.$outer_this__java_util_TreeMap_BoundedMap_BoundedEntrySet.f_ascending__java_util_TreeMap_BoundedMap_ ? this.m_stepForward__java_util_TreeMap_Node() : this.m_stepBackward__java_util_TreeMap_Node();
 }
 //Bridge method.
 /** @final @override @nodts @return {Entry<K, V>} */
 m_next__java_lang_Object() {
  return this.m_next__java_util_Map_Entry();
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  BoundedIterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'java.util.TreeMap$BoundedMap$BoundedEntrySet$1');

exports = $1;

//# sourceMappingURL=TreeMap$BoundedMap$BoundedEntrySet$1.js.map
