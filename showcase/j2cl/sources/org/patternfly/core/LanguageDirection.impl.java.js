goog.module('org.patternfly.core.LanguageDirection$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('org.jboss.elemento.DomGlobal.$Overlay$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 * @extends {Enum<LanguageDirection>}
 */
class LanguageDirection extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LanguageDirection} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new LanguageDirection();
  $instance.$ctor__org_patternfly_core_LanguageDirection__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_LanguageDirection__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {LanguageDirection} */
 static m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(/** HTMLElement */ element) {
  LanguageDirection.$clinit();
  return LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection__org_patternfly_core_LanguageDirection(element, LanguageDirection.f_ltr__org_patternfly_core_LanguageDirection);
 }
 /** @nodts @return {LanguageDirection} */
 static m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection__org_patternfly_core_LanguageDirection(/** HTMLElement */ element, /** LanguageDirection */ defaultValue) {
  LanguageDirection.$clinit();
  let result = defaultValue;
  if (!$Equality.$same(element, null)) {
   let direction = DomGlobal_$Overlay.f_window__org_jboss_elemento_DomGlobal_$Overlay.getComputedStyle(element).getPropertyValue('direction');
   try {
    result = LanguageDirection.m_valueOf__java_lang_String__org_patternfly_core_LanguageDirection(direction);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (IllegalArgumentException.$isInstance(__$exc)) {
     let e = /**@type {IllegalArgumentException}*/ (__$exc);
     Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void('Language direction', element, 'Unable to get language direction from element. Fall back to ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(defaultValue));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
  return result;
 }
 /** @nodts @return {!LanguageDirection} */
 static m_valueOf__java_lang_String__org_patternfly_core_LanguageDirection(/** string */ name) {
  LanguageDirection.$clinit();
  if ($Equality.$same(LanguageDirection.f_namesToValuesMap__org_patternfly_core_LanguageDirection_, null)) {
   LanguageDirection.f_namesToValuesMap__org_patternfly_core_LanguageDirection_ = /**@type {Map<?string, !LanguageDirection>}*/ ($Enums.createMapFromValues(LanguageDirection.m_values__arrayOf_org_patternfly_core_LanguageDirection()));
  }
  return /**@type {LanguageDirection}*/ ($Enums.getValueFromNameAndMap(name, LanguageDirection.f_namesToValuesMap__org_patternfly_core_LanguageDirection_));
 }
 /** @nodts @return {!Array<!LanguageDirection>} */
 static m_values__arrayOf_org_patternfly_core_LanguageDirection() {
  LanguageDirection.$clinit();
  return /**@type {!Array<LanguageDirection>}*/ ($Arrays.$init([LanguageDirection.f_ltr__org_patternfly_core_LanguageDirection, LanguageDirection.f_rtl__org_patternfly_core_LanguageDirection], LanguageDirection));
 }
 /** @nodts */
 static $clinit() {
  LanguageDirection.$clinit = () =>{};
  LanguageDirection.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LanguageDirection;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DomGlobal_$Overlay = goog.module.get('org.jboss.elemento.DomGlobal.$Overlay$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {number} @nodts*/
LanguageDirection.$ordinal_ltr__org_patternfly_core_LanguageDirection = 0;
/**@const {number} @nodts*/
LanguageDirection.$ordinal_rtl__org_patternfly_core_LanguageDirection = 1;
/**@const {!LanguageDirection} @nodts*/
LanguageDirection.f_ltr__org_patternfly_core_LanguageDirection = /**@pureOrBreakMyCode*/ LanguageDirection.$create__java_lang_String__int($Util.$makeEnumName('ltr'), LanguageDirection.$ordinal_ltr__org_patternfly_core_LanguageDirection);
/**@const {!LanguageDirection} @nodts*/
LanguageDirection.f_rtl__org_patternfly_core_LanguageDirection = /**@pureOrBreakMyCode*/ LanguageDirection.$create__java_lang_String__int($Util.$makeEnumName('rtl'), LanguageDirection.$ordinal_rtl__org_patternfly_core_LanguageDirection);
/**@type {Map<?string, !LanguageDirection>} @nodts*/
LanguageDirection.f_namesToValuesMap__org_patternfly_core_LanguageDirection_;
$Util.$setClassMetadataForEnum(LanguageDirection, 'org.patternfly.core.LanguageDirection');

exports = LanguageDirection;

//# sourceMappingURL=LanguageDirection.js.map
