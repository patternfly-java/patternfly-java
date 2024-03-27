goog.module('java.util.HashSet$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Cloneable = goog.require('java.lang.Cloneable$impl');
const AbstractSet = goog.require('java.util.AbstractSet$impl');
const Set = goog.require('java.util.Set$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @template E
 * @extends {AbstractSet<E>}
 * @implements {Set<E>}
 * @implements {Cloneable}
 * @implements {Serializable}
 */
class HashSet extends AbstractSet {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HashMap<E, *>} @nodts*/
  this.f_map__java_util_HashSet_;
  /**@type {E} @nodts*/
  this.f_exposeElement__java_util_HashSet_;
 }
 //Factory method corresponding to constructor 'HashSet()'.
 /** @nodts @template E @return {!HashSet<E>} */
 static $create__() {
  HashSet.$clinit();
  let $instance = new HashSet();
  $instance.$ctor__java_util_HashSet__void();
  return $instance;
 }
 //Initialization from constructor 'HashSet()'.
 /** @nodts */
 $ctor__java_util_HashSet__void() {
  this.$ctor__java_util_AbstractSet__void();
  this.f_map__java_util_HashSet_ = /**@type {!HashMap<E, *>}*/ (HashMap.$create__());
 }
 //Factory method corresponding to constructor 'HashSet(Collection)'.
 /** @nodts @template E @return {!HashSet<E>} */
 static $create__java_util_Collection(/** Collection<?> */ c) {
  HashSet.$clinit();
  let $instance = new HashSet();
  $instance.$ctor__java_util_HashSet__java_util_Collection__void(c);
  return $instance;
 }
 //Initialization from constructor 'HashSet(Collection)'.
 /** @nodts */
 $ctor__java_util_HashSet__java_util_Collection__void(/** Collection<?> */ c) {
  this.$ctor__java_util_AbstractSet__void();
  this.f_map__java_util_HashSet_ = /**@type {!HashMap<E, *>}*/ (HashMap.$create__int(c.size()));
  this.addAll(c);
 }
 //Factory method corresponding to constructor 'HashSet(int)'.
 /** @nodts @template E @return {!HashSet<E>} */
 static $create__int(/** number */ initialCapacity) {
  HashSet.$clinit();
  let $instance = new HashSet();
  $instance.$ctor__java_util_HashSet__int__void(initialCapacity);
  return $instance;
 }
 //Initialization from constructor 'HashSet(int)'.
 /** @nodts */
 $ctor__java_util_HashSet__int__void(/** number */ initialCapacity) {
  this.$ctor__java_util_AbstractSet__void();
  this.f_map__java_util_HashSet_ = /**@type {!HashMap<E, *>}*/ (HashMap.$create__int(initialCapacity));
 }
 //Factory method corresponding to constructor 'HashSet(int, float)'.
 /** @nodts @template E @return {!HashSet<E>} */
 static $create__int__float(/** number */ initialCapacity, /** number */ loadFactor) {
  HashSet.$clinit();
  let $instance = new HashSet();
  $instance.$ctor__java_util_HashSet__int__float__void(initialCapacity, loadFactor);
  return $instance;
 }
 //Initialization from constructor 'HashSet(int, float)'.
 /** @nodts */
 $ctor__java_util_HashSet__int__float__void(/** number */ initialCapacity, /** number */ loadFactor) {
  this.$ctor__java_util_AbstractSet__void();
  this.f_map__java_util_HashSet_ = /**@type {!HashMap<E, *>}*/ (HashMap.$create__int__float(initialCapacity, loadFactor));
 }
 //Factory method corresponding to constructor 'HashSet(HashMap)'.
 /** @nodts @template E @return {!HashSet<E>} */
 static $create__java_util_HashMap(/** HashMap<E, *> */ map) {
  HashSet.$clinit();
  let $instance = new HashSet();
  $instance.$ctor__java_util_HashSet__java_util_HashMap__void(map);
  return $instance;
 }
 //Initialization from constructor 'HashSet(HashMap)'.
 /** @nodts */
 $ctor__java_util_HashSet__java_util_HashMap__void(/** HashMap<E, *> */ map) {
  this.$ctor__java_util_AbstractSet__void();
  this.f_map__java_util_HashSet_ = map;
 }
 /** @override @return {boolean} */
 add(/** E */ o) {
  let old = this.f_map__java_util_HashSet_.put(o, this);
  return $Equality.$same(old, null);
 }
 /** @override */
 clear() {
  this.f_map__java_util_HashSet_.clear();
 }
 /** @nodts @return {*} */
 m_clone__java_lang_Object() {
  return /**@type {!HashSet<E>}*/ (HashSet.$create__java_util_Collection(this));
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.f_map__java_util_HashSet_.containsKey(o);
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_map__java_util_HashSet_.isEmpty();
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return this.f_map__java_util_HashSet_.keySet().m_iterator__java_util_Iterator();
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  return !$Equality.$same(this.f_map__java_util_HashSet_.remove(o), null);
 }
 /** @override @return {number} */
 size() {
  return this.f_map__java_util_HashSet_.size();
 }
 /** @nodts */
 static $clinit() {
  HashSet.$clinit = () =>{};
  HashSet.$loadModules();
  AbstractSet.$clinit();
  Set.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HashSet;
 }
 
 /** @nodts */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Set.$markImplementor(HashSet);
Cloneable.$markImplementor(HashSet);
Serializable.$markImplementor(HashSet);
$Util.$setClassMetadata(HashSet, 'java.util.HashSet');

exports = HashSet;

//# sourceMappingURL=HashSet.js.map
