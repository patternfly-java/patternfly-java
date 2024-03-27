goog.module('java.lang.Long.BoxedValues$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class BoxedValues extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BoxedValues} */
 static $create__() {
  BoxedValues.$clinit();
  let $instance = new BoxedValues();
  $instance.$ctor__java_lang_Long_BoxedValues__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Long_BoxedValues__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Long} */
 static m_get__long__java_lang_Long(/** !$Long */ l) {
  BoxedValues.$clinit();
  let rebase = $Primitives.narrowLongToInt(l) + 128 | 0;
  let result = BoxedValues.$static_boxedValues__java_lang_Long_BoxedValues[rebase];
  if ($Equality.$same(result, null)) {
   result = $Arrays.$set(BoxedValues.$static_boxedValues__java_lang_Long_BoxedValues, rebase, Long.$create__long(l));
  }
  return result;
 }
 /** @nodts @return {Array<Long>} */
 static get f_boxedValues__java_lang_Long_BoxedValues() {
  return (BoxedValues.$clinit(), BoxedValues.$static_boxedValues__java_lang_Long_BoxedValues);
 }
 /** @nodts */
 static set f_boxedValues__java_lang_Long_BoxedValues(/** Array<Long> */ value) {
  (BoxedValues.$clinit(), BoxedValues.$static_boxedValues__java_lang_Long_BoxedValues = value);
 }
 /** @nodts */
 static $clinit() {
  BoxedValues.$clinit = () =>{};
  BoxedValues.$loadModules();
  j_l_Object.$clinit();
  BoxedValues.$static_boxedValues__java_lang_Long_BoxedValues = /**@type {!Array<Long>}*/ ($Arrays.$create([256], Long));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxedValues;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@private {Array<Long>} @nodts*/
BoxedValues.$static_boxedValues__java_lang_Long_BoxedValues;
$Util.$setClassMetadata(BoxedValues, 'java.lang.Long$BoxedValues');

exports = BoxedValues;

//# sourceMappingURL=Long$BoxedValues.js.map
