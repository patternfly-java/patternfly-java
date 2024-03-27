goog.module('org.gwtproject.event.shared.UmbrellaException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class UmbrellaException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Set<Throwable>} @nodts*/
  this.f_causes__org_gwtproject_event_shared_UmbrellaException_;
 }
 /** @nodts @return {Throwable} */
 static m_makeCause__java_util_Set__java_lang_Throwable(/** Set<Throwable> */ causes) {
  UmbrellaException.$clinit();
  return causes.isEmpty() ? null : /**@type {Throwable}*/ ($Casts.$to(causes.m_iterator__java_util_Iterator().m_next__java_lang_Object(), Throwable));
 }
 /** @nodts @return {?string} */
 static m_makeMessage__java_util_Set__java_lang_String(/** Set<Throwable> */ causes) {
  UmbrellaException.$clinit();
  let count = causes.size();
  if (count == 0) {
   return null;
  }
  let b = StringBuilder.$create__java_lang_String(count == 1 ? UmbrellaException.f_ONE__org_gwtproject_event_shared_UmbrellaException : count + j_l_String.m_valueOf__java_lang_Object__java_lang_String(UmbrellaException.f_MULTIPLE__org_gwtproject_event_shared_UmbrellaException));
  let first = true;
  for (let $iterator = causes.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let t = /**@type {Throwable}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Throwable));
   {
    if (first) {
     first = false;
    } else {
     b.m_append__java_lang_String__java_lang_StringBuilder('; ');
    }
    b.m_append__java_lang_String__java_lang_StringBuilder(t.m_getMessage__java_lang_String());
   }
  }
  return b.toString();
 }
 //Factory method corresponding to constructor 'UmbrellaException(Set)'.
 /** @nodts @return {!UmbrellaException} */
 static $create__java_util_Set(/** Set<Throwable> */ causes) {
  UmbrellaException.$clinit();
  let $instance = new UmbrellaException();
  $instance.$ctor__org_gwtproject_event_shared_UmbrellaException__java_util_Set__void(causes);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UmbrellaException(Set)'.
 /** @nodts */
 $ctor__org_gwtproject_event_shared_UmbrellaException__java_util_Set__void(/** Set<Throwable> */ causes) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(UmbrellaException.m_makeMessage__java_util_Set__java_lang_String(causes), UmbrellaException.m_makeCause__java_util_Set__java_lang_Throwable(causes));
  this.f_causes__org_gwtproject_event_shared_UmbrellaException_ = causes;
  let i = 0;
  for (let $iterator = causes.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let cause = /**@type {Throwable}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Throwable));
   {
    let /** number */ $value;
    if (($value = i, i = i + 1 | 0, $value) == 0) {
     continue;
    }
    this.m_addSuppressed__java_lang_Throwable__void(cause);
   }
  }
 }
 //Factory method corresponding to constructor 'UmbrellaException()'.
 /** @nodts @return {!UmbrellaException} */
 static $create__() {
  UmbrellaException.$clinit();
  let $instance = new UmbrellaException();
  $instance.$ctor__org_gwtproject_event_shared_UmbrellaException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UmbrellaException()'.
 /** @nodts */
 $ctor__org_gwtproject_event_shared_UmbrellaException__void() {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(UmbrellaException.f_MULTIPLE__org_gwtproject_event_shared_UmbrellaException);
  this.f_causes__org_gwtproject_event_shared_UmbrellaException_ = /**@type {Set<Throwable>}*/ (Collections.m_emptySet__java_util_Set());
 }
 /** @nodts @return {Set<Throwable>} */
 m_getCauses__java_util_Set() {
  return this.f_causes__org_gwtproject_event_shared_UmbrellaException_;
 }
 /** @nodts */
 static $clinit() {
  UmbrellaException.$clinit = () =>{};
  UmbrellaException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UmbrellaException;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Throwable = goog.module.get('java.lang.Throwable$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
UmbrellaException.f_MULTIPLE__org_gwtproject_event_shared_UmbrellaException = ' exceptions caught: ';
/**@const {string} @nodts*/
UmbrellaException.f_ONE__org_gwtproject_event_shared_UmbrellaException = 'Exception caught: ';
$Util.$setClassMetadata(UmbrellaException, 'org.gwtproject.event.shared.UmbrellaException');

exports = UmbrellaException;

//# sourceMappingURL=UmbrellaException.js.map
