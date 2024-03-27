goog.module('elemental2.core.Atomics.SubTypedArrayUnionType.$Overlay');

goog.require('elemental2.core.BigInt64Array.$Overlay');
goog.require('elemental2.core.BigUint64Array.$Overlay');
goog.require('elemental2.core.Int16Array.$Overlay');
goog.require('elemental2.core.Int32Array.$Overlay');
goog.require('elemental2.core.Int8Array.$Overlay');
goog.require('elemental2.core.Uint16Array.$Overlay');
goog.require('elemental2.core.Uint32Array.$Overlay');
goog.require('elemental2.core.Uint8Array.$Overlay');
goog.require('jsinterop.base.Js');
goog.require('vmbootstrap.Casts');

const $Overlay = goog.require('elemental2.core.Atomics.SubTypedArrayUnionType.$Overlay$impl');
/** @nodts */
exports = $Overlay;
