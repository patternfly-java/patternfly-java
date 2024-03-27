goog.module('org.patternfly.layout.grid.Grid$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');
const Gutter = goog.require('org.patternfly.style.Modifiers.Gutter$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let GridItem = goog.forwardDeclare('org.patternfly.layout.grid.GridItem$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let BreakpointCollector = goog.forwardDeclare('org.patternfly.style.BreakpointCollector$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLElement, Grid>}
 * @implements {Gutter<HTMLElement, Grid>}
 */
class Grid extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Grid} */
 static m_grid__org_patternfly_layout_grid_Grid() {
  Grid.$clinit();
  return Grid.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {Grid} */
 static m_grid__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_grid_Grid(/** HTMLContainerBuilder<E> */ builder) {
  Grid.$clinit();
  return Grid.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!Grid} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Grid.$clinit();
  let $instance = new Grid();
  $instance.$ctor__org_patternfly_layout_grid_Grid__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_layout_grid_Grid__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_grid__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @template T @return {Grid} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_layout_grid_Grid(/** Iterable<T> */ items, /** j_u_function_Function<T, GridItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let gridItem = /**@type {GridItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), GridItem));
    this.m_addItem__org_patternfly_layout_grid_GridItem__org_patternfly_layout_grid_Grid(gridItem);
   }
  }
  return this;
 }
 /** @nodts @return {Grid} */
 m_addItem__org_patternfly_layout_grid_GridItem__org_patternfly_layout_grid_Grid(/** GridItem */ item) {
  return /**@type {Grid}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Grid));
 }
 /** @nodts @return {Grid} */
 m_columns__org_patternfly_style_Breakpoints__org_patternfly_layout_grid_Grid(/** Breakpoints<Integer> */ columns) {
  let modifiers = /**@type {?string}*/ ($Casts.$to(columns.m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt((bp) =>{
   let bp_1 = /**@type {Tuple}*/ ($Casts.$to(bp, Tuple));
   return Validation.m_verifyRange__java_lang_String__elemental2_dom_Element__java_lang_String__int__int__int__boolean('PF5/Grid', this.m_element__elemental2_dom_HTMLElement(), 'columns', /**@type {Integer}*/ ($Casts.$to(bp_1.f_value__org_patternfly_core_Tuple, Integer)).m_intValue__int(), 1, 12);
  })).m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt((bp_2) =>{
   let bp_3 = /**@type {Tuple}*/ ($Casts.$to(bp_2, Tuple));
   return !$Equality.$same(bp_3.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint);
  })).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Tuple<Breakpoint, Integer>, StringBuilder, ?string>}*/ (BreakpointCollector.m_modifiers__java_util_function_Function__java_util_stream_Collector(j_u_function_Function.$adapt((col) =>{
   let col_1 = /**@type {Integer}*/ ($Casts.$to(col, Integer));
   return 'all-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(col_1) + '-col';
  })))), j_l_String));
  return /**@type {Grid}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([modifiers], j_l_String))), Grid));
 }
 /** @nodts @return {Grid} */
 m_order__org_patternfly_style_Breakpoints__org_patternfly_layout_grid_Grid(/** Breakpoints<?string> */ order) {
  return /**@type {Grid}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_grid__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Variables.f_Order__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(this, order), Grid));
 }
 /** @nodts @return {Grid} */
 m_span__int__org_patternfly_layout_grid_Grid(/** number */ rows) {
  if (Validation.m_verifyRange__java_lang_String__elemental2_dom_Element__java_lang_String__int__int__int__boolean('PF5/Grid', this.m_element__elemental2_dom_HTMLElement(), 'span', rows, 1, 12)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('all-' + rows + '-col')], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Grid} */
 m_that__org_patternfly_layout_grid_Grid() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Grid} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_grid_Grid();
 }
 //Bridge method.
 /** @final @override @nodts @return {Grid} */
 m_gutter__org_jboss_elemento_TypedBuilder() {
  return /**@type {Grid}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Grid));
 }
 //Bridge method.
 /** @final @override @nodts @return {Grid} */
 m_gutter__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Grid}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Grid));
 }
 //Default method forwarding stub.
 /** @nodts @return {Grid} */
 m_gutter__org_patternfly_layout_grid_Grid() {
  return /**@type {Grid}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Grid));
 }
 //Default method forwarding stub.
 /** @nodts @return {Grid} */
 m_gutter__boolean__org_patternfly_layout_grid_Grid(/** boolean */ arg0) {
  return /**@type {Grid}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Grid));
 }
 /** @nodts */
 static $clinit() {
  Grid.$clinit = () =>{};
  Grid.$loadModules();
  BaseLayout.$clinit();
  Gutter.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Grid;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  GridItem = goog.module.get('org.patternfly.layout.grid.GridItem$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  BreakpointCollector = goog.module.get('org.patternfly.style.BreakpointCollector$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Gutter.$markImplementor(Grid);
$Util.$setClassMetadata(Grid, 'org.patternfly.layout.grid.Grid');

exports = Grid;

//# sourceMappingURL=Grid.js.map
