goog.module('org.jboss.elemento.Finder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.Finder.$LambdaAdaptor$impl');

/**
 * @interface
 * @template E
 * @extends {IsElement<E>}
 */
class Finder {
 /** @abstract @nodts @return {Iterable<HTMLElement>} */
 m_findAll__org_jboss_elemento_By__java_lang_Iterable(/** By */ selector) {}
 /** @abstract @nodts @template F @return {F} */
 m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ selector) {}
 /** @abstract @nodts @template F @return {F} */
 m_closest__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ selector) {}
 /** @nodts @template E @return {Finder<E>} */
 static $adapt(/** ?function():E */ fn) {
  Finder.$clinit();
  return /**@type {!$LambdaAdaptor<E>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template E @return {Iterable<HTMLElement>} */
 static m_findAll__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__java_lang_Iterable(/** !Finder<E> */ $thisArg, /** By */ selector) {
  Finder.$clinit();
  return Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(/**@type {Node}*/ ($thisArg.m_element__elemental2_dom_Element()), selector);
 }
 /** @nodts @template E, F @return {F} */
 static m_find__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** !Finder<E> */ $thisArg, /** By */ selector) {
  Finder.$clinit();
  return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {Node}*/ ($thisArg.m_element__elemental2_dom_Element()), selector);
 }
 /** @nodts @template E, F @return {F} */
 static m_closest__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** !Finder<E> */ $thisArg, /** By */ selector) {
  Finder.$clinit();
  return Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {Element}*/ ($thisArg.m_element__elemental2_dom_Element()), selector);
 }
 /** @nodts */
 static $clinit() {
  Finder.$clinit = () =>{};
  Finder.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_Finder = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_Finder;
 }
 
 /** @nodts */
 static $loadModules() {
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.Finder.$LambdaAdaptor$impl');
 }
}
Finder.$markImplementor(/**@type {Function}*/ (Finder));
$Util.$setClassMetadataForInterface(Finder, 'org.jboss.elemento.Finder');

exports = Finder;

//# sourceMappingURL=Finder.js.map
