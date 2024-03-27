goog.module('java.util.concurrent.atomic.AtomicReferenceArray');

goog.require('java.lang.Object');
goog.require('java.util.ArrayList');
goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Objects');

const AtomicReferenceArray = goog.require('java.util.concurrent.atomic.AtomicReferenceArray$impl');
exports = AtomicReferenceArray;
