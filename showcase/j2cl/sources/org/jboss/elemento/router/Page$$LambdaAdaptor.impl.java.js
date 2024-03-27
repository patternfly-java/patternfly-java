goog.module('org.jboss.elemento.router.Page.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');

/**
 * @implements {Page}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():Iterable<HTMLElement> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Iterable<HTMLElement>} @nodts*/
  this.f_fn__org_jboss_elemento_router_Page_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_router_Page_$LambdaAdaptor__org_jboss_elemento_router_Page_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_Page_$LambdaAdaptor__org_jboss_elemento_router_Page_$JsFunction__void(/** ?function():Iterable<HTMLElement> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_router_Page_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__java_lang_Iterable() {
  let /** ?function():Iterable<HTMLElement> */ $function;
  return ($function = this.f_fn__org_jboss_elemento_router_Page_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Iterator<HTMLElement>} */
 m_iterator__java_util_Iterator() {
  return Page.m_iterator__$default__org_jboss_elemento_router_Page__java_util_Iterator(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<HTMLElement>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<HTMLElement>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
 }
}
Page.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.router.Page$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Page$$LambdaAdaptor.js.map
