goog.module('org.patternfly.component.divider.DividerType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<DividerType>}
 */
class DividerType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!DividerType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new DividerType();
  $instance.$ctor__org_patternfly_component_divider_DividerType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_divider_DividerType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!DividerType} */
 static m_valueOf__java_lang_String__org_patternfly_component_divider_DividerType(/** string */ name) {
  DividerType.$clinit();
  if ($Equality.$same(DividerType.f_namesToValuesMap__org_patternfly_component_divider_DividerType_, null)) {
   DividerType.f_namesToValuesMap__org_patternfly_component_divider_DividerType_ = /**@type {Map<?string, !DividerType>}*/ ($Enums.createMapFromValues(DividerType.m_values__arrayOf_org_patternfly_component_divider_DividerType()));
  }
  return /**@type {DividerType}*/ ($Enums.getValueFromNameAndMap(name, DividerType.f_namesToValuesMap__org_patternfly_component_divider_DividerType_));
 }
 /** @nodts @return {!Array<!DividerType>} */
 static m_values__arrayOf_org_patternfly_component_divider_DividerType() {
  DividerType.$clinit();
  return /**@type {!Array<DividerType>}*/ ($Arrays.$init([DividerType.f_li__org_patternfly_component_divider_DividerType, DividerType.f_hr__org_patternfly_component_divider_DividerType, DividerType.f_div__org_patternfly_component_divider_DividerType], DividerType));
 }
 /** @nodts */
 static $clinit() {
  DividerType.$clinit = () =>{};
  DividerType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DividerType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
DividerType.$ordinal_li__org_patternfly_component_divider_DividerType = 0;
/**@const {number} @nodts*/
DividerType.$ordinal_hr__org_patternfly_component_divider_DividerType = 1;
/**@const {number} @nodts*/
DividerType.$ordinal_div__org_patternfly_component_divider_DividerType = 2;
/**@const {!DividerType} @nodts*/
DividerType.f_li__org_patternfly_component_divider_DividerType = /**@pureOrBreakMyCode*/ DividerType.$create__java_lang_String__int($Util.$makeEnumName('li'), DividerType.$ordinal_li__org_patternfly_component_divider_DividerType);
/**@const {!DividerType} @nodts*/
DividerType.f_hr__org_patternfly_component_divider_DividerType = /**@pureOrBreakMyCode*/ DividerType.$create__java_lang_String__int($Util.$makeEnumName('hr'), DividerType.$ordinal_hr__org_patternfly_component_divider_DividerType);
/**@const {!DividerType} @nodts*/
DividerType.f_div__org_patternfly_component_divider_DividerType = /**@pureOrBreakMyCode*/ DividerType.$create__java_lang_String__int($Util.$makeEnumName('div'), DividerType.$ordinal_div__org_patternfly_component_divider_DividerType);
/**@type {Map<?string, !DividerType>} @nodts*/
DividerType.f_namesToValuesMap__org_patternfly_component_divider_DividerType_;
$Util.$setClassMetadataForEnum(DividerType, 'org.patternfly.component.divider.DividerType');

exports = DividerType;

//# sourceMappingURL=DividerType.js.map
