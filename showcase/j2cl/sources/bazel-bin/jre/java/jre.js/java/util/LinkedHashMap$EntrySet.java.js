goog.module('java.util.LinkedHashMap.EntrySet');

goog.require('java.util.AbstractSet');
goog.require('java.util.Iterator');
goog.require('java.util.LinkedHashMap');
goog.require('java.util.LinkedHashMap.EntrySet.EntryIterator');
goog.require('java.util.Map.Entry');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const EntrySet = goog.require('java.util.LinkedHashMap.EntrySet$impl');
exports = EntrySet;
