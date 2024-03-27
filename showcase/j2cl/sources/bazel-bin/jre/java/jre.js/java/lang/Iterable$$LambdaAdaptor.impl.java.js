goog.module('java.lang.Iterable.$LambdaAdaptor$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');

/**
 * @template T
 * @implements {Iterable<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():Iterator<T> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Iterator<T>} @nodts*/
  this.f_fn__java_lang_Iterable_$LambdaAdaptor;
  this.$ctor__java_lang_Iterable_$LambdaAdaptor__java_lang_Iterable_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_lang_Iterable_$LambdaAdaptor__java_lang_Iterable_$JsFunction__void(/** ?function():Iterator<T> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_lang_Iterable_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {Iterator<T>} */
 m_iterator__java_util_Iterator() {
  let /** ?function():Iterator<T> */ $function;
  return ($function = this.f_fn__java_lang_Iterable_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<T>} */
 m_spliterator__java_util_Spliterator() {
  return Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Iterable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.lang.Iterable$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Iterable$$LambdaAdaptor.js.map
