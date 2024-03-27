goog.module('java.lang.Short.BoxedValues$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Short = goog.forwardDeclare('java.lang.Short$impl');
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
  $instance.$ctor__java_lang_Short_BoxedValues__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Short_BoxedValues__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Short} */
 static m_get__short__java_lang_Short(/** number */ s) {
  BoxedValues.$clinit();
  let rebase = s + 128 | 0;
  let result = BoxedValues.f_boxedValues__java_lang_Short_BoxedValues_[rebase];
  if ($Equality.$same(result, null)) {
   result = $Arrays.$set(BoxedValues.f_boxedValues__java_lang_Short_BoxedValues_, rebase, Short.$create__short(s));
  }
  return result;
 }
 /** @nodts */
 static $clinit() {
  BoxedValues.$clinit = () =>{};
  BoxedValues.$loadModules();
  j_l_Object.$clinit();
  BoxedValues.f_boxedValues__java_lang_Short_BoxedValues_ = /**@type {!Array<Short>}*/ ($Arrays.$create([256], Short));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedValues;
 }
 
 /** @nodts */
 static $loadModules() {
  Short = goog.module.get('java.lang.Short$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<Short>} @nodts*/
BoxedValues.f_boxedValues__java_lang_Short_BoxedValues_;
$Util.$setClassMetadata(BoxedValues, 'java.lang.Short$BoxedValues');

exports = BoxedValues;

//# sourceMappingURL=Short$BoxedValues.js.map
