goog.module('java.util.LinkedList.Node$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template E
 */
class Node extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Node<E>} @nodts*/
  this.f_next__java_util_LinkedList_Node;
  /**@type {Node<E>} @nodts*/
  this.f_prev__java_util_LinkedList_Node;
  /**@type {E} @nodts*/
  this.f_value__java_util_LinkedList_Node;
 }
 /** @nodts @template E @return {!Node<E>} */
 static $create__() {
  Node.$clinit();
  let $instance = new Node();
  $instance.$ctor__java_util_LinkedList_Node__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_LinkedList_Node__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Node.$clinit = () =>{};
  Node.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Node;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(Node, 'java.util.LinkedList$Node');

exports = Node;

//# sourceMappingURL=LinkedList$Node.js.map
