goog.module('org.patternfly.core.Tuples$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template K, V
 * @implements {Iterable<Tuple<K, V>>}
 */
class Tuples extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<Tuple<K, V>>} @nodts*/
  this.f_tuples__org_patternfly_core_Tuples_;
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key, /** V_1 */ value) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key, value)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key1, /** V_1 */ value1, /** K_1 */ key2, /** V_1 */ value2) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key1, value1)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key2, value2)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key1, /** V_1 */ value1, /** K_1 */ key2, /** V_1 */ value2, /** K_1 */ key3, /** V_1 */ value3) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key1, value1)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key2, value2)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key3, value3)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key1, /** V_1 */ value1, /** K_1 */ key2, /** V_1 */ value2, /** K_1 */ key3, /** V_1 */ value3, /** K_1 */ key4, /** V_1 */ value4) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key1, value1)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key2, value2)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key3, value3)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key4, value4)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key1, /** V_1 */ value1, /** K_1 */ key2, /** V_1 */ value2, /** K_1 */ key3, /** V_1 */ value3, /** K_1 */ key4, /** V_1 */ value4, /** K_1 */ key5, /** V_1 */ value5) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key1, value1)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key2, value2)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key3, value3)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key4, value4)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key5, value5)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key1, /** V_1 */ value1, /** K_1 */ key2, /** V_1 */ value2, /** K_1 */ key3, /** V_1 */ value3, /** K_1 */ key4, /** V_1 */ value4, /** K_1 */ key5, /** V_1 */ value5, /** K_1 */ key6, /** V_1 */ value6) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key1, value1)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key2, value2)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key3, value3)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key4, value4)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key5, value5)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key6, value6)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key1, /** V_1 */ value1, /** K_1 */ key2, /** V_1 */ value2, /** K_1 */ key3, /** V_1 */ value3, /** K_1 */ key4, /** V_1 */ value4, /** K_1 */ key5, /** V_1 */ value5, /** K_1 */ key6, /** V_1 */ value6, /** K_1 */ key7, /** V_1 */ value7) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key1, value1)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key2, value2)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key3, value3)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key4, value4)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key5, value5)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key6, value6)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key7, value7)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key1, /** V_1 */ value1, /** K_1 */ key2, /** V_1 */ value2, /** K_1 */ key3, /** V_1 */ value3, /** K_1 */ key4, /** V_1 */ value4, /** K_1 */ key5, /** V_1 */ value5, /** K_1 */ key6, /** V_1 */ value6, /** K_1 */ key7, /** V_1 */ value7, /** K_1 */ key8, /** V_1 */ value8) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key1, value1)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key2, value2)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key3, value3)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key4, value4)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key5, value5)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key6, value6)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key7, value7)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key8, value8)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key1, /** V_1 */ value1, /** K_1 */ key2, /** V_1 */ value2, /** K_1 */ key3, /** V_1 */ value3, /** K_1 */ key4, /** V_1 */ value4, /** K_1 */ key5, /** V_1 */ value5, /** K_1 */ key6, /** V_1 */ value6, /** K_1 */ key7, /** V_1 */ value7, /** K_1 */ key8, /** V_1 */ value8, /** K_1 */ key9, /** V_1 */ value9) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key1, value1)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key2, value2)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key3, value3)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key4, value4)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key5, value5)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key6, value6)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key7, value7)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key8, value8)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key9, value9)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(/** K_1 */ key1, /** V_1 */ value1, /** K_1 */ key2, /** V_1 */ value2, /** K_1 */ key3, /** V_1 */ value3, /** K_1 */ key4, /** V_1 */ value4, /** K_1 */ key5, /** V_1 */ value5, /** K_1 */ key6, /** V_1 */ value6, /** K_1 */ key7, /** V_1 */ value7, /** K_1 */ key8, /** V_1 */ value8, /** K_1 */ key9, /** V_1 */ value9, /** K_1 */ key10, /** V_1 */ value10) {
  Tuples.$clinit();
  let tuples = /**@type {!ArrayList<Tuple<K_1, V_1>>}*/ (ArrayList.$create__());
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key1, value1)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key2, value2)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key3, value3)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key4, value4)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key5, value5)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key6, value6)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key7, value7)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key8, value8)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key9, value9)));
  tuples.add(/**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key10, value10)));
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K_1, V_1 @return {Tuples<K_1, V_1>} */
 static m_tuples__java_util_List__org_patternfly_core_Tuples(/** List<Tuple<K_1, V_1>> */ tuples) {
  Tuples.$clinit();
  return /**@type {!Tuples<K_1, V_1>}*/ (Tuples.$create__java_lang_Iterable(tuples));
 }
 /** @nodts @template K, V @return {!Tuples<K, V>} */
 static $create__java_lang_Iterable(/** Iterable<Tuple<K, V>> */ tuples) {
  Tuples.$clinit();
  let $instance = new Tuples();
  $instance.$ctor__org_patternfly_core_Tuples__java_lang_Iterable__void(tuples);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_Tuples__java_lang_Iterable__void(/** Iterable<Tuple<K, V>> */ tuples) {
  this.$ctor__java_lang_Object__void();
  this.f_tuples__org_patternfly_core_Tuples_ = /**@type {!ArrayList<Tuple<K, V>>}*/ (ArrayList.$create__());
  if (!$Equality.$same(tuples, null)) {
   for (let $iterator = tuples.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let tuple = /**@type {Tuple<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     this.f_tuples__org_patternfly_core_Tuples_.add(tuple);
    }
   }
  }
 }
 /** @override @return {?string} */
 toString() {
  return /**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (this.f_tuples__org_patternfly_core_Tuples_.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {Tuple}*/ ($Casts.$to(arg0, Tuple));
   return arg0_1.toString();
  }))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence__java_util_stream_Collector(', ', '[', ']')), j_l_String));
 }
 /** @nodts @return {boolean} */
 m_hasKey__java_lang_Object__boolean(/** K */ key) {
  return !$Equality.$same(this.m_findTuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple_$p_org_patternfly_core_Tuples(key, null), null);
 }
 /** @nodts @return {boolean} */
 m_hasValue__java_lang_Object__boolean(/** V */ value) {
  return !$Equality.$same(this.m_findTuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple_$p_org_patternfly_core_Tuples(null, value), null);
 }
 /** @nodts @return {K} */
 m_key__java_lang_Object__java_lang_Object(/** V */ value) {
  let tuple = this.m_findTuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple_$p_org_patternfly_core_Tuples(null, value);
  return !$Equality.$same(tuple, null) ? tuple.f_key__org_patternfly_core_Tuple : null;
 }
 /** @nodts @return {V} */
 m_value__java_lang_Object__java_lang_Object(/** K */ key) {
  let tuple = this.m_findTuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple_$p_org_patternfly_core_Tuples(key, null);
  return !$Equality.$same(tuple, null) ? tuple.f_value__org_patternfly_core_Tuple : null;
 }
 /** @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_tuples__org_patternfly_core_Tuples_.isEmpty();
 }
 /** @nodts @return {number} */
 m_size__int() {
  return this.f_tuples__org_patternfly_core_Tuples_.size();
 }
 /** @override @nodts @return {Iterator<Tuple<K, V>>} */
 m_iterator__java_util_Iterator() {
  return this.f_tuples__org_patternfly_core_Tuples_.m_iterator__java_util_Iterator();
 }
 /** @nodts @return {Stream<Tuple<K, V>>} */
 m_stream__java_util_stream_Stream() {
  return /**@type {Stream<Tuple<K, V>>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(this.m_spliterator__java_util_Spliterator(), false));
 }
 /** @nodts */
 m_add__java_lang_Object__java_lang_Object__void(/** K */ key, /** V */ value) {
  this.f_tuples__org_patternfly_core_Tuples_.add(/**@type {Tuple<K, V>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(key, value)));
 }
 /** @nodts @return {Tuple<K, V>} */
 m_findTuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple_$p_org_patternfly_core_Tuples(/** K */ key, /** V */ value) {
  if (!$Equality.$same(key, null)) {
   for (let $iterator = this.f_tuples__org_patternfly_core_Tuples_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let tuple = /**@type {Tuple<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     if ($Objects.m_equals__java_lang_Object__java_lang_Object__boolean(key, tuple.f_key__org_patternfly_core_Tuple)) {
      return tuple;
     }
    }
   }
  } else if (!$Equality.$same(value, null)) {
   for (let $iterator_1 = this.f_tuples__org_patternfly_core_Tuples_.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let tuple_1 = /**@type {Tuple<K, V>}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), Tuple));
    {
     if ($Objects.m_equals__java_lang_Object__java_lang_Object__boolean(value, tuple_1.f_value__org_patternfly_core_Tuple)) {
      return tuple_1;
     }
    }
   }
  }
  return null;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<Tuple<K, V>>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<Tuple<K, V>>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  Tuples.$clinit = () =>{};
  Tuples.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tuples;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Iterable.$markImplementor(Tuples);
$Util.$setClassMetadata(Tuples, 'org.patternfly.core.Tuples');

exports = Tuples;

//# sourceMappingURL=Tuples.js.map
