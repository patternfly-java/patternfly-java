goog.module('org.patternfly.popper.Modifiers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MinWidthUnionType.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ModifierPhase = goog.forwardDeclare('org.patternfly.popper.ModifierPhase$impl');
let Placement = goog.forwardDeclare('org.patternfly.popper.Placement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @interface
 */
class Modifiers {
 /** @nodts @return {Object} */
 static m_widths__org_patternfly_popper_Modifier() {
  Modifiers.$clinit();
  let modifier = new Object();
  modifier.name = 'widths';
  modifier.enabled = true;
  modifier.phase = ModifierPhase.f_beforeWrite__org_patternfly_popper_ModifierPhase.name();
  modifier.requires = /**@type {!Array<?string>}*/ ($Arrays.$init(['computeStyles'], j_l_String));
  modifier.fn = (/** Object */ args) =>{
   let triggerWidth = args.state.rects.reference.width;
   args.state.styles.popper.minWidth = $Overlay.m_of__java_lang_Object__elemental2_dom_CSSProperties_MinWidthUnionType(triggerWidth + 'px');
  };
  return modifier;
 }
 /** @nodts @return {Object} */
 static m_placement__org_patternfly_popper_Modifier() {
  Modifiers.$clinit();
  let modifier = new Object();
  modifier.name = 'placement';
  modifier.enabled = true;
  modifier.phase = ModifierPhase.f_main__org_patternfly_popper_ModifierPhase.name();
  modifier.fn = (/** Object */ args) =>{
   if (!$Equality.$same(args.state, null) && !$Equality.$same(args.state.elements, null)) {
    let placement = Placement.m_fromValue__java_lang_String__org_patternfly_popper_Placement(args.state.placement);
    let popper = args.state.elements.popper;
    if (!$Equality.$same(placement, null) && !$Equality.$same(popper, null)) {
     popper.classList.remove(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(Placement.f_modifiers__org_patternfly_popper_Placement));
     popper.classList.add(placement.f_modifier__org_patternfly_popper_Placement);
    }
   }
  };
  return modifier;
 }
 /** @nodts @return {Object} */
 static m_offset__int__org_patternfly_popper_Modifier(/** number */ offset) {
  Modifiers.$clinit();
  let modifier = new Object();
  modifier.name = 'offset';
  modifier.options = new Object();
  modifier.options.offset = /**@type {!Array<number>}*/ ($Arrays.$init([0, offset], $$int));
  return modifier;
 }
 /** @nodts @return {Object} */
 static m_noOverflow__org_patternfly_popper_Modifier() {
  Modifiers.$clinit();
  let modifier = new Object();
  modifier.name = 'preventOverflow';
  modifier.enabled = false;
  return modifier;
 }
 /** @nodts @return {Object} */
 static m_hide__org_patternfly_popper_Modifier() {
  Modifiers.$clinit();
  let modifier = new Object();
  modifier.name = 'hide';
  modifier.enabled = true;
  return modifier;
 }
 /** @nodts @return {Object} */
 static m_flip__boolean__org_patternfly_popper_Modifier(/** boolean */ enabled) {
  Modifiers.$clinit();
  let modifier = new Object();
  modifier.name = 'flip';
  modifier.enabled = enabled;
  return modifier;
 }
 /** @nodts @return {Object} */
 static m_eventListeners__boolean__org_patternfly_popper_Modifier(/** boolean */ enabled) {
  Modifiers.$clinit();
  let modifier = new Object();
  modifier.name = 'eventListeners';
  modifier.enabled = enabled;
  return modifier;
 }
 /** @nodts */
 static $clinit() {
  Modifiers.$clinit = () =>{};
  Modifiers.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_popper_Modifiers = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_popper_Modifiers;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.CSSProperties.MinWidthUnionType.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ModifierPhase = goog.module.get('org.patternfly.popper.ModifierPhase$impl');
  Placement = goog.module.get('org.patternfly.popper.Placement$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
Modifiers.$markImplementor(/**@type {Function}*/ (Modifiers));
$Util.$setClassMetadataForInterface(Modifiers, 'org.patternfly.popper.Modifiers');

exports = Modifiers;

//# sourceMappingURL=Modifiers.js.map
