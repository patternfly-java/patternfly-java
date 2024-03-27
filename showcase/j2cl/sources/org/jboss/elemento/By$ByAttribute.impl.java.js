goog.module('org.jboss.elemento.By.ByAttribute$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AttributeOperator = goog.forwardDeclare('org.jboss.elemento.By.AttributeOperator$impl');

class ByAttribute extends By {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_jboss_elemento_By_ByAttribute_;
  /**@type {?string} @nodts*/
  this.f_value__org_jboss_elemento_By_ByAttribute_;
  /**@type {AttributeOperator} @nodts*/
  this.f_operator__org_jboss_elemento_By_ByAttribute_;
 }
 /** @nodts @return {!ByAttribute} */
 static $create__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String(/** ?string */ name, /** AttributeOperator */ operator, /** ?string */ value) {
  ByAttribute.$clinit();
  let $instance = new ByAttribute();
  $instance.$ctor__org_jboss_elemento_By_ByAttribute__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String__void(name, operator, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_By_ByAttribute__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String__void(/** ?string */ name, /** AttributeOperator */ operator, /** ?string */ value) {
  this.$ctor__org_jboss_elemento_By__void();
  this.f_name__org_jboss_elemento_By_ByAttribute_ = name;
  this.f_value__org_jboss_elemento_By_ByAttribute_ = value;
  this.f_operator__org_jboss_elemento_By_ByAttribute_ = operator;
 }
 /** @override @nodts @return {?string} */
 m_selector__java_lang_String_$pp_org_jboss_elemento() {
  let builder = StringBuilder.$create__();
  builder.m_append__java_lang_String__java_lang_StringBuilder('[').m_append__java_lang_String__java_lang_StringBuilder(this.f_name__org_jboss_elemento_By_ByAttribute_);
  if (!$Equality.$same(this.f_value__org_jboss_elemento_By_ByAttribute_, null) && j_l_String.m_length__java_lang_String__int(this.f_value__org_jboss_elemento_By_ByAttribute_) != 0) {
   let needsQuotes = this.m_needsQuotes__java_lang_String__boolean_$p_org_jboss_elemento_By_ByAttribute(this.f_value__org_jboss_elemento_By_ByAttribute_);
   if (!$Equality.$same(this.f_operator__org_jboss_elemento_By_ByAttribute_, null)) {
    builder.m_append__java_lang_String__java_lang_StringBuilder(this.f_operator__org_jboss_elemento_By_ByAttribute_.f_operator__org_jboss_elemento_By_AttributeOperator_);
   }
   builder.m_append__java_lang_String__java_lang_StringBuilder('=');
   if (needsQuotes) {
    builder.m_append__java_lang_String__java_lang_StringBuilder('\"');
   }
   builder.m_append__java_lang_String__java_lang_StringBuilder(this.f_value__org_jboss_elemento_By_ByAttribute_);
   if (needsQuotes) {
    builder.m_append__java_lang_String__java_lang_StringBuilder('\"');
   }
  }
  builder.m_append__java_lang_String__java_lang_StringBuilder(']');
  return builder.toString();
 }
 /** @nodts @return {boolean} */
 m_needsQuotes__java_lang_String__boolean_$p_org_jboss_elemento_By_ByAttribute(/** ?string */ value) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(value, '-')) {
   return true;
  }
  if (j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(value, '-') && j_l_String.m_length__java_lang_String__int(value) > 1 && Character.m_isDigit__char__boolean(j_l_String.m_charAt__java_lang_String__int__char(value, 1))) {
   return true;
  }
  if (Character.m_isDigit__char__boolean(j_l_String.m_charAt__java_lang_String__int__char(value, 0))) {
   return true;
  }
  for (let i = 0; i < j_l_String.m_length__java_lang_String__int(value); i = i + 1 | 0) {
   let c = j_l_String.m_charAt__java_lang_String__int__char(value, i);
   if (!Character.m_isLetterOrDigit__char__boolean(c) && c != 45 /* '-' */ && c != 95 /* '_' */) {
    return true;
   }
  }
  return false;
 }
 /** @nodts */
 static $clinit() {
  ByAttribute.$clinit = () =>{};
  ByAttribute.$loadModules();
  By.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByAttribute;
 }
 
 /** @nodts */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(ByAttribute, 'org.jboss.elemento.By$ByAttribute');

exports = ByAttribute;

//# sourceMappingURL=By$ByAttribute.js.map
