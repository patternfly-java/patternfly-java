goog.module('org.treblereel.j2cl.processors.common.injectors.ScriptInjector');

goog.require('elemental2.core.Reflect.$Overlay');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLDocument.$Overlay');
goog.require('elemental2.dom.HTMLScriptElement.$Overlay');
goog.require('elemental2.dom.Window.$Overlay');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const ScriptInjector = goog.require('org.treblereel.j2cl.processors.common.injectors.ScriptInjector$impl');
exports = ScriptInjector;
