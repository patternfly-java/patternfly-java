goog.module('java.lang.Character.BoxedValues$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class BoxedValues extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BoxedValues} */
 static $create__() {
  let $instance = new BoxedValues();
  $instance.$ctor__java_lang_Character_BoxedValues__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Character_BoxedValues__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Character} */
 static m_get__char__java_lang_Character(/** number */ c) {
  BoxedValues.$clinit();
  let result = BoxedValues.f_boxedValues__java_lang_Character_BoxedValues_[c];
  if ($Equality.$same(result, null)) {
   result = $Arrays.$set(BoxedValues.f_boxedValues__java_lang_Character_BoxedValues_, c, Character.$create__char(c));
  }
  return result;
 }
 /** @nodts */
 static $clinit() {
  BoxedValues.$clinit = () =>{};
  BoxedValues.$loadModules();
  j_l_Object.$clinit();
  BoxedValues.f_boxedValues__java_lang_Character_BoxedValues_ = /**@type {!Array<Character>}*/ ($Arrays.$create([128], Character));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedValues;
 }
 
 /** @nodts */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<Character>} @nodts*/
BoxedValues.f_boxedValues__java_lang_Character_BoxedValues_;
$Util.$setClassMetadata(BoxedValues, 'java.lang.Character$BoxedValues');

exports = BoxedValues;

//# sourceMappingURL=Character$BoxedValues.js.map
