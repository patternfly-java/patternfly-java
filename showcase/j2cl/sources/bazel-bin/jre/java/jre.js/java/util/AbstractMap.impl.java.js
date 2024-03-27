goog.module('java.util.AbstractMap$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Map = goog.require('java.util.Map$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let $1 = goog.forwardDeclare('java.util.AbstractMap.$1$impl');
let $2 = goog.forwardDeclare('java.util.AbstractMap.$2$impl');
let SimpleEntry = goog.forwardDeclare('java.util.AbstractMap.SimpleEntry$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let StringJoiner = goog.forwardDeclare('java.util.StringJoiner$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template K, V
 * @implements {Map<K, V>}
 */
class AbstractMap extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_AbstractMap__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override */
 clear() {
  this.m_entrySet__java_util_Set().clear();
 }
 /** @override @return {boolean} */
 containsKey(/** * */ key) {
  return !$Equality.$same(this.m_implFindEntry__java_lang_Object__boolean__java_util_Map_Entry_$p_java_util_AbstractMap(key, false), null);
 }
 /** @override @return {boolean} */
 containsValue(/** * */ value) {
  for (let $iterator = this.m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    let v = entry.m_getValue__java_lang_Object();
    if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(value, v)) {
     return true;
    }
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_containsEntry__java_util_Map_Entry__boolean_$pp_java_util(/** Entry<?, ?> */ entry) {
  let key = entry.m_getKey__java_lang_Object();
  let value = entry.m_getValue__java_lang_Object();
  let ourValue = this.get(key);
  if (!Objects.m_equals__java_lang_Object__java_lang_Object__boolean(value, ourValue)) {
   return false;
  }
  if ($Equality.$same(ourValue, null) && !this.containsKey(key)) {
   return false;
  }
  return true;
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  }
  if (!Map.$isInstance(obj)) {
   return false;
  }
  let otherMap = /**@type {Map<*, *>}*/ ($Casts.$to(obj, Map));
  if (this.size() != otherMap.size()) {
   return false;
  }
  for (let $iterator = otherMap.m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<*, *>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    if (!this.m_containsEntry__java_util_Map_Entry__boolean_$pp_java_util(entry)) {
     return false;
    }
   }
  }
  return true;
 }
 /** @override @return {V} */
 get(/** * */ key) {
  return AbstractMap.m_getEntryValueOrNull__java_util_Map_Entry__java_lang_Object(this.m_implFindEntry__java_lang_Object__boolean__java_util_Map_Entry_$p_java_util_AbstractMap(key, false));
 }
 /** @override @return {number} */
 hashCode() {
  return Collections.m_hashCode__java_lang_Iterable__int(this.m_entrySet__java_util_Set());
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.size() == 0;
 }
 /** @override @return {!Set<K>} */
 keySet() {
  return /**@type {!$1<K, V>}*/ ($1.$create__java_util_AbstractMap(this));
 }
 /** @override @return {V} */
 put(/** K */ key, /** V */ value) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String('Put not supported on this map'));
 }
 /** @override */
 putAll(/** Map<?, ?> */ map) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(map);
  for (let $iterator = map.m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {Entry<*, *>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    this.put(e.m_getKey__java_lang_Object(), e.m_getValue__java_lang_Object());
   }
  }
 }
 /** @override @return {V} */
 remove(/** * */ key) {
  return AbstractMap.m_getEntryValueOrNull__java_util_Map_Entry__java_lang_Object(this.m_implFindEntry__java_lang_Object__boolean__java_util_Map_Entry_$p_java_util_AbstractMap(key, true));
 }
 /** @override @return {number} */
 size() {
  return this.m_entrySet__java_util_Set().size();
 }
 /** @override @return {?string} */
 toString() {
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '{', '}');
  for (let $iterator = this.m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(this.m_toString__java_util_Map_Entry__java_lang_String_$p_java_util_AbstractMap(entry));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 m_toString__java_util_Map_Entry__java_lang_String_$p_java_util_AbstractMap(/** Entry<K, V> */ entry) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_toString__java_lang_Object__java_lang_String_$p_java_util_AbstractMap(entry.m_getKey__java_lang_Object())) + '=' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_toString__java_lang_Object__java_lang_String_$p_java_util_AbstractMap(entry.m_getValue__java_lang_Object()));
 }
 /** @nodts @return {?string} */
 m_toString__java_lang_Object__java_lang_String_$p_java_util_AbstractMap(/** * */ o) {
  return $Equality.$same(o, this) ? '(this Map)' : j_l_String.m_valueOf__java_lang_Object__java_lang_String(o);
 }
 /** @override @return {!Collection<V>} */
 values() {
  return /**@type {!$2<K, V>}*/ ($2.$create__java_util_AbstractMap(this));
 }
 /** @nodts @template K_1, V_1 @return {K_1} */
 static m_getEntryKeyOrNull__java_util_Map_Entry__java_lang_Object(/** Entry<K_1, V_1> */ entry) {
  AbstractMap.$clinit();
  return $Equality.$same(entry, null) ? null : entry.m_getKey__java_lang_Object();
 }
 /** @nodts @template K_1, V_1 @return {V_1} */
 static m_getEntryValueOrNull__java_util_Map_Entry__java_lang_Object(/** Entry<K_1, V_1> */ entry) {
  AbstractMap.$clinit();
  return $Equality.$same(entry, null) ? null : entry.m_getValue__java_lang_Object();
 }
 /** @nodts @return {Entry<K, V>} */
 m_implFindEntry__java_lang_Object__boolean__java_util_Map_Entry_$p_java_util_AbstractMap(/** * */ key, /** boolean */ remove) {
  for (let iter = this.m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); iter.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<K, V>}*/ ($Casts.$to(iter.m_next__java_lang_Object(), Entry));
   let k = entry.m_getKey__java_lang_Object();
   if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(key, k)) {
    if (remove) {
     entry = /**@type {!SimpleEntry<K, V>}*/ (SimpleEntry.$create__java_lang_Object__java_lang_Object(entry.m_getKey__java_lang_Object(), entry.m_getValue__java_lang_Object()));
     iter.m_remove__void();
    }
    return entry;
   }
  }
  return null;
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
  AbstractMap.$clinit = () =>{};
  AbstractMap.$loadModules();
  j_l_Object.$clinit();
  Map.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractMap;
 }
 /** @abstract @override @nodts @return {Set<Entry<K, V>>} */
 m_entrySet__java_util_Set() {}
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $1 = goog.module.get('java.util.AbstractMap.$1$impl');
  $2 = goog.module.get('java.util.AbstractMap.$2$impl');
  SimpleEntry = goog.module.get('java.util.AbstractMap.SimpleEntry$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  StringJoiner = goog.module.get('java.util.StringJoiner$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Map.$markImplementor(AbstractMap);
$Util.$setClassMetadata(AbstractMap, 'java.util.AbstractMap');

exports = AbstractMap;

//# sourceMappingURL=AbstractMap.js.map
