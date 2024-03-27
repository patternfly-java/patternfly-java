goog.module('java.util.InternalStringMap.$2$impl');

const AbstractMapEntry = goog.require('java.util.AbstractMapEntry$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('java.util.InternalJsMap.IteratorEntry.$Overlay$impl');
let InternalStringMap = goog.forwardDeclare('java.util.InternalStringMap$impl');

/**
 * @template K, V
 * @extends {AbstractMapEntry<K, V>}
 */
class $2 extends AbstractMapEntry {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {InternalStringMap<K, V>} @nodts*/
  this.$outer_this__java_util_InternalStringMap_2;
  /**@type {IIterableResult<V>} @nodts*/
  this.$captured_entry__java_util_InternalStringMap_2;
  /**@type {number} @nodts*/
  this.$captured_lastValueMod__java_util_InternalStringMap_2 = 0;
 }
 /** @nodts @template K, V @return {!$2<K, V>} */
 static $create__java_util_InternalStringMap__java_util_InternalJsMap_IteratorEntry__int(/** InternalStringMap<K, V> */ $outer_this, /** IIterableResult<V> */ $captured_entry, /** number */ $captured_lastValueMod) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__java_util_InternalStringMap_2__java_util_InternalStringMap__java_util_InternalJsMap_IteratorEntry__int__void($outer_this, $captured_entry, $captured_lastValueMod);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_InternalStringMap_2__java_util_InternalStringMap__java_util_InternalJsMap_IteratorEntry__int__void(/** InternalStringMap<K, V> */ $outer_this, /** IIterableResult<V> */ $captured_entry, /** number */ $captured_lastValueMod) {
  this.$outer_this__java_util_InternalStringMap_2 = $outer_this;
  this.$captured_entry__java_util_InternalStringMap_2 = $captured_entry;
  this.$captured_lastValueMod__java_util_InternalStringMap_2 = $captured_lastValueMod;
  this.$ctor__java_util_AbstractMapEntry__void();
 }
 /** @override @nodts @return {K} */
 m_getKey__java_lang_Object() {
  return /**@type {K}*/ ($Overlay.m_getKey__$devirt__java_util_InternalJsMap_IteratorEntry__java_lang_String(this.$captured_entry__java_util_InternalStringMap_2));
 }
 /** @override @nodts @return {V} */
 m_getValue__java_lang_Object() {
  if (this.$outer_this__java_util_InternalStringMap_2.f_valueMod__java_util_InternalStringMap_ != this.$captured_lastValueMod__java_util_InternalStringMap_2) {
   return this.$outer_this__java_util_InternalStringMap_2.m_get__java_lang_String__java_lang_Object($Overlay.m_getKey__$devirt__java_util_InternalJsMap_IteratorEntry__java_lang_String(this.$captured_entry__java_util_InternalStringMap_2));
  }
  return $Overlay.m_getValue__$devirt__java_util_InternalJsMap_IteratorEntry__java_lang_Object(this.$captured_entry__java_util_InternalStringMap_2);
 }
 /** @override @nodts @return {V} */
 m_setValue__java_lang_Object__java_lang_Object(/** V */ object) {
  return this.$outer_this__java_util_InternalStringMap_2.m_put__java_lang_String__java_lang_Object__java_lang_Object($Overlay.m_getKey__$devirt__java_util_InternalJsMap_IteratorEntry__java_lang_String(this.$captured_entry__java_util_InternalStringMap_2), object);
 }
 /** @nodts */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  AbstractMapEntry.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('java.util.InternalJsMap.IteratorEntry.$Overlay$impl');
 }
}
$Util.$setClassMetadata($2, 'java.util.InternalStringMap$2');

exports = $2;

//# sourceMappingURL=InternalStringMap$2.js.map
