goog.module('org.patternfly.component.Expandable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class Expandable {
 /** @nodts */
 static m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/** HTMLElement */ root, /** HTMLElement */ toggle, /** HTMLElement */ menu) {
  Expandable.$clinit();
  Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__void(root, toggle, menu, false);
 }
 /** @nodts */
 static m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__void(/** HTMLElement */ root, /** HTMLElement */ toggle, /** HTMLElement */ menu, /** boolean */ force) {
  Expandable.$clinit();
  if (force || Expandable.m_expanded__elemental2_dom_Element__boolean(root)) {
   root.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
   if (!$Equality.$same(toggle, null)) {
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(toggle, Aria.f_expanded__org_patternfly_core_Aria, false);
   }
   if (!$Equality.$same(menu, null)) {
    menu.hidden = true;
   }
  }
 }
 /** @nodts */
 static m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/** HTMLElement */ root, /** HTMLElement */ toggle, /** HTMLElement */ menu) {
  Expandable.$clinit();
  Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__void(root, toggle, menu, false);
 }
 /** @nodts */
 static m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__void(/** HTMLElement */ root, /** HTMLElement */ toggle, /** HTMLElement */ menu, /** boolean */ force) {
  Expandable.$clinit();
  if (force || !Expandable.m_expanded__elemental2_dom_Element__boolean(root)) {
   root.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
   if (!$Equality.$same(toggle, null)) {
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(toggle, Aria.f_expanded__org_patternfly_core_Aria, true);
   }
   if (!$Equality.$same(menu, null)) {
    menu.hidden = false;
   }
  }
 }
 /** @nodts @return {boolean} */
 static m_expanded__elemental2_dom_Element__boolean(/** Element */ root) {
  Expandable.$clinit();
  return !$Equality.$same(root, null) && root.classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
 }
 /** @abstract @nodts */
 m_toggle__void() {}
 /** @abstract @nodts */
 m_toggle__boolean__void(/** boolean */ fireEvent) {}
 /** @abstract @nodts */
 m_collapse__void() {}
 /** @abstract @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {}
 /** @abstract @nodts */
 m_expand__void() {}
 /** @abstract @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {}
 /** @abstract @nodts @return {boolean} */
 m_expanded__boolean() {}
 /** @nodts @template E, B */
 static m_toggle__$default__org_patternfly_component_Expandable__void(/** !Expandable<E, B> */ $thisArg) {
  Expandable.$clinit();
  $thisArg.m_toggle__boolean__void(true);
 }
 /** @nodts @template E, B */
 static m_toggle__$default__org_patternfly_component_Expandable__boolean__void(/** !Expandable<E, B> */ $thisArg, /** boolean */ fireEvent) {
  Expandable.$clinit();
  if ($thisArg.m_expanded__boolean()) {
   $thisArg.m_collapse__boolean__void(fireEvent);
  } else {
   $thisArg.m_expand__boolean__void(fireEvent);
  }
 }
 /** @nodts @template E, B */
 static m_collapse__$default__org_patternfly_component_Expandable__void(/** !Expandable<E, B> */ $thisArg) {
  Expandable.$clinit();
  $thisArg.m_collapse__boolean__void(true);
 }
 /** @nodts @template E, B */
 static m_expand__$default__org_patternfly_component_Expandable__void(/** !Expandable<E, B> */ $thisArg) {
  Expandable.$clinit();
  $thisArg.m_expand__boolean__void(true);
 }
 /** @nodts @template E, B @return {boolean} */
 static m_expanded__$default__org_patternfly_component_Expandable__boolean(/** !Expandable<E, B> */ $thisArg) {
  Expandable.$clinit();
  return Expandable.m_expanded__elemental2_dom_Element__boolean(/**@type {Element}*/ ($thisArg.m_element__elemental2_dom_Element()));
 }
 /** @nodts */
 static $clinit() {
  Expandable.$clinit = () =>{};
  Expandable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_Expandable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_Expandable;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
 }
}
Expandable.$markImplementor(/**@type {Function}*/ (Expandable));
$Util.$setClassMetadataForInterface(Expandable, 'org.patternfly.component.Expandable');

exports = Expandable;

//# sourceMappingURL=Expandable.js.map
