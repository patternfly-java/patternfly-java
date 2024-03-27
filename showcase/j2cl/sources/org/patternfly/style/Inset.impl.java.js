goog.module('org.patternfly.style.Inset$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Inset>}
 * @implements {TypedModifier}
 */
class Inset extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Inset_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Inset_;
 }
 /** @nodts @return {!Inset} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Inset();
  $instance.$ctor__org_patternfly_style_Inset__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Inset__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Inset_ = value;
  this.f_modifier__org_patternfly_style_Inset_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Inset_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Inset_;
 }
 /** @nodts @return {!Inset} */
 static m_valueOf__java_lang_String__org_patternfly_style_Inset(/** string */ name) {
  Inset.$clinit();
  if ($Equality.$same(Inset.f_namesToValuesMap__org_patternfly_style_Inset_, null)) {
   Inset.f_namesToValuesMap__org_patternfly_style_Inset_ = /**@type {Map<?string, !Inset>}*/ ($Enums.createMapFromValues(Inset.m_values__arrayOf_org_patternfly_style_Inset()));
  }
  return /**@type {Inset}*/ ($Enums.getValueFromNameAndMap(name, Inset.f_namesToValuesMap__org_patternfly_style_Inset_));
 }
 /** @nodts @return {!Array<!Inset>} */
 static m_values__arrayOf_org_patternfly_style_Inset() {
  Inset.$clinit();
  return /**@type {!Array<Inset>}*/ ($Arrays.$init([Inset.$static_none__org_patternfly_style_Inset, Inset.$static_xs__org_patternfly_style_Inset, Inset.$static_sm__org_patternfly_style_Inset, Inset.$static_md__org_patternfly_style_Inset, Inset.$static_lg__org_patternfly_style_Inset, Inset.$static_xl__org_patternfly_style_Inset, Inset.$static__2xl__org_patternfly_style_Inset, Inset.$static__3xl__org_patternfly_style_Inset], Inset));
 }
 /** @nodts @return {!Inset} */
 static get f_none__org_patternfly_style_Inset() {
  return (Inset.$clinit(), Inset.$static_none__org_patternfly_style_Inset);
 }
 /** @nodts @return {!Inset} */
 static get f_xs__org_patternfly_style_Inset() {
  return (Inset.$clinit(), Inset.$static_xs__org_patternfly_style_Inset);
 }
 /** @nodts @return {!Inset} */
 static get f_sm__org_patternfly_style_Inset() {
  return (Inset.$clinit(), Inset.$static_sm__org_patternfly_style_Inset);
 }
 /** @nodts @return {!Inset} */
 static get f_md__org_patternfly_style_Inset() {
  return (Inset.$clinit(), Inset.$static_md__org_patternfly_style_Inset);
 }
 /** @nodts @return {!Inset} */
 static get f_lg__org_patternfly_style_Inset() {
  return (Inset.$clinit(), Inset.$static_lg__org_patternfly_style_Inset);
 }
 /** @nodts @return {!Inset} */
 static get f_xl__org_patternfly_style_Inset() {
  return (Inset.$clinit(), Inset.$static_xl__org_patternfly_style_Inset);
 }
 /** @nodts @return {!Inset} */
 static get f__2xl__org_patternfly_style_Inset() {
  return (Inset.$clinit(), Inset.$static__2xl__org_patternfly_style_Inset);
 }
 /** @nodts @return {!Inset} */
 static get f__3xl__org_patternfly_style_Inset() {
  return (Inset.$clinit(), Inset.$static__3xl__org_patternfly_style_Inset);
 }
 /** @nodts */
 static $clinit() {
  Inset.$clinit = () =>{};
  Inset.$loadModules();
  Enum.$clinit();
  Inset.$static_none__org_patternfly_style_Inset = Inset.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), Inset.$ordinal_none__org_patternfly_style_Inset, 'inset-none');
  Inset.$static_xs__org_patternfly_style_Inset = Inset.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xs'), Inset.$ordinal_xs__org_patternfly_style_Inset, 'inset-xs');
  Inset.$static_sm__org_patternfly_style_Inset = Inset.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sm'), Inset.$ordinal_sm__org_patternfly_style_Inset, 'inset-sm');
  Inset.$static_md__org_patternfly_style_Inset = Inset.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('md'), Inset.$ordinal_md__org_patternfly_style_Inset, 'inset-md');
  Inset.$static_lg__org_patternfly_style_Inset = Inset.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lg'), Inset.$ordinal_lg__org_patternfly_style_Inset, 'inset-lg');
  Inset.$static_xl__org_patternfly_style_Inset = Inset.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xl'), Inset.$ordinal_xl__org_patternfly_style_Inset, 'inset-xl');
  Inset.$static__2xl__org_patternfly_style_Inset = Inset.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2xl'), Inset.$ordinal__2xl__org_patternfly_style_Inset, 'inset-2xl');
  Inset.$static__3xl__org_patternfly_style_Inset = Inset.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_3xl'), Inset.$ordinal__3xl__org_patternfly_style_Inset, 'inset-3xl');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Inset;
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
Inset.$ordinal_none__org_patternfly_style_Inset = 0;
/**@const {number} @nodts*/
Inset.$ordinal_xs__org_patternfly_style_Inset = 1;
/**@const {number} @nodts*/
Inset.$ordinal_sm__org_patternfly_style_Inset = 2;
/**@const {number} @nodts*/
Inset.$ordinal_md__org_patternfly_style_Inset = 3;
/**@const {number} @nodts*/
Inset.$ordinal_lg__org_patternfly_style_Inset = 4;
/**@const {number} @nodts*/
Inset.$ordinal_xl__org_patternfly_style_Inset = 5;
/**@const {number} @nodts*/
Inset.$ordinal__2xl__org_patternfly_style_Inset = 6;
/**@const {number} @nodts*/
Inset.$ordinal__3xl__org_patternfly_style_Inset = 7;
/**@private {!Inset} @nodts*/
Inset.$static_none__org_patternfly_style_Inset;
/**@private {!Inset} @nodts*/
Inset.$static_xs__org_patternfly_style_Inset;
/**@private {!Inset} @nodts*/
Inset.$static_sm__org_patternfly_style_Inset;
/**@private {!Inset} @nodts*/
Inset.$static_md__org_patternfly_style_Inset;
/**@private {!Inset} @nodts*/
Inset.$static_lg__org_patternfly_style_Inset;
/**@private {!Inset} @nodts*/
Inset.$static_xl__org_patternfly_style_Inset;
/**@private {!Inset} @nodts*/
Inset.$static__2xl__org_patternfly_style_Inset;
/**@private {!Inset} @nodts*/
Inset.$static__3xl__org_patternfly_style_Inset;
/**@type {Map<?string, !Inset>} @nodts*/
Inset.f_namesToValuesMap__org_patternfly_style_Inset_;
TypedModifier.$markImplementor(Inset);
$Util.$setClassMetadataForEnum(Inset, 'org.patternfly.style.Inset');

exports = Inset;

//# sourceMappingURL=Inset.js.map
