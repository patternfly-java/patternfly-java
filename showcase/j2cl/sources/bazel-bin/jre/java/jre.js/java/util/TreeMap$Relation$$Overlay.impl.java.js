goog.module('java.util.TreeMap.Relation.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const $Enums = goog.require('vmbootstrap.Enums$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Relation = goog.forwardDeclare('java.util.TreeMap.Relation$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Enums_BoxedComparableLightEnum = goog.forwardDeclare('vmbootstrap.Enums.BoxedComparableLightEnum$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?Relation} */
 static m_forOrder__$devirt__java_util_TreeMap_Relation__boolean__java_util_TreeMap_Relation(/** !Relation */ $thisArg, /** boolean */ ascending) {
  $Overlay.$clinit();
  if (ascending) {
   return $thisArg;
  }
  switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object($thisArg)) {
   case Relation.LOWER: 
    return Relation.HIGHER;
   case Relation.FLOOR: 
    return Relation.CEILING;
   case Relation.CEILING: 
    return Relation.FLOOR;
   case Relation.HIGHER: 
    return Relation.LOWER;
   default: 
    throw $Exceptions.toJs(IllegalStateException.$create__());
  }
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return $Enums.isInstanceOf(instance, $Overlay);
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Relation = goog.module.get('java.util.TreeMap.Relation$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'java.util.TreeMap$Relation');

exports = $Overlay;

//# sourceMappingURL=TreeMap$Relation$$Overlay.js.map
