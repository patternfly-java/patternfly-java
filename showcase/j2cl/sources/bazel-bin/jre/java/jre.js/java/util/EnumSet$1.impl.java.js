goog.module('java.util.EnumSet.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @implements {Iterator<E>}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {EnumSet<E>} @nodts*/
  this.$outer_this__java_util_EnumSet_1;
  /**@type {number} @nodts*/
  this.f_i__java_util_EnumSet_1 = 0;
  /**@type {number} @nodts*/
  this.f_last__java_util_EnumSet_1 = 0;
  /**@type {List<E>} @nodts*/
  this.$captured_sortedEnums__java_util_EnumSet_1;
 }
 /** @nodts @template E @return {!$1<E>} */
 static $create__java_util_EnumSet__java_util_List(/** EnumSet<E> */ $outer_this, /** List<E> */ $captured_sortedEnums) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_EnumSet_1__java_util_EnumSet__java_util_List__void($outer_this, $captured_sortedEnums);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_EnumSet_1__java_util_EnumSet__java_util_List__void(/** EnumSet<E> */ $outer_this, /** List<E> */ $captured_sortedEnums) {
  this.$outer_this__java_util_EnumSet_1 = $outer_this;
  this.$captured_sortedEnums__java_util_EnumSet_1 = $captured_sortedEnums;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_EnumSet_1();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_i__java_util_EnumSet_1 < this.$captured_sortedEnums__java_util_EnumSet_1.size();
 }
 /** @nodts @return {E} */
 m_next__java_lang_Enum() {
  let /** number */ $value;
  InternalPreconditions.m_checkElement__boolean__void(this.m_hasNext__boolean());
  this.f_last__java_util_EnumSet_1 = ($value = this.f_i__java_util_EnumSet_1, this.f_i__java_util_EnumSet_1 = this.f_i__java_util_EnumSet_1 + 1 | 0, $value);
  return /**@type {E}*/ ($Casts.$to(this.$captured_sortedEnums__java_util_EnumSet_1.getAtIndex(this.f_last__java_util_EnumSet_1), Enum));
 }
 /** @override @nodts */
 m_remove__void() {
  InternalPreconditions.m_checkState__boolean__void(this.f_last__java_util_EnumSet_1 != (- 1 | 0));
  this.$outer_this__java_util_EnumSet_1.remove(this.$captured_sortedEnums__java_util_EnumSet_1.getAtIndex(this.f_last__java_util_EnumSet_1));
  this.f_last__java_util_EnumSet_1 = - 1 | 0;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_next__java_lang_Object() {
  return this.m_next__java_lang_Enum();
 }
 /** @private @nodts */
 $init__void_$p_java_util_EnumSet_1() {
  this.f_i__java_util_EnumSet_1 = 0;
  this.f_last__java_util_EnumSet_1 = - 1 | 0;
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
  Enum = goog.module.get('java.lang.Enum$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Iterator.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.EnumSet$1');

exports = $1;

//# sourceMappingURL=EnumSet$1.js.map
