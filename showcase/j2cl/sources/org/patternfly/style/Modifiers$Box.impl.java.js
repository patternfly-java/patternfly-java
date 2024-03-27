goog.module('org.patternfly.style.Modifiers.Box$impl');

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
class Box {
 /** @abstract @nodts @return {B} */
 m_box__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_box__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ box) {}
 /** @nodts @template E, B @return {B} */
 static m_box__$default__org_patternfly_style_Modifiers_Box__org_jboss_elemento_TypedBuilder(/** !Box<E, B> */ $thisArg) {
  Box.$clinit();
  return $thisArg.m_box__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_box__$default__org_patternfly_style_Modifiers_Box__boolean__org_jboss_elemento_TypedBuilder(/** !Box<E, B> */ $thisArg, /** boolean */ box) {
  Box.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_box__org_patternfly_style_Classes, box);
 }
 /** @nodts */
 static $clinit() {
  Box.$clinit = () =>{};
  Box.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Box = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Box;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Box.$markImplementor(/**@type {Function}*/ (Box));
$Util.$setClassMetadataForInterface(Box, 'org.patternfly.style.Modifiers$Box');

exports = Box;

//# sourceMappingURL=Modifiers$Box.js.map
