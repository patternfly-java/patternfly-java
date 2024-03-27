goog.module('org.patternfly.style.Modifiers.Fill$impl');

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
class Fill {
 /** @abstract @nodts @return {B} */
 m_fill__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ fill) {}
 /** @nodts @template E, B @return {B} */
 static m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(/** !Fill<E, B> */ $thisArg) {
  Fill.$clinit();
  return $thisArg.m_fill__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(/** !Fill<E, B> */ $thisArg, /** boolean */ fill) {
  Fill.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_fill__org_patternfly_style_Classes, fill);
 }
 /** @nodts */
 static $clinit() {
  Fill.$clinit = () =>{};
  Fill.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Fill = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Fill;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Fill.$markImplementor(/**@type {Function}*/ (Fill));
$Util.$setClassMetadataForInterface(Fill, 'org.patternfly.style.Modifiers$Fill');

exports = Fill;

//# sourceMappingURL=Modifiers$Fill.js.map
