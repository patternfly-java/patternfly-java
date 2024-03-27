goog.module('org.jboss.elemento.BoxModel$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<BoxModel>}
 */
class BoxModel extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_BoxModel;
 }
 /** @nodts @return {!BoxModel} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new BoxModel();
  $instance.$ctor__org_jboss_elemento_BoxModel__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_BoxModel__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_jboss_elemento_BoxModel = value;
 }
 /** @nodts @return {!BoxModel} */
 static m_valueOf__java_lang_String__org_jboss_elemento_BoxModel(/** string */ name) {
  BoxModel.$clinit();
  if ($Equality.$same(BoxModel.f_namesToValuesMap__org_jboss_elemento_BoxModel_, null)) {
   BoxModel.f_namesToValuesMap__org_jboss_elemento_BoxModel_ = /**@type {Map<?string, !BoxModel>}*/ ($Enums.createMapFromValues(BoxModel.m_values__arrayOf_org_jboss_elemento_BoxModel()));
  }
  return /**@type {BoxModel}*/ ($Enums.getValueFromNameAndMap(name, BoxModel.f_namesToValuesMap__org_jboss_elemento_BoxModel_));
 }
 /** @nodts @return {!Array<!BoxModel>} */
 static m_values__arrayOf_org_jboss_elemento_BoxModel() {
  BoxModel.$clinit();
  return /**@type {!Array<BoxModel>}*/ ($Arrays.$init([BoxModel.f_contentBox__org_jboss_elemento_BoxModel, BoxModel.f_borderBox__org_jboss_elemento_BoxModel, BoxModel.f_devicePixelContentBox__org_jboss_elemento_BoxModel], BoxModel));
 }
 /** @nodts */
 static $clinit() {
  BoxModel.$clinit = () =>{};
  BoxModel.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxModel;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
BoxModel.$ordinal_contentBox__org_jboss_elemento_BoxModel = 0;
/**@const {number} @nodts*/
BoxModel.$ordinal_borderBox__org_jboss_elemento_BoxModel = 1;
/**@const {number} @nodts*/
BoxModel.$ordinal_devicePixelContentBox__org_jboss_elemento_BoxModel = 2;
/**@const {!BoxModel} @nodts*/
BoxModel.f_contentBox__org_jboss_elemento_BoxModel = /**@pureOrBreakMyCode*/ BoxModel.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('contentBox'), BoxModel.$ordinal_contentBox__org_jboss_elemento_BoxModel, 'content-box');
/**@const {!BoxModel} @nodts*/
BoxModel.f_borderBox__org_jboss_elemento_BoxModel = /**@pureOrBreakMyCode*/ BoxModel.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('borderBox'), BoxModel.$ordinal_borderBox__org_jboss_elemento_BoxModel, 'border-box');
/**@const {!BoxModel} @nodts*/
BoxModel.f_devicePixelContentBox__org_jboss_elemento_BoxModel = /**@pureOrBreakMyCode*/ BoxModel.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('devicePixelContentBox'), BoxModel.$ordinal_devicePixelContentBox__org_jboss_elemento_BoxModel, 'device-pixel-content-box');
/**@type {Map<?string, !BoxModel>} @nodts*/
BoxModel.f_namesToValuesMap__org_jboss_elemento_BoxModel_;
$Util.$setClassMetadataForEnum(BoxModel, 'org.jboss.elemento.BoxModel');

exports = BoxModel;

//# sourceMappingURL=BoxModel.js.map
