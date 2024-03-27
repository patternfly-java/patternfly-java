goog.module('org.patternfly.style.VariableScope$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<VariableScope>}
 */
class VariableScope extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!VariableScope} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new VariableScope();
  $instance.$ctor__org_patternfly_style_VariableScope__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_VariableScope__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!VariableScope} */
 static m_valueOf__java_lang_String__org_patternfly_style_VariableScope(/** string */ name) {
  VariableScope.$clinit();
  if ($Equality.$same(VariableScope.f_namesToValuesMap__org_patternfly_style_VariableScope_, null)) {
   VariableScope.f_namesToValuesMap__org_patternfly_style_VariableScope_ = /**@type {Map<?string, !VariableScope>}*/ ($Enums.createMapFromValues(VariableScope.m_values__arrayOf_org_patternfly_style_VariableScope()));
  }
  return /**@type {VariableScope}*/ ($Enums.getValueFromNameAndMap(name, VariableScope.f_namesToValuesMap__org_patternfly_style_VariableScope_));
 }
 /** @nodts @return {!Array<!VariableScope>} */
 static m_values__arrayOf_org_patternfly_style_VariableScope() {
  VariableScope.$clinit();
  return /**@type {!Array<VariableScope>}*/ ($Arrays.$init([VariableScope.f_global__org_patternfly_style_VariableScope, VariableScope.f_component__org_patternfly_style_VariableScope], VariableScope));
 }
 /** @nodts */
 static $clinit() {
  VariableScope.$clinit = () =>{};
  VariableScope.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VariableScope;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
VariableScope.$ordinal_global__org_patternfly_style_VariableScope = 0;
/**@const {number} @nodts*/
VariableScope.$ordinal_component__org_patternfly_style_VariableScope = 1;
/**@const {!VariableScope} @nodts*/
VariableScope.f_global__org_patternfly_style_VariableScope = /**@pureOrBreakMyCode*/ VariableScope.$create__java_lang_String__int($Util.$makeEnumName('global'), VariableScope.$ordinal_global__org_patternfly_style_VariableScope);
/**@const {!VariableScope} @nodts*/
VariableScope.f_component__org_patternfly_style_VariableScope = /**@pureOrBreakMyCode*/ VariableScope.$create__java_lang_String__int($Util.$makeEnumName('component'), VariableScope.$ordinal_component__org_patternfly_style_VariableScope);
/**@type {Map<?string, !VariableScope>} @nodts*/
VariableScope.f_namesToValuesMap__org_patternfly_style_VariableScope_;
$Util.$setClassMetadataForEnum(VariableScope, 'org.patternfly.style.VariableScope');

exports = VariableScope;

//# sourceMappingURL=VariableScope.js.map
