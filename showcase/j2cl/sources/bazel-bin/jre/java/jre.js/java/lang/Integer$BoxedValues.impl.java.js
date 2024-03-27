goog.module('java.lang.Integer.BoxedValues$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
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
  $instance.$ctor__java_lang_Integer_BoxedValues__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Integer_BoxedValues__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Integer} */
 static m_get__int__java_lang_Integer(/** number */ i) {
  BoxedValues.$clinit();
  let rebase = i + 128 | 0;
  let result = BoxedValues.f_boxedValues__java_lang_Integer_BoxedValues_[rebase];
  if ($Equality.$same(result, null)) {
   result = $Arrays.$set(BoxedValues.f_boxedValues__java_lang_Integer_BoxedValues_, rebase, Integer.$create__int(i));
  }
  return result;
 }
 /** @nodts */
 static $clinit() {
  BoxedValues.$clinit = () =>{};
  BoxedValues.$loadModules();
  j_l_Object.$clinit();
  BoxedValues.f_boxedValues__java_lang_Integer_BoxedValues_ = /**@type {!Array<Integer>}*/ ($Arrays.$create([256], Integer));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedValues;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<Integer>} @nodts*/
BoxedValues.f_boxedValues__java_lang_Integer_BoxedValues_;
$Util.$setClassMetadata(BoxedValues, 'java.lang.Integer$BoxedValues');

exports = BoxedValues;

//# sourceMappingURL=Integer$BoxedValues.js.map
