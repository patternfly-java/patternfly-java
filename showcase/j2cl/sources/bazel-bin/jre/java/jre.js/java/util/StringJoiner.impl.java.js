goog.module('java.util.StringJoiner$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');

/**
 * @final
 */
class StringJoiner extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_delimiter__java_util_StringJoiner_;
  /**@type {?string} @nodts*/
  this.f_prefix__java_util_StringJoiner_;
  /**@type {?string} @nodts*/
  this.f_suffix__java_util_StringJoiner_;
  /**@type {StringBuilder} @nodts*/
  this.f_builder__java_util_StringJoiner_;
  /**@type {?string} @nodts*/
  this.f_emptyValue__java_util_StringJoiner_;
 }
 //Factory method corresponding to constructor 'StringJoiner(CharSequence)'.
 /** @nodts @return {!StringJoiner} */
 static $create__java_lang_CharSequence(/** (CharSequence|string) */ delimiter) {
  StringJoiner.$clinit();
  let $instance = new StringJoiner();
  $instance.$ctor__java_util_StringJoiner__java_lang_CharSequence__void(delimiter);
  return $instance;
 }
 //Initialization from constructor 'StringJoiner(CharSequence)'.
 /** @nodts */
 $ctor__java_util_StringJoiner__java_lang_CharSequence__void(/** (CharSequence|string) */ delimiter) {
  this.$ctor__java_util_StringJoiner__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence__void(delimiter, '', '');
 }
 //Factory method corresponding to constructor 'StringJoiner(CharSequence, CharSequence, CharSequence)'.
 /** @nodts @return {!StringJoiner} */
 static $create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(/** (CharSequence|string) */ delimiter, /** (CharSequence|string) */ prefix, /** (CharSequence|string) */ suffix) {
  StringJoiner.$clinit();
  let $instance = new StringJoiner();
  $instance.$ctor__java_util_StringJoiner__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence__void(delimiter, prefix, suffix);
  return $instance;
 }
 //Initialization from constructor 'StringJoiner(CharSequence, CharSequence, CharSequence)'.
 /** @nodts */
 $ctor__java_util_StringJoiner__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence__void(/** (CharSequence|string) */ delimiter, /** (CharSequence|string) */ prefix, /** (CharSequence|string) */ suffix) {
  this.$ctor__java_lang_Object__void();
  this.f_delimiter__java_util_StringJoiner_ = $CharSequences.m_toString__java_lang_CharSequence__java_lang_String(delimiter);
  this.f_prefix__java_util_StringJoiner_ = $CharSequences.m_toString__java_lang_CharSequence__java_lang_String(prefix);
  this.f_suffix__java_util_StringJoiner_ = $CharSequences.m_toString__java_lang_CharSequence__java_lang_String(suffix);
  this.f_emptyValue__java_util_StringJoiner_ = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_prefix__java_util_StringJoiner_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_suffix__java_util_StringJoiner_);
 }
 /** @nodts @return {StringJoiner} */
 m_add__java_lang_CharSequence__java_util_StringJoiner(/** (CharSequence|string) */ newElement) {
  this.m_initBuilderOrAddDelimiter__void_$p_java_util_StringJoiner();
  this.f_builder__java_util_StringJoiner_.m_append__java_lang_CharSequence__java_lang_StringBuilder(newElement);
  return this;
 }
 /** @nodts @return {number} */
 m_length__int() {
  if ($Equality.$same(this.f_builder__java_util_StringJoiner_, null)) {
   return j_l_String.m_length__java_lang_String__int(this.f_emptyValue__java_util_StringJoiner_);
  }
  return this.f_builder__java_util_StringJoiner_.m_length__int() + j_l_String.m_length__java_lang_String__int(this.f_suffix__java_util_StringJoiner_) | 0;
 }
 /** @nodts @return {StringJoiner} */
 m_merge__java_util_StringJoiner__java_util_StringJoiner(/** StringJoiner */ other) {
  if (!$Equality.$same(other.f_builder__java_util_StringJoiner_, null)) {
   let otherLength = other.f_builder__java_util_StringJoiner_.m_length__int();
   this.m_initBuilderOrAddDelimiter__void_$p_java_util_StringJoiner();
   this.f_builder__java_util_StringJoiner_.m_append__java_lang_CharSequence__int__int__java_lang_StringBuilder(other.f_builder__java_util_StringJoiner_, j_l_String.m_length__java_lang_String__int(other.f_prefix__java_util_StringJoiner_), otherLength);
  }
  return this;
 }
 /** @nodts @return {StringJoiner} */
 m_setEmptyValue__java_lang_CharSequence__java_util_StringJoiner(/** (CharSequence|string) */ emptyValue) {
  this.f_emptyValue__java_util_StringJoiner_ = $CharSequences.m_toString__java_lang_CharSequence__java_lang_String(emptyValue);
  return this;
 }
 /** @override @return {?string} */
 toString() {
  if ($Equality.$same(this.f_builder__java_util_StringJoiner_, null)) {
   return this.f_emptyValue__java_util_StringJoiner_;
  } else if (j_l_String.m_isEmpty__java_lang_String__boolean(this.f_suffix__java_util_StringJoiner_)) {
   return this.f_builder__java_util_StringJoiner_.toString();
  } else {
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_builder__java_util_StringJoiner_.toString()) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_suffix__java_util_StringJoiner_);
  }
 }
 /** @nodts */
 m_initBuilderOrAddDelimiter__void_$p_java_util_StringJoiner() {
  if ($Equality.$same(this.f_builder__java_util_StringJoiner_, null)) {
   this.f_builder__java_util_StringJoiner_ = StringBuilder.$create__java_lang_String(this.f_prefix__java_util_StringJoiner_);
  } else {
   this.f_builder__java_util_StringJoiner_.m_append__java_lang_String__java_lang_StringBuilder(this.f_delimiter__java_util_StringJoiner_);
  }
 }
 /** @nodts */
 static $clinit() {
  StringJoiner.$clinit = () =>{};
  StringJoiner.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StringJoiner;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
 }
}
$Util.$setClassMetadata(StringJoiner, 'java.util.StringJoiner');

exports = StringJoiner;

//# sourceMappingURL=StringJoiner.js.map
