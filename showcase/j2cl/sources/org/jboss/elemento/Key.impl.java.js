goog.module('org.jboss.elemento.Key$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let j_u_Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Key>}
 */
class Key extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_key__org_jboss_elemento_Key_;
  /**@type {Array<?string>} @nodts*/
  this.f_alternatives__org_jboss_elemento_Key_;
 }
 /** @nodts @return {Key} */
 static m_fromEvent__elemental2_dom_KeyboardEvent__org_jboss_elemento_Key(/** KeyboardEvent */ event) {
  Key.$clinit();
  return /**@type {Key}*/ ($Casts.$to(Key.f_keys__org_jboss_elemento_Key_.getOrDefault(event.key, Key.$static_Unidentified__org_jboss_elemento_Key), Key));
 }
 //Factory method corresponding to constructor 'Key(String, int, String)'.
 /** @nodts @return {!Key} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ key) {
  let $instance = new Key();
  $instance.$ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String__void($name, $ordinal, key);
  return $instance;
 }
 //Initialization from constructor 'Key(String, int, String)'.
 /** @nodts */
 $ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ key) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String__arrayOf_java_lang_String__void($name, $ordinal, key, null);
 }
 //Factory method corresponding to constructor 'Key(String, int, String, String[])'.
 /** @nodts @return {!Key} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ key, /** Array<?string> */ alternatives) {
  let $instance = new Key();
  $instance.$ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String__arrayOf_java_lang_String__void($name, $ordinal, key, alternatives);
  return $instance;
 }
 //Initialization from constructor 'Key(String, int, String, String[])'.
 /** @nodts */
 $ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String__arrayOf_java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ key, /** Array<?string> */ alternatives) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_key__org_jboss_elemento_Key_ = key;
  this.f_alternatives__org_jboss_elemento_Key_ = alternatives;
 }
 /** @nodts @return {boolean} */
 m_match__elemental2_dom_Event__boolean(/** Event */ event) {
  return $Overlay.$isInstance(event) && this.m_match__elemental2_dom_KeyboardEvent__boolean(/**@type {KeyboardEvent}*/ ($Casts.$to(event, $Overlay)));
 }
 /** @nodts @return {boolean} */
 m_match__elemental2_dom_KeyboardEvent__boolean(/** KeyboardEvent */ event) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(this.f_key__org_jboss_elemento_Key_, event.key)) {
   return true;
  }
  if (!$Equality.$same(this.f_alternatives__org_jboss_elemento_Key_, null)) {
   for (let $array = this.f_alternatives__org_jboss_elemento_Key_, $index = 0; $index < $array.length; $index++) {
    let alternative = $array[$index];
    {
     if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(alternative, event.key)) {
      return true;
     }
    }
   }
  }
  return false;
 }
 /** @nodts @return {!Key} */
 static m_valueOf__java_lang_String__org_jboss_elemento_Key(/** string */ name) {
  Key.$clinit();
  if ($Equality.$same(Key.f_namesToValuesMap__org_jboss_elemento_Key_, null)) {
   Key.f_namesToValuesMap__org_jboss_elemento_Key_ = /**@type {Map<?string, !Key>}*/ ($Enums.createMapFromValues(Key.m_values__arrayOf_org_jboss_elemento_Key()));
  }
  return /**@type {Key}*/ ($Enums.getValueFromNameAndMap(name, Key.f_namesToValuesMap__org_jboss_elemento_Key_));
 }
 /** @nodts @return {!Array<!Key>} */
 static m_values__arrayOf_org_jboss_elemento_Key() {
  Key.$clinit();
  return /**@type {!Array<Key>}*/ ($Arrays.$init([Key.$static_Accept__org_jboss_elemento_Key, Key.$static_Again__org_jboss_elemento_Key, Key.$static_Alt__org_jboss_elemento_Key, Key.$static_AltGraph__org_jboss_elemento_Key, Key.$static_ArrowDown__org_jboss_elemento_Key, Key.$static_ArrowLeft__org_jboss_elemento_Key, Key.$static_ArrowRight__org_jboss_elemento_Key, Key.$static_ArrowUp__org_jboss_elemento_Key, Key.$static_Attn__org_jboss_elemento_Key, Key.$static_Backspace__org_jboss_elemento_Key, Key.$static_BrightnessDown__org_jboss_elemento_Key, Key.$static_BrightnessUp__org_jboss_elemento_Key, Key.$static_Cancel__org_jboss_elemento_Key, Key.$static_CapsLock__org_jboss_elemento_Key, Key.$static_Clear__org_jboss_elemento_Key, Key.$static_ContextMenu__org_jboss_elemento_Key, Key.$static_Control__org_jboss_elemento_Key, Key.$static_Copy__org_jboss_elemento_Key, Key.$static_CrSel__org_jboss_elemento_Key, Key.$static_Cut__org_jboss_elemento_Key, Key.$static_Delete__org_jboss_elemento_Key, Key.$static_Eject__org_jboss_elemento_Key, Key.$static_End__org_jboss_elemento_Key, Key.$static_Enter__org_jboss_elemento_Key, Key.$static_EraseEof__org_jboss_elemento_Key, Key.$static_Escape__org_jboss_elemento_Key, Key.$static_Execute__org_jboss_elemento_Key, Key.$static_ExSel__org_jboss_elemento_Key, Key.$static_F1__org_jboss_elemento_Key, Key.$static_F10__org_jboss_elemento_Key, Key.$static_F11__org_jboss_elemento_Key, Key.$static_F13__org_jboss_elemento_Key, Key.$static_F14__org_jboss_elemento_Key, Key.$static_F15__org_jboss_elemento_Key, Key.$static_F16__org_jboss_elemento_Key, Key.$static_F17__org_jboss_elemento_Key, Key.$static_F18__org_jboss_elemento_Key, Key.$static_F19__org_jboss_elemento_Key, Key.$static_F2__org_jboss_elemento_Key, Key.$static_F20__org_jboss_elemento_Key, Key.$static_F3__org_jboss_elemento_Key, Key.$static_F4__org_jboss_elemento_Key, Key.$static_F5__org_jboss_elemento_Key, Key.$static_F6__org_jboss_elemento_Key, Key.$static_F7__org_jboss_elemento_Key, Key.$static_F8__org_jboss_elemento_Key, Key.$static_F9__org_jboss_elemento_Key, Key.$static_Find__org_jboss_elemento_Key, Key.$static_Finish__org_jboss_elemento_Key, Key.$static_Fn__org_jboss_elemento_Key, Key.$static_FnLock__org_jboss_elemento_Key, Key.$static_Help__org_jboss_elemento_Key, Key.$static_Hibernate__org_jboss_elemento_Key, Key.$static_Home__org_jboss_elemento_Key, Key.$static_Insert__org_jboss_elemento_Key, Key.$static_LogOff__org_jboss_elemento_Key, Key.$static_Meta__org_jboss_elemento_Key, Key.$static_NumLock__org_jboss_elemento_Key, Key.$static_PageDown__org_jboss_elemento_Key, Key.$static_PageUp__org_jboss_elemento_Key, Key.$static_Paste__org_jboss_elemento_Key, Key.$static_Pause__org_jboss_elemento_Key, Key.$static_Play__org_jboss_elemento_Key, Key.$static_Power__org_jboss_elemento_Key, Key.$static_PowerOff__org_jboss_elemento_Key, Key.$static_PrintScreen__org_jboss_elemento_Key, Key.$static_Props__org_jboss_elemento_Key, Key.$static_Redo__org_jboss_elemento_Key, Key.$static_ScrollLock__org_jboss_elemento_Key, Key.$static_Select__org_jboss_elemento_Key, Key.$static_Shift__org_jboss_elemento_Key, Key.$static_Soft1__org_jboss_elemento_Key, Key.$static_Soft2__org_jboss_elemento_Key, Key.$static_Soft3__org_jboss_elemento_Key, Key.$static_Soft4__org_jboss_elemento_Key, Key.$static_Spacebar__org_jboss_elemento_Key, Key.$static_Standby__org_jboss_elemento_Key, Key.$static_Symbol__org_jboss_elemento_Key, Key.$static_SymbolLock__org_jboss_elemento_Key, Key.$static_Tab__org_jboss_elemento_Key, Key.$static_Undo__org_jboss_elemento_Key, Key.$static_Unidentified__org_jboss_elemento_Key, Key.$static_WakeUp__org_jboss_elemento_Key, Key.$static_ZoomIn__org_jboss_elemento_Key, Key.$static_ZoomOut__org_jboss_elemento_Key], Key));
 }
 /** @nodts @return {!Key} */
 static get f_Accept__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Accept__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Again__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Again__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Alt__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Alt__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_AltGraph__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_AltGraph__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_ArrowDown__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_ArrowDown__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_ArrowLeft__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_ArrowLeft__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_ArrowRight__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_ArrowRight__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_ArrowUp__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_ArrowUp__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Attn__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Attn__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Backspace__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Backspace__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_BrightnessDown__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_BrightnessDown__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_BrightnessUp__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_BrightnessUp__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Cancel__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Cancel__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_CapsLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_CapsLock__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Clear__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Clear__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_ContextMenu__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_ContextMenu__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Control__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Control__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Copy__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Copy__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_CrSel__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_CrSel__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Cut__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Cut__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Delete__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Delete__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Eject__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Eject__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_End__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_End__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Enter__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Enter__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_EraseEof__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_EraseEof__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Escape__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Escape__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Execute__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Execute__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_ExSel__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_ExSel__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F1__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F1__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F10__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F10__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F11__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F11__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F13__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F13__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F14__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F14__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F15__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F15__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F16__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F16__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F17__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F17__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F18__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F18__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F19__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F19__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F2__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F2__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F20__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F20__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F3__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F3__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F4__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F4__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F5__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F5__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F6__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F6__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F7__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F7__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F8__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F8__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_F9__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_F9__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Find__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Find__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Finish__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Finish__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Fn__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Fn__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_FnLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_FnLock__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Help__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Help__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Hibernate__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Hibernate__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Home__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Home__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Insert__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Insert__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_LogOff__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_LogOff__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Meta__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Meta__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_NumLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_NumLock__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_PageDown__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_PageDown__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_PageUp__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_PageUp__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Paste__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Paste__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Pause__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Pause__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Play__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Play__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Power__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Power__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_PowerOff__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_PowerOff__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_PrintScreen__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_PrintScreen__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Props__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Props__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Redo__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Redo__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_ScrollLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_ScrollLock__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Select__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Select__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Shift__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Shift__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Soft1__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Soft1__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Soft2__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Soft2__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Soft3__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Soft3__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Soft4__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Soft4__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Spacebar__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Spacebar__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Standby__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Standby__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Symbol__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Symbol__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_SymbolLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_SymbolLock__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Tab__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Tab__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Undo__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Undo__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_Unidentified__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_Unidentified__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_WakeUp__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_WakeUp__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_ZoomIn__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_ZoomIn__org_jboss_elemento_Key);
 }
 /** @nodts @return {!Key} */
 static get f_ZoomOut__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$static_ZoomOut__org_jboss_elemento_Key);
 }
 /** @nodts */
 static $clinit() {
  Key.$clinit = () =>{};
  Key.$loadModules();
  Enum.$clinit();
  Key.$static_Accept__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Accept'), Key.$ordinal_Accept__org_jboss_elemento_Key, 'Accept');
  Key.$static_Again__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Again'), Key.$ordinal_Again__org_jboss_elemento_Key, 'Again');
  Key.$static_Alt__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Alt'), Key.$ordinal_Alt__org_jboss_elemento_Key, 'Alt');
  Key.$static_AltGraph__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('AltGraph'), Key.$ordinal_AltGraph__org_jboss_elemento_Key, 'AltGraph');
  Key.$static_ArrowDown__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('ArrowDown'), Key.$ordinal_ArrowDown__org_jboss_elemento_Key, 'ArrowDown', /**@type {!Array<?string>}*/ ($Arrays.$init(['Down'], j_l_String)));
  Key.$static_ArrowLeft__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('ArrowLeft'), Key.$ordinal_ArrowLeft__org_jboss_elemento_Key, 'ArrowLeft', /**@type {!Array<?string>}*/ ($Arrays.$init(['Left'], j_l_String)));
  Key.$static_ArrowRight__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('ArrowRight'), Key.$ordinal_ArrowRight__org_jboss_elemento_Key, 'ArrowRight', /**@type {!Array<?string>}*/ ($Arrays.$init(['Right'], j_l_String)));
  Key.$static_ArrowUp__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('ArrowUp'), Key.$ordinal_ArrowUp__org_jboss_elemento_Key, 'ArrowUp', /**@type {!Array<?string>}*/ ($Arrays.$init(['Up'], j_l_String)));
  Key.$static_Attn__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Attn'), Key.$ordinal_Attn__org_jboss_elemento_Key, 'Attn');
  Key.$static_Backspace__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Backspace'), Key.$ordinal_Backspace__org_jboss_elemento_Key, 'Backspace');
  Key.$static_BrightnessDown__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('BrightnessDown'), Key.$ordinal_BrightnessDown__org_jboss_elemento_Key, 'BrightnessDown');
  Key.$static_BrightnessUp__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('BrightnessUp'), Key.$ordinal_BrightnessUp__org_jboss_elemento_Key, 'BrightnessUp');
  Key.$static_Cancel__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Cancel'), Key.$ordinal_Cancel__org_jboss_elemento_Key, 'Cancel');
  Key.$static_CapsLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('CapsLock'), Key.$ordinal_CapsLock__org_jboss_elemento_Key, 'CapsLock');
  Key.$static_Clear__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Clear'), Key.$ordinal_Clear__org_jboss_elemento_Key, 'Clear');
  Key.$static_ContextMenu__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('ContextMenu'), Key.$ordinal_ContextMenu__org_jboss_elemento_Key, 'ContextMenu', /**@type {!Array<?string>}*/ ($Arrays.$init(['Apps'], j_l_String)));
  Key.$static_Control__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Control'), Key.$ordinal_Control__org_jboss_elemento_Key, 'Control');
  Key.$static_Copy__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Copy'), Key.$ordinal_Copy__org_jboss_elemento_Key, 'Copy');
  Key.$static_CrSel__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('CrSel'), Key.$ordinal_CrSel__org_jboss_elemento_Key, 'CrSel', /**@type {!Array<?string>}*/ ($Arrays.$init(['Crsel'], j_l_String)));
  Key.$static_Cut__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Cut'), Key.$ordinal_Cut__org_jboss_elemento_Key, 'Cut');
  Key.$static_Delete__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('Delete'), Key.$ordinal_Delete__org_jboss_elemento_Key, 'Delete', /**@type {!Array<?string>}*/ ($Arrays.$init(['Del'], j_l_String)));
  Key.$static_Eject__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Eject'), Key.$ordinal_Eject__org_jboss_elemento_Key, 'Eject');
  Key.$static_End__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('End'), Key.$ordinal_End__org_jboss_elemento_Key, 'End');
  Key.$static_Enter__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Enter'), Key.$ordinal_Enter__org_jboss_elemento_Key, 'Enter');
  Key.$static_EraseEof__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('EraseEof'), Key.$ordinal_EraseEof__org_jboss_elemento_Key, 'EraseEof');
  Key.$static_Escape__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('Escape'), Key.$ordinal_Escape__org_jboss_elemento_Key, 'Escape', /**@type {!Array<?string>}*/ ($Arrays.$init(['Esc'], j_l_String)));
  Key.$static_Execute__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Execute'), Key.$ordinal_Execute__org_jboss_elemento_Key, 'Execute');
  Key.$static_ExSel__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('ExSel'), Key.$ordinal_ExSel__org_jboss_elemento_Key, 'ExSel', /**@type {!Array<?string>}*/ ($Arrays.$init(['Exsel'], j_l_String)));
  Key.$static_F1__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F1'), Key.$ordinal_F1__org_jboss_elemento_Key, 'F1');
  Key.$static_F10__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F10'), Key.$ordinal_F10__org_jboss_elemento_Key, 'F10');
  Key.$static_F11__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F11'), Key.$ordinal_F11__org_jboss_elemento_Key, 'F11');
  Key.$static_F13__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F13'), Key.$ordinal_F13__org_jboss_elemento_Key, 'F13');
  Key.$static_F14__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F14'), Key.$ordinal_F14__org_jboss_elemento_Key, 'F14');
  Key.$static_F15__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F15'), Key.$ordinal_F15__org_jboss_elemento_Key, 'F15');
  Key.$static_F16__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F16'), Key.$ordinal_F16__org_jboss_elemento_Key, 'F16');
  Key.$static_F17__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F17'), Key.$ordinal_F17__org_jboss_elemento_Key, 'F17');
  Key.$static_F18__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F18'), Key.$ordinal_F18__org_jboss_elemento_Key, 'F18');
  Key.$static_F19__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F19'), Key.$ordinal_F19__org_jboss_elemento_Key, 'F19');
  Key.$static_F2__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F2'), Key.$ordinal_F2__org_jboss_elemento_Key, 'F2');
  Key.$static_F20__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F20'), Key.$ordinal_F20__org_jboss_elemento_Key, 'F20');
  Key.$static_F3__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F3'), Key.$ordinal_F3__org_jboss_elemento_Key, 'F3');
  Key.$static_F4__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F4'), Key.$ordinal_F4__org_jboss_elemento_Key, 'F4');
  Key.$static_F5__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F5'), Key.$ordinal_F5__org_jboss_elemento_Key, 'F5');
  Key.$static_F6__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F6'), Key.$ordinal_F6__org_jboss_elemento_Key, 'F6');
  Key.$static_F7__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F7'), Key.$ordinal_F7__org_jboss_elemento_Key, 'F7');
  Key.$static_F8__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F8'), Key.$ordinal_F8__org_jboss_elemento_Key, 'F8');
  Key.$static_F9__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('F9'), Key.$ordinal_F9__org_jboss_elemento_Key, 'F9');
  Key.$static_Find__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Find'), Key.$ordinal_Find__org_jboss_elemento_Key, 'Find');
  Key.$static_Finish__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Finish'), Key.$ordinal_Finish__org_jboss_elemento_Key, 'Finish');
  Key.$static_Fn__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Fn'), Key.$ordinal_Fn__org_jboss_elemento_Key, 'Fn');
  Key.$static_FnLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('FnLock'), Key.$ordinal_FnLock__org_jboss_elemento_Key, 'FnLock');
  Key.$static_Help__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Help'), Key.$ordinal_Help__org_jboss_elemento_Key, 'Help');
  Key.$static_Hibernate__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Hibernate'), Key.$ordinal_Hibernate__org_jboss_elemento_Key, 'Hibernate');
  Key.$static_Home__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Home'), Key.$ordinal_Home__org_jboss_elemento_Key, 'Home');
  Key.$static_Insert__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Insert'), Key.$ordinal_Insert__org_jboss_elemento_Key, 'Insert');
  Key.$static_LogOff__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('LogOff'), Key.$ordinal_LogOff__org_jboss_elemento_Key, 'LogOff');
  Key.$static_Meta__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Meta'), Key.$ordinal_Meta__org_jboss_elemento_Key, 'Meta');
  Key.$static_NumLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('NumLock'), Key.$ordinal_NumLock__org_jboss_elemento_Key, 'NumLock');
  Key.$static_PageDown__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('PageDown'), Key.$ordinal_PageDown__org_jboss_elemento_Key, 'PageDown');
  Key.$static_PageUp__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('PageUp'), Key.$ordinal_PageUp__org_jboss_elemento_Key, 'PageUp');
  Key.$static_Paste__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Paste'), Key.$ordinal_Paste__org_jboss_elemento_Key, 'Paste');
  Key.$static_Pause__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Pause'), Key.$ordinal_Pause__org_jboss_elemento_Key, 'Pause');
  Key.$static_Play__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Play'), Key.$ordinal_Play__org_jboss_elemento_Key, 'Play');
  Key.$static_Power__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Power'), Key.$ordinal_Power__org_jboss_elemento_Key, 'Power');
  Key.$static_PowerOff__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('PowerOff'), Key.$ordinal_PowerOff__org_jboss_elemento_Key, 'PowerOff');
  Key.$static_PrintScreen__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('PrintScreen'), Key.$ordinal_PrintScreen__org_jboss_elemento_Key, 'PrintScreen');
  Key.$static_Props__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Props'), Key.$ordinal_Props__org_jboss_elemento_Key, 'Props');
  Key.$static_Redo__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Redo'), Key.$ordinal_Redo__org_jboss_elemento_Key, 'Redo');
  Key.$static_ScrollLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('ScrollLock'), Key.$ordinal_ScrollLock__org_jboss_elemento_Key, 'ScrollLock', /**@type {!Array<?string>}*/ ($Arrays.$init(['Scroll'], j_l_String)));
  Key.$static_Select__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Select'), Key.$ordinal_Select__org_jboss_elemento_Key, 'Select');
  Key.$static_Shift__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Shift'), Key.$ordinal_Shift__org_jboss_elemento_Key, 'Shift');
  Key.$static_Soft1__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Soft1'), Key.$ordinal_Soft1__org_jboss_elemento_Key, 'Soft1');
  Key.$static_Soft2__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Soft2'), Key.$ordinal_Soft2__org_jboss_elemento_Key, 'Soft2');
  Key.$static_Soft3__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Soft3'), Key.$ordinal_Soft3__org_jboss_elemento_Key, 'Soft3');
  Key.$static_Soft4__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Soft4'), Key.$ordinal_Soft4__org_jboss_elemento_Key, 'Soft4');
  Key.$static_Spacebar__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName('Spacebar'), Key.$ordinal_Spacebar__org_jboss_elemento_Key, ' ', /**@type {!Array<?string>}*/ ($Arrays.$init(['Spacebar'], j_l_String)));
  Key.$static_Standby__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Standby'), Key.$ordinal_Standby__org_jboss_elemento_Key, 'Standby');
  Key.$static_Symbol__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Symbol'), Key.$ordinal_Symbol__org_jboss_elemento_Key, 'Symbol');
  Key.$static_SymbolLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('SymbolLock'), Key.$ordinal_SymbolLock__org_jboss_elemento_Key, 'SymbolLock');
  Key.$static_Tab__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Tab'), Key.$ordinal_Tab__org_jboss_elemento_Key, 'Tab');
  Key.$static_Undo__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Undo'), Key.$ordinal_Undo__org_jboss_elemento_Key, 'Undo');
  Key.$static_Unidentified__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('Unidentified'), Key.$ordinal_Unidentified__org_jboss_elemento_Key, '');
  Key.$static_WakeUp__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('WakeUp'), Key.$ordinal_WakeUp__org_jboss_elemento_Key, 'WakeUp');
  Key.$static_ZoomIn__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ZoomIn'), Key.$ordinal_ZoomIn__org_jboss_elemento_Key, 'ZoomIn');
  Key.$static_ZoomOut__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ZoomOut'), Key.$ordinal_ZoomOut__org_jboss_elemento_Key, 'ZoomOut');
  Key.f_keys__org_jboss_elemento_Key_ = /**@type {!HashMap<?string, Key>}*/ (HashMap.$create__());
  for (let $array = Key.m_values__arrayOf_org_jboss_elemento_Key(), $index = 0; $index < $array.length; $index++) {
   let key = $array[$index];
   {
    Key.f_keys__org_jboss_elemento_Key_.put(key.f_key__org_jboss_elemento_Key_, key);
    if (!$Equality.$same(key.f_alternatives__org_jboss_elemento_Key_, null)) {
     for (let $array_1 = key.f_alternatives__org_jboss_elemento_Key_, $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
      let alternative = $array_1[$index_1];
      {
       Key.f_keys__org_jboss_elemento_Key_.put(alternative, key);
      }
     }
    }
   }
  }
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Key;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Key.$ordinal_Accept__org_jboss_elemento_Key = 0;
/**@const {number} @nodts*/
Key.$ordinal_Again__org_jboss_elemento_Key = 1;
/**@const {number} @nodts*/
Key.$ordinal_Alt__org_jboss_elemento_Key = 2;
/**@const {number} @nodts*/
Key.$ordinal_AltGraph__org_jboss_elemento_Key = 3;
/**@const {number} @nodts*/
Key.$ordinal_ArrowDown__org_jboss_elemento_Key = 4;
/**@const {number} @nodts*/
Key.$ordinal_ArrowLeft__org_jboss_elemento_Key = 5;
/**@const {number} @nodts*/
Key.$ordinal_ArrowRight__org_jboss_elemento_Key = 6;
/**@const {number} @nodts*/
Key.$ordinal_ArrowUp__org_jboss_elemento_Key = 7;
/**@const {number} @nodts*/
Key.$ordinal_Attn__org_jboss_elemento_Key = 8;
/**@const {number} @nodts*/
Key.$ordinal_Backspace__org_jboss_elemento_Key = 9;
/**@const {number} @nodts*/
Key.$ordinal_BrightnessDown__org_jboss_elemento_Key = 10;
/**@const {number} @nodts*/
Key.$ordinal_BrightnessUp__org_jboss_elemento_Key = 11;
/**@const {number} @nodts*/
Key.$ordinal_Cancel__org_jboss_elemento_Key = 12;
/**@const {number} @nodts*/
Key.$ordinal_CapsLock__org_jboss_elemento_Key = 13;
/**@const {number} @nodts*/
Key.$ordinal_Clear__org_jboss_elemento_Key = 14;
/**@const {number} @nodts*/
Key.$ordinal_ContextMenu__org_jboss_elemento_Key = 15;
/**@const {number} @nodts*/
Key.$ordinal_Control__org_jboss_elemento_Key = 16;
/**@const {number} @nodts*/
Key.$ordinal_Copy__org_jboss_elemento_Key = 17;
/**@const {number} @nodts*/
Key.$ordinal_CrSel__org_jboss_elemento_Key = 18;
/**@const {number} @nodts*/
Key.$ordinal_Cut__org_jboss_elemento_Key = 19;
/**@const {number} @nodts*/
Key.$ordinal_Delete__org_jboss_elemento_Key = 20;
/**@const {number} @nodts*/
Key.$ordinal_Eject__org_jboss_elemento_Key = 21;
/**@const {number} @nodts*/
Key.$ordinal_End__org_jboss_elemento_Key = 22;
/**@const {number} @nodts*/
Key.$ordinal_Enter__org_jboss_elemento_Key = 23;
/**@const {number} @nodts*/
Key.$ordinal_EraseEof__org_jboss_elemento_Key = 24;
/**@const {number} @nodts*/
Key.$ordinal_Escape__org_jboss_elemento_Key = 25;
/**@const {number} @nodts*/
Key.$ordinal_Execute__org_jboss_elemento_Key = 26;
/**@const {number} @nodts*/
Key.$ordinal_ExSel__org_jboss_elemento_Key = 27;
/**@const {number} @nodts*/
Key.$ordinal_F1__org_jboss_elemento_Key = 28;
/**@const {number} @nodts*/
Key.$ordinal_F10__org_jboss_elemento_Key = 29;
/**@const {number} @nodts*/
Key.$ordinal_F11__org_jboss_elemento_Key = 30;
/**@const {number} @nodts*/
Key.$ordinal_F13__org_jboss_elemento_Key = 31;
/**@const {number} @nodts*/
Key.$ordinal_F14__org_jboss_elemento_Key = 32;
/**@const {number} @nodts*/
Key.$ordinal_F15__org_jboss_elemento_Key = 33;
/**@const {number} @nodts*/
Key.$ordinal_F16__org_jboss_elemento_Key = 34;
/**@const {number} @nodts*/
Key.$ordinal_F17__org_jboss_elemento_Key = 35;
/**@const {number} @nodts*/
Key.$ordinal_F18__org_jboss_elemento_Key = 36;
/**@const {number} @nodts*/
Key.$ordinal_F19__org_jboss_elemento_Key = 37;
/**@const {number} @nodts*/
Key.$ordinal_F2__org_jboss_elemento_Key = 38;
/**@const {number} @nodts*/
Key.$ordinal_F20__org_jboss_elemento_Key = 39;
/**@const {number} @nodts*/
Key.$ordinal_F3__org_jboss_elemento_Key = 40;
/**@const {number} @nodts*/
Key.$ordinal_F4__org_jboss_elemento_Key = 41;
/**@const {number} @nodts*/
Key.$ordinal_F5__org_jboss_elemento_Key = 42;
/**@const {number} @nodts*/
Key.$ordinal_F6__org_jboss_elemento_Key = 43;
/**@const {number} @nodts*/
Key.$ordinal_F7__org_jboss_elemento_Key = 44;
/**@const {number} @nodts*/
Key.$ordinal_F8__org_jboss_elemento_Key = 45;
/**@const {number} @nodts*/
Key.$ordinal_F9__org_jboss_elemento_Key = 46;
/**@const {number} @nodts*/
Key.$ordinal_Find__org_jboss_elemento_Key = 47;
/**@const {number} @nodts*/
Key.$ordinal_Finish__org_jboss_elemento_Key = 48;
/**@const {number} @nodts*/
Key.$ordinal_Fn__org_jboss_elemento_Key = 49;
/**@const {number} @nodts*/
Key.$ordinal_FnLock__org_jboss_elemento_Key = 50;
/**@const {number} @nodts*/
Key.$ordinal_Help__org_jboss_elemento_Key = 51;
/**@const {number} @nodts*/
Key.$ordinal_Hibernate__org_jboss_elemento_Key = 52;
/**@const {number} @nodts*/
Key.$ordinal_Home__org_jboss_elemento_Key = 53;
/**@const {number} @nodts*/
Key.$ordinal_Insert__org_jboss_elemento_Key = 54;
/**@const {number} @nodts*/
Key.$ordinal_LogOff__org_jboss_elemento_Key = 55;
/**@const {number} @nodts*/
Key.$ordinal_Meta__org_jboss_elemento_Key = 56;
/**@const {number} @nodts*/
Key.$ordinal_NumLock__org_jboss_elemento_Key = 57;
/**@const {number} @nodts*/
Key.$ordinal_PageDown__org_jboss_elemento_Key = 58;
/**@const {number} @nodts*/
Key.$ordinal_PageUp__org_jboss_elemento_Key = 59;
/**@const {number} @nodts*/
Key.$ordinal_Paste__org_jboss_elemento_Key = 60;
/**@const {number} @nodts*/
Key.$ordinal_Pause__org_jboss_elemento_Key = 61;
/**@const {number} @nodts*/
Key.$ordinal_Play__org_jboss_elemento_Key = 62;
/**@const {number} @nodts*/
Key.$ordinal_Power__org_jboss_elemento_Key = 63;
/**@const {number} @nodts*/
Key.$ordinal_PowerOff__org_jboss_elemento_Key = 64;
/**@const {number} @nodts*/
Key.$ordinal_PrintScreen__org_jboss_elemento_Key = 65;
/**@const {number} @nodts*/
Key.$ordinal_Props__org_jboss_elemento_Key = 66;
/**@const {number} @nodts*/
Key.$ordinal_Redo__org_jboss_elemento_Key = 67;
/**@const {number} @nodts*/
Key.$ordinal_ScrollLock__org_jboss_elemento_Key = 68;
/**@const {number} @nodts*/
Key.$ordinal_Select__org_jboss_elemento_Key = 69;
/**@const {number} @nodts*/
Key.$ordinal_Shift__org_jboss_elemento_Key = 70;
/**@const {number} @nodts*/
Key.$ordinal_Soft1__org_jboss_elemento_Key = 71;
/**@const {number} @nodts*/
Key.$ordinal_Soft2__org_jboss_elemento_Key = 72;
/**@const {number} @nodts*/
Key.$ordinal_Soft3__org_jboss_elemento_Key = 73;
/**@const {number} @nodts*/
Key.$ordinal_Soft4__org_jboss_elemento_Key = 74;
/**@const {number} @nodts*/
Key.$ordinal_Spacebar__org_jboss_elemento_Key = 75;
/**@const {number} @nodts*/
Key.$ordinal_Standby__org_jboss_elemento_Key = 76;
/**@const {number} @nodts*/
Key.$ordinal_Symbol__org_jboss_elemento_Key = 77;
/**@const {number} @nodts*/
Key.$ordinal_SymbolLock__org_jboss_elemento_Key = 78;
/**@const {number} @nodts*/
Key.$ordinal_Tab__org_jboss_elemento_Key = 79;
/**@const {number} @nodts*/
Key.$ordinal_Undo__org_jboss_elemento_Key = 80;
/**@const {number} @nodts*/
Key.$ordinal_Unidentified__org_jboss_elemento_Key = 81;
/**@const {number} @nodts*/
Key.$ordinal_WakeUp__org_jboss_elemento_Key = 82;
/**@const {number} @nodts*/
Key.$ordinal_ZoomIn__org_jboss_elemento_Key = 83;
/**@const {number} @nodts*/
Key.$ordinal_ZoomOut__org_jboss_elemento_Key = 84;
/**@private {!Key} @nodts*/
Key.$static_Accept__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Again__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Alt__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_AltGraph__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_ArrowDown__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_ArrowLeft__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_ArrowRight__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_ArrowUp__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Attn__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Backspace__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_BrightnessDown__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_BrightnessUp__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Cancel__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_CapsLock__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Clear__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_ContextMenu__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Control__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Copy__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_CrSel__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Cut__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Delete__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Eject__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_End__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Enter__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_EraseEof__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Escape__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Execute__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_ExSel__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F1__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F10__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F11__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F13__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F14__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F15__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F16__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F17__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F18__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F19__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F2__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F20__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F3__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F4__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F5__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F6__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F7__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F8__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_F9__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Find__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Finish__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Fn__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_FnLock__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Help__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Hibernate__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Home__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Insert__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_LogOff__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Meta__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_NumLock__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_PageDown__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_PageUp__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Paste__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Pause__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Play__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Power__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_PowerOff__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_PrintScreen__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Props__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Redo__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_ScrollLock__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Select__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Shift__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Soft1__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Soft2__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Soft3__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Soft4__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Spacebar__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Standby__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Symbol__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_SymbolLock__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Tab__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Undo__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_Unidentified__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_WakeUp__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_ZoomIn__org_jboss_elemento_Key;
/**@private {!Key} @nodts*/
Key.$static_ZoomOut__org_jboss_elemento_Key;
/**@type {j_u_Map<?string, Key>} @nodts*/
Key.f_keys__org_jboss_elemento_Key_;
/**@type {Map<?string, !Key>} @nodts*/
Key.f_namesToValuesMap__org_jboss_elemento_Key_;
$Util.$setClassMetadataForEnum(Key, 'org.jboss.elemento.Key');

exports = Key;

//# sourceMappingURL=Key.js.map
