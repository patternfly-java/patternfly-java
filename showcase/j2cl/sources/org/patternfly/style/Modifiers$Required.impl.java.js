goog.module('org.patternfly.style.Modifiers.Required$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class Required {
 /** @abstract @nodts @return {B} */
 m_required__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_required__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ required) {}
 /** @nodts @template E, B @return {B} */
 static m_required__$default__org_patternfly_style_Modifiers_Required__org_jboss_elemento_TypedBuilder(/** !Required<E, B> */ $thisArg) {
  Required.$clinit();
  return $thisArg.m_required__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_required__$default__org_patternfly_style_Modifiers_Required__boolean__org_jboss_elemento_TypedBuilder(/** !Required<E, B> */ $thisArg, /** boolean */ required) {
  Required.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_required__org_patternfly_style_Classes, required);
 }
 /** @nodts */
 static $clinit() {
  Required.$clinit = () =>{};
  Required.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Required = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Required;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Required.$markImplementor(/**@type {Function}*/ (Required));
$Util.$setClassMetadataForInterface(Required, 'org.patternfly.style.Modifiers$Required');

exports = Required;

//# sourceMappingURL=Modifiers$Required.js.map
