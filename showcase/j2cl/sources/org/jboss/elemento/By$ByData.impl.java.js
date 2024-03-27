goog.module('org.jboss.elemento.By.ByData$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ByAttribute = goog.require('org.jboss.elemento.By.ByAttribute$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AttributeOperator = goog.forwardDeclare('org.jboss.elemento.By.AttributeOperator$impl');

class ByData extends ByAttribute {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {?string} */
 static m_camelToKebabCase__java_lang_String__java_lang_String(/** ?string */ str) {
  return j_l_String.m_toLowerCase__java_lang_String__java_lang_String(j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String(str, '([a-z0-9]|(?=[A-Z]))([A-Z])', '$1-$2'));
 }
 /** @nodts @return {!ByData} */
 static $create__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String(/** ?string */ name, /** AttributeOperator */ attributeOperator, /** ?string */ value) {
  ByData.$clinit();
  let $instance = new ByData();
  $instance.$ctor__org_jboss_elemento_By_ByData__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String__void(name, attributeOperator, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_By_ByData__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String__void(/** ?string */ name, /** AttributeOperator */ attributeOperator, /** ?string */ value) {
  this.$ctor__org_jboss_elemento_By_ByAttribute__java_lang_String__org_jboss_elemento_By_AttributeOperator__java_lang_String__void('data-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(name, '-') ? name : ByData.m_camelToKebabCase__java_lang_String__java_lang_String(name)), attributeOperator, value);
 }
 /** @nodts */
 static $clinit() {
  ByData.$clinit = () =>{};
  ByData.$loadModules();
  ByAttribute.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByData;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(ByData, 'org.jboss.elemento.By$ByData');

exports = ByData;

//# sourceMappingURL=By$ByData.js.map
