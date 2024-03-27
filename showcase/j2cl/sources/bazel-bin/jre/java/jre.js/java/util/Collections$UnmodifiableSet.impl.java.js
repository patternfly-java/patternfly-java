goog.module('java.util.Collections.UnmodifiableSet$impl');

const UnmodifiableCollection = goog.require('java.util.Collections.UnmodifiableCollection$impl');
const Set = goog.require('java.util.Set$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @extends {UnmodifiableCollection<T>}
 * @implements {Set<T>}
 */
class UnmodifiableSet extends UnmodifiableCollection {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {!UnmodifiableSet<T>} */
 static $create__java_util_Set(/** Set<?> */ set) {
  UnmodifiableSet.$clinit();
  let $instance = new UnmodifiableSet();
  $instance.$ctor__java_util_Collections_UnmodifiableSet__java_util_Set__void(set);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableSet__java_util_Set__void(/** Set<?> */ set) {
  this.$ctor__java_util_Collections_UnmodifiableCollection__java_util_Collection__void(set);
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_coll__java_util_Collections_UnmodifiableCollection, o);
 }
 /** @override @return {number} */
 hashCode() {
  return $Objects.m_hashCode__java_lang_Object__int(this.f_coll__java_util_Collections_UnmodifiableCollection);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<T>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<T>}*/ (Set.m_spliterator__$default__java_util_Set__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableSet.$clinit = () =>{};
  UnmodifiableSet.$loadModules();
  UnmodifiableCollection.$clinit();
  Set.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableSet;
 }
 
 /** @nodts */
 static $loadModules() {
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Set.$markImplementor(UnmodifiableSet);
$Util.$setClassMetadata(UnmodifiableSet, 'java.util.Collections$UnmodifiableSet');

exports = UnmodifiableSet;

//# sourceMappingURL=Collections$UnmodifiableSet.js.map
