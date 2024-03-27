goog.module('org.patternfly.component.navigation.NavigationType.Vertical$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NavigationType = goog.require('org.patternfly.component.navigation.NavigationType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Vertical>}
 * @implements {NavigationType}
 */
class Vertical extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Vertical} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Vertical();
  $instance.$ctor__org_patternfly_component_navigation_NavigationType_Vertical__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_NavigationType_Vertical__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!Vertical} */
 static m_valueOf__java_lang_String__org_patternfly_component_navigation_NavigationType_Vertical(/** string */ name) {
  Vertical.$clinit();
  if ($Equality.$same(Vertical.f_namesToValuesMap__org_patternfly_component_navigation_NavigationType_Vertical_, null)) {
   Vertical.f_namesToValuesMap__org_patternfly_component_navigation_NavigationType_Vertical_ = /**@type {Map<?string, !Vertical>}*/ ($Enums.createMapFromValues(Vertical.m_values__arrayOf_org_patternfly_component_navigation_NavigationType_Vertical()));
  }
  return /**@type {Vertical}*/ ($Enums.getValueFromNameAndMap(name, Vertical.f_namesToValuesMap__org_patternfly_component_navigation_NavigationType_Vertical_));
 }
 /** @nodts @return {!Array<!Vertical>} */
 static m_values__arrayOf_org_patternfly_component_navigation_NavigationType_Vertical() {
  Vertical.$clinit();
  return /**@type {!Array<Vertical>}*/ ($Arrays.$init([Vertical.f_flat__org_patternfly_component_navigation_NavigationType_Vertical, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical, Vertical.f_flyout__org_patternfly_component_navigation_NavigationType_Vertical, Vertical.f_drillDown__org_patternfly_component_navigation_NavigationType_Vertical], Vertical));
 }
 /** @nodts */
 static $clinit() {
  Vertical.$clinit = () =>{};
  Vertical.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Vertical;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Vertical.$ordinal_flat__org_patternfly_component_navigation_NavigationType_Vertical = 0;
/**@const {number} @nodts*/
Vertical.$ordinal_grouped__org_patternfly_component_navigation_NavigationType_Vertical = 1;
/**@const {number} @nodts*/
Vertical.$ordinal_expandable__org_patternfly_component_navigation_NavigationType_Vertical = 2;
/**@const {number} @nodts*/
Vertical.$ordinal_flyout__org_patternfly_component_navigation_NavigationType_Vertical = 3;
/**@const {number} @nodts*/
Vertical.$ordinal_drillDown__org_patternfly_component_navigation_NavigationType_Vertical = 4;
/**@const {!Vertical} @nodts*/
Vertical.f_flat__org_patternfly_component_navigation_NavigationType_Vertical = /**@pureOrBreakMyCode*/ Vertical.$create__java_lang_String__int($Util.$makeEnumName('flat'), Vertical.$ordinal_flat__org_patternfly_component_navigation_NavigationType_Vertical);
/**@const {!Vertical} @nodts*/
Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical = /**@pureOrBreakMyCode*/ Vertical.$create__java_lang_String__int($Util.$makeEnumName('grouped'), Vertical.$ordinal_grouped__org_patternfly_component_navigation_NavigationType_Vertical);
/**@const {!Vertical} @nodts*/
Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical = /**@pureOrBreakMyCode*/ Vertical.$create__java_lang_String__int($Util.$makeEnumName('expandable'), Vertical.$ordinal_expandable__org_patternfly_component_navigation_NavigationType_Vertical);
/**@const {!Vertical} @nodts*/
Vertical.f_flyout__org_patternfly_component_navigation_NavigationType_Vertical = /**@pureOrBreakMyCode*/ Vertical.$create__java_lang_String__int($Util.$makeEnumName('flyout'), Vertical.$ordinal_flyout__org_patternfly_component_navigation_NavigationType_Vertical);
/**@const {!Vertical} @nodts*/
Vertical.f_drillDown__org_patternfly_component_navigation_NavigationType_Vertical = /**@pureOrBreakMyCode*/ Vertical.$create__java_lang_String__int($Util.$makeEnumName('drillDown'), Vertical.$ordinal_drillDown__org_patternfly_component_navigation_NavigationType_Vertical);
/**@type {Map<?string, !Vertical>} @nodts*/
Vertical.f_namesToValuesMap__org_patternfly_component_navigation_NavigationType_Vertical_;
NavigationType.$markImplementor(Vertical);
$Util.$setClassMetadataForEnum(Vertical, 'org.patternfly.component.navigation.NavigationType$Vertical');

exports = Vertical;

//# sourceMappingURL=NavigationType$Vertical.js.map
