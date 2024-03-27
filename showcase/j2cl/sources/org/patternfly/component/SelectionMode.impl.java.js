goog.module('org.patternfly.component.SelectionMode$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<SelectionMode>}
 */
class SelectionMode extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SelectionMode} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new SelectionMode();
  $instance.$ctor__org_patternfly_component_SelectionMode__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_SelectionMode__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!SelectionMode} */
 static m_valueOf__java_lang_String__org_patternfly_component_SelectionMode(/** string */ name) {
  SelectionMode.$clinit();
  if ($Equality.$same(SelectionMode.f_namesToValuesMap__org_patternfly_component_SelectionMode_, null)) {
   SelectionMode.f_namesToValuesMap__org_patternfly_component_SelectionMode_ = /**@type {Map<?string, !SelectionMode>}*/ ($Enums.createMapFromValues(SelectionMode.m_values__arrayOf_org_patternfly_component_SelectionMode()));
  }
  return /**@type {SelectionMode}*/ ($Enums.getValueFromNameAndMap(name, SelectionMode.f_namesToValuesMap__org_patternfly_component_SelectionMode_));
 }
 /** @nodts @return {!Array<!SelectionMode>} */
 static m_values__arrayOf_org_patternfly_component_SelectionMode() {
  SelectionMode.$clinit();
  return /**@type {!Array<SelectionMode>}*/ ($Arrays.$init([SelectionMode.f_click__org_patternfly_component_SelectionMode, SelectionMode.f_single__org_patternfly_component_SelectionMode, SelectionMode.f_multi__org_patternfly_component_SelectionMode], SelectionMode));
 }
 /** @nodts */
 static $clinit() {
  SelectionMode.$clinit = () =>{};
  SelectionMode.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionMode;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
SelectionMode.$ordinal_click__org_patternfly_component_SelectionMode = 0;
/**@const {number} @nodts*/
SelectionMode.$ordinal_single__org_patternfly_component_SelectionMode = 1;
/**@const {number} @nodts*/
SelectionMode.$ordinal_multi__org_patternfly_component_SelectionMode = 2;
/**@const {!SelectionMode} @nodts*/
SelectionMode.f_click__org_patternfly_component_SelectionMode = /**@pureOrBreakMyCode*/ SelectionMode.$create__java_lang_String__int($Util.$makeEnumName('click'), SelectionMode.$ordinal_click__org_patternfly_component_SelectionMode);
/**@const {!SelectionMode} @nodts*/
SelectionMode.f_single__org_patternfly_component_SelectionMode = /**@pureOrBreakMyCode*/ SelectionMode.$create__java_lang_String__int($Util.$makeEnumName('single'), SelectionMode.$ordinal_single__org_patternfly_component_SelectionMode);
/**@const {!SelectionMode} @nodts*/
SelectionMode.f_multi__org_patternfly_component_SelectionMode = /**@pureOrBreakMyCode*/ SelectionMode.$create__java_lang_String__int($Util.$makeEnumName('multi'), SelectionMode.$ordinal_multi__org_patternfly_component_SelectionMode);
/**@type {Map<?string, !SelectionMode>} @nodts*/
SelectionMode.f_namesToValuesMap__org_patternfly_component_SelectionMode_;
$Util.$setClassMetadataForEnum(SelectionMode, 'org.patternfly.component.SelectionMode');

exports = SelectionMode;

//# sourceMappingURL=SelectionMode.js.map
