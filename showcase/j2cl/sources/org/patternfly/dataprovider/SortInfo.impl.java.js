goog.module('org.patternfly.dataprovider.SortInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');

/**
 * @template T
 */
class SortInfo extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_dataprovider_SortInfo_;
  /**@type {Comparator<T>} @nodts*/
  this.f_comparator__org_patternfly_dataprovider_SortInfo_;
  /**@type {boolean} @nodts*/
  this.f_ascending__org_patternfly_dataprovider_SortInfo_ = false;
 }
 //Factory method corresponding to constructor 'SortInfo()'.
 /** @nodts @template T @return {!SortInfo<T>} */
 static $create__() {
  SortInfo.$clinit();
  let $instance = new SortInfo();
  $instance.$ctor__org_patternfly_dataprovider_SortInfo__void();
  return $instance;
 }
 //Initialization from constructor 'SortInfo()'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_SortInfo__void() {
  this.$ctor__java_lang_Object__void();
  this.m_reset__void_$pp_org_patternfly_dataprovider();
 }
 //Factory method corresponding to constructor 'SortInfo(String, Comparator, boolean)'.
 /** @nodts @template T @return {!SortInfo<T>} */
 static $create__java_lang_String__java_util_Comparator__boolean(/** ?string */ id, /** Comparator<T> */ comparator, /** boolean */ ascending) {
  SortInfo.$clinit();
  let $instance = new SortInfo();
  $instance.$ctor__org_patternfly_dataprovider_SortInfo__java_lang_String__java_util_Comparator__boolean__void(id, comparator, ascending);
  return $instance;
 }
 //Initialization from constructor 'SortInfo(String, Comparator, boolean)'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_SortInfo__java_lang_String__java_util_Comparator__boolean__void(/** ?string */ id, /** Comparator<T> */ comparator, /** boolean */ ascending) {
  this.$ctor__java_lang_Object__void();
  this.f_id__org_patternfly_dataprovider_SortInfo_ = id;
  this.f_comparator__org_patternfly_dataprovider_SortInfo_ = comparator;
  this.f_ascending__org_patternfly_dataprovider_SortInfo_ = ascending;
 }
 /** @nodts */
 m_reset__void_$pp_org_patternfly_dataprovider() {
  this.f_id__org_patternfly_dataprovider_SortInfo_ = SortInfo.f_EMPTY__org_patternfly_dataprovider_SortInfo_;
  this.f_comparator__org_patternfly_dataprovider_SortInfo_ = null;
  this.f_ascending__org_patternfly_dataprovider_SortInfo_ = true;
 }
 /** @nodts */
 m_apply__java_lang_String__java_util_Comparator__boolean__void_$pp_org_patternfly_dataprovider(/** ?string */ id, /** Comparator<T> */ comparator, /** boolean */ ascending) {
  this.f_id__org_patternfly_dataprovider_SortInfo_ = id;
  this.f_comparator__org_patternfly_dataprovider_SortInfo_ = comparator;
  this.f_ascending__org_patternfly_dataprovider_SortInfo_ = ascending;
 }
 /** @nodts @return {?string} */
 m_getId__java_lang_String() {
  return this.f_id__org_patternfly_dataprovider_SortInfo_;
 }
 /** @nodts @return {Comparator<T>} */
 m_getComparator__java_util_Comparator() {
  return this.f_comparator__org_patternfly_dataprovider_SortInfo_;
 }
 /** @nodts @return {boolean} */
 m_isAscending__boolean() {
  return this.f_ascending__org_patternfly_dataprovider_SortInfo_;
 }
 /** @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(SortInfo.f_EMPTY__org_patternfly_dataprovider_SortInfo_, this.f_id__org_patternfly_dataprovider_SortInfo_);
 }
 /** @nodts */
 static $clinit() {
  SortInfo.$clinit = () =>{};
  SortInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SortInfo;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
/**@const {string} @nodts*/
SortInfo.f_EMPTY__org_patternfly_dataprovider_SortInfo_ = 'empty-sort-info';
$Util.$setClassMetadata(SortInfo, 'org.patternfly.dataprovider.SortInfo');

exports = SortInfo;

//# sourceMappingURL=SortInfo.js.map
