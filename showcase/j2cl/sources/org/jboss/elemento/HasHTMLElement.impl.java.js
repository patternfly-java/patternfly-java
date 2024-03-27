goog.module('org.jboss.elemento.HasHTMLElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HasHTMLElement {
 /** @abstract @nodts @return {B} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ title) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ style) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ style, /** boolean */ append) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ property, /** number */ value) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ property, /** ?string */ value) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ property, /** number */ value, /** boolean */ important) {}
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ property, /** ?string */ value, /** boolean */ important) {}
 /** @abstract @nodts @return {B} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** ?string */ value) {}
 /** @abstract @nodts @return {B} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ hidden) {}
 /** @nodts @template E, B @return {B} */
 static m_title__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasHTMLElement<E, B> */ $thisArg, /** ?string */ title) {
  HasHTMLElement.$clinit();
  /**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).title = title;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasHTMLElement<E, B> */ $thisArg, /** ?string */ style) {
  HasHTMLElement.$clinit();
  return $thisArg.m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(style, true);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !HasHTMLElement<E, B> */ $thisArg, /** ?string */ style, /** boolean */ append) {
  HasHTMLElement.$clinit();
  if (append) {
   {
    let $qualifier = /**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).style;
    $qualifier.cssText = j_l_String.m_valueOf__java_lang_Object__java_lang_String($qualifier.cssText) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(style);
   }
  } else {
   /**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).style.cssText = style;
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** !HasHTMLElement<E, B> */ $thisArg, /** ?string */ property, /** number */ value) {
  HasHTMLElement.$clinit();
  return $thisArg.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(property, j_l_String.m_valueOf__int__java_lang_String(value), false);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasHTMLElement<E, B> */ $thisArg, /** ?string */ property, /** ?string */ value) {
  HasHTMLElement.$clinit();
  return $thisArg.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(property, value, false);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** !HasHTMLElement<E, B> */ $thisArg, /** ?string */ property, /** number */ value, /** boolean */ important) {
  HasHTMLElement.$clinit();
  return $thisArg.m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(property, j_l_String.m_valueOf__int__java_lang_String(value), important);
 }
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !HasHTMLElement<E, B> */ $thisArg, /** ?string */ property, /** ?string */ value, /** boolean */ important) {
  HasHTMLElement.$clinit();
  let priority = important ? 'important' : '';
  /**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).style.setProperty(property, value, priority);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_data__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasHTMLElement<E, B> */ $thisArg, /** ?string */ name, /** ?string */ value) {
  HasHTMLElement.$clinit();
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(/**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).dataset, j_l_String.m_replaceFirst__java_lang_String__java_lang_String__java_lang_String__java_lang_String(name, '^data-', ''), value);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_hidden__$default__org_jboss_elemento_HasHTMLElement__boolean__org_jboss_elemento_TypedBuilder(/** !HasHTMLElement<E, B> */ $thisArg, /** boolean */ hidden) {
  HasHTMLElement.$clinit();
  /**@type {!HTMLElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).hidden = hidden;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HasHTMLElement.$clinit = () =>{};
  HasHTMLElement.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HasHTMLElement = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HasHTMLElement;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasHTMLElement.$markImplementor(/**@type {Function}*/ (HasHTMLElement));
$Util.$setClassMetadataForInterface(HasHTMLElement, 'org.jboss.elemento.HasHTMLElement');

exports = HasHTMLElement;

//# sourceMappingURL=HasHTMLElement.js.map
