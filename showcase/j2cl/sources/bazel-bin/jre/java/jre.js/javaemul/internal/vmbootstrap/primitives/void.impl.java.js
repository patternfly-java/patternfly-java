// GENERATED CODE! Edit jre/java/javaemul/internal/vmbootstrap/primitives/primitive.impl.java.js.template instead!
goog.module('vmbootstrap.primitives.$void$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const java_lang_Void = goog.require('java.lang.Void$impl');


/**
 * Placeholder class definition for the primitive class void.
 *
 * Non-instantiable.
 */
class $void {
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
$void.$initialArrayValue = 0;


$Util.$setClassMetadataForPrimitive($void, java_lang_Void, 'void', '_');


/**
 * Exported class.
 */
exports = $void;
