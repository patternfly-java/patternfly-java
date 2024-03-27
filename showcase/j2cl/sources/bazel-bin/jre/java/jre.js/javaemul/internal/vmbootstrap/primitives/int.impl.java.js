// GENERATED CODE! Edit jre/java/javaemul/internal/vmbootstrap/primitives/primitive.impl.java.js.template instead!
goog.module('vmbootstrap.primitives.$int$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const java_lang_Integer = goog.require('java.lang.Integer$impl');


/**
 * Placeholder class definition for the primitive class int.
 *
 * Non-instantiable.
 */
class $int {
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
$int.$initialArrayValue = 0;


$Util.$setClassMetadataForPrimitive($int, java_lang_Integer, 'int', 'I');


/**
 * Exported class.
 */
exports = $int;
