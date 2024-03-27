goog.module('java.util.AbstractHashMap.EntrySet');

goog.require('java.util.AbstractHashMap');
goog.require('java.util.AbstractHashMap.EntrySetIterator');
goog.require('java.util.AbstractSet');
goog.require('java.util.Iterator');
goog.require('java.util.Map.Entry');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const EntrySet = goog.require('java.util.AbstractHashMap.EntrySet$impl');
exports = EntrySet;
