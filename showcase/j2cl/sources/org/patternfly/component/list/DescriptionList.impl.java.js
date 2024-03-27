goog.module('org.patternfly.component.list.DescriptionList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Horizontal = goog.require('org.patternfly.style.Modifiers.Horizontal$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDListElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let DescriptionListGroup = goog.forwardDeclare('org.patternfly.component.list.DescriptionListGroup$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let BreakpointCollector = goog.forwardDeclare('org.patternfly.style.BreakpointCollector$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let Orientation = goog.forwardDeclare('org.patternfly.style.Orientation$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, DescriptionList>}
 * @implements {Compact<HTMLElement, DescriptionList>}
 * @implements {Horizontal<HTMLElement, DescriptionList>}
 */
class DescriptionList extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DescriptionList} */
 static m_descriptionList__org_patternfly_component_list_DescriptionList() {
  DescriptionList.$clinit();
  return DescriptionList.$create__();
 }
 /** @nodts @return {!DescriptionList} */
 static $create__() {
  DescriptionList.$clinit();
  let $instance = new DescriptionList();
  $instance.$ctor__org_patternfly_component_list_DescriptionList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DescriptionList__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_DescriptionList__org_patternfly_component_ComponentType, /**@type {HTMLDListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDListElement>}*/ ($Casts.$to(Elements.m_dl__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {DescriptionList} */
 m_addGroup__org_patternfly_component_list_DescriptionListGroup__org_patternfly_component_list_DescriptionList(/** DescriptionListGroup */ group) {
  return /**@type {DescriptionList}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(group), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_autoColumnWidths__org_patternfly_component_list_DescriptionList() {
  return this.m_autoColumnWidths__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_autoColumnWidths__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ autoColumnWidths) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_autoColumnWidths__org_patternfly_style_Classes, autoColumnWidths), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_autoFit__org_patternfly_component_list_DescriptionList() {
  return this.m_autoFit__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_autoFit__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ autoFit) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_autoFit__org_patternfly_style_Classes, autoFit), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_autoFitMin__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/** Breakpoints<?string> */ autoFitMin) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_GridTemplateColumns__org_patternfly_style_Variables, 'min'], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(this, autoFitMin), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_columns__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/** Breakpoints<Integer> */ columns) {
  if (!$Equality.$same(columns, null)) {
   let modifiers = /**@type {?string}*/ ($Casts.$to(columns.m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt((bp) =>{
    let bp_1 = /**@type {Tuple}*/ ($Casts.$to(bp, Tuple));
    return Validation.m_verifyRange__java_lang_String__elemental2_dom_Element__java_lang_String__int__int__int__boolean(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'columns', /**@type {Integer}*/ ($Casts.$to(bp_1.f_value__org_patternfly_core_Tuple, Integer)).m_intValue__int(), 1, 3);
   })).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Tuple<Breakpoint, Integer>, StringBuilder, ?string>}*/ (BreakpointCollector.m_modifiers__java_util_function_Function__java_util_stream_Collector(j_u_function_Function.$adapt((col) =>{
    let col_1 = /**@type {Integer}*/ ($Casts.$to(col, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(col_1) + '-col';
   })))), j_l_String));
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([modifiers], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {DescriptionList} */
 m_displaySize__org_patternfly_style_Size__org_patternfly_component_list_DescriptionList(/** Size */ size) {
  if (Validation.m_verifyEnum__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'displaySize', size, Size.f_lg__org_patternfly_style_Size, /**@type {!Array<Size>}*/ ($Arrays.$init([Size.f__2xl__org_patternfly_style_Size], Size)))) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, size)], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {DescriptionList} */
 m_fillColumns__org_patternfly_component_list_DescriptionList() {
  return this.m_fillColumns__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_fillColumns__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ fillColumns) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_fillColumns__org_patternfly_style_Classes, fillColumns), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_fluid__org_patternfly_component_list_DescriptionList() {
  return this.m_fluid__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_fluid__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ fluid) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_fluid__org_patternfly_style_Classes, fluid), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_horizontalTermWidth__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/** Breakpoints<?string> */ horizontalTermWidth) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init(['m-horizontal__term', 'width'], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(this, horizontalTermWidth), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_inlineGrid__org_patternfly_component_list_DescriptionList() {
  return this.m_inlineGrid__boolean__org_patternfly_component_list_DescriptionList(true);
 }
 /** @nodts @return {DescriptionList} */
 m_inlineGrid__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ inlineGrid) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_list_DescriptionList(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_inlineGrid__org_patternfly_style_Classes, inlineGrid), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_orientation__org_patternfly_style_Breakpoints__org_patternfly_component_list_DescriptionList(/** Breakpoints<Orientation> */ orientation) {
  return /**@type {DescriptionList}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([orientation.m_modifiers__java_lang_String()], j_l_String))), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_termWidth__java_lang_String__org_patternfly_component_list_DescriptionList(/** ?string */ width) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init(['term', 'width'], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, width), DescriptionList));
 }
 /** @nodts @return {DescriptionList} */
 m_that__org_patternfly_component_list_DescriptionList() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DescriptionList();
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), DescriptionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_horizontal__org_jboss_elemento_TypedBuilder() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__org_jboss_elemento_TypedBuilder(this), DescriptionList));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionList} */
 m_horizontal__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_compact__org_patternfly_component_list_DescriptionList() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_compact__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_horizontal__org_patternfly_component_list_DescriptionList() {
  return /**@type {DescriptionList}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__org_jboss_elemento_TypedBuilder(this), DescriptionList));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionList} */
 m_horizontal__boolean__org_patternfly_component_list_DescriptionList(/** boolean */ arg0) {
  return /**@type {DescriptionList}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionList));
 }
 /** @nodts */
 static $clinit() {
  DescriptionList.$clinit = () =>{};
  DescriptionList.$loadModules();
  BaseComponent.$clinit();
  Compact.$clinit();
  Horizontal.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DescriptionList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDListElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  BreakpointCollector = goog.module.get('org.patternfly.style.BreakpointCollector$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Compact.$markImplementor(DescriptionList);
Horizontal.$markImplementor(DescriptionList);
$Util.$setClassMetadata(DescriptionList, 'org.patternfly.component.list.DescriptionList');

exports = DescriptionList;

//# sourceMappingURL=DescriptionList.js.map
