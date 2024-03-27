goog.module('java.util.EnumMap$impl');

const Cloneable = goog.require('java.lang.Cloneable$impl');
const AbstractMap = goog.require('java.util.AbstractMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let EntrySet = goog.forwardDeclare('java.util.EnumMap.EntrySet$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template K, V
 * @extends {AbstractMap<K, V>}
 * @implements {Cloneable}
 */
class EnumMap extends AbstractMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {EnumSet<K>} @nodts*/
  this.f_keySet__java_util_EnumMap_;
  /**@type {Array<V>} @nodts*/
  this.f_values__java_util_EnumMap_;
 }
 //Factory method corresponding to constructor 'EnumMap(Class)'.
 /** @nodts @template K, V @return {!EnumMap<K, V>} */
 static $create__java_lang_Class(/** Class<K> */ type) {
  EnumMap.$clinit();
  let $instance = new EnumMap();
  $instance.$ctor__java_util_EnumMap__java_lang_Class__void(type);
  return $instance;
 }
 //Initialization from constructor 'EnumMap(Class)'.
 /** @nodts */
 $ctor__java_util_EnumMap__java_lang_Class__void(/** Class<K> */ type) {
  this.$ctor__java_util_AbstractMap__void();
  this.$init__void_$p_java_util_EnumMap();
 }
 //Factory method corresponding to constructor 'EnumMap(Map)'.
 /** @nodts @template K, V @return {!EnumMap<K, V>} */
 static $create__java_util_Map(/** Map<K, ?> */ m) {
  EnumMap.$clinit();
  let $instance = new EnumMap();
  $instance.$ctor__java_util_EnumMap__java_util_Map__void(m);
  return $instance;
 }
 //Initialization from constructor 'EnumMap(Map)'.
 /** @nodts */
 $ctor__java_util_EnumMap__java_util_Map__void(/** Map<K, ?> */ m) {
  this.$ctor__java_util_AbstractMap__void();
  this.$init__void_$p_java_util_EnumMap();
  this.putAll(m);
 }
 /** @override */
 clear() {
  this.f_keySet__java_util_EnumMap_.clear();
  this.f_values__java_util_EnumMap_ = /**@type {!Array<V>}*/ (new Array(this.f_values__java_util_EnumMap_.length));
 }
 /** @nodts @return {EnumMap<K, V>} */
 m_clone__java_util_EnumMap() {
  return /**@type {!EnumMap<K, V>}*/ (EnumMap.$create__java_util_Map(this));
 }
 /** @override @return {boolean} */
 containsKey(/** * */ key) {
  return this.f_keySet__java_util_EnumMap_.contains(key);
 }
 /** @override @return {boolean} */
 containsValue(/** * */ value) {
  for (let $iterator = this.f_keySet__java_util_EnumMap_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let key = /**@type {K}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Enum));
   {
    if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(value, this.f_values__java_util_EnumMap_[/**@type {!Enum<K>}*/ (key).ordinal()])) {
     return true;
    }
   }
  }
  return false;
 }
 /** @override @nodts @return {Set<Entry<K, V>>} */
 m_entrySet__java_util_Set() {
  return /**@type {!EntrySet<K, V>}*/ (EntrySet.$create__java_util_EnumMap(this));
 }
 /** @override @return {V} */
 get(/** * */ k) {
  return this.f_keySet__java_util_EnumMap_.contains(k) ? this.f_values__java_util_EnumMap_[this.m_asOrdinal__java_lang_Object__int_$p_java_util_EnumMap(k)] : null;
 }
 /** @nodts @return {V} */
 m_put__java_lang_Enum__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  this.f_keySet__java_util_EnumMap_.m_add__java_lang_Enum__boolean(key);
  return ArrayHelper.m_setAt__arrayOf_java_lang_Object__int__java_lang_Object__java_lang_Object(this.f_values__java_util_EnumMap_, /**@type {!Enum<K>}*/ (key).ordinal(), value);
 }
 /** @override @return {V} */
 remove(/** * */ key) {
  return this.f_keySet__java_util_EnumMap_.remove(key) ? ArrayHelper.m_setAt__arrayOf_java_lang_Object__int__java_lang_Object__java_lang_Object(this.f_values__java_util_EnumMap_, this.m_asOrdinal__java_lang_Object__int_$p_java_util_EnumMap(key), null) : null;
 }
 /** @override @return {number} */
 size() {
  return this.f_keySet__java_util_EnumMap_.size();
 }
 /** @nodts @return {K} */
 m_asKey__java_lang_Object__java_lang_Enum_$p_java_util_EnumMap(/** * */ key) {
  return /**@type {K}*/ ($Casts.$to(key, Enum));
 }
 /** @nodts @return {number} */
 m_asOrdinal__java_lang_Object__int_$p_java_util_EnumMap(/** * */ key) {
  return /**@type {!Enum<K>}*/ (this.m_asKey__java_lang_Object__java_lang_Enum_$p_java_util_EnumMap(key)).ordinal();
 }
 //Bridge method.
 /** @final @override @return {V} */
 put(/** K */ arg0, /** V */ arg1) {
  return this.m_put__java_lang_Enum__java_lang_Object__java_lang_Object(/**@type {K}*/ ($Casts.$to(arg0, Enum)), arg1);
 }
 /** @private @nodts */
 $init__void_$p_java_util_EnumMap() {
  this.f_keySet__java_util_EnumMap_ = /**@type {!EnumSet<K>}*/ (EnumSet.$create__());
  this.f_values__java_util_EnumMap_ = /**@type {!Array<V>}*/ (new Array(0));
 }
 /** @nodts */
 static $clinit() {
  EnumMap.$clinit = () =>{};
  EnumMap.$loadModules();
  AbstractMap.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EnumMap;
 }
 
 /** @nodts */
 static $loadModules() {
  Enum = goog.module.get('java.lang.Enum$impl');
  EntrySet = goog.module.get('java.util.EnumMap.EntrySet$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Cloneable.$markImplementor(EnumMap);
$Util.$setClassMetadata(EnumMap, 'java.util.EnumMap');

exports = EnumMap;

//# sourceMappingURL=EnumMap.js.map
