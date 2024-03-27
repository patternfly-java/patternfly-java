goog.module('java.util.Stack$impl');

const Vector = goog.require('java.util.Vector$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let EmptyStackException = goog.forwardDeclare('java.util.EmptyStackException$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template E
 * @extends {Vector<E>}
 */
class Stack extends Vector {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template E @return {!Stack<E>} */
 static $create__() {
  Stack.$clinit();
  let $instance = new Stack();
  $instance.$ctor__java_util_Stack__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Stack__void() {
  this.$ctor__java_util_Vector__void();
 }
 /** @override @nodts @return {*} */
 m_clone__java_lang_Object() {
  let s = /**@type {!Stack<E>}*/ (Stack.$create__());
  s.addAll(this);
  return s;
 }
 /** @nodts @return {boolean} */
 m_empty__boolean() {
  return this.isEmpty();
 }
 /** @nodts @return {E} */
 m_peek__java_lang_Object() {
  let sz = this.size();
  if (sz > 0) {
   return this.getAtIndex(sz - 1 | 0);
  } else {
   throw $Exceptions.toJs(EmptyStackException.$create__());
  }
 }
 /** @nodts @return {E} */
 m_pop__java_lang_Object() {
  let sz = this.size();
  if (sz > 0) {
   return this.removeAtIndex(sz - 1 | 0);
  } else {
   throw $Exceptions.toJs(EmptyStackException.$create__());
  }
 }
 /** @nodts @return {E} */
 m_push__java_lang_Object__java_lang_Object(/** E */ o) {
  this.add(o);
  return o;
 }
 /** @nodts @return {number} */
 m_search__java_lang_Object__int(/** * */ o) {
  let pos = this.lastIndexOf(o);
  if (pos >= 0) {
   return this.size() - pos | 0;
  }
  return - 1 | 0;
 }
 /** @nodts */
 static $clinit() {
  Stack.$clinit = () =>{};
  Stack.$loadModules();
  Vector.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Stack;
 }
 
 /** @nodts */
 static $loadModules() {
  EmptyStackException = goog.module.get('java.util.EmptyStackException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(Stack, 'java.util.Stack');

exports = Stack;

//# sourceMappingURL=Stack.js.map
