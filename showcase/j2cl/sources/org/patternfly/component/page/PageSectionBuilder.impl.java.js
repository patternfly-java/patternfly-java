goog.module('org.patternfly.component.page.PageSectionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSection = goog.require('org.patternfly.component.page.PageSection$impl');
const PageSubComponent = goog.require('org.patternfly.component.page.PageSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Container = goog.forwardDeclare('org.jboss.elemento.Container$impl');
let Finder = goog.forwardDeclare('org.jboss.elemento.Finder$impl');
let HasElement = goog.forwardDeclare('org.jboss.elemento.HasElement$impl');
let HasHTMLElement = goog.forwardDeclare('org.jboss.elemento.HasHTMLElement$impl');
let PageMainBody = goog.forwardDeclare('org.patternfly.component.page.PageMainBody$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Padding = goog.forwardDeclare('org.patternfly.style.Padding$impl');
let Sticky = goog.forwardDeclare('org.patternfly.style.Sticky$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template E, P
 * @extends {PageSubComponent<E, P>}
 * @implements {PageSection<E, P>}
 */
class PageSectionBuilder extends PageSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ name, /** E */ element) {
  this.$ctor__org_patternfly_component_page_PageSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(name, element);
 }
 /** @nodts @return {P} */
 m_addBody__org_patternfly_component_page_PageMainBody__org_patternfly_component_page_PageSectionBuilder(/** PageMainBody */ body) {
  return this.m_add__org_patternfly_component_page_PageMainBody__org_patternfly_component_page_PageSectionBuilder(body);
 }
 /** @nodts @return {P} */
 m_add__org_patternfly_component_page_PageMainBody__org_patternfly_component_page_PageSectionBuilder(/** PageMainBody */ body) {
  /**@type {!Node}*/ (this.m_element__elemental2_dom_HTMLElement()).appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(body.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return /**@type {P}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_limitWidth__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_limitWidth__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_sticky__org_patternfly_style_Breakpoints__org_patternfly_component_page_PageSectionBuilder(/** Breakpoints<Sticky> */ sticky) {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([sticky.m_modifiers__java_lang_String()], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_padding__org_patternfly_style_Breakpoints__org_patternfly_component_page_PageSectionBuilder(/** Breakpoints<Padding> */ padding) {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([padding.m_modifiers__java_lang_String()], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_centerAligned__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_alignCenter__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_shadowTop__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowTop__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_shadowBottom__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowBottom__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_overflowScroll__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflowScroll__org_patternfly_style_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts */
 static $clinit() {
  PageSectionBuilder.$clinit = () =>{};
  PageSectionBuilder.$loadModules();
  PageSubComponent.$clinit();
  HasElement.$clinit();
  HasHTMLElement.$clinit();
  Finder.$clinit();
  Container.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageSectionBuilder;
 }
 /** @abstract @override @nodts @return {P} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Container = goog.module.get('org.jboss.elemento.Container$impl');
  Finder = goog.module.get('org.jboss.elemento.Finder$impl');
  HasElement = goog.module.get('org.jboss.elemento.HasElement$impl');
  HasHTMLElement = goog.module.get('org.jboss.elemento.HasHTMLElement$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
PageSection.$markImplementor(PageSectionBuilder);
$Util.$setClassMetadata(PageSectionBuilder, 'org.patternfly.component.page.PageSectionBuilder');

exports = PageSectionBuilder;

//# sourceMappingURL=PageSectionBuilder.js.map
