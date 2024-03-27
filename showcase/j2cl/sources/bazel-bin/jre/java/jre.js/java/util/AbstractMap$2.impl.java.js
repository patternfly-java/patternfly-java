goog.module('java.util.AbstractMap.$2$impl');

const AbstractCollection = goog.require('java.util.AbstractCollection$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractMap = goog.forwardDeclare('java.util.AbstractMap$impl');
let $1 = goog.forwardDeclare('java.util.AbstractMap.$2.$1$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');

/**
 * @template K, V
 * @extends {AbstractCollection<V>}
 */
class $2 extends AbstractCollection {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {AbstractMap<K, V>} @nodts*/
  this.$outer_this__java_util_AbstractMap_2;
 }
 /** @nodts @template K, V @return {!$2<K, V>} */
 static $create__java_util_AbstractMap(/** AbstractMap<K, V> */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__java_util_AbstractMap_2__java_util_AbstractMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_AbstractMap_2__java_util_AbstractMap__void(/** AbstractMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_AbstractMap_2 = $outer_this;
  this.$ctor__java_util_AbstractCollection__void();
 }
 /** @override */
 clear() {
  this.$outer_this__java_util_AbstractMap_2.clear();
 }
 /** @override @return {boolean} */
 contains(/** * */ value) {
  return this.$outer_this__java_util_AbstractMap_2.containsValue(value);
 }
 /** @override @nodts @return {Iterator<V>} */
 m_iterator__java_util_Iterator() {
  let outerIter = this.$outer_this__java_util_AbstractMap_2.m_entrySet__java_util_Set().m_iterator__java_util_Iterator();
  return /**@type {!$1<K, V>}*/ ($1.$create__java_util_AbstractMap_2__java_util_Iterator(this, outerIter));
 }
 /** @override @return {number} */
 size() {
  return this.$outer_this__java_util_AbstractMap_2.size();
 }
 /** @nodts */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  AbstractCollection.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 /** @nodts */
 static $loadModules() {
  $1 = goog.module.get('java.util.AbstractMap.$2.$1$impl');
 }
}
$Util.$setClassMetadata($2, 'java.util.AbstractMap$2');

exports = $2;

//# sourceMappingURL=AbstractMap$2.js.map
