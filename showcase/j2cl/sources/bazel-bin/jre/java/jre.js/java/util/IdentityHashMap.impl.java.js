goog.module('java.util.IdentityHashMap$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Cloneable = goog.require('java.lang.Cloneable$impl');
const AbstractHashMap = goog.require('java.util.AbstractHashMap$impl');
const Map = goog.require('java.util.Map$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let System = goog.forwardDeclare('java.lang.System$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template K, V
 * @extends {AbstractHashMap<K, V>}
 * @implements {Map<K, V>}
 * @implements {Cloneable}
 * @implements {Serializable}
 */
class IdentityHashMap extends AbstractHashMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {K} @nodts*/
  this.f_exposeKey__java_util_IdentityHashMap_;
  /**@type {V} @nodts*/
  this.f_exposeValue__java_util_IdentityHashMap_;
 }
 //Factory method corresponding to constructor 'IdentityHashMap()'.
 /** @nodts @template K, V @return {!IdentityHashMap<K, V>} */
 static $create__() {
  IdentityHashMap.$clinit();
  let $instance = new IdentityHashMap();
  $instance.$ctor__java_util_IdentityHashMap__void();
  return $instance;
 }
 //Initialization from constructor 'IdentityHashMap()'.
 /** @nodts */
 $ctor__java_util_IdentityHashMap__void() {
  this.$ctor__java_util_AbstractHashMap__void();
 }
 //Factory method corresponding to constructor 'IdentityHashMap(int)'.
 /** @nodts @template K, V @return {!IdentityHashMap<K, V>} */
 static $create__int(/** number */ ignored) {
  IdentityHashMap.$clinit();
  let $instance = new IdentityHashMap();
  $instance.$ctor__java_util_IdentityHashMap__int__void(ignored);
  return $instance;
 }
 //Initialization from constructor 'IdentityHashMap(int)'.
 /** @nodts */
 $ctor__java_util_IdentityHashMap__int__void(/** number */ ignored) {
  this.$ctor__java_util_AbstractHashMap__int__void(ignored);
 }
 //Factory method corresponding to constructor 'IdentityHashMap(Map)'.
 /** @nodts @template K, V @return {!IdentityHashMap<K, V>} */
 static $create__java_util_Map(/** Map<?, ?> */ toBeCopied) {
  IdentityHashMap.$clinit();
  let $instance = new IdentityHashMap();
  $instance.$ctor__java_util_IdentityHashMap__java_util_Map__void(toBeCopied);
  return $instance;
 }
 //Initialization from constructor 'IdentityHashMap(Map)'.
 /** @nodts */
 $ctor__java_util_IdentityHashMap__java_util_Map__void(/** Map<?, ?> */ toBeCopied) {
  this.$ctor__java_util_AbstractHashMap__java_util_Map__void(toBeCopied);
 }
 /** @nodts @return {*} */
 m_clone__java_lang_Object() {
  return /**@type {!IdentityHashMap<K, V>}*/ (IdentityHashMap.$create__java_util_Map(this));
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
    let otherKey = entry.m_getKey__java_lang_Object();
    let otherValue = entry.m_getValue__java_lang_Object();
    if (!this.containsKey(otherKey)) {
     return false;
    }
    if (!$Equality.$same(otherValue, this.get(otherKey))) {
     return false;
    }
   }
  }
  return true;
 }
 /** @override @return {number} */
 hashCode() {
  let hashCode = 0;
  for (let $iterator = this.m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    hashCode = hashCode + System.m_identityHashCode__java_lang_Object__int(entry.m_getKey__java_lang_Object()) | 0;
    hashCode = hashCode + System.m_identityHashCode__java_lang_Object__int(entry.m_getValue__java_lang_Object()) | 0;
   }
  }
  return hashCode;
 }
 /** @override @nodts @return {boolean} */
 m_equals__java_lang_Object__java_lang_Object__boolean_$pp_java_util(/** * */ value1, /** * */ value2) {
  return $Equality.$same(value1, value2);
 }
 /** @override @nodts @return {number} */
 m_getHashCode__java_lang_Object__int_$pp_java_util(/** * */ key) {
  return System.m_identityHashCode__java_lang_Object__int(key);
 }
 /** @nodts */
 static $clinit() {
  IdentityHashMap.$clinit = () =>{};
  IdentityHashMap.$loadModules();
  AbstractHashMap.$clinit();
  Map.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IdentityHashMap;
 }
 
 /** @nodts */
 static $loadModules() {
  System = goog.module.get('java.lang.System$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Map.$markImplementor(IdentityHashMap);
Cloneable.$markImplementor(IdentityHashMap);
Serializable.$markImplementor(IdentityHashMap);
$Util.$setClassMetadata(IdentityHashMap, 'java.util.IdentityHashMap');

exports = IdentityHashMap;

//# sourceMappingURL=IdentityHashMap.js.map
