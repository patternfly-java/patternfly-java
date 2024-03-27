goog.module('java.lang.Character.CharSequenceAdapter$impl');

const CharSequence = goog.require('java.lang.CharSequence$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');

/**
 * @implements {CharSequence}
 */
class CharSequenceAdapter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_charArray__java_lang_Character_CharSequenceAdapter_;
  /**@type {number} @nodts*/
  this.f_start__java_lang_Character_CharSequenceAdapter_ = 0;
  /**@type {number} @nodts*/
  this.f_end__java_lang_Character_CharSequenceAdapter_ = 0;
 }
 //Factory method corresponding to constructor 'CharSequenceAdapter(char[])'.
 /** @nodts @return {!CharSequenceAdapter} */
 static $create__arrayOf_char(/** Array<number> */ charArray) {
  CharSequenceAdapter.$clinit();
  let $instance = new CharSequenceAdapter();
  $instance.$ctor__java_lang_Character_CharSequenceAdapter__arrayOf_char__void(charArray);
  return $instance;
 }
 //Initialization from constructor 'CharSequenceAdapter(char[])'.
 /** @nodts */
 $ctor__java_lang_Character_CharSequenceAdapter__arrayOf_char__void(/** Array<number> */ charArray) {
  this.$ctor__java_lang_Character_CharSequenceAdapter__arrayOf_char__int__int__void(charArray, 0, charArray.length);
 }
 //Factory method corresponding to constructor 'CharSequenceAdapter(char[], int, int)'.
 /** @nodts @return {!CharSequenceAdapter} */
 static $create__arrayOf_char__int__int(/** Array<number> */ charArray, /** number */ start, /** number */ end) {
  CharSequenceAdapter.$clinit();
  let $instance = new CharSequenceAdapter();
  $instance.$ctor__java_lang_Character_CharSequenceAdapter__arrayOf_char__int__int__void(charArray, start, end);
  return $instance;
 }
 //Initialization from constructor 'CharSequenceAdapter(char[], int, int)'.
 /** @nodts */
 $ctor__java_lang_Character_CharSequenceAdapter__arrayOf_char__int__int__void(/** Array<number> */ charArray, /** number */ start, /** number */ end) {
  this.$ctor__java_lang_Object__void();
  this.f_charArray__java_lang_Character_CharSequenceAdapter_ = charArray;
  this.f_start__java_lang_Character_CharSequenceAdapter_ = start;
  this.f_end__java_lang_Character_CharSequenceAdapter_ = end;
 }
 /** @override @nodts @return {number} */
 m_charAt__int__char(/** number */ index) {
  return this.f_charArray__java_lang_Character_CharSequenceAdapter_[index + this.f_start__java_lang_Character_CharSequenceAdapter_ | 0];
 }
 /** @override @nodts @return {number} */
 m_length__int() {
  return this.f_end__java_lang_Character_CharSequenceAdapter_ - this.f_start__java_lang_Character_CharSequenceAdapter_ | 0;
 }
 /** @override @nodts @return {(CharSequence|string)} */
 m_subSequence__int__int__java_lang_CharSequence(/** number */ start, /** number */ end) {
  return CharSequenceAdapter.$create__arrayOf_char__int__int(this.f_charArray__java_lang_Character_CharSequenceAdapter_, this.f_start__java_lang_Character_CharSequenceAdapter_ + start | 0, this.f_start__java_lang_Character_CharSequenceAdapter_ + end | 0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntStream} */
 m_chars__java_util_stream_IntStream() {
  return CharSequence.m_chars__$default__java_lang_CharSequence__java_util_stream_IntStream(this);
 }
 /** @nodts */
 static $clinit() {
  CharSequenceAdapter.$clinit = () =>{};
  CharSequenceAdapter.$loadModules();
  j_l_Object.$clinit();
  CharSequence.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CharSequenceAdapter;
 }
 
 /** @nodts */
 static $loadModules() {}
}
CharSequence.$markImplementor(CharSequenceAdapter);
$Util.$setClassMetadata(CharSequenceAdapter, 'java.lang.Character$CharSequenceAdapter');

exports = CharSequenceAdapter;

//# sourceMappingURL=Character$CharSequenceAdapter.js.map
