goog.module('java.util.Map.Entry$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let $LambdaAdaptor$1 = goog.forwardDeclare('java.util.Map.Entry.$LambdaAdaptor$1$impl');
let $LambdaAdaptor$2 = goog.forwardDeclare('java.util.Map.Entry.$LambdaAdaptor$2$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template K, V
 */
class Entry {
 /** @abstract @return {boolean} */
 equals(/** * */ o) {}
 /** @abstract @nodts @return {K} */
 m_getKey__java_lang_Object() {}
 /** @abstract @nodts @return {V} */
 m_getValue__java_lang_Object() {}
 /** @abstract @return {number} */
 hashCode() {}
 /** @abstract @nodts @return {V} */
 m_setValue__java_lang_Object__java_lang_Object(/** V */ value) {}
 /** @nodts @template K_1, V_1 @return {Comparator<Entry<K_1, V_1>>} */
 static m_comparingByKey__java_util_Comparator() {
  Entry.$clinit();
  return /**@type {Comparator<Entry<K_1, V_1>>}*/ (Entry.m_comparingByKey__java_util_Comparator__java_util_Comparator(/**@type {Comparator<K_1>}*/ (Comparator.m_naturalOrder__java_util_Comparator())));
 }
 /** @nodts @template K_1, V_1 @return {Comparator<Entry<K_1, V_1>>} */
 static m_comparingByKey__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ cmp) {
  Entry.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(cmp);
  return /**@type {Comparator<Entry<K_1, V_1>>}*/ ($Casts.$to(new $LambdaAdaptor$1((a, b) =>{
   let a_1 = /**@type {Entry}*/ ($Casts.$to(a, Entry));
   let b_1 = /**@type {Entry}*/ ($Casts.$to(b, Entry));
   return cmp.m_compare__java_lang_Object__java_lang_Object__int(a_1.m_getKey__java_lang_Object(), b_1.m_getKey__java_lang_Object());
  }), Comparator));
 }
 /** @nodts @template K_1, V_1 @return {Comparator<Entry<K_1, V_1>>} */
 static m_comparingByValue__java_util_Comparator() {
  Entry.$clinit();
  return /**@type {Comparator<Entry<K_1, V_1>>}*/ (Entry.m_comparingByValue__java_util_Comparator__java_util_Comparator(/**@type {Comparator<V_1>}*/ (Comparator.m_naturalOrder__java_util_Comparator())));
 }
 /** @nodts @template K_1, V_1 @return {Comparator<Entry<K_1, V_1>>} */
 static m_comparingByValue__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ cmp) {
  Entry.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(cmp);
  return /**@type {Comparator<Entry<K_1, V_1>>}*/ ($Casts.$to(new $LambdaAdaptor$2((a, b) =>{
   let a_1 = /**@type {Entry}*/ ($Casts.$to(a, Entry));
   let b_1 = /**@type {Entry}*/ ($Casts.$to(b, Entry));
   return cmp.m_compare__java_lang_Object__java_lang_Object__int(a_1.m_getValue__java_lang_Object(), b_1.m_getValue__java_lang_Object());
  }), Comparator));
 }
 /** @nodts */
 static $clinit() {
  Entry.$clinit = () =>{};
  Entry.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_Map_Entry = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Map_Entry;
 }
 
 /** @nodts */
 static $loadModules() {
  Comparator = goog.module.get('java.util.Comparator$impl');
  $LambdaAdaptor$1 = goog.module.get('java.util.Map.Entry.$LambdaAdaptor$1$impl');
  $LambdaAdaptor$2 = goog.module.get('java.util.Map.Entry.$LambdaAdaptor$2$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Entry.$markImplementor(/**@type {Function}*/ (Entry));
$Util.$setClassMetadataForInterface(Entry, 'java.util.Map$Entry');

exports = Entry;

//# sourceMappingURL=Map$Entry.js.map
