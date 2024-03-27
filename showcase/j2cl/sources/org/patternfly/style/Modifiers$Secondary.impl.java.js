goog.module('org.patternfly.style.Modifiers.Secondary$impl');

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
class Secondary {
 /** @abstract @nodts @return {B} */
 m_secondary__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_secondary__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ secondary) {}
 /** @nodts @template E, B @return {B} */
 static m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(/** !Secondary<E, B> */ $thisArg) {
  Secondary.$clinit();
  return $thisArg.m_secondary__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_secondary__$default__org_patternfly_style_Modifiers_Secondary__boolean__org_jboss_elemento_TypedBuilder(/** !Secondary<E, B> */ $thisArg, /** boolean */ secondary) {
  Secondary.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_secondary__org_patternfly_style_Classes, secondary);
 }
 /** @nodts */
 static $clinit() {
  Secondary.$clinit = () =>{};
  Secondary.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Secondary = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Secondary;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Secondary.$markImplementor(/**@type {Function}*/ (Secondary));
$Util.$setClassMetadataForInterface(Secondary, 'org.patternfly.style.Modifiers$Secondary');

exports = Secondary;

//# sourceMappingURL=Modifiers$Secondary.js.map
