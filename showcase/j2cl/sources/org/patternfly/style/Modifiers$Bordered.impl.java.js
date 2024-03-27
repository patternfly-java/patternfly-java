goog.module('org.patternfly.style.Modifiers.Bordered$impl');

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
class Bordered {
 /** @abstract @nodts @return {B} */
 m_bordered__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_bordered__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ bordered) {}
 /** @nodts @template E, B @return {B} */
 static m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(/** !Bordered<E, B> */ $thisArg) {
  Bordered.$clinit();
  return $thisArg.m_bordered__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(/** !Bordered<E, B> */ $thisArg, /** boolean */ bordered) {
  Bordered.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_bordered__org_patternfly_style_Classes, bordered);
 }
 /** @nodts */
 static $clinit() {
  Bordered.$clinit = () =>{};
  Bordered.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Bordered = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Bordered;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Bordered.$markImplementor(/**@type {Function}*/ (Bordered));
$Util.$setClassMetadataForInterface(Bordered, 'org.patternfly.style.Modifiers$Bordered');

exports = Bordered;

//# sourceMappingURL=Modifiers$Bordered.js.map
