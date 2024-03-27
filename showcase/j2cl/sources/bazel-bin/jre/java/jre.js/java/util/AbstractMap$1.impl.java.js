goog.module('java.util.AbstractMap.$1$impl');

const AbstractSet = goog.require('java.util.AbstractSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractMap = goog.forwardDeclare('java.util.AbstractMap$impl');
let $1_$1 = goog.forwardDeclare('java.util.AbstractMap.$1.$1$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');

/**
 * @template K, V
 * @extends {AbstractSet<K>}
 */
class $1 extends AbstractSet {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {AbstractMap<K, V>} @nodts*/
  this.$outer_this__java_util_AbstractMap_1;
 }
 /** @nodts @template K, V @return {!$1<K, V>} */
 static $create__java_util_AbstractMap(/** AbstractMap<K, V> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_AbstractMap_1__java_util_AbstractMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_AbstractMap_1__java_util_AbstractMap__void(/** AbstractMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_AbstractMap_1 = $outer_this;
  this.$ctor__java_util_AbstractSet__void();
 }
 /** @override */
 clear() {
  this.$outer_this__java_util_AbstractMap_1.clear();
 }
 /** @override @return {boolean} */
 contains(/** * */ key) {
  return this.$outer_this__java_util_AbstractMap_1.containsKey(key);
 }
 /** @override @nodts @return {Iterator<K>} */
 m_iterator__java_util_Iterator() {
  let outerIter = this.$outer_this__java_util_AbstractMap_1.m_entrySet__java_util_Set().m_iterator__java_util_Iterator();
  return /**@type {!$1_$1<K, V>}*/ ($1_$1.$create__java_util_AbstractMap_1__java_util_Iterator(this, outerIter));
 }
 /** @override @return {boolean} */
 remove(/** * */ key) {
  if (this.$outer_this__java_util_AbstractMap_1.containsKey(key)) {
   this.$outer_this__java_util_AbstractMap_1.remove(key);
   return true;
  }
  return false;
 }
 /** @override @return {number} */
 size() {
  return this.$outer_this__java_util_AbstractMap_1.size();
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractSet.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  $1_$1 = goog.module.get('java.util.AbstractMap.$1.$1$impl');
 }
}
$Util.$setClassMetadata($1, 'java.util.AbstractMap$1');

exports = $1;

//# sourceMappingURL=AbstractMap$1.js.map
