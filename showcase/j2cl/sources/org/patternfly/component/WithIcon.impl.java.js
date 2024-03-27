goog.module('org.patternfly.component.WithIcon$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class WithIcon {
 /** @abstract @nodts @return {B} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ icon) {}
 /** @abstract @nodts @return {B} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ icon) {}
 /** @abstract @nodts @return {B} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {}
 /** @nodts @template E, B @return {B} */
 static m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** !WithIcon<E, B> */ $thisArg, /** PredefinedIcon */ icon) {
  WithIcon.$clinit();
  return $thisArg.m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(icon.m_element__org_jboss_elemento_svg_SVGElement());
 }
 /** @nodts */
 static $clinit() {
  WithIcon.$clinit = () =>{};
  WithIcon.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_WithIcon = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_WithIcon;
 }
 
 /** @nodts */
 static $loadModules() {}
}
WithIcon.$markImplementor(/**@type {Function}*/ (WithIcon));
$Util.$setClassMetadataForInterface(WithIcon, 'org.patternfly.component.WithIcon');

exports = WithIcon;

//# sourceMappingURL=WithIcon.js.map
