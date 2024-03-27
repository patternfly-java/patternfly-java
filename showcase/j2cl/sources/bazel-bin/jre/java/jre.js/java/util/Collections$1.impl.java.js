goog.module('java.util.Collections.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Enumeration = goog.require('java.util.Enumeration$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');

/**
 * @template T
 * @implements {Enumeration<T>}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Iterator<T>} @nodts*/
  this.$captured_it__java_util_Collections_1;
 }
 /** @nodts @template T @return {!$1<T>} */
 static $create__java_util_Iterator(/** Iterator<T> */ $captured_it) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_Collections_1__java_util_Iterator__void($captured_it);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_1__java_util_Iterator__void(/** Iterator<T> */ $captured_it) {
  this.$captured_it__java_util_Collections_1 = $captured_it;
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts @return {boolean} */
 m_hasMoreElements__boolean() {
  return this.$captured_it__java_util_Collections_1.m_hasNext__boolean();
 }
 /** @override @nodts @return {T} */
 m_nextElement__java_lang_Object() {
  return this.$captured_it__java_util_Collections_1.m_next__java_lang_Object();
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Enumeration.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.Collections$1');

exports = $1;

//# sourceMappingURL=Collections$1.js.map
