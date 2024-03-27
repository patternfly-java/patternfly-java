goog.module('java.util.Collections.SetFromMap$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractSet = goog.require('java.util.AbstractSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @final
 * @template E
 * @extends {AbstractSet<E>}
 * @implements {Serializable}
 */
class SetFromMap extends AbstractSet {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<E, ?boolean>} @nodts*/
  this.f_backingMap__java_util_Collections_SetFromMap_;
  /**@type {Set<E>} @nodts*/
  this.f_keySet__java_util_Collections_SetFromMap_;
 }
 /** @nodts @template E @return {!SetFromMap<E>} */
 static $create__java_util_Map(/** Map<E, ?boolean> */ map) {
  SetFromMap.$clinit();
  let $instance = new SetFromMap();
  $instance.$ctor__java_util_Collections_SetFromMap__java_util_Map__void(map);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_SetFromMap__java_util_Map__void(/** Map<E, ?boolean> */ map) {
  this.$ctor__java_util_AbstractSet__void();
  this.f_backingMap__java_util_Collections_SetFromMap_ = map;
 }
 /** @override @return {boolean} */
 add(/** E */ e) {
  return $Equality.$same(this.f_backingMap__java_util_Collections_SetFromMap_.put(e, Boolean.f_TRUE__java_lang_Boolean), null);
 }
 /** @override */
 clear() {
  this.f_backingMap__java_util_Collections_SetFromMap_.clear();
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.f_backingMap__java_util_Collections_SetFromMap_.containsKey(o);
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return $Equality.$same(o, this) || $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.m_keySet__java_util_Set_$p_java_util_Collections_SetFromMap(), o);
 }
 /** @override @return {number} */
 hashCode() {
  return $Objects.m_hashCode__java_lang_Object__int(this.m_keySet__java_util_Set_$p_java_util_Collections_SetFromMap());
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return this.m_keySet__java_util_Set_$p_java_util_Collections_SetFromMap().m_iterator__java_util_Iterator();
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  return !$Equality.$same(this.f_backingMap__java_util_Collections_SetFromMap_.remove(o), null);
 }
 /** @override @return {number} */
 size() {
  return this.m_keySet__java_util_Set_$p_java_util_Collections_SetFromMap().size();
 }
 /** @override @return {?string} */
 toString() {
  return $Objects.m_toString__java_lang_Object__java_lang_String(this.m_keySet__java_util_Set_$p_java_util_Collections_SetFromMap());
 }
 /** @nodts @return {Set<E>} */
 m_keySet__java_util_Set_$p_java_util_Collections_SetFromMap() {
  if ($Equality.$same(this.f_keySet__java_util_Collections_SetFromMap_, null)) {
   this.f_keySet__java_util_Collections_SetFromMap_ = this.f_backingMap__java_util_Collections_SetFromMap_.keySet();
  }
  return this.f_keySet__java_util_Collections_SetFromMap_;
 }
 /** @nodts */
 static $clinit() {
  SetFromMap.$clinit = () =>{};
  SetFromMap.$loadModules();
  AbstractSet.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SetFromMap;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Serializable.$markImplementor(SetFromMap);
$Util.$setClassMetadata(SetFromMap, 'java.util.Collections$SetFromMap');

exports = SetFromMap;

//# sourceMappingURL=Collections$SetFromMap.js.map
