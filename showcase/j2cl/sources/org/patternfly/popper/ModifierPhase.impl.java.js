goog.module('org.patternfly.popper.ModifierPhase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<ModifierPhase>}
 */
class ModifierPhase extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ModifierPhase} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new ModifierPhase();
  $instance.$ctor__org_patternfly_popper_ModifierPhase__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_popper_ModifierPhase__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!ModifierPhase} */
 static m_valueOf__java_lang_String__org_patternfly_popper_ModifierPhase(/** string */ name) {
  ModifierPhase.$clinit();
  if ($Equality.$same(ModifierPhase.f_namesToValuesMap__org_patternfly_popper_ModifierPhase_, null)) {
   ModifierPhase.f_namesToValuesMap__org_patternfly_popper_ModifierPhase_ = /**@type {Map<?string, !ModifierPhase>}*/ ($Enums.createMapFromValues(ModifierPhase.m_values__arrayOf_org_patternfly_popper_ModifierPhase()));
  }
  return /**@type {ModifierPhase}*/ ($Enums.getValueFromNameAndMap(name, ModifierPhase.f_namesToValuesMap__org_patternfly_popper_ModifierPhase_));
 }
 /** @nodts @return {!Array<!ModifierPhase>} */
 static m_values__arrayOf_org_patternfly_popper_ModifierPhase() {
  ModifierPhase.$clinit();
  return /**@type {!Array<ModifierPhase>}*/ ($Arrays.$init([ModifierPhase.f_beforeRead__org_patternfly_popper_ModifierPhase, ModifierPhase.f_read__org_patternfly_popper_ModifierPhase, ModifierPhase.f_afterRead__org_patternfly_popper_ModifierPhase, ModifierPhase.f_beforeMain__org_patternfly_popper_ModifierPhase, ModifierPhase.f_main__org_patternfly_popper_ModifierPhase, ModifierPhase.f_afterMain__org_patternfly_popper_ModifierPhase, ModifierPhase.f_beforeWrite__org_patternfly_popper_ModifierPhase, ModifierPhase.f_write__org_patternfly_popper_ModifierPhase, ModifierPhase.f_afterWrite__org_patternfly_popper_ModifierPhase], ModifierPhase));
 }
 /** @nodts */
 static $clinit() {
  ModifierPhase.$clinit = () =>{};
  ModifierPhase.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ModifierPhase;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
ModifierPhase.$ordinal_beforeRead__org_patternfly_popper_ModifierPhase = 0;
/**@const {number} @nodts*/
ModifierPhase.$ordinal_read__org_patternfly_popper_ModifierPhase = 1;
/**@const {number} @nodts*/
ModifierPhase.$ordinal_afterRead__org_patternfly_popper_ModifierPhase = 2;
/**@const {number} @nodts*/
ModifierPhase.$ordinal_beforeMain__org_patternfly_popper_ModifierPhase = 3;
/**@const {number} @nodts*/
ModifierPhase.$ordinal_main__org_patternfly_popper_ModifierPhase = 4;
/**@const {number} @nodts*/
ModifierPhase.$ordinal_afterMain__org_patternfly_popper_ModifierPhase = 5;
/**@const {number} @nodts*/
ModifierPhase.$ordinal_beforeWrite__org_patternfly_popper_ModifierPhase = 6;
/**@const {number} @nodts*/
ModifierPhase.$ordinal_write__org_patternfly_popper_ModifierPhase = 7;
/**@const {number} @nodts*/
ModifierPhase.$ordinal_afterWrite__org_patternfly_popper_ModifierPhase = 8;
/**@const {!ModifierPhase} @nodts*/
ModifierPhase.f_beforeRead__org_patternfly_popper_ModifierPhase = /**@pureOrBreakMyCode*/ ModifierPhase.$create__java_lang_String__int($Util.$makeEnumName('beforeRead'), ModifierPhase.$ordinal_beforeRead__org_patternfly_popper_ModifierPhase);
/**@const {!ModifierPhase} @nodts*/
ModifierPhase.f_read__org_patternfly_popper_ModifierPhase = /**@pureOrBreakMyCode*/ ModifierPhase.$create__java_lang_String__int($Util.$makeEnumName('read'), ModifierPhase.$ordinal_read__org_patternfly_popper_ModifierPhase);
/**@const {!ModifierPhase} @nodts*/
ModifierPhase.f_afterRead__org_patternfly_popper_ModifierPhase = /**@pureOrBreakMyCode*/ ModifierPhase.$create__java_lang_String__int($Util.$makeEnumName('afterRead'), ModifierPhase.$ordinal_afterRead__org_patternfly_popper_ModifierPhase);
/**@const {!ModifierPhase} @nodts*/
ModifierPhase.f_beforeMain__org_patternfly_popper_ModifierPhase = /**@pureOrBreakMyCode*/ ModifierPhase.$create__java_lang_String__int($Util.$makeEnumName('beforeMain'), ModifierPhase.$ordinal_beforeMain__org_patternfly_popper_ModifierPhase);
/**@const {!ModifierPhase} @nodts*/
ModifierPhase.f_main__org_patternfly_popper_ModifierPhase = /**@pureOrBreakMyCode*/ ModifierPhase.$create__java_lang_String__int($Util.$makeEnumName('main'), ModifierPhase.$ordinal_main__org_patternfly_popper_ModifierPhase);
/**@const {!ModifierPhase} @nodts*/
ModifierPhase.f_afterMain__org_patternfly_popper_ModifierPhase = /**@pureOrBreakMyCode*/ ModifierPhase.$create__java_lang_String__int($Util.$makeEnumName('afterMain'), ModifierPhase.$ordinal_afterMain__org_patternfly_popper_ModifierPhase);
/**@const {!ModifierPhase} @nodts*/
ModifierPhase.f_beforeWrite__org_patternfly_popper_ModifierPhase = /**@pureOrBreakMyCode*/ ModifierPhase.$create__java_lang_String__int($Util.$makeEnumName('beforeWrite'), ModifierPhase.$ordinal_beforeWrite__org_patternfly_popper_ModifierPhase);
/**@const {!ModifierPhase} @nodts*/
ModifierPhase.f_write__org_patternfly_popper_ModifierPhase = /**@pureOrBreakMyCode*/ ModifierPhase.$create__java_lang_String__int($Util.$makeEnumName('write'), ModifierPhase.$ordinal_write__org_patternfly_popper_ModifierPhase);
/**@const {!ModifierPhase} @nodts*/
ModifierPhase.f_afterWrite__org_patternfly_popper_ModifierPhase = /**@pureOrBreakMyCode*/ ModifierPhase.$create__java_lang_String__int($Util.$makeEnumName('afterWrite'), ModifierPhase.$ordinal_afterWrite__org_patternfly_popper_ModifierPhase);
/**@type {Map<?string, !ModifierPhase>} @nodts*/
ModifierPhase.f_namesToValuesMap__org_patternfly_popper_ModifierPhase_;
$Util.$setClassMetadataForEnum(ModifierPhase, 'org.patternfly.popper.ModifierPhase');

exports = ModifierPhase;

//# sourceMappingURL=ModifierPhase.js.map
