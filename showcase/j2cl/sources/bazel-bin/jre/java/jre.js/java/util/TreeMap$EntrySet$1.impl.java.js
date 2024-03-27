goog.module('java.util.TreeMap.EntrySet.$1$impl');

const MapIterator = goog.require('java.util.TreeMap.MapIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let EntrySet = goog.forwardDeclare('java.util.TreeMap.EntrySet$impl');
let Node = goog.forwardDeclare('java.util.TreeMap.Node$impl');

/**
 * @template K, V
 * @extends {MapIterator<Entry<K, V>, K, V>}
 */
class $1 extends MapIterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {EntrySet<K, V>} @nodts*/
  this.$outer_this__java_util_TreeMap_EntrySet_1;
 }
 /** @nodts @template K, V @return {!$1<K, V>} */
 static $create__java_util_TreeMap_EntrySet__java_util_TreeMap_Node(/** EntrySet<K, V> */ $outer_this, /** Node<K, V> */ $_0) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_TreeMap_EntrySet_1__java_util_TreeMap_EntrySet__java_util_TreeMap_Node__void($outer_this, $_0);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_EntrySet_1__java_util_TreeMap_EntrySet__java_util_TreeMap_Node__void(/** EntrySet<K, V> */ $outer_this, /** Node<K, V> */ $_0) {
  this.$outer_this__java_util_TreeMap_EntrySet_1 = $outer_this;
  this.$ctor__java_util_TreeMap_MapIterator__java_util_TreeMap__java_util_TreeMap_Node__void(this.$outer_this__java_util_TreeMap_EntrySet_1.$outer_this__java_util_TreeMap_EntrySet, $_0);
 }
 /** @nodts @return {Entry<K, V>} */
 m_next__java_util_Map_Entry() {
  return this.m_stepForward__java_util_TreeMap_Node();
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
  MapIterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'java.util.TreeMap$EntrySet$1');

exports = $1;

//# sourceMappingURL=TreeMap$EntrySet$1.js.map
