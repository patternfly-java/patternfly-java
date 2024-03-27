goog.module('org.patternfly.component.menu.MenuItemType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<MenuItemType>}
 */
class MenuItemType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!MenuItemType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new MenuItemType();
  $instance.$ctor__org_patternfly_component_menu_MenuItemType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItemType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!MenuItemType} */
 static m_valueOf__java_lang_String__org_patternfly_component_menu_MenuItemType(/** string */ name) {
  MenuItemType.$clinit();
  if ($Equality.$same(MenuItemType.f_namesToValuesMap__org_patternfly_component_menu_MenuItemType_, null)) {
   MenuItemType.f_namesToValuesMap__org_patternfly_component_menu_MenuItemType_ = /**@type {Map<?string, !MenuItemType>}*/ ($Enums.createMapFromValues(MenuItemType.m_values__arrayOf_org_patternfly_component_menu_MenuItemType()));
  }
  return /**@type {MenuItemType}*/ ($Enums.getValueFromNameAndMap(name, MenuItemType.f_namesToValuesMap__org_patternfly_component_menu_MenuItemType_));
 }
 /** @nodts @return {!Array<!MenuItemType>} */
 static m_values__arrayOf_org_patternfly_component_menu_MenuItemType() {
  MenuItemType.$clinit();
  return /**@type {!Array<MenuItemType>}*/ ($Arrays.$init([MenuItemType.f_action__org_patternfly_component_menu_MenuItemType, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType], MenuItemType));
 }
 /** @nodts */
 static $clinit() {
  MenuItemType.$clinit = () =>{};
  MenuItemType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuItemType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
MenuItemType.$ordinal_action__org_patternfly_component_menu_MenuItemType = 0;
/**@const {number} @nodts*/
MenuItemType.$ordinal_link__org_patternfly_component_menu_MenuItemType = 1;
/**@const {number} @nodts*/
MenuItemType.$ordinal_checkbox__org_patternfly_component_menu_MenuItemType = 2;
/**@const {!MenuItemType} @nodts*/
MenuItemType.f_action__org_patternfly_component_menu_MenuItemType = /**@pureOrBreakMyCode*/ MenuItemType.$create__java_lang_String__int($Util.$makeEnumName('action'), MenuItemType.$ordinal_action__org_patternfly_component_menu_MenuItemType);
/**@const {!MenuItemType} @nodts*/
MenuItemType.f_link__org_patternfly_component_menu_MenuItemType = /**@pureOrBreakMyCode*/ MenuItemType.$create__java_lang_String__int($Util.$makeEnumName('link'), MenuItemType.$ordinal_link__org_patternfly_component_menu_MenuItemType);
/**@const {!MenuItemType} @nodts*/
MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType = /**@pureOrBreakMyCode*/ MenuItemType.$create__java_lang_String__int($Util.$makeEnumName('checkbox'), MenuItemType.$ordinal_checkbox__org_patternfly_component_menu_MenuItemType);
/**@type {Map<?string, !MenuItemType>} @nodts*/
MenuItemType.f_namesToValuesMap__org_patternfly_component_menu_MenuItemType_;
$Util.$setClassMetadataForEnum(MenuItemType, 'org.patternfly.component.menu.MenuItemType');

exports = MenuItemType;

//# sourceMappingURL=MenuItemType.js.map
