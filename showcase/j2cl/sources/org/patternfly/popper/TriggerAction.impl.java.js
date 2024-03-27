goog.module('org.patternfly.popper.TriggerAction$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<TriggerAction>}
 */
class TriggerAction extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TriggerAction} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new TriggerAction();
  $instance.$ctor__org_patternfly_popper_TriggerAction__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_popper_TriggerAction__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!TriggerAction} */
 static m_valueOf__java_lang_String__org_patternfly_popper_TriggerAction(/** string */ name) {
  TriggerAction.$clinit();
  if ($Equality.$same(TriggerAction.f_namesToValuesMap__org_patternfly_popper_TriggerAction_, null)) {
   TriggerAction.f_namesToValuesMap__org_patternfly_popper_TriggerAction_ = /**@type {Map<?string, !TriggerAction>}*/ ($Enums.createMapFromValues(TriggerAction.m_values__arrayOf_org_patternfly_popper_TriggerAction()));
  }
  return /**@type {TriggerAction}*/ ($Enums.getValueFromNameAndMap(name, TriggerAction.f_namesToValuesMap__org_patternfly_popper_TriggerAction_));
 }
 /** @nodts @return {!Array<!TriggerAction>} */
 static m_values__arrayOf_org_patternfly_popper_TriggerAction() {
  TriggerAction.$clinit();
  return /**@type {!Array<TriggerAction>}*/ ($Arrays.$init([TriggerAction.f_mouseenter__org_patternfly_popper_TriggerAction, TriggerAction.f_focus__org_patternfly_popper_TriggerAction, TriggerAction.f_click__org_patternfly_popper_TriggerAction, TriggerAction.f_manual__org_patternfly_popper_TriggerAction], TriggerAction));
 }
 /** @nodts */
 static $clinit() {
  TriggerAction.$clinit = () =>{};
  TriggerAction.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TriggerAction;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
TriggerAction.$ordinal_mouseenter__org_patternfly_popper_TriggerAction = 0;
/**@const {number} @nodts*/
TriggerAction.$ordinal_focus__org_patternfly_popper_TriggerAction = 1;
/**@const {number} @nodts*/
TriggerAction.$ordinal_click__org_patternfly_popper_TriggerAction = 2;
/**@const {number} @nodts*/
TriggerAction.$ordinal_manual__org_patternfly_popper_TriggerAction = 3;
/**@const {!TriggerAction} @nodts*/
TriggerAction.f_mouseenter__org_patternfly_popper_TriggerAction = /**@pureOrBreakMyCode*/ TriggerAction.$create__java_lang_String__int($Util.$makeEnumName('mouseenter'), TriggerAction.$ordinal_mouseenter__org_patternfly_popper_TriggerAction);
/**@const {!TriggerAction} @nodts*/
TriggerAction.f_focus__org_patternfly_popper_TriggerAction = /**@pureOrBreakMyCode*/ TriggerAction.$create__java_lang_String__int($Util.$makeEnumName('focus'), TriggerAction.$ordinal_focus__org_patternfly_popper_TriggerAction);
/**@const {!TriggerAction} @nodts*/
TriggerAction.f_click__org_patternfly_popper_TriggerAction = /**@pureOrBreakMyCode*/ TriggerAction.$create__java_lang_String__int($Util.$makeEnumName('click'), TriggerAction.$ordinal_click__org_patternfly_popper_TriggerAction);
/**@const {!TriggerAction} @nodts*/
TriggerAction.f_manual__org_patternfly_popper_TriggerAction = /**@pureOrBreakMyCode*/ TriggerAction.$create__java_lang_String__int($Util.$makeEnumName('manual'), TriggerAction.$ordinal_manual__org_patternfly_popper_TriggerAction);
/**@type {Map<?string, !TriggerAction>} @nodts*/
TriggerAction.f_namesToValuesMap__org_patternfly_popper_TriggerAction_;
$Util.$setClassMetadataForEnum(TriggerAction, 'org.patternfly.popper.TriggerAction');

exports = TriggerAction;

//# sourceMappingURL=TriggerAction.js.map
