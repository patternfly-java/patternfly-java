goog.module('java.util.Collections.UnmodifiableMap$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Map = goog.require('java.util.Map$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let UnmodifiableCollection = goog.forwardDeclare('java.util.Collections.UnmodifiableCollection$impl');
let UnmodifiableEntrySet = goog.forwardDeclare('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet$impl');
let UnmodifiableSet = goog.forwardDeclare('java.util.Collections.UnmodifiableSet$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template K, V
 * @implements {Map<K, V>}
 */
class UnmodifiableMap extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {UnmodifiableSet<Entry<K, V>>} @nodts*/
  this.f_entrySet__java_util_Collections_UnmodifiableMap_;
  /**@type {UnmodifiableSet<K>} @nodts*/
  this.f_keySet__java_util_Collections_UnmodifiableMap_;
  /**@type {Map<?, ?>} @nodts*/
  this.f_map__java_util_Collections_UnmodifiableMap_;
  /**@type {UnmodifiableCollection<V>} @nodts*/
  this.f_values__java_util_Collections_UnmodifiableMap_;
 }
 /** @nodts @template K, V @return {!UnmodifiableMap<K, V>} */
 static $create__java_util_Map(/** Map<?, ?> */ map) {
  UnmodifiableMap.$clinit();
  let $instance = new UnmodifiableMap();
  $instance.$ctor__java_util_Collections_UnmodifiableMap__java_util_Map__void(map);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableMap__java_util_Map__void(/** Map<?, ?> */ map) {
  this.$ctor__java_lang_Object__void();
  this.f_map__java_util_Collections_UnmodifiableMap_ = map;
 }
 /** @override */
 clear() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {boolean} */
 containsKey(/** * */ key) {
  return this.f_map__java_util_Collections_UnmodifiableMap_.containsKey(key);
 }
 /** @override @return {boolean} */
 containsValue(/** * */ val) {
  return this.f_map__java_util_Collections_UnmodifiableMap_.containsValue(val);
 }
 /** @override @nodts @return {Set<Entry<K, V>>} */
 m_entrySet__java_util_Set() {
  if ($Equality.$same(this.f_entrySet__java_util_Collections_UnmodifiableMap_, null)) {
   this.f_entrySet__java_util_Collections_UnmodifiableMap_ = /**@type {!UnmodifiableEntrySet<K, V>}*/ (UnmodifiableEntrySet.$create__java_util_Set(this.f_map__java_util_Collections_UnmodifiableMap_.m_entrySet__java_util_Set()));
  }
  return this.f_entrySet__java_util_Collections_UnmodifiableMap_;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return this.f_map__java_util_Collections_UnmodifiableMap_.equals(o);
 }
 /** @override @return {V} */
 get(/** * */ key) {
  return this.f_map__java_util_Collections_UnmodifiableMap_.get(key);
 }
 /** @override @return {number} */
 hashCode() {
  return $Objects.m_hashCode__java_lang_Object__int(this.f_map__java_util_Collections_UnmodifiableMap_);
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_map__java_util_Collections_UnmodifiableMap_.isEmpty();
 }
 /** @override @return {!Set<K>} */
 keySet() {
  if ($Equality.$same(this.f_keySet__java_util_Collections_UnmodifiableMap_, null)) {
   this.f_keySet__java_util_Collections_UnmodifiableMap_ = /**@type {!UnmodifiableSet<K>}*/ (UnmodifiableSet.$create__java_util_Set(this.f_map__java_util_Collections_UnmodifiableMap_.keySet()));
  }
  return this.f_keySet__java_util_Collections_UnmodifiableMap_;
 }
 /** @override @return {V} */
 put(/** K */ key, /** V */ value) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override */
 putAll(/** Map<?, ?> */ t) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {V} */
 remove(/** * */ key) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {number} */
 size() {
  return this.f_map__java_util_Collections_UnmodifiableMap_.size();
 }
 /** @override @return {?string} */
 toString() {
  return $Objects.m_toString__java_lang_Object__java_lang_String(this.f_map__java_util_Collections_UnmodifiableMap_);
 }
 /** @override @return {!Collection<V>} */
 values() {
  if ($Equality.$same(this.f_values__java_util_Collections_UnmodifiableMap_, null)) {
   this.f_values__java_util_Collections_UnmodifiableMap_ = /**@type {!UnmodifiableCollection<V>}*/ (UnmodifiableCollection.$create__java_util_Collection(this.f_map__java_util_Collections_UnmodifiableMap_.values()));
  }
  return this.f_values__java_util_Collections_UnmodifiableMap_;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {V} */
 m_compute__java_lang_Object__java_util_function_BiFunction__java_lang_Object(/** K */ arg0, /** BiFunction<?, ?, ?> */ arg1) {
  return Map.m_compute__$default__java_util_Map__java_lang_Object__java_util_function_BiFunction__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {V} */
 m_computeIfAbsent__java_lang_Object__java_util_function_Function__java_lang_Object(/** K */ arg0, /** j_u_function_Function<?, ?> */ arg1) {
  return Map.m_computeIfAbsent__$default__java_util_Map__java_lang_Object__java_util_function_Function__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {V} */
 m_computeIfPresent__java_lang_Object__java_util_function_BiFunction__java_lang_Object(/** K */ arg0, /** BiFunction<?, ?, ?> */ arg1) {
  return Map.m_computeIfPresent__$default__java_util_Map__java_lang_Object__java_util_function_BiFunction__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_BiConsumer__void(/** BiConsumer<?, ?> */ arg0) {
  Map.m_forEach__$default__java_util_Map__java_util_function_BiConsumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 getOrDefault(/** * */ arg0, /** V */ arg1) {
  return Map.m_getOrDefault__$default__java_util_Map__java_lang_Object__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {V} */
 m_merge__java_lang_Object__java_lang_Object__java_util_function_BiFunction__java_lang_Object(/** K */ arg0, /** V */ arg1, /** BiFunction<?, ?, ?> */ arg2) {
  return Map.m_merge__$default__java_util_Map__java_lang_Object__java_lang_Object__java_util_function_BiFunction__java_lang_Object(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 putIfAbsent(/** K */ arg0, /** V */ arg1) {
  return Map.m_putIfAbsent__$default__java_util_Map__java_lang_Object__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_remove__java_lang_Object__java_lang_Object__boolean(/** * */ arg0, /** * */ arg1) {
  return Map.m_remove__$default__java_util_Map__java_lang_Object__java_lang_Object__boolean(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 replace(/** K */ arg0, /** V */ arg1) {
  return Map.m_replace__$default__java_util_Map__java_lang_Object__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_replace__java_lang_Object__java_lang_Object__java_lang_Object__boolean(/** K */ arg0, /** V */ arg1, /** V */ arg2) {
  return Map.m_replace__$default__java_util_Map__java_lang_Object__java_lang_Object__java_lang_Object__boolean(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_replaceAll__java_util_function_BiFunction__void(/** BiFunction<?, ?, ?> */ arg0) {
  Map.m_replaceAll__$default__java_util_Map__java_util_function_BiFunction__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableMap.$clinit = () =>{};
  UnmodifiableMap.$loadModules();
  j_l_Object.$clinit();
  Map.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableMap;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  UnmodifiableCollection = goog.module.get('java.util.Collections.UnmodifiableCollection$impl');
  UnmodifiableEntrySet = goog.module.get('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet$impl');
  UnmodifiableSet = goog.module.get('java.util.Collections.UnmodifiableSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Map.$markImplementor(UnmodifiableMap);
$Util.$setClassMetadata(UnmodifiableMap, 'java.util.Collections$UnmodifiableMap');

exports = UnmodifiableMap;

//# sourceMappingURL=Collections$UnmodifiableMap.js.map
