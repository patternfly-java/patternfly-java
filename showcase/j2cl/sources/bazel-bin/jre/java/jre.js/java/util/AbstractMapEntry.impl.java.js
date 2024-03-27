goog.module('java.util.AbstractMapEntry$impl');

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
class AbstractMapEntry extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_AbstractMapEntry__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @final @override @return {boolean} */
 equals(/** * */ other) {
  if (!Entry.$isInstance(other)) {
   return false;
  }
  let entry = /**@type {Entry<*, *>}*/ ($Casts.$to(other, Entry));
  return Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.m_getKey__java_lang_Object(), entry.m_getKey__java_lang_Object()) && Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.m_getValue__java_lang_Object(), entry.m_getValue__java_lang_Object());
 }
 /** @final @override @return {number} */
 hashCode() {
  return Objects.m_hashCode__java_lang_Object__int(this.m_getKey__java_lang_Object()) ^ Objects.m_hashCode__java_lang_Object__int(this.m_getValue__java_lang_Object());
 }
 /** @final @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_getKey__java_lang_Object()) + '=' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_getValue__java_lang_Object());
 }
 /** @nodts */
 static $clinit() {
  AbstractMapEntry.$clinit = () =>{};
  AbstractMapEntry.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractMapEntry;
 }
 /** @abstract @override @nodts @return {K} */
 m_getKey__java_lang_Object() {}
 /** @abstract @override @nodts @return {V} */
 m_getValue__java_lang_Object() {}
 /** @abstract @override @nodts @return {V} */
 m_setValue__java_lang_Object__java_lang_Object(/** V */ arg0) {}
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Entry.$markImplementor(AbstractMapEntry);
$Util.$setClassMetadata(AbstractMapEntry, 'java.util.AbstractMapEntry');

exports = AbstractMapEntry;

//# sourceMappingURL=AbstractMapEntry.js.map
