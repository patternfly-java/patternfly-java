goog.module('java.lang.StringBuilder$impl');

const AbstractStringBuilder = goog.require('java.lang.AbstractStringBuilder$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuffer = goog.forwardDeclare('java.lang.StringBuffer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');

/**
 * @final
 */
class StringBuilder extends AbstractStringBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'StringBuilder()'.
 /** @nodts @return {!StringBuilder} */
 static $create__() {
  StringBuilder.$clinit();
  let $instance = new StringBuilder();
  $instance.$ctor__java_lang_StringBuilder__void();
  return $instance;
 }
 //Initialization from constructor 'StringBuilder()'.
 /** @nodts */
 $ctor__java_lang_StringBuilder__void() {
  this.$ctor__java_lang_AbstractStringBuilder__java_lang_String__void('');
 }
 //Factory method corresponding to constructor 'StringBuilder(CharSequence)'.
 /** @nodts @return {!StringBuilder} */
 static $create__java_lang_CharSequence(/** (CharSequence|string) */ s) {
  StringBuilder.$clinit();
  let $instance = new StringBuilder();
  $instance.$ctor__java_lang_StringBuilder__java_lang_CharSequence__void(s);
  return $instance;
 }
 //Initialization from constructor 'StringBuilder(CharSequence)'.
 /** @nodts */
 $ctor__java_lang_StringBuilder__java_lang_CharSequence__void(/** (CharSequence|string) */ s) {
  this.$ctor__java_lang_AbstractStringBuilder__java_lang_String__void($CharSequences.m_toString__java_lang_CharSequence__java_lang_String(s));
 }
 //Factory method corresponding to constructor 'StringBuilder(int)'.
 /** @nodts @return {!StringBuilder} */
 static $create__int(/** number */ ignoredCapacity) {
  StringBuilder.$clinit();
  let $instance = new StringBuilder();
  $instance.$ctor__java_lang_StringBuilder__int__void(ignoredCapacity);
  return $instance;
 }
 //Initialization from constructor 'StringBuilder(int)'.
 /** @nodts */
 $ctor__java_lang_StringBuilder__int__void(/** number */ ignoredCapacity) {
  this.$ctor__java_lang_AbstractStringBuilder__java_lang_String__void('');
 }
 //Factory method corresponding to constructor 'StringBuilder(String)'.
 /** @nodts @return {!StringBuilder} */
 static $create__java_lang_String(/** ?string */ s) {
  StringBuilder.$clinit();
  let $instance = new StringBuilder();
  $instance.$ctor__java_lang_StringBuilder__java_lang_String__void(s);
  return $instance;
 }
 //Initialization from constructor 'StringBuilder(String)'.
 /** @nodts */
 $ctor__java_lang_StringBuilder__java_lang_String__void(/** ?string */ s) {
  this.$ctor__java_lang_AbstractStringBuilder__java_lang_String__void(/**@type {?string}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(s), j_l_String)));
 }
 /** @nodts @return {StringBuilder} */
 m_append__boolean__java_lang_StringBuilder(/** boolean */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + x;
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__char__java_lang_StringBuilder(/** number */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__char__java_lang_String(x);
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__arrayOf_char__java_lang_StringBuilder(/** Array<number> */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_valueOf__arrayOf_char__java_lang_String(x));
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__arrayOf_char__int__int__java_lang_StringBuilder(/** Array<number> */ x, /** number */ start, /** number */ len) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_valueOf__arrayOf_char__int__int__java_lang_String(x, start, len));
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__java_lang_CharSequence__java_lang_StringBuilder(/** (CharSequence|string) */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(x);
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__java_lang_CharSequence__int__int__java_lang_StringBuilder(/** (CharSequence|string) */ x, /** number */ start, /** number */ end) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(x), start, end));
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__double__java_lang_StringBuilder(/** number */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + x;
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__float__java_lang_StringBuilder(/** number */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + x;
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__int__java_lang_StringBuilder(/** number */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + x;
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__long__java_lang_StringBuilder(/** !$Long */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + x;
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__java_lang_Object__java_lang_StringBuilder(/** * */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(x);
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__java_lang_String__java_lang_StringBuilder(/** ?string */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(x);
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_append__java_lang_StringBuffer__java_lang_StringBuilder(/** StringBuffer */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(x);
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_appendCodePoint__int__java_lang_StringBuilder(/** number */ x) {
  this.m_appendCodePoint0__int__void_$pp_java_lang(x);
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_delete__int__int__java_lang_StringBuilder(/** number */ start, /** number */ end) {
  this.m_replace0__int__int__java_lang_String__void_$pp_java_lang(start, end, '');
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_deleteCharAt__int__java_lang_StringBuilder(/** number */ start) {
  this.m_replace0__int__int__java_lang_String__void_$pp_java_lang(start, start + 1 | 0, '');
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__boolean__java_lang_StringBuilder(/** number */ index, /** boolean */ x) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__boolean__java_lang_String(x));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__char__java_lang_StringBuilder(/** number */ index, /** number */ x) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__char__java_lang_String(x));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__arrayOf_char__java_lang_StringBuilder(/** number */ index, /** Array<number> */ x) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__arrayOf_char__java_lang_String(x));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__arrayOf_char__int__int__java_lang_StringBuilder(/** number */ index, /** Array<number> */ x, /** number */ offset, /** number */ len) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__arrayOf_char__int__int__java_lang_String(x, offset, len));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__java_lang_CharSequence__java_lang_StringBuilder(/** number */ index, /** (CharSequence|string) */ chars) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__java_lang_Object__java_lang_String(chars));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__java_lang_CharSequence__int__int__java_lang_StringBuilder(/** number */ index, /** (CharSequence|string) */ chars, /** number */ start, /** number */ end) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_substring__java_lang_String__int__int__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(chars), start, end));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__double__java_lang_StringBuilder(/** number */ index, /** number */ x) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__double__java_lang_String(x));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__float__java_lang_StringBuilder(/** number */ index, /** number */ x) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__float__java_lang_String(x));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__int__java_lang_StringBuilder(/** number */ index, /** number */ x) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__int__java_lang_String(x));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__long__java_lang_StringBuilder(/** number */ index, /** !$Long */ x) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__long__java_lang_String(x));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__java_lang_Object__java_lang_StringBuilder(/** number */ index, /** * */ x) {
  return this.m_insert__int__java_lang_String__java_lang_StringBuilder(index, j_l_String.m_valueOf__java_lang_Object__java_lang_String(x));
 }
 /** @nodts @return {StringBuilder} */
 m_insert__int__java_lang_String__java_lang_StringBuilder(/** number */ index, /** ?string */ x) {
  this.m_replace0__int__int__java_lang_String__void_$pp_java_lang(index, index, x);
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_replace__int__int__java_lang_String__java_lang_StringBuilder(/** number */ start, /** number */ end, /** ?string */ toInsert) {
  this.m_replace0__int__int__java_lang_String__void_$pp_java_lang(start, end, toInsert);
  return this;
 }
 /** @nodts @return {StringBuilder} */
 m_reverse__java_lang_StringBuilder() {
  this.m_reverse0__void_$pp_java_lang();
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {StringBuilder} */
 m_append__char__java_lang_Appendable(/** number */ arg0) {
  return this.m_append__char__java_lang_StringBuilder(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {StringBuilder} */
 m_append__java_lang_CharSequence__java_lang_Appendable(/** (CharSequence|string) */ arg0) {
  return this.m_append__java_lang_CharSequence__java_lang_StringBuilder(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {StringBuilder} */
 m_append__java_lang_CharSequence__int__int__java_lang_Appendable(/** (CharSequence|string) */ arg0, /** number */ arg1, /** number */ arg2) {
  return this.m_append__java_lang_CharSequence__int__int__java_lang_StringBuilder(arg0, arg1, arg2);
 }
 /** @nodts */
 static $clinit() {
  StringBuilder.$clinit = () =>{};
  StringBuilder.$loadModules();
  AbstractStringBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StringBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
 }
}
$Util.$setClassMetadata(StringBuilder, 'java.lang.StringBuilder');

exports = StringBuilder;

//# sourceMappingURL=StringBuilder.js.map
