goog.module('org.patternfly.style.Rect$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Rect extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_width__org_patternfly_style_Rect = 0;
  /**@type {number} @nodts*/
  this.f_height__org_patternfly_style_Rect = 0;
 }
 //Factory method corresponding to constructor 'Rect()'.
 /** @nodts @return {!Rect} */
 static $create__() {
  Rect.$clinit();
  let $instance = new Rect();
  $instance.$ctor__org_patternfly_style_Rect__void();
  return $instance;
 }
 //Initialization from constructor 'Rect()'.
 /** @nodts */
 $ctor__org_patternfly_style_Rect__void() {
  this.$ctor__org_patternfly_style_Rect__int__int__void(0, 0);
 }
 //Factory method corresponding to constructor 'Rect(int, int)'.
 /** @nodts @return {!Rect} */
 static $create__int__int(/** number */ width, /** number */ height) {
  Rect.$clinit();
  let $instance = new Rect();
  $instance.$ctor__org_patternfly_style_Rect__int__int__void(width, height);
  return $instance;
 }
 //Initialization from constructor 'Rect(int, int)'.
 /** @nodts */
 $ctor__org_patternfly_style_Rect__int__int__void(/** number */ width, /** number */ height) {
  this.$ctor__java_lang_Object__void();
  this.f_width__org_patternfly_style_Rect = width;
  this.f_height__org_patternfly_style_Rect = height;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if ($Equality.$same(o, null) || !$Equality.$same(this.m_getClass__java_lang_Class(), $Objects.m_getClass__java_lang_Object__java_lang_Class(o))) {
   return false;
  }
  let rect = /**@type {Rect}*/ ($Casts.$to(o, Rect));
  return this.f_width__org_patternfly_style_Rect == rect.f_width__org_patternfly_style_Rect && this.f_height__org_patternfly_style_Rect == rect.f_height__org_patternfly_style_Rect;
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hash__arrayOf_java_lang_Object__int([Integer.m_valueOf__int__java_lang_Integer(this.f_width__org_patternfly_style_Rect), Integer.m_valueOf__int__java_lang_Integer(this.f_height__org_patternfly_style_Rect)]);
 }
 /** @override @return {?string} */
 toString() {
  return 'Rect(' + this.f_width__org_patternfly_style_Rect + ', ' + this.f_height__org_patternfly_style_Rect + ')';
 }
 /** @nodts */
 static $clinit() {
  Rect.$clinit = () =>{};
  Rect.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Rect;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Rect, 'org.patternfly.style.Rect');

exports = Rect;

//# sourceMappingURL=Rect.js.map
