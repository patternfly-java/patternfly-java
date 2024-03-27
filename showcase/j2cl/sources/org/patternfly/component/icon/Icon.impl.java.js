goog.module('org.patternfly.component.icon.Icon$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const WithProgress = goog.require('org.patternfly.component.WithProgress$impl');
const Inline = goog.require('org.patternfly.style.Modifiers.Inline$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Icon>}
 * @implements {Inline<HTMLElement, Icon>}
 * @implements {WithProgress<HTMLElement, Icon>}
 */
class Icon extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_content__org_patternfly_component_icon_Icon_;
  /**@type {Size} @nodts*/
  this.f_size__org_patternfly_component_icon_Icon_;
  /**@type {Size} @nodts*/
  this.f_iconSize__org_patternfly_component_icon_Icon_;
  /**@type {Spinner} @nodts*/
  this.f_spinner__org_patternfly_component_icon_Icon_;
 }
 /** @nodts @return {Icon} */
 static m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_icon_Icon(/** PredefinedIcon */ icon) {
  Icon.$clinit();
  return Icon.$create__elemental2_dom_Element(icon.m_element__org_jboss_elemento_svg_SVGElement());
 }
 /** @nodts @return {Icon} */
 static m_icon__elemental2_dom_Element__org_patternfly_component_icon_Icon(/** Element */ icon) {
  Icon.$clinit();
  return Icon.$create__elemental2_dom_Element(icon);
 }
 /** @nodts @return {!Icon} */
 static $create__elemental2_dom_Element(/** Element */ icon) {
  Icon.$clinit();
  let $instance = new Icon();
  $instance.$ctor__org_patternfly_component_icon_Icon__elemental2_dom_Element__void(icon);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_icon_Icon__elemental2_dom_Element__void(/** Element */ icon) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Icon__org_patternfly_component_ComponentType, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_content__org_patternfly_component_icon_Icon_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))));
 }
 /** @nodts @return {Icon} */
 m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(/** Size */ size) {
  this.f_size__org_patternfly_component_icon_Icon_ = size;
  return /**@type {Icon}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([size.m_modifier__java_lang_String()], j_l_String))), Icon));
 }
 /** @nodts @return {Icon} */
 m_iconSize__org_patternfly_style_Size__org_patternfly_component_icon_Icon(/** Size */ size) {
  this.f_iconSize__org_patternfly_component_icon_Icon_ = size;
  this.f_content__org_patternfly_component_icon_Icon_.classList.add(this.f_iconSize__org_patternfly_component_icon_Icon_.m_modifier__java_lang_String());
  return this;
 }
 /** @nodts @return {Icon} */
 m_status__org_patternfly_style_Status__org_patternfly_component_icon_Icon(/** Status */ status) {
  this.f_content__org_patternfly_component_icon_Icon_.classList.add(status.f_modifier__org_patternfly_style_Status);
  return this;
 }
 /** @nodts @return {Icon} */
 m_progress__boolean__java_lang_String__java_util_function_Consumer__org_patternfly_component_icon_Icon(/** boolean */ inProgress, /** ?string */ label, /** Consumer<Spinner> */ spinnerConsumer) {
  let element = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_progress__org_patternfly_style_Classes], j_l_String)))));
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(element);
  if (inProgress) {
   this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inProgress__org_patternfly_style_Classes));
   if ($Equality.$same(this.f_spinner__org_patternfly_component_icon_Icon_, null)) {
    this.f_spinner__org_patternfly_component_icon_Icon_ = Spinner.m_spinner__java_lang_String__org_patternfly_component_spinner_Spinner(label);
    if (!$Equality.$same(this.f_size__org_patternfly_component_icon_Icon_, null)) {
     this.f_spinner__org_patternfly_component_icon_Icon_.m_size__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(this.f_size__org_patternfly_component_icon_Icon_);
    } else if (!$Equality.$same(this.f_iconSize__org_patternfly_component_icon_Icon_, null)) {
     this.f_spinner__org_patternfly_component_icon_Icon_.m_size__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(this.f_iconSize__org_patternfly_component_icon_Icon_);
    } else {
     this.f_spinner__org_patternfly_component_icon_Icon_.m_size__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(Size.f_md__org_patternfly_style_Size);
    }
   }
   if (!$Equality.$same(spinnerConsumer, null)) {
    spinnerConsumer.m_accept__java_lang_Object__void(this.f_spinner__org_patternfly_component_icon_Icon_);
   }
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_progress__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_spinner__org_patternfly_component_icon_Icon_), HTMLContainerBuilder)));
  } else {
   this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inProgress__org_patternfly_style_Classes));
  }
  return this;
 }
 /** @nodts @return {Icon} */
 m_that__org_patternfly_component_icon_Icon() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_icon_Icon();
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_inline__org_jboss_elemento_TypedBuilder() {
  return /**@type {Icon}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Icon));
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Icon}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Icon));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_inProgress__boolean() {
  return WithProgress.m_inProgress__$default__org_patternfly_component_WithProgress__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_progress__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Icon));
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_progress__boolean__java_lang_String__org_jboss_elemento_TypedBuilder(/** boolean */ arg0, /** ?string */ arg1) {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Icon));
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_progress__boolean__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** boolean */ arg0, /** Consumer<Spinner> */ arg1) {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Icon));
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_progress__boolean__java_lang_String__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** boolean */ arg0, /** ?string */ arg1, /** Consumer<Spinner> */ arg2) {
  return this.m_progress__boolean__java_lang_String__java_util_function_Consumer__org_patternfly_component_icon_Icon(arg0, arg1, arg2);
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_startProgress__org_jboss_elemento_TypedBuilder() {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_startProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Icon));
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_stopProgress__org_jboss_elemento_TypedBuilder() {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_stopProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Icon));
 }
 //Bridge method.
 /** @final @override @nodts @return {Icon} */
 m_toggleProgress__org_jboss_elemento_TypedBuilder() {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_toggleProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Icon));
 }
 //Default method forwarding stub.
 /** @nodts @return {Icon} */
 m_inline__org_patternfly_component_icon_Icon() {
  return /**@type {Icon}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Icon));
 }
 //Default method forwarding stub.
 /** @nodts @return {Icon} */
 m_inline__boolean__org_patternfly_component_icon_Icon(/** boolean */ arg0) {
  return /**@type {Icon}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Icon));
 }
 //Default method forwarding stub.
 /** @nodts @return {Icon} */
 m_progress__boolean__org_patternfly_component_icon_Icon(/** boolean */ arg0) {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Icon));
 }
 //Default method forwarding stub.
 /** @nodts @return {Icon} */
 m_progress__boolean__java_lang_String__org_patternfly_component_icon_Icon(/** boolean */ arg0, /** ?string */ arg1) {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Icon));
 }
 //Default method forwarding stub.
 /** @nodts @return {Icon} */
 m_progress__boolean__java_util_function_Consumer__org_patternfly_component_icon_Icon(/** boolean */ arg0, /** Consumer<Spinner> */ arg1) {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Icon));
 }
 //Default method forwarding stub.
 /** @nodts @return {Icon} */
 m_startProgress__org_patternfly_component_icon_Icon() {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_startProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Icon));
 }
 //Default method forwarding stub.
 /** @nodts @return {Icon} */
 m_stopProgress__org_patternfly_component_icon_Icon() {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_stopProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Icon));
 }
 //Default method forwarding stub.
 /** @nodts @return {Icon} */
 m_toggleProgress__org_patternfly_component_icon_Icon() {
  return /**@type {Icon}*/ ($Casts.$to(WithProgress.m_toggleProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Icon));
 }
 /** @nodts */
 static $clinit() {
  Icon.$clinit = () =>{};
  Icon.$loadModules();
  BaseComponent.$clinit();
  Inline.$clinit();
  WithProgress.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Icon;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Inline.$markImplementor(Icon);
WithProgress.$markImplementor(Icon);
$Util.$setClassMetadata(Icon, 'org.patternfly.component.icon.Icon');

exports = Icon;

//# sourceMappingURL=Icon.js.map
