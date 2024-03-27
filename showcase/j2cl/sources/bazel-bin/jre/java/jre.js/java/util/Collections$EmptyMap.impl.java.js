goog.module('java.util.Collections.EmptyMap$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractMap = goog.require('java.util.AbstractMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');

/**
 * @final
 * @implements {Serializable}
 */
class EmptyMap extends AbstractMap {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!EmptyMap} */
 static $create__() {
  EmptyMap.$clinit();
  let $instance = new EmptyMap();
  $instance.$ctor__java_util_Collections_EmptyMap__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_EmptyMap__void() {
  this.$ctor__java_util_AbstractMap__void();
 }
 /** @override @return {boolean} */
 containsKey(/** * */ key) {
  return false;
 }
 /** @override @return {boolean} */
 containsValue(/** * */ value) {
  return false;
 }
 /** @override @nodts @return {Set} */
 m_entrySet__java_util_Set() {
  return Collections.f_EMPTY_SET__java_util_Collections;
 }
 /** @override @return {*} */
 get(/** * */ key) {
  return null;
 }
 /** @override @return {!Set} */
 keySet() {
  return Collections.f_EMPTY_SET__java_util_Collections;
 }
 /** @override @return {number} */
 size() {
  return 0;
 }
 /** @override @return {!Collection} */
 values() {
  return Collections.f_EMPTY_LIST__java_util_Collections;
 }
 /** @nodts */
 static $clinit() {
  EmptyMap.$clinit = () =>{};
  EmptyMap.$loadModules();
  AbstractMap.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyMap;
 }
 
 /** @nodts */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
 }
}
Serializable.$markImplementor(EmptyMap);
$Util.$setClassMetadata(EmptyMap, 'java.util.Collections$EmptyMap');

exports = EmptyMap;

//# sourceMappingURL=Collections$EmptyMap.js.map
