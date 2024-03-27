goog.module('javaemul.internal.StringUtil$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');

/**
 * @final
 */
class StringUtil extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {boolean} */
 static m_isWhitespace__java_lang_String__boolean(/** ?string */ str) {
  StringUtil.$clinit();
  if ($Equality.$same(StringUtil.f_whitespaceRegex__javaemul_internal_StringUtil_, null)) {
   StringUtil.f_whitespaceRegex__javaemul_internal_StringUtil_ = new RegExp('^(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(StringUtil.f_whitespaceRegexStr__javaemul_internal_StringUtil_) + ')+$');
  }
  return StringUtil.f_whitespaceRegex__javaemul_internal_StringUtil_.test(str);
 }
 /** @nodts @return {boolean} */
 static m_isSpace__java_lang_String__boolean(/** ?string */ str) {
  StringUtil.$clinit();
  if ($Equality.$same(StringUtil.f_spaceRegex__javaemul_internal_StringUtil_, null)) {
   StringUtil.f_spaceRegex__javaemul_internal_StringUtil_ = new RegExp('^(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(StringUtil.f_spaceRegexStr__javaemul_internal_StringUtil_) + ')+$');
  }
  return StringUtil.f_spaceRegex__javaemul_internal_StringUtil_.test(str);
 }
 /** @nodts @return {boolean} */
 static m_isWhitespaceOrSpace__java_lang_String__boolean(/** ?string */ str) {
  StringUtil.$clinit();
  if ($Equality.$same(StringUtil.f_whitespaceOrSpaceRegex__javaemul_internal_StringUtil_, null)) {
   StringUtil.f_whitespaceOrSpaceRegex__javaemul_internal_StringUtil_ = new RegExp('^(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(StringUtil.f_whitespaceRegexStr__javaemul_internal_StringUtil_) + '|' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(StringUtil.f_spaceRegexStr__javaemul_internal_StringUtil_) + ')+$');
  }
  return StringUtil.f_whitespaceOrSpaceRegex__javaemul_internal_StringUtil_.test(str);
 }
 /** @nodts @return {?string} */
 static m_replace__java_lang_String__char__char__boolean__java_lang_String(/** ?string */ str, /** number */ from, /** number */ to, /** boolean */ ignoreCase) {
  StringUtil.$clinit();
  return StringUtil.m_nativeReplace__java_lang_String__java_lang_String__char__boolean__boolean__java_lang_String(str, StringUtil.m_escapeForRegExpSearch__char__java_lang_String(from), to, true, ignoreCase);
 }
 /** @nodts @return {?string} */
 static m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence__boolean__java_lang_String(/** ?string */ str, /** (CharSequence|string) */ from, /** (CharSequence|string) */ to, /** boolean */ ignoreCase) {
  StringUtil.$clinit();
  return StringUtil.m_nativeReplace__java_lang_String__java_lang_String__java_lang_String__boolean__boolean__java_lang_String(str, StringUtil.m_escapeForRegExpSearch__java_lang_CharSequence__java_lang_String(from), StringUtil.m_escapeForRegExpSearch__java_lang_CharSequence__java_lang_String(to), true, ignoreCase);
 }
 /** @nodts @return {?string} */
 static m_replaceAll__java_lang_String__java_lang_String__java_lang_String__boolean__java_lang_String(/** ?string */ str, /** ?string */ regex, /** ?string */ replace, /** boolean */ ignoreCase) {
  StringUtil.$clinit();
  return StringUtil.m_nativeReplace__java_lang_String__java_lang_String__java_lang_String__boolean__boolean__java_lang_String(str, regex, replace, true, ignoreCase);
 }
 /** @nodts @return {?string} */
 static m_replaceFirst__java_lang_String__java_lang_String__java_lang_String__boolean__java_lang_String(/** ?string */ str, /** ?string */ regex, /** ?string */ replace, /** boolean */ ignoreCase) {
  StringUtil.$clinit();
  return StringUtil.m_nativeReplace__java_lang_String__java_lang_String__java_lang_String__boolean__boolean__java_lang_String(str, regex, replace, false, ignoreCase);
 }
 /** @nodts @return {?string} */
 static m_replaceFirstLiteral__java_lang_String__char__char__boolean__java_lang_String(/** ?string */ str, /** number */ from, /** number */ to, /** boolean */ ignoreCase) {
  StringUtil.$clinit();
  return StringUtil.m_nativeReplace__java_lang_String__java_lang_String__char__boolean__boolean__java_lang_String(str, StringUtil.m_escapeForRegExpSearch__char__java_lang_String(from), to, false, ignoreCase);
 }
 /** @nodts @return {?string} */
 static m_replaceFirstLiteral__java_lang_String__java_lang_CharSequence__java_lang_CharSequence__boolean__java_lang_String(/** ?string */ str, /** (CharSequence|string) */ from, /** (CharSequence|string) */ to, /** boolean */ ignoreCase) {
  StringUtil.$clinit();
  return StringUtil.m_nativeReplace__java_lang_String__java_lang_String__java_lang_String__boolean__boolean__java_lang_String(str, StringUtil.m_escapeForRegExpSearch__java_lang_CharSequence__java_lang_String(from), StringUtil.m_escapeForRegExpReplacement__java_lang_CharSequence__java_lang_String(to), false, ignoreCase);
 }
 /** @nodts @return {?string} */
 static m_nativeReplace__java_lang_String__java_lang_String__java_lang_String__boolean__boolean__java_lang_String(/** ?string */ str, /** ?string */ regex, /** ?string */ replace, /** boolean */ replaceAll, /** boolean */ ignoreCase) {
  let flags = j_l_String.m_valueOf__java_lang_Object__java_lang_String(replaceAll ? 'g' : '') + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ignoreCase ? 'i' : '');
  return j_l_String.m_nativeReplace__java_lang_String__javaemul_internal_NativeRegExp__java_lang_String__java_lang_String(str, new RegExp(regex, flags), StringUtil.m_translateReplaceString__java_lang_String__java_lang_String(replace));
 }
 /** @nodts @return {?string} */
 static m_nativeReplace__java_lang_String__java_lang_String__char__boolean__boolean__java_lang_String(/** ?string */ str, /** ?string */ regex, /** number */ replace, /** boolean */ replaceAll, /** boolean */ ignoreCase) {
  let flags = j_l_String.m_valueOf__java_lang_Object__java_lang_String(replaceAll ? 'g' : '') + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ignoreCase ? 'i' : '');
  return j_l_String.m_nativeReplace__java_lang_String__javaemul_internal_NativeRegExp__char__java_lang_String(str, new RegExp(regex, flags), replace);
 }
 /** @nodts @return {?string} */
 static m_translateReplaceString__java_lang_String__java_lang_String(/** ?string */ replaceStr) {
  let pos = 0;
  while (0 <= (pos = j_l_String.m_indexOf__java_lang_String__java_lang_String__int__int(replaceStr, '\\', pos))) {
   if (j_l_String.m_charAt__java_lang_String__int__char(replaceStr, pos + 1 | 0) == 36 /* '$' */) {
    replaceStr = j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(replaceStr, 0, pos)) + '$' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__java_lang_String(replaceStr, pos = pos + 1 | 0));
   } else {
    replaceStr = j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(replaceStr, 0, pos)) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__java_lang_String(replaceStr, pos = pos + 1 | 0));
   }
  }
  return replaceStr;
 }
 /** @nodts @return {?string} */
 static m_escapeForRegExpSearch__char__java_lang_String(/** number */ c) {
  let hex = Integer.m_toHexString__int__java_lang_String(c);
  return '\\u' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__java_lang_String('0000', j_l_String.m_length__java_lang_String__int(hex))) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(hex);
 }
 /** @nodts @return {?string} */
 static m_escapeForRegExpSearch__java_lang_CharSequence__java_lang_String(/** (CharSequence|string) */ str) {
  return j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String($CharSequences.m_toString__java_lang_CharSequence__java_lang_String(str), '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
 }
 /** @nodts @return {?string} */
 static m_escapeForRegExpReplacement__java_lang_CharSequence__java_lang_String(/** (CharSequence|string) */ str) {
  return j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String(j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String(j_l_String.m_toString__java_lang_String__java_lang_String($CharSequences.m_toString__java_lang_CharSequence__java_lang_String(str)), '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
 }
 /** @nodts @return {!StringUtil} */
 static $create__() {
  let $instance = new StringUtil();
  $instance.$ctor__javaemul_internal_StringUtil__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_StringUtil__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  StringUtil.$clinit = () =>{};
  StringUtil.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StringUtil;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
 }
}
/**@const {string} @nodts*/
StringUtil.f_whitespaceRegexStr__javaemul_internal_StringUtil_ = '[\\u1680\\u180E\\u2000-\\u2006\\u2008-\\u200A\\u2028\\u2029\\u205F\\u3000\\uFEFF]|[\\t-\\r ]|[\\x1C-\\x1F]';
/**@type {RegExp} @nodts*/
StringUtil.f_whitespaceRegex__javaemul_internal_StringUtil_;
/**@const {string} @nodts*/
StringUtil.f_spaceRegexStr__javaemul_internal_StringUtil_ = '[\\u0020\\u00A0\\u1680\\u2000-\\u200A\\u202F\\u2028\\u2029\\u205F\\u3000]';
/**@type {RegExp} @nodts*/
StringUtil.f_spaceRegex__javaemul_internal_StringUtil_;
/**@type {RegExp} @nodts*/
StringUtil.f_whitespaceOrSpaceRegex__javaemul_internal_StringUtil_;
$Util.$setClassMetadata(StringUtil, 'javaemul.internal.StringUtil');

exports = StringUtil;

//# sourceMappingURL=StringUtil.js.map
