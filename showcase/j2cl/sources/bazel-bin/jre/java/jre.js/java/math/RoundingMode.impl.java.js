goog.module('java.math.RoundingMode$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 * @extends {Enum<RoundingMode>}
 */
class RoundingMode extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!RoundingMode} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new RoundingMode();
  $instance.$ctor__java_math_RoundingMode__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__java_math_RoundingMode__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {RoundingMode} */
 static m_valueOf__int__java_math_RoundingMode(/** number */ mode) {
  RoundingMode.$clinit();
  switch (mode) {
   case 2: 
    return RoundingMode.f_CEILING__java_math_RoundingMode;
   case 1: 
    return RoundingMode.f_DOWN__java_math_RoundingMode;
   case 3: 
    return RoundingMode.f_FLOOR__java_math_RoundingMode;
   case 5: 
    return RoundingMode.f_HALF_DOWN__java_math_RoundingMode;
   case 6: 
    return RoundingMode.f_HALF_EVEN__java_math_RoundingMode;
   case 4: 
    return RoundingMode.f_HALF_UP__java_math_RoundingMode;
   case 7: 
    return RoundingMode.f_UNNECESSARY__java_math_RoundingMode;
   case 0: 
    return RoundingMode.f_UP__java_math_RoundingMode;
   default: 
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid rounding mode'));
  }
 }
 /** @nodts @return {!RoundingMode} */
 static m_valueOf__java_lang_String__java_math_RoundingMode(/** string */ name) {
  RoundingMode.$clinit();
  if ($Equality.$same(RoundingMode.f_namesToValuesMap__java_math_RoundingMode_, null)) {
   RoundingMode.f_namesToValuesMap__java_math_RoundingMode_ = /**@type {Map<?string, !RoundingMode>}*/ ($Enums.createMapFromValues(RoundingMode.m_values__arrayOf_java_math_RoundingMode()));
  }
  return /**@type {RoundingMode}*/ ($Enums.getValueFromNameAndMap(name, RoundingMode.f_namesToValuesMap__java_math_RoundingMode_));
 }
 /** @nodts @return {!Array<!RoundingMode>} */
 static m_values__arrayOf_java_math_RoundingMode() {
  RoundingMode.$clinit();
  return /**@type {!Array<RoundingMode>}*/ ($Arrays.$init([RoundingMode.f_UP__java_math_RoundingMode, RoundingMode.f_DOWN__java_math_RoundingMode, RoundingMode.f_CEILING__java_math_RoundingMode, RoundingMode.f_FLOOR__java_math_RoundingMode, RoundingMode.f_HALF_UP__java_math_RoundingMode, RoundingMode.f_HALF_DOWN__java_math_RoundingMode, RoundingMode.f_HALF_EVEN__java_math_RoundingMode, RoundingMode.f_UNNECESSARY__java_math_RoundingMode], RoundingMode));
 }
 /** @nodts */
 static $clinit() {
  RoundingMode.$clinit = () =>{};
  RoundingMode.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RoundingMode;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {number} @nodts*/
RoundingMode.$ordinal_UP__java_math_RoundingMode = 0;
/**@const {number} @nodts*/
RoundingMode.$ordinal_DOWN__java_math_RoundingMode = 1;
/**@const {number} @nodts*/
RoundingMode.$ordinal_CEILING__java_math_RoundingMode = 2;
/**@const {number} @nodts*/
RoundingMode.$ordinal_FLOOR__java_math_RoundingMode = 3;
/**@const {number} @nodts*/
RoundingMode.$ordinal_HALF_UP__java_math_RoundingMode = 4;
/**@const {number} @nodts*/
RoundingMode.$ordinal_HALF_DOWN__java_math_RoundingMode = 5;
/**@const {number} @nodts*/
RoundingMode.$ordinal_HALF_EVEN__java_math_RoundingMode = 6;
/**@const {number} @nodts*/
RoundingMode.$ordinal_UNNECESSARY__java_math_RoundingMode = 7;
/**@const {!RoundingMode} @nodts*/
RoundingMode.f_UP__java_math_RoundingMode = /**@pureOrBreakMyCode*/ RoundingMode.$create__java_lang_String__int($Util.$makeEnumName('UP'), RoundingMode.$ordinal_UP__java_math_RoundingMode);
/**@const {!RoundingMode} @nodts*/
RoundingMode.f_DOWN__java_math_RoundingMode = /**@pureOrBreakMyCode*/ RoundingMode.$create__java_lang_String__int($Util.$makeEnumName('DOWN'), RoundingMode.$ordinal_DOWN__java_math_RoundingMode);
/**@const {!RoundingMode} @nodts*/
RoundingMode.f_CEILING__java_math_RoundingMode = /**@pureOrBreakMyCode*/ RoundingMode.$create__java_lang_String__int($Util.$makeEnumName('CEILING'), RoundingMode.$ordinal_CEILING__java_math_RoundingMode);
/**@const {!RoundingMode} @nodts*/
RoundingMode.f_FLOOR__java_math_RoundingMode = /**@pureOrBreakMyCode*/ RoundingMode.$create__java_lang_String__int($Util.$makeEnumName('FLOOR'), RoundingMode.$ordinal_FLOOR__java_math_RoundingMode);
/**@const {!RoundingMode} @nodts*/
RoundingMode.f_HALF_UP__java_math_RoundingMode = /**@pureOrBreakMyCode*/ RoundingMode.$create__java_lang_String__int($Util.$makeEnumName('HALF_UP'), RoundingMode.$ordinal_HALF_UP__java_math_RoundingMode);
/**@const {!RoundingMode} @nodts*/
RoundingMode.f_HALF_DOWN__java_math_RoundingMode = /**@pureOrBreakMyCode*/ RoundingMode.$create__java_lang_String__int($Util.$makeEnumName('HALF_DOWN'), RoundingMode.$ordinal_HALF_DOWN__java_math_RoundingMode);
/**@const {!RoundingMode} @nodts*/
RoundingMode.f_HALF_EVEN__java_math_RoundingMode = /**@pureOrBreakMyCode*/ RoundingMode.$create__java_lang_String__int($Util.$makeEnumName('HALF_EVEN'), RoundingMode.$ordinal_HALF_EVEN__java_math_RoundingMode);
/**@const {!RoundingMode} @nodts*/
RoundingMode.f_UNNECESSARY__java_math_RoundingMode = /**@pureOrBreakMyCode*/ RoundingMode.$create__java_lang_String__int($Util.$makeEnumName('UNNECESSARY'), RoundingMode.$ordinal_UNNECESSARY__java_math_RoundingMode);
/**@type {Map<?string, !RoundingMode>} @nodts*/
RoundingMode.f_namesToValuesMap__java_math_RoundingMode_;
$Util.$setClassMetadataForEnum(RoundingMode, 'java.math.RoundingMode');

exports = RoundingMode;

//# sourceMappingURL=RoundingMode.js.map
