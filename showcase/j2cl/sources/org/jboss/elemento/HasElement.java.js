goog.module('org.jboss.elemento.HasElement');

goog.require('elemental2.dom.Document.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventTarget.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Boolean');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsArrayLike.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.ClassList');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.Id');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('vmbootstrap.Casts');

const HasElement = goog.require('org.jboss.elemento.HasElement$impl');
exports = HasElement;
