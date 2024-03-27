goog.module('java.util.LinkedHashSet$impl');

const Cloneable = goog.require('java.lang.Cloneable$impl');
const HashSet = goog.require('java.util.HashSet$impl');
const Set = goog.require('java.util.Set$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');

/**
 * @template E
 * @extends {HashSet<E>}
 * @implements {Set<E>}
 * @implements {Cloneable}
 */
class LinkedHashSet extends HashSet {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'LinkedHashSet()'.
 /** @nodts @template E @return {!LinkedHashSet<E>} */
 static $create__() {
  LinkedHashSet.$clinit();
  let $instance = new LinkedHashSet();
  $instance.$ctor__java_util_LinkedHashSet__void();
  return $instance;
 }
 //Initialization from constructor 'LinkedHashSet()'.
 /** @nodts */
 $ctor__java_util_LinkedHashSet__void() {
  this.$ctor__java_util_HashSet__java_util_HashMap__void(/**@type {!LinkedHashMap<E, *>}*/ (LinkedHashMap.$create__()));
 }
 //Factory method corresponding to constructor 'LinkedHashSet(Collection)'.
 /** @nodts @template E @return {!LinkedHashSet<E>} */
 static $create__java_util_Collection(/** Collection<?> */ c) {
  LinkedHashSet.$clinit();
  let $instance = new LinkedHashSet();
  $instance.$ctor__java_util_LinkedHashSet__java_util_Collection__void(c);
  return $instance;
 }
 //Initialization from constructor 'LinkedHashSet(Collection)'.
 /** @nodts */
 $ctor__java_util_LinkedHashSet__java_util_Collection__void(/** Collection<?> */ c) {
  this.$ctor__java_util_HashSet__java_util_HashMap__void(/**@type {!LinkedHashMap<E, *>}*/ (LinkedHashMap.$create__()));
  this.addAll(c);
 }
 //Factory method corresponding to constructor 'LinkedHashSet(int)'.
 /** @nodts @template E @return {!LinkedHashSet<E>} */
 static $create__int(/** number */ ignored) {
  LinkedHashSet.$clinit();
  let $instance = new LinkedHashSet();
  $instance.$ctor__java_util_LinkedHashSet__int__void(ignored);
  return $instance;
 }
 //Initialization from constructor 'LinkedHashSet(int)'.
 /** @nodts */
 $ctor__java_util_LinkedHashSet__int__void(/** number */ ignored) {
  this.$ctor__java_util_HashSet__java_util_HashMap__void(/**@type {!LinkedHashMap<E, *>}*/ (LinkedHashMap.$create__int(ignored)));
 }
 //Factory method corresponding to constructor 'LinkedHashSet(int, float)'.
 /** @nodts @template E @return {!LinkedHashSet<E>} */
 static $create__int__float(/** number */ ignored, /** number */ alsoIgnored) {
  LinkedHashSet.$clinit();
  let $instance = new LinkedHashSet();
  $instance.$ctor__java_util_LinkedHashSet__int__float__void(ignored, alsoIgnored);
  return $instance;
 }
 //Initialization from constructor 'LinkedHashSet(int, float)'.
 /** @nodts */
 $ctor__java_util_LinkedHashSet__int__float__void(/** number */ ignored, /** number */ alsoIgnored) {
  this.$ctor__java_util_HashSet__java_util_HashMap__void(/**@type {!LinkedHashMap<E, *>}*/ (LinkedHashMap.$create__int__float(ignored, alsoIgnored)));
 }
 /** @override @nodts @return {*} */
 m_clone__java_lang_Object() {
  return /**@type {!LinkedHashSet<E>}*/ (LinkedHashSet.$create__java_util_Collection(this));
 }
 /** @nodts */
 static $clinit() {
  LinkedHashSet.$clinit = () =>{};
  LinkedHashSet.$loadModules();
  HashSet.$clinit();
  Set.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LinkedHashSet;
 }
 
 /** @nodts */
 static $loadModules() {
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
 }
}
Set.$markImplementor(LinkedHashSet);
Cloneable.$markImplementor(LinkedHashSet);
$Util.$setClassMetadata(LinkedHashSet, 'java.util.LinkedHashSet');

exports = LinkedHashSet;

//# sourceMappingURL=LinkedHashSet.js.map
