goog.module('org.patternfly.style.BreakpointCollector$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Collector = goog.require('java.util.stream.Collector$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BinaryOperator = goog.forwardDeclare('java.util.function.BinaryOperator$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Characteristics = goog.forwardDeclare('java.util.stream.Collector.Characteristics$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template V
 * @implements {Collector<Tuple<Breakpoint, V>, StringBuilder, ?string>}
 */
class BreakpointCollector extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_vertical__org_patternfly_style_BreakpointCollector_ = false;
  /**@type {j_u_function_Function<V, ?string>} @nodts*/
  this.f_stringValue__org_patternfly_style_BreakpointCollector_;
 }
 /** @nodts @template V_1 @return {Collector<Tuple<Breakpoint, V_1>, StringBuilder, ?string>} */
 static m_modifiers__java_util_stream_Collector() {
  BreakpointCollector.$clinit();
  return /**@type {!BreakpointCollector<V_1>}*/ (BreakpointCollector.$create__boolean__java_util_function_Function(false, j_u_function_Function.$adapt((/** V_1 */ arg0) =>{
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(arg0);
  })));
 }
 /** @nodts @template V_1 @return {Collector<Tuple<Breakpoint, V_1>, StringBuilder, ?string>} */
 static m_modifiers__java_util_function_Function__java_util_stream_Collector(/** j_u_function_Function<V_1, ?string> */ stringValue) {
  BreakpointCollector.$clinit();
  return /**@type {!BreakpointCollector<V_1>}*/ (BreakpointCollector.$create__boolean__java_util_function_Function(false, stringValue));
 }
 /** @nodts @template V_1 @return {Collector<Tuple<Breakpoint, V_1>, StringBuilder, ?string>} */
 static m_verticalModifiers__java_util_stream_Collector() {
  BreakpointCollector.$clinit();
  return /**@type {!BreakpointCollector<V_1>}*/ (BreakpointCollector.$create__boolean__java_util_function_Function(true, j_u_function_Function.$adapt((/** V_1 */ arg0) =>{
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(arg0);
  })));
 }
 /** @nodts @template V_1 @return {Collector<Tuple<Breakpoint, V_1>, StringBuilder, ?string>} */
 static m_verticalModifiers__java_util_function_Function__java_util_stream_Collector(/** j_u_function_Function<V_1, ?string> */ stringValue) {
  BreakpointCollector.$clinit();
  return /**@type {!BreakpointCollector<V_1>}*/ (BreakpointCollector.$create__boolean__java_util_function_Function(true, stringValue));
 }
 /** @nodts @template V @return {!BreakpointCollector<V>} */
 static $create__boolean__java_util_function_Function(/** boolean */ vertical, /** j_u_function_Function<V, ?string> */ stringValue) {
  let $instance = new BreakpointCollector();
  $instance.$ctor__org_patternfly_style_BreakpointCollector__boolean__java_util_function_Function__void(vertical, stringValue);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_BreakpointCollector__boolean__java_util_function_Function__void(/** boolean */ vertical, /** j_u_function_Function<V, ?string> */ stringValue) {
  this.$ctor__java_lang_Object__void();
  this.f_vertical__org_patternfly_style_BreakpointCollector_ = vertical;
  this.f_stringValue__org_patternfly_style_BreakpointCollector_ = stringValue;
 }
 /** @override @nodts @return {Supplier<StringBuilder>} */
 m_supplier__java_util_function_Supplier() {
  return Supplier.$adapt(() =>{
   return StringBuilder.$create__();
  });
 }
 /** @override @nodts @return {BiConsumer<StringBuilder, Tuple<Breakpoint, V>>} */
 m_accumulator__java_util_function_BiConsumer() {
  return BiConsumer.$adapt((builder, tuple) =>{
   let builder_1 = /**@type {StringBuilder}*/ ($Casts.$to(builder, StringBuilder));
   let tuple_1 = /**@type {Tuple}*/ ($Casts.$to(tuple, Tuple));
   let classname = StringBuilder.$create__java_lang_String(/**@type {?string}*/ ($Casts.$to(this.f_stringValue__org_patternfly_style_BreakpointCollector_.m_apply__java_lang_Object__java_lang_Object(tuple_1.f_value__org_patternfly_core_Tuple), j_l_String)));
   if (!$Equality.$same(tuple_1.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint)) {
    classname.m_append__java_lang_String__java_lang_StringBuilder('-on-').m_append__java_lang_String__java_lang_StringBuilder(/**@type {Breakpoint}*/ ($Casts.$to(tuple_1.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint);
    if (this.f_vertical__org_patternfly_style_BreakpointCollector_) {
     classname.m_append__java_lang_String__java_lang_StringBuilder('-height');
    }
   }
   if (builder_1.m_length__int() > 0) {
    builder_1.m_append__java_lang_String__java_lang_StringBuilder(' ');
   }
   builder_1.m_append__java_lang_String__java_lang_StringBuilder(Classes.m_modifier__java_lang_String__java_lang_String(classname.toString()));
  });
 }
 /** @override @nodts @return {BinaryOperator<StringBuilder>} */
 m_combiner__java_util_function_BinaryOperator() {
  return BinaryOperator.$adapt((r1, r2) =>{
   let r1_1 = /**@type {StringBuilder}*/ ($Casts.$to(r1, StringBuilder));
   let r2_1 = /**@type {StringBuilder}*/ ($Casts.$to(r2, StringBuilder));
   if (r1_1.m_length__int() > 0) {
    r1_1.m_append__java_lang_String__java_lang_StringBuilder(' ');
   }
   r1_1.m_append__java_lang_CharSequence__java_lang_StringBuilder(r2_1);
   return r1_1;
  });
 }
 /** @override @nodts @return {j_u_function_Function<StringBuilder, ?string>} */
 m_finisher__java_util_function_Function() {
  return j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {StringBuilder}*/ ($Casts.$to(arg0, StringBuilder));
   return arg0_1.toString();
  });
 }
 /** @override @nodts @return {Set<Characteristics>} */
 m_characteristics__java_util_Set() {
  return /**@type {EnumSet<Characteristics>}*/ (EnumSet.m_of__java_lang_Enum__java_util_EnumSet(Characteristics.f_UNORDERED__java_util_stream_Collector_Characteristics));
 }
 /** @nodts */
 static $clinit() {
  BreakpointCollector.$clinit = () =>{};
  BreakpointCollector.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BreakpointCollector;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  BinaryOperator = goog.module.get('java.util.function.BinaryOperator$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Characteristics = goog.module.get('java.util.stream.Collector.Characteristics$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Collector.$markImplementor(BreakpointCollector);
$Util.$setClassMetadata(BreakpointCollector, 'org.patternfly.style.BreakpointCollector');

exports = BreakpointCollector;

//# sourceMappingURL=BreakpointCollector.js.map
