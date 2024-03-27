goog.module('org.jboss.elemento.By.Combinator$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Combinator>}
 */
class Combinator extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_operator__org_jboss_elemento_By_Combinator_;
 }
 /** @nodts @return {!Combinator} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ operator) {
  let $instance = new Combinator();
  $instance.$ctor__org_jboss_elemento_By_Combinator__java_lang_String__int__java_lang_String__void($name, $ordinal, operator);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_By_Combinator__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ operator) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_operator__org_jboss_elemento_By_Combinator_ = operator;
 }
 /** @nodts @return {!Combinator} */
 static m_valueOf__java_lang_String__org_jboss_elemento_By_Combinator(/** string */ name) {
  Combinator.$clinit();
  if ($Equality.$same(Combinator.f_namesToValuesMap__org_jboss_elemento_By_Combinator_, null)) {
   Combinator.f_namesToValuesMap__org_jboss_elemento_By_Combinator_ = /**@type {Map<?string, !Combinator>}*/ ($Enums.createMapFromValues(Combinator.m_values__arrayOf_org_jboss_elemento_By_Combinator()));
  }
  return /**@type {Combinator}*/ ($Enums.getValueFromNameAndMap(name, Combinator.f_namesToValuesMap__org_jboss_elemento_By_Combinator_));
 }
 /** @nodts @return {!Array<!Combinator>} */
 static m_values__arrayOf_org_jboss_elemento_By_Combinator() {
  Combinator.$clinit();
  return /**@type {!Array<Combinator>}*/ ($Arrays.$init([Combinator.f_AND__org_jboss_elemento_By_Combinator, Combinator.f_DESCENDANT__org_jboss_elemento_By_Combinator, Combinator.f_CHILD__org_jboss_elemento_By_Combinator, Combinator.f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator, Combinator.f_SIBLING__org_jboss_elemento_By_Combinator], Combinator));
 }
 /** @nodts */
 static $clinit() {
  Combinator.$clinit = () =>{};
  Combinator.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Combinator;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Combinator.$ordinal_AND__org_jboss_elemento_By_Combinator = 0;
/**@const {number} @nodts*/
Combinator.$ordinal_DESCENDANT__org_jboss_elemento_By_Combinator = 1;
/**@const {number} @nodts*/
Combinator.$ordinal_CHILD__org_jboss_elemento_By_Combinator = 2;
/**@const {number} @nodts*/
Combinator.$ordinal_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator = 3;
/**@const {number} @nodts*/
Combinator.$ordinal_SIBLING__org_jboss_elemento_By_Combinator = 4;
/**@const {!Combinator} @nodts*/
Combinator.f_AND__org_jboss_elemento_By_Combinator = /**@pureOrBreakMyCode*/ Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('AND'), Combinator.$ordinal_AND__org_jboss_elemento_By_Combinator, '');
/**@const {!Combinator} @nodts*/
Combinator.f_DESCENDANT__org_jboss_elemento_By_Combinator = /**@pureOrBreakMyCode*/ Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('DESCENDANT'), Combinator.$ordinal_DESCENDANT__org_jboss_elemento_By_Combinator, ' ');
/**@const {!Combinator} @nodts*/
Combinator.f_CHILD__org_jboss_elemento_By_Combinator = /**@pureOrBreakMyCode*/ Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('CHILD'), Combinator.$ordinal_CHILD__org_jboss_elemento_By_Combinator, ' > ');
/**@const {!Combinator} @nodts*/
Combinator.f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator = /**@pureOrBreakMyCode*/ Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ADJACENT_SIBLING'), Combinator.$ordinal_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator, ' + ');
/**@const {!Combinator} @nodts*/
Combinator.f_SIBLING__org_jboss_elemento_By_Combinator = /**@pureOrBreakMyCode*/ Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('SIBLING'), Combinator.$ordinal_SIBLING__org_jboss_elemento_By_Combinator, ' ~ ');
/**@type {Map<?string, !Combinator>} @nodts*/
Combinator.f_namesToValuesMap__org_jboss_elemento_By_Combinator_;
$Util.$setClassMetadataForEnum(Combinator, 'org.jboss.elemento.By$Combinator');

exports = Combinator;

//# sourceMappingURL=By$Combinator.js.map
