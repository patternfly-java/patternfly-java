goog.module('org.patternfly.component.drawer.DrawerPanelWidth$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<DrawerPanelWidth>}
 * @implements {TypedModifier}
 */
class DrawerPanelWidth extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_drawer_DrawerPanelWidth_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_drawer_DrawerPanelWidth_;
 }
 /** @nodts @return {!DrawerPanelWidth} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new DrawerPanelWidth();
  $instance.$ctor__org_patternfly_component_drawer_DrawerPanelWidth__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerPanelWidth__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_drawer_DrawerPanelWidth_ = value;
  this.f_modifier__org_patternfly_component_drawer_DrawerPanelWidth_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_component_drawer_DrawerPanelWidth_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_component_drawer_DrawerPanelWidth_;
 }
 /** @nodts @return {!DrawerPanelWidth} */
 static m_valueOf__java_lang_String__org_patternfly_component_drawer_DrawerPanelWidth(/** string */ name) {
  DrawerPanelWidth.$clinit();
  if ($Equality.$same(DrawerPanelWidth.f_namesToValuesMap__org_patternfly_component_drawer_DrawerPanelWidth_, null)) {
   DrawerPanelWidth.f_namesToValuesMap__org_patternfly_component_drawer_DrawerPanelWidth_ = /**@type {Map<?string, !DrawerPanelWidth>}*/ ($Enums.createMapFromValues(DrawerPanelWidth.m_values__arrayOf_org_patternfly_component_drawer_DrawerPanelWidth()));
  }
  return /**@type {DrawerPanelWidth}*/ ($Enums.getValueFromNameAndMap(name, DrawerPanelWidth.f_namesToValuesMap__org_patternfly_component_drawer_DrawerPanelWidth_));
 }
 /** @nodts @return {!Array<!DrawerPanelWidth>} */
 static m_values__arrayOf_org_patternfly_component_drawer_DrawerPanelWidth() {
  DrawerPanelWidth.$clinit();
  return /**@type {!Array<DrawerPanelWidth>}*/ ($Arrays.$init([DrawerPanelWidth.$static_width25__org_patternfly_component_drawer_DrawerPanelWidth, DrawerPanelWidth.$static_width33__org_patternfly_component_drawer_DrawerPanelWidth, DrawerPanelWidth.$static_width50__org_patternfly_component_drawer_DrawerPanelWidth, DrawerPanelWidth.$static_width66__org_patternfly_component_drawer_DrawerPanelWidth, DrawerPanelWidth.$static_width75__org_patternfly_component_drawer_DrawerPanelWidth, DrawerPanelWidth.$static_width100__org_patternfly_component_drawer_DrawerPanelWidth], DrawerPanelWidth));
 }
 /** @nodts @return {!DrawerPanelWidth} */
 static get f_width25__org_patternfly_component_drawer_DrawerPanelWidth() {
  return (DrawerPanelWidth.$clinit(), DrawerPanelWidth.$static_width25__org_patternfly_component_drawer_DrawerPanelWidth);
 }
 /** @nodts @return {!DrawerPanelWidth} */
 static get f_width33__org_patternfly_component_drawer_DrawerPanelWidth() {
  return (DrawerPanelWidth.$clinit(), DrawerPanelWidth.$static_width33__org_patternfly_component_drawer_DrawerPanelWidth);
 }
 /** @nodts @return {!DrawerPanelWidth} */
 static get f_width50__org_patternfly_component_drawer_DrawerPanelWidth() {
  return (DrawerPanelWidth.$clinit(), DrawerPanelWidth.$static_width50__org_patternfly_component_drawer_DrawerPanelWidth);
 }
 /** @nodts @return {!DrawerPanelWidth} */
 static get f_width66__org_patternfly_component_drawer_DrawerPanelWidth() {
  return (DrawerPanelWidth.$clinit(), DrawerPanelWidth.$static_width66__org_patternfly_component_drawer_DrawerPanelWidth);
 }
 /** @nodts @return {!DrawerPanelWidth} */
 static get f_width75__org_patternfly_component_drawer_DrawerPanelWidth() {
  return (DrawerPanelWidth.$clinit(), DrawerPanelWidth.$static_width75__org_patternfly_component_drawer_DrawerPanelWidth);
 }
 /** @nodts @return {!DrawerPanelWidth} */
 static get f_width100__org_patternfly_component_drawer_DrawerPanelWidth() {
  return (DrawerPanelWidth.$clinit(), DrawerPanelWidth.$static_width100__org_patternfly_component_drawer_DrawerPanelWidth);
 }
 /** @nodts */
 static $clinit() {
  DrawerPanelWidth.$clinit = () =>{};
  DrawerPanelWidth.$loadModules();
  Enum.$clinit();
  DrawerPanelWidth.$static_width25__org_patternfly_component_drawer_DrawerPanelWidth = DrawerPanelWidth.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width25'), DrawerPanelWidth.$ordinal_width25__org_patternfly_component_drawer_DrawerPanelWidth, 'width-25');
  DrawerPanelWidth.$static_width33__org_patternfly_component_drawer_DrawerPanelWidth = DrawerPanelWidth.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width33'), DrawerPanelWidth.$ordinal_width33__org_patternfly_component_drawer_DrawerPanelWidth, 'width-33');
  DrawerPanelWidth.$static_width50__org_patternfly_component_drawer_DrawerPanelWidth = DrawerPanelWidth.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width50'), DrawerPanelWidth.$ordinal_width50__org_patternfly_component_drawer_DrawerPanelWidth, 'width-50');
  DrawerPanelWidth.$static_width66__org_patternfly_component_drawer_DrawerPanelWidth = DrawerPanelWidth.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width66'), DrawerPanelWidth.$ordinal_width66__org_patternfly_component_drawer_DrawerPanelWidth, 'width-66');
  DrawerPanelWidth.$static_width75__org_patternfly_component_drawer_DrawerPanelWidth = DrawerPanelWidth.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width75'), DrawerPanelWidth.$ordinal_width75__org_patternfly_component_drawer_DrawerPanelWidth, 'width-75');
  DrawerPanelWidth.$static_width100__org_patternfly_component_drawer_DrawerPanelWidth = DrawerPanelWidth.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('width100'), DrawerPanelWidth.$ordinal_width100__org_patternfly_component_drawer_DrawerPanelWidth, 'width-100');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerPanelWidth;
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
DrawerPanelWidth.$ordinal_width25__org_patternfly_component_drawer_DrawerPanelWidth = 0;
/**@const {number} @nodts*/
DrawerPanelWidth.$ordinal_width33__org_patternfly_component_drawer_DrawerPanelWidth = 1;
/**@const {number} @nodts*/
DrawerPanelWidth.$ordinal_width50__org_patternfly_component_drawer_DrawerPanelWidth = 2;
/**@const {number} @nodts*/
DrawerPanelWidth.$ordinal_width66__org_patternfly_component_drawer_DrawerPanelWidth = 3;
/**@const {number} @nodts*/
DrawerPanelWidth.$ordinal_width75__org_patternfly_component_drawer_DrawerPanelWidth = 4;
/**@const {number} @nodts*/
DrawerPanelWidth.$ordinal_width100__org_patternfly_component_drawer_DrawerPanelWidth = 5;
/**@private {!DrawerPanelWidth} @nodts*/
DrawerPanelWidth.$static_width25__org_patternfly_component_drawer_DrawerPanelWidth;
/**@private {!DrawerPanelWidth} @nodts*/
DrawerPanelWidth.$static_width33__org_patternfly_component_drawer_DrawerPanelWidth;
/**@private {!DrawerPanelWidth} @nodts*/
DrawerPanelWidth.$static_width50__org_patternfly_component_drawer_DrawerPanelWidth;
/**@private {!DrawerPanelWidth} @nodts*/
DrawerPanelWidth.$static_width66__org_patternfly_component_drawer_DrawerPanelWidth;
/**@private {!DrawerPanelWidth} @nodts*/
DrawerPanelWidth.$static_width75__org_patternfly_component_drawer_DrawerPanelWidth;
/**@private {!DrawerPanelWidth} @nodts*/
DrawerPanelWidth.$static_width100__org_patternfly_component_drawer_DrawerPanelWidth;
/**@type {Map<?string, !DrawerPanelWidth>} @nodts*/
DrawerPanelWidth.f_namesToValuesMap__org_patternfly_component_drawer_DrawerPanelWidth_;
TypedModifier.$markImplementor(DrawerPanelWidth);
$Util.$setClassMetadataForEnum(DrawerPanelWidth, 'org.patternfly.component.drawer.DrawerPanelWidth');

exports = DrawerPanelWidth;

//# sourceMappingURL=DrawerPanelWidth.js.map
