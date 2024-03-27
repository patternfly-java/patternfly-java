goog.module('org.patternfly.layout.flex.FlexItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Align = goog.forwardDeclare('org.patternfly.layout.flex.Align$impl');
let AlignSelf = goog.forwardDeclare('org.patternfly.layout.flex.AlignSelf$impl');
let FlexShorthand = goog.forwardDeclare('org.patternfly.layout.flex.FlexShorthand$impl');
let Spacer = goog.forwardDeclare('org.patternfly.layout.flex.Spacer$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let BreakpointCollector = goog.forwardDeclare('org.patternfly.style.BreakpointCollector$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLElement, FlexItem>}
 */
class FlexItem extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FlexItem} */
 static m_flexItem__org_patternfly_layout_flex_FlexItem() {
  FlexItem.$clinit();
  return FlexItem.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {FlexItem} */
 static m_flexItem__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_flex_FlexItem(/** HTMLContainerBuilder<E> */ builder) {
  FlexItem.$clinit();
  return FlexItem.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!FlexItem} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  FlexItem.$clinit();
  let $instance = new FlexItem();
  $instance.$ctor__org_patternfly_layout_flex_FlexItem__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_layout_flex_FlexItem__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_flex__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {FlexItem} */
 m_align__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_FlexItem(/** Breakpoints<Align> */ align) {
  return /**@type {FlexItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([align.m_modifiers__java_lang_String()], j_l_String))), FlexItem));
 }
 /** @nodts @return {FlexItem} */
 m_alignSelf__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_FlexItem(/** Breakpoints<AlignSelf> */ alignSelf) {
  return /**@type {FlexItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([alignSelf.m_modifiers__java_lang_String()], j_l_String))), FlexItem));
 }
 /** @nodts @return {FlexItem} */
 m_flex__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_FlexItem(/** Breakpoints<FlexShorthand> */ flexShorthand) {
  return /**@type {FlexItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([flexShorthand.m_modifiers__java_lang_String()], j_l_String))), FlexItem));
 }
 /** @nodts @return {FlexItem} */
 m_fullWidth__org_patternfly_style_Breakpoint__arrayOf_org_patternfly_style_Breakpoint__org_patternfly_layout_flex_FlexItem(/** Breakpoint */ breakpoint, /** Array<Breakpoint> */ more) {
  let modifiers = /**@type {?string}*/ ($Casts.$to(/**@type {Stream<Tuple<Breakpoint, ?string>>}*/ (/**@type {EnumSet<Breakpoint>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(breakpoint, more)).m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((bp) =>{
   let bp_1 = /**@type {Breakpoint}*/ ($Casts.$to(bp, Breakpoint));
   return /**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(bp_1, 'full-width'));
  }))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Tuple<Breakpoint, ?string>, StringBuilder, ?string>}*/ (BreakpointCollector.m_modifiers__java_util_stream_Collector())), j_l_String));
  return /**@type {FlexItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([modifiers], j_l_String))), FlexItem));
 }
 /** @nodts @return {FlexItem} */
 m_grow__org_patternfly_style_Breakpoint__arrayOf_org_patternfly_style_Breakpoint__org_patternfly_layout_flex_FlexItem(/** Breakpoint */ breakpoint, /** Array<Breakpoint> */ more) {
  let modifiers = /**@type {?string}*/ ($Casts.$to(/**@type {Stream<Tuple<Breakpoint, ?string>>}*/ (/**@type {EnumSet<Breakpoint>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(breakpoint, more)).m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((bp) =>{
   let bp_1 = /**@type {Breakpoint}*/ ($Casts.$to(bp, Breakpoint));
   return /**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(bp_1, 'grow'));
  }))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Tuple<Breakpoint, ?string>, StringBuilder, ?string>}*/ (BreakpointCollector.m_modifiers__java_util_stream_Collector())), j_l_String));
  return /**@type {FlexItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([modifiers], j_l_String))), FlexItem));
 }
 /** @nodts @return {FlexItem} */
 m_order__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_FlexItem(/** Breakpoints<?string> */ order) {
  return /**@type {FlexItem}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_flex__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Variables.f_Order__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(this, order), FlexItem));
 }
 /** @nodts @return {FlexItem} */
 m_shrink__org_patternfly_style_Breakpoint__arrayOf_org_patternfly_style_Breakpoint__org_patternfly_layout_flex_FlexItem(/** Breakpoint */ breakpoint, /** Array<Breakpoint> */ more) {
  let modifiers = /**@type {?string}*/ ($Casts.$to(/**@type {Stream<Tuple<Breakpoint, ?string>>}*/ (/**@type {EnumSet<Breakpoint>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(breakpoint, more)).m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((bp) =>{
   let bp_1 = /**@type {Breakpoint}*/ ($Casts.$to(bp, Breakpoint));
   return /**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(bp_1, 'shrink'));
  }))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Tuple<Breakpoint, ?string>, StringBuilder, ?string>}*/ (BreakpointCollector.m_modifiers__java_util_stream_Collector())), j_l_String));
  return /**@type {FlexItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([modifiers], j_l_String))), FlexItem));
 }
 /** @nodts @return {FlexItem} */
 m_spacer__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_FlexItem(/** Breakpoints<Spacer> */ spacer) {
  return /**@type {FlexItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([spacer.m_modifiers__java_lang_String()], j_l_String))), FlexItem));
 }
 /** @nodts @return {FlexItem} */
 m_that__org_patternfly_layout_flex_FlexItem() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FlexItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_flex_FlexItem();
 }
 /** @nodts */
 static $clinit() {
  FlexItem.$clinit = () =>{};
  FlexItem.$loadModules();
  BaseLayout.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FlexItem;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  BreakpointCollector = goog.module.get('org.patternfly.style.BreakpointCollector$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(FlexItem, 'org.patternfly.layout.flex.FlexItem');

exports = FlexItem;

//# sourceMappingURL=FlexItem.js.map
