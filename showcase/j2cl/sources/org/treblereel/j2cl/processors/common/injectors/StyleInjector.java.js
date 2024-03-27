goog.module('org.treblereel.j2cl.processors.common.injectors.StyleInjector');

goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDocument.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLStyleElement.$Overlay');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const StyleInjector = goog.require('org.treblereel.j2cl.processors.common.injectors.StyleInjector$impl');
exports = StyleInjector;
