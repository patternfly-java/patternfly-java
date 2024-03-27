goog.module('vmbootstrap.CharSequences$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class $CharSequences extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$CharSequences} */
 static $create__() {
  $CharSequences.$clinit();
  let $instance = new $CharSequences();
  $instance.$ctor__javaemul_internal_CharSequences__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_CharSequences__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 static m_length__java_lang_CharSequence__int(/** (CharSequence|string) */ obj) {
  $CharSequences.$clinit();
  if (j_l_String.$isInstance(obj)) {
   let str = /**@type {?string}*/ (obj);
   return j_l_String.m_length__java_lang_String__int(str);
  }
  return obj.m_length__int();
 }
 /** @nodts @return {number} */
 static m_charAt__java_lang_CharSequence__int__char(/** (CharSequence|string) */ obj, /** number */ index) {
  $CharSequences.$clinit();
  if (j_l_String.$isInstance(obj)) {
   let str = /**@type {?string}*/ (obj);
   return j_l_String.m_charAt__java_lang_String__int__char(str, index);
  }
  return obj.m_charAt__int__char(index);
 }
 /** @nodts @return {?string} */
 static m_toString__java_lang_CharSequence__java_lang_String(/** (CharSequence|string) */ obj) {
  $CharSequences.$clinit();
  return obj.toString();
 }
 /** @nodts @return {(CharSequence|string)} */
 static m_subSequence__java_lang_CharSequence__int__int__java_lang_CharSequence(/** (CharSequence|string) */ obj, /** number */ start, /** number */ end) {
  $CharSequences.$clinit();
  if (j_l_String.$isInstance(obj)) {
   let str = /**@type {?string}*/ (obj);
   return j_l_String.m_subSequence__java_lang_String__int__int__java_lang_CharSequence(str, start, end);
  }
  return obj.m_subSequence__int__int__java_lang_CharSequence(start, end);
 }
 /** @nodts */
 static $clinit() {
  $CharSequences.$clinit = () =>{};
  $CharSequences.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $CharSequences;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata($CharSequences, 'javaemul.internal.CharSequences');

exports = $CharSequences;

//# sourceMappingURL=CharSequences.js.map
