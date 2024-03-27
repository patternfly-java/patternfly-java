goog.module('java.util.EnumMap.EntrySet');

goog.require('java.lang.Enum');
goog.require('java.util.AbstractSet');
goog.require('java.util.EnumMap');
goog.require('java.util.EnumMap.EntrySetIterator');
goog.require('java.util.Iterator');
goog.require('java.util.Map.Entry');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const EntrySet = goog.require('java.util.EnumMap.EntrySet$impl');
exports = EntrySet;
