goog.module('org.patternfly.component.banner.Banner$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Color = goog.forwardDeclare('org.patternfly.style.Color$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Banner>}
 */
class Banner extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_screenReaderElement__org_patternfly_component_banner_Banner_;
 }
 /** @nodts @return {Banner} */
 static m_banner__org_patternfly_component_banner_Banner() {
  Banner.$clinit();
  return Banner.$create__java_lang_String__org_patternfly_style_Color(null, Color.f_grey__org_patternfly_style_Color);
 }
 /** @nodts @return {Banner} */
 static m_banner__org_patternfly_style_Color__org_patternfly_component_banner_Banner(/** Color */ color) {
  Banner.$clinit();
  return Banner.$create__java_lang_String__org_patternfly_style_Color(null, color);
 }
 /** @nodts @return {Banner} */
 static m_banner__java_lang_String__org_patternfly_component_banner_Banner(/** ?string */ text) {
  Banner.$clinit();
  return Banner.$create__java_lang_String__org_patternfly_style_Color(text, Color.f_grey__org_patternfly_style_Color);
 }
 /** @nodts @return {Banner} */
 static m_banner__java_lang_String__org_patternfly_style_Color__org_patternfly_component_banner_Banner(/** ?string */ text, /** Color */ color) {
  Banner.$clinit();
  return Banner.$create__java_lang_String__org_patternfly_style_Color(text, color);
 }
 /** @nodts @return {!Banner} */
 static $create__java_lang_String__org_patternfly_style_Color(/** ?string */ text, /** Color */ color) {
  Banner.$clinit();
  let $instance = new Banner();
  $instance.$ctor__org_patternfly_component_banner_Banner__java_lang_String__org_patternfly_style_Color__void(text, color);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_banner_Banner__java_lang_String__org_patternfly_style_Color__void(/** ?string */ text, /** Color */ color) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Banner__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_banner__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), color.f_modifier__org_patternfly_style_Color], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (!$Equality.$same(text, null)) {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).textContent = text;
  }
 }
 /** @nodts @return {Banner} */
 m_sticky__org_patternfly_component_banner_Banner() {
  return this.m_sticky__boolean__org_patternfly_component_banner_Banner(true);
 }
 /** @nodts @return {Banner} */
 m_sticky__boolean__org_patternfly_component_banner_Banner(/** boolean */ sticky) {
  return /**@type {Banner}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_banner_Banner(), /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), Classes.f_sticky__org_patternfly_style_Classes, sticky), Banner));
 }
 /** @nodts @return {Banner} */
 m_screenReader__java_lang_String__org_patternfly_component_banner_Banner(/** ?string */ text) {
  this.m_failSafeScreenReaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_banner_Banner().textContent = text;
  return this;
 }
 /** @nodts @return {Banner} */
 m_that__org_patternfly_component_banner_Banner() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeScreenReaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_banner_Banner() {
  if ($Equality.$same(this.f_screenReaderElement__org_patternfly_component_banner_Banner_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.f_screenReaderElement__org_patternfly_component_banner_Banner_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.f_screenReaderElement__org_patternfly_component_banner_Banner_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Banner} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_banner_Banner();
 }
 /** @nodts */
 static $clinit() {
  Banner.$clinit = () =>{};
  Banner.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Banner;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Color = goog.module.get('org.patternfly.style.Color$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Banner, 'org.patternfly.component.banner.Banner');

exports = Banner;

//# sourceMappingURL=Banner.js.map
