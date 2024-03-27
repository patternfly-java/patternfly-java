goog.module('org.patternfly.dataprovider.SelectionInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 */
class SelectionInfo extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {j_u_function_Function<T, ?string>} @nodts*/
  this.f_identifier__org_patternfly_dataprovider_SelectionInfo_;
  /**@type {Map<?string, T>} @nodts*/
  this.f_selection__org_patternfly_dataprovider_SelectionInfo_;
 }
 //Factory method corresponding to constructor 'SelectionInfo(Function)'.
 /** @nodts @template T @return {!SelectionInfo<T>} */
 static $create__java_util_function_Function(/** j_u_function_Function<T, ?string> */ identifier) {
  SelectionInfo.$clinit();
  let $instance = new SelectionInfo();
  $instance.$ctor__org_patternfly_dataprovider_SelectionInfo__java_util_function_Function__void(identifier);
  return $instance;
 }
 //Initialization from constructor 'SelectionInfo(Function)'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_SelectionInfo__java_util_function_Function__void(/** j_u_function_Function<T, ?string> */ identifier) {
  this.$ctor__org_patternfly_dataprovider_SelectionInfo__java_util_function_Function__java_util_Map__void(identifier, /**@type {!HashMap<?string, T>}*/ (HashMap.$create__()));
 }
 //Factory method corresponding to constructor 'SelectionInfo(Function, Map)'.
 /** @nodts @template T @return {!SelectionInfo<T>} */
 static $create__java_util_function_Function__java_util_Map(/** j_u_function_Function<T, ?string> */ identifier, /** Map<?string, T> */ selection) {
  SelectionInfo.$clinit();
  let $instance = new SelectionInfo();
  $instance.$ctor__org_patternfly_dataprovider_SelectionInfo__java_util_function_Function__java_util_Map__void(identifier, selection);
  return $instance;
 }
 //Initialization from constructor 'SelectionInfo(Function, Map)'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_SelectionInfo__java_util_function_Function__java_util_Map__void(/** j_u_function_Function<T, ?string> */ identifier, /** Map<?string, T> */ selection) {
  this.$ctor__java_lang_Object__void();
  this.f_identifier__org_patternfly_dataprovider_SelectionInfo_ = identifier;
  this.f_selection__org_patternfly_dataprovider_SelectionInfo_ = selection;
 }
 /** @nodts */
 m_reset__void_$pp_org_patternfly_dataprovider() {
  this.f_selection__org_patternfly_dataprovider_SelectionInfo_.clear();
 }
 /** @nodts */
 m_add__java_lang_String__java_lang_Object__void_$pp_org_patternfly_dataprovider(/** ?string */ id, /** T */ item) {
  this.f_selection__org_patternfly_dataprovider_SelectionInfo_.put(id, item);
 }
 /** @nodts */
 m_remove__java_lang_String__void_$pp_org_patternfly_dataprovider(/** ?string */ id) {
  this.f_selection__org_patternfly_dataprovider_SelectionInfo_.remove(id);
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if (!SelectionInfo.$isInstance(o)) {
   return false;
  }
  let other = /**@type {SelectionInfo<*>}*/ ($Casts.$to(o, SelectionInfo));
  return this.f_selection__org_patternfly_dataprovider_SelectionInfo_.equals(other.f_selection__org_patternfly_dataprovider_SelectionInfo_);
 }
 /** @override @return {number} */
 hashCode() {
  return $Objects.m_hashCode__java_lang_Object__int(this.f_selection__org_patternfly_dataprovider_SelectionInfo_);
 }
 /** @override @return {?string} */
 toString() {
  return 'SelectionInfo(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_getSelection__java_util_List()) + j_l_String.m_valueOf__char__java_lang_String(41 /* ')' */);
 }
 /** @nodts @return {List<T>} */
 m_getSelection__java_util_List() {
  return /**@type {!ArrayList<T>}*/ (ArrayList.$create__java_util_Collection(this.f_selection__org_patternfly_dataprovider_SelectionInfo_.values()));
 }
 /** @nodts @return {boolean} */
 m_hasSelection__boolean() {
  return !this.f_selection__org_patternfly_dataprovider_SelectionInfo_.isEmpty();
 }
 /** @nodts @return {boolean} */
 m_isSelected__java_lang_Object__boolean(/** T */ item) {
  return this.f_selection__org_patternfly_dataprovider_SelectionInfo_.containsKey(/**@type {?string}*/ ($Casts.$to(this.f_identifier__org_patternfly_dataprovider_SelectionInfo_.m_apply__java_lang_Object__java_lang_Object(item), j_l_String)));
 }
 /** @nodts @return {number} */
 m_getSelectionCount__int() {
  return this.f_selection__org_patternfly_dataprovider_SelectionInfo_.size();
 }
 /** @nodts */
 static $clinit() {
  SelectionInfo.$clinit = () =>{};
  SelectionInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionInfo;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(SelectionInfo, 'org.patternfly.dataprovider.SelectionInfo');

exports = SelectionInfo;

//# sourceMappingURL=SelectionInfo.js.map
