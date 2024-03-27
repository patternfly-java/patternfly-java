goog.module('org.jboss.elemento.Finder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Finder = goog.require('org.jboss.elemento.Finder$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');

/**
 * @template E
 * @implements {Finder<E>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():E */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():E} @nodts*/
  this.f_fn__org_jboss_elemento_Finder_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_Finder_$LambdaAdaptor__org_jboss_elemento_Finder_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Finder_$LambdaAdaptor__org_jboss_elemento_Finder_$JsFunction__void(/** ?function():E */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_Finder_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  let /** ?function():E */ $function;
  return ($function = this.f_fn__org_jboss_elemento_Finder_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_closest__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return Finder.m_closest__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return Finder.m_find__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_findAll__org_jboss_elemento_By__java_lang_Iterable(/** By */ arg0) {
  return Finder.m_findAll__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__java_lang_Iterable(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Finder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Finder.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.Finder$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Finder$$LambdaAdaptor.js.map
