goog.module('org.jboss.elemento.ElementsBag.IterableImpl');

goog.require('elemental2.core.JsArray.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');

const IterableImpl = goog.require('org.jboss.elemento.ElementsBag.IterableImpl$impl');
exports = IterableImpl;
