goog.module('java.lang.Enum$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template E
 * @implements {Comparable<E>}
 * @implements {Serializable}
 */
class Enum extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__java_lang_Enum_;
  /**@type {number} @nodts*/
  this.f_ordinal__java_lang_Enum_ = 0;
 }
 /** @nodts */
 $ctor__java_lang_Enum__java_lang_String__int__void(/** ?string */ name, /** number */ ordinal) {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Class<E>} */
 m_getDeclaringClass__java_lang_Class() {
  Enum.$clinit();
  let clazz = this.m_getClass__java_lang_Class();
  let superClass = clazz.m_getSuperclass__java_lang_Class();
  return /**@type {Class<E>}*/ ($Equality.$same(superClass, Class.$get(Enum)) ? clazz : superClass);
 }
 /** @final @return {?string} */
 name() {
  Enum.$clinit();
  return !$Equality.$same(this.f_name__java_lang_Enum_, null) ? this.f_name__java_lang_Enum_ : '' + this.f_ordinal__java_lang_Enum_;
 }
 /** @final @return {number} */
 ordinal() {
  Enum.$clinit();
  return this.f_ordinal__java_lang_Enum_;
 }
 /** @return {number} */
 compareTo(/** E */ other) {
  Enum.$clinit();
  return this.f_ordinal__java_lang_Enum_ - /**@type {!Enum}*/ (other).f_ordinal__java_lang_Enum_ | 0;
 }
 /** @nodts @template T @return {T} */
 static m_valueOf__java_lang_Class__java_lang_String__java_lang_Enum(/** Class<T> */ enumType, /** ?string */ name) {
  Enum.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {?string} */
 toString() {
  Enum.$clinit();
  return this.name();
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** E */ arg0) {
  Enum.$clinit();
  return this.compareTo(/**@type {E}*/ ($Casts.$to(arg0, Enum)));
 }
 /** @nodts */
 static $clinit() {
  Enum.$clinit = () =>{};
  Enum.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Enum;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Comparable.$markImplementor(Enum);
Serializable.$markImplementor(Enum);
$Util.$setClassMetadata(Enum, 'java.lang.Enum');

exports = Enum;

//# sourceMappingURL=Enum.js.map
