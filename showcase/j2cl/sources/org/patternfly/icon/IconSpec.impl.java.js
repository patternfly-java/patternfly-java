goog.module('org.patternfly.icon.IconSpec$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 */
class IconSpec extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_set__org_patternfly_icon_IconSpec;
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_icon_IconSpec;
  /**@type {number} @nodts*/
  this.f_xOffset__org_patternfly_icon_IconSpec = 0;
  /**@type {number} @nodts*/
  this.f_yOffset__org_patternfly_icon_IconSpec = 0;
  /**@type {number} @nodts*/
  this.f_width__org_patternfly_icon_IconSpec = 0;
  /**@type {number} @nodts*/
  this.f_height__org_patternfly_icon_IconSpec = 0;
  /**@type {?string} @nodts*/
  this.f_path__org_patternfly_icon_IconSpec;
  /**@type {?string} @nodts*/
  this.f_license__org_patternfly_icon_IconSpec;
 }
 /** @nodts @return {!IconSpec} */
 static $create__java_lang_String__java_lang_String__int__int__int__int__java_lang_String__java_lang_String(/** ?string */ set, /** ?string */ id, /** number */ xOffset, /** number */ yOffset, /** number */ width, /** number */ height, /** ?string */ path, /** ?string */ license) {
  IconSpec.$clinit();
  let $instance = new IconSpec();
  $instance.$ctor__org_patternfly_icon_IconSpec__java_lang_String__java_lang_String__int__int__int__int__java_lang_String__java_lang_String__void(set, id, xOffset, yOffset, width, height, path, license);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_icon_IconSpec__java_lang_String__java_lang_String__int__int__int__int__java_lang_String__java_lang_String__void(/** ?string */ set, /** ?string */ id, /** number */ xOffset, /** number */ yOffset, /** number */ width, /** number */ height, /** ?string */ path, /** ?string */ license) {
  this.$ctor__java_lang_Object__void();
  this.f_set__org_patternfly_icon_IconSpec = set;
  this.f_id__org_patternfly_icon_IconSpec = id;
  this.f_xOffset__org_patternfly_icon_IconSpec = xOffset;
  this.f_yOffset__org_patternfly_icon_IconSpec = yOffset;
  this.f_width__org_patternfly_icon_IconSpec = width;
  this.f_height__org_patternfly_icon_IconSpec = height;
  this.f_path__org_patternfly_icon_IconSpec = path;
  this.f_license__org_patternfly_icon_IconSpec = license;
 }
 /** @nodts */
 static $clinit() {
  IconSpec.$clinit = () =>{};
  IconSpec.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IconSpec;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(IconSpec, 'org.patternfly.icon.IconSpec');

exports = IconSpec;

//# sourceMappingURL=IconSpec.js.map
