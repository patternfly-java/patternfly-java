goog.module('org.jboss.elemento.ElementsBag.IterableImpl$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');

/**
 * @implements {Iterable<Element>}
 */
class IterableImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<Element>} @nodts*/
  this.f_elements__org_jboss_elemento_ElementsBag_IterableImpl;
 }
 /** @nodts @return {!IterableImpl} */
 static $create__() {
  IterableImpl.$clinit();
  let $instance = new IterableImpl();
  $instance.$ctor__org_jboss_elemento_ElementsBag_IterableImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_ElementsBag_IterableImpl__void() {
  this.$ctor__java_lang_Object__void();
  this.f_elements__org_jboss_elemento_ElementsBag_IterableImpl = /**@type {!Array<Element>}*/ (new Array());
 }
 /** @override @nodts @return {Iterator<Element>} */
 m_iterator__java_util_Iterator() {
  return /**@type {Iterator<Element>}*/ (Elements.m_iterator__jsinterop_base_JsArrayLike__java_util_Iterator(this.f_elements__org_jboss_elemento_ElementsBag_IterableImpl));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<Element>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<Element>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  IterableImpl.$clinit = () =>{};
  IterableImpl.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IterableImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
 }
}
Iterable.$markImplementor(IterableImpl);
$Util.$setClassMetadata(IterableImpl, 'org.jboss.elemento.ElementsBag$IterableImpl');

exports = IterableImpl;

//# sourceMappingURL=ElementsBag$IterableImpl.js.map
