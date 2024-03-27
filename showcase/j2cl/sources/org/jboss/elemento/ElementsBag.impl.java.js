goog.module('org.jboss.elemento.ElementsBag$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IterableImpl = goog.forwardDeclare('org.jboss.elemento.ElementsBag.IterableImpl$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TypedBuilder<Iterable<Element>, ElementsBag>}
 */
class ElementsBag extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {IterableImpl} @nodts*/
  this.f_iterable__org_jboss_elemento_ElementsBag_;
 }
 /** @nodts @return {!ElementsBag} */
 static $create__() {
  ElementsBag.$clinit();
  let $instance = new ElementsBag();
  $instance.$ctor__org_jboss_elemento_ElementsBag__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_ElementsBag__void() {
  this.$ctor__java_lang_Object__void();
  this.f_iterable__org_jboss_elemento_ElementsBag_ = IterableImpl.$create__();
 }
 /** @nodts @return {ElementsBag} */
 m_that__org_jboss_elemento_ElementsBag() {
  return this;
 }
 /** @nodts @return {Iterable<Element>} */
 m_elements__java_lang_Iterable() {
  return this.f_iterable__org_jboss_elemento_ElementsBag_;
 }
 /** @nodts @return {ElementsBag} */
 m_add__elemental2_dom_Element__org_jboss_elemento_ElementsBag(/** Element */ element) {
  this.f_iterable__org_jboss_elemento_ElementsBag_.f_elements__org_jboss_elemento_ElementsBag_IterableImpl.push(element);
  return this.m_that__org_jboss_elemento_ElementsBag();
 }
 /** @nodts @return {ElementsBag} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_ElementsBag(/** IsElement<?> */ element) {
  if (!$Equality.$same(element, null)) {
   return this.m_add__elemental2_dom_Element__org_jboss_elemento_ElementsBag(/**@type {Element}*/ (element.m_element__elemental2_dom_Element()));
  }
  return this.m_that__org_jboss_elemento_ElementsBag();
 }
 /** @nodts @return {ElementsBag} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_ElementsBag(/** Array<Element> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Element__org_jboss_elemento_ElementsBag(element);
   }
  }
  return this.m_that__org_jboss_elemento_ElementsBag();
 }
 /** @nodts @return {ElementsBag} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_ElementsBag(/** Array<HTMLElement> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Element__org_jboss_elemento_ElementsBag(element);
   }
  }
  return this.m_that__org_jboss_elemento_ElementsBag();
 }
 /** @nodts @return {ElementsBag} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_ElementsBag(/** Array<IsElement<?>> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    if (!$Equality.$same(element, null)) {
     this.m_add__elemental2_dom_Element__org_jboss_elemento_ElementsBag(/**@type {Element}*/ (element.m_element__elemental2_dom_Element()));
    }
   }
  }
  return this.m_that__org_jboss_elemento_ElementsBag();
 }
 /** @nodts @return {ElementsBag} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_ElementsBag(/** Iterable<?> */ elements) {
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = $iterator.m_next__java_lang_Object();
   {
    if (HTMLElement_$Overlay.$isInstance(element)) {
     this.m_add__elemental2_dom_Element__org_jboss_elemento_ElementsBag(/**@type {HTMLElement}*/ ($Casts.$to(element, HTMLElement_$Overlay)));
    } else if (IsElement.$isInstance(element)) {
     this.m_add__elemental2_dom_Element__org_jboss_elemento_ElementsBag(/**@type {IsElement}*/ ($Casts.$to(element, IsElement)).m_element__elemental2_dom_Element());
    }
   }
  }
  return this.m_that__org_jboss_elemento_ElementsBag();
 }
 //Bridge method.
 /** @final @override @nodts @return {ElementsBag} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_jboss_elemento_ElementsBag();
 }
 /** @nodts */
 static $clinit() {
  ElementsBag.$clinit = () =>{};
  ElementsBag.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ElementsBag;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IterableImpl = goog.module.get('org.jboss.elemento.ElementsBag.IterableImpl$impl');
  IsElement = goog.module.get('org.jboss.elemento.IsElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
TypedBuilder.$markImplementor(ElementsBag);
$Util.$setClassMetadata(ElementsBag, 'org.jboss.elemento.ElementsBag');

exports = ElementsBag;

//# sourceMappingURL=ElementsBag.js.map
