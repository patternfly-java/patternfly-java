goog.module('org.patternfly.layout.flex.JustifyContent$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<JustifyContent>}
 * @implements {TypedModifier}
 */
class JustifyContent extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_JustifyContent_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_JustifyContent_;
 }
 /** @nodts @return {!JustifyContent} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new JustifyContent();
  $instance.$ctor__org_patternfly_layout_flex_JustifyContent__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_JustifyContent__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_JustifyContent_ = value;
  this.f_modifier__org_patternfly_layout_flex_JustifyContent_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_JustifyContent_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_JustifyContent_;
 }
 /** @nodts @return {!JustifyContent} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_JustifyContent(/** string */ name) {
  JustifyContent.$clinit();
  if ($Equality.$same(JustifyContent.f_namesToValuesMap__org_patternfly_layout_flex_JustifyContent_, null)) {
   JustifyContent.f_namesToValuesMap__org_patternfly_layout_flex_JustifyContent_ = /**@type {Map<?string, !JustifyContent>}*/ ($Enums.createMapFromValues(JustifyContent.m_values__arrayOf_org_patternfly_layout_flex_JustifyContent()));
  }
  return /**@type {JustifyContent}*/ ($Enums.getValueFromNameAndMap(name, JustifyContent.f_namesToValuesMap__org_patternfly_layout_flex_JustifyContent_));
 }
 /** @nodts @return {!Array<!JustifyContent>} */
 static m_values__arrayOf_org_patternfly_layout_flex_JustifyContent() {
  JustifyContent.$clinit();
  return /**@type {!Array<JustifyContent>}*/ ($Arrays.$init([JustifyContent.$static_flexStart__org_patternfly_layout_flex_JustifyContent, JustifyContent.$static_flexEnd__org_patternfly_layout_flex_JustifyContent, JustifyContent.$static_center__org_patternfly_layout_flex_JustifyContent, JustifyContent.$static_spaceBetween__org_patternfly_layout_flex_JustifyContent, JustifyContent.$static_spaceAround__org_patternfly_layout_flex_JustifyContent, JustifyContent.$static_spaceEvenly__org_patternfly_layout_flex_JustifyContent], JustifyContent));
 }
 /** @nodts @return {!JustifyContent} */
 static get f_flexStart__org_patternfly_layout_flex_JustifyContent() {
  return (JustifyContent.$clinit(), JustifyContent.$static_flexStart__org_patternfly_layout_flex_JustifyContent);
 }
 /** @nodts @return {!JustifyContent} */
 static get f_flexEnd__org_patternfly_layout_flex_JustifyContent() {
  return (JustifyContent.$clinit(), JustifyContent.$static_flexEnd__org_patternfly_layout_flex_JustifyContent);
 }
 /** @nodts @return {!JustifyContent} */
 static get f_center__org_patternfly_layout_flex_JustifyContent() {
  return (JustifyContent.$clinit(), JustifyContent.$static_center__org_patternfly_layout_flex_JustifyContent);
 }
 /** @nodts @return {!JustifyContent} */
 static get f_spaceBetween__org_patternfly_layout_flex_JustifyContent() {
  return (JustifyContent.$clinit(), JustifyContent.$static_spaceBetween__org_patternfly_layout_flex_JustifyContent);
 }
 /** @nodts @return {!JustifyContent} */
 static get f_spaceAround__org_patternfly_layout_flex_JustifyContent() {
  return (JustifyContent.$clinit(), JustifyContent.$static_spaceAround__org_patternfly_layout_flex_JustifyContent);
 }
 /** @nodts @return {!JustifyContent} */
 static get f_spaceEvenly__org_patternfly_layout_flex_JustifyContent() {
  return (JustifyContent.$clinit(), JustifyContent.$static_spaceEvenly__org_patternfly_layout_flex_JustifyContent);
 }
 /** @nodts */
 static $clinit() {
  JustifyContent.$clinit = () =>{};
  JustifyContent.$loadModules();
  Enum.$clinit();
  JustifyContent.$static_flexStart__org_patternfly_layout_flex_JustifyContent = JustifyContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('flexStart'), JustifyContent.$ordinal_flexStart__org_patternfly_layout_flex_JustifyContent, 'justify-content-flex-start');
  JustifyContent.$static_flexEnd__org_patternfly_layout_flex_JustifyContent = JustifyContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('flexEnd'), JustifyContent.$ordinal_flexEnd__org_patternfly_layout_flex_JustifyContent, 'justify-content-flex-end');
  JustifyContent.$static_center__org_patternfly_layout_flex_JustifyContent = JustifyContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('center'), JustifyContent.$ordinal_center__org_patternfly_layout_flex_JustifyContent, 'justify-content-center');
  JustifyContent.$static_spaceBetween__org_patternfly_layout_flex_JustifyContent = JustifyContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('spaceBetween'), JustifyContent.$ordinal_spaceBetween__org_patternfly_layout_flex_JustifyContent, 'justify-content-space-between');
  JustifyContent.$static_spaceAround__org_patternfly_layout_flex_JustifyContent = JustifyContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('spaceAround'), JustifyContent.$ordinal_spaceAround__org_patternfly_layout_flex_JustifyContent, 'justify-content-space-around');
  JustifyContent.$static_spaceEvenly__org_patternfly_layout_flex_JustifyContent = JustifyContent.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('spaceEvenly'), JustifyContent.$ordinal_spaceEvenly__org_patternfly_layout_flex_JustifyContent, 'justify-content-space-evenly');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JustifyContent;
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
JustifyContent.$ordinal_flexStart__org_patternfly_layout_flex_JustifyContent = 0;
/**@const {number} @nodts*/
JustifyContent.$ordinal_flexEnd__org_patternfly_layout_flex_JustifyContent = 1;
/**@const {number} @nodts*/
JustifyContent.$ordinal_center__org_patternfly_layout_flex_JustifyContent = 2;
/**@const {number} @nodts*/
JustifyContent.$ordinal_spaceBetween__org_patternfly_layout_flex_JustifyContent = 3;
/**@const {number} @nodts*/
JustifyContent.$ordinal_spaceAround__org_patternfly_layout_flex_JustifyContent = 4;
/**@const {number} @nodts*/
JustifyContent.$ordinal_spaceEvenly__org_patternfly_layout_flex_JustifyContent = 5;
/**@private {!JustifyContent} @nodts*/
JustifyContent.$static_flexStart__org_patternfly_layout_flex_JustifyContent;
/**@private {!JustifyContent} @nodts*/
JustifyContent.$static_flexEnd__org_patternfly_layout_flex_JustifyContent;
/**@private {!JustifyContent} @nodts*/
JustifyContent.$static_center__org_patternfly_layout_flex_JustifyContent;
/**@private {!JustifyContent} @nodts*/
JustifyContent.$static_spaceBetween__org_patternfly_layout_flex_JustifyContent;
/**@private {!JustifyContent} @nodts*/
JustifyContent.$static_spaceAround__org_patternfly_layout_flex_JustifyContent;
/**@private {!JustifyContent} @nodts*/
JustifyContent.$static_spaceEvenly__org_patternfly_layout_flex_JustifyContent;
/**@type {Map<?string, !JustifyContent>} @nodts*/
JustifyContent.f_namesToValuesMap__org_patternfly_layout_flex_JustifyContent_;
TypedModifier.$markImplementor(JustifyContent);
$Util.$setClassMetadataForEnum(JustifyContent, 'org.patternfly.layout.flex.JustifyContent');

exports = JustifyContent;

//# sourceMappingURL=JustifyContent.js.map
