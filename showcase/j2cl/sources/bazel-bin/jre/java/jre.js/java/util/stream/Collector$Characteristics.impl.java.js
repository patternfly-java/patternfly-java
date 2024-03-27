goog.module('java.util.stream.Collector.Characteristics$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Characteristics>}
 */
class Characteristics extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Characteristics} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Characteristics();
  $instance.$ctor__java_util_stream_Collector_Characteristics__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_Collector_Characteristics__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!Characteristics} */
 static m_valueOf__java_lang_String__java_util_stream_Collector_Characteristics(/** string */ name) {
  Characteristics.$clinit();
  if ($Equality.$same(Characteristics.f_namesToValuesMap__java_util_stream_Collector_Characteristics_, null)) {
   Characteristics.f_namesToValuesMap__java_util_stream_Collector_Characteristics_ = /**@type {Map<?string, !Characteristics>}*/ ($Enums.createMapFromValues(Characteristics.m_values__arrayOf_java_util_stream_Collector_Characteristics()));
  }
  return /**@type {Characteristics}*/ ($Enums.getValueFromNameAndMap(name, Characteristics.f_namesToValuesMap__java_util_stream_Collector_Characteristics_));
 }
 /** @nodts @return {!Array<!Characteristics>} */
 static m_values__arrayOf_java_util_stream_Collector_Characteristics() {
  Characteristics.$clinit();
  return /**@type {!Array<Characteristics>}*/ ($Arrays.$init([Characteristics.f_CONCURRENT__java_util_stream_Collector_Characteristics, Characteristics.f_IDENTITY_FINISH__java_util_stream_Collector_Characteristics, Characteristics.f_UNORDERED__java_util_stream_Collector_Characteristics], Characteristics));
 }
 /** @nodts */
 static $clinit() {
  Characteristics.$clinit = () =>{};
  Characteristics.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Characteristics;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Characteristics.$ordinal_CONCURRENT__java_util_stream_Collector_Characteristics = 0;
/**@const {number} @nodts*/
Characteristics.$ordinal_IDENTITY_FINISH__java_util_stream_Collector_Characteristics = 1;
/**@const {number} @nodts*/
Characteristics.$ordinal_UNORDERED__java_util_stream_Collector_Characteristics = 2;
/**@const {!Characteristics} @nodts*/
Characteristics.f_CONCURRENT__java_util_stream_Collector_Characteristics = /**@pureOrBreakMyCode*/ Characteristics.$create__java_lang_String__int($Util.$makeEnumName('CONCURRENT'), Characteristics.$ordinal_CONCURRENT__java_util_stream_Collector_Characteristics);
/**@const {!Characteristics} @nodts*/
Characteristics.f_IDENTITY_FINISH__java_util_stream_Collector_Characteristics = /**@pureOrBreakMyCode*/ Characteristics.$create__java_lang_String__int($Util.$makeEnumName('IDENTITY_FINISH'), Characteristics.$ordinal_IDENTITY_FINISH__java_util_stream_Collector_Characteristics);
/**@const {!Characteristics} @nodts*/
Characteristics.f_UNORDERED__java_util_stream_Collector_Characteristics = /**@pureOrBreakMyCode*/ Characteristics.$create__java_lang_String__int($Util.$makeEnumName('UNORDERED'), Characteristics.$ordinal_UNORDERED__java_util_stream_Collector_Characteristics);
/**@type {Map<?string, !Characteristics>} @nodts*/
Characteristics.f_namesToValuesMap__java_util_stream_Collector_Characteristics_;
$Util.$setClassMetadataForEnum(Characteristics, 'java.util.stream.Collector$Characteristics');

exports = Characteristics;

//# sourceMappingURL=Collector$Characteristics.js.map
