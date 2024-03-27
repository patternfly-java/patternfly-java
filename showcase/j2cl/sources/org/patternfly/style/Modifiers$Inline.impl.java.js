goog.module('org.patternfly.style.Modifiers.Inline$impl');

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
class Inline {
 /** @abstract @nodts @return {B} */
 m_inline__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ inline) {}
 /** @nodts @template E, B @return {B} */
 static m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(/** !Inline<E, B> */ $thisArg) {
  Inline.$clinit();
  return $thisArg.m_inline__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(/** !Inline<E, B> */ $thisArg, /** boolean */ inline) {
  Inline.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_inline__org_patternfly_style_Classes, inline);
 }
 /** @nodts */
 static $clinit() {
  Inline.$clinit = () =>{};
  Inline.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Inline = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Inline;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Inline.$markImplementor(/**@type {Function}*/ (Inline));
$Util.$setClassMetadataForInterface(Inline, 'org.patternfly.style.Modifiers$Inline');

exports = Inline;

//# sourceMappingURL=Modifiers$Inline.js.map
