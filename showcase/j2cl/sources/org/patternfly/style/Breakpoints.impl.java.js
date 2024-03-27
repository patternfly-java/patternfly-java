goog.module('org.patternfly.style.Breakpoints$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Tuples = goog.require('org.patternfly.core.Tuples$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let BreakpointCollector = goog.forwardDeclare('org.patternfly.style.BreakpointCollector$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template V
 * @extends {Tuples<Breakpoint, V>}
 */
class Breakpoints extends Tuples {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template V_1 @return {Breakpoints<V_1>} */
 static m_breakpoints__org_patternfly_style_Breakpoints() {
  Breakpoints.$clinit();
  return /**@type {!Breakpoints<V_1>}*/ (Breakpoints.$create__java_lang_Iterable(/**@type {List<Tuple<Breakpoint, V_1>>}*/ (Collections.m_emptyList__java_util_List())));
 }
 /** @nodts @template V_1 @return {Breakpoints<V_1>} */
 static m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(/** Breakpoint */ breakpoint, /** V_1 */ value) {
  Breakpoints.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<Breakpoint, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint, value)));
  return /**@type {!Breakpoints<V_1>}*/ (Breakpoints.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template V_1 @return {Breakpoints<V_1>} */
 static m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(/** Breakpoint */ breakpoint1, /** V_1 */ value1, /** Breakpoint */ breakpoint2, /** V_1 */ value2) {
  Breakpoints.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<Breakpoint, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint1, value1)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint2, value2)));
  return /**@type {!Breakpoints<V_1>}*/ (Breakpoints.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template V_1 @return {Breakpoints<V_1>} */
 static m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(/** Breakpoint */ breakpoint1, /** V_1 */ value1, /** Breakpoint */ breakpoint2, /** V_1 */ value2, /** Breakpoint */ breakpoint3, /** V_1 */ value3) {
  Breakpoints.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<Breakpoint, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint1, value1)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint2, value2)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint3, value3)));
  return /**@type {!Breakpoints<V_1>}*/ (Breakpoints.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template V_1 @return {Breakpoints<V_1>} */
 static m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(/** Breakpoint */ breakpoint1, /** V_1 */ value1, /** Breakpoint */ breakpoint2, /** V_1 */ value2, /** Breakpoint */ breakpoint3, /** V_1 */ value3, /** Breakpoint */ breakpoint4, /** V_1 */ value4) {
  Breakpoints.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<Breakpoint, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint1, value1)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint2, value2)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint3, value3)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint4, value4)));
  return /**@type {!Breakpoints<V_1>}*/ (Breakpoints.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template V_1 @return {Breakpoints<V_1>} */
 static m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(/** Breakpoint */ breakpoint1, /** V_1 */ value1, /** Breakpoint */ breakpoint2, /** V_1 */ value2, /** Breakpoint */ breakpoint3, /** V_1 */ value3, /** Breakpoint */ breakpoint4, /** V_1 */ value4, /** Breakpoint */ breakpoint5, /** V_1 */ value5) {
  Breakpoints.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<Breakpoint, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint1, value1)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint2, value2)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint3, value3)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint4, value4)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint5, value5)));
  return /**@type {!Breakpoints<V_1>}*/ (Breakpoints.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template V_1 @return {Breakpoints<V_1>} */
 static m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(/** Breakpoint */ breakpoint1, /** V_1 */ value1, /** Breakpoint */ breakpoint2, /** V_1 */ value2, /** Breakpoint */ breakpoint3, /** V_1 */ value3, /** Breakpoint */ breakpoint4, /** V_1 */ value4, /** Breakpoint */ breakpoint5, /** V_1 */ value5, /** Breakpoint */ breakpoint6, /** V_1 */ value6) {
  Breakpoints.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<Breakpoint, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint1, value1)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint2, value2)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint3, value3)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint4, value4)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint5, value5)));
  tuples.add(/**@type {Tuple<Breakpoint, V_1>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(breakpoint6, value6)));
  return /**@type {!Breakpoints<V_1>}*/ (Breakpoints.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template V_1 @return {Breakpoints<V_1>} */
 static m_breakpoints__java_lang_Iterable__org_patternfly_style_Breakpoints(/** Iterable<Tuple<Breakpoint, V_1>> */ breakpoints) {
  Breakpoints.$clinit();
  return /**@type {!Breakpoints<V_1>}*/ (Breakpoints.$create__java_lang_Iterable(breakpoints));
 }
 /** @nodts @template V @return {!Breakpoints<V>} */
 static $create__java_lang_Iterable(/** Iterable<Tuple<Breakpoint, V>> */ breakpoints) {
  let $instance = new Breakpoints();
  $instance.$ctor__org_patternfly_style_Breakpoints__java_lang_Iterable__void(breakpoints);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Breakpoints__java_lang_Iterable__void(/** Iterable<Tuple<Breakpoint, V>> */ breakpoints) {
  this.$ctor__org_patternfly_core_Tuples__java_lang_Iterable__void(breakpoints);
 }
 /** @nodts @return {Breakpoints<V>} */
 m_default___java_lang_Object__org_patternfly_style_Breakpoints(/** V */ value) {
  this.m_add__java_lang_Object__java_lang_Object__void(Breakpoint.f_default___org_patternfly_style_Breakpoint, value);
  return this;
 }
 /** @nodts @return {Breakpoints<V>} */
 m_sm__java_lang_Object__org_patternfly_style_Breakpoints(/** V */ value) {
  this.m_add__java_lang_Object__java_lang_Object__void(Breakpoint.f_sm__org_patternfly_style_Breakpoint, value);
  return this;
 }
 /** @nodts @return {Breakpoints<V>} */
 m_md__java_lang_Object__org_patternfly_style_Breakpoints(/** V */ value) {
  this.m_add__java_lang_Object__java_lang_Object__void(Breakpoint.f_md__org_patternfly_style_Breakpoint, value);
  return this;
 }
 /** @nodts @return {Breakpoints<V>} */
 m_lg__java_lang_Object__org_patternfly_style_Breakpoints(/** V */ value) {
  this.m_add__java_lang_Object__java_lang_Object__void(Breakpoint.f_lg__org_patternfly_style_Breakpoint, value);
  return this;
 }
 /** @nodts @return {Breakpoints<V>} */
 m_xl__java_lang_Object__org_patternfly_style_Breakpoints(/** V */ value) {
  this.m_add__java_lang_Object__java_lang_Object__void(Breakpoint.f_xl__org_patternfly_style_Breakpoint, value);
  return this;
 }
 /** @nodts @return {Breakpoints<V>} */
 m__2xl__java_lang_Object__org_patternfly_style_Breakpoints(/** V */ value) {
  this.m_add__java_lang_Object__java_lang_Object__void(Breakpoint.f__2xl__org_patternfly_style_Breakpoint, value);
  return this;
 }
 /** @nodts @return {?string} */
 m_modifiers__java_lang_String() {
  if (this.m_typedModifier__boolean_$pp_org_patternfly_style()) {
   return this.m_modifiers__java_util_function_Function__java_lang_String(j_u_function_Function.$adapt((/** V */ v) =>{
    return /**@type {!TypedModifier}*/ ($Casts.$to(v, TypedModifier)).m_value__java_lang_String();
   }));
  } else {
   return this.m_modifiers__java_util_function_Function__java_lang_String(j_u_function_Function.$adapt((/** V */ arg0) =>{
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(arg0);
   }));
  }
 }
 /** @nodts @return {?string} */
 m_modifiers__java_util_function_Function__java_lang_String(/** j_u_function_Function<V, ?string> */ stringValue) {
  return /**@type {?string}*/ ($Casts.$to(this.m_stream__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Tuple<Breakpoint, V>, StringBuilder, ?string>}*/ (BreakpointCollector.m_modifiers__java_util_function_Function__java_util_stream_Collector(stringValue))), j_l_String));
 }
 /** @nodts @return {?string} */
 m_modifiers__org_patternfly_style_Breakpoint__java_lang_String(/** Breakpoint */ breakpoint) {
  if (this.m_typedModifier__boolean_$pp_org_patternfly_style()) {
   return this.m_modifiers__org_patternfly_style_Breakpoint__java_util_function_Function__java_lang_String(breakpoint, j_u_function_Function.$adapt((/** V */ v) =>{
    return /**@type {!TypedModifier}*/ ($Casts.$to(v, TypedModifier)).m_value__java_lang_String();
   }));
  } else {
   return this.m_modifiers__org_patternfly_style_Breakpoint__java_util_function_Function__java_lang_String(breakpoint, j_u_function_Function.$adapt((/** V */ arg0) =>{
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(arg0);
   }));
  }
 }
 /** @nodts @return {?string} */
 m_modifiers__org_patternfly_style_Breakpoint__java_util_function_Function__java_lang_String(/** Breakpoint */ breakpoint, /** j_u_function_Function<V, ?string> */ stringValue) {
  let modifier = '';
  if (this.m_hasKey__java_lang_Object__boolean(breakpoint)) {
   modifier = Classes.m_modifier__java_lang_String__java_lang_String(/**@type {?string}*/ ($Casts.$to(stringValue.m_apply__java_lang_Object__java_lang_Object(this.m_value__java_lang_Object__java_lang_Object(breakpoint)), j_l_String)));
  } else {
   let index = Breakpoints.f_LARGE_TO_SMALL__org_patternfly_style_Breakpoints_.indexOf(breakpoint);
   for (let i = index; i < Breakpoints.f_LARGE_TO_SMALL__org_patternfly_style_Breakpoints_.size(); i = i + 1 | 0) {
    let bp = /**@type {Breakpoint}*/ ($Casts.$to(Breakpoints.f_LARGE_TO_SMALL__org_patternfly_style_Breakpoints_.getAtIndex(i), Breakpoint));
    if (this.m_hasKey__java_lang_Object__boolean(bp)) {
     modifier = Classes.m_modifier__java_lang_String__java_lang_String(/**@type {?string}*/ ($Casts.$to(stringValue.m_apply__java_lang_Object__java_lang_Object(this.m_value__java_lang_Object__java_lang_Object(bp)), j_l_String)));
    }
   }
  }
  return modifier;
 }
 /** @nodts @return {?string} */
 m_verticalModifiers__java_lang_String() {
  if (this.m_typedModifier__boolean_$pp_org_patternfly_style()) {
   return this.m_verticalModifiers__java_util_function_Function__java_lang_String(j_u_function_Function.$adapt((/** V */ v) =>{
    return /**@type {!TypedModifier}*/ ($Casts.$to(v, TypedModifier)).m_value__java_lang_String();
   }));
  } else {
   return this.m_verticalModifiers__java_util_function_Function__java_lang_String(j_u_function_Function.$adapt((/** V */ arg0) =>{
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(arg0);
   }));
  }
 }
 /** @nodts @return {?string} */
 m_verticalModifiers__java_util_function_Function__java_lang_String(/** j_u_function_Function<V, ?string> */ stringValue) {
  return /**@type {?string}*/ ($Casts.$to(this.m_stream__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Tuple<Breakpoint, V>, StringBuilder, ?string>}*/ (BreakpointCollector.m_verticalModifiers__java_util_function_Function__java_util_stream_Collector(stringValue))), j_l_String));
 }
 /** @nodts @return {boolean} */
 m_typedModifier__boolean_$pp_org_patternfly_style() {
  return !this.m_isEmpty__boolean() && TypedModifier.$isInstance(/**@type {Tuple<Breakpoint, V>}*/ ($Casts.$to(this.m_iterator__java_util_Iterator().m_next__java_lang_Object(), Tuple)).f_value__org_patternfly_core_Tuple);
 }
 /** @nodts */
 static $clinit() {
  Breakpoints.$clinit = () =>{};
  Breakpoints.$loadModules();
  Tuples.$clinit();
  Breakpoints.f_LARGE_TO_SMALL__org_patternfly_style_Breakpoints_ = /**@type {List<Breakpoint>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<Breakpoint>}*/ ($Arrays.$init([Breakpoint.f__2xl__org_patternfly_style_Breakpoint, Breakpoint.f_xl__org_patternfly_style_Breakpoint, Breakpoint.f_lg__org_patternfly_style_Breakpoint, Breakpoint.f_md__org_patternfly_style_Breakpoint, Breakpoint.f_sm__org_patternfly_style_Breakpoint, Breakpoint.f_default___org_patternfly_style_Breakpoint], Breakpoint))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Breakpoints;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  BreakpointCollector = goog.module.get('org.patternfly.style.BreakpointCollector$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {List<Breakpoint>} @nodts*/
Breakpoints.f_LARGE_TO_SMALL__org_patternfly_style_Breakpoints_;
$Util.$setClassMetadata(Breakpoints, 'org.patternfly.style.Breakpoints');

exports = Breakpoints;

//# sourceMappingURL=Breakpoints.js.map
