goog.module('org.patternfly.style.Modifiers.NoFill$impl');

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
class NoFill {
 /** @abstract @nodts @return {B} */
 m_noFill__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_noFill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ noFill) {}
 /** @nodts @template E, B @return {B} */
 static m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(/** !NoFill<E, B> */ $thisArg) {
  NoFill.$clinit();
  return $thisArg.m_noFill__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(/** !NoFill<E, B> */ $thisArg, /** boolean */ noFill) {
  NoFill.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_noFill__org_patternfly_style_Classes, noFill);
 }
 /** @nodts */
 static $clinit() {
  NoFill.$clinit = () =>{};
  NoFill.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_NoFill = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_NoFill;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
NoFill.$markImplementor(/**@type {Function}*/ (NoFill));
$Util.$setClassMetadataForInterface(NoFill, 'org.patternfly.style.Modifiers$NoFill');

exports = NoFill;

//# sourceMappingURL=Modifiers$NoFill.js.map
