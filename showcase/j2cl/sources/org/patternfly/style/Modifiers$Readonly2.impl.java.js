goog.module('org.patternfly.style.Modifiers.Readonly2$impl');

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
class Readonly2 {
 /** @abstract @nodts @return {B} */
 m_readonly__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_readonly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ readonly) {}
 /** @nodts @template E, B @return {B} */
 static m_readonly__$default__org_patternfly_style_Modifiers_Readonly2__org_jboss_elemento_TypedBuilder(/** !Readonly2<E, B> */ $thisArg) {
  Readonly2.$clinit();
  return $thisArg.m_readonly__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_readonly__$default__org_patternfly_style_Modifiers_Readonly2__boolean__org_jboss_elemento_TypedBuilder(/** !Readonly2<E, B> */ $thisArg, /** boolean */ readonly) {
  Readonly2.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_readOnly__org_patternfly_style_Classes, readonly);
 }
 /** @nodts */
 static $clinit() {
  Readonly2.$clinit = () =>{};
  Readonly2.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Readonly2 = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Readonly2;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Readonly2.$markImplementor(/**@type {Function}*/ (Readonly2));
$Util.$setClassMetadataForInterface(Readonly2, 'org.patternfly.style.Modifiers$Readonly2');

exports = Readonly2;

//# sourceMappingURL=Modifiers$Readonly2.js.map
