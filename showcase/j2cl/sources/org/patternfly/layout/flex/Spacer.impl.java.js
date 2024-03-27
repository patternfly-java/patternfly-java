goog.module('org.patternfly.layout.flex.Spacer$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Spacer>}
 * @implements {TypedModifier}
 */
class Spacer extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_Spacer_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_Spacer_;
 }
 /** @nodts @return {!Spacer} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Spacer();
  $instance.$ctor__org_patternfly_layout_flex_Spacer__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_Spacer__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_Spacer_ = value;
  this.f_modifier__org_patternfly_layout_flex_Spacer_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_Spacer_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_Spacer_;
 }
 /** @nodts @return {!Spacer} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_Spacer(/** string */ name) {
  Spacer.$clinit();
  if ($Equality.$same(Spacer.f_namesToValuesMap__org_patternfly_layout_flex_Spacer_, null)) {
   Spacer.f_namesToValuesMap__org_patternfly_layout_flex_Spacer_ = /**@type {Map<?string, !Spacer>}*/ ($Enums.createMapFromValues(Spacer.m_values__arrayOf_org_patternfly_layout_flex_Spacer()));
  }
  return /**@type {Spacer}*/ ($Enums.getValueFromNameAndMap(name, Spacer.f_namesToValuesMap__org_patternfly_layout_flex_Spacer_));
 }
 /** @nodts @return {!Array<!Spacer>} */
 static m_values__arrayOf_org_patternfly_layout_flex_Spacer() {
  Spacer.$clinit();
  return /**@type {!Array<Spacer>}*/ ($Arrays.$init([Spacer.$static_none__org_patternfly_layout_flex_Spacer, Spacer.$static_xs__org_patternfly_layout_flex_Spacer, Spacer.$static_sm__org_patternfly_layout_flex_Spacer, Spacer.$static_md__org_patternfly_layout_flex_Spacer, Spacer.$static_lg__org_patternfly_layout_flex_Spacer, Spacer.$static_xl__org_patternfly_layout_flex_Spacer, Spacer.$static__2xl__org_patternfly_layout_flex_Spacer, Spacer.$static__3xl__org_patternfly_layout_flex_Spacer, Spacer.$static__4xl__org_patternfly_layout_flex_Spacer], Spacer));
 }
 /** @nodts @return {!Spacer} */
 static get f_none__org_patternfly_layout_flex_Spacer() {
  return (Spacer.$clinit(), Spacer.$static_none__org_patternfly_layout_flex_Spacer);
 }
 /** @nodts @return {!Spacer} */
 static get f_xs__org_patternfly_layout_flex_Spacer() {
  return (Spacer.$clinit(), Spacer.$static_xs__org_patternfly_layout_flex_Spacer);
 }
 /** @nodts @return {!Spacer} */
 static get f_sm__org_patternfly_layout_flex_Spacer() {
  return (Spacer.$clinit(), Spacer.$static_sm__org_patternfly_layout_flex_Spacer);
 }
 /** @nodts @return {!Spacer} */
 static get f_md__org_patternfly_layout_flex_Spacer() {
  return (Spacer.$clinit(), Spacer.$static_md__org_patternfly_layout_flex_Spacer);
 }
 /** @nodts @return {!Spacer} */
 static get f_lg__org_patternfly_layout_flex_Spacer() {
  return (Spacer.$clinit(), Spacer.$static_lg__org_patternfly_layout_flex_Spacer);
 }
 /** @nodts @return {!Spacer} */
 static get f_xl__org_patternfly_layout_flex_Spacer() {
  return (Spacer.$clinit(), Spacer.$static_xl__org_patternfly_layout_flex_Spacer);
 }
 /** @nodts @return {!Spacer} */
 static get f__2xl__org_patternfly_layout_flex_Spacer() {
  return (Spacer.$clinit(), Spacer.$static__2xl__org_patternfly_layout_flex_Spacer);
 }
 /** @nodts @return {!Spacer} */
 static get f__3xl__org_patternfly_layout_flex_Spacer() {
  return (Spacer.$clinit(), Spacer.$static__3xl__org_patternfly_layout_flex_Spacer);
 }
 /** @nodts @return {!Spacer} */
 static get f__4xl__org_patternfly_layout_flex_Spacer() {
  return (Spacer.$clinit(), Spacer.$static__4xl__org_patternfly_layout_flex_Spacer);
 }
 /** @nodts */
 static $clinit() {
  Spacer.$clinit = () =>{};
  Spacer.$loadModules();
  Enum.$clinit();
  Spacer.$static_none__org_patternfly_layout_flex_Spacer = Spacer.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), Spacer.$ordinal_none__org_patternfly_layout_flex_Spacer, 'spacer-none');
  Spacer.$static_xs__org_patternfly_layout_flex_Spacer = Spacer.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xs'), Spacer.$ordinal_xs__org_patternfly_layout_flex_Spacer, 'spacer-xs');
  Spacer.$static_sm__org_patternfly_layout_flex_Spacer = Spacer.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sm'), Spacer.$ordinal_sm__org_patternfly_layout_flex_Spacer, 'spacer-sm');
  Spacer.$static_md__org_patternfly_layout_flex_Spacer = Spacer.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('md'), Spacer.$ordinal_md__org_patternfly_layout_flex_Spacer, 'spacer-md');
  Spacer.$static_lg__org_patternfly_layout_flex_Spacer = Spacer.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lg'), Spacer.$ordinal_lg__org_patternfly_layout_flex_Spacer, 'spacer-lg');
  Spacer.$static_xl__org_patternfly_layout_flex_Spacer = Spacer.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xl'), Spacer.$ordinal_xl__org_patternfly_layout_flex_Spacer, 'spacer-xl');
  Spacer.$static__2xl__org_patternfly_layout_flex_Spacer = Spacer.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2xl'), Spacer.$ordinal__2xl__org_patternfly_layout_flex_Spacer, 'spacer-2xl');
  Spacer.$static__3xl__org_patternfly_layout_flex_Spacer = Spacer.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_3xl'), Spacer.$ordinal__3xl__org_patternfly_layout_flex_Spacer, 'spacer-3xl');
  Spacer.$static__4xl__org_patternfly_layout_flex_Spacer = Spacer.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_4xl'), Spacer.$ordinal__4xl__org_patternfly_layout_flex_Spacer, 'spacer-4xl');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Spacer;
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
Spacer.$ordinal_none__org_patternfly_layout_flex_Spacer = 0;
/**@const {number} @nodts*/
Spacer.$ordinal_xs__org_patternfly_layout_flex_Spacer = 1;
/**@const {number} @nodts*/
Spacer.$ordinal_sm__org_patternfly_layout_flex_Spacer = 2;
/**@const {number} @nodts*/
Spacer.$ordinal_md__org_patternfly_layout_flex_Spacer = 3;
/**@const {number} @nodts*/
Spacer.$ordinal_lg__org_patternfly_layout_flex_Spacer = 4;
/**@const {number} @nodts*/
Spacer.$ordinal_xl__org_patternfly_layout_flex_Spacer = 5;
/**@const {number} @nodts*/
Spacer.$ordinal__2xl__org_patternfly_layout_flex_Spacer = 6;
/**@const {number} @nodts*/
Spacer.$ordinal__3xl__org_patternfly_layout_flex_Spacer = 7;
/**@const {number} @nodts*/
Spacer.$ordinal__4xl__org_patternfly_layout_flex_Spacer = 8;
/**@private {!Spacer} @nodts*/
Spacer.$static_none__org_patternfly_layout_flex_Spacer;
/**@private {!Spacer} @nodts*/
Spacer.$static_xs__org_patternfly_layout_flex_Spacer;
/**@private {!Spacer} @nodts*/
Spacer.$static_sm__org_patternfly_layout_flex_Spacer;
/**@private {!Spacer} @nodts*/
Spacer.$static_md__org_patternfly_layout_flex_Spacer;
/**@private {!Spacer} @nodts*/
Spacer.$static_lg__org_patternfly_layout_flex_Spacer;
/**@private {!Spacer} @nodts*/
Spacer.$static_xl__org_patternfly_layout_flex_Spacer;
/**@private {!Spacer} @nodts*/
Spacer.$static__2xl__org_patternfly_layout_flex_Spacer;
/**@private {!Spacer} @nodts*/
Spacer.$static__3xl__org_patternfly_layout_flex_Spacer;
/**@private {!Spacer} @nodts*/
Spacer.$static__4xl__org_patternfly_layout_flex_Spacer;
/**@type {Map<?string, !Spacer>} @nodts*/
Spacer.f_namesToValuesMap__org_patternfly_layout_flex_Spacer_;
TypedModifier.$markImplementor(Spacer);
$Util.$setClassMetadataForEnum(Spacer, 'org.patternfly.layout.flex.Spacer');

exports = Spacer;

//# sourceMappingURL=Spacer.js.map
