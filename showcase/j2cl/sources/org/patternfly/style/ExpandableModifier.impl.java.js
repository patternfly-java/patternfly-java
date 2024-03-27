goog.module('org.patternfly.style.ExpandableModifier$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<ExpandableModifier>}
 * @implements {TypedModifier}
 */
class ExpandableModifier extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_ExpandableModifier_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_ExpandableModifier_;
 }
 /** @nodts @return {!ExpandableModifier} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ExpandableModifier();
  $instance.$ctor__org_patternfly_style_ExpandableModifier__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_ExpandableModifier__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_ExpandableModifier_ = value;
  this.f_modifier__org_patternfly_style_ExpandableModifier_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_ExpandableModifier_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_ExpandableModifier_;
 }
 /** @nodts @return {!ExpandableModifier} */
 static m_valueOf__java_lang_String__org_patternfly_style_ExpandableModifier(/** string */ name) {
  ExpandableModifier.$clinit();
  if ($Equality.$same(ExpandableModifier.f_namesToValuesMap__org_patternfly_style_ExpandableModifier_, null)) {
   ExpandableModifier.f_namesToValuesMap__org_patternfly_style_ExpandableModifier_ = /**@type {Map<?string, !ExpandableModifier>}*/ ($Enums.createMapFromValues(ExpandableModifier.m_values__arrayOf_org_patternfly_style_ExpandableModifier()));
  }
  return /**@type {ExpandableModifier}*/ ($Enums.getValueFromNameAndMap(name, ExpandableModifier.f_namesToValuesMap__org_patternfly_style_ExpandableModifier_));
 }
 /** @nodts @return {!Array<!ExpandableModifier>} */
 static m_values__arrayOf_org_patternfly_style_ExpandableModifier() {
  ExpandableModifier.$clinit();
  return /**@type {!Array<ExpandableModifier>}*/ ($Arrays.$init([ExpandableModifier.$static_expandable__org_patternfly_style_ExpandableModifier, ExpandableModifier.$static_nonExpandable__org_patternfly_style_ExpandableModifier], ExpandableModifier));
 }
 /** @nodts @return {!ExpandableModifier} */
 static get f_expandable__org_patternfly_style_ExpandableModifier() {
  return (ExpandableModifier.$clinit(), ExpandableModifier.$static_expandable__org_patternfly_style_ExpandableModifier);
 }
 /** @nodts @return {!ExpandableModifier} */
 static get f_nonExpandable__org_patternfly_style_ExpandableModifier() {
  return (ExpandableModifier.$clinit(), ExpandableModifier.$static_nonExpandable__org_patternfly_style_ExpandableModifier);
 }
 /** @nodts */
 static $clinit() {
  ExpandableModifier.$clinit = () =>{};
  ExpandableModifier.$loadModules();
  Enum.$clinit();
  ExpandableModifier.$static_expandable__org_patternfly_style_ExpandableModifier = ExpandableModifier.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('expandable'), ExpandableModifier.$ordinal_expandable__org_patternfly_style_ExpandableModifier, 'expandable');
  ExpandableModifier.$static_nonExpandable__org_patternfly_style_ExpandableModifier = ExpandableModifier.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('nonExpandable'), ExpandableModifier.$ordinal_nonExpandable__org_patternfly_style_ExpandableModifier, 'non-expandable');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableModifier;
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
ExpandableModifier.$ordinal_expandable__org_patternfly_style_ExpandableModifier = 0;
/**@const {number} @nodts*/
ExpandableModifier.$ordinal_nonExpandable__org_patternfly_style_ExpandableModifier = 1;
/**@private {!ExpandableModifier} @nodts*/
ExpandableModifier.$static_expandable__org_patternfly_style_ExpandableModifier;
/**@private {!ExpandableModifier} @nodts*/
ExpandableModifier.$static_nonExpandable__org_patternfly_style_ExpandableModifier;
/**@type {Map<?string, !ExpandableModifier>} @nodts*/
ExpandableModifier.f_namesToValuesMap__org_patternfly_style_ExpandableModifier_;
TypedModifier.$markImplementor(ExpandableModifier);
$Util.$setClassMetadataForEnum(ExpandableModifier, 'org.patternfly.style.ExpandableModifier');

exports = ExpandableModifier;

//# sourceMappingURL=ExpandableModifier.js.map
