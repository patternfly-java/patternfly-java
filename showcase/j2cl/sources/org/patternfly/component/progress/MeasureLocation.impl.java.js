goog.module('org.patternfly.component.progress.MeasureLocation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<MeasureLocation>}
 */
class MeasureLocation extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_progress_MeasureLocation;
 }
 /** @nodts @return {!MeasureLocation} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new MeasureLocation();
  $instance.$ctor__org_patternfly_component_progress_MeasureLocation__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_progress_MeasureLocation__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_component_progress_MeasureLocation = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @nodts @return {!MeasureLocation} */
 static m_valueOf__java_lang_String__org_patternfly_component_progress_MeasureLocation(/** string */ name) {
  MeasureLocation.$clinit();
  if ($Equality.$same(MeasureLocation.f_namesToValuesMap__org_patternfly_component_progress_MeasureLocation_, null)) {
   MeasureLocation.f_namesToValuesMap__org_patternfly_component_progress_MeasureLocation_ = /**@type {Map<?string, !MeasureLocation>}*/ ($Enums.createMapFromValues(MeasureLocation.m_values__arrayOf_org_patternfly_component_progress_MeasureLocation()));
  }
  return /**@type {MeasureLocation}*/ ($Enums.getValueFromNameAndMap(name, MeasureLocation.f_namesToValuesMap__org_patternfly_component_progress_MeasureLocation_));
 }
 /** @nodts @return {!Array<!MeasureLocation>} */
 static m_values__arrayOf_org_patternfly_component_progress_MeasureLocation() {
  MeasureLocation.$clinit();
  return /**@type {!Array<MeasureLocation>}*/ ($Arrays.$init([MeasureLocation.$static_none__org_patternfly_component_progress_MeasureLocation, MeasureLocation.$static_outside__org_patternfly_component_progress_MeasureLocation, MeasureLocation.$static_inside__org_patternfly_component_progress_MeasureLocation, MeasureLocation.$static_top__org_patternfly_component_progress_MeasureLocation], MeasureLocation));
 }
 /** @nodts @return {!MeasureLocation} */
 static get f_none__org_patternfly_component_progress_MeasureLocation() {
  return (MeasureLocation.$clinit(), MeasureLocation.$static_none__org_patternfly_component_progress_MeasureLocation);
 }
 /** @nodts @return {!MeasureLocation} */
 static get f_outside__org_patternfly_component_progress_MeasureLocation() {
  return (MeasureLocation.$clinit(), MeasureLocation.$static_outside__org_patternfly_component_progress_MeasureLocation);
 }
 /** @nodts @return {!MeasureLocation} */
 static get f_inside__org_patternfly_component_progress_MeasureLocation() {
  return (MeasureLocation.$clinit(), MeasureLocation.$static_inside__org_patternfly_component_progress_MeasureLocation);
 }
 /** @nodts @return {!MeasureLocation} */
 static get f_top__org_patternfly_component_progress_MeasureLocation() {
  return (MeasureLocation.$clinit(), MeasureLocation.$static_top__org_patternfly_component_progress_MeasureLocation);
 }
 /** @nodts */
 static $clinit() {
  MeasureLocation.$clinit = () =>{};
  MeasureLocation.$loadModules();
  Enum.$clinit();
  MeasureLocation.$static_none__org_patternfly_component_progress_MeasureLocation = MeasureLocation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), MeasureLocation.$ordinal_none__org_patternfly_component_progress_MeasureLocation, null);
  MeasureLocation.$static_outside__org_patternfly_component_progress_MeasureLocation = MeasureLocation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('outside'), MeasureLocation.$ordinal_outside__org_patternfly_component_progress_MeasureLocation, 'outside');
  MeasureLocation.$static_inside__org_patternfly_component_progress_MeasureLocation = MeasureLocation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('inside'), MeasureLocation.$ordinal_inside__org_patternfly_component_progress_MeasureLocation, 'inside');
  MeasureLocation.$static_top__org_patternfly_component_progress_MeasureLocation = MeasureLocation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('top'), MeasureLocation.$ordinal_top__org_patternfly_component_progress_MeasureLocation, null);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MeasureLocation;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
MeasureLocation.$ordinal_none__org_patternfly_component_progress_MeasureLocation = 0;
/**@const {number} @nodts*/
MeasureLocation.$ordinal_outside__org_patternfly_component_progress_MeasureLocation = 1;
/**@const {number} @nodts*/
MeasureLocation.$ordinal_inside__org_patternfly_component_progress_MeasureLocation = 2;
/**@const {number} @nodts*/
MeasureLocation.$ordinal_top__org_patternfly_component_progress_MeasureLocation = 3;
/**@private {!MeasureLocation} @nodts*/
MeasureLocation.$static_none__org_patternfly_component_progress_MeasureLocation;
/**@private {!MeasureLocation} @nodts*/
MeasureLocation.$static_outside__org_patternfly_component_progress_MeasureLocation;
/**@private {!MeasureLocation} @nodts*/
MeasureLocation.$static_inside__org_patternfly_component_progress_MeasureLocation;
/**@private {!MeasureLocation} @nodts*/
MeasureLocation.$static_top__org_patternfly_component_progress_MeasureLocation;
/**@type {Map<?string, !MeasureLocation>} @nodts*/
MeasureLocation.f_namesToValuesMap__org_patternfly_component_progress_MeasureLocation_;
$Util.$setClassMetadataForEnum(MeasureLocation, 'org.patternfly.component.progress.MeasureLocation');

exports = MeasureLocation;

//# sourceMappingURL=MeasureLocation.js.map
