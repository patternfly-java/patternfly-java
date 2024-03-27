goog.module('org.jboss.elemento.Elements.JsArrayNodeIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<Node>}
 */
class JsArrayNodeIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Node} @nodts*/
  this.f_parent__org_jboss_elemento_Elements_JsArrayNodeIterator_;
  /**@type {Node} @nodts*/
  this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_;
  /**@type {Node} @nodts*/
  this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_;
 }
 /** @nodts @return {!JsArrayNodeIterator} */
 static $create__elemental2_dom_Node(/** Node */ parent) {
  JsArrayNodeIterator.$clinit();
  let $instance = new JsArrayNodeIterator();
  $instance.$ctor__org_jboss_elemento_Elements_JsArrayNodeIterator__elemental2_dom_Node__void(parent);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Elements_JsArrayNodeIterator__elemental2_dom_Node__void(/** Node */ parent) {
  this.$ctor__java_lang_Object__void();
  this.f_parent__org_jboss_elemento_Elements_JsArrayNodeIterator_ = parent;
  this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_ = parent.firstChild;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return !$Equality.$same(this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_, null);
 }
 /** @nodts @return {Node} */
 m_next__elemental2_dom_Node() {
  if (!this.m_hasNext__boolean()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_ = this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_;
  this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_ = this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_.nextSibling;
  return this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_;
 }
 /** @override @nodts */
 m_remove__void() {
  if ($Equality.$same(this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.f_parent__org_jboss_elemento_Elements_JsArrayNodeIterator_.removeChild(this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_);
  this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_ = null;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Node} */
 m_next__java_lang_Object() {
  return this.m_next__elemental2_dom_Node();
 }
 /** @nodts */
 static $clinit() {
  JsArrayNodeIterator.$clinit = () =>{};
  JsArrayNodeIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsArrayNodeIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Iterator.$markImplementor(JsArrayNodeIterator);
$Util.$setClassMetadata(JsArrayNodeIterator, 'org.jboss.elemento.Elements$JsArrayNodeIterator');

exports = JsArrayNodeIterator;

//# sourceMappingURL=Elements$JsArrayNodeIterator.js.map
