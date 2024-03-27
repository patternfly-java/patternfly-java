goog.module('org.jboss.elemento.BodyObserver.ElementObserver$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');

/**
 * @final
 */
class ElementObserver extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_jboss_elemento_BodyObserver_ElementObserver_;
  /**@type {HTMLElement} @nodts*/
  this.f_observedElement__org_jboss_elemento_BodyObserver_ElementObserver_;
  /**@type {ObserverCallback} @nodts*/
  this.f_callback__org_jboss_elemento_BodyObserver_ElementObserver_;
 }
 /** @nodts @return {!ElementObserver} */
 static $create__java_lang_String__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(/** ?string */ id, /** HTMLElement */ observedElement, /** ObserverCallback */ callback) {
  ElementObserver.$clinit();
  let $instance = new ElementObserver();
  $instance.$ctor__org_jboss_elemento_BodyObserver_ElementObserver__java_lang_String__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(id, observedElement, callback);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_BodyObserver_ElementObserver__java_lang_String__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/** ?string */ id, /** HTMLElement */ observedElement, /** ObserverCallback */ callback) {
  this.$ctor__java_lang_Object__void();
  this.f_id__org_jboss_elemento_BodyObserver_ElementObserver_ = id;
  this.f_observedElement__org_jboss_elemento_BodyObserver_ElementObserver_ = observedElement;
  this.f_callback__org_jboss_elemento_BodyObserver_ElementObserver_ = callback;
 }
 /** @nodts */
 static $clinit() {
  ElementObserver.$clinit = () =>{};
  ElementObserver.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ElementObserver;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ElementObserver, 'org.jboss.elemento.BodyObserver$ElementObserver');

exports = ElementObserver;

//# sourceMappingURL=BodyObserver$ElementObserver.js.map
