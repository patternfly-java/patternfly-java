goog.module('java.util.concurrent.ConcurrentHashMap');

goog.require('java.util.AbstractMap');
goog.require('java.util.Collections');
goog.require('java.util.Enumeration');
goog.require('java.util.HashMap');
goog.require('java.util.HashSet');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.Set');
goog.require('java.util.concurrent.ConcurrentMap');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Objects');

const ConcurrentHashMap = goog.require('java.util.concurrent.ConcurrentHashMap$impl');
exports = ConcurrentHashMap;
