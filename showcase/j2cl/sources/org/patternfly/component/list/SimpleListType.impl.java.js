goog.module('org.patternfly.component.list.SimpleListType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<SimpleListType>}
 */
class SimpleListType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SimpleListType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new SimpleListType();
  $instance.$ctor__org_patternfly_component_list_SimpleListType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_SimpleListType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!SimpleListType} */
 static m_valueOf__java_lang_String__org_patternfly_component_list_SimpleListType(/** string */ name) {
  SimpleListType.$clinit();
  if ($Equality.$same(SimpleListType.f_namesToValuesMap__org_patternfly_component_list_SimpleListType_, null)) {
   SimpleListType.f_namesToValuesMap__org_patternfly_component_list_SimpleListType_ = /**@type {Map<?string, !SimpleListType>}*/ ($Enums.createMapFromValues(SimpleListType.m_values__arrayOf_org_patternfly_component_list_SimpleListType()));
  }
  return /**@type {SimpleListType}*/ ($Enums.getValueFromNameAndMap(name, SimpleListType.f_namesToValuesMap__org_patternfly_component_list_SimpleListType_));
 }
 /** @nodts @return {!Array<!SimpleListType>} */
 static m_values__arrayOf_org_patternfly_component_list_SimpleListType() {
  SimpleListType.$clinit();
  return /**@type {!Array<SimpleListType>}*/ ($Arrays.$init([SimpleListType.f_undefined__org_patternfly_component_list_SimpleListType, SimpleListType.f_items__org_patternfly_component_list_SimpleListType, SimpleListType.f_groups__org_patternfly_component_list_SimpleListType], SimpleListType));
 }
 /** @nodts */
 static $clinit() {
  SimpleListType.$clinit = () =>{};
  SimpleListType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleListType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
SimpleListType.$ordinal_undefined__org_patternfly_component_list_SimpleListType = 0;
/**@const {number} @nodts*/
SimpleListType.$ordinal_items__org_patternfly_component_list_SimpleListType = 1;
/**@const {number} @nodts*/
SimpleListType.$ordinal_groups__org_patternfly_component_list_SimpleListType = 2;
/**@const {!SimpleListType} @nodts*/
SimpleListType.f_undefined__org_patternfly_component_list_SimpleListType = /**@pureOrBreakMyCode*/ SimpleListType.$create__java_lang_String__int($Util.$makeEnumName('undefined'), SimpleListType.$ordinal_undefined__org_patternfly_component_list_SimpleListType);
/**@const {!SimpleListType} @nodts*/
SimpleListType.f_items__org_patternfly_component_list_SimpleListType = /**@pureOrBreakMyCode*/ SimpleListType.$create__java_lang_String__int($Util.$makeEnumName('items'), SimpleListType.$ordinal_items__org_patternfly_component_list_SimpleListType);
/**@const {!SimpleListType} @nodts*/
SimpleListType.f_groups__org_patternfly_component_list_SimpleListType = /**@pureOrBreakMyCode*/ SimpleListType.$create__java_lang_String__int($Util.$makeEnumName('groups'), SimpleListType.$ordinal_groups__org_patternfly_component_list_SimpleListType);
/**@type {Map<?string, !SimpleListType>} @nodts*/
SimpleListType.f_namesToValuesMap__org_patternfly_component_list_SimpleListType_;
$Util.$setClassMetadataForEnum(SimpleListType, 'org.patternfly.component.list.SimpleListType');

exports = SimpleListType;

//# sourceMappingURL=SimpleListType.js.map
