goog.module('org.jboss.elemento.Elements.JsArrayLikeIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @implements {Iterator<T>}
 */
class JsArrayLikeIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {IArrayLike<?>} @nodts*/
  this.f_data__org_jboss_elemento_Elements_JsArrayLikeIterator_;
  /**@type {number} @nodts*/
  this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_ = 0;
 }
 /** @nodts @template T @return {!JsArrayLikeIterator<T>} */
 static $create__jsinterop_base_JsArrayLike(/** IArrayLike<?> */ nodes) {
  JsArrayLikeIterator.$clinit();
  let $instance = new JsArrayLikeIterator();
  $instance.$ctor__org_jboss_elemento_Elements_JsArrayLikeIterator__jsinterop_base_JsArrayLike__void(nodes);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Elements_JsArrayLikeIterator__jsinterop_base_JsArrayLike__void(/** IArrayLike<?> */ nodes) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_org_jboss_elemento_Elements_JsArrayLikeIterator();
  this.f_data__org_jboss_elemento_Elements_JsArrayLikeIterator_ = nodes;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_ < $Overlay.m_getLength__$devirt__jsinterop_base_JsArrayLike__int(this.f_data__org_jboss_elemento_Elements_JsArrayLikeIterator_);
 }
 /** @override @nodts @return {T} */
 m_next__java_lang_Object() {
  let /** number */ $value;
  if (!this.m_hasNext__boolean()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  return $Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(this.f_data__org_jboss_elemento_Elements_JsArrayLikeIterator_, ($value = this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_, this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_ = this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_ + 1 | 0, $value));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_remove__void() {
  Iterator.m_remove__$default__java_util_Iterator__void(this);
 }
 /** @private @nodts */
 $init__void_$p_org_jboss_elemento_Elements_JsArrayLikeIterator() {
  this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_ = 0;
 }
 /** @nodts */
 static $clinit() {
  JsArrayLikeIterator.$clinit = () =>{};
  JsArrayLikeIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsArrayLikeIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Iterator.$markImplementor(JsArrayLikeIterator);
$Util.$setClassMetadata(JsArrayLikeIterator, 'org.jboss.elemento.Elements$JsArrayLikeIterator');

exports = JsArrayLikeIterator;

//# sourceMappingURL=Elements$JsArrayLikeIterator.js.map
