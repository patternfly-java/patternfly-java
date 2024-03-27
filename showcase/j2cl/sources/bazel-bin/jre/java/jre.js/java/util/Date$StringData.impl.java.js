goog.module('java.util.Date.StringData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class StringData extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!StringData} */
 static $create__() {
  let $instance = new StringData();
  $instance.$ctor__java_util_Date_StringData__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Date_StringData__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Array<?string>} */
 static get f_DAYS__java_util_Date_StringData() {
  return (StringData.$clinit(), StringData.$static_DAYS__java_util_Date_StringData);
 }
 /** @nodts @return {Array<?string>} */
 static get f_MONTHS__java_util_Date_StringData() {
  return (StringData.$clinit(), StringData.$static_MONTHS__java_util_Date_StringData);
 }
 /** @nodts */
 static $clinit() {
  StringData.$clinit = () =>{};
  StringData.$loadModules();
  j_l_Object.$clinit();
  StringData.$static_DAYS__java_util_Date_StringData = /**@type {!Array<?string>}*/ ($Arrays.$init(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], j_l_String));
  StringData.$static_MONTHS__java_util_Date_StringData = /**@type {!Array<?string>}*/ ($Arrays.$init(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], j_l_String));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StringData;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@private {Array<?string>} @nodts*/
StringData.$static_DAYS__java_util_Date_StringData;
/**@private {Array<?string>} @nodts*/
StringData.$static_MONTHS__java_util_Date_StringData;
$Util.$setClassMetadata(StringData, 'java.util.Date$StringData');

exports = StringData;

//# sourceMappingURL=Date$StringData.js.map
