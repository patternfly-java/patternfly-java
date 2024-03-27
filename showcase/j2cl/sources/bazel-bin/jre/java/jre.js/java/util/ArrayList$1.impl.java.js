goog.module('java.util.ArrayList.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @template E
 * @implements {Iterator<E>}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ArrayList<E>} @nodts*/
  this.$outer_this__java_util_ArrayList_1;
  /**@type {number} @nodts*/
  this.f_i__java_util_ArrayList_1 = 0;
  /**@type {number} @nodts*/
  this.f_last__java_util_ArrayList_1 = 0;
 }
 /** @nodts @template E @return {!$1<E>} */
 static $create__java_util_ArrayList(/** ArrayList<E> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_ArrayList_1__java_util_ArrayList__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_ArrayList_1__java_util_ArrayList__void(/** ArrayList<E> */ $outer_this) {
  this.$outer_this__java_util_ArrayList_1 = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_ArrayList_1();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_i__java_util_ArrayList_1 < this.$outer_this__java_util_ArrayList_1.f_array__java_util_ArrayList_.length;
 }
 /** @override @nodts @return {E} */
 m_next__java_lang_Object() {
  let /** number */ $value;
  InternalPreconditions.m_checkElement__boolean__void(this.m_hasNext__boolean());
  this.f_last__java_util_ArrayList_1 = ($value = this.f_i__java_util_ArrayList_1, this.f_i__java_util_ArrayList_1 = this.f_i__java_util_ArrayList_1 + 1 | 0, $value);
  return this.$outer_this__java_util_ArrayList_1.f_array__java_util_ArrayList_[this.f_last__java_util_ArrayList_1];
 }
 /** @override @nodts */
 m_remove__void() {
  InternalPreconditions.m_checkState__boolean__void(this.f_last__java_util_ArrayList_1 != (- 1 | 0));
  this.$outer_this__java_util_ArrayList_1.removeAtIndex(this.f_i__java_util_ArrayList_1 = this.f_last__java_util_ArrayList_1);
  this.f_last__java_util_ArrayList_1 = - 1 | 0;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_ArrayList_1() {
  this.f_i__java_util_ArrayList_1 = 0;
  this.f_last__java_util_ArrayList_1 = - 1 | 0;
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
Iterator.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.ArrayList$1');

exports = $1;

//# sourceMappingURL=ArrayList$1.js.map
