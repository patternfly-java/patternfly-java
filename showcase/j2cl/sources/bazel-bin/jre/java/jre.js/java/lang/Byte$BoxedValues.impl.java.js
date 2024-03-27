goog.module('java.lang.Byte.BoxedValues$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Byte = goog.forwardDeclare('java.lang.Byte$impl');
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
  $instance.$ctor__java_lang_Byte_BoxedValues__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Byte_BoxedValues__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Byte} */
 static m_get__byte__java_lang_Byte(/** number */ b) {
  BoxedValues.$clinit();
  let rebase = b + 128 | 0;
  let result = BoxedValues.f_boxedValues__java_lang_Byte_BoxedValues_[rebase];
  if ($Equality.$same(result, null)) {
   result = $Arrays.$set(BoxedValues.f_boxedValues__java_lang_Byte_BoxedValues_, rebase, Byte.$create__byte(b));
  }
  return result;
 }
 /** @nodts */
 static $clinit() {
  BoxedValues.$clinit = () =>{};
  BoxedValues.$loadModules();
  j_l_Object.$clinit();
  BoxedValues.f_boxedValues__java_lang_Byte_BoxedValues_ = /**@type {!Array<Byte>}*/ ($Arrays.$create([256], Byte));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedValues;
 }
 
 /** @nodts */
 static $loadModules() {
  Byte = goog.module.get('java.lang.Byte$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<Byte>} @nodts*/
BoxedValues.f_boxedValues__java_lang_Byte_BoxedValues_;
$Util.$setClassMetadata(BoxedValues, 'java.lang.Byte$BoxedValues');

exports = BoxedValues;

//# sourceMappingURL=Byte$BoxedValues.js.map
