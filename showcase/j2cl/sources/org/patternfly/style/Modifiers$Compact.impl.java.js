goog.module('org.patternfly.style.Modifiers.Compact$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class Compact {
 /** @abstract @nodts @return {B} */
 m_compact__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ compact) {}
 /** @nodts @template E, B @return {B} */
 static m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(/** !Compact<E, B> */ $thisArg) {
  Compact.$clinit();
  return $thisArg.m_compact__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(/** !Compact<E, B> */ $thisArg, /** boolean */ compact) {
  Compact.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_compact__org_patternfly_style_Classes, compact);
 }
 /** @nodts */
 static $clinit() {
  Compact.$clinit = () =>{};
  Compact.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Compact = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Compact;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Compact.$markImplementor(/**@type {Function}*/ (Compact));
$Util.$setClassMetadataForInterface(Compact, 'org.patternfly.style.Modifiers$Compact');

exports = Compact;

//# sourceMappingURL=Modifiers$Compact.js.map
