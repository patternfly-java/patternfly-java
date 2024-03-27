goog.module('org.patternfly.style.Theme$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Theme>}
 */
class Theme extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Theme} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Theme();
  $instance.$ctor__org_patternfly_style_Theme__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Theme__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!Theme} */
 static m_valueOf__java_lang_String__org_patternfly_style_Theme(/** string */ name) {
  Theme.$clinit();
  if ($Equality.$same(Theme.f_namesToValuesMap__org_patternfly_style_Theme_, null)) {
   Theme.f_namesToValuesMap__org_patternfly_style_Theme_ = /**@type {Map<?string, !Theme>}*/ ($Enums.createMapFromValues(Theme.m_values__arrayOf_org_patternfly_style_Theme()));
  }
  return /**@type {Theme}*/ ($Enums.getValueFromNameAndMap(name, Theme.f_namesToValuesMap__org_patternfly_style_Theme_));
 }
 /** @nodts @return {!Array<!Theme>} */
 static m_values__arrayOf_org_patternfly_style_Theme() {
  Theme.$clinit();
  return /**@type {!Array<Theme>}*/ ($Arrays.$init([Theme.f_dark__org_patternfly_style_Theme, Theme.f_light__org_patternfly_style_Theme], Theme));
 }
 /** @nodts */
 static $clinit() {
  Theme.$clinit = () =>{};
  Theme.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Theme;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Theme.$ordinal_dark__org_patternfly_style_Theme = 0;
/**@const {number} @nodts*/
Theme.$ordinal_light__org_patternfly_style_Theme = 1;
/**@const {!Theme} @nodts*/
Theme.f_dark__org_patternfly_style_Theme = /**@pureOrBreakMyCode*/ Theme.$create__java_lang_String__int($Util.$makeEnumName('dark'), Theme.$ordinal_dark__org_patternfly_style_Theme);
/**@const {!Theme} @nodts*/
Theme.f_light__org_patternfly_style_Theme = /**@pureOrBreakMyCode*/ Theme.$create__java_lang_String__int($Util.$makeEnumName('light'), Theme.$ordinal_light__org_patternfly_style_Theme);
/**@type {Map<?string, !Theme>} @nodts*/
Theme.f_namesToValuesMap__org_patternfly_style_Theme_;
$Util.$setClassMetadataForEnum(Theme, 'org.patternfly.style.Theme');

exports = Theme;

//# sourceMappingURL=Theme.js.map
