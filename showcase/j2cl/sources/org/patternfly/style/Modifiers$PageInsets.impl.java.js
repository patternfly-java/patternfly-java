goog.module('org.patternfly.style.Modifiers.PageInsets$impl');

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
class PageInsets {
 /** @abstract @nodts @return {B} */
 m_pageInsets__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_pageInsets__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ pageInsets) {}
 /** @nodts @template E, B @return {B} */
 static m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__org_jboss_elemento_TypedBuilder(/** !PageInsets<E, B> */ $thisArg) {
  PageInsets.$clinit();
  return $thisArg.m_pageInsets__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__boolean__org_jboss_elemento_TypedBuilder(/** !PageInsets<E, B> */ $thisArg, /** boolean */ pageInsets) {
  PageInsets.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_pageInsets__org_patternfly_style_Classes, pageInsets);
 }
 /** @nodts */
 static $clinit() {
  PageInsets.$clinit = () =>{};
  PageInsets.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_PageInsets = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_PageInsets;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
PageInsets.$markImplementor(/**@type {Function}*/ (PageInsets));
$Util.$setClassMetadataForInterface(PageInsets, 'org.patternfly.style.Modifiers$PageInsets');

exports = PageInsets;

//# sourceMappingURL=Modifiers$PageInsets.js.map
