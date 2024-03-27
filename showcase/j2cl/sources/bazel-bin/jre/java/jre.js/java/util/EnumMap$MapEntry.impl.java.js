goog.module('java.util.EnumMap.MapEntry$impl');

const AbstractMapEntry = goog.require('java.util.AbstractMapEntry$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let EnumMap = goog.forwardDeclare('java.util.EnumMap$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');

/**
 * @template K, V
 * @extends {AbstractMapEntry<K, V>}
 */
class MapEntry extends AbstractMapEntry {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {EnumMap<K, V>} @nodts*/
  this.$outer_this__java_util_EnumMap_MapEntry;
  /**@type {K} @nodts*/
  this.f_key__java_util_EnumMap_MapEntry_;
 }
 /** @nodts @template K, V @return {!MapEntry<K, V>} */
 static $create__java_util_EnumMap__java_lang_Enum(/** EnumMap<K, V> */ $outer_this, /** K */ key) {
  MapEntry.$clinit();
  let $instance = new MapEntry();
  $instance.$ctor__java_util_EnumMap_MapEntry__java_util_EnumMap__java_lang_Enum__void($outer_this, key);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_EnumMap_MapEntry__java_util_EnumMap__java_lang_Enum__void(/** EnumMap<K, V> */ $outer_this, /** K */ key) {
  this.$outer_this__java_util_EnumMap_MapEntry = $outer_this;
  this.$ctor__java_util_AbstractMapEntry__void();
  this.f_key__java_util_EnumMap_MapEntry_ = key;
 }
 /** @nodts @return {K} */
 m_getKey__java_lang_Enum() {
  return this.f_key__java_util_EnumMap_MapEntry_;
 }
 /** @override @nodts @return {V} */
 m_getValue__java_lang_Object() {
  return this.$outer_this__java_util_EnumMap_MapEntry.f_values__java_util_EnumMap_[/**@type {!Enum<K>}*/ (this.f_key__java_util_EnumMap_MapEntry_).ordinal()];
 }
 /** @override @nodts @return {V} */
 m_setValue__java_lang_Object__java_lang_Object(/** V */ value) {
  return ArrayHelper.m_setAt__arrayOf_java_lang_Object__int__java_lang_Object__java_lang_Object(this.$outer_this__java_util_EnumMap_MapEntry.f_values__java_util_EnumMap_, /**@type {!Enum<K>}*/ (this.f_key__java_util_EnumMap_MapEntry_).ordinal(), value);
 }
 //Bridge method.
 /** @final @override @nodts @return {K} */
 m_getKey__java_lang_Object() {
  return this.m_getKey__java_lang_Enum();
 }
 /** @nodts */
 static $clinit() {
  MapEntry.$clinit = () =>{};
  MapEntry.$loadModules();
  AbstractMapEntry.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MapEntry;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
 }
}
$Util.$setClassMetadata(MapEntry, 'java.util.EnumMap$MapEntry');

exports = MapEntry;

//# sourceMappingURL=EnumMap$MapEntry.js.map
