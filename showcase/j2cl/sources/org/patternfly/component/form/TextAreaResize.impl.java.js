goog.module('org.patternfly.component.form.TextAreaResize$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<TextAreaResize>}
 */
class TextAreaResize extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_form_TextAreaResize;
 }
 /** @nodts @return {!TextAreaResize} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ css) {
  let $instance = new TextAreaResize();
  $instance.$ctor__org_patternfly_component_form_TextAreaResize__java_lang_String__int__java_lang_String__void($name, $ordinal, css);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_TextAreaResize__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ css) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_component_form_TextAreaResize = Classes.m_modifier__java_lang_String__java_lang_String(css);
 }
 /** @nodts @return {!TextAreaResize} */
 static m_valueOf__java_lang_String__org_patternfly_component_form_TextAreaResize(/** string */ name) {
  TextAreaResize.$clinit();
  if ($Equality.$same(TextAreaResize.f_namesToValuesMap__org_patternfly_component_form_TextAreaResize_, null)) {
   TextAreaResize.f_namesToValuesMap__org_patternfly_component_form_TextAreaResize_ = /**@type {Map<?string, !TextAreaResize>}*/ ($Enums.createMapFromValues(TextAreaResize.m_values__arrayOf_org_patternfly_component_form_TextAreaResize()));
  }
  return /**@type {TextAreaResize}*/ ($Enums.getValueFromNameAndMap(name, TextAreaResize.f_namesToValuesMap__org_patternfly_component_form_TextAreaResize_));
 }
 /** @nodts @return {!Array<!TextAreaResize>} */
 static m_values__arrayOf_org_patternfly_component_form_TextAreaResize() {
  TextAreaResize.$clinit();
  return /**@type {!Array<TextAreaResize>}*/ ($Arrays.$init([TextAreaResize.$static_both__org_patternfly_component_form_TextAreaResize, TextAreaResize.$static_horizontal__org_patternfly_component_form_TextAreaResize, TextAreaResize.$static_vertical__org_patternfly_component_form_TextAreaResize], TextAreaResize));
 }
 /** @nodts @return {!TextAreaResize} */
 static get f_both__org_patternfly_component_form_TextAreaResize() {
  return (TextAreaResize.$clinit(), TextAreaResize.$static_both__org_patternfly_component_form_TextAreaResize);
 }
 /** @nodts @return {!TextAreaResize} */
 static get f_horizontal__org_patternfly_component_form_TextAreaResize() {
  return (TextAreaResize.$clinit(), TextAreaResize.$static_horizontal__org_patternfly_component_form_TextAreaResize);
 }
 /** @nodts @return {!TextAreaResize} */
 static get f_vertical__org_patternfly_component_form_TextAreaResize() {
  return (TextAreaResize.$clinit(), TextAreaResize.$static_vertical__org_patternfly_component_form_TextAreaResize);
 }
 /** @nodts */
 static $clinit() {
  TextAreaResize.$clinit = () =>{};
  TextAreaResize.$loadModules();
  Enum.$clinit();
  TextAreaResize.$static_both__org_patternfly_component_form_TextAreaResize = TextAreaResize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('both'), TextAreaResize.$ordinal_both__org_patternfly_component_form_TextAreaResize, Classes.f_resizeBoth__org_patternfly_style_Classes);
  TextAreaResize.$static_horizontal__org_patternfly_component_form_TextAreaResize = TextAreaResize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('horizontal'), TextAreaResize.$ordinal_horizontal__org_patternfly_component_form_TextAreaResize, Classes.f_resizeHorizontal__org_patternfly_style_Classes);
  TextAreaResize.$static_vertical__org_patternfly_component_form_TextAreaResize = TextAreaResize.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('vertical'), TextAreaResize.$ordinal_vertical__org_patternfly_component_form_TextAreaResize, Classes.f_resizeVertical__org_patternfly_style_Classes);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextAreaResize;
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
TextAreaResize.$ordinal_both__org_patternfly_component_form_TextAreaResize = 0;
/**@const {number} @nodts*/
TextAreaResize.$ordinal_horizontal__org_patternfly_component_form_TextAreaResize = 1;
/**@const {number} @nodts*/
TextAreaResize.$ordinal_vertical__org_patternfly_component_form_TextAreaResize = 2;
/**@private {!TextAreaResize} @nodts*/
TextAreaResize.$static_both__org_patternfly_component_form_TextAreaResize;
/**@private {!TextAreaResize} @nodts*/
TextAreaResize.$static_horizontal__org_patternfly_component_form_TextAreaResize;
/**@private {!TextAreaResize} @nodts*/
TextAreaResize.$static_vertical__org_patternfly_component_form_TextAreaResize;
/**@type {Map<?string, !TextAreaResize>} @nodts*/
TextAreaResize.f_namesToValuesMap__org_patternfly_component_form_TextAreaResize_;
$Util.$setClassMetadataForEnum(TextAreaResize, 'org.patternfly.component.form.TextAreaResize');

exports = TextAreaResize;

//# sourceMappingURL=TextAreaResize.js.map
