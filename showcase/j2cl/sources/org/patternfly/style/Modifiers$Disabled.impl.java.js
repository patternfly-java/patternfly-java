goog.module('org.patternfly.style.Modifiers.Disabled$impl');

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
class Disabled {
 /** @abstract @nodts @return {B} */
 m_disabled__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ disabled) {}
 /** @abstract @nodts @return {boolean} */
 m_isDisabled__boolean() {}
 /** @nodts @template E, B @return {B} */
 static m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(/** !Disabled<E, B> */ $thisArg) {
  Disabled.$clinit();
  return $thisArg.m_disabled__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(/** !Disabled<E, B> */ $thisArg, /** boolean */ disabled) {
  Disabled.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_disabled__org_patternfly_style_Classes, disabled);
 }
 /** @nodts @template E, B @return {boolean} */
 static m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(/** !Disabled<E, B> */ $thisArg) {
  Disabled.$clinit();
  return /**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element()).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes));
 }
 /** @nodts */
 static $clinit() {
  Disabled.$clinit = () =>{};
  Disabled.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Disabled = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Disabled;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Disabled.$markImplementor(/**@type {Function}*/ (Disabled));
$Util.$setClassMetadataForInterface(Disabled, 'org.patternfly.style.Modifiers$Disabled');

exports = Disabled;

//# sourceMappingURL=Modifiers$Disabled.js.map
