goog.module('java.util.Collections.UnmodifiableMap');

goog.require('java.lang.Object');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Collection');
goog.require('java.util.Collections.UnmodifiableCollection');
goog.require('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet');
goog.require('java.util.Collections.UnmodifiableSet');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.Set');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.BiFunction');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const UnmodifiableMap = goog.require('java.util.Collections.UnmodifiableMap$impl');
exports = UnmodifiableMap;
