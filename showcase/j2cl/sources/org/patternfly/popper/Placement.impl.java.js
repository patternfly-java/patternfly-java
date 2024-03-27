goog.module('org.patternfly.popper.Placement$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let IntFunction = goog.forwardDeclare('java.util.function.IntFunction$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Placement>}
 */
class Placement extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_popper_Placement;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_popper_Placement;
 }
 /** @nodts @return {Placement} */
 static m_fromValue__java_lang_String__org_patternfly_popper_Placement(/** ?string */ value) {
  Placement.$clinit();
  for (let $array = Placement.m_values__arrayOf_org_patternfly_popper_Placement(), $index = 0; $index < $array.length; $index++) {
   let placement = $array[$index];
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(placement.f_value__org_patternfly_popper_Placement, value)) {
     return placement;
    }
   }
  }
  return null;
 }
 /** @nodts @return {!Placement} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ modifier) {
  let $instance = new Placement();
  $instance.$ctor__org_patternfly_popper_Placement__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, value, modifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_popper_Placement__java_lang_String__int__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ modifier) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_popper_Placement = value;
  this.f_modifier__org_patternfly_popper_Placement = modifier;
 }
 /** @nodts @return {!Placement} */
 static m_valueOf__java_lang_String__org_patternfly_popper_Placement(/** string */ name) {
  Placement.$clinit();
  if ($Equality.$same(Placement.f_namesToValuesMap__org_patternfly_popper_Placement_, null)) {
   Placement.f_namesToValuesMap__org_patternfly_popper_Placement_ = /**@type {Map<?string, !Placement>}*/ ($Enums.createMapFromValues(Placement.m_values__arrayOf_org_patternfly_popper_Placement()));
  }
  return /**@type {Placement}*/ ($Enums.getValueFromNameAndMap(name, Placement.f_namesToValuesMap__org_patternfly_popper_Placement_));
 }
 /** @nodts @return {!Array<!Placement>} */
 static m_values__arrayOf_org_patternfly_popper_Placement() {
  Placement.$clinit();
  return /**@type {!Array<Placement>}*/ ($Arrays.$init([Placement.$static_auto__org_patternfly_popper_Placement, Placement.$static_top__org_patternfly_popper_Placement, Placement.$static_topStart__org_patternfly_popper_Placement, Placement.$static_topEnd__org_patternfly_popper_Placement, Placement.$static_bottom__org_patternfly_popper_Placement, Placement.$static_bottomStart__org_patternfly_popper_Placement, Placement.$static_bottomEnd__org_patternfly_popper_Placement, Placement.$static_left__org_patternfly_popper_Placement, Placement.$static_leftStart__org_patternfly_popper_Placement, Placement.$static_leftEnd__org_patternfly_popper_Placement, Placement.$static_right__org_patternfly_popper_Placement, Placement.$static_rightStart__org_patternfly_popper_Placement, Placement.$static_rightEnd__org_patternfly_popper_Placement], Placement));
 }
 /** @nodts @return {!Placement} */
 static get f_auto__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_auto__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_top__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_top__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_topStart__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_topStart__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_topEnd__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_topEnd__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_bottom__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_bottom__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_bottomStart__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_bottomStart__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_bottomEnd__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_bottomEnd__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_left__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_left__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_leftStart__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_leftStart__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_leftEnd__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_leftEnd__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_right__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_right__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_rightStart__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_rightStart__org_patternfly_popper_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_rightEnd__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_rightEnd__org_patternfly_popper_Placement);
 }
 /** @nodts @return {Array<?string>} */
 static get f_modifiers__org_patternfly_popper_Placement() {
  return (Placement.$clinit(), Placement.$static_modifiers__org_patternfly_popper_Placement);
 }
 /** @nodts */
 static $clinit() {
  Placement.$clinit = () =>{};
  Placement.$loadModules();
  Enum.$clinit();
  Placement.$static_auto__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('auto'), Placement.$ordinal_auto__org_patternfly_popper_Placement, 'auto', '');
  Placement.$static_top__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('top'), Placement.$ordinal_top__org_patternfly_popper_Placement, 'top', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_style_Classes));
  Placement.$static_topStart__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('topStart'), Placement.$ordinal_topStart__org_patternfly_popper_Placement, 'top-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_style_Classes)) + '-left');
  Placement.$static_topEnd__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('topEnd'), Placement.$ordinal_topEnd__org_patternfly_popper_Placement, 'top-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_style_Classes)) + '-right');
  Placement.$static_bottom__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('bottom'), Placement.$ordinal_bottom__org_patternfly_popper_Placement, 'bottom', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_style_Classes));
  Placement.$static_bottomStart__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('bottomStart'), Placement.$ordinal_bottomStart__org_patternfly_popper_Placement, 'bottom-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_style_Classes)) + '-left');
  Placement.$static_bottomEnd__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('bottomEnd'), Placement.$ordinal_bottomEnd__org_patternfly_popper_Placement, 'bottom-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_style_Classes)) + '-right');
  Placement.$static_left__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('left'), Placement.$ordinal_left__org_patternfly_popper_Placement, 'left', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_style_Classes));
  Placement.$static_leftStart__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('leftStart'), Placement.$ordinal_leftStart__org_patternfly_popper_Placement, 'left-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_style_Classes)) + '-top');
  Placement.$static_leftEnd__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('leftEnd'), Placement.$ordinal_leftEnd__org_patternfly_popper_Placement, 'left-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_style_Classes)) + '-bottom');
  Placement.$static_right__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('right'), Placement.$ordinal_right__org_patternfly_popper_Placement, 'right', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_style_Classes));
  Placement.$static_rightStart__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('rightStart'), Placement.$ordinal_rightStart__org_patternfly_popper_Placement, 'right-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_style_Classes)) + '-bottom');
  Placement.$static_rightEnd__org_patternfly_popper_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('rightEnd'), Placement.$ordinal_rightEnd__org_patternfly_popper_Placement, 'right-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_style_Classes)) + '-bottom');
  Placement.$static_modifiers__org_patternfly_popper_Placement = /**@type {Array<?string>}*/ ($Arrays.$castTo(/**@type {Stream<?string>}*/ (/**@type {Stream<Placement>}*/ (Arrays.m_stream__arrayOf_java_lang_Object__java_util_stream_Stream(Placement.m_values__arrayOf_org_patternfly_popper_Placement())).m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt((p) =>{
   let p_1 = /**@type {Placement}*/ ($Casts.$to(p, Placement));
   return !$Equality.$same(p_1, Placement.$static_auto__org_patternfly_popper_Placement);
  })).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((p_2) =>{
   let p_3 = /**@type {Placement}*/ ($Casts.$to(p_2, Placement));
   return p_3.f_modifier__org_patternfly_popper_Placement;
  }))).m_toArray__java_util_function_IntFunction__arrayOf_java_lang_Object(IntFunction.$adapt((/** number */ arg0) =>{
   return /**@type {!Array<?string>}*/ ($Arrays.$create([arg0], j_l_String));
  })), j_l_String, 1));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Placement;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  IntFunction = goog.module.get('java.util.function.IntFunction$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Placement.$ordinal_auto__org_patternfly_popper_Placement = 0;
/**@const {number} @nodts*/
Placement.$ordinal_top__org_patternfly_popper_Placement = 1;
/**@const {number} @nodts*/
Placement.$ordinal_topStart__org_patternfly_popper_Placement = 2;
/**@const {number} @nodts*/
Placement.$ordinal_topEnd__org_patternfly_popper_Placement = 3;
/**@const {number} @nodts*/
Placement.$ordinal_bottom__org_patternfly_popper_Placement = 4;
/**@const {number} @nodts*/
Placement.$ordinal_bottomStart__org_patternfly_popper_Placement = 5;
/**@const {number} @nodts*/
Placement.$ordinal_bottomEnd__org_patternfly_popper_Placement = 6;
/**@const {number} @nodts*/
Placement.$ordinal_left__org_patternfly_popper_Placement = 7;
/**@const {number} @nodts*/
Placement.$ordinal_leftStart__org_patternfly_popper_Placement = 8;
/**@const {number} @nodts*/
Placement.$ordinal_leftEnd__org_patternfly_popper_Placement = 9;
/**@const {number} @nodts*/
Placement.$ordinal_right__org_patternfly_popper_Placement = 10;
/**@const {number} @nodts*/
Placement.$ordinal_rightStart__org_patternfly_popper_Placement = 11;
/**@const {number} @nodts*/
Placement.$ordinal_rightEnd__org_patternfly_popper_Placement = 12;
/**@private {!Placement} @nodts*/
Placement.$static_auto__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_top__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_topStart__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_topEnd__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_bottom__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_bottomStart__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_bottomEnd__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_left__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_leftStart__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_leftEnd__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_right__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_rightStart__org_patternfly_popper_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_rightEnd__org_patternfly_popper_Placement;
/**@private {Array<?string>} @nodts*/
Placement.$static_modifiers__org_patternfly_popper_Placement;
/**@type {Map<?string, !Placement>} @nodts*/
Placement.f_namesToValuesMap__org_patternfly_popper_Placement_;
$Util.$setClassMetadataForEnum(Placement, 'org.patternfly.popper.Placement');

exports = Placement;

//# sourceMappingURL=Placement.js.map
