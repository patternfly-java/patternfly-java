goog.module('org.patternfly.component.spinner.Spinner$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponentSVG = goog.require('org.patternfly.component.BaseComponentSVG$impl');
const Inline = goog.require('org.patternfly.style.Modifiers.Inline$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SVG = goog.forwardDeclare('org.jboss.elemento.svg.SVG$impl');
let SVGContainerBuilder = goog.forwardDeclare('org.jboss.elemento.svg.SVGContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentSVG<SVGElement, Spinner>}
 * @implements {Inline<SVGElement, Spinner>}
 */
class Spinner extends BaseComponentSVG {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Spinner} */
 static m_spinner__org_patternfly_component_spinner_Spinner() {
  Spinner.$clinit();
  return Spinner.$create__org_patternfly_style_Size__java_lang_String(null, 'Loading..');
 }
 /** @nodts @return {Spinner} */
 static m_spinner__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(/** Size */ size) {
  Spinner.$clinit();
  return Spinner.$create__org_patternfly_style_Size__java_lang_String(size, 'Loading..');
 }
 /** @nodts @return {Spinner} */
 static m_spinner__java_lang_String__org_patternfly_component_spinner_Spinner(/** ?string */ label) {
  Spinner.$clinit();
  return Spinner.$create__org_patternfly_style_Size__java_lang_String(null, label);
 }
 /** @nodts @return {Spinner} */
 static m_spinner__org_patternfly_style_Size__java_lang_String__org_patternfly_component_spinner_Spinner(/** Size */ size, /** ?string */ label) {
  Spinner.$clinit();
  return Spinner.$create__org_patternfly_style_Size__java_lang_String(size, label);
 }
 /** @nodts @return {!Spinner} */
 static $create__org_patternfly_style_Size__java_lang_String(/** Size */ size, /** ?string */ label) {
  Spinner.$clinit();
  let $instance = new Spinner();
  $instance.$ctor__org_patternfly_component_spinner_Spinner__org_patternfly_style_Size__java_lang_String__void(size, label);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_spinner_Spinner__org_patternfly_style_Size__java_lang_String__void(/** Size */ size, /** ?string */ label) {
  this.$ctor__org_patternfly_component_BaseComponentSVG__org_patternfly_component_ComponentType__org_jboss_elemento_svg_SVGElement__void(ComponentType.f_Spinner__org_patternfly_component_ComponentType, /**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(SVG.m_svg__org_jboss_elemento_svg_SVGContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_spinner__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'progressbar'), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('viewBox', '0 0 100 100'), SVGContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), SVGContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SVGContainerBuilder<SVGCircleElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGCircleElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGCircleElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGCircleElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGCircleElement>}*/ ($Casts.$to(SVG.m_circle__org_jboss_elemento_svg_SVGContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_spinner__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_path__org_patternfly_style_Classes], j_l_String)))], j_l_String))), SVGContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder('cx', 50), SVGContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder('cy', 50), SVGContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder('r', 45), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('fill', 'none'), SVGContainerBuilder))), SVGContainerBuilder)).m_element__org_jboss_elemento_svg_SVGElement());
  if (!$Equality.$same(size, null)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([size.m_modifier__java_lang_String()], j_l_String)));
  }
 }
 /** @nodts @return {Spinner} */
 m_size__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(/** Size */ size) {
  return /**@type {Spinner}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([size.m_modifier__java_lang_String()], j_l_String))), Spinner));
 }
 /** @nodts @return {Spinner} */
 m_diameter__java_lang_String__org_patternfly_component_spinner_Spinner(/** ?string */ diameter) {
  return /**@type {Spinner}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_spinner__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init(['diameter'], j_l_String))).m_applyTo__org_jboss_elemento_svg_HasSVGElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, diameter), Spinner));
 }
 /** @nodts @return {Spinner} */
 m_that__org_patternfly_component_spinner_Spinner() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Spinner} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_spinner_Spinner();
 }
 //Bridge method.
 /** @final @override @nodts @return {Spinner} */
 m_inline__org_jboss_elemento_TypedBuilder() {
  return /**@type {Spinner}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Spinner));
 }
 //Bridge method.
 /** @final @override @nodts @return {Spinner} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Spinner}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Spinner));
 }
 //Default method forwarding stub.
 /** @nodts @return {Spinner} */
 m_inline__org_patternfly_component_spinner_Spinner() {
  return /**@type {Spinner}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Spinner));
 }
 //Default method forwarding stub.
 /** @nodts @return {Spinner} */
 m_inline__boolean__org_patternfly_component_spinner_Spinner(/** boolean */ arg0) {
  return /**@type {Spinner}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Spinner));
 }
 /** @nodts */
 static $clinit() {
  Spinner.$clinit = () =>{};
  Spinner.$loadModules();
  BaseComponentSVG.$clinit();
  Inline.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Spinner;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SVG = goog.module.get('org.jboss.elemento.svg.SVG$impl');
  SVGContainerBuilder = goog.module.get('org.jboss.elemento.svg.SVGContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Inline.$markImplementor(Spinner);
$Util.$setClassMetadata(Spinner, 'org.patternfly.component.spinner.Spinner');

exports = Spinner;

//# sourceMappingURL=Spinner.js.map
