goog.module('org.patternfly.showcase.demo.server.Server.Status$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Status>}
 */
class Status extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Status} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Status();
  $instance.$ctor__org_patternfly_showcase_demo_server_Server_Status__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_demo_server_Server_Status__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!Status} */
 static m_valueOf__java_lang_String__org_patternfly_showcase_demo_server_Server_Status(/** string */ name) {
  Status.$clinit();
  if ($Equality.$same(Status.f_namesToValuesMap__org_patternfly_showcase_demo_server_Server_Status_, null)) {
   Status.f_namesToValuesMap__org_patternfly_showcase_demo_server_Server_Status_ = /**@type {Map<?string, !Status>}*/ ($Enums.createMapFromValues(Status.m_values__arrayOf_org_patternfly_showcase_demo_server_Server_Status()));
  }
  return /**@type {Status}*/ ($Enums.getValueFromNameAndMap(name, Status.f_namesToValuesMap__org_patternfly_showcase_demo_server_Server_Status_));
 }
 /** @nodts @return {!Array<!Status>} */
 static m_values__arrayOf_org_patternfly_showcase_demo_server_Server_Status() {
  Status.$clinit();
  return /**@type {!Array<Status>}*/ ($Arrays.$init([Status.f_STOPPED__org_patternfly_showcase_demo_server_Server_Status, Status.f_DOWN__org_patternfly_showcase_demo_server_Server_Status, Status.f_DEGRADED__org_patternfly_showcase_demo_server_Server_Status, Status.f_NEEDS_MAINTENANCE__org_patternfly_showcase_demo_server_Server_Status, Status.f_RUNNING__org_patternfly_showcase_demo_server_Server_Status, Status.f_UNKNOWN__org_patternfly_showcase_demo_server_Server_Status], Status));
 }
 /** @nodts */
 static $clinit() {
  Status.$clinit = () =>{};
  Status.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Status;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Status.$ordinal_STOPPED__org_patternfly_showcase_demo_server_Server_Status = 0;
/**@const {number} @nodts*/
Status.$ordinal_DOWN__org_patternfly_showcase_demo_server_Server_Status = 1;
/**@const {number} @nodts*/
Status.$ordinal_DEGRADED__org_patternfly_showcase_demo_server_Server_Status = 2;
/**@const {number} @nodts*/
Status.$ordinal_NEEDS_MAINTENANCE__org_patternfly_showcase_demo_server_Server_Status = 3;
/**@const {number} @nodts*/
Status.$ordinal_RUNNING__org_patternfly_showcase_demo_server_Server_Status = 4;
/**@const {number} @nodts*/
Status.$ordinal_UNKNOWN__org_patternfly_showcase_demo_server_Server_Status = 5;
/**@const {!Status} @nodts*/
Status.f_STOPPED__org_patternfly_showcase_demo_server_Server_Status = /**@pureOrBreakMyCode*/ Status.$create__java_lang_String__int($Util.$makeEnumName('STOPPED'), Status.$ordinal_STOPPED__org_patternfly_showcase_demo_server_Server_Status);
/**@const {!Status} @nodts*/
Status.f_DOWN__org_patternfly_showcase_demo_server_Server_Status = /**@pureOrBreakMyCode*/ Status.$create__java_lang_String__int($Util.$makeEnumName('DOWN'), Status.$ordinal_DOWN__org_patternfly_showcase_demo_server_Server_Status);
/**@const {!Status} @nodts*/
Status.f_DEGRADED__org_patternfly_showcase_demo_server_Server_Status = /**@pureOrBreakMyCode*/ Status.$create__java_lang_String__int($Util.$makeEnumName('DEGRADED'), Status.$ordinal_DEGRADED__org_patternfly_showcase_demo_server_Server_Status);
/**@const {!Status} @nodts*/
Status.f_NEEDS_MAINTENANCE__org_patternfly_showcase_demo_server_Server_Status = /**@pureOrBreakMyCode*/ Status.$create__java_lang_String__int($Util.$makeEnumName('NEEDS_MAINTENANCE'), Status.$ordinal_NEEDS_MAINTENANCE__org_patternfly_showcase_demo_server_Server_Status);
/**@const {!Status} @nodts*/
Status.f_RUNNING__org_patternfly_showcase_demo_server_Server_Status = /**@pureOrBreakMyCode*/ Status.$create__java_lang_String__int($Util.$makeEnumName('RUNNING'), Status.$ordinal_RUNNING__org_patternfly_showcase_demo_server_Server_Status);
/**@const {!Status} @nodts*/
Status.f_UNKNOWN__org_patternfly_showcase_demo_server_Server_Status = /**@pureOrBreakMyCode*/ Status.$create__java_lang_String__int($Util.$makeEnumName('UNKNOWN'), Status.$ordinal_UNKNOWN__org_patternfly_showcase_demo_server_Server_Status);
/**@type {Map<?string, !Status>} @nodts*/
Status.f_namesToValuesMap__org_patternfly_showcase_demo_server_Server_Status_;
$Util.$setClassMetadataForEnum(Status, 'org.patternfly.showcase.demo.server.Server$Status');

exports = Status;

//# sourceMappingURL=Server$Status.js.map
