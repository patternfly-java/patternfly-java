goog.module('org.patternfly.component.alert.AlertGroupType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<AlertGroupType>}
 */
class AlertGroupType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!AlertGroupType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new AlertGroupType();
  $instance.$ctor__org_patternfly_component_alert_AlertGroupType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_alert_AlertGroupType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!AlertGroupType} */
 static m_valueOf__java_lang_String__org_patternfly_component_alert_AlertGroupType(/** string */ name) {
  AlertGroupType.$clinit();
  if ($Equality.$same(AlertGroupType.f_namesToValuesMap__org_patternfly_component_alert_AlertGroupType_, null)) {
   AlertGroupType.f_namesToValuesMap__org_patternfly_component_alert_AlertGroupType_ = /**@type {Map<?string, !AlertGroupType>}*/ ($Enums.createMapFromValues(AlertGroupType.m_values__arrayOf_org_patternfly_component_alert_AlertGroupType()));
  }
  return /**@type {AlertGroupType}*/ ($Enums.getValueFromNameAndMap(name, AlertGroupType.f_namesToValuesMap__org_patternfly_component_alert_AlertGroupType_));
 }
 /** @nodts @return {!Array<!AlertGroupType>} */
 static m_values__arrayOf_org_patternfly_component_alert_AlertGroupType() {
  AlertGroupType.$clinit();
  return /**@type {!Array<AlertGroupType>}*/ ($Arrays.$init([AlertGroupType.f_staticInline__org_patternfly_component_alert_AlertGroupType, AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType, AlertGroupType.f_dynamic__org_patternfly_component_alert_AlertGroupType], AlertGroupType));
 }
 /** @nodts */
 static $clinit() {
  AlertGroupType.$clinit = () =>{};
  AlertGroupType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlertGroupType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
AlertGroupType.$ordinal_staticInline__org_patternfly_component_alert_AlertGroupType = 0;
/**@const {number} @nodts*/
AlertGroupType.$ordinal_toast__org_patternfly_component_alert_AlertGroupType = 1;
/**@const {number} @nodts*/
AlertGroupType.$ordinal_dynamic__org_patternfly_component_alert_AlertGroupType = 2;
/**@const {!AlertGroupType} @nodts*/
AlertGroupType.f_staticInline__org_patternfly_component_alert_AlertGroupType = /**@pureOrBreakMyCode*/ AlertGroupType.$create__java_lang_String__int($Util.$makeEnumName('staticInline'), AlertGroupType.$ordinal_staticInline__org_patternfly_component_alert_AlertGroupType);
/**@const {!AlertGroupType} @nodts*/
AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType = /**@pureOrBreakMyCode*/ AlertGroupType.$create__java_lang_String__int($Util.$makeEnumName('toast'), AlertGroupType.$ordinal_toast__org_patternfly_component_alert_AlertGroupType);
/**@const {!AlertGroupType} @nodts*/
AlertGroupType.f_dynamic__org_patternfly_component_alert_AlertGroupType = /**@pureOrBreakMyCode*/ AlertGroupType.$create__java_lang_String__int($Util.$makeEnumName('dynamic'), AlertGroupType.$ordinal_dynamic__org_patternfly_component_alert_AlertGroupType);
/**@type {Map<?string, !AlertGroupType>} @nodts*/
AlertGroupType.f_namesToValuesMap__org_patternfly_component_alert_AlertGroupType_;
$Util.$setClassMetadataForEnum(AlertGroupType, 'org.patternfly.component.alert.AlertGroupType');

exports = AlertGroupType;

//# sourceMappingURL=AlertGroupType.js.map
