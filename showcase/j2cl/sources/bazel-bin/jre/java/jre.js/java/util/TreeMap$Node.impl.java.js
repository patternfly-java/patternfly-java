goog.module('java.util.TreeMap.Node$impl');

const SimpleEntry = goog.require('java.util.AbstractMap.SimpleEntry$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @template K, V
 * @extends {SimpleEntry<K, V>}
 */
class Node extends SimpleEntry {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Node<K, V>} @nodts*/
  this.f_parent__java_util_TreeMap_Node;
  /**@type {Node<K, V>} @nodts*/
  this.f_left__java_util_TreeMap_Node;
  /**@type {Node<K, V>} @nodts*/
  this.f_right__java_util_TreeMap_Node;
  /**@type {number} @nodts*/
  this.f_height__java_util_TreeMap_Node = 0;
 }
 /** @nodts @template K, V @return {!Node<K, V>} */
 static $create__java_util_TreeMap_Node__java_lang_Object(/** Node<K, V> */ parent, /** K */ key) {
  Node.$clinit();
  let $instance = new Node();
  $instance.$ctor__java_util_TreeMap_Node__java_util_TreeMap_Node__java_lang_Object__void(parent, key);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_TreeMap_Node__java_util_TreeMap_Node__java_lang_Object__void(/** Node<K, V> */ parent, /** K */ key) {
  this.$ctor__java_util_AbstractMap_SimpleEntry__java_lang_Object__java_lang_Object__void(key, null);
  this.f_parent__java_util_TreeMap_Node = parent;
  this.f_height__java_util_TreeMap_Node = 1;
 }
 /** @nodts @return {Node<K, V>} */
 m_next__java_util_TreeMap_Node_$pp_java_util() {
  if (!$Equality.$same(this.f_right__java_util_TreeMap_Node, null)) {
   return this.f_right__java_util_TreeMap_Node.m_first__java_util_TreeMap_Node_$pp_java_util();
  }
  let node = this;
  let parent = node.f_parent__java_util_TreeMap_Node;
  while (!$Equality.$same(parent, null)) {
   if ($Equality.$same(parent.f_left__java_util_TreeMap_Node, node)) {
    return parent;
   }
   node = parent;
   parent = node.f_parent__java_util_TreeMap_Node;
  }
  return null;
 }
 /** @nodts @return {Node<K, V>} */
 m_prev__java_util_TreeMap_Node_$pp_java_util() {
  if (!$Equality.$same(this.f_left__java_util_TreeMap_Node, null)) {
   return this.f_left__java_util_TreeMap_Node.m_last__java_util_TreeMap_Node_$pp_java_util();
  }
  let node = this;
  let parent = node.f_parent__java_util_TreeMap_Node;
  while (!$Equality.$same(parent, null)) {
   if ($Equality.$same(parent.f_right__java_util_TreeMap_Node, node)) {
    return parent;
   }
   node = parent;
   parent = node.f_parent__java_util_TreeMap_Node;
  }
  return null;
 }
 /** @nodts @return {Node<K, V>} */
 m_first__java_util_TreeMap_Node_$pp_java_util() {
  let node = this;
  let child = node.f_left__java_util_TreeMap_Node;
  while (!$Equality.$same(child, null)) {
   node = child;
   child = node.f_left__java_util_TreeMap_Node;
  }
  return node;
 }
 /** @nodts @return {Node<K, V>} */
 m_last__java_util_TreeMap_Node_$pp_java_util() {
  let node = this;
  let child = node.f_right__java_util_TreeMap_Node;
  while (!$Equality.$same(child, null)) {
   node = child;
   child = node.f_right__java_util_TreeMap_Node;
  }
  return node;
 }
 /** @nodts */
 static $clinit() {
  Node.$clinit = () =>{};
  Node.$loadModules();
  SimpleEntry.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Node;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(Node, 'java.util.TreeMap$Node');

exports = Node;

//# sourceMappingURL=TreeMap$Node.js.map
