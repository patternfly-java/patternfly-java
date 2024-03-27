goog.module('java.util.AbstractMap.AbstractEntry$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Entry = goog.require('java.util.Map.Entry$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template K, V
 * @implements {Entry<K, V>}
 */
class AbstractEntry extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {K} @nodts*/
  this.f_key__java_util_AbstractMap_AbstractEntry_;
  /**@type {V} @nodts*/
  this.f_value__java_util_AbstractMap_AbstractEntry_;
 }
 /** @nodts */
 $ctor__java_util_AbstractMap_AbstractEntry__java_lang_Object__java_lang_Object__void(/** K */ key, /** V */ value) {
  this.$ctor__java_lang_Object__void();
  this.f_key__java_util_AbstractMap_AbstractEntry_ = key;
  this.f_value__java_util_AbstractMap_AbstractEntry_ = value;
 }
 /** @override @nodts @return {K} */
 m_getKey__java_lang_Object() {
  return this.f_key__java_util_AbstractMap_AbstractEntry_;
 }
 /** @override @nodts @return {V} */
 m_getValue__java_lang_Object() {
  return this.f_value__java_util_AbstractMap_AbstractEntry_;
 }
 /** @override @nodts @return {V} */
 m_setValue__java_lang_Object__java_lang_Object(/** V */ value) {
  let oldValue = this.f_value__java_util_AbstractMap_AbstractEntry_;
  this.f_value__java_util_AbstractMap_AbstractEntry_ = value;
  return oldValue;
 }
 /** @override @return {boolean} */
 equals(/** * */ other) {
  if (!Entry.$isInstance(other)) {
   return false;
  }
  let entry = /**@type {Entry<*, *>}*/ ($Casts.$to(other, Entry));
  return Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_key__java_util_AbstractMap_AbstractEntry_, entry.m_getKey__java_lang_Object()) && Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_value__java_util_AbstractMap_AbstractEntry_, entry.m_getValue__java_lang_Object());
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hashCode__java_lang_Object__int(this.f_key__java_util_AbstractMap_AbstractEntry_) ^ Objects.m_hashCode__java_lang_Object__int(this.f_value__java_util_AbstractMap_AbstractEntry_);
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_key__java_util_AbstractMap_AbstractEntry_) + '=' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_value__java_util_AbstractMap_AbstractEntry_);
 }
 /** @nodts */
 static $clinit() {
  AbstractEntry.$clinit = () =>{};
  AbstractEntry.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractEntry;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Entry.$markImplementor(AbstractEntry);
$Util.$setClassMetadata(AbstractEntry, 'java.util.AbstractMap$AbstractEntry');

exports = AbstractEntry;

//# sourceMappingURL=AbstractMap$AbstractEntry.js.map
