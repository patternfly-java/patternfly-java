goog.module('org.jboss.elemento.LazyElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @abstract
 * @template E
 * @implements {IsElement<E>}
 */
class LazyElement extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__org_jboss_elemento_LazyElement_;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_LazyElement__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {E} */
 m_element__elemental2_dom_HTMLElement() {
  if ($Equality.$same(this.f_element__org_jboss_elemento_LazyElement_, null)) {
   this.f_element__org_jboss_elemento_LazyElement_ = this.m_createElement__elemental2_dom_HTMLElement();
  }
  return this.f_element__org_jboss_elemento_LazyElement_;
 }
 /** @abstract @nodts @return {E} */
 m_createElement__elemental2_dom_HTMLElement() {}
 /** @nodts @return {boolean} */
 m_initialized__boolean() {
  return !$Equality.$same(this.f_element__org_jboss_elemento_LazyElement_, null);
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts */
 static $clinit() {
  LazyElement.$clinit = () =>{};
  LazyElement.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LazyElement;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
IsElement.$markImplementor(LazyElement);
$Util.$setClassMetadata(LazyElement, 'org.jboss.elemento.LazyElement');

exports = LazyElement;

//# sourceMappingURL=LazyElement.js.map
