goog.module('org.jboss.elemento.router.LinkSelector$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');

class LinkSelector extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {By} @nodts*/
  this.f_selector__org_jboss_elemento_router_LinkSelector_;
  /**@type {boolean} @nodts*/
  this.f_not__org_jboss_elemento_router_LinkSelector_ = false;
 }
 //Factory method corresponding to constructor 'LinkSelector()'.
 /** @nodts @return {!LinkSelector} */
 static $create__() {
  LinkSelector.$clinit();
  let $instance = new LinkSelector();
  $instance.$ctor__org_jboss_elemento_router_LinkSelector__void();
  return $instance;
 }
 //Initialization from constructor 'LinkSelector()'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_LinkSelector__void() {
  this.$ctor__org_jboss_elemento_router_LinkSelector__org_jboss_elemento_By__boolean__void(/**@type {By}*/ (null), false);
 }
 //Factory method corresponding to constructor 'LinkSelector(String)'.
 /** @nodts @return {!LinkSelector} */
 static $create__java_lang_String(/** ?string */ selector) {
  LinkSelector.$clinit();
  let $instance = new LinkSelector();
  $instance.$ctor__org_jboss_elemento_router_LinkSelector__java_lang_String__void(selector);
  return $instance;
 }
 //Initialization from constructor 'LinkSelector(String)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_LinkSelector__java_lang_String__void(/** ?string */ selector) {
  this.$ctor__org_jboss_elemento_router_LinkSelector__org_jboss_elemento_By__boolean__void(By.m_selector__java_lang_String__org_jboss_elemento_By(selector), false);
 }
 //Factory method corresponding to constructor 'LinkSelector(String, boolean)'.
 /** @nodts @return {!LinkSelector} */
 static $create__java_lang_String__boolean(/** ?string */ selector, /** boolean */ not) {
  LinkSelector.$clinit();
  let $instance = new LinkSelector();
  $instance.$ctor__org_jboss_elemento_router_LinkSelector__java_lang_String__boolean__void(selector, not);
  return $instance;
 }
 //Initialization from constructor 'LinkSelector(String, boolean)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_LinkSelector__java_lang_String__boolean__void(/** ?string */ selector, /** boolean */ not) {
  this.$ctor__org_jboss_elemento_router_LinkSelector__org_jboss_elemento_By__boolean__void(By.m_selector__java_lang_String__org_jboss_elemento_By(selector), not);
 }
 //Factory method corresponding to constructor 'LinkSelector(By)'.
 /** @nodts @return {!LinkSelector} */
 static $create__org_jboss_elemento_By(/** By */ selector) {
  LinkSelector.$clinit();
  let $instance = new LinkSelector();
  $instance.$ctor__org_jboss_elemento_router_LinkSelector__org_jboss_elemento_By__void(selector);
  return $instance;
 }
 //Initialization from constructor 'LinkSelector(By)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_LinkSelector__org_jboss_elemento_By__void(/** By */ selector) {
  this.$ctor__org_jboss_elemento_router_LinkSelector__org_jboss_elemento_By__boolean__void(selector, false);
 }
 //Factory method corresponding to constructor 'LinkSelector(By, boolean)'.
 /** @nodts @return {!LinkSelector} */
 static $create__org_jboss_elemento_By__boolean(/** By */ selector, /** boolean */ not) {
  LinkSelector.$clinit();
  let $instance = new LinkSelector();
  $instance.$ctor__org_jboss_elemento_router_LinkSelector__org_jboss_elemento_By__boolean__void(selector, not);
  return $instance;
 }
 //Initialization from constructor 'LinkSelector(By, boolean)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_LinkSelector__org_jboss_elemento_By__boolean__void(/** By */ selector, /** boolean */ not) {
  this.$ctor__java_lang_Object__void();
  this.f_selector__org_jboss_elemento_router_LinkSelector_ = selector;
  this.f_not__org_jboss_elemento_router_LinkSelector_ = not;
 }
 /** @nodts @return {boolean} */
 m_matches__elemental2_dom_HTMLAnchorElement__boolean_$pp_org_jboss_elemento_router(/** HTMLAnchorElement */ a) {
  if ($Equality.$same(this.f_selector__org_jboss_elemento_router_LinkSelector_, null)) {
   return true;
  }
  if (this.f_not__org_jboss_elemento_router_LinkSelector_) {
   return !a.matches(this.f_selector__org_jboss_elemento_router_LinkSelector_.toString());
  } else {
   return a.matches(this.f_selector__org_jboss_elemento_router_LinkSelector_.toString());
  }
 }
 /** @nodts */
 static $clinit() {
  LinkSelector.$clinit = () =>{};
  LinkSelector.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LinkSelector;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
 }
}
$Util.$setClassMetadata(LinkSelector, 'org.jboss.elemento.router.LinkSelector');

exports = LinkSelector;

//# sourceMappingURL=LinkSelector.js.map
