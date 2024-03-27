goog.module('org.patternfly.style.Variable$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasHTMLElement = goog.forwardDeclare('org.jboss.elemento.HasHTMLElement$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let HasSVGElement = goog.forwardDeclare('org.jboss.elemento.svg.HasSVGElement$impl');
let SVGElement_$Overlay = goog.forwardDeclare('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Version = goog.forwardDeclare('org.patternfly.core.Version$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let VariableScope = goog.forwardDeclare('org.patternfly.style.VariableScope$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Variable extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {VariableScope} @nodts*/
  this.f_scope__org_patternfly_style_Variable;
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_style_Variable;
  /**@type {boolean} @nodts*/
  this.f_valid__org_patternfly_style_Variable_ = false;
 }
 /** @nodts @return {Variable} */
 static m_globalVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(/** ?string */ firstElement, /** Array<?string> */ otherElements) {
  Variable.$clinit();
  let builder = StringBuilder.$create__();
  if (!$Equality.$same(firstElement, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(firstElement)) {
   builder.m_append__java_lang_String__java_lang_StringBuilder('--pf-').m_append__java_lang_String__java_lang_StringBuilder(Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version).m_append__java_lang_String__java_lang_StringBuilder('-global--').m_append__java_lang_String__java_lang_StringBuilder(firstElement);
   if (!$Equality.$same(otherElements, null) && otherElements.length != 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder('--');
    for (let i = 0; i < otherElements.length; i = i + 1 | 0) {
     builder.m_append__java_lang_String__java_lang_StringBuilder(otherElements[i]);
     if (i < (otherElements.length - 1 | 0)) {
      builder.m_append__java_lang_String__java_lang_StringBuilder('--');
     }
    }
   }
  }
  return Variable.$create__org_patternfly_style_VariableScope__java_lang_String(VariableScope.f_global__org_patternfly_style_VariableScope, builder.toString());
 }
 /** @nodts @return {Variable} */
 static m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(/** ?string */ component, /** Array<?string> */ elements) {
  Variable.$clinit();
  let builder = StringBuilder.$create__();
  if (!$Equality.$same(component, null) && j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(component, 'pf-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version) + '-')) {
   builder.m_append__java_lang_String__java_lang_StringBuilder('--').m_append__java_lang_String__java_lang_StringBuilder(component);
   if (!$Equality.$same(elements, null) && elements.length != 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder('--');
    for (let i = 0; i < elements.length; i = i + 1 | 0) {
     builder.m_append__java_lang_String__java_lang_StringBuilder(elements[i]);
     if (i < (elements.length - 1 | 0)) {
      builder.m_append__java_lang_String__java_lang_StringBuilder('--');
     }
    }
   }
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void('PF5/Variable', null, 'Component \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(component) + '\" in Variable.componentVar(String) does not start with ' + '\"pf-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version) + '-\".\n' + 'Please use Classes.component(String) to build the component.');
  }
  return Variable.$create__org_patternfly_style_VariableScope__java_lang_String(VariableScope.f_component__org_patternfly_style_VariableScope, builder.toString());
 }
 /** @nodts @return {!Variable} */
 static $create__org_patternfly_style_VariableScope__java_lang_String(/** VariableScope */ scope, /** ?string */ name) {
  Variable.$clinit();
  let $instance = new Variable();
  $instance.$ctor__org_patternfly_style_Variable__org_patternfly_style_VariableScope__java_lang_String__void(scope, name);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Variable__org_patternfly_style_VariableScope__java_lang_String__void(/** VariableScope */ scope, /** ?string */ name) {
  this.$ctor__java_lang_Object__void();
  this.f_scope__org_patternfly_style_Variable = scope;
  this.f_name__org_patternfly_style_Variable = name;
  this.f_valid__org_patternfly_style_Variable_ = !j_l_String.m_isEmpty__java_lang_String__boolean(name);
 }
 /** @nodts @template E, B @return {B} */
 m_applyTo__org_jboss_elemento_HasHTMLElement__int__org_jboss_elemento_TypedBuilder(/** HasHTMLElement<E, B> */ element, /** number */ value) {
  if (this.f_valid__org_patternfly_style_Variable_) {
   element.m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(this.f_name__org_patternfly_style_Variable, value);
  }
  return element.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** HasHTMLElement<E, B> */ element, /** ?string */ value) {
  if (this.f_valid__org_patternfly_style_Variable_) {
   element.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_name__org_patternfly_style_Variable, value);
  }
  return element.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B, V @return {B} */
 m_applyTo__org_jboss_elemento_HasHTMLElement__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(/** HasHTMLElement<E, B> */ element, /** Breakpoints<V> */ breakpoints) {
  if (breakpoints.m_typedModifier__boolean_$pp_org_patternfly_style()) {
   return this.m_applyTo__org_jboss_elemento_HasHTMLElement__org_patternfly_style_Breakpoints__java_util_function_Function__org_jboss_elemento_TypedBuilder(element, breakpoints, j_u_function_Function.$adapt((/** V */ v) =>{
    return /**@type {!TypedModifier}*/ ($Casts.$to(v, TypedModifier)).m_value__java_lang_String();
   }));
  } else {
   return this.m_applyTo__org_jboss_elemento_HasHTMLElement__org_patternfly_style_Breakpoints__java_util_function_Function__org_jboss_elemento_TypedBuilder(element, breakpoints, j_u_function_Function.$adapt((/** V */ arg0) =>{
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(arg0);
   }));
  }
 }
 /** @nodts @template E, B, V @return {B} */
 m_applyTo__org_jboss_elemento_HasHTMLElement__org_patternfly_style_Breakpoints__java_util_function_Function__org_jboss_elemento_TypedBuilder(/** HasHTMLElement<E, B> */ element, /** Breakpoints<V> */ breakpoints, /** j_u_function_Function<V, ?string> */ stringValue) {
  if (this.f_valid__org_patternfly_style_Variable_ && !$Equality.$same(breakpoints, null) && !breakpoints.m_isEmpty__boolean()) {
   for (let $iterator = breakpoints.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let breakpoint = /**@type {Tuple<Breakpoint, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     let property = $Equality.$same(breakpoint.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint) ? this.f_name__org_patternfly_style_Variable : j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_name__org_patternfly_style_Variable) + '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {Breakpoint}*/ ($Casts.$to(breakpoint.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint);
     let value = /**@type {?string}*/ ($Casts.$to(stringValue.m_apply__java_lang_Object__java_lang_Object(breakpoint.f_value__org_patternfly_core_Tuple), j_l_String));
     element.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(property, value);
    }
   }
  }
  return element.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 m_applyTo__org_jboss_elemento_svg_HasSVGElement__int__org_jboss_elemento_TypedBuilder(/** HasSVGElement<E, B> */ element, /** number */ value) {
  if (this.f_valid__org_patternfly_style_Variable_) {
   /**@type {!SVGElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), SVGElement_$Overlay)).style.setProperty(this.f_name__org_patternfly_style_Variable, j_l_String.m_valueOf__int__java_lang_String(value));
  }
  return element.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 m_applyTo__org_jboss_elemento_svg_HasSVGElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** HasSVGElement<E, B> */ element, /** ?string */ value) {
  if (this.f_valid__org_patternfly_style_Variable_) {
   /**@type {!SVGElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), SVGElement_$Overlay)).style.setProperty(this.f_name__org_patternfly_style_Variable, value);
  }
  return element.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 m_applyTo__elemental2_dom_HTMLElement__int__void(/** HTMLElement */ element, /** number */ value) {
  if (this.f_valid__org_patternfly_style_Variable_) {
   this.m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(element, j_l_String.m_valueOf__int__java_lang_String(value));
  }
 }
 /** @nodts */
 m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(/** HTMLElement */ element, /** ?string */ value) {
  if (this.f_valid__org_patternfly_style_Variable_) {
   element.style.setProperty(this.f_name__org_patternfly_style_Variable, value);
  }
 }
 /** @nodts @template V */
 m_applyTo__elemental2_dom_HTMLElement__org_patternfly_style_Breakpoints__void(/** HTMLElement */ element, /** Breakpoints<V> */ breakpoints) {
  if (breakpoints.m_typedModifier__boolean_$pp_org_patternfly_style()) {
   this.m_applyTo__elemental2_dom_HTMLElement__org_patternfly_style_Breakpoints__java_util_function_Function__void(element, breakpoints, j_u_function_Function.$adapt((/** V */ v) =>{
    return /**@type {!TypedModifier}*/ ($Casts.$to(v, TypedModifier)).m_value__java_lang_String();
   }));
  } else {
   this.m_applyTo__elemental2_dom_HTMLElement__org_patternfly_style_Breakpoints__java_util_function_Function__void(element, breakpoints, j_u_function_Function.$adapt((/** V */ arg0) =>{
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(arg0);
   }));
  }
 }
 /** @nodts @template V */
 m_applyTo__elemental2_dom_HTMLElement__org_patternfly_style_Breakpoints__java_util_function_Function__void(/** HTMLElement */ element, /** Breakpoints<V> */ breakpoints, /** j_u_function_Function<V, ?string> */ stringValue) {
  if (this.f_valid__org_patternfly_style_Variable_ && !$Equality.$same(breakpoints, null) && !breakpoints.m_isEmpty__boolean()) {
   for (let $iterator = breakpoints.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let breakpoint = /**@type {Tuple<Breakpoint, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     let property = $Equality.$same(breakpoint.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint) ? this.f_name__org_patternfly_style_Variable : j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_name__org_patternfly_style_Variable) + '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {Breakpoint}*/ ($Casts.$to(breakpoint.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint);
     let value = /**@type {?string}*/ ($Casts.$to(stringValue.m_apply__java_lang_Object__java_lang_Object(breakpoint.f_value__org_patternfly_core_Tuple), j_l_String));
     element.style.setProperty(property, value);
    }
   }
  }
 }
 /** @nodts */
 static $clinit() {
  Variable.$clinit = () =>{};
  Variable.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Variable;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SVGElement_$Overlay = goog.module.get('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Version = goog.module.get('org.patternfly.core.Version$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  VariableScope = goog.module.get('org.patternfly.style.VariableScope$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Variable, 'org.patternfly.style.Variable');

exports = Variable;

//# sourceMappingURL=Variable.js.map
