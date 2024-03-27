goog.module('java.lang.CaseMapper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

/**
 * @final
 */
class CaseMapper extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {number} */
 static m_codePointToLowerCase__int__int(/** number */ c) {
  CaseMapper.$clinit();
  return j_l_String.m_codePointAt__java_lang_String__int__int(j_l_String.m_toLowerCase__java_lang_String__java_lang_String(j_l_String.m_fromCodePoint__int__java_lang_String(c)), 0);
 }
 /** @nodts @return {number} */
 static m_codePointToUpperCase__int__int(/** number */ c) {
  CaseMapper.$clinit();
  return j_l_String.m_codePointAt__java_lang_String__int__int(j_l_String.m_toUpperCase__java_lang_String__java_lang_String(j_l_String.m_fromCodePoint__int__java_lang_String(c)), 0);
 }
 /** @nodts @return {number} */
 static m_charToLowerCase__char__char(/** number */ c) {
  CaseMapper.$clinit();
  return j_l_String.m_charAt__java_lang_String__int__char(j_l_String.m_toLowerCase__java_lang_String__java_lang_String(j_l_String.m_valueOf__char__java_lang_String(c)), 0);
 }
 /** @nodts @return {number} */
 static m_charToUpperCase__char__char(/** number */ c) {
  CaseMapper.$clinit();
  return j_l_String.m_charAt__java_lang_String__int__char(j_l_String.m_toUpperCase__java_lang_String__java_lang_String(j_l_String.m_valueOf__char__java_lang_String(c)), 0);
 }
 /** @nodts @return {!CaseMapper} */
 static $create__() {
  let $instance = new CaseMapper();
  $instance.$ctor__java_lang_CaseMapper__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_CaseMapper__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  CaseMapper.$clinit = () =>{};
  CaseMapper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CaseMapper;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(CaseMapper, 'java.lang.CaseMapper');

exports = CaseMapper;

//# sourceMappingURL=CaseMapper.js.map
