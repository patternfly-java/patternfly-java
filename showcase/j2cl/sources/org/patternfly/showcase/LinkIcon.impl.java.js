goog.module('org.patternfly.showcase.LinkIcon$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SVGContainerBuilder = goog.forwardDeclare('org.jboss.elemento.svg.SVGContainerBuilder$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<SVGElement>}
 */
class LinkIcon extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SVGElement} @nodts*/
  this.f_root__org_patternfly_showcase_LinkIcon_;
 }
 /** @nodts @return {LinkIcon} */
 static m_linkIcon__org_patternfly_showcase_LinkIcon() {
  LinkIcon.$clinit();
  return LinkIcon.$create__();
 }
 /** @nodts @return {!LinkIcon} */
 static $create__() {
  LinkIcon.$clinit();
  let $instance = new LinkIcon();
  $instance.$ctor__org_patternfly_showcase_LinkIcon__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_LinkIcon__void() {
  this.$ctor__java_lang_Object__void();
  this.f_root__org_patternfly_showcase_LinkIcon_ = /**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(fas.m_link__org_patternfly_icon_PredefinedIcon().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-heading-anchor-icon'], j_l_String))), SVGContainerBuilder)).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('vertical-align', 'middle'), SVGContainerBuilder)).m_element__org_jboss_elemento_svg_SVGElement();
 }
 /** @nodts @return {SVGElement} */
 m_element__org_jboss_elemento_svg_SVGElement() {
  return this.f_root__org_patternfly_showcase_LinkIcon_;
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__org_jboss_elemento_svg_SVGElement();
 }
 /** @nodts */
 static $clinit() {
  LinkIcon.$clinit = () =>{};
  LinkIcon.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LinkIcon;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  SVGContainerBuilder = goog.module.get('org.jboss.elemento.svg.SVGContainerBuilder$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsElement.$markImplementor(LinkIcon);
$Util.$setClassMetadata(LinkIcon, 'org.patternfly.showcase.LinkIcon');

exports = LinkIcon;

//# sourceMappingURL=LinkIcon.js.map
