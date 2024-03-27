goog.module('org.patternfly.icon.PredefinedIcon$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SVGContainerBuilder = goog.require('org.jboss.elemento.svg.SVGContainerBuilder$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SVG = goog.forwardDeclare('org.jboss.elemento.svg.SVG$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let IconSpec = goog.forwardDeclare('org.patternfly.icon.IconSpec$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @extends {SVGContainerBuilder<SVGElement>}
 */
class PredefinedIcon extends SVGContainerBuilder {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {IconSpec} @nodts*/
  this.f_iconSpec__org_patternfly_icon_PredefinedIcon;
 }
 /** @nodts @return {!PredefinedIcon} */
 static $create__org_patternfly_icon_IconSpec(/** IconSpec */ iconSpec) {
  PredefinedIcon.$clinit();
  let $instance = new PredefinedIcon();
  $instance.$ctor__org_patternfly_icon_PredefinedIcon__org_patternfly_icon_IconSpec__void(iconSpec);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_icon_PredefinedIcon__org_patternfly_icon_IconSpec__void(/** IconSpec */ iconSpec) {
  this.$ctor__org_jboss_elemento_svg_SVGContainerBuilder__org_jboss_elemento_svg_SVGElement__void(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(SVG.m_svg__org_jboss_elemento_svg_SVGContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_svg__org_patternfly_style_Classes], j_l_String))), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('viewBox', iconSpec.f_xOffset__org_patternfly_icon_IconSpec + ' ' + iconSpec.f_yOffset__org_patternfly_icon_IconSpec + ' ' + iconSpec.f_width__org_patternfly_icon_IconSpec + ' ' + iconSpec.f_height__org_patternfly_icon_IconSpec), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('width', '1em'), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('height', '1em'), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('fill', 'currentColor'), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'img'), SVGContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), SVGContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('iconName', iconSpec.f_id__org_patternfly_icon_IconSpec), SVGContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createComment(iconSpec.f_license__org_patternfly_icon_IconSpec)), SVGContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SVGContainerBuilder<SVGPathElement>}*/ ($Casts.$to(SVG.m_path__org_jboss_elemento_svg_SVGContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('d', iconSpec.f_path__org_patternfly_icon_IconSpec), SVGContainerBuilder))), SVGContainerBuilder)).m_element__org_jboss_elemento_svg_SVGElement());
  this.f_iconSpec__org_patternfly_icon_PredefinedIcon = iconSpec;
 }
 /** @nodts @return {PredefinedIcon} */
 m_that__org_patternfly_icon_PredefinedIcon() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PredefinedIcon} */
 m_that__org_jboss_elemento_svg_SVGContainerBuilder() {
  return this.m_that__org_patternfly_icon_PredefinedIcon();
 }
 /** @nodts */
 static $clinit() {
  PredefinedIcon.$clinit = () =>{};
  PredefinedIcon.$loadModules();
  SVGContainerBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PredefinedIcon;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  SVG = goog.module.get('org.jboss.elemento.svg.SVG$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PredefinedIcon, 'org.patternfly.icon.PredefinedIcon');

exports = PredefinedIcon;

//# sourceMappingURL=PredefinedIcon.js.map
