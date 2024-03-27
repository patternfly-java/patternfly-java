goog.module('org.patternfly.component.tooltip.TriggerAria$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<TriggerAria>}
 */
class TriggerAria extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_attribute__org_patternfly_component_tooltip_TriggerAria;
 }
 /** @nodts @return {!TriggerAria} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ attribute) {
  let $instance = new TriggerAria();
  $instance.$ctor__org_patternfly_component_tooltip_TriggerAria__java_lang_String__int__java_lang_String__void($name, $ordinal, attribute);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tooltip_TriggerAria__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ attribute) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_attribute__org_patternfly_component_tooltip_TriggerAria = attribute;
 }
 /** @nodts @return {!TriggerAria} */
 static m_valueOf__java_lang_String__org_patternfly_component_tooltip_TriggerAria(/** string */ name) {
  TriggerAria.$clinit();
  if ($Equality.$same(TriggerAria.f_namesToValuesMap__org_patternfly_component_tooltip_TriggerAria_, null)) {
   TriggerAria.f_namesToValuesMap__org_patternfly_component_tooltip_TriggerAria_ = /**@type {Map<?string, !TriggerAria>}*/ ($Enums.createMapFromValues(TriggerAria.m_values__arrayOf_org_patternfly_component_tooltip_TriggerAria()));
  }
  return /**@type {TriggerAria}*/ ($Enums.getValueFromNameAndMap(name, TriggerAria.f_namesToValuesMap__org_patternfly_component_tooltip_TriggerAria_));
 }
 /** @nodts @return {!Array<!TriggerAria>} */
 static m_values__arrayOf_org_patternfly_component_tooltip_TriggerAria() {
  TriggerAria.$clinit();
  return /**@type {!Array<TriggerAria>}*/ ($Arrays.$init([TriggerAria.$static_describedBy__org_patternfly_component_tooltip_TriggerAria, TriggerAria.$static_labelledBy__org_patternfly_component_tooltip_TriggerAria, TriggerAria.$static_none__org_patternfly_component_tooltip_TriggerAria], TriggerAria));
 }
 /** @nodts @return {!TriggerAria} */
 static get f_describedBy__org_patternfly_component_tooltip_TriggerAria() {
  return (TriggerAria.$clinit(), TriggerAria.$static_describedBy__org_patternfly_component_tooltip_TriggerAria);
 }
 /** @nodts @return {!TriggerAria} */
 static get f_labelledBy__org_patternfly_component_tooltip_TriggerAria() {
  return (TriggerAria.$clinit(), TriggerAria.$static_labelledBy__org_patternfly_component_tooltip_TriggerAria);
 }
 /** @nodts @return {!TriggerAria} */
 static get f_none__org_patternfly_component_tooltip_TriggerAria() {
  return (TriggerAria.$clinit(), TriggerAria.$static_none__org_patternfly_component_tooltip_TriggerAria);
 }
 /** @nodts */
 static $clinit() {
  TriggerAria.$clinit = () =>{};
  TriggerAria.$loadModules();
  Enum.$clinit();
  TriggerAria.$static_describedBy__org_patternfly_component_tooltip_TriggerAria = TriggerAria.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('describedBy'), TriggerAria.$ordinal_describedBy__org_patternfly_component_tooltip_TriggerAria, Aria.f_describedBy__org_patternfly_core_Aria);
  TriggerAria.$static_labelledBy__org_patternfly_component_tooltip_TriggerAria = TriggerAria.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('labelledBy'), TriggerAria.$ordinal_labelledBy__org_patternfly_component_tooltip_TriggerAria, Aria.f_labelledBy__org_patternfly_core_Aria);
  TriggerAria.$static_none__org_patternfly_component_tooltip_TriggerAria = TriggerAria.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), TriggerAria.$ordinal_none__org_patternfly_component_tooltip_TriggerAria, '');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TriggerAria;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
TriggerAria.$ordinal_describedBy__org_patternfly_component_tooltip_TriggerAria = 0;
/**@const {number} @nodts*/
TriggerAria.$ordinal_labelledBy__org_patternfly_component_tooltip_TriggerAria = 1;
/**@const {number} @nodts*/
TriggerAria.$ordinal_none__org_patternfly_component_tooltip_TriggerAria = 2;
/**@private {!TriggerAria} @nodts*/
TriggerAria.$static_describedBy__org_patternfly_component_tooltip_TriggerAria;
/**@private {!TriggerAria} @nodts*/
TriggerAria.$static_labelledBy__org_patternfly_component_tooltip_TriggerAria;
/**@private {!TriggerAria} @nodts*/
TriggerAria.$static_none__org_patternfly_component_tooltip_TriggerAria;
/**@type {Map<?string, !TriggerAria>} @nodts*/
TriggerAria.f_namesToValuesMap__org_patternfly_component_tooltip_TriggerAria_;
$Util.$setClassMetadataForEnum(TriggerAria, 'org.patternfly.component.tooltip.TriggerAria');

exports = TriggerAria;

//# sourceMappingURL=TriggerAria.js.map
