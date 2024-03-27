goog.module('org.patternfly.component.menu.MenuToggleType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<MenuToggleType>}
 */
class MenuToggleType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_menu_MenuToggleType;
 }
 /** @nodts @return {!MenuToggleType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ modifier) {
  let $instance = new MenuToggleType();
  $instance.$ctor__org_patternfly_component_menu_MenuToggleType__java_lang_String__int__java_lang_String__void($name, $ordinal, modifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuToggleType__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ modifier) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_component_menu_MenuToggleType = modifier;
 }
 /** @nodts @return {!MenuToggleType} */
 static m_valueOf__java_lang_String__org_patternfly_component_menu_MenuToggleType(/** string */ name) {
  MenuToggleType.$clinit();
  if ($Equality.$same(MenuToggleType.f_namesToValuesMap__org_patternfly_component_menu_MenuToggleType_, null)) {
   MenuToggleType.f_namesToValuesMap__org_patternfly_component_menu_MenuToggleType_ = /**@type {Map<?string, !MenuToggleType>}*/ ($Enums.createMapFromValues(MenuToggleType.m_values__arrayOf_org_patternfly_component_menu_MenuToggleType()));
  }
  return /**@type {MenuToggleType}*/ ($Enums.getValueFromNameAndMap(name, MenuToggleType.f_namesToValuesMap__org_patternfly_component_menu_MenuToggleType_));
 }
 /** @nodts @return {!Array<!MenuToggleType>} */
 static m_values__arrayOf_org_patternfly_component_menu_MenuToggleType() {
  MenuToggleType.$clinit();
  return /**@type {!Array<MenuToggleType>}*/ ($Arrays.$init([MenuToggleType.$static_default___org_patternfly_component_menu_MenuToggleType, MenuToggleType.$static_plain__org_patternfly_component_menu_MenuToggleType, MenuToggleType.$static_plainText__org_patternfly_component_menu_MenuToggleType, MenuToggleType.$static_split__org_patternfly_component_menu_MenuToggleType, MenuToggleType.$static_typeahead__org_patternfly_component_menu_MenuToggleType], MenuToggleType));
 }
 /** @nodts @return {!MenuToggleType} */
 static get f_default___org_patternfly_component_menu_MenuToggleType() {
  return (MenuToggleType.$clinit(), MenuToggleType.$static_default___org_patternfly_component_menu_MenuToggleType);
 }
 /** @nodts @return {!MenuToggleType} */
 static get f_plain__org_patternfly_component_menu_MenuToggleType() {
  return (MenuToggleType.$clinit(), MenuToggleType.$static_plain__org_patternfly_component_menu_MenuToggleType);
 }
 /** @nodts @return {!MenuToggleType} */
 static get f_plainText__org_patternfly_component_menu_MenuToggleType() {
  return (MenuToggleType.$clinit(), MenuToggleType.$static_plainText__org_patternfly_component_menu_MenuToggleType);
 }
 /** @nodts @return {!MenuToggleType} */
 static get f_split__org_patternfly_component_menu_MenuToggleType() {
  return (MenuToggleType.$clinit(), MenuToggleType.$static_split__org_patternfly_component_menu_MenuToggleType);
 }
 /** @nodts @return {!MenuToggleType} */
 static get f_typeahead__org_patternfly_component_menu_MenuToggleType() {
  return (MenuToggleType.$clinit(), MenuToggleType.$static_typeahead__org_patternfly_component_menu_MenuToggleType);
 }
 /** @nodts */
 static $clinit() {
  MenuToggleType.$clinit = () =>{};
  MenuToggleType.$loadModules();
  Enum.$clinit();
  MenuToggleType.$static_default___org_patternfly_component_menu_MenuToggleType = MenuToggleType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('default_'), MenuToggleType.$ordinal_default___org_patternfly_component_menu_MenuToggleType, '');
  MenuToggleType.$static_plain__org_patternfly_component_menu_MenuToggleType = MenuToggleType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('plain'), MenuToggleType.$ordinal_plain__org_patternfly_component_menu_MenuToggleType, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_style_Classes));
  MenuToggleType.$static_plainText__org_patternfly_component_menu_MenuToggleType = MenuToggleType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('plainText'), MenuToggleType.$ordinal_plainText__org_patternfly_component_menu_MenuToggleType, j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_style_Classes)) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_text__org_patternfly_style_Classes)));
  MenuToggleType.$static_split__org_patternfly_component_menu_MenuToggleType = MenuToggleType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('split'), MenuToggleType.$ordinal_split__org_patternfly_component_menu_MenuToggleType, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_splitButton__org_patternfly_style_Classes));
  MenuToggleType.$static_typeahead__org_patternfly_component_menu_MenuToggleType = MenuToggleType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('typeahead'), MenuToggleType.$ordinal_typeahead__org_patternfly_component_menu_MenuToggleType, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_typeahead__org_patternfly_style_Classes));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuToggleType;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
MenuToggleType.$ordinal_default___org_patternfly_component_menu_MenuToggleType = 0;
/**@const {number} @nodts*/
MenuToggleType.$ordinal_plain__org_patternfly_component_menu_MenuToggleType = 1;
/**@const {number} @nodts*/
MenuToggleType.$ordinal_plainText__org_patternfly_component_menu_MenuToggleType = 2;
/**@const {number} @nodts*/
MenuToggleType.$ordinal_split__org_patternfly_component_menu_MenuToggleType = 3;
/**@const {number} @nodts*/
MenuToggleType.$ordinal_typeahead__org_patternfly_component_menu_MenuToggleType = 4;
/**@private {!MenuToggleType} @nodts*/
MenuToggleType.$static_default___org_patternfly_component_menu_MenuToggleType;
/**@private {!MenuToggleType} @nodts*/
MenuToggleType.$static_plain__org_patternfly_component_menu_MenuToggleType;
/**@private {!MenuToggleType} @nodts*/
MenuToggleType.$static_plainText__org_patternfly_component_menu_MenuToggleType;
/**@private {!MenuToggleType} @nodts*/
MenuToggleType.$static_split__org_patternfly_component_menu_MenuToggleType;
/**@private {!MenuToggleType} @nodts*/
MenuToggleType.$static_typeahead__org_patternfly_component_menu_MenuToggleType;
/**@type {Map<?string, !MenuToggleType>} @nodts*/
MenuToggleType.f_namesToValuesMap__org_patternfly_component_menu_MenuToggleType_;
$Util.$setClassMetadataForEnum(MenuToggleType, 'org.patternfly.component.menu.MenuToggleType');

exports = MenuToggleType;

//# sourceMappingURL=MenuToggleType.js.map
