goog.module('java.util.AbstractHashMap$impl');

const AbstractMap = goog.require('java.util.AbstractMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let EntrySet = goog.forwardDeclare('java.util.AbstractHashMap.EntrySet$impl');
let InternalHashCodeMap = goog.forwardDeclare('java.util.InternalHashCodeMap$impl');
let InternalStringMap = goog.forwardDeclare('java.util.InternalStringMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template K, V
 * @extends {AbstractMap<K, V>}
 */
class AbstractHashMap extends AbstractMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {InternalHashCodeMap<K, V>} @nodts*/
  this.f_hashCodeMap__java_util_AbstractHashMap_;
  /**@type {InternalStringMap<K, V>} @nodts*/
  this.f_stringMap__java_util_AbstractHashMap_;
  /**@type {number} @nodts*/
  this.f_modCount__java_util_AbstractHashMap = 0;
 }
 //Initialization from constructor 'AbstractHashMap()'.
 /** @nodts */
 $ctor__java_util_AbstractHashMap__void() {
  this.$ctor__java_util_AbstractMap__void();
  this.m_reset__void_$p_java_util_AbstractHashMap();
 }
 //Initialization from constructor 'AbstractHashMap(int)'.
 /** @nodts */
 $ctor__java_util_AbstractHashMap__int__void(/** number */ ignored) {
  this.$ctor__java_util_AbstractHashMap__int__float__void(ignored, 0);
 }
 //Initialization from constructor 'AbstractHashMap(int, float)'.
 /** @nodts */
 $ctor__java_util_AbstractHashMap__int__float__void(/** number */ ignored, /** number */ alsoIgnored) {
  this.$ctor__java_util_AbstractMap__void();
  InternalPreconditions.m_checkArgument__boolean__java_lang_Object__void(ignored >= 0, 'Negative initial capacity');
  InternalPreconditions.m_checkArgument__boolean__java_lang_Object__void(alsoIgnored >= 0, 'Non-positive load factor');
  this.m_reset__void_$p_java_util_AbstractHashMap();
 }
 //Initialization from constructor 'AbstractHashMap(Map)'.
 /** @nodts */
 $ctor__java_util_AbstractHashMap__java_util_Map__void(/** Map<?, ?> */ toBeCopied) {
  this.$ctor__java_util_AbstractMap__void();
  this.m_reset__void_$p_java_util_AbstractHashMap();
  this.putAll(toBeCopied);
 }
 /** @override */
 clear() {
  this.m_reset__void_$p_java_util_AbstractHashMap();
 }
 /** @nodts */
 m_reset__void_$p_java_util_AbstractHashMap() {
  this.f_hashCodeMap__java_util_AbstractHashMap_ = /**@type {!InternalHashCodeMap<K, V>}*/ (InternalHashCodeMap.$create__java_util_AbstractHashMap(this));
  this.f_stringMap__java_util_AbstractHashMap_ = /**@type {!InternalStringMap<K, V>}*/ (InternalStringMap.$create__java_util_AbstractHashMap(this));
  this.m_structureChanged__void_$pp_java_util();
 }
 /** @nodts */
 m_structureChanged__void_$pp_java_util() {
  if (!InternalPreconditions.m_isApiChecked__boolean()) {
   return;
  }
  this.f_modCount__java_util_AbstractHashMap = this.f_modCount__java_util_AbstractHashMap + 1 | 0;
 }
 /** @override @return {boolean} */
 containsKey(/** * */ key) {
  return j_l_String.$isInstance(key) ? this.f_stringMap__java_util_AbstractHashMap_.m_contains__java_lang_String__boolean(/**@type {?string}*/ (JsUtils.uncheckedCast(key))) : !$Equality.$same(this.f_hashCodeMap__java_util_AbstractHashMap_.m_getEntry__java_lang_Object__java_util_Map_Entry(key), null);
 }
 /** @override @return {boolean} */
 containsValue(/** * */ value) {
  return this.m_containsValue__java_lang_Object__java_lang_Iterable__boolean_$p_java_util_AbstractHashMap(value, this.f_stringMap__java_util_AbstractHashMap_) || this.m_containsValue__java_lang_Object__java_lang_Iterable__boolean_$p_java_util_AbstractHashMap(value, this.f_hashCodeMap__java_util_AbstractHashMap_);
 }
 /** @nodts @return {boolean} */
 m_containsValue__java_lang_Object__java_lang_Iterable__boolean_$p_java_util_AbstractHashMap(/** * */ value, /** Iterable<Entry<K, V>> */ entries) {
  for (let $iterator = entries.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    if (this.m_equals__java_lang_Object__java_lang_Object__boolean_$pp_java_util(value, entry.m_getValue__java_lang_Object())) {
     return true;
    }
   }
  }
  return false;
 }
 /** @override @nodts @return {Set<Entry<K, V>>} */
 m_entrySet__java_util_Set() {
  return /**@type {!EntrySet<K, V>}*/ (EntrySet.$create__java_util_AbstractHashMap(this));
 }
 /** @override @return {V} */
 get(/** * */ key) {
  return j_l_String.$isInstance(key) ? this.f_stringMap__java_util_AbstractHashMap_.m_get__java_lang_String__java_lang_Object(/**@type {?string}*/ (JsUtils.uncheckedCast(key))) : AbstractMap.m_getEntryValueOrNull__java_util_Map_Entry__java_lang_Object(this.f_hashCodeMap__java_util_AbstractHashMap_.m_getEntry__java_lang_Object__java_util_Map_Entry(key));
 }
 /** @override @return {V} */
 put(/** K */ key, /** V */ value) {
  return j_l_String.$isInstance(key) ? this.f_stringMap__java_util_AbstractHashMap_.m_put__java_lang_String__java_lang_Object__java_lang_Object(/**@type {?string}*/ (JsUtils.uncheckedCast(key)), value) : this.f_hashCodeMap__java_util_AbstractHashMap_.m_put__java_lang_Object__java_lang_Object__java_lang_Object(key, value);
 }
 /** @override @return {V} */
 remove(/** * */ key) {
  return j_l_String.$isInstance(key) ? this.f_stringMap__java_util_AbstractHashMap_.m_remove__java_lang_String__java_lang_Object(/**@type {?string}*/ (JsUtils.uncheckedCast(key))) : this.f_hashCodeMap__java_util_AbstractHashMap_.m_remove__java_lang_Object__java_lang_Object(key);
 }
 /** @override @return {number} */
 size() {
  return this.f_hashCodeMap__java_util_AbstractHashMap_.m_size__int() + this.f_stringMap__java_util_AbstractHashMap_.m_size__int() | 0;
 }
 /** @abstract @nodts @return {boolean} */
 m_equals__java_lang_Object__java_lang_Object__boolean_$pp_java_util(/** * */ value1, /** * */ value2) {}
 /** @abstract @nodts @return {number} */
 m_getHashCode__java_lang_Object__int_$pp_java_util(/** * */ key) {}
 /** @nodts */
 static $clinit() {
  AbstractHashMap.$clinit = () =>{};
  AbstractHashMap.$loadModules();
  AbstractMap.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractHashMap;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  EntrySet = goog.module.get('java.util.AbstractHashMap.EntrySet$impl');
  InternalHashCodeMap = goog.module.get('java.util.InternalHashCodeMap$impl');
  InternalStringMap = goog.module.get('java.util.InternalStringMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractHashMap, 'java.util.AbstractHashMap');

exports = AbstractHashMap;

//# sourceMappingURL=AbstractHashMap.js.map
