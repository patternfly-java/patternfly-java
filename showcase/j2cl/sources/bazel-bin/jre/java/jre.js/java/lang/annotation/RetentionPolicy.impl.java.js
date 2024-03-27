goog.module('java.lang.annotation.RetentionPolicy$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<RetentionPolicy>}
 */
class RetentionPolicy extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!RetentionPolicy} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new RetentionPolicy();
  $instance.$ctor__java_lang_annotation_RetentionPolicy__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_annotation_RetentionPolicy__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!RetentionPolicy} */
 static m_valueOf__java_lang_String__java_lang_annotation_RetentionPolicy(/** string */ name) {
  RetentionPolicy.$clinit();
  if ($Equality.$same(RetentionPolicy.f_namesToValuesMap__java_lang_annotation_RetentionPolicy_, null)) {
   RetentionPolicy.f_namesToValuesMap__java_lang_annotation_RetentionPolicy_ = /**@type {Map<?string, !RetentionPolicy>}*/ ($Enums.createMapFromValues(RetentionPolicy.m_values__arrayOf_java_lang_annotation_RetentionPolicy()));
  }
  return /**@type {RetentionPolicy}*/ ($Enums.getValueFromNameAndMap(name, RetentionPolicy.f_namesToValuesMap__java_lang_annotation_RetentionPolicy_));
 }
 /** @nodts @return {!Array<!RetentionPolicy>} */
 static m_values__arrayOf_java_lang_annotation_RetentionPolicy() {
  RetentionPolicy.$clinit();
  return /**@type {!Array<RetentionPolicy>}*/ ($Arrays.$init([RetentionPolicy.f_CLASS__java_lang_annotation_RetentionPolicy, RetentionPolicy.f_RUNTIME__java_lang_annotation_RetentionPolicy, RetentionPolicy.f_SOURCE__java_lang_annotation_RetentionPolicy], RetentionPolicy));
 }
 /** @nodts */
 static $clinit() {
  RetentionPolicy.$clinit = () =>{};
  RetentionPolicy.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RetentionPolicy;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
RetentionPolicy.$ordinal_CLASS__java_lang_annotation_RetentionPolicy = 0;
/**@const {number} @nodts*/
RetentionPolicy.$ordinal_RUNTIME__java_lang_annotation_RetentionPolicy = 1;
/**@const {number} @nodts*/
RetentionPolicy.$ordinal_SOURCE__java_lang_annotation_RetentionPolicy = 2;
/**@const {!RetentionPolicy} @nodts*/
RetentionPolicy.f_CLASS__java_lang_annotation_RetentionPolicy = /**@pureOrBreakMyCode*/ RetentionPolicy.$create__java_lang_String__int($Util.$makeEnumName('CLASS'), RetentionPolicy.$ordinal_CLASS__java_lang_annotation_RetentionPolicy);
/**@const {!RetentionPolicy} @nodts*/
RetentionPolicy.f_RUNTIME__java_lang_annotation_RetentionPolicy = /**@pureOrBreakMyCode*/ RetentionPolicy.$create__java_lang_String__int($Util.$makeEnumName('RUNTIME'), RetentionPolicy.$ordinal_RUNTIME__java_lang_annotation_RetentionPolicy);
/**@const {!RetentionPolicy} @nodts*/
RetentionPolicy.f_SOURCE__java_lang_annotation_RetentionPolicy = /**@pureOrBreakMyCode*/ RetentionPolicy.$create__java_lang_String__int($Util.$makeEnumName('SOURCE'), RetentionPolicy.$ordinal_SOURCE__java_lang_annotation_RetentionPolicy);
/**@type {Map<?string, !RetentionPolicy>} @nodts*/
RetentionPolicy.f_namesToValuesMap__java_lang_annotation_RetentionPolicy_;
$Util.$setClassMetadataForEnum(RetentionPolicy, 'java.lang.annotation.RetentionPolicy');

exports = RetentionPolicy;

//# sourceMappingURL=RetentionPolicy.js.map
