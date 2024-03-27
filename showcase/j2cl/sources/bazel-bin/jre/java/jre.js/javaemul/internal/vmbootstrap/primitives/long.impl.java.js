// GENERATED CODE! Edit jre/java/javaemul/internal/vmbootstrap/primitives/primitive.impl.java.js.template instead!
goog.module('vmbootstrap.primitives.$long$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const java_lang_Long = goog.require('java.lang.Long$impl');
const Long = goog.require('nativebootstrap.Long$impl');


/**
 * Placeholder class definition for the primitive class long.
 *
 * Non-instantiable.
 */
class $long {
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
 * @public {Long}
 */
$long.$initialArrayValue = Long.fromInt(0);


$Util.$setClassMetadataForPrimitive($long, java_lang_Long, 'long', 'J');


/**
 * Exported class.
 */
exports = $long;
