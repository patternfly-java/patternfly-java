goog.module('java.nio.charset.Charset$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AvailableCharsets = goog.forwardDeclare('java.nio.charset.Charset.AvailableCharsets$impl');
let UnsupportedCharsetException = goog.forwardDeclare('java.nio.charset.UnsupportedCharsetException$impl');
let SortedMap = goog.forwardDeclare('java.util.SortedMap$impl');
let EmulatedCharset = goog.forwardDeclare('javaemul.internal.EmulatedCharset$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @implements {Comparable<Charset>}
 */
class Charset extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__java_nio_charset_Charset_;
 }
 /** @nodts @return {SortedMap<?string, Charset>} */
 static m_availableCharsets__java_util_SortedMap() {
  Charset.$clinit();
  return AvailableCharsets.f_CHARSETS__java_nio_charset_Charset_AvailableCharsets_;
 }
 /** @nodts @return {Charset} */
 static m_defaultCharset__java_nio_charset_Charset() {
  Charset.$clinit();
  return EmulatedCharset.f_UTF_8__javaemul_internal_EmulatedCharset;
 }
 /** @nodts @return {Charset} */
 static m_forName__java_lang_String__java_nio_charset_Charset(/** ?string */ charsetName) {
  Charset.$clinit();
  InternalPreconditions.m_checkArgument__boolean__java_lang_Object__void(!$Equality.$same(charsetName, null), 'Null charset name');
  charsetName = j_l_String.m_toUpperCase__java_lang_String__java_lang_String(charsetName);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(EmulatedCharset.f_ISO_8859_1__javaemul_internal_EmulatedCharset.m_name__java_lang_String(), charsetName)) {
   return EmulatedCharset.f_ISO_8859_1__javaemul_internal_EmulatedCharset;
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(EmulatedCharset.f_ISO_LATIN_1__javaemul_internal_EmulatedCharset.m_name__java_lang_String(), charsetName)) {
   return EmulatedCharset.f_ISO_LATIN_1__javaemul_internal_EmulatedCharset;
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(EmulatedCharset.f_UTF_8__javaemul_internal_EmulatedCharset.m_name__java_lang_String(), charsetName)) {
   return EmulatedCharset.f_UTF_8__javaemul_internal_EmulatedCharset;
  }
  throw $Exceptions.toJs(UnsupportedCharsetException.$create__java_lang_String(charsetName));
 }
 /** @nodts */
 $ctor__java_nio_charset_Charset__java_lang_String__arrayOf_java_lang_String__void(/** ?string */ name, /** Array<?string> */ aliasesIgnored) {
  this.$ctor__java_lang_Object__void();
  this.f_name__java_nio_charset_Charset_ = name;
 }
 /** @final @nodts @return {?string} */
 m_name__java_lang_String() {
  return this.f_name__java_nio_charset_Charset_;
 }
 /** @final @nodts @return {number} */
 m_compareTo__java_nio_charset_Charset__int(/** Charset */ that) {
  return j_l_String.m_compareToIgnoreCase__java_lang_String__java_lang_String__int(this.f_name__java_nio_charset_Charset_, that.f_name__java_nio_charset_Charset_);
 }
 /** @final @override @return {number} */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String__int(this.f_name__java_nio_charset_Charset_);
 }
 /** @final @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(o, this)) {
   return true;
  }
  if (!Charset.$isInstance(o)) {
   return false;
  }
  let that = /**@type {Charset}*/ ($Casts.$to(o, Charset));
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(this.f_name__java_nio_charset_Charset_, that.f_name__java_nio_charset_Charset_);
 }
 /** @final @override @return {?string} */
 toString() {
  return this.f_name__java_nio_charset_Charset_;
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** Charset */ arg0) {
  return this.m_compareTo__java_nio_charset_Charset__int(/**@type {Charset}*/ ($Casts.$to(arg0, Charset)));
 }
 /** @nodts */
 static $clinit() {
  Charset.$clinit = () =>{};
  Charset.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Charset;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  AvailableCharsets = goog.module.get('java.nio.charset.Charset.AvailableCharsets$impl');
  UnsupportedCharsetException = goog.module.get('java.nio.charset.UnsupportedCharsetException$impl');
  EmulatedCharset = goog.module.get('javaemul.internal.EmulatedCharset$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Comparable.$markImplementor(Charset);
$Util.$setClassMetadata(Charset, 'java.nio.charset.Charset');

exports = Charset;

//# sourceMappingURL=Charset.js.map
