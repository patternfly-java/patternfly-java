goog.module('vmbootstrap.Enums.BoxedLightEnum$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Constructor = goog.forwardDeclare('javaemul.internal.Constructor');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @implements {Serializable}
 */
class $Enums_BoxedLightEnum extends j_l_Object {
 
 constructor(/** T */ value, /** Constructor */ ctor) {
  $Enums_BoxedLightEnum.$clinit();
  super();
  /**@type {T} @nodts*/
  this.f_value__javaemul_internal_Enums_BoxedLightEnum;
  /**@type {Constructor}*/
  this.constructor;
  this.$ctor__javaemul_internal_Enums_BoxedLightEnum__java_lang_Object__javaemul_internal_Constructor__void(value, ctor);
 }
 /** @nodts */
 $ctor__javaemul_internal_Enums_BoxedLightEnum__java_lang_Object__javaemul_internal_Constructor__void(/** T */ value, /** Constructor */ ctor) {
  this.$ctor__java_lang_Object__void();
  this.f_value__javaemul_internal_Enums_BoxedLightEnum = value;
  this.constructor = ctor;
 }
 /** @override @return {?string} */
 toString() {
  return $Objects.m_toString__java_lang_Object__java_lang_String(this.f_value__javaemul_internal_Enums_BoxedLightEnum);
 }
 /** @nodts */
 static $clinit() {
  $Enums_BoxedLightEnum.$clinit = () =>{};
  $Enums_BoxedLightEnum.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Enums_BoxedLightEnum;
 }
 
 /** @nodts */
 static $loadModules() {
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Serializable.$markImplementor($Enums_BoxedLightEnum);
$Util.$setClassMetadata($Enums_BoxedLightEnum, 'javaemul.internal.Enums$BoxedLightEnum');

exports = $Enums_BoxedLightEnum;

//# sourceMappingURL=Enums$BoxedLightEnum.js.map
