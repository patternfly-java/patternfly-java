goog.module('java.util.Comparators$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let NaturalOrderComparator = goog.forwardDeclare('java.util.Comparators.NaturalOrderComparator$impl');
let ReverseNaturalOrderComparator = goog.forwardDeclare('java.util.Comparators.ReverseNaturalOrderComparator$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class Comparators extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_naturalOrder__java_util_Comparator() {
  Comparators.$clinit();
  return /**@type {Comparator<T>}*/ (Comparators.$static_NATURAL_ORDER__java_util_Comparators_);
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_reverseNaturalOrder__java_util_Comparator() {
  Comparators.$clinit();
  return /**@type {Comparator<T>}*/ (Comparators.$static_REVERSE_NATURAL_ORDER__java_util_Comparators_);
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_nullToNaturalOrder__java_util_Comparator__java_util_Comparator(/** Comparator<T> */ cmp) {
  Comparators.$clinit();
  return $Equality.$same(cmp, null) ? /**@type {Comparator<T>}*/ (Comparators.f_INTERNAL_NATURAL_ORDER__java_util_Comparators_) : cmp;
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_naturalOrderToNull__java_util_Comparator__java_util_Comparator(/** Comparator<T> */ cmp) {
  Comparators.$clinit();
  return $Equality.$same(cmp, Comparators.f_INTERNAL_NATURAL_ORDER__java_util_Comparators_) ? null : cmp;
 }
 /** @nodts @return {boolean} */
 static m_isNaturalOrder__java_util_Comparator__boolean(/** Comparator<?> */ cmp) {
  Comparators.$clinit();
  return $Equality.$same(cmp, Comparators.f_INTERNAL_NATURAL_ORDER__java_util_Comparators_);
 }
 /** @nodts @return {!Comparators} */
 static $create__() {
  let $instance = new Comparators();
  $instance.$ctor__java_util_Comparators__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Comparators__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Comparator<(Comparable<*>|boolean|number|string)>} */
 static get f_NATURAL_ORDER__java_util_Comparators_() {
  return (Comparators.$clinit(), Comparators.$static_NATURAL_ORDER__java_util_Comparators_);
 }
 /** @nodts @return {Comparator<(Comparable<*>|boolean|number|string)>} */
 static get f_REVERSE_NATURAL_ORDER__java_util_Comparators_() {
  return (Comparators.$clinit(), Comparators.$static_REVERSE_NATURAL_ORDER__java_util_Comparators_);
 }
 /** @nodts */
 static $clinit() {
  Comparators.$clinit = () =>{};
  Comparators.$loadModules();
  j_l_Object.$clinit();
  Comparators.f_INTERNAL_NATURAL_ORDER__java_util_Comparators_ = NaturalOrderComparator.$create__();
  Comparators.$static_NATURAL_ORDER__java_util_Comparators_ = NaturalOrderComparator.$create__();
  Comparators.$static_REVERSE_NATURAL_ORDER__java_util_Comparators_ = ReverseNaturalOrderComparator.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Comparators;
 }
 
 /** @nodts */
 static $loadModules() {
  NaturalOrderComparator = goog.module.get('java.util.Comparators.NaturalOrderComparator$impl');
  ReverseNaturalOrderComparator = goog.module.get('java.util.Comparators.ReverseNaturalOrderComparator$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
/**@type {Comparator<(Comparable<*>|boolean|number|string)>} @nodts*/
Comparators.f_INTERNAL_NATURAL_ORDER__java_util_Comparators_;
/**@private {Comparator<(Comparable<*>|boolean|number|string)>} @nodts*/
Comparators.$static_NATURAL_ORDER__java_util_Comparators_;
/**@private {Comparator<(Comparable<*>|boolean|number|string)>} @nodts*/
Comparators.$static_REVERSE_NATURAL_ORDER__java_util_Comparators_;
$Util.$setClassMetadata(Comparators, 'java.util.Comparators');

exports = Comparators;

//# sourceMappingURL=Comparators.js.map
