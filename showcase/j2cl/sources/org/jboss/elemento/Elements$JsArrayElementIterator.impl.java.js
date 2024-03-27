goog.module('org.jboss.elemento.Elements.JsArrayElementIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<HTMLElement>}
 */
class JsArrayElementIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_parent__org_jboss_elemento_Elements_JsArrayElementIterator_;
  /**@type {HTMLElement} @nodts*/
  this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_;
  /**@type {HTMLElement} @nodts*/
  this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_;
 }
 /** @nodts @return {!JsArrayElementIterator} */
 static $create__elemental2_dom_HTMLElement(/** HTMLElement */ parent) {
  JsArrayElementIterator.$clinit();
  let $instance = new JsArrayElementIterator();
  $instance.$ctor__org_jboss_elemento_Elements_JsArrayElementIterator__elemental2_dom_HTMLElement__void(parent);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Elements_JsArrayElementIterator__elemental2_dom_HTMLElement__void(/** HTMLElement */ parent) {
  this.$ctor__java_lang_Object__void();
  this.f_parent__org_jboss_elemento_Elements_JsArrayElementIterator_ = parent;
  this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_ = /**@type {HTMLElement}*/ ($Casts.$to(parent.firstElementChild, $Overlay));
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return !$Equality.$same(this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_, null);
 }
 /** @nodts @return {HTMLElement} */
 m_next__elemental2_dom_HTMLElement() {
  if (!this.m_hasNext__boolean()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_ = this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_;
  this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_ = /**@type {HTMLElement}*/ ($Casts.$to(this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_.nextElementSibling, $Overlay));
  return this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_;
 }
 /** @override @nodts */
 m_remove__void() {
  if ($Equality.$same(this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.f_parent__org_jboss_elemento_Elements_JsArrayElementIterator_.removeChild(this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_);
  this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_ = null;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLElement} */
 m_next__java_lang_Object() {
  return this.m_next__elemental2_dom_HTMLElement();
 }
 /** @nodts */
 static $clinit() {
  JsArrayElementIterator.$clinit = () =>{};
  JsArrayElementIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsArrayElementIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Iterator.$markImplementor(JsArrayElementIterator);
$Util.$setClassMetadata(JsArrayElementIterator, 'org.jboss.elemento.Elements$JsArrayElementIterator');

exports = JsArrayElementIterator;

//# sourceMappingURL=Elements$JsArrayElementIterator.js.map
