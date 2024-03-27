goog.module('org.patternfly.showcase.Assets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ResourceBundle = goog.forwardDeclare('org.patternfly.showcase.ResourceBundle$impl');

/**
 * @final
 */
class Assets extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Assets} */
 static $create__() {
  Assets.$clinit();
  let $instance = new Assets();
  $instance.$ctor__org_patternfly_showcase_Assets__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_Assets__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 static get f_avatarDark__org_patternfly_showcase_Assets() {
  return (Assets.$clinit(), Assets.$static_avatarDark__org_patternfly_showcase_Assets);
 }
 /** @nodts */
 static set f_avatarDark__org_patternfly_showcase_Assets(/** ?string */ value) {
  (Assets.$clinit(), Assets.$static_avatarDark__org_patternfly_showcase_Assets = value);
 }
 /** @nodts @return {?string} */
 static get f_avatarLight__org_patternfly_showcase_Assets() {
  return (Assets.$clinit(), Assets.$static_avatarLight__org_patternfly_showcase_Assets);
 }
 /** @nodts */
 static set f_avatarLight__org_patternfly_showcase_Assets(/** ?string */ value) {
  (Assets.$clinit(), Assets.$static_avatarLight__org_patternfly_showcase_Assets = value);
 }
 /** @nodts @return {?string} */
 static get f_pfLogo__org_patternfly_showcase_Assets() {
  return (Assets.$clinit(), Assets.$static_pfLogo__org_patternfly_showcase_Assets);
 }
 /** @nodts */
 static set f_pfLogo__org_patternfly_showcase_Assets(/** ?string */ value) {
  (Assets.$clinit(), Assets.$static_pfLogo__org_patternfly_showcase_Assets = value);
 }
 /** @nodts */
 static $clinit() {
  Assets.$clinit = () =>{};
  Assets.$loadModules();
  j_l_Object.$clinit();
  Assets.$static_avatarDark__org_patternfly_showcase_Assets = 'data:image/svg+xml;base64,' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ResourceBundle.f_avatarDark__org_patternfly_showcase_ResourceBundle);
  Assets.$static_avatarLight__org_patternfly_showcase_Assets = 'data:image/svg+xml;base64,' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ResourceBundle.f_avatarLight__org_patternfly_showcase_ResourceBundle);
  Assets.$static_pfLogo__org_patternfly_showcase_Assets = 'data:image/svg+xml;base64,' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ResourceBundle.f_pfLogo__org_patternfly_showcase_ResourceBundle);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Assets;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ResourceBundle = goog.module.get('org.patternfly.showcase.ResourceBundle$impl');
 }
}
/**@private {?string} @nodts*/
Assets.$static_avatarDark__org_patternfly_showcase_Assets;
/**@private {?string} @nodts*/
Assets.$static_avatarLight__org_patternfly_showcase_Assets;
/**@private {?string} @nodts*/
Assets.$static_pfLogo__org_patternfly_showcase_Assets;
$Util.$setClassMetadata(Assets, 'org.patternfly.showcase.Assets');

exports = Assets;

//# sourceMappingURL=Assets.js.map
