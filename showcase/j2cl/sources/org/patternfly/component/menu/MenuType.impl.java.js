goog.module('org.patternfly.component.menu.MenuType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<MenuType>}
 */
class MenuType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!MenuType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new MenuType();
  $instance.$ctor__org_patternfly_component_menu_MenuType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!MenuType} */
 static m_valueOf__java_lang_String__org_patternfly_component_menu_MenuType(/** string */ name) {
  MenuType.$clinit();
  if ($Equality.$same(MenuType.f_namesToValuesMap__org_patternfly_component_menu_MenuType_, null)) {
   MenuType.f_namesToValuesMap__org_patternfly_component_menu_MenuType_ = /**@type {Map<?string, !MenuType>}*/ ($Enums.createMapFromValues(MenuType.m_values__arrayOf_org_patternfly_component_menu_MenuType()));
  }
  return /**@type {MenuType}*/ ($Enums.getValueFromNameAndMap(name, MenuType.f_namesToValuesMap__org_patternfly_component_menu_MenuType_));
 }
 /** @nodts @return {!Array<!MenuType>} */
 static m_values__arrayOf_org_patternfly_component_menu_MenuType() {
  MenuType.$clinit();
  return /**@type {!Array<MenuType>}*/ ($Arrays.$init([MenuType.f_menu__org_patternfly_component_menu_MenuType, MenuType.f_dropdown__org_patternfly_component_menu_MenuType, MenuType.f_select__org_patternfly_component_menu_MenuType], MenuType));
 }
 /** @nodts */
 static $clinit() {
  MenuType.$clinit = () =>{};
  MenuType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
MenuType.$ordinal_menu__org_patternfly_component_menu_MenuType = 0;
/**@const {number} @nodts*/
MenuType.$ordinal_dropdown__org_patternfly_component_menu_MenuType = 1;
/**@const {number} @nodts*/
MenuType.$ordinal_select__org_patternfly_component_menu_MenuType = 2;
/**@const {!MenuType} @nodts*/
MenuType.f_menu__org_patternfly_component_menu_MenuType = /**@pureOrBreakMyCode*/ MenuType.$create__java_lang_String__int($Util.$makeEnumName('menu'), MenuType.$ordinal_menu__org_patternfly_component_menu_MenuType);
/**@const {!MenuType} @nodts*/
MenuType.f_dropdown__org_patternfly_component_menu_MenuType = /**@pureOrBreakMyCode*/ MenuType.$create__java_lang_String__int($Util.$makeEnumName('dropdown'), MenuType.$ordinal_dropdown__org_patternfly_component_menu_MenuType);
/**@const {!MenuType} @nodts*/
MenuType.f_select__org_patternfly_component_menu_MenuType = /**@pureOrBreakMyCode*/ MenuType.$create__java_lang_String__int($Util.$makeEnumName('select'), MenuType.$ordinal_select__org_patternfly_component_menu_MenuType);
/**@type {Map<?string, !MenuType>} @nodts*/
MenuType.f_namesToValuesMap__org_patternfly_component_menu_MenuType_;
$Util.$setClassMetadataForEnum(MenuType, 'org.patternfly.component.menu.MenuType');

exports = MenuType;

//# sourceMappingURL=MenuType.js.map
