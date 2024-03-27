goog.module('org.patternfly.component.drawer.DrawerColor$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<DrawerColor>}
 */
class DrawerColor extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_drawer_DrawerColor;
 }
 /** @nodts @return {!DrawerColor} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ color) {
  let $instance = new DrawerColor();
  $instance.$ctor__org_patternfly_component_drawer_DrawerColor__java_lang_String__int__java_lang_String__void($name, $ordinal, color);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerColor__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ color) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_component_drawer_DrawerColor = Classes.m_modifier__java_lang_String__java_lang_String(color);
 }
 /** @nodts @return {!DrawerColor} */
 static m_valueOf__java_lang_String__org_patternfly_component_drawer_DrawerColor(/** string */ name) {
  DrawerColor.$clinit();
  if ($Equality.$same(DrawerColor.f_namesToValuesMap__org_patternfly_component_drawer_DrawerColor_, null)) {
   DrawerColor.f_namesToValuesMap__org_patternfly_component_drawer_DrawerColor_ = /**@type {Map<?string, !DrawerColor>}*/ ($Enums.createMapFromValues(DrawerColor.m_values__arrayOf_org_patternfly_component_drawer_DrawerColor()));
  }
  return /**@type {DrawerColor}*/ ($Enums.getValueFromNameAndMap(name, DrawerColor.f_namesToValuesMap__org_patternfly_component_drawer_DrawerColor_));
 }
 /** @nodts @return {!Array<!DrawerColor>} */
 static m_values__arrayOf_org_patternfly_component_drawer_DrawerColor() {
  DrawerColor.$clinit();
  return /**@type {!Array<DrawerColor>}*/ ($Arrays.$init([DrawerColor.$static_light200__org_patternfly_component_drawer_DrawerColor, DrawerColor.$static_noBackground__org_patternfly_component_drawer_DrawerColor], DrawerColor));
 }
 /** @nodts @return {!DrawerColor} */
 static get f_light200__org_patternfly_component_drawer_DrawerColor() {
  return (DrawerColor.$clinit(), DrawerColor.$static_light200__org_patternfly_component_drawer_DrawerColor);
 }
 /** @nodts @return {!DrawerColor} */
 static get f_noBackground__org_patternfly_component_drawer_DrawerColor() {
  return (DrawerColor.$clinit(), DrawerColor.$static_noBackground__org_patternfly_component_drawer_DrawerColor);
 }
 /** @nodts */
 static $clinit() {
  DrawerColor.$clinit = () =>{};
  DrawerColor.$loadModules();
  Enum.$clinit();
  DrawerColor.$static_light200__org_patternfly_component_drawer_DrawerColor = DrawerColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('light200'), DrawerColor.$ordinal_light200__org_patternfly_component_drawer_DrawerColor, 'light-200');
  DrawerColor.$static_noBackground__org_patternfly_component_drawer_DrawerColor = DrawerColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('noBackground'), DrawerColor.$ordinal_noBackground__org_patternfly_component_drawer_DrawerColor, 'no-background');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerColor;
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
DrawerColor.$ordinal_light200__org_patternfly_component_drawer_DrawerColor = 0;
/**@const {number} @nodts*/
DrawerColor.$ordinal_noBackground__org_patternfly_component_drawer_DrawerColor = 1;
/**@private {!DrawerColor} @nodts*/
DrawerColor.$static_light200__org_patternfly_component_drawer_DrawerColor;
/**@private {!DrawerColor} @nodts*/
DrawerColor.$static_noBackground__org_patternfly_component_drawer_DrawerColor;
/**@type {Map<?string, !DrawerColor>} @nodts*/
DrawerColor.f_namesToValuesMap__org_patternfly_component_drawer_DrawerColor_;
$Util.$setClassMetadataForEnum(DrawerColor, 'org.patternfly.component.drawer.DrawerColor');

exports = DrawerColor;

//# sourceMappingURL=DrawerColor.js.map
