goog.module('java.lang.Iterable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.lang.Iterable.$LambdaAdaptor$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template T
 */
class Iterable {
 /** @abstract @nodts @return {Iterator<T>} */
 m_iterator__java_util_Iterator() {}
 /** @abstract @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ action) {}
 /** @abstract @nodts @return {Spliterator<T>} */
 m_spliterator__java_util_Spliterator() {}
 /** @nodts @template T @return {Iterable<T>} */
 static $adapt(/** ?function():Iterator<T> */ fn) {
  Iterable.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T */
 static m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(/** !Iterable<T> */ $thisArg, /** Consumer<?> */ action) {
  Iterable.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(action);
  for (let $iterator = $thisArg.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let t = $iterator.m_next__java_lang_Object();
   {
    action.m_accept__java_lang_Object__void(t);
   }
  }
 }
 /** @nodts @template T @return {Spliterator<T>} */
 static m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(/** !Iterable<T> */ $thisArg) {
  Iterable.$clinit();
  return /**@type {Spliterator<T>}*/ (Spliterators.m_spliteratorUnknownSize__java_util_Iterator__int__java_util_Spliterator($thisArg.m_iterator__java_util_Iterator(), 0));
 }
 /** @nodts */
 static $clinit() {
  Iterable.$clinit = () =>{};
  Iterable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_Iterable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_Iterable;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.lang.Iterable.$LambdaAdaptor$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
Iterable.$markImplementor(/**@type {Function}*/ (Iterable));
$Util.$setClassMetadataForInterface(Iterable, 'java.lang.Iterable');

exports = Iterable;

//# sourceMappingURL=Iterable.js.map
