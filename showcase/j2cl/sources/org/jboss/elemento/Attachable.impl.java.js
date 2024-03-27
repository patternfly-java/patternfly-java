goog.module('org.jboss.elemento.Attachable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.Attachable.$LambdaAdaptor$impl');
let BodyObserver = goog.forwardDeclare('org.jboss.elemento.BodyObserver$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 */
class Attachable {
 /** @nodts */
 static m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable__void(/** HTMLElement */ element, /** Attachable */ attachable) {
  Attachable.$clinit();
  if (!$Equality.$same(element, null)) {
   BodyObserver.m_addAttachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(element, ObserverCallback.$adapt((/** MutationRecord */ arg0) =>{
    attachable.m_attach__elemental2_dom_MutationRecord__void(arg0);
   }));
   BodyObserver.m_addDetachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(element, ObserverCallback.$adapt((/** MutationRecord */ arg0_1) =>{
    attachable.m_detach__elemental2_dom_MutationRecord__void(arg0_1);
   }));
  }
 }
 /** @nodts */
 static m_unregister__elemental2_dom_HTMLElement__void(/** HTMLElement */ element) {
  Attachable.$clinit();
  if (!$Equality.$same(element, null)) {
   BodyObserver.m_removeAttachObserver__elemental2_dom_HTMLElement__void(element);
   BodyObserver.m_removeDetachObserver__elemental2_dom_HTMLElement__void(element);
  }
 }
 /** @nodts @template E */
 static m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(/** IsElement<E> */ element, /** Attachable */ attachable) {
  Attachable.$clinit();
  if (!$Equality.$same(element, null)) {
   Attachable.m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable__void(/**@type {HTMLElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), attachable);
  }
 }
 /** @abstract @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {}
 /** @abstract @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {}
 /** @nodts @return {Attachable} */
 static $adapt(/** ?function(MutationRecord):void */ fn) {
  Attachable.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(/** !Attachable */ $thisArg, /** MutationRecord */ mutationRecord) {
  Attachable.$clinit();
 }
 /** @nodts */
 static $clinit() {
  Attachable.$clinit = () =>{};
  Attachable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_Attachable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_Attachable;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.Attachable.$LambdaAdaptor$impl');
  BodyObserver = goog.module.get('org.jboss.elemento.BodyObserver$impl');
  ObserverCallback = goog.module.get('org.jboss.elemento.ObserverCallback$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Attachable.$markImplementor(/**@type {Function}*/ (Attachable));
$Util.$setClassMetadataForInterface(Attachable, 'org.jboss.elemento.Attachable');

exports = Attachable;

//# sourceMappingURL=Attachable.js.map
