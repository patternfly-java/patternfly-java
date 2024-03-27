goog.module('org.patternfly.style.Modifiers.Gutter$impl');

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
class Gutter {
 /** @abstract @nodts @return {B} */
 m_gutter__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_gutter__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ gutter) {}
 /** @nodts @template E, B @return {B} */
 static m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(/** !Gutter<E, B> */ $thisArg) {
  Gutter.$clinit();
  return $thisArg.m_gutter__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(/** !Gutter<E, B> */ $thisArg, /** boolean */ gutter) {
  Gutter.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_gutter__org_patternfly_style_Classes, gutter);
 }
 /** @nodts */
 static $clinit() {
  Gutter.$clinit = () =>{};
  Gutter.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Gutter = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Gutter;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Gutter.$markImplementor(/**@type {Function}*/ (Gutter));
$Util.$setClassMetadataForInterface(Gutter, 'org.patternfly.style.Modifiers$Gutter');

exports = Gutter;

//# sourceMappingURL=Modifiers$Gutter.js.map
