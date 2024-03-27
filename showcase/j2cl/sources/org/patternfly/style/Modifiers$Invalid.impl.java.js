goog.module('org.patternfly.style.Modifiers.Invalid$impl');

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
class Invalid {
 /** @abstract @nodts @return {B} */
 m_invalid__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_invalid__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ invalid) {}
 /** @nodts @template E, B @return {B} */
 static m_invalid__$default__org_patternfly_style_Modifiers_Invalid__org_jboss_elemento_TypedBuilder(/** !Invalid<E, B> */ $thisArg) {
  Invalid.$clinit();
  return $thisArg.m_invalid__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_invalid__$default__org_patternfly_style_Modifiers_Invalid__boolean__org_jboss_elemento_TypedBuilder(/** !Invalid<E, B> */ $thisArg, /** boolean */ invalid) {
  Invalid.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_error__org_patternfly_style_Classes, invalid);
 }
 /** @nodts */
 static $clinit() {
  Invalid.$clinit = () =>{};
  Invalid.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Invalid = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Invalid;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Invalid.$markImplementor(/**@type {Function}*/ (Invalid));
$Util.$setClassMetadataForInterface(Invalid, 'org.patternfly.style.Modifiers$Invalid');

exports = Invalid;

//# sourceMappingURL=Modifiers$Invalid.js.map
