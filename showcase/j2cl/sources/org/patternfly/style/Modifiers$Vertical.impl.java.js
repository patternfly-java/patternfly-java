goog.module('org.patternfly.style.Modifiers.Vertical$impl');

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
class Vertical {
 /** @abstract @nodts @return {B} */
 m_vertical__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_vertical__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ vertical) {}
 /** @nodts @template E, B @return {B} */
 static m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(/** !Vertical<E, B> */ $thisArg) {
  Vertical.$clinit();
  return $thisArg.m_vertical__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_vertical__$default__org_patternfly_style_Modifiers_Vertical__boolean__org_jboss_elemento_TypedBuilder(/** !Vertical<E, B> */ $thisArg, /** boolean */ vertical) {
  Vertical.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_vertical__org_patternfly_style_Classes, vertical);
 }
 /** @nodts */
 static $clinit() {
  Vertical.$clinit = () =>{};
  Vertical.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Vertical = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Vertical;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Vertical.$markImplementor(/**@type {Function}*/ (Vertical));
$Util.$setClassMetadataForInterface(Vertical, 'org.patternfly.style.Modifiers$Vertical');

exports = Vertical;

//# sourceMappingURL=Modifiers$Vertical.js.map
