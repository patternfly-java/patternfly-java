goog.module('org.patternfly.layout.flex.AlignContent$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<AlignContent>}
 * @implements {TypedModifier}
 */
class AlignContent extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_AlignContent_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_AlignContent_;
 }
 /** @nodts @return {!AlignContent} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new AlignContent();
  $instance.$ctor__org_patternfly_layout_flex_AlignContent__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_AlignContent__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_AlignContent_ = value;
  this.f_modifier__org_patternfly_layout_flex_AlignContent_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_AlignContent_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_AlignContent_;
 }
 /** @nodts @return {!AlignContent} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_AlignContent(/** string */ name) {
  AlignContent.$clinit();
  if ($Equality.$same(AlignContent.f_namesToValuesMap__org_patternfly_layout_flex_AlignContent_, null)) {
   AlignContent.f_namesToValuesMap__org_patternfly_layout_flex_AlignContent_ = /**@type {Map<?string, !AlignContent>}*/ ($Enums.createMapFromValues(AlignContent.m_values__arrayOf_org_patternfly_layout_flex_AlignContent()));
  }
  return /**@type {AlignContent}*/ ($Enums.getValueFromNameAndMap(name, AlignContent.f_namesToValuesMap__org_patternfly_layout_flex_AlignContent_));
 }
 /** @nodts @return {!Array<!AlignContent>} */
 static m_values__arrayOf_org_patternfly_layout_flex_AlignContent() {
  AlignContent.$clinit();
  return /**@type {!Array<AlignContent>}*/ ($Arrays.$init([AlignContent.$static_flexStart__org_patternfly_layout_flex_AlignContent, AlignContent.$static_flexEnd__org_patternfly_layout_flex_AlignContent, AlignContent.$static_center__org_patternfly_layout_flex_AlignContent, AlignContent.$static_stretch__org_patternfly_layout_flex_AlignContent, AlignContent.$static_spaceBetween__org_patternfly_layout_flex_AlignContent, AlignContent.$static_spaceAround__org_patternfly_layout_flex_AlignContent], AlignContent));
 }
 /** @nodts @return {!AlignContent} */
 static get f_flexStart__org_patternfly_layout_flex_AlignContent() {
  return (AlignContent.$clinit(), AlignContent.$static_flexStart__org_patternfly_layout_flex_AlignContent);
 }
 /** @nodts @return {!AlignContent} */
 static get f_flexEnd__org_patternfly_layout_flex_AlignContent() {
  return (AlignContent.$clinit(), AlignContent.$static_flexEnd__org_patternfly_layout_flex_AlignContent);
 }
 /** @nodts @return {!AlignContent} */
 static get f_center__org_patternfly_layout_flex_AlignContent() {
  return (AlignContent.$clinit(), AlignContent.$static_center__org_patternfly_layout_flex_AlignContent);
 }
 /** @nodts @return {!AlignContent} */
 static get f_stretch__org_patternfly_layout_flex_AlignContent() {
  return (AlignContent.$clinit(), AlignContent.$static_stretch__org_patternfly_layout_flex_AlignContent);
 }
 /** @nodts @return {!AlignContent} */
 static get f_spaceBetween__org_patternfly_layout_flex_AlignContent() {
  return (AlignContent.$clinit(), AlignContent.$static_spaceBetween__org_patternfly_layout_flex_AlignContent);
 }
 /** @nodts @return {!AlignContent} */
 static get f_spaceAround__org_patternfly_layout_flex_AlignContent() {
  return (AlignContent.$clinit(), AlignContent.$static_spaceAround__org_patternfly_layout_flex_AlignContent);
 }
 /** @nodts */
 static $clinit() {
  AlignContent.$clinit = () =>{};
  AlignContent.$loadModules();
  Enum.$clinit();
  AlignContent.$static_flexStart__org_patternfly_layout_flex_AlignContent = AlignContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('flexStart'), AlignContent.$ordinal_flexStart__org_patternfly_layout_flex_AlignContent, 'align-content-flex-start');
  AlignContent.$static_flexEnd__org_patternfly_layout_flex_AlignContent = AlignContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('flexEnd'), AlignContent.$ordinal_flexEnd__org_patternfly_layout_flex_AlignContent, 'align-content-flex-end');
  AlignContent.$static_center__org_patternfly_layout_flex_AlignContent = AlignContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('center'), AlignContent.$ordinal_center__org_patternfly_layout_flex_AlignContent, 'align-content-center');
  AlignContent.$static_stretch__org_patternfly_layout_flex_AlignContent = AlignContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('stretch'), AlignContent.$ordinal_stretch__org_patternfly_layout_flex_AlignContent, 'align-content-stretch');
  AlignContent.$static_spaceBetween__org_patternfly_layout_flex_AlignContent = AlignContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('spaceBetween'), AlignContent.$ordinal_spaceBetween__org_patternfly_layout_flex_AlignContent, 'align-content-space-between');
  AlignContent.$static_spaceAround__org_patternfly_layout_flex_AlignContent = AlignContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('spaceAround'), AlignContent.$ordinal_spaceAround__org_patternfly_layout_flex_AlignContent, 'align-content-space-around');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlignContent;
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
AlignContent.$ordinal_flexStart__org_patternfly_layout_flex_AlignContent = 0;
/**@const {number} @nodts*/
AlignContent.$ordinal_flexEnd__org_patternfly_layout_flex_AlignContent = 1;
/**@const {number} @nodts*/
AlignContent.$ordinal_center__org_patternfly_layout_flex_AlignContent = 2;
/**@const {number} @nodts*/
AlignContent.$ordinal_stretch__org_patternfly_layout_flex_AlignContent = 3;
/**@const {number} @nodts*/
AlignContent.$ordinal_spaceBetween__org_patternfly_layout_flex_AlignContent = 4;
/**@const {number} @nodts*/
AlignContent.$ordinal_spaceAround__org_patternfly_layout_flex_AlignContent = 5;
/**@private {!AlignContent} @nodts*/
AlignContent.$static_flexStart__org_patternfly_layout_flex_AlignContent;
/**@private {!AlignContent} @nodts*/
AlignContent.$static_flexEnd__org_patternfly_layout_flex_AlignContent;
/**@private {!AlignContent} @nodts*/
AlignContent.$static_center__org_patternfly_layout_flex_AlignContent;
/**@private {!AlignContent} @nodts*/
AlignContent.$static_stretch__org_patternfly_layout_flex_AlignContent;
/**@private {!AlignContent} @nodts*/
AlignContent.$static_spaceBetween__org_patternfly_layout_flex_AlignContent;
/**@private {!AlignContent} @nodts*/
AlignContent.$static_spaceAround__org_patternfly_layout_flex_AlignContent;
/**@type {Map<?string, !AlignContent>} @nodts*/
AlignContent.f_namesToValuesMap__org_patternfly_layout_flex_AlignContent_;
TypedModifier.$markImplementor(AlignContent);
$Util.$setClassMetadataForEnum(AlignContent, 'org.patternfly.layout.flex.AlignContent');

exports = AlignContent;

//# sourceMappingURL=AlignContent.js.map
