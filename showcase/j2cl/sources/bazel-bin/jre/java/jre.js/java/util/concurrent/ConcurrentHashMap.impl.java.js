goog.module('java.util.concurrent.ConcurrentHashMap$impl');

const AbstractMap = goog.require('java.util.AbstractMap$impl');
const ConcurrentMap = goog.require('java.util.concurrent.ConcurrentMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Enumeration = goog.forwardDeclare('java.util.Enumeration$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template K, V
 * @extends {AbstractMap<K, V>}
 * @implements {ConcurrentMap<K, V>}
 */
class ConcurrentHashMap extends AbstractMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<K, V>} @nodts*/
  this.f_backingMap__java_util_concurrent_ConcurrentHashMap_;
 }
 //Factory method corresponding to constructor 'ConcurrentHashMap()'.
 /** @nodts @template K, V @return {!ConcurrentHashMap<K, V>} */
 static $create__() {
  ConcurrentHashMap.$clinit();
  let $instance = new ConcurrentHashMap();
  $instance.$ctor__java_util_concurrent_ConcurrentHashMap__void();
  return $instance;
 }
 //Initialization from constructor 'ConcurrentHashMap()'.
 /** @nodts */
 $ctor__java_util_concurrent_ConcurrentHashMap__void() {
  this.$ctor__java_util_AbstractMap__void();
  this.f_backingMap__java_util_concurrent_ConcurrentHashMap_ = /**@type {!HashMap<K, V>}*/ (HashMap.$create__());
 }
 //Factory method corresponding to constructor 'ConcurrentHashMap(int)'.
 /** @nodts @template K, V @return {!ConcurrentHashMap<K, V>} */
 static $create__int(/** number */ initialCapacity) {
  ConcurrentHashMap.$clinit();
  let $instance = new ConcurrentHashMap();
  $instance.$ctor__java_util_concurrent_ConcurrentHashMap__int__void(initialCapacity);
  return $instance;
 }
 //Initialization from constructor 'ConcurrentHashMap(int)'.
 /** @nodts */
 $ctor__java_util_concurrent_ConcurrentHashMap__int__void(/** number */ initialCapacity) {
  this.$ctor__java_util_AbstractMap__void();
  this.f_backingMap__java_util_concurrent_ConcurrentHashMap_ = /**@type {!HashMap<K, V>}*/ (HashMap.$create__int(initialCapacity));
 }
 //Factory method corresponding to constructor 'ConcurrentHashMap(int, float)'.
 /** @nodts @template K, V @return {!ConcurrentHashMap<K, V>} */
 static $create__int__float(/** number */ initialCapacity, /** number */ loadFactor) {
  ConcurrentHashMap.$clinit();
  let $instance = new ConcurrentHashMap();
  $instance.$ctor__java_util_concurrent_ConcurrentHashMap__int__float__void(initialCapacity, loadFactor);
  return $instance;
 }
 //Initialization from constructor 'ConcurrentHashMap(int, float)'.
 /** @nodts */
 $ctor__java_util_concurrent_ConcurrentHashMap__int__float__void(/** number */ initialCapacity, /** number */ loadFactor) {
  this.$ctor__java_util_AbstractMap__void();
  this.f_backingMap__java_util_concurrent_ConcurrentHashMap_ = /**@type {!HashMap<K, V>}*/ (HashMap.$create__int__float(initialCapacity, loadFactor));
 }
 //Factory method corresponding to constructor 'ConcurrentHashMap(Map)'.
 /** @nodts @template K, V @return {!ConcurrentHashMap<K, V>} */
 static $create__java_util_Map(/** Map<?, ?> */ t) {
  ConcurrentHashMap.$clinit();
  let $instance = new ConcurrentHashMap();
  $instance.$ctor__java_util_concurrent_ConcurrentHashMap__java_util_Map__void(t);
  return $instance;
 }
 //Initialization from constructor 'ConcurrentHashMap(Map)'.
 /** @nodts */
 $ctor__java_util_concurrent_ConcurrentHashMap__java_util_Map__void(/** Map<?, ?> */ t) {
  this.$ctor__java_util_AbstractMap__void();
  this.f_backingMap__java_util_concurrent_ConcurrentHashMap_ = /**@type {!HashMap<K, V>}*/ (HashMap.$create__java_util_Map(t));
 }
 /** @override @return {V} */
 putIfAbsent(/** K */ key, /** V */ value) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(key);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(value);
  return this.f_backingMap__java_util_concurrent_ConcurrentHashMap_.putIfAbsent(key, value);
 }
 /** @override @nodts @return {boolean} */
 m_remove__java_lang_Object__java_lang_Object__boolean(/** * */ key, /** * */ oldValue) {
  let mapValue = this.get(key);
  if (!$Equality.$same(mapValue, null) && $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(mapValue, oldValue)) {
   this.remove(key);
   return true;
  } else {
   return false;
  }
 }
 /** @override @nodts @return {boolean} */
 m_replace__java_lang_Object__java_lang_Object__java_lang_Object__boolean(/** K */ key, /** V */ oldValue, /** V */ newValue) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(oldValue);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(newValue);
  let mapValue = this.get(key);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object__boolean(oldValue, mapValue)) {
   this.put(key, newValue);
   return true;
  } else {
   return false;
  }
 }
 /** @override @return {V} */
 replace(/** K */ key, /** V */ value) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(value);
  if (this.containsKey(key)) {
   return this.put(key, value);
  } else {
   return null;
  }
 }
 /** @override @return {boolean} */
 containsKey(/** * */ key) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(key);
  return this.f_backingMap__java_util_concurrent_ConcurrentHashMap_.containsKey(key);
 }
 /** @override @return {V} */
 get(/** * */ key) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(key);
  return this.f_backingMap__java_util_concurrent_ConcurrentHashMap_.get(key);
 }
 /** @override @return {V} */
 put(/** K */ key, /** V */ value) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(key);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(value);
  return this.f_backingMap__java_util_concurrent_ConcurrentHashMap_.put(key, value);
 }
 /** @override @return {boolean} */
 containsValue(/** * */ value) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(value);
  return this.f_backingMap__java_util_concurrent_ConcurrentHashMap_.containsValue(value);
 }
 /** @override @return {V} */
 remove(/** * */ key) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(key);
  return this.f_backingMap__java_util_concurrent_ConcurrentHashMap_.remove(key);
 }
 /** @override @nodts @return {Set<Entry<K, V>>} */
 m_entrySet__java_util_Set() {
  return this.f_backingMap__java_util_concurrent_ConcurrentHashMap_.m_entrySet__java_util_Set();
 }
 /** @nodts @return {boolean} */
 m_contains__java_lang_Object__boolean(/** * */ value) {
  return this.containsValue(value);
 }
 /** @nodts @return {Enumeration<V>} */
 m_elements__java_util_Enumeration() {
  return /**@type {Enumeration<V>}*/ (Collections.m_enumeration__java_util_Collection__java_util_Enumeration(this.values()));
 }
 /** @nodts @return {Enumeration<K>} */
 m_keys__java_util_Enumeration() {
  return /**@type {Enumeration<K>}*/ (Collections.m_enumeration__java_util_Collection__java_util_Enumeration(this.keySet()));
 }
 /** @nodts @template T @return {Set<T>} */
 static m_newKeySet__java_util_Set() {
  ConcurrentHashMap.$clinit();
  return /**@type {!HashSet<T>}*/ (HashSet.$create__());
 }
 /** @nodts */
 static $clinit() {
  ConcurrentHashMap.$clinit = () =>{};
  ConcurrentHashMap.$loadModules();
  AbstractMap.$clinit();
  Map.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConcurrentHashMap;
 }
 
 /** @nodts */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Map = goog.module.get('java.util.Map$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
ConcurrentMap.$markImplementor(ConcurrentHashMap);
$Util.$setClassMetadata(ConcurrentHashMap, 'java.util.concurrent.ConcurrentHashMap');

exports = ConcurrentHashMap;

//# sourceMappingURL=ConcurrentHashMap.js.map
