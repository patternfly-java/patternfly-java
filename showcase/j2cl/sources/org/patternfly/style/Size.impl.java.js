goog.module('org.patternfly.style.Size$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Size>}
 * @implements {TypedModifier}
 */
class Size extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Size_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Size_;
 }
 /** @nodts @return {!Size} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Size();
  $instance.$ctor__org_patternfly_style_Size__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Size__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Size_ = value;
  this.f_modifier__org_patternfly_style_Size_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Size_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Size_;
 }
 /** @nodts @return {!Size} */
 static m_valueOf__java_lang_String__org_patternfly_style_Size(/** string */ name) {
  Size.$clinit();
  if ($Equality.$same(Size.f_namesToValuesMap__org_patternfly_style_Size_, null)) {
   Size.f_namesToValuesMap__org_patternfly_style_Size_ = /**@type {Map<?string, !Size>}*/ ($Enums.createMapFromValues(Size.m_values__arrayOf_org_patternfly_style_Size()));
  }
  return /**@type {Size}*/ ($Enums.getValueFromNameAndMap(name, Size.f_namesToValuesMap__org_patternfly_style_Size_));
 }
 /** @nodts @return {!Array<!Size>} */
 static m_values__arrayOf_org_patternfly_style_Size() {
  Size.$clinit();
  return /**@type {!Array<Size>}*/ ($Arrays.$init([Size.$static_xs__org_patternfly_style_Size, Size.$static_sm__org_patternfly_style_Size, Size.$static_md__org_patternfly_style_Size, Size.$static_lg__org_patternfly_style_Size, Size.$static_xl__org_patternfly_style_Size, Size.$static__2xl__org_patternfly_style_Size, Size.$static__3xl__org_patternfly_style_Size, Size.$static__4xl__org_patternfly_style_Size], Size));
 }
 /** @nodts @return {!Size} */
 static get f_xs__org_patternfly_style_Size() {
  return (Size.$clinit(), Size.$static_xs__org_patternfly_style_Size);
 }
 /** @nodts @return {!Size} */
 static get f_sm__org_patternfly_style_Size() {
  return (Size.$clinit(), Size.$static_sm__org_patternfly_style_Size);
 }
 /** @nodts @return {!Size} */
 static get f_md__org_patternfly_style_Size() {
  return (Size.$clinit(), Size.$static_md__org_patternfly_style_Size);
 }
 /** @nodts @return {!Size} */
 static get f_lg__org_patternfly_style_Size() {
  return (Size.$clinit(), Size.$static_lg__org_patternfly_style_Size);
 }
 /** @nodts @return {!Size} */
 static get f_xl__org_patternfly_style_Size() {
  return (Size.$clinit(), Size.$static_xl__org_patternfly_style_Size);
 }
 /** @nodts @return {!Size} */
 static get f__2xl__org_patternfly_style_Size() {
  return (Size.$clinit(), Size.$static__2xl__org_patternfly_style_Size);
 }
 /** @nodts @return {!Size} */
 static get f__3xl__org_patternfly_style_Size() {
  return (Size.$clinit(), Size.$static__3xl__org_patternfly_style_Size);
 }
 /** @nodts @return {!Size} */
 static get f__4xl__org_patternfly_style_Size() {
  return (Size.$clinit(), Size.$static__4xl__org_patternfly_style_Size);
 }
 /** @nodts */
 static $clinit() {
  Size.$clinit = () =>{};
  Size.$loadModules();
  Enum.$clinit();
  Size.$static_xs__org_patternfly_style_Size = Size.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xs'), Size.$ordinal_xs__org_patternfly_style_Size, 'xs');
  Size.$static_sm__org_patternfly_style_Size = Size.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sm'), Size.$ordinal_sm__org_patternfly_style_Size, 'sm');
  Size.$static_md__org_patternfly_style_Size = Size.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('md'), Size.$ordinal_md__org_patternfly_style_Size, 'md');
  Size.$static_lg__org_patternfly_style_Size = Size.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lg'), Size.$ordinal_lg__org_patternfly_style_Size, 'lg');
  Size.$static_xl__org_patternfly_style_Size = Size.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xl'), Size.$ordinal_xl__org_patternfly_style_Size, 'xl');
  Size.$static__2xl__org_patternfly_style_Size = Size.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2xl'), Size.$ordinal__2xl__org_patternfly_style_Size, '2xl');
  Size.$static__3xl__org_patternfly_style_Size = Size.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_3xl'), Size.$ordinal__3xl__org_patternfly_style_Size, '3xl');
  Size.$static__4xl__org_patternfly_style_Size = Size.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_4xl'), Size.$ordinal__4xl__org_patternfly_style_Size, '4xl');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Size;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Size.$ordinal_xs__org_patternfly_style_Size = 0;
/**@const {number} @nodts*/
Size.$ordinal_sm__org_patternfly_style_Size = 1;
/**@const {number} @nodts*/
Size.$ordinal_md__org_patternfly_style_Size = 2;
/**@const {number} @nodts*/
Size.$ordinal_lg__org_patternfly_style_Size = 3;
/**@const {number} @nodts*/
Size.$ordinal_xl__org_patternfly_style_Size = 4;
/**@const {number} @nodts*/
Size.$ordinal__2xl__org_patternfly_style_Size = 5;
/**@const {number} @nodts*/
Size.$ordinal__3xl__org_patternfly_style_Size = 6;
/**@const {number} @nodts*/
Size.$ordinal__4xl__org_patternfly_style_Size = 7;
/**@private {!Size} @nodts*/
Size.$static_xs__org_patternfly_style_Size;
/**@private {!Size} @nodts*/
Size.$static_sm__org_patternfly_style_Size;
/**@private {!Size} @nodts*/
Size.$static_md__org_patternfly_style_Size;
/**@private {!Size} @nodts*/
Size.$static_lg__org_patternfly_style_Size;
/**@private {!Size} @nodts*/
Size.$static_xl__org_patternfly_style_Size;
/**@private {!Size} @nodts*/
Size.$static__2xl__org_patternfly_style_Size;
/**@private {!Size} @nodts*/
Size.$static__3xl__org_patternfly_style_Size;
/**@private {!Size} @nodts*/
Size.$static__4xl__org_patternfly_style_Size;
/**@type {Map<?string, !Size>} @nodts*/
Size.f_namesToValuesMap__org_patternfly_style_Size_;
TypedModifier.$markImplementor(Size);
$Util.$setClassMetadataForEnum(Size, 'org.patternfly.style.Size');

exports = Size;

//# sourceMappingURL=Size.js.map
