goog.module('java.util.LinkedHashMap');

goog.require('java.util.HashMap');
goog.require('java.util.LinkedHashMap.ChainEntry');
goog.require('java.util.LinkedHashMap.EntrySet');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.Objects');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const LinkedHashMap = goog.require('java.util.LinkedHashMap$impl');
exports = LinkedHashMap;
