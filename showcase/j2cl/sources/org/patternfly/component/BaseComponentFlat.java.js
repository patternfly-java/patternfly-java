goog.module('org.patternfly.component.BaseComponentFlat');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventTarget.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.util.Objects');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.ClassList');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.Finder');
goog.require('org.jboss.elemento.HasElement');
goog.require('org.jboss.elemento.HasHTMLElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.Component');
goog.require('org.patternfly.component.ComponentStore');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.Ouia');
goog.require('vmbootstrap.Casts');

const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
exports = BaseComponentFlat;
