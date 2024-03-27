goog.module('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.UnmodifiableEntry$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Entry = goog.require('java.util.Map.Entry$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template K, V
 * @implements {Entry<K, V>}
 */
class UnmodifiableEntry extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Entry<?, ?>} @nodts*/
  this.f_entry__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_UnmodifiableEntry_;
 }
 /** @nodts @template K, V @return {!UnmodifiableEntry<K, V>} */
 static $create__java_util_Map_Entry(/** Entry<?, ?> */ entry) {
  UnmodifiableEntry.$clinit();
  let $instance = new UnmodifiableEntry();
  $instance.$ctor__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_UnmodifiableEntry__java_util_Map_Entry__void(entry);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_UnmodifiableEntry__java_util_Map_Entry__void(/** Entry<?, ?> */ entry) {
  this.$ctor__java_lang_Object__void();
  this.f_entry__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_UnmodifiableEntry_ = entry;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return this.f_entry__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_UnmodifiableEntry_.equals(o);
 }
 /** @override @nodts @return {K} */
 m_getKey__java_lang_Object() {
  return this.f_entry__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_UnmodifiableEntry_.m_getKey__java_lang_Object();
 }
 /** @override @nodts @return {V} */
 m_getValue__java_lang_Object() {
  return this.f_entry__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_UnmodifiableEntry_.m_getValue__java_lang_Object();
 }
 /** @override @return {number} */
 hashCode() {
  return this.f_entry__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_UnmodifiableEntry_.hashCode();
 }
 /** @override @nodts @return {V} */
 m_setValue__java_lang_Object__java_lang_Object(/** V */ value) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {?string} */
 toString() {
  return $Objects.m_toString__java_lang_Object__java_lang_String(this.f_entry__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_UnmodifiableEntry_);
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableEntry.$clinit = () =>{};
  UnmodifiableEntry.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableEntry;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Entry.$markImplementor(UnmodifiableEntry);
$Util.$setClassMetadata(UnmodifiableEntry, 'java.util.Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry');

exports = UnmodifiableEntry;

//# sourceMappingURL=Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry.js.map
