goog.module('org.patternfly.component.truncate.TruncatePosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<TruncatePosition>}
 */
class TruncatePosition extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_suffix__org_patternfly_component_truncate_TruncatePosition;
 }
 /** @nodts @return {!TruncatePosition} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ suffix) {
  let $instance = new TruncatePosition();
  $instance.$ctor__org_patternfly_component_truncate_TruncatePosition__java_lang_String__int__java_lang_String__void($name, $ordinal, suffix);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_truncate_TruncatePosition__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ suffix) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_suffix__org_patternfly_component_truncate_TruncatePosition = suffix;
 }
 /** @nodts @return {!TruncatePosition} */
 static m_valueOf__java_lang_String__org_patternfly_component_truncate_TruncatePosition(/** string */ name) {
  TruncatePosition.$clinit();
  if ($Equality.$same(TruncatePosition.f_namesToValuesMap__org_patternfly_component_truncate_TruncatePosition_, null)) {
   TruncatePosition.f_namesToValuesMap__org_patternfly_component_truncate_TruncatePosition_ = /**@type {Map<?string, !TruncatePosition>}*/ ($Enums.createMapFromValues(TruncatePosition.m_values__arrayOf_org_patternfly_component_truncate_TruncatePosition()));
  }
  return /**@type {TruncatePosition}*/ ($Enums.getValueFromNameAndMap(name, TruncatePosition.f_namesToValuesMap__org_patternfly_component_truncate_TruncatePosition_));
 }
 /** @nodts @return {!Array<!TruncatePosition>} */
 static m_values__arrayOf_org_patternfly_component_truncate_TruncatePosition() {
  TruncatePosition.$clinit();
  return /**@type {!Array<TruncatePosition>}*/ ($Arrays.$init([TruncatePosition.$static_start__org_patternfly_component_truncate_TruncatePosition, TruncatePosition.$static_middle__org_patternfly_component_truncate_TruncatePosition, TruncatePosition.$static_end__org_patternfly_component_truncate_TruncatePosition], TruncatePosition));
 }
 /** @nodts @return {!TruncatePosition} */
 static get f_start__org_patternfly_component_truncate_TruncatePosition() {
  return (TruncatePosition.$clinit(), TruncatePosition.$static_start__org_patternfly_component_truncate_TruncatePosition);
 }
 /** @nodts @return {!TruncatePosition} */
 static get f_middle__org_patternfly_component_truncate_TruncatePosition() {
  return (TruncatePosition.$clinit(), TruncatePosition.$static_middle__org_patternfly_component_truncate_TruncatePosition);
 }
 /** @nodts @return {!TruncatePosition} */
 static get f_end__org_patternfly_component_truncate_TruncatePosition() {
  return (TruncatePosition.$clinit(), TruncatePosition.$static_end__org_patternfly_component_truncate_TruncatePosition);
 }
 /** @nodts */
 static $clinit() {
  TruncatePosition.$clinit = () =>{};
  TruncatePosition.$loadModules();
  Enum.$clinit();
  TruncatePosition.$static_start__org_patternfly_component_truncate_TruncatePosition = TruncatePosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('start'), TruncatePosition.$ordinal_start__org_patternfly_component_truncate_TruncatePosition, Classes.f_end__org_patternfly_style_Classes);
  TruncatePosition.$static_middle__org_patternfly_component_truncate_TruncatePosition = TruncatePosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('middle'), TruncatePosition.$ordinal_middle__org_patternfly_component_truncate_TruncatePosition, '');
  TruncatePosition.$static_end__org_patternfly_component_truncate_TruncatePosition = TruncatePosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('end'), TruncatePosition.$ordinal_end__org_patternfly_component_truncate_TruncatePosition, Classes.f_start__org_patternfly_style_Classes);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TruncatePosition;
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
TruncatePosition.$ordinal_start__org_patternfly_component_truncate_TruncatePosition = 0;
/**@const {number} @nodts*/
TruncatePosition.$ordinal_middle__org_patternfly_component_truncate_TruncatePosition = 1;
/**@const {number} @nodts*/
TruncatePosition.$ordinal_end__org_patternfly_component_truncate_TruncatePosition = 2;
/**@private {!TruncatePosition} @nodts*/
TruncatePosition.$static_start__org_patternfly_component_truncate_TruncatePosition;
/**@private {!TruncatePosition} @nodts*/
TruncatePosition.$static_middle__org_patternfly_component_truncate_TruncatePosition;
/**@private {!TruncatePosition} @nodts*/
TruncatePosition.$static_end__org_patternfly_component_truncate_TruncatePosition;
/**@type {Map<?string, !TruncatePosition>} @nodts*/
TruncatePosition.f_namesToValuesMap__org_patternfly_component_truncate_TruncatePosition_;
$Util.$setClassMetadataForEnum(TruncatePosition, 'org.patternfly.component.truncate.TruncatePosition');

exports = TruncatePosition;

//# sourceMappingURL=TruncatePosition.js.map
