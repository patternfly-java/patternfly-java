goog.module('org.patternfly.style.Modifiers.NoPadding$impl');

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
class NoPadding {
 /** @abstract @nodts @return {B} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ noPadding) {}
 /** @nodts @template E, B @return {B} */
 static m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(/** !NoPadding<E, B> */ $thisArg) {
  NoPadding.$clinit();
  return $thisArg.m_noPadding__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(/** !NoPadding<E, B> */ $thisArg, /** boolean */ noPadding) {
  NoPadding.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_noPadding__org_patternfly_style_Classes, noPadding);
 }
 /** @nodts */
 static $clinit() {
  NoPadding.$clinit = () =>{};
  NoPadding.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_NoPadding = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_NoPadding;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
NoPadding.$markImplementor(/**@type {Function}*/ (NoPadding));
$Util.$setClassMetadataForInterface(NoPadding, 'org.patternfly.style.Modifiers$NoPadding');

exports = NoPadding;

//# sourceMappingURL=Modifiers$NoPadding.js.map
