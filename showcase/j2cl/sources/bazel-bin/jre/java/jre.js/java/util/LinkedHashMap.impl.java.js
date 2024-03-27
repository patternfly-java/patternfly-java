goog.module('java.util.LinkedHashMap$impl');

const HashMap = goog.require('java.util.HashMap$impl');
const Map = goog.require('java.util.Map$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ChainEntry = goog.forwardDeclare('java.util.LinkedHashMap.ChainEntry$impl');
let EntrySet = goog.forwardDeclare('java.util.LinkedHashMap.EntrySet$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template K, V
 * @extends {HashMap<K, V>}
 * @implements {Map<K, V>}
 */
class LinkedHashMap extends HashMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_accessOrder__java_util_LinkedHashMap_ = false;
  /**@type {ChainEntry<K, V>} @nodts*/
  this.f_head__java_util_LinkedHashMap_;
  /**@type {HashMap<K, ChainEntry<K, V>>} @nodts*/
  this.f_map__java_util_LinkedHashMap_;
 }
 //Factory method corresponding to constructor 'LinkedHashMap()'.
 /** @nodts @template K, V @return {!LinkedHashMap<K, V>} */
 static $create__() {
  LinkedHashMap.$clinit();
  let $instance = new LinkedHashMap();
  $instance.$ctor__java_util_LinkedHashMap__void();
  return $instance;
 }
 //Initialization from constructor 'LinkedHashMap()'.
 /** @nodts */
 $ctor__java_util_LinkedHashMap__void() {
  this.$ctor__java_util_HashMap__void();
  this.$init__void_$p_java_util_LinkedHashMap();
  this.m_resetChainEntries__void_$p_java_util_LinkedHashMap();
 }
 //Factory method corresponding to constructor 'LinkedHashMap(int)'.
 /** @nodts @template K, V @return {!LinkedHashMap<K, V>} */
 static $create__int(/** number */ ignored) {
  LinkedHashMap.$clinit();
  let $instance = new LinkedHashMap();
  $instance.$ctor__java_util_LinkedHashMap__int__void(ignored);
  return $instance;
 }
 //Initialization from constructor 'LinkedHashMap(int)'.
 /** @nodts */
 $ctor__java_util_LinkedHashMap__int__void(/** number */ ignored) {
  this.$ctor__java_util_LinkedHashMap__int__float__void(ignored, 0);
 }
 //Factory method corresponding to constructor 'LinkedHashMap(int, float)'.
 /** @nodts @template K, V @return {!LinkedHashMap<K, V>} */
 static $create__int__float(/** number */ ignored, /** number */ alsoIgnored) {
  LinkedHashMap.$clinit();
  let $instance = new LinkedHashMap();
  $instance.$ctor__java_util_LinkedHashMap__int__float__void(ignored, alsoIgnored);
  return $instance;
 }
 //Initialization from constructor 'LinkedHashMap(int, float)'.
 /** @nodts */
 $ctor__java_util_LinkedHashMap__int__float__void(/** number */ ignored, /** number */ alsoIgnored) {
  this.$ctor__java_util_HashMap__int__float__void(ignored, alsoIgnored);
  this.$init__void_$p_java_util_LinkedHashMap();
  this.m_resetChainEntries__void_$p_java_util_LinkedHashMap();
 }
 //Factory method corresponding to constructor 'LinkedHashMap(int, float, boolean)'.
 /** @nodts @template K, V @return {!LinkedHashMap<K, V>} */
 static $create__int__float__boolean(/** number */ ignored, /** number */ alsoIgnored, /** boolean */ accessOrder) {
  LinkedHashMap.$clinit();
  let $instance = new LinkedHashMap();
  $instance.$ctor__java_util_LinkedHashMap__int__float__boolean__void(ignored, alsoIgnored, accessOrder);
  return $instance;
 }
 //Initialization from constructor 'LinkedHashMap(int, float, boolean)'.
 /** @nodts */
 $ctor__java_util_LinkedHashMap__int__float__boolean__void(/** number */ ignored, /** number */ alsoIgnored, /** boolean */ accessOrder) {
  this.$ctor__java_util_HashMap__int__float__void(ignored, alsoIgnored);
  this.$init__void_$p_java_util_LinkedHashMap();
  this.f_accessOrder__java_util_LinkedHashMap_ = accessOrder;
  this.m_resetChainEntries__void_$p_java_util_LinkedHashMap();
 }
 //Factory method corresponding to constructor 'LinkedHashMap(Map)'.
 /** @nodts @template K, V @return {!LinkedHashMap<K, V>} */
 static $create__java_util_Map(/** Map<?, ?> */ toBeCopied) {
  LinkedHashMap.$clinit();
  let $instance = new LinkedHashMap();
  $instance.$ctor__java_util_LinkedHashMap__java_util_Map__void(toBeCopied);
  return $instance;
 }
 //Initialization from constructor 'LinkedHashMap(Map)'.
 /** @nodts */
 $ctor__java_util_LinkedHashMap__java_util_Map__void(/** Map<?, ?> */ toBeCopied) {
  this.$ctor__java_util_HashMap__void();
  this.$init__void_$p_java_util_LinkedHashMap();
  this.m_resetChainEntries__void_$p_java_util_LinkedHashMap();
  this.putAll(toBeCopied);
 }
 /** @override */
 clear() {
  this.f_map__java_util_LinkedHashMap_.clear();
  this.m_resetChainEntries__void_$p_java_util_LinkedHashMap();
 }
 /** @nodts */
 m_resetChainEntries__void_$p_java_util_LinkedHashMap() {
  this.f_head__java_util_LinkedHashMap_.f_prev__java_util_LinkedHashMap_ChainEntry_ = this.f_head__java_util_LinkedHashMap_;
  this.f_head__java_util_LinkedHashMap_.f_next__java_util_LinkedHashMap_ChainEntry_ = this.f_head__java_util_LinkedHashMap_;
 }
 /** @override @nodts @return {*} */
 m_clone__java_lang_Object() {
  return /**@type {!LinkedHashMap<K, V>}*/ (LinkedHashMap.$create__java_util_Map(this));
 }
 /** @override @return {boolean} */
 containsKey(/** * */ key) {
  return this.f_map__java_util_LinkedHashMap_.containsKey(key);
 }
 /** @override @return {boolean} */
 containsValue(/** * */ value) {
  let node = this.f_head__java_util_LinkedHashMap_.f_next__java_util_LinkedHashMap_ChainEntry_;
  while (!$Equality.$same(node, this.f_head__java_util_LinkedHashMap_)) {
   if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(node.m_getValue__java_lang_Object(), value)) {
    return true;
   }
   node = node.f_next__java_util_LinkedHashMap_ChainEntry_;
  }
  return false;
 }
 /** @override @nodts @return {Set<Entry<K, V>>} */
 m_entrySet__java_util_Set() {
  return /**@type {!EntrySet<K, V>}*/ (EntrySet.$create__java_util_LinkedHashMap(this));
 }
 /** @override @return {V} */
 get(/** * */ key) {
  let entry = /**@type {ChainEntry<K, V>}*/ ($Casts.$to(this.f_map__java_util_LinkedHashMap_.get(key), ChainEntry));
  if (!$Equality.$same(entry, null)) {
   this.m_recordAccess__java_util_LinkedHashMap_ChainEntry__void_$p_java_util_LinkedHashMap(entry);
   return entry.m_getValue__java_lang_Object();
  }
  return null;
 }
 /** @override @return {V} */
 put(/** K */ key, /** V */ value) {
  let old = /**@type {ChainEntry<K, V>}*/ ($Casts.$to(this.f_map__java_util_LinkedHashMap_.get(key), ChainEntry));
  if ($Equality.$same(old, null)) {
   let newEntry = /**@type {!ChainEntry<K, V>}*/ (ChainEntry.$create__java_util_LinkedHashMap__java_lang_Object__java_lang_Object(this, key, value));
   this.f_map__java_util_LinkedHashMap_.put(key, newEntry);
   newEntry.m_addToEnd__void();
   let eldest = this.f_head__java_util_LinkedHashMap_.f_next__java_util_LinkedHashMap_ChainEntry_;
   if (this.m_removeEldestEntry__java_util_Map_Entry__boolean(eldest)) {
    eldest.m_remove__void();
    this.f_map__java_util_LinkedHashMap_.remove(eldest.m_getKey__java_lang_Object());
   }
   return null;
  } else {
   let oldValue = old.m_setValue__java_lang_Object__java_lang_Object(value);
   this.m_recordAccess__java_util_LinkedHashMap_ChainEntry__void_$p_java_util_LinkedHashMap(old);
   return oldValue;
  }
 }
 /** @override @return {V} */
 remove(/** * */ key) {
  let entry = /**@type {ChainEntry<K, V>}*/ ($Casts.$to(this.f_map__java_util_LinkedHashMap_.remove(key), ChainEntry));
  if (!$Equality.$same(entry, null)) {
   entry.m_remove__void();
   return entry.m_getValue__java_lang_Object();
  }
  return null;
 }
 /** @override @return {number} */
 size() {
  return this.f_map__java_util_LinkedHashMap_.size();
 }
 /** @nodts @return {boolean} */
 m_removeEldestEntry__java_util_Map_Entry__boolean(/** Entry<K, V> */ eldest) {
  return false;
 }
 /** @nodts */
 m_recordAccess__java_util_LinkedHashMap_ChainEntry__void_$p_java_util_LinkedHashMap(/** ChainEntry<K, V> */ entry) {
  if (this.f_accessOrder__java_util_LinkedHashMap_) {
   entry.m_remove__void();
   entry.m_addToEnd__void();
  }
 }
 /** @private @nodts */
 $init__void_$p_java_util_LinkedHashMap() {
  this.f_head__java_util_LinkedHashMap_ = /**@type {!ChainEntry<K, V>}*/ (ChainEntry.$create__java_util_LinkedHashMap(this));
  this.f_map__java_util_LinkedHashMap_ = /**@type {!HashMap<K, ChainEntry<K, V>>}*/ (HashMap.$create__());
 }
 /** @nodts */
 static $clinit() {
  LinkedHashMap.$clinit = () =>{};
  LinkedHashMap.$loadModules();
  HashMap.$clinit();
  Map.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LinkedHashMap;
 }
 
 /** @nodts */
 static $loadModules() {
  ChainEntry = goog.module.get('java.util.LinkedHashMap.ChainEntry$impl');
  EntrySet = goog.module.get('java.util.LinkedHashMap.EntrySet$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Map.$markImplementor(LinkedHashMap);
$Util.$setClassMetadata(LinkedHashMap, 'java.util.LinkedHashMap');

exports = LinkedHashMap;

//# sourceMappingURL=LinkedHashMap.js.map
