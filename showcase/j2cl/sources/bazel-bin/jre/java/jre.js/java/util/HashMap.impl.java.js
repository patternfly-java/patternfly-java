goog.module('java.util.HashMap$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Cloneable = goog.require('java.lang.Cloneable$impl');
const AbstractHashMap = goog.require('java.util.AbstractHashMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Map = goog.forwardDeclare('java.util.Map$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template K, V
 * @extends {AbstractHashMap<K, V>}
 * @implements {Cloneable}
 * @implements {Serializable}
 */
class HashMap extends AbstractHashMap {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {K} @nodts*/
  this.f_exposeKey__java_util_HashMap_;
  /**@type {V} @nodts*/
  this.f_exposeValue__java_util_HashMap_;
 }
 //Factory method corresponding to constructor 'HashMap()'.
 /** @nodts @template K, V @return {!HashMap<K, V>} */
 static $create__() {
  HashMap.$clinit();
  let $instance = new HashMap();
  $instance.$ctor__java_util_HashMap__void();
  return $instance;
 }
 //Initialization from constructor 'HashMap()'.
 /** @nodts */
 $ctor__java_util_HashMap__void() {
  this.$ctor__java_util_AbstractHashMap__void();
 }
 //Factory method corresponding to constructor 'HashMap(int)'.
 /** @nodts @template K, V @return {!HashMap<K, V>} */
 static $create__int(/** number */ ignored) {
  HashMap.$clinit();
  let $instance = new HashMap();
  $instance.$ctor__java_util_HashMap__int__void(ignored);
  return $instance;
 }
 //Initialization from constructor 'HashMap(int)'.
 /** @nodts */
 $ctor__java_util_HashMap__int__void(/** number */ ignored) {
  this.$ctor__java_util_AbstractHashMap__int__void(ignored);
 }
 //Factory method corresponding to constructor 'HashMap(int, float)'.
 /** @nodts @template K, V @return {!HashMap<K, V>} */
 static $create__int__float(/** number */ ignored, /** number */ alsoIgnored) {
  HashMap.$clinit();
  let $instance = new HashMap();
  $instance.$ctor__java_util_HashMap__int__float__void(ignored, alsoIgnored);
  return $instance;
 }
 //Initialization from constructor 'HashMap(int, float)'.
 /** @nodts */
 $ctor__java_util_HashMap__int__float__void(/** number */ ignored, /** number */ alsoIgnored) {
  this.$ctor__java_util_AbstractHashMap__int__float__void(ignored, alsoIgnored);
 }
 //Factory method corresponding to constructor 'HashMap(Map)'.
 /** @nodts @template K, V @return {!HashMap<K, V>} */
 static $create__java_util_Map(/** Map<?, ?> */ toBeCopied) {
  HashMap.$clinit();
  let $instance = new HashMap();
  $instance.$ctor__java_util_HashMap__java_util_Map__void(toBeCopied);
  return $instance;
 }
 //Initialization from constructor 'HashMap(Map)'.
 /** @nodts */
 $ctor__java_util_HashMap__java_util_Map__void(/** Map<?, ?> */ toBeCopied) {
  this.$ctor__java_util_AbstractHashMap__java_util_Map__void(toBeCopied);
 }
 /** @nodts @return {*} */
 m_clone__java_lang_Object() {
  return /**@type {!HashMap<K, V>}*/ (HashMap.$create__java_util_Map(this));
 }
 /** @override @nodts @return {boolean} */
 m_equals__java_lang_Object__java_lang_Object__boolean_$pp_java_util(/** * */ value1, /** * */ value2) {
  return Objects.m_equals__java_lang_Object__java_lang_Object__boolean(value1, value2);
 }
 /** @override @nodts @return {number} */
 m_getHashCode__java_lang_Object__int_$pp_java_util(/** * */ key) {
  if ($Equality.$same(key, null)) {
   return 0;
  }
  return $Objects.m_hashCode__java_lang_Object__int(key);
 }
 /** @nodts */
 static $clinit() {
  HashMap.$clinit = () =>{};
  HashMap.$loadModules();
  AbstractHashMap.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HashMap;
 }
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Cloneable.$markImplementor(HashMap);
Serializable.$markImplementor(HashMap);
$Util.$setClassMetadata(HashMap, 'java.util.HashMap');

exports = HashMap;

//# sourceMappingURL=HashMap.js.map
