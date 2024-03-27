goog.module('org.patternfly.component.navigation.NavigationType.Horizontal$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NavigationType = goog.require('org.patternfly.component.navigation.NavigationType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Horizontal>}
 * @implements {NavigationType}
 */
class Horizontal extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Horizontal} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Horizontal();
  $instance.$ctor__org_patternfly_component_navigation_NavigationType_Horizontal__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_NavigationType_Horizontal__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!Horizontal} */
 static m_valueOf__java_lang_String__org_patternfly_component_navigation_NavigationType_Horizontal(/** string */ name) {
  Horizontal.$clinit();
  if ($Equality.$same(Horizontal.f_namesToValuesMap__org_patternfly_component_navigation_NavigationType_Horizontal_, null)) {
   Horizontal.f_namesToValuesMap__org_patternfly_component_navigation_NavigationType_Horizontal_ = /**@type {Map<?string, !Horizontal>}*/ ($Enums.createMapFromValues(Horizontal.m_values__arrayOf_org_patternfly_component_navigation_NavigationType_Horizontal()));
  }
  return /**@type {Horizontal}*/ ($Enums.getValueFromNameAndMap(name, Horizontal.f_namesToValuesMap__org_patternfly_component_navigation_NavigationType_Horizontal_));
 }
 /** @nodts @return {!Array<!Horizontal>} */
 static m_values__arrayOf_org_patternfly_component_navigation_NavigationType_Horizontal() {
  Horizontal.$clinit();
  return /**@type {!Array<Horizontal>}*/ ($Arrays.$init([Horizontal.f_primary__org_patternfly_component_navigation_NavigationType_Horizontal, Horizontal.f_secondary__org_patternfly_component_navigation_NavigationType_Horizontal, Horizontal.f_tertiary__org_patternfly_component_navigation_NavigationType_Horizontal], Horizontal));
 }
 /** @nodts */
 static $clinit() {
  Horizontal.$clinit = () =>{};
  Horizontal.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Horizontal;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Horizontal.$ordinal_primary__org_patternfly_component_navigation_NavigationType_Horizontal = 0;
/**@const {number} @nodts*/
Horizontal.$ordinal_secondary__org_patternfly_component_navigation_NavigationType_Horizontal = 1;
/**@const {number} @nodts*/
Horizontal.$ordinal_tertiary__org_patternfly_component_navigation_NavigationType_Horizontal = 2;
/**@const {!Horizontal} @nodts*/
Horizontal.f_primary__org_patternfly_component_navigation_NavigationType_Horizontal = /**@pureOrBreakMyCode*/ Horizontal.$create__java_lang_String__int($Util.$makeEnumName('primary'), Horizontal.$ordinal_primary__org_patternfly_component_navigation_NavigationType_Horizontal);
/**@const {!Horizontal} @nodts*/
Horizontal.f_secondary__org_patternfly_component_navigation_NavigationType_Horizontal = /**@pureOrBreakMyCode*/ Horizontal.$create__java_lang_String__int($Util.$makeEnumName('secondary'), Horizontal.$ordinal_secondary__org_patternfly_component_navigation_NavigationType_Horizontal);
/**@const {!Horizontal} @nodts*/
Horizontal.f_tertiary__org_patternfly_component_navigation_NavigationType_Horizontal = /**@pureOrBreakMyCode*/ Horizontal.$create__java_lang_String__int($Util.$makeEnumName('tertiary'), Horizontal.$ordinal_tertiary__org_patternfly_component_navigation_NavigationType_Horizontal);
/**@type {Map<?string, !Horizontal>} @nodts*/
Horizontal.f_namesToValuesMap__org_patternfly_component_navigation_NavigationType_Horizontal_;
NavigationType.$markImplementor(Horizontal);
$Util.$setClassMetadataForEnum(Horizontal, 'org.patternfly.component.navigation.NavigationType$Horizontal');

exports = Horizontal;

//# sourceMappingURL=NavigationType$Horizontal.js.map
