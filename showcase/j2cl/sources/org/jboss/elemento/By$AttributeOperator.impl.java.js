goog.module('org.jboss.elemento.By.AttributeOperator$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<AttributeOperator>}
 */
class AttributeOperator extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_operator__org_jboss_elemento_By_AttributeOperator_;
 }
 /** @nodts @return {!AttributeOperator} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ operator) {
  let $instance = new AttributeOperator();
  $instance.$ctor__org_jboss_elemento_By_AttributeOperator__java_lang_String__int__java_lang_String__void($name, $ordinal, operator);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_By_AttributeOperator__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ operator) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_operator__org_jboss_elemento_By_AttributeOperator_ = operator;
 }
 /** @nodts @return {!AttributeOperator} */
 static m_valueOf__java_lang_String__org_jboss_elemento_By_AttributeOperator(/** string */ name) {
  AttributeOperator.$clinit();
  if ($Equality.$same(AttributeOperator.f_namesToValuesMap__org_jboss_elemento_By_AttributeOperator_, null)) {
   AttributeOperator.f_namesToValuesMap__org_jboss_elemento_By_AttributeOperator_ = /**@type {Map<?string, !AttributeOperator>}*/ ($Enums.createMapFromValues(AttributeOperator.m_values__arrayOf_org_jboss_elemento_By_AttributeOperator()));
  }
  return /**@type {AttributeOperator}*/ ($Enums.getValueFromNameAndMap(name, AttributeOperator.f_namesToValuesMap__org_jboss_elemento_By_AttributeOperator_));
 }
 /** @nodts @return {!Array<!AttributeOperator>} */
 static m_values__arrayOf_org_jboss_elemento_By_AttributeOperator() {
  AttributeOperator.$clinit();
  return /**@type {!Array<AttributeOperator>}*/ ($Arrays.$init([AttributeOperator.f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator, AttributeOperator.f_ENDS_WITH__org_jboss_elemento_By_AttributeOperator, AttributeOperator.f_CONTAINS__org_jboss_elemento_By_AttributeOperator, AttributeOperator.f_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator, AttributeOperator.f_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator], AttributeOperator));
 }
 /** @nodts */
 static $clinit() {
  AttributeOperator.$clinit = () =>{};
  AttributeOperator.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AttributeOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
AttributeOperator.$ordinal_STARTS_WITH__org_jboss_elemento_By_AttributeOperator = 0;
/**@const {number} @nodts*/
AttributeOperator.$ordinal_ENDS_WITH__org_jboss_elemento_By_AttributeOperator = 1;
/**@const {number} @nodts*/
AttributeOperator.$ordinal_CONTAINS__org_jboss_elemento_By_AttributeOperator = 2;
/**@const {number} @nodts*/
AttributeOperator.$ordinal_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator = 3;
/**@const {number} @nodts*/
AttributeOperator.$ordinal_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator = 4;
/**@const {!AttributeOperator} @nodts*/
AttributeOperator.f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator = /**@pureOrBreakMyCode*/ AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('STARTS_WITH'), AttributeOperator.$ordinal_STARTS_WITH__org_jboss_elemento_By_AttributeOperator, '^');
/**@const {!AttributeOperator} @nodts*/
AttributeOperator.f_ENDS_WITH__org_jboss_elemento_By_AttributeOperator = /**@pureOrBreakMyCode*/ AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ENDS_WITH'), AttributeOperator.$ordinal_ENDS_WITH__org_jboss_elemento_By_AttributeOperator, '$');
/**@const {!AttributeOperator} @nodts*/
AttributeOperator.f_CONTAINS__org_jboss_elemento_By_AttributeOperator = /**@pureOrBreakMyCode*/ AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('CONTAINS'), AttributeOperator.$ordinal_CONTAINS__org_jboss_elemento_By_AttributeOperator, '*');
/**@const {!AttributeOperator} @nodts*/
AttributeOperator.f_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator = /**@pureOrBreakMyCode*/ AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('CONTAINS_WORD'), AttributeOperator.$ordinal_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator, '~');
/**@const {!AttributeOperator} @nodts*/
AttributeOperator.f_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator = /**@pureOrBreakMyCode*/ AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('CONTAINS_TOKEN'), AttributeOperator.$ordinal_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator, '|');
/**@type {Map<?string, !AttributeOperator>} @nodts*/
AttributeOperator.f_namesToValuesMap__org_jboss_elemento_By_AttributeOperator_;
$Util.$setClassMetadataForEnum(AttributeOperator, 'org.jboss.elemento.By$AttributeOperator');

exports = AttributeOperator;

//# sourceMappingURL=By$AttributeOperator.js.map
