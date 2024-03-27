goog.module('org.jboss.elemento.By$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AttributeOperator = goog.forwardDeclare('org.jboss.elemento.By.AttributeOperator$impl');
let ByAttribute = goog.forwardDeclare('org.jboss.elemento.By.ByAttribute$impl');
let ByClassname = goog.forwardDeclare('org.jboss.elemento.By.ByClassname$impl');
let ByCombination = goog.forwardDeclare('org.jboss.elemento.By.ByCombination$impl');
let ByData = goog.forwardDeclare('org.jboss.elemento.By.ByData$impl');
let ByElement = goog.forwardDeclare('org.jboss.elemento.By.ByElement$impl');
let ByGroup = goog.forwardDeclare('org.jboss.elemento.By.ByGroup$impl');
let ById = goog.forwardDeclare('org.jboss.elemento.By.ById$impl');
let BySelector = goog.forwardDeclare('org.jboss.elemento.By.BySelector$impl');
let Combinator = goog.forwardDeclare('org.jboss.elemento.By.Combinator$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class By extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_jboss_elemento_By__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {By} */
 static m_selector__java_lang_String__org_jboss_elemento_By(/** ?string */ selector) {
  By.$clinit();
  return BySelector.$create__java_lang_String(selector);
 }
 /** @nodts @return {By} */
 static m_id__java_lang_String__org_jboss_elemento_By(/** ?string */ id) {
  By.$clinit();
  return ById.$create__java_lang_String(id);
 }
 /** @nodts @return {By} */
 static m_element__java_lang_String__org_jboss_elemento_By(/** ?string */ element) {
  By.$clinit();
  return ByElement.$create__java_lang_String(element);
 }
 /** @nodts @return {By} */
 static m_element__elemental2_dom_Element__org_jboss_elemento_By(/** Element */ element) {
  By.$clinit();
  return ByElement.$create__java_lang_String(j_l_String.m_toLowerCase__java_lang_String__java_lang_String(element.tagName));
 }
 /** @nodts @template E @return {By} */
 static m_element__org_jboss_elemento_IsElement__org_jboss_elemento_By(/** IsElement<E> */ element) {
  By.$clinit();
  return ByElement.$create__java_lang_String(j_l_String.m_toLowerCase__java_lang_String__java_lang_String(/**@type {!Element}*/ (element.m_element__elemental2_dom_Element()).tagName));
 }
 /** @nodts @return {By} */
 static m_classname__java_lang_String__org_jboss_elemento_By(/** ?string */ classname) {
  By.$clinit();
  return ByClassname.$create__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([classname], j_l_String)));
 }
 /** @nodts @return {By} */
 static m_classnames__java_lang_String__java_lang_String__arrayOf_java_lang_String__org_jboss_elemento_By(/** ?string */ first, /** ?string */ second, /** Array<?string> */ remaining) {
  By.$clinit();
  let length = 2;
  if (!$Equality.$same(remaining, null)) {
   length = length + remaining.length | 0;
  }
  let classnames = /**@type {!Array<?string>}*/ ($Arrays.$create([length], j_l_String));
  $Arrays.$set(classnames, 0, first);
  $Arrays.$set(classnames, 1, second);
  if (!$Equality.$same(remaining, null)) {
   let index = 2;
   for (let $array = remaining, $index = 0; $index < $array.length; $index++) {
    let classname = $array[$index];
    {
     $Arrays.$set(classnames, index, classname);
     index = index + 1 | 0;
    }
   }
  }
  return ByClassname.$create__arrayOf_java_lang_String(classnames);
 }
 /** @nodts @return {By} */
 static m_classnames__arrayOf_java_lang_String__org_jboss_elemento_By(/** Array<?string> */ classnames) {
  By.$clinit();
  return ByClassname.$create__arrayOf_java_lang_String(classnames);
 }
 /** @nodts @return {By} */
 static m_attribute__java_lang_String__org_jboss_elemento_By(/** ?string */ name) {
  By.$clinit();
  return ByAttribute.$create__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String(name, null, null);
 }
 /** @nodts @return {By} */
 static m_attribute__java_lang_String__java_lang_String__org_jboss_elemento_By(/** ?string */ name, /** ?string */ value) {
  By.$clinit();
  return ByAttribute.$create__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String(name, null, value);
 }
 /** @nodts @return {By} */
 static m_attribute__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String__org_jboss_elemento_By(/** ?string */ name, /** AttributeOperator */ operator, /** ?string */ value) {
  By.$clinit();
  return ByAttribute.$create__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String(name, operator, value);
 }
 /** @nodts @return {By} */
 static m_data__java_lang_String__org_jboss_elemento_By(/** ?string */ name) {
  By.$clinit();
  return ByData.$create__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String(name, null, null);
 }
 /** @nodts @return {By} */
 static m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(/** ?string */ name, /** ?string */ value) {
  By.$clinit();
  return ByData.$create__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String(name, null, value);
 }
 /** @nodts @return {By} */
 static m_data__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String__org_jboss_elemento_By(/** ?string */ name, /** AttributeOperator */ operator, /** ?string */ value) {
  By.$clinit();
  return ByData.$create__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String(name, operator, value);
 }
 /** @nodts @return {By} */
 static m_group__org_jboss_elemento_By__org_jboss_elemento_By__arrayOf_org_jboss_elemento_By__org_jboss_elemento_By(/** By */ first, /** By */ second, /** Array<By> */ remaining) {
  By.$clinit();
  let length = 2;
  if (!$Equality.$same(remaining, null)) {
   length = length + remaining.length | 0;
  }
  let group = /**@type {!Array<By>}*/ ($Arrays.$create([length], By));
  $Arrays.$set(group, 0, first);
  $Arrays.$set(group, 1, second);
  if (!$Equality.$same(remaining, null)) {
   let index = 2;
   for (let $array = remaining, $index = 0; $index < $array.length; $index++) {
    let by = $array[$index];
    {
     $Arrays.$set(group, index, by);
     index = index + 1 | 0;
    }
   }
  }
  return ByGroup.$create__arrayOf_org_jboss_elemento_By(group);
 }
 /** @nodts @return {By} */
 static m_group__arrayOf_org_jboss_elemento_By__org_jboss_elemento_By(/** Array<By> */ selectors) {
  By.$clinit();
  return ByGroup.$create__arrayOf_org_jboss_elemento_By(selectors);
 }
 /** @final @nodts @return {By} */
 m_and__org_jboss_elemento_By__org_jboss_elemento_By(/** By */ selector) {
  return this.m_combinator__org_jboss_elemento_By_Combinator__org_jboss_elemento_By__org_jboss_elemento_By_$p_org_jboss_elemento_By(Combinator.f_AND__org_jboss_elemento_By_Combinator, selector);
 }
 /** @final @nodts @return {By} */
 m_child__org_jboss_elemento_By__org_jboss_elemento_By(/** By */ selector) {
  return this.m_combinator__org_jboss_elemento_By_Combinator__org_jboss_elemento_By__org_jboss_elemento_By_$p_org_jboss_elemento_By(Combinator.f_CHILD__org_jboss_elemento_By_Combinator, selector);
 }
 /** @final @nodts @return {By} */
 m_desc__org_jboss_elemento_By__org_jboss_elemento_By(/** By */ selector) {
  return this.m_combinator__org_jboss_elemento_By_Combinator__org_jboss_elemento_By__org_jboss_elemento_By_$p_org_jboss_elemento_By(Combinator.f_DESCENDANT__org_jboss_elemento_By_Combinator, selector);
 }
 /** @final @nodts @return {By} */
 m_sibling__org_jboss_elemento_By__org_jboss_elemento_By(/** By */ selector) {
  return this.m_combinator__org_jboss_elemento_By_Combinator__org_jboss_elemento_By__org_jboss_elemento_By_$p_org_jboss_elemento_By(Combinator.f_SIBLING__org_jboss_elemento_By_Combinator, selector);
 }
 /** @final @nodts @return {By} */
 m_adjacentSibling__org_jboss_elemento_By__org_jboss_elemento_By(/** By */ selector) {
  return this.m_combinator__org_jboss_elemento_By_Combinator__org_jboss_elemento_By__org_jboss_elemento_By_$p_org_jboss_elemento_By(Combinator.f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator, selector);
 }
 /** @nodts @return {By} */
 m_combinator__org_jboss_elemento_By_Combinator__org_jboss_elemento_By__org_jboss_elemento_By_$p_org_jboss_elemento_By(/** Combinator */ combinator, /** By */ selector) {
  return ByCombination.$create__org_jboss_elemento_By__org_jboss_elemento_By_Combinator__org_jboss_elemento_By(this, combinator, selector);
 }
 /** @abstract @nodts @return {?string} */
 m_selector__java_lang_String_$pp_org_jboss_elemento() {}
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hashCode__java_lang_Object__int(this.m_selector__java_lang_String_$pp_org_jboss_elemento());
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if (!By.$isInstance(o)) {
   return false;
  }
  let by = /**@type {By}*/ ($Casts.$to(o, By));
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(this.m_selector__java_lang_String_$pp_org_jboss_elemento(), by.m_selector__java_lang_String_$pp_org_jboss_elemento());
 }
 /** @override @return {?string} */
 toString() {
  return this.m_selector__java_lang_String_$pp_org_jboss_elemento();
 }
 /** @nodts */
 static $clinit() {
  By.$clinit = () =>{};
  By.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof By;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ByAttribute = goog.module.get('org.jboss.elemento.By.ByAttribute$impl');
  ByClassname = goog.module.get('org.jboss.elemento.By.ByClassname$impl');
  ByCombination = goog.module.get('org.jboss.elemento.By.ByCombination$impl');
  ByData = goog.module.get('org.jboss.elemento.By.ByData$impl');
  ByElement = goog.module.get('org.jboss.elemento.By.ByElement$impl');
  ByGroup = goog.module.get('org.jboss.elemento.By.ByGroup$impl');
  ById = goog.module.get('org.jboss.elemento.By.ById$impl');
  BySelector = goog.module.get('org.jboss.elemento.By.BySelector$impl');
  Combinator = goog.module.get('org.jboss.elemento.By.Combinator$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(By, 'org.jboss.elemento.By');

exports = By;

//# sourceMappingURL=By.js.map
