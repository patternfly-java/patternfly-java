goog.module('java.util.Collections.SingletonList$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractList = goog.require('java.util.AbstractList$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Objects = goog.forwardDeclare('java.util.Objects$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @final
 * @template E
 * @extends {AbstractList<E>}
 * @implements {Serializable}
 */
class SingletonList extends AbstractList {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__java_util_Collections_SingletonList_;
 }
 /** @nodts @template E @return {!SingletonList<E>} */
 static $create__java_lang_Object(/** E */ element) {
  SingletonList.$clinit();
  let $instance = new SingletonList();
  $instance.$ctor__java_util_Collections_SingletonList__java_lang_Object__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_SingletonList__java_lang_Object__void(/** E */ element) {
  this.$ctor__java_util_AbstractList__void();
  this.f_element__java_util_Collections_SingletonList_ = element;
 }
 /** @override @return {boolean} */
 contains(/** * */ item) {
  return Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_element__java_util_Collections_SingletonList_, item);
 }
 /** @override @return {E} */
 getAtIndex(/** number */ index) {
  InternalPreconditions.m_checkElementIndex__int__int__void(index, 1);
  return this.f_element__java_util_Collections_SingletonList_;
 }
 /** @override @return {number} */
 size() {
  return 1;
 }
 /** @nodts */
 static $clinit() {
  SingletonList.$clinit = () =>{};
  SingletonList.$loadModules();
  AbstractList.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SingletonList;
 }
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
Serializable.$markImplementor(SingletonList);
$Util.$setClassMetadata(SingletonList, 'java.util.Collections$SingletonList');

exports = SingletonList;

//# sourceMappingURL=Collections$SingletonList.js.map
