goog.module('java.lang.annotation.ElementType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<ElementType>}
 */
class ElementType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ElementType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new ElementType();
  $instance.$ctor__java_lang_annotation_ElementType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_annotation_ElementType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!ElementType} */
 static m_valueOf__java_lang_String__java_lang_annotation_ElementType(/** string */ name) {
  ElementType.$clinit();
  if ($Equality.$same(ElementType.f_namesToValuesMap__java_lang_annotation_ElementType_, null)) {
   ElementType.f_namesToValuesMap__java_lang_annotation_ElementType_ = /**@type {Map<?string, !ElementType>}*/ ($Enums.createMapFromValues(ElementType.m_values__arrayOf_java_lang_annotation_ElementType()));
  }
  return /**@type {ElementType}*/ ($Enums.getValueFromNameAndMap(name, ElementType.f_namesToValuesMap__java_lang_annotation_ElementType_));
 }
 /** @nodts @return {!Array<!ElementType>} */
 static m_values__arrayOf_java_lang_annotation_ElementType() {
  ElementType.$clinit();
  return /**@type {!Array<ElementType>}*/ ($Arrays.$init([ElementType.f_ANNOTATION_TYPE__java_lang_annotation_ElementType, ElementType.f_CONSTRUCTOR__java_lang_annotation_ElementType, ElementType.f_FIELD__java_lang_annotation_ElementType, ElementType.f_LOCAL_VARIABLE__java_lang_annotation_ElementType, ElementType.f_METHOD__java_lang_annotation_ElementType, ElementType.f_PACKAGE__java_lang_annotation_ElementType, ElementType.f_PARAMETER__java_lang_annotation_ElementType, ElementType.f_TYPE__java_lang_annotation_ElementType, ElementType.f_TYPE_PARAMETER__java_lang_annotation_ElementType, ElementType.f_TYPE_USE__java_lang_annotation_ElementType], ElementType));
 }
 /** @nodts */
 static $clinit() {
  ElementType.$clinit = () =>{};
  ElementType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ElementType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
ElementType.$ordinal_ANNOTATION_TYPE__java_lang_annotation_ElementType = 0;
/**@const {number} @nodts*/
ElementType.$ordinal_CONSTRUCTOR__java_lang_annotation_ElementType = 1;
/**@const {number} @nodts*/
ElementType.$ordinal_FIELD__java_lang_annotation_ElementType = 2;
/**@const {number} @nodts*/
ElementType.$ordinal_LOCAL_VARIABLE__java_lang_annotation_ElementType = 3;
/**@const {number} @nodts*/
ElementType.$ordinal_METHOD__java_lang_annotation_ElementType = 4;
/**@const {number} @nodts*/
ElementType.$ordinal_PACKAGE__java_lang_annotation_ElementType = 5;
/**@const {number} @nodts*/
ElementType.$ordinal_PARAMETER__java_lang_annotation_ElementType = 6;
/**@const {number} @nodts*/
ElementType.$ordinal_TYPE__java_lang_annotation_ElementType = 7;
/**@const {number} @nodts*/
ElementType.$ordinal_TYPE_PARAMETER__java_lang_annotation_ElementType = 8;
/**@const {number} @nodts*/
ElementType.$ordinal_TYPE_USE__java_lang_annotation_ElementType = 9;
/**@const {!ElementType} @nodts*/
ElementType.f_ANNOTATION_TYPE__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('ANNOTATION_TYPE'), ElementType.$ordinal_ANNOTATION_TYPE__java_lang_annotation_ElementType);
/**@const {!ElementType} @nodts*/
ElementType.f_CONSTRUCTOR__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('CONSTRUCTOR'), ElementType.$ordinal_CONSTRUCTOR__java_lang_annotation_ElementType);
/**@const {!ElementType} @nodts*/
ElementType.f_FIELD__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('FIELD'), ElementType.$ordinal_FIELD__java_lang_annotation_ElementType);
/**@const {!ElementType} @nodts*/
ElementType.f_LOCAL_VARIABLE__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('LOCAL_VARIABLE'), ElementType.$ordinal_LOCAL_VARIABLE__java_lang_annotation_ElementType);
/**@const {!ElementType} @nodts*/
ElementType.f_METHOD__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('METHOD'), ElementType.$ordinal_METHOD__java_lang_annotation_ElementType);
/**@const {!ElementType} @nodts*/
ElementType.f_PACKAGE__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('PACKAGE'), ElementType.$ordinal_PACKAGE__java_lang_annotation_ElementType);
/**@const {!ElementType} @nodts*/
ElementType.f_PARAMETER__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('PARAMETER'), ElementType.$ordinal_PARAMETER__java_lang_annotation_ElementType);
/**@const {!ElementType} @nodts*/
ElementType.f_TYPE__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('TYPE'), ElementType.$ordinal_TYPE__java_lang_annotation_ElementType);
/**@const {!ElementType} @nodts*/
ElementType.f_TYPE_PARAMETER__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('TYPE_PARAMETER'), ElementType.$ordinal_TYPE_PARAMETER__java_lang_annotation_ElementType);
/**@const {!ElementType} @nodts*/
ElementType.f_TYPE_USE__java_lang_annotation_ElementType = /**@pureOrBreakMyCode*/ ElementType.$create__java_lang_String__int($Util.$makeEnumName('TYPE_USE'), ElementType.$ordinal_TYPE_USE__java_lang_annotation_ElementType);
/**@type {Map<?string, !ElementType>} @nodts*/
ElementType.f_namesToValuesMap__java_lang_annotation_ElementType_;
$Util.$setClassMetadataForEnum(ElementType, 'java.lang.annotation.ElementType');

exports = ElementType;

//# sourceMappingURL=ElementType.js.map
