goog.module('org.patternfly.dataprovider.DataProvider.Partition$impl');

const AbstractList = goog.require('java.util.AbstractList$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArithmeticException = goog.forwardDeclare('java.lang.ArithmeticException$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @template T
 * @extends {AbstractList<List<T>>}
 */
class Partition extends AbstractList {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<T>} @nodts*/
  this.f_list__org_patternfly_dataprovider_DataProvider_Partition;
  /**@type {number} @nodts*/
  this.f_size__org_patternfly_dataprovider_DataProvider_Partition = 0;
 }
 /** @nodts @return {number} */
 static m_divide__int__int__int(/** number */ p, /** number */ q) {
  if (q == 0) {
   throw $Exceptions.toJs(ArithmeticException.$create__java_lang_String('/ by zero'));
  }
  let div = $Primitives.coerceDivision(p / q);
  let rem = p - Math.imul(q, div) | 0;
  if (rem == 0) {
   return div;
  }
  let signum = 1 | (p ^ q) >> (Integer.f_SIZE__java_lang_Integer - 1 | 0);
  let increment = signum > 0;
  return increment ? div + signum | 0 : div;
 }
 /** @nodts @template T @return {!Partition<T>} */
 static $create__java_util_List__int(/** List<T> */ list, /** number */ size) {
  Partition.$clinit();
  let $instance = new Partition();
  $instance.$ctor__org_patternfly_dataprovider_DataProvider_Partition__java_util_List__int__void(list, size);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_dataprovider_DataProvider_Partition__java_util_List__int__void(/** List<T> */ list, /** number */ size) {
  this.$ctor__java_util_AbstractList__void();
  this.f_list__org_patternfly_dataprovider_DataProvider_Partition = list;
  this.f_size__org_patternfly_dataprovider_DataProvider_Partition = size;
 }
 /** @override @return {List<T>} */
 getAtIndex(/** number */ index) {
  this.m_checkElementIndex__int__int__void_$p_org_patternfly_dataprovider_DataProvider_Partition(index, this.size());
  let start = Math.imul(index, this.f_size__org_patternfly_dataprovider_DataProvider_Partition);
  let end = Math.min(start + this.f_size__org_patternfly_dataprovider_DataProvider_Partition | 0, this.f_list__org_patternfly_dataprovider_DataProvider_Partition.size());
  return this.f_list__org_patternfly_dataprovider_DataProvider_Partition.subList(start, end);
 }
 /** @override @return {number} */
 size() {
  return Partition.m_divide__int__int__int(this.f_list__org_patternfly_dataprovider_DataProvider_Partition.size(), this.f_size__org_patternfly_dataprovider_DataProvider_Partition);
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_list__org_patternfly_dataprovider_DataProvider_Partition.isEmpty();
 }
 /** @nodts */
 m_checkElementIndex__int__int__void_$p_org_patternfly_dataprovider_DataProvider_Partition(/** number */ index, /** number */ size) {
  if (index < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('Index ' + index + ' must not be negative'));
  } else if (index >= size) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('Index (' + index + ') must be less than size (' + size + ')'));
  }
 }
 /** @nodts */
 static $clinit() {
  Partition.$clinit = () =>{};
  Partition.$loadModules();
  AbstractList.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Partition;
 }
 
 /** @nodts */
 static $loadModules() {
  ArithmeticException = goog.module.get('java.lang.ArithmeticException$impl');
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(Partition, 'org.patternfly.dataprovider.DataProvider$Partition');

exports = Partition;

//# sourceMappingURL=DataProvider$Partition.js.map
