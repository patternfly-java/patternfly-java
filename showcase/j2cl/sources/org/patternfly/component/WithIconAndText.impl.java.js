goog.module('org.patternfly.component.WithIconAndText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class WithIconAndText {
 /** @abstract @nodts @return {B} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ icon, /** ?string */ text) {}
 /** @abstract @nodts @return {B} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ icon, /** ?string */ text, /** IconPosition */ position) {}
 /** @abstract @nodts @return {B} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** Element */ icon, /** ?string */ text, /** IconPosition */ iconPosition) {}
 /** @nodts @template E, B @return {B} */
 static m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** !WithIconAndText<E, B> */ $thisArg, /** PredefinedIcon */ icon, /** ?string */ text) {
  WithIconAndText.$clinit();
  return $thisArg.m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(icon.m_element__org_jboss_elemento_svg_SVGElement(), text, IconPosition.f_start__org_patternfly_component_IconPosition);
 }
 /** @nodts @template E, B @return {B} */
 static m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** !WithIconAndText<E, B> */ $thisArg, /** PredefinedIcon */ icon, /** ?string */ text, /** IconPosition */ position) {
  WithIconAndText.$clinit();
  return $thisArg.m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(icon.m_element__org_jboss_elemento_svg_SVGElement(), text, position);
 }
 /** @nodts */
 static $clinit() {
  WithIconAndText.$clinit = () =>{};
  WithIconAndText.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_WithIconAndText = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_WithIconAndText;
 }
 
 /** @nodts */
 static $loadModules() {
  IconPosition = goog.module.get('org.patternfly.component.IconPosition$impl');
 }
}
WithIconAndText.$markImplementor(/**@type {Function}*/ (WithIconAndText));
$Util.$setClassMetadataForInterface(WithIconAndText, 'org.patternfly.component.WithIconAndText');

exports = WithIconAndText;

//# sourceMappingURL=WithIconAndText.js.map
