goog.module('org.patternfly.style.Breakpoint$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Breakpoint>}
 */
class Breakpoint extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Breakpoint;
  /**@type {number} @nodts*/
  this.f_widthValue__org_patternfly_style_Breakpoint = 0;
  /**@type {?string} @nodts*/
  this.f_widthCss__org_patternfly_style_Breakpoint;
  /**@type {number} @nodts*/
  this.f_heightValue__org_patternfly_style_Breakpoint = 0;
  /**@type {?string} @nodts*/
  this.f_heightCss__org_patternfly_style_Breakpoint;
 }
 /** @nodts @return {Breakpoint} */
 static m_breakpoint__int__org_patternfly_style_Breakpoint(/** number */ width) {
  Breakpoint.$clinit();
  if (width >= Breakpoint.$static__2xl__org_patternfly_style_Breakpoint.f_widthValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static__2xl__org_patternfly_style_Breakpoint;
  }
  if (width >= Breakpoint.$static_xl__org_patternfly_style_Breakpoint.f_widthValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static_xl__org_patternfly_style_Breakpoint;
  }
  if (width >= Breakpoint.$static_lg__org_patternfly_style_Breakpoint.f_widthValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static_lg__org_patternfly_style_Breakpoint;
  }
  if (width >= Breakpoint.$static_md__org_patternfly_style_Breakpoint.f_widthValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static_md__org_patternfly_style_Breakpoint;
  }
  if (width >= Breakpoint.$static_sm__org_patternfly_style_Breakpoint.f_widthValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static_sm__org_patternfly_style_Breakpoint;
  }
  return Breakpoint.$static_default___org_patternfly_style_Breakpoint;
 }
 /** @nodts @return {Breakpoint} */
 static m_verticalBreakpoint__int__org_patternfly_style_Breakpoint(/** number */ height) {
  Breakpoint.$clinit();
  if (height >= Breakpoint.$static__2xl__org_patternfly_style_Breakpoint.f_heightValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static__2xl__org_patternfly_style_Breakpoint;
  }
  if (height >= Breakpoint.$static_xl__org_patternfly_style_Breakpoint.f_heightValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static_xl__org_patternfly_style_Breakpoint;
  }
  if (height >= Breakpoint.$static_lg__org_patternfly_style_Breakpoint.f_heightValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static_lg__org_patternfly_style_Breakpoint;
  }
  if (height >= Breakpoint.$static_md__org_patternfly_style_Breakpoint.f_heightValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static_md__org_patternfly_style_Breakpoint;
  }
  if (height >= Breakpoint.$static_sm__org_patternfly_style_Breakpoint.f_heightValue__org_patternfly_style_Breakpoint) {
   return Breakpoint.$static_sm__org_patternfly_style_Breakpoint;
  }
  return Breakpoint.$static_default___org_patternfly_style_Breakpoint;
 }
 /** @nodts @return {!Breakpoint} */
 static $create__java_lang_String__int__java_lang_String__int__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** number */ width, /** ?string */ widthUnit, /** number */ height, /** ?string */ heightUnit) {
  let $instance = new Breakpoint();
  $instance.$ctor__org_patternfly_style_Breakpoint__java_lang_String__int__java_lang_String__int__java_lang_String__int__java_lang_String__void($name, $ordinal, value, width, widthUnit, height, heightUnit);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Breakpoint__java_lang_String__int__java_lang_String__int__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** number */ width, /** ?string */ widthUnit, /** number */ height, /** ?string */ heightUnit) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Breakpoint = value;
  this.f_widthValue__org_patternfly_style_Breakpoint = width;
  this.f_widthCss__org_patternfly_style_Breakpoint = width + j_l_String.m_valueOf__java_lang_Object__java_lang_String(widthUnit);
  this.f_heightValue__org_patternfly_style_Breakpoint = height;
  this.f_heightCss__org_patternfly_style_Breakpoint = height + j_l_String.m_valueOf__java_lang_Object__java_lang_String(heightUnit);
 }
 /** @nodts @return {!Breakpoint} */
 static m_valueOf__java_lang_String__org_patternfly_style_Breakpoint(/** string */ name) {
  Breakpoint.$clinit();
  if ($Equality.$same(Breakpoint.f_namesToValuesMap__org_patternfly_style_Breakpoint_, null)) {
   Breakpoint.f_namesToValuesMap__org_patternfly_style_Breakpoint_ = /**@type {Map<?string, !Breakpoint>}*/ ($Enums.createMapFromValues(Breakpoint.m_values__arrayOf_org_patternfly_style_Breakpoint()));
  }
  return /**@type {Breakpoint}*/ ($Enums.getValueFromNameAndMap(name, Breakpoint.f_namesToValuesMap__org_patternfly_style_Breakpoint_));
 }
 /** @nodts @return {!Array<!Breakpoint>} */
 static m_values__arrayOf_org_patternfly_style_Breakpoint() {
  Breakpoint.$clinit();
  return /**@type {!Array<Breakpoint>}*/ ($Arrays.$init([Breakpoint.$static_default___org_patternfly_style_Breakpoint, Breakpoint.$static_sm__org_patternfly_style_Breakpoint, Breakpoint.$static_md__org_patternfly_style_Breakpoint, Breakpoint.$static_lg__org_patternfly_style_Breakpoint, Breakpoint.$static_xl__org_patternfly_style_Breakpoint, Breakpoint.$static__2xl__org_patternfly_style_Breakpoint], Breakpoint));
 }
 /** @nodts @return {!Breakpoint} */
 static get f_default___org_patternfly_style_Breakpoint() {
  return (Breakpoint.$clinit(), Breakpoint.$static_default___org_patternfly_style_Breakpoint);
 }
 /** @nodts @return {!Breakpoint} */
 static get f_sm__org_patternfly_style_Breakpoint() {
  return (Breakpoint.$clinit(), Breakpoint.$static_sm__org_patternfly_style_Breakpoint);
 }
 /** @nodts @return {!Breakpoint} */
 static get f_md__org_patternfly_style_Breakpoint() {
  return (Breakpoint.$clinit(), Breakpoint.$static_md__org_patternfly_style_Breakpoint);
 }
 /** @nodts @return {!Breakpoint} */
 static get f_lg__org_patternfly_style_Breakpoint() {
  return (Breakpoint.$clinit(), Breakpoint.$static_lg__org_patternfly_style_Breakpoint);
 }
 /** @nodts @return {!Breakpoint} */
 static get f_xl__org_patternfly_style_Breakpoint() {
  return (Breakpoint.$clinit(), Breakpoint.$static_xl__org_patternfly_style_Breakpoint);
 }
 /** @nodts @return {!Breakpoint} */
 static get f__2xl__org_patternfly_style_Breakpoint() {
  return (Breakpoint.$clinit(), Breakpoint.$static__2xl__org_patternfly_style_Breakpoint);
 }
 /** @nodts */
 static $clinit() {
  Breakpoint.$clinit = () =>{};
  Breakpoint.$loadModules();
  Enum.$clinit();
  Breakpoint.$static_default___org_patternfly_style_Breakpoint = Breakpoint.$create__java_lang_String__int__java_lang_String__int__java_lang_String__int__java_lang_String($Util.$makeEnumName('default_'), Breakpoint.$ordinal_default___org_patternfly_style_Breakpoint, 'default', 0, '', 0, '');
  Breakpoint.$static_sm__org_patternfly_style_Breakpoint = Breakpoint.$create__java_lang_String__int__java_lang_String__int__java_lang_String__int__java_lang_String($Util.$makeEnumName('sm'), Breakpoint.$ordinal_sm__org_patternfly_style_Breakpoint, 'sm', 576, 'px', 0, '');
  Breakpoint.$static_md__org_patternfly_style_Breakpoint = Breakpoint.$create__java_lang_String__int__java_lang_String__int__java_lang_String__int__java_lang_String($Util.$makeEnumName('md'), Breakpoint.$ordinal_md__org_patternfly_style_Breakpoint, 'md', 768, 'px', 40, 'rem');
  Breakpoint.$static_lg__org_patternfly_style_Breakpoint = Breakpoint.$create__java_lang_String__int__java_lang_String__int__java_lang_String__int__java_lang_String($Util.$makeEnumName('lg'), Breakpoint.$ordinal_lg__org_patternfly_style_Breakpoint, 'lg', 992, 'px', 48, 'rem');
  Breakpoint.$static_xl__org_patternfly_style_Breakpoint = Breakpoint.$create__java_lang_String__int__java_lang_String__int__java_lang_String__int__java_lang_String($Util.$makeEnumName('xl'), Breakpoint.$ordinal_xl__org_patternfly_style_Breakpoint, 'xl', 1200, 'px', 60, 'rem');
  Breakpoint.$static__2xl__org_patternfly_style_Breakpoint = Breakpoint.$create__java_lang_String__int__java_lang_String__int__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2xl'), Breakpoint.$ordinal__2xl__org_patternfly_style_Breakpoint, '2xl', 1450, 'px', 80, 'rem');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Breakpoint;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Breakpoint.$ordinal_default___org_patternfly_style_Breakpoint = 0;
/**@const {number} @nodts*/
Breakpoint.$ordinal_sm__org_patternfly_style_Breakpoint = 1;
/**@const {number} @nodts*/
Breakpoint.$ordinal_md__org_patternfly_style_Breakpoint = 2;
/**@const {number} @nodts*/
Breakpoint.$ordinal_lg__org_patternfly_style_Breakpoint = 3;
/**@const {number} @nodts*/
Breakpoint.$ordinal_xl__org_patternfly_style_Breakpoint = 4;
/**@const {number} @nodts*/
Breakpoint.$ordinal__2xl__org_patternfly_style_Breakpoint = 5;
/**@private {!Breakpoint} @nodts*/
Breakpoint.$static_default___org_patternfly_style_Breakpoint;
/**@private {!Breakpoint} @nodts*/
Breakpoint.$static_sm__org_patternfly_style_Breakpoint;
/**@private {!Breakpoint} @nodts*/
Breakpoint.$static_md__org_patternfly_style_Breakpoint;
/**@private {!Breakpoint} @nodts*/
Breakpoint.$static_lg__org_patternfly_style_Breakpoint;
/**@private {!Breakpoint} @nodts*/
Breakpoint.$static_xl__org_patternfly_style_Breakpoint;
/**@private {!Breakpoint} @nodts*/
Breakpoint.$static__2xl__org_patternfly_style_Breakpoint;
/**@type {Map<?string, !Breakpoint>} @nodts*/
Breakpoint.f_namesToValuesMap__org_patternfly_style_Breakpoint_;
$Util.$setClassMetadataForEnum(Breakpoint, 'org.patternfly.style.Breakpoint');

exports = Breakpoint;

//# sourceMappingURL=Breakpoint.js.map
