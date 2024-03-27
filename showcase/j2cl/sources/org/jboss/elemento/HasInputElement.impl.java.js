goog.module('org.jboss.elemento.HasInputElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HasInputElement {
 /** @abstract @nodts @return {B} */
 m_accept__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ accept) {}
 /** @abstract @nodts @return {B} */
 m_autofocus__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ autofocus) {}
 /** @abstract @nodts @return {B} */
 m_autocomplete__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ autocomplete) {}
 /** @abstract @nodts @return {B} */
 m_checked__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ checked) {}
 /** @abstract @nodts @return {B} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ disabled) {}
 /** @abstract @nodts @return {B} */
 m_indeterminate__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ indeterminate) {}
 /** @abstract @nodts @return {B} */
 m_max__int__org_jboss_elemento_TypedBuilder(/** number */ max) {}
 /** @abstract @nodts @return {B} */
 m_max__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ max) {}
 /** @abstract @nodts @return {B} */
 m_min__int__org_jboss_elemento_TypedBuilder(/** number */ min) {}
 /** @abstract @nodts @return {B} */
 m_min__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ min) {}
 /** @abstract @nodts @return {B} */
 m_multiple__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ multiple) {}
 /** @abstract @nodts @return {B} */
 m_name__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name) {}
 /** @abstract @nodts @return {B} */
 m_placeholder__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ placeholder) {}
 /** @abstract @nodts @return {B} */
 m_readOnly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ readOnly) {}
 /** @abstract @nodts @return {B} */
 m_required__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ required) {}
 /** @abstract @nodts @return {B} */
 m_tabIndex__int__org_jboss_elemento_TypedBuilder(/** number */ tabIndex) {}
 /** @abstract @nodts @return {B} */
 m_value__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ value) {}
 /** @nodts @template E, B @return {B} */
 static m_accept__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** ?string */ accept) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).accept = accept;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_autofocus__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** boolean */ autofocus) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).autofocus = autofocus;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_autocomplete__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** ?string */ autocomplete) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).autocomplete = autocomplete;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_checked__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** boolean */ checked) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).checked = checked;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_disabled__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** boolean */ disabled) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).disabled = disabled;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_indeterminate__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** boolean */ indeterminate) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).indeterminate = indeterminate;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_max__$default__org_jboss_elemento_HasInputElement__int__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** number */ max) {
  HasInputElement.$clinit();
  return $thisArg.m_max__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(max));
 }
 /** @nodts @template E, B @return {B} */
 static m_max__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** ?string */ max) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).max = max;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_min__$default__org_jboss_elemento_HasInputElement__int__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** number */ min) {
  HasInputElement.$clinit();
  return $thisArg.m_min__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(min));
 }
 /** @nodts @template E, B @return {B} */
 static m_min__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** ?string */ min) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).min = min;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_multiple__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** boolean */ multiple) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).multiple = multiple;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_name__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** ?string */ name) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).name = name;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_placeholder__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** ?string */ placeholder) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).placeholder = placeholder;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_readOnly__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** boolean */ readOnly) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).readOnly = readOnly;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_required__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** boolean */ required) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).required = required;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_tabIndex__$default__org_jboss_elemento_HasInputElement__int__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** number */ tabIndex) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).tabIndex = tabIndex;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_value__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasInputElement<E, B> */ $thisArg, /** ?string */ value) {
  HasInputElement.$clinit();
  /**@type {!HTMLInputElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).value = value;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HasInputElement.$clinit = () =>{};
  HasInputElement.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HasInputElement = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HasInputElement;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasInputElement.$markImplementor(/**@type {Function}*/ (HasInputElement));
$Util.$setClassMetadataForInterface(HasInputElement, 'org.jboss.elemento.HasInputElement');

exports = HasInputElement;

//# sourceMappingURL=HasInputElement.js.map
