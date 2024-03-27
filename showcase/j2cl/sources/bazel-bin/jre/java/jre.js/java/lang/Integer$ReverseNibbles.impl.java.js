goog.module('java.lang.Integer.ReverseNibbles$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class ReverseNibbles extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ReverseNibbles} */
 static $create__() {
  let $instance = new ReverseNibbles();
  $instance.$ctor__java_lang_Integer_ReverseNibbles__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Integer_ReverseNibbles__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Array<number>} */
 static get f_reverseNibbles__java_lang_Integer_ReverseNibbles_() {
  return (ReverseNibbles.$clinit(), ReverseNibbles.$static_reverseNibbles__java_lang_Integer_ReverseNibbles_);
 }
 /** @nodts */
 static set f_reverseNibbles__java_lang_Integer_ReverseNibbles_(/** Array<number> */ value) {
  (ReverseNibbles.$clinit(), ReverseNibbles.$static_reverseNibbles__java_lang_Integer_ReverseNibbles_ = value);
 }
 /** @nodts */
 static $clinit() {
  ReverseNibbles.$clinit = () =>{};
  ReverseNibbles.$loadModules();
  j_l_Object.$clinit();
  ReverseNibbles.$static_reverseNibbles__java_lang_Integer_ReverseNibbles_ = /**@type {!Array<number>}*/ ($Arrays.$init([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], $$int));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ReverseNibbles;
 }
 
 /** @nodts */
 static $loadModules() {
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@private {Array<number>} @nodts*/
ReverseNibbles.$static_reverseNibbles__java_lang_Integer_ReverseNibbles_;
$Util.$setClassMetadata(ReverseNibbles, 'java.lang.Integer$ReverseNibbles');

exports = ReverseNibbles;

//# sourceMappingURL=Integer$ReverseNibbles.js.map
