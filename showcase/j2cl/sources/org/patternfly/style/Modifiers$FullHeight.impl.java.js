goog.module('org.patternfly.style.Modifiers.FullHeight$impl');

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
class FullHeight {
 /** @abstract @nodts @return {B} */
 m_fullHeight__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_fullHeight__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ fullHeight) {}
 /** @nodts @template E, B @return {B} */
 static m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(/** !FullHeight<E, B> */ $thisArg) {
  FullHeight.$clinit();
  return $thisArg.m_fullHeight__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(/** !FullHeight<E, B> */ $thisArg, /** boolean */ fullHeight) {
  FullHeight.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_fullHeight__org_patternfly_style_Classes, fullHeight);
 }
 /** @nodts */
 static $clinit() {
  FullHeight.$clinit = () =>{};
  FullHeight.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_FullHeight = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_FullHeight;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
FullHeight.$markImplementor(/**@type {Function}*/ (FullHeight));
$Util.$setClassMetadataForInterface(FullHeight, 'org.patternfly.style.Modifiers$FullHeight');

exports = FullHeight;

//# sourceMappingURL=Modifiers$FullHeight.js.map
