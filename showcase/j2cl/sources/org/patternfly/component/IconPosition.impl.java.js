goog.module('org.patternfly.component.IconPosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<IconPosition>}
 */
class IconPosition extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_IconPosition;
 }
 /** @nodts @return {!IconPosition} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ modifier) {
  let $instance = new IconPosition();
  $instance.$ctor__org_patternfly_component_IconPosition__java_lang_String__int__java_lang_String__void($name, $ordinal, modifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_IconPosition__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ modifier) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_component_IconPosition = modifier;
 }
 /** @nodts @return {!IconPosition} */
 static m_valueOf__java_lang_String__org_patternfly_component_IconPosition(/** string */ name) {
  IconPosition.$clinit();
  if ($Equality.$same(IconPosition.f_namesToValuesMap__org_patternfly_component_IconPosition_, null)) {
   IconPosition.f_namesToValuesMap__org_patternfly_component_IconPosition_ = /**@type {Map<?string, !IconPosition>}*/ ($Enums.createMapFromValues(IconPosition.m_values__arrayOf_org_patternfly_component_IconPosition()));
  }
  return /**@type {IconPosition}*/ ($Enums.getValueFromNameAndMap(name, IconPosition.f_namesToValuesMap__org_patternfly_component_IconPosition_));
 }
 /** @nodts @return {!Array<!IconPosition>} */
 static m_values__arrayOf_org_patternfly_component_IconPosition() {
  IconPosition.$clinit();
  return /**@type {!Array<IconPosition>}*/ ($Arrays.$init([IconPosition.$static_start__org_patternfly_component_IconPosition, IconPosition.$static_end__org_patternfly_component_IconPosition], IconPosition));
 }
 /** @nodts @return {!IconPosition} */
 static get f_start__org_patternfly_component_IconPosition() {
  return (IconPosition.$clinit(), IconPosition.$static_start__org_patternfly_component_IconPosition);
 }
 /** @nodts @return {!IconPosition} */
 static get f_end__org_patternfly_component_IconPosition() {
  return (IconPosition.$clinit(), IconPosition.$static_end__org_patternfly_component_IconPosition);
 }
 /** @nodts */
 static $clinit() {
  IconPosition.$clinit = () =>{};
  IconPosition.$loadModules();
  Enum.$clinit();
  IconPosition.$static_start__org_patternfly_component_IconPosition = IconPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('start'), IconPosition.$ordinal_start__org_patternfly_component_IconPosition, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_start__org_patternfly_style_Classes));
  IconPosition.$static_end__org_patternfly_component_IconPosition = IconPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('end'), IconPosition.$ordinal_end__org_patternfly_component_IconPosition, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_end__org_patternfly_style_Classes));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IconPosition;
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
IconPosition.$ordinal_start__org_patternfly_component_IconPosition = 0;
/**@const {number} @nodts*/
IconPosition.$ordinal_end__org_patternfly_component_IconPosition = 1;
/**@private {!IconPosition} @nodts*/
IconPosition.$static_start__org_patternfly_component_IconPosition;
/**@private {!IconPosition} @nodts*/
IconPosition.$static_end__org_patternfly_component_IconPosition;
/**@type {Map<?string, !IconPosition>} @nodts*/
IconPosition.f_namesToValuesMap__org_patternfly_component_IconPosition_;
$Util.$setClassMetadataForEnum(IconPosition, 'org.patternfly.component.IconPosition');

exports = IconPosition;

//# sourceMappingURL=IconPosition.js.map
