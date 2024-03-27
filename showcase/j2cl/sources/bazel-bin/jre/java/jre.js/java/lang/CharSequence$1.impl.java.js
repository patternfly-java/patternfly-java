goog.module('java.lang.CharSequence.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const OfInt = goog.require('java.util.PrimitiveIterator.OfInt$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');

/**
 * @implements {OfInt}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {(CharSequence|string)} @nodts*/
  this.$outer_this__java_lang_CharSequence_1;
  /**@type {number} @nodts*/
  this.f_cursor__java_lang_CharSequence_1 = 0;
 }
 /** @nodts @return {!$1} */
 static $create__java_lang_CharSequence(/** (CharSequence|string) */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_lang_CharSequence_1__java_lang_CharSequence__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_CharSequence_1__java_lang_CharSequence__void(/** (CharSequence|string) */ $outer_this) {
  this.$outer_this__java_lang_CharSequence_1 = $outer_this;
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts @return {number} */
 m_nextInt__int() {
  let /** number */ $value;
  InternalPreconditions.m_checkElement__boolean__void(this.m_hasNext__boolean());
  return $CharSequences.m_charAt__java_lang_CharSequence__int__char(this.$outer_this__java_lang_CharSequence_1, ($value = this.f_cursor__java_lang_CharSequence_1, this.f_cursor__java_lang_CharSequence_1 = this.f_cursor__java_lang_CharSequence_1 + 1 | 0, $value));
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_cursor__java_lang_CharSequence_1 < $CharSequences.m_length__java_lang_CharSequence__int(this.$outer_this__java_lang_CharSequence_1);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  OfInt.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfInt__java_util_function_Consumer__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Integer} */
 m_next__java_lang_Object() {
  return OfInt.m_next__$default__java_util_PrimitiveIterator_OfInt__java_lang_Integer(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_remove__void() {
  Iterator.m_remove__$default__java_util_Iterator__void(this);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_forEachRemaining__java_lang_Object__void(/** IntConsumer */ arg0) {
  OfInt.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfInt__java_util_function_IntConsumer__void(this, /**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_IntConsumer__void(/** IntConsumer */ arg0) {
  OfInt.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfInt__java_util_function_IntConsumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Integer} */
 m_next__java_lang_Integer() {
  return OfInt.m_next__$default__java_util_PrimitiveIterator_OfInt__java_lang_Integer(this);
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  OfInt.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterator = goog.module.get('java.util.Iterator$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
 }
}
OfInt.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.lang.CharSequence$1');

exports = $1;

//# sourceMappingURL=CharSequence$1.js.map
