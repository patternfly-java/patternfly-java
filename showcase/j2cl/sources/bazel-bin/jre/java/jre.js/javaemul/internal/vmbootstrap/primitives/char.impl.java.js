// GENERATED CODE! Edit jre/java/javaemul/internal/vmbootstrap/primitives/primitive.impl.java.js.template instead!
goog.module('vmbootstrap.primitives.$char$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const java_lang_Character = goog.require('java.lang.Character$impl');


/**
 * Placeholder class definition for the primitive class char.
 *
 * Non-instantiable.
 */
class $char {
  /**
   * Defines instance fields.
   */
  constructor() {}

  /**
   * Returns whether the provided instance is an instance of this class.
   * Note that this always return true, because it is only used for ArrayStoreException
   * purposes which never happens for primitive arrays as they are compile time checked.
   *
   * @param {*} instance
   * @return {boolean}
   * @public
   */
  static $isInstance(instance) { return true; }
};


/**
 * @nocollapse
 * @public {number}
 */
$char.$initialArrayValue = 0;


$Util.$setClassMetadataForPrimitive($char, java_lang_Character, 'char', 'C');


/**
 * Exported class.
 */
exports = $char;
